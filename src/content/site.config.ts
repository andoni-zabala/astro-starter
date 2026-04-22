/**
 * ============================================================
 * SITE CONFIG — THE ONE FILE
 * ============================================================
 * Edit this file to configure a new client project.
 * All section components import their content from here.
 *
 * Quick setup checklist:
 *   1. Fill in the `site` block (name, URL, description, locale)
 *   2. Configure `primaryCTA` (type + value + label)
 *   3. Fill in `hero`, `about`, `process`, `services`, etc.
 *   4. Update `structuredData` with the client's business info
 *   5. Replace public/og-image.jpg (1200×630)
 *   6. Replace public/favicon.svg
 *   7. Drop client photos in public/uploads/
 *   8. Update site URL in astro.config.mjs
 *   9. Update sitemap URL in public/robots.txt
 *
 * AI workflow tip: these typed interfaces make content generation
 * reliable — paste a section interface into Claude and ask it to
 * fill the values for "[CLIENT TYPE] in [LANGUAGE]".
 * ============================================================
 */

import type {
  CTAConfig,
  NavLink,
  ServiceItem,
  TestimonialItem,
  ProcessStep,
  Principle,
  SocialLink,
  FormOption,
  LegalLink,
  StructuredDataConfig,
  Credential,
  FloatCard,
  Stat,
} from '../types';

// CMS data (written by Decap CMS, merged with TypeScript defaults below)
import identityData from '../data/identity.json';
import ctaData from '../data/cta.json';
import heroData from '../data/hero.json';
import servicesData from '../data/services.json';
import testimonialsData from '../data/testimonials.json';

// ─── SITE IDENTITY ────────────────────────────────────────────────────────────
// Controls: <title>, og:title, og:site_name, nav logo, footer, JSON-LD
const defaultSite = {
  name:        '[Business Name]',
  tagline:     '[Short tagline for this business]',
  url:         'https://yourdomain.com',
  locale:      'en',
  ogLocale:    'en_US',
  description: 'One-sentence meta description, 150–160 characters. Describe what the business does and who it helps.',
  ogImage:     '/og-image.jpg',
  author:      '[Your Name]',
  themeColor:  '#1B3A1A',
};

export const site = { ...defaultSite, ...(identityData as Partial<typeof defaultSite>) };

// ─── CALL TO ACTION ───────────────────────────────────────────────────────────
// This single config is consumed by: Hero, HowItWorks, Approach,
// Testimonials, Contact, Footer, and Nav mobile button.
// Change this once → updates all 6 CTA locations.
const defaultCTA: CTAConfig = {
  type:    'whatsapp',
  value:   '+15551234567',
  label:   'Book a free call',
  message: 'Hi! I\'d like to book a free consultation.',
};

export const primaryCTA: CTAConfig = { ...defaultCTA, ...(ctaData as Partial<CTAConfig>) };

export const secondaryCTA: CTAConfig = {
  type:  'url',
  value: '#how-it-works',
  label: 'See how it works',
};

// ─── NAVIGATION ───────────────────────────────────────────────────────────────
export const navigation: NavLink[] = [
  { label: 'About',        href: '#about'        },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Services',     href: '#services'     },
  { label: 'Approach',     href: '#approach'     },
  { label: 'Testimonials', href: '#testimonials' },
];

// ─── HERO SECTION ─────────────────────────────────────────────────────────────
const defaultHero = {
  eyebrow:      'Now open for new projects',
  heading:      'Deliver <em>exceptional results</em> for every client.',
  body:         "I'm [Name], [credential]. I help [your ideal client] achieve [their goal] — with an approach built for your specific situation.",
  profilePhoto: '/uploads/profile.jpg',
  badgeLabel:   '[Your Title or Badge]',
  floatCards: [
    { icon: '✓', label: 'Approach',  value: 'Tailored to you' },
    { icon: '💻', label: 'Available', value: 'Online & in-person' },
  ] satisfies FloatCard[],
  stats: [
    { value: '✓', label: 'Proven process'     },
    { value: '✓', label: 'Lasting results'    },
    { value: '✓', label: '100% personalised'  },
  ] satisfies Stat[],
};

export const hero = { ...defaultHero, ...(heroData as Partial<typeof defaultHero>) };

// ─── PAIN POINTS SECTION ─────────────────────────────────────────────────────
export const painPoints = {
  eyebrow:         'Sound familiar?',
  heading:         'Do you find that...?',
  pains: [
    "You've worked with others but the results didn't last",
    "You're not sure where to start or what's right for you",
    "It's hard to know which option is actually right for you",
    "You're ready to move forward but not sure where to start",
  ],
  transition:      "You're not alone. Most generic approaches fail because they weren't designed for your specific situation.",
  solutionHeading: 'Here we work differently.',
  solutions: [
    'A personalised approach — not a one-size-fits-all solution',
    'Clear process and transparent communication at every step',
    'Understand exactly what you need and why',
    'Real, measurable outcomes without unnecessary complexity',
  ],
};

// ─── ABOUT SECTION ───────────────────────────────────────────────────────────
export const about = {
  sectionTag: 'About',
  heading:    'A professional who understands that <em>every situation is different.</em>',
  paragraphs: [
    'With years of experience working with clients across different backgrounds, I take a personalised, proven approach to help you reach your goals sustainably.',
    "My specialist training allows me to design plans that work for your specific situation — not just a generic programme.",
  ],
  photo:       '/uploads/about.jpg',
  photoAlt:    '[Name] — [Credential]',
  credentials: [
    { icon: '◎', title: '[Credential]',  subtitle: 'Professional qualification' },
    { icon: '◈', title: '[Specialty 1]', subtitle: 'Area of expertise'          },
    { icon: '◇', title: '[Specialty 2]', subtitle: 'Area of expertise'          },
  ] satisfies Credential[],
  values: [
    'Built for you',
    'Real results',
    'Proven process',
    'Ongoing support',
  ],
};

// ─── PROCESS (HOW IT WORKS) ──────────────────────────────────────────────────
export const process = {
  sectionTag: 'The process',
  heading:    'How it works',
  subheading: 'Four simple steps to start making lasting progress.',
  steps: [
    { number: '01', title: 'Get in touch',               body: 'Reach out and we\'ll arrange a convenient time to discuss your needs.' },
    { number: '02', title: 'We assess your situation', body: 'We take time to understand your goals, history, and what hasn\'t worked before.' },
    { number: '03', title: 'You receive your plan',    body: 'A personalised plan tailored specifically to you — not a template.' },
    { number: '04', title: 'We track your progress',   body: 'Ongoing support and check-ins to make sure the plan keeps working as your life evolves.' },
  ] satisfies ProcessStep[],
};

// ─── SERVICES SECTION ────────────────────────────────────────────────────────
const defaultServices = {
  sectionTag:   'Services',
  heading:      'How can we <em>help you?</em>',
  subheading:   'Each service is designed to deliver real, lasting value.',
  areaLabels:   ['Area 1', 'Area 2', 'Area 3', 'Area 4', 'Area 5', 'Area 6'],
  modalityNote: '📍 Available online and in-person.',
  items: [
    {
      number:      '01',
      icon:        '◎',
      title:       'Starter Package',
      tagline:     'The right place to begin',
      description: 'Everything you need to get started — a clear brief, agreed scope, and a first deliverable.',
      features:    ['Needs assessment', 'Scope definition', 'Initial delivery', 'Feedback round'],
      price:       'Contact for pricing',
      featured:    true,
    },
    {
      number:      '02',
      icon:        '◈',
      title:       'Ongoing Retainer',
      tagline:     'Stay on track, month to month',
      description: 'Continued support, regular deliverables, and a direct line so your project keeps moving.',
      features:    ['Monthly check-ins', 'Priority access', 'Flexible scope', 'Dedicated support'],
      price:       'Contact for pricing',
      featured:    false,
    },
    {
      number:      '03',
      icon:        '◇',
      title:       'Project Engagement',
      tagline:     'Start to finish, fixed scope',
      description: 'A defined project with clear milestones — delivered on time and on brief.',
      features:    ['Fixed deliverables', 'Clear timeline', 'Regular updates', 'Final sign-off'],
      price:       'Contact for pricing',
      featured:    false,
    },
  ] satisfies ServiceItem[],
};

export const services = {
  ...defaultServices,
  ...(servicesData as Partial<typeof defaultServices>),
};

// ─── APPROACH SECTION ────────────────────────────────────────────────────────
export const approach = {
  sectionTag: 'Our approach',
  quote:      '"[A meaningful quote that captures your professional philosophy and resonates with your ideal client.]"',
  body:       "Our work is grounded in [your approach]. We focus on [key methodology] because we believe that [core belief that drives your work].",
  principles: [
    { title: 'Principle One',   body: 'Brief description of this core principle and why it matters for clients.' },
    { title: 'Principle Two',   body: 'Brief description of this core principle and why it matters for clients.' },
    { title: 'Principle Three', body: 'Brief description of this core principle and why it matters for clients.' },
    { title: 'Principle Four',  body: 'Brief description of this core principle and why it matters for clients.' },
  ] satisfies Principle[],
};

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────
const defaultTestimonials = {
  sectionTag: 'Testimonials',
  heading:    'What our clients say',
  ctaPrompt:  'Ready to get started?',
  items: [
    {
      quote:  'Working with [Name] completely changed my approach. I finally have a sustainable plan that actually fits my life.',
      name:   'Client A.',
      role:   'Profession, City',
      avatar: 'CA',
      result: 'Achieved their goal',
    },
    {
      quote:  'After trying so many other approaches, this was the first time I had real support and a plan that made sense for me.',
      name:   'Client B.',
      role:   'Profession, City',
      avatar: 'CB',
      result: 'Lasting results',
    },
    {
      quote:  "The ongoing check-ins make all the difference. I never felt alone in the process, and the results have been life-changing.",
      name:   'Client C.',
      role:   'Profession, City',
      avatar: 'CC',
      result: 'Better outcomes',
    },
  ] satisfies TestimonialItem[],
};

export const testimonials = {
  ...defaultTestimonials,
  ...(testimonialsData as Partial<typeof defaultTestimonials>),
};

// ─── CONTACT SECTION ─────────────────────────────────────────────────────────
export const contact = {
  sectionTag:  'Contact',
  heading:     'Get in touch <em>today</em>',
  subheading:  'The fastest way to get started is to reach out directly. We usually respond within a few hours.',
  email:       'hello@yourdomain.com',
  location:    'Online & in-person appointments',
  hours:       'Mon–Fri, 9:00–18:00',
  social: [
    { platform: 'instagram', label: 'Instagram', href: 'https://instagram.com/' },
    { platform: 'linkedin',  label: 'LinkedIn',  href: 'https://linkedin.com/'  },
  ] satisfies SocialLink[],
  formFields: {
    namePlaceholder:    'Jane Smith',
    emailPlaceholder:   'jane@email.com',
    goalLabel:          'What brings you here?',
    goalOptions: [
      { value: 'option-1', label: 'Goal / Reason 1' },
      { value: 'option-2', label: 'Goal / Reason 2' },
      { value: 'option-3', label: 'Goal / Reason 3' },
      { value: 'other',    label: 'Other'            },
    ] satisfies FormOption[],
    messageLabel:       'Tell us about your situation',
    messagePlaceholder: "What are you looking for? Any context helps.",
    submitLabel:        'Send message',
  },
};

// ─── FOOTER ──────────────────────────────────────────────────────────────────
export const footer = {
  tagline: 'Quality work, delivered on time — built around your goals.',
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms',          href: '/terms'   },
  ] satisfies LegalLink[],
};

// ─── STRUCTURED DATA (JSON-LD) ────────────────────────────────────────────────
// Powers the JSON-LD generation in Layout.astro.
// See: https://schema.org/LocalBusiness for businessType options.
export const structuredData: StructuredDataConfig = {
  businessType:    'LocalBusiness',
  personJobTitle:  '[Professional Title]',
  knowsAbout:      ['[Specialty 1]', '[Specialty 2]', '[Specialty 3]'],
  credential:      '[Professional Credential]',
  priceRange:      '$$',
  currency:        'USD',
  paymentMethods:  'Cash, Credit Card',
  address: {
    country:  'US',
    locality: 'Your City',
    street:   '',
    zip:      '',
  },
  areaServed: ['Your City', 'Your Country'],
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
  ],
  faq: [
    {
      question: 'What happens in the first session?',
      answer:   'We take time to understand your goals, current situation, and what you\'ve tried before. You\'ll leave with a clear initial plan.',
    },
    {
      question: 'Do you offer online sessions?',
      answer:   'Yes — all sessions are available via video call, giving you complete flexibility wherever you are.',
    },
    {
      question: 'How long does it take to see results?',
      answer:   'Most clients notice meaningful progress within the first few weeks. Lasting change typically takes 2–3 months of consistent work together.',
    },
  ],
  sameAs: [],
};
