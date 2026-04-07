# Guangzhou Boying Garment Website

Professional bilingual company website for `Guangzhou Boying Garment Co Ltd`, built with Next.js and Tailwind CSS for Vercel deployment.

## Features

- Modern responsive homepage with premium fashion-manufacturer positioning
- Bilingual content with English-first messaging and Chinese support
- Six core pages:
  - Home
  - About Us
  - Products
  - OEM ODM Service
  - Factory Quality Control
  - Contact
- Sample product data ready for demo use
- Placeholder image system that is easy to replace later
- SEO metadata, `robots.txt`, and `sitemap.xml`
- Inquiry form with a Vercel-ready API route
- `vercel.json` included for one-click deployment

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- TypeScript

## Project Structure

```text
src/
  app/
    about/
    api/inquiry/
    contact/
    factory-quality-control/
    oem-odm-service/
    products/
    globals.css
    layout.tsx
    page.tsx
    robots.ts
    sitemap.ts
  components/
    contact-form.tsx
    placeholder-image.tsx
    product-grid.tsx
    section-heading.tsx
    site-footer.tsx
    site-header.tsx
  data/
    products.ts
    site.ts
  lib/
    metadata.ts
public/
  placeholders/
vercel.json
```

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Production Build

```bash
npm run lint
npm run build
npm run start
```

Note:
The build script uses `next build --webpack` because Turbopack can fail in Windows folders containing non-ASCII characters.

## One-Click Deploy to Vercel

### Option 1: Deploy from GitHub

1. Push this project to a GitHub repository.
2. Open [Vercel](https://vercel.com/new).
3. Import the repository.
4. Vercel will detect Next.js automatically.
5. Click `Deploy`.

### Option 2: Deploy with Vercel CLI

```bash
npm install -g vercel
vercel
```

For production deployment:

```bash
vercel --prod
```

## Content Updates

### Company info

Update the company profile, contact details, navigation, workflow, and strengths in:

- `src/data/site.ts`

### Product categories and sample SKUs

Update product categories and sample product data in:

- `src/data/products.ts`

### Replace placeholder images

Add real images into `public/` and update image paths in:

- `src/data/products.ts`
- page files in `src/app/`

## Form Handling

The inquiry form currently posts to:

- `src/app/api/inquiry/route.ts`

This endpoint is a working placeholder. You can connect it later to:

- Email delivery
- CRM
- Airtable
- Notion
- Supabase
- HubSpot

## Placeholder Links

The project includes valid placeholder links for:

- WhatsApp
- Email
- Alibaba
- Internal page CTAs

Before launch, replace these values in `src/data/site.ts` with real business links and contact details.
