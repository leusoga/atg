'use client'

import { useState, useEffect } from 'react'
import { submitLead } from '@/actions/lead-capture'
import Reveal from '@/components/ui/Reveal'
import BlobBackground from '@/components/ui/BlobBackground'

const Loader2 = () => (
  <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.3" />
    <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
  </svg>
)

const CheckCircle2 = () => (
  <svg className="w-16 h-16 text-accent-primary" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
)

declare global {
  interface Window {
    turnstile: any
  }
}

export default function AssessmentForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [turnstileReady, setTurnstileReady] = useState(false)

  useEffect(() => {
    // Load Turnstile script
    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
    script.async = true
    script.defer = true
    script.onload = () => {
      setTurnstileReady(true)
    }
    document.head.appendChild(script)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    // Get Turnstile token
    const turnstileToken = window.turnstile?.getResponse()
    if (!turnstileToken) {
      setError('Please complete the bot verification')
      setIsLoading(false)
      return
    }

    const formData = new FormData(e.currentTarget)
    formData.append('turnstileToken', turnstileToken)

    const result = await submitLead(formData)

    if (result.success) {
      setIsSuccess(true)
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
        e.currentTarget.reset()
        window.turnstile?.reset()
      }, 3000)
    } else {
      setError(result.error || 'Failed to submit form. Please try again.')
      window.turnstile?.reset()
    }

    setIsLoading(false)
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28 bg-primary-bg">
      <BlobBackground className="absolute -bottom-40 -right-40 w-[560px] h-[560px] opacity-70" />
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <span className="text-accent-primary text-sm font-semibold tracking-wide uppercase">Get Started</span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-text mt-3 mb-4 tracking-tight">
              Ready to transform your IT?
            </h2>
            <p className="text-lg text-secondary-text">
              Get a free IT assessment from our experts
            </p>
          </div>
        </Reveal>

        {isSuccess ? (
          <div className="bg-secondary-bg border border-accent-primary rounded-2xl p-8 text-center">
            <div className="w-16 h-16 text-accent-primary mx-auto mb-4">
              <CheckCircle2 />
            </div>
            <h3 className="text-2xl font-bold text-primary-text mb-2">Thank You!</h3>
            <p className="text-secondary-text">
              We've received your assessment request. Our team will contact you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-secondary-bg border border-border-color rounded-2xl p-8 space-y-6 shadow-2xl shadow-black/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-primary-text font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-tertiary-bg border border-border-color rounded-lg text-primary-text placeholder-secondary-text focus:border-accent-primary focus:outline-none transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-primary-text font-semibold mb-2">
                  Business Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-tertiary-bg border border-border-color rounded-lg text-primary-text placeholder-secondary-text focus:border-accent-primary focus:outline-none transition"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-primary-text font-semibold mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-3 bg-tertiary-bg border border-border-color rounded-lg text-primary-text placeholder-secondary-text focus:border-accent-primary focus:outline-none transition"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-primary-text font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-tertiary-bg border border-border-color rounded-lg text-primary-text placeholder-secondary-text focus:border-accent-primary focus:outline-none transition"
                  placeholder="(480) 000-0000"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-primary-text font-semibold mb-2">
                Tell us about your IT challenges
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 bg-tertiary-bg border border-border-color rounded-lg text-primary-text placeholder-secondary-text focus:border-accent-primary focus:outline-none transition resize-none"
                placeholder="What IT issues are you facing?"
              />
            </div>

            {error && (
              <div className="bg-red-500 bg-opacity-10 border border-red-500 rounded-lg p-4">
                <p className="text-red-400">{error}</p>
              </div>
            )}

            {/* Turnstile Captcha */}
            {turnstileReady && (
              <div className="flex justify-center">
                <div
                  id="cf-turnstile"
                  data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                  data-theme="dark"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-8 py-3 bg-accent-primary text-primary-bg rounded-lg font-semibold hover:bg-accent-secondary transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 />
                  Submitting...
                </>
              ) : (
                'Get Your Free IT Assessment'
              )}
            </button>

            <p className="text-sm text-secondary-text text-center">
              We respect your privacy. Your information will only be used to contact you about your assessment.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
