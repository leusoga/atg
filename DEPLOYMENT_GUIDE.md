# Deployment Guide: Auro Technology Group Website

This guide walks you through deploying the Auro Tech Group website to production via GitHub and Vercel.

## Prerequisites

- GitHub account and repository access
- Vercel account (free tier available)
- Supabase project
- Cloudflare account (for Turnstile)
- Resend account (for email)

## Step 1: Push to GitHub

### 1.1 Initialize Git Remote
```bash
cd atg2.0
git remote add origin https://github.com/YOUR_USERNAME/atg2.0.git
git branch -M main
git push -u origin main
```

### 1.2 Set Up GitHub Secrets for CI/CD
The CI/CD workflow will run on every push. No additional setup needed — it will lint, type-check, and build.

## Step 2: Set Up Supabase

### 2.1 Create Project
1. Go to [supabase.com](https://supabase.com) and sign in
2. Click "New Project"
3. Select your organization, enter a name, database password, and region
4. Wait for the project to be created

### 2.2 Create Leads Table
In Supabase dashboard, go to **SQL Editor** and run:

```sql
CREATE TABLE leads (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email TEXT NOT NULL,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow inserts (for unauthenticated submissions)
CREATE POLICY "Allow public insert" ON leads
  FOR INSERT
  WITH CHECK (true);
```

### 2.3 Get API Credentials
1. Go to **Settings → API**
2. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role key** → `SUPABASE_SERVICE_ROLE_KEY`

## Step 3: Set Up Cloudflare Turnstile

### 3.1 Create Site
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Turnstile**
2. Click "Create Site"
3. Enter:
   - **Domain name:** aurotechgroup.com
   - **Mode:** Managed
   - **Widget Mode:** Non-Interactive
4. Click "Create"

### 3.2 Get Keys
Copy:
- **Site Key** → `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
- **Secret Key** → `TURNSTILE_SECRET_KEY`

## Step 4: Set Up Resend

### 4.1 Create API Key
1. Go to [Resend.com](https://resend.com) and sign in
2. Go to **API Keys** in the dashboard
3. Click "Create API Key"
4. Copy the key → `RESEND_API_KEY`

### 4.2 Verify Sender Domain (Optional but Recommended)
1. Go to **Domains** in Resend
2. Add your domain and follow verification instructions
3. Update emails in the app to use your domain

## Step 5: Deploy to Vercel

### 5.1 Connect Vercel
1. Go to [Vercel.com](https://vercel.com) and sign in
2. Click "Add New → Project"
3. Select your GitHub repository
4. Click "Import"

### 5.2 Configure Environment Variables
In the Vercel project settings, go to **Settings → Environment Variables** and add:

```
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVICE_ROLE_KEY
NEXT_PUBLIC_TURNSTILE_SITE_KEY=YOUR_SITE_KEY
TURNSTILE_SECRET_KEY=YOUR_SECRET_KEY
RESEND_API_KEY=YOUR_RESEND_KEY
NOTIFICATION_EMAIL=admin@auronetworks.com
NODE_ENV=production
```

**Note:** Mark public keys (starting with `NEXT_PUBLIC_`) as "Exposed" if not already marked.

### 5.3 Deploy
1. Click "Deploy"
2. Vercel will automatically build and deploy your site
3. Your site will be available at `https://atg2.0.vercel.app`

### 5.4 Configure Custom Domain
1. In Vercel project, go to **Settings → Domains**
2. Add `aurotechgroup.com`
3. Follow DNS configuration instructions (update nameservers to Vercel's)
4. Update Cloudflare Turnstile to include your custom domain

## Step 6: Connect to Your Domain (Cloudflare)

### 6.1 Update DNS
If using Cloudflare:
1. Go to Cloudflare → Your Domain → **DNS**
2. Add/update CNAME record:
   - Name: `www`
   - Content: `cname.vercel-dns.com`
3. Add root domain (if needed):
   - Name: `@`
   - Content: `76.76.19.165` (or use Vercel's A records)

### 6.2 SSL/HTTPS
Vercel and Cloudflare handle SSL automatically. Ensure **SSL/TLS → Full** in Cloudflare.

## Step 7: Test Everything

### 7.1 Test Form Submission
1. Visit your site
2. Scroll to "Assessment Form"
3. Fill out form and submit
4. Verify:
   - ✅ Success message appears
   - ✅ Email notification sent to `NOTIFICATION_EMAIL`
   - ✅ Data saved in Supabase `leads` table

### 7.2 Test Turnstile
Ensure the captcha widget appears and works (check browser console for errors).

### 7.3 Verify Performance
Use [Vercel Analytics](https://vercel.com/analytics) to monitor:
- Page load times
- Core Web Vitals
- Traffic and errors

## Troubleshooting

### Form not submitting?
1. Check browser console for errors
2. Verify Supabase credentials in Vercel
3. Verify Turnstile site key
4. Check Supabase logs for database errors

### Email not sending?
1. Verify `RESEND_API_KEY` is correct
2. Check `NOTIFICATION_EMAIL` is valid
3. Verify sender domain if using custom domain

### Captcha not appearing?
1. Verify `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is correct
2. Check browser console for `Failed to load Turnstile` errors
3. Ensure domain is added to Turnstile in Cloudflare

### Build failing on Vercel?
1. Check **Vercel → Deployments → Logs**
2. Verify all environment variables are set
3. Ensure Node version is 18+ (set in `vercel.json` if needed)

## Monitoring

### Set Up Email Alerts
1. **Vercel:** Settings → Notifications → Email alerts for build failures
2. **Supabase:** Settings → Alerts (optional)

### Monitor Form Submissions
1. Go to Supabase → `leads` table
2. Review new submissions
3. Respond to leads via email or phone

## Updating the Site

### Deploy Changes
1. Make changes to code locally
2. Commit: `git commit -m "message"`
3. Push: `git push origin main`
4. Vercel automatically builds and deploys
5. Monitor build in Vercel dashboard

### Environment Variable Updates
1. Update in Vercel project settings
2. Trigger a redeployment from Vercel dashboard

## Going Live Checklist

- ✅ GitHub repository created and code pushed
- ✅ Supabase project created with `leads` table
- ✅ Cloudflare Turnstile site created
- ✅ Resend API key generated
- ✅ All environment variables added to Vercel
- ✅ Custom domain configured (DNS pointing to Vercel)
- ✅ SSL/HTTPS working
- ✅ Form submission tested end-to-end
- ✅ Email notifications tested
- ✅ Analytics configured
- ✅ Vercel preview builds working
- ✅ Production build passes CI/CD

## Support

For issues:
- **Next.js:** https://nextjs.org/docs
- **Vercel:** https://vercel.com/support
- **Supabase:** https://supabase.com/docs
- **Cloudflare Turnstile:** https://developers.cloudflare.com/turnstile/
- **Resend:** https://resend.com/docs
