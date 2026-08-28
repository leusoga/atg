# Project Checkpoint — Auro Technology Group Website

**Last updated:** 2026-08-28
**Latest commit:** `8e36841` — "Rebrand navbar/footer wordmark from Auro Networks to Auro Technology Group"
**Status:** Awaiting Vercel deployment confirmation for the latest commit (not yet visually verified live)

---

## What This Project Is

Rebuild of the Auro Technology Group marketing website (previously WordPress at aurotechgroup.com), migrating to Next.js App Router. Content/copy extracted from the original site; visual design aesthetically inspired by propersky.com (Obsidian & Amber theme, approved in Phase 1).

## Repositories & Accounts

- **GitHub:** [leusoga/atg](https://github.com/leusoga/atg) (public repo, `main` branch) — logged in as `ian@auronetworks.com`
  - **Note:** an earlier abandoned attempt lives at `sirfatale/atg` (private GitHub account) — that repo is stale/unused, all real work is in `leusoga/atg`.
- **Vercel:** connected to `leusoga/atg`, deploying from `main`. Live URL: `https://atg20.vercel.app/`
- **Supabase project:** `uuzwqgsxqhfyqmvhuulh` — `leads` table created, RLS policy allows public insert.
- **Resend:** API key configured in Vercel env vars.
- **Cloudflare Turnstile:** **not yet set up.** Ian's domain is on Namecheap nameservers and he doesn't want to migrate to Cloudflare nameservers (would affect live email/other services). The `AssessmentForm` component has Turnstile widget code wired up client-side and the server action (`lead-capture.ts`) verifies the token server-side, but `NEXT_PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` are not set in Vercel — **form submission will currently fail bot verification until this is resolved or Turnstile is removed/bypassed.**

### Environment variables (set in Vercel — values NOT duplicated here for security)
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
RESEND_API_KEY
NOTIFICATION_EMAIL          → info@auronetworks.com
NEXT_PUBLIC_TURNSTILE_SITE_KEY   ← NOT SET YET
TURNSTILE_SECRET_KEY             ← NOT SET YET
```

---

## Tech Stack (as actually implemented)

- Next.js 16 (App Router, TypeScript), React 19
- Tailwind CSS v4 — **theme colors defined via `@theme` block in `src/app/globals.css`, NOT `tailwind.config.ts`** (see Gotchas below; the config file was deleted)
- Framer Motion 13.x (`Reveal` component for scroll animations)
- Supabase (`@supabase/supabase-js`) for lead storage
- Resend for email notifications
- Cloudflare Turnstile for bot detection (wired up, not activated — see above)
- Zod for form validation
- No icon library — all icons are inline SVG (lucide-react was tried and dropped; see Gotchas)
- next/image with `images.unsplash.com` remote pattern for stock photography

## Brand

- Company name: **Auro Technology Group** (display/wordmark) — as of commit `8e36841`
- Real email domain: **auronetworks.com** (unchanged, e.g. `info@auronetworks.com`) — this is intentional, not an inconsistency
- Theme: Obsidian & Amber — dark navy (`#0f1419`/`#1a1f29`/`#252b38`) + amber accent (`#f59e0b`/`#fbbf24`/`#fcd34d`)
- Phone: 480-900-8030

## Component Inventory (`src/components/`)

- `Navbar.tsx` — sticky, glassmorphism on scroll, mobile menu
- `HeroSection.tsx` — two-column (headline+CTA left, Unsplash photo right), abstract blob + dot-grid background art
- `ServicesBento.tsx` — full-width featured card (Cybersecurity) + 3-card row below (Cloud, Backup, VoIP)
- `AudienceSegmentation.tsx` — Fully Managed / Co-Managed / Cybersecurity engagement tracks
- `ProcessTimeline.tsx` — 4-step process (Assess/Plan/Deploy/Support)
- `ComparisonSection.tsx` — "Auro vs typical IT providers" trust table
- `AssessmentForm.tsx` — lead capture form + Turnstile + Unsplash photo panel, calls `src/actions/lead-capture.ts`
- `Footer.tsx`
- `ui/BlobBackground.tsx`, `ui/DotGrid.tsx` — original SVG decorative art (not copied assets)
- `ui/Reveal.tsx` — Framer Motion scroll-reveal wrapper

`src/app/page.tsx` composes all of the above plus an inline Philosophy section (image + stacked cards) and a CTA banner.

## Stock Photography In Use

All verified individually as free under the standard Unsplash License (not Unsplash+/Getty premium) before use:
1. Hero — diverse team meeting, photographer Vitaly Gariev
2. Philosophy section — IT professional at a workstation, photographer Arif Riyanto
3. Assessment form — two colleagues high-fiving, photographer krakenimages

---

## Known Gotchas / Hard-Won Lessons (read before touching build config again)

1. **Tailwind v4 does not read `tailwind.config.ts` automatically.** Custom colors/utilities must go in a `@theme { --color-x: ... }` block inside `src/app/globals.css`. This caused a full silent theme failure (deployed successfully, but every custom color class rendered as nothing) that wasn't caught until Ian screenshotted the live site.
2. **Local `npm install` is unreliable in this directory** because it's Google-Drive-synced (`G:\My Drive\...`) — installs intermittently fail with `TAR_ENTRY_ERROR` from file-locking. Local `next dev`/`next build`/`tsc` cannot be trusted here. **Verification method that actually works:** manually read every touched file end-to-end checking for (a) undefined identifiers, (b) invalid props on custom components (e.g. passing `size`/`className` to a bare SVG wrapper function that doesn't accept them), (c) inconsistent object shapes in arrays that could cause TS union-type access errors — then push and read the real Vercel build log.
3. **lucide-react was removed entirely** — its React peer dependency range didn't include React 19, causing an ERESOLVE npm failure on Vercel. All icons are now hand-written inline SVGs.
4. **Two different Vercel/GitHub account pairs got tangled early on.** `sirfatale`/GitHub private repo hit "Hobby plan doesn't support private-repo collaboration" (commit author ≠ repo owner). Resolved by creating a fresh `leusoga` GitHub account (Ian's business email) + fresh Vercel account under the same email, and re-pushing the full history there. `leusoga/atg` is the only repo that matters now.
5. **Never lift a reference site's actual copy while chasing its aesthetic.** An early redesign pass accidentally copied Proper Sky's verbatim headline ("Elevate your IT, get freedom to focus."), CTA text ("Freedom Starts Here"), and process-step naming ("Learn/Plan/Implement/Grow"). Caught via grep before pushing; rewritten in Auro's own voice. Always grep the diff against the reference site's extracted text before committing a "visually inspired by X" pass.
6. **Vercel's "Redeploy" button can redeploy a stale/previous commit**, not necessarily the one you just pushed — always check the commit hash shown in the build log matches `git ls-remote origin main` before trusting a build result.

---

## Immediate Next Steps

1. **Get the current Vercel build log for commit `8e36841`** and confirm it succeeds — not yet done as of this checkpoint.
2. **Visually verify the live site** matches intent (last screenshot Ian sent showed a bento-grid layout bug, since fixed in `af90240` — needs re-confirmation live).
3. **Resolve Turnstile.** Either: get Ian a Turnstile site working without a nameserver migration (Cloudflare may allow site verification via a TXT/meta-tag method instead of full nameserver delegation — worth checking), or temporarily strip Turnstile enforcement from `lead-capture.ts`/`AssessmentForm.tsx` so the form isn't silently broken in production.
4. **Custom domain** (aurotechgroup.com or similar) not yet connected to Vercel.
5. Ian has not yet done a full end-to-end test of the assessment form (submit → Supabase row → email notification).

---

## How to Resume

Read this file first, then `git log --oneline -15` and `git status` to confirm nothing has drifted since `Last updated` above. Do not assume local `npm run build` will tell you the truth — trust the Vercel build log and manual code review instead.
