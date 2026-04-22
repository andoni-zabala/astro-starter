# Astro Starter

A domain-agnostic Astro 5.6 starter for building client websites. One config file, 30-minute setup, works for any service business.

## How it works

All content lives in `src/content/site.config.ts`. Change this file → every component updates automatically. No search-and-replace, no hunting through 10 files.

```
Edit site.config.ts → all sections update
Change primaryCTA once → 6 locations update
Swap @theme colors → entire visual identity changes
```

---

## 30-minute setup checklist

```bash
# 1. Clone and install
git clone <repo> my-client-site
cd my-client-site
npm install

# 2. Open src/content/site.config.ts
#    Fill in: site, primaryCTA, navigation, hero, about, etc.

# 3. Drop photos in public/uploads/
#    profile.jpg (hero photo), about.jpg (about section)

# 4. Replace public/og-image.jpg (1200×630)
#    Replace public/favicon.svg

# 5. Update astro.config.mjs → site: 'https://yourclientdomain.com'
# 6. Update public/robots.txt → Sitemap: https://yourclientdomain.com/sitemap-index.xml

# 7. Preview
npm run dev

# 8. Build
npm run build

# 9. Deploy (Netlify recommended)
#    Connect repo → build command: npm run build → publish dir: dist
```

---

## Industry examples

The same components work for completely different businesses — only `site.config.ts` changes.

### Restaurant

```ts
export const site = {
  name: 'Bistro Maison',
  tagline: 'Modern French Kitchen',
};

export const primaryCTA: CTAConfig = {
  type: 'url', value: '/reservations', label: 'Reserve a table',
};

export const hero = {
  eyebrow: 'Now booking for summer',
  heading: 'Where every meal becomes <em>a memory.</em>',
  stats: [
    { value: '200+', label: 'covers nightly' },
    { value: '15',   label: 'years open'     },
    { value: '⭐',   label: 'Michelin rated'  },
  ],
};

export const services = {
  heading: 'Experience <em>our menu</em>',
  items: [
    { title: 'Dinner Service', tagline: 'Tues–Sun from 6pm', featured: true, ... },
    { title: 'Sunday Brunch',  tagline: '11am–3pm',          featured: false, ... },
    { title: 'Private Events', tagline: 'Groups up to 40',   featured: false, ... },
  ],
};
```

### Law firm

```ts
export const site = {
  name: 'Mitchell & Associates',
  tagline: 'Personal Injury Law',
};

export const primaryCTA: CTAConfig = {
  type: 'phone', value: '+15551234567', label: 'Free consultation',
};

export const hero = {
  eyebrow: 'Fighting for you since 2003',
  heading: 'You deserve an attorney who <em>fights for you.</em>',
  stats: [
    { value: '98%',  label: 'case success rate' },
    { value: '$50M+', label: 'recovered'         },
    { value: '20+',  label: 'years experience'   },
  ],
};

export const services = {
  heading: 'Practice <em>areas</em>',
  items: [
    { title: 'Personal Injury',  tagline: 'Car, work, slip & fall', featured: true,  ... },
    { title: 'Family Law',       tagline: 'Divorce, custody',       featured: false, ... },
    { title: 'Corporate Law',    tagline: 'Contracts, disputes',     featured: false, ... },
  ],
};
```

---

## Theme examples

Swap the entire visual identity by replacing the `@theme` block in `src/styles/global.css`.

### Default palette
```css
@theme {
  --color-primary:       #1B3A1A;
  --color-surface:       #FAF7F0;
  --color-accent:        #7A9E68;
  --color-emphasis:      #C8603A;
  --color-decorative:    #BF8C40;
}
```

### Professional / dark
```css
@theme {
  --color-primary:       #1A2744;
  --color-surface:       #F8F9FB;
  --color-accent:        #3B6FD4;
  --color-emphasis:      #D4763B;
  --color-decorative:    #C4A84A;
}
```

### Modern / minimal
```css
@theme {
  --color-primary:       #111110;
  --color-surface:       #FAFAFA;
  --color-accent:        #555;
  --color-emphasis:      #111110;
  --color-decorative:    #888;
}
```

---

## CTA types

```ts
// WhatsApp — opens chat with pre-filled message
{ type: 'whatsapp', value: '+15551234567', label: 'Chat on WhatsApp', message: 'Hi!' }

// Calendly — opens booking page in new tab
{ type: 'calendly', value: 'https://calendly.com/you/30min', label: 'Book a time' }

// Phone — tel: link
{ type: 'phone', value: '+15551234567', label: 'Call now' }

// Email — mailto: link
{ type: 'email', value: 'hello@you.com', label: 'Send an email' }

// URL — internal or external link
{ type: 'url', value: '#contact', label: 'Get in touch' }
```

---

## Deployment

### Netlify (recommended)
1. Push to GitHub
2. Connect repo in Netlify dashboard
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel
```bash
npm i -g vercel
vercel --prod
```

### Cloudflare Pages
Build command: `npm run build` — Output directory: `dist`

---

## CMS setup (Decap + Netlify)

1. Enable **Netlify Identity** in the Netlify dashboard (Site → Identity → Enable)
2. Enable **Git Gateway** (Identity → Services → Git Gateway → Enable)
3. Invite yourself as an editor (Identity → Invite users)
4. Visit `https://yoursite.netlify.app/admin/` and accept the invite
5. Log in — you can now edit identity, CTA, hero, services, and testimonials without touching code

---

## Optional integrations

| Need | Recommendation |
|---|---|
| Analytics | Umami — privacy-first, one script tag, free tier |
| Form email | Netlify Forms (default) or Formspree |
| Optimised images | Astro `<Image>` component from `astro:assets` |
| Visual CMS | Tina CMS (live preview) or Keystatic (local-first) |
| Scale CMS | Sanity |

---

## Stack

- **Astro 5.6** — zero JS by default, fast static builds
- **Tailwind CSS v4** — design tokens only (no utility classes used)
- **TypeScript** — strict mode, typed config
- **Decap CMS** — optional, writes JSON to `src/data/`
