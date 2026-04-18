# Astro Starter — Development Guide

## Tech stack

- **Astro 5.6** — static site generator, `.astro` components
- **Tailwind CSS v4** — used for design tokens only (`@theme` block), not utility classes
- **TypeScript** — strict mode; all config is typed
- **Decap CMS** — optional, writes to `src/data/*.json`

## File map

```
src/content/site.config.ts   ← THE ONE FILE — edit this for every new client
src/types/index.ts           ← TypeScript interfaces for all config shapes
src/data/*.json              ← CMS-written overrides (empty {} by default)
src/layouts/Layout.astro     ← meta tags, JSON-LD, skip link, fonts
src/pages/index.astro        ← section registry (add/remove sections here)
src/components/sections/     ← full-page sections, import from site.config
src/components/primitives/   ← reusable atoms: Button, SectionTag, Card, Section
src/styles/global.css        ← semantic design tokens + animation system
```

## Common tasks

**Change the primary CTA across all 6 locations:**
```ts
// src/content/site.config.ts
export const primaryCTA: CTAConfig = {
  type:    'whatsapp',   // whatsapp | calendly | phone | email | url
  value:   '+15551234567',
  label:   'Book a free call',
  message: 'Hi, I would like to book a consultation.',
};
```

**Switch to Calendly:**
```ts
export const primaryCTA: CTAConfig = {
  type:  'calendly',
  value: 'https://calendly.com/yourname/30min',
  label: 'Book a free call',
};
```

**Add a new section:**
1. Create `src/components/sections/NewSection.astro`
2. Add its config export to `src/content/site.config.ts`
3. Import and add it to `src/pages/index.astro`

**Change the theme:**
Edit the `@theme` block in `src/styles/global.css`. All semantic tokens:
```css
--color-primary, --color-primary-hover
--color-surface, --color-surface-alt
--color-text, --color-text-muted
--color-accent, --color-accent-light
--color-emphasis, --color-decorative
```

**Heading with italic emphasis:**
```ts
heading: 'Achieve <em>remarkable results</em> today.'
// In .astro: <h2 set:html={section.heading} />
// In CSS:    .heading :global(em) { color: var(--color-emphasis); }
```

## Section map

| File | Config export | Anchor |
|---|---|---|
| Nav.astro | navigation, primaryCTA | — |
| Hero.astro | hero, primaryCTA, secondaryCTA | — |
| PainPoints.astro | painPoints | #pain-points |
| About.astro | about, primaryCTA | #about |
| HowItWorks.astro | process, primaryCTA | #how-it-works |
| Services.astro | services, primaryCTA | #services |
| Approach.astro | approach, primaryCTA | #approach |
| Testimonials.astro | testimonials, primaryCTA | #testimonials |
| Contact.astro | contact, primaryCTA | #contact |
| Footer.astro | site, navigation, contact, footer, primaryCTA | — |

## Design tokens — semantic roles

| Token | Role |
|---|---|
| `--color-primary` | Buttons, headings, nav — the brand color |
| `--color-surface` | Page background |
| `--color-surface-alt` | Borders, alternate section backgrounds |
| `--color-accent` | Section tags, focus rings, checkmarks |
| `--color-emphasis` | Italic highlights, decorative arrows |
| `--color-decorative` | Stars, badge icons |

## Commands

```bash
npm run dev      # start dev server → http://localhost:4321
npm run build    # build to /dist
npm run preview  # preview production build
```
