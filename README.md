# Groupe Adequat UK — Website

Full-stack recruitment website for Groupe Adequat UK, built with Next.js 14 (App Router), Tailwind CSS, and Sanity CMS.

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| CMS / Jobs | Sanity.io |
| Forms / Email | React Hook Form + Resend |
| Deployment | Vercel |

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy `.env.local.example` to `.env.local` and fill in:

```bash
cp .env.local.example .env.local
```

Required variables:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` — from sanity.io
- `NEXT_PUBLIC_SANITY_DATASET` — usually `production`
- `SANITY_API_TOKEN` — read token from Sanity dashboard
- `RESEND_API_KEY` — from resend.com
- `RESEND_FROM_EMAIL` — verified sender email
- `RESEND_TO_EMAIL` — where form submissions go

### 3. Set up Sanity CMS

```bash
npm install -g @sanity/cli
sanity init --project groupe-adequat-uk
```

Copy the Project ID into `.env.local`, then deploy schemas:
```bash
sanity schema deploy
```

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/                   Next.js App Router pages
  page.tsx             Home
  about/               About page
  services/            Services + [service] dynamic pages
  sectors/             Sectors + [sector] dynamic pages
  employers/           Employer hub + enquiry form
  candidates/          Candidate hub + CV registration
  jobs/                Job listings + [slug] detail + apply
  solutions-driven/    Solutions Driven sub-brand page
  contact/             Contact page
  legal/               Privacy + Terms
  api/
    enquiry/           Form submission handler (→ Resend)
    jobs/              Jobs API (ATS integration point)
  sitemap.ts           Auto-generated sitemap
  robots.ts            robots.txt

components/
  layout/              NavBar, Footer
  home/                All homepage sections
  jobs/                JobCard, JobFilters, ApplyForm
  employers/           EnquiryForm
  candidates/          CVForm
  solutions-driven/    SD-specific components

lib/
  sanity/              Client, queries, types
  email/               Resend email helpers
  utils.ts             cn(), formatSalary(), formatDate()

sanity/schemas/        Sanity CMS schema definitions
```

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, services, sectors, featured jobs, SD spotlight |
| `/about` | Company story, values, group context |
| `/services` | All 4 services overview |
| `/services/[permanent\|contract\|executive\|rpo]` | Service detail pages |
| `/sectors` | All 4 sectors grid |
| `/sectors/[built-environment\|property\|engineering\|logistics]` | Sector detail pages |
| `/employers` | Employer hub + enquiry form |
| `/candidates` | Candidate hub + CV registration form |
| `/jobs` | Job listings with search + filters |
| `/jobs/[slug]` | Individual job detail + apply form |
| `/solutions-driven` | Solutions Driven sub-brand page (dark theme) |
| `/contact` | Contact form + office details |
| `/legal` | Privacy policy + terms |

## Design System

```css
Primary blue:  #066aab  (Groupe Adequat brand)
Dark navy:     #1a2d4a
Light accent:  #f0f4f8
SD dark:       #14181F  (Solutions Driven)
SD green:      #00A36D  (Solutions Driven accent)
```

## ATS Integration

The jobs API at `/api/jobs/route.ts` is designed as an integration point. To connect an ATS:

1. Add ATS credentials to `.env.local`
2. Replace the `getJobs()` call in `app/api/jobs/route.ts` with your ATS API client
3. Map the response to the `Job` type in `lib/sanity/types.ts`

The UI (job listing page, job cards, job detail) will work unchanged.

## Deployment

Deploy to Vercel:

```bash
npm install -g vercel
vercel --prod
```

Set all env variables in the Vercel dashboard under Project → Settings → Environment Variables.

**Recommended domain:** `groupeadequat.co.uk`
