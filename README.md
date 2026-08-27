# Auro Technology Group - Website Redesign

Modern, performant B2B website for Auro Technology Group built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## Tech Stack

- **Framework:** Next.js 15+ (App Router, TypeScript)
- **Styling:** Tailwind CSS + Lucide React icons
- **Database:** Supabase (PostgreSQL)
- **Hosting:** Vercel
- **Security:** Cloudflare Turnstile (bot detection)
- **Email:** Resend
- **CI/CD:** GitHub Actions

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Local Development

1. **Clone the repository:**
```bash
git clone <repository-url>
cd atg2.0
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
```bash
cp .env.example .env.local
```

Then edit `.env.local` with your actual values:
- Supabase credentials (from Supabase dashboard)
- Cloudflare Turnstile keys (from Cloudflare dashboard)
- Resend API key
- Notification email for lead submissions

4. **Run the development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Configuration

### Supabase Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Create a `leads` table with the following schema:
```sql
CREATE TABLE leads (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email TEXT NOT NULL,
  name TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

3. Copy your project URL and anon key from Supabase → Settings → API

### Cloudflare Turnstile Setup

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Turnstile
2. Create a new site and get your Site Key and Secret Key
3. Add them to your `.env.local`

### Resend Setup

1. Sign up at [Resend.com](https://resend.com)
2. Create an API key
3. Add it to your `.env.local`

## Deployment

### Connect to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and import your repository
3. Add environment variables in Vercel dashboard (same as `.env.local`)
4. Vercel will automatically deploy on every push to `main`

### GitHub Actions

The project includes a CI/CD workflow (`.github/workflows/ci.yml`) that:
- Runs on every push and pull request
- Lints code with ESLint
- Type-checks with TypeScript
- Builds the project
- Reports results

## Project Structure

```
src/
├── app/              # Next.js App Router pages and layout
├── components/       # Reusable React components
├── actions/          # Server Actions for form submissions
├── lib/             # Utility functions and helpers
└── styles/          # Global styles
```

## Key Components

- **Navbar:** Sticky header with navigation
- **HeroSection:** Main value prop and CTA
- **ServicesBento:** 4-column services grid
- **AssessmentForm:** Lead capture with Turnstile integration
- **ProcessTimeline:** 4-step onboarding roadmap
- **Footer:** Links and contact info

## Development Workflow

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make changes and commit
3. Push to GitHub: `git push origin feature/your-feature`
4. Create a pull request
5. Vercel will create a preview deployment
6. Once approved, merge to `main` for production deployment

## Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Run ESLint
npm run type-check # Run TypeScript checks
```

## License

© 2026 Auro Technology Group. All rights reserved.
