'use server'

import { createClient } from '@supabase/supabase-js'
import { z } from 'zod'
import { Resend } from 'resend'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
)

const resend = new Resend(process.env.RESEND_API_KEY)

const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name is required'),
  phone: z.string().optional().default(''),
  message: z.string().optional().default(''),
  turnstileToken: z.string(),
})

type Lead = z.infer<typeof leadSchema>

async function verifyTurnstile(token: string): Promise<boolean> {
  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/validate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    })

    const data = await response.json()
    return data.success
  } catch (error) {
    console.error('Turnstile verification error:', error)
    return false
  }
}

export async function submitLead(formData: FormData) {
  try {
    // Extract form data
    const rawData = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      company: formData.get('company')?.toString() || '',
      phone: formData.get('phone')?.toString() || '',
      message: formData.get('message')?.toString() || '',
      turnstileToken: formData.get('turnstileToken')?.toString() || '',
    }

    // Validate schema
    const validatedData = leadSchema.parse(rawData)

    // Verify Turnstile token
    const isValidToken = await verifyTurnstile(validatedData.turnstileToken)
    if (!isValidToken) {
      return {
        success: false,
        error: 'Bot verification failed. Please try again.',
      }
    }

    // Insert into Supabase
    const { error: dbError } = await supabase.from('leads').insert([
      {
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company,
        phone: validatedData.phone || null,
        message: validatedData.message || null,
        created_at: new Date().toISOString(),
      },
    ])

    if (dbError) {
      console.error('Database error:', dbError)
      return {
        success: false,
        error: 'Failed to save your submission. Please try again.',
      }
    }

    // Send notification email to admin
    try {
      await resend.emails.send({
        from: 'noreply@auronetworks.com',
        to: process.env.NOTIFICATION_EMAIL || 'admin@auronetworks.com',
        subject: `New Lead: ${validatedData.company}`,
        html: `
          <h2>New Assessment Request</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Company:</strong> ${validatedData.company}</p>
          <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
          <p><strong>Message:</strong> ${validatedData.message || 'No message'}</p>
          <hr />
          <p><em>Submitted at: ${new Date().toISOString()}</em></p>
        `,
      })
    } catch (emailError) {
      console.error('Email notification error:', emailError)
      // Don't fail if email fails, as the lead was saved successfully
    }

    return {
      success: true,
      message: 'Assessment request submitted successfully.',
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors[0]?.message || 'Validation failed',
      }
    }

    console.error('Submission error:', error)
    return {
      success: false,
      error: 'An error occurred. Please try again later.',
    }
  }
}
