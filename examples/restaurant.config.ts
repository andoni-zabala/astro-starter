/**
 * EXAMPLE CONFIG — Restaurant
 * ────────────────────────────
 * Copy this file to src/content/site.config.ts and fill in your
 * client's real details. All values here are fictional.
 *
 * To use: cp examples/restaurant.config.ts src/content/site.config.ts
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
} from '../src/types';

// ─── SITE IDENTITY ────────────────────────────────────────────────────────────
export const site = {
  name:        'Bistro Maison',
  tagline:     'Modern French Kitchen',
  url:         'https://bistromaison.com',
  locale:      'en',
  ogLocale:    'en_US',
  description: 'Modern French bistro in downtown Chicago. Seasonal menu, natural wines, private dining. Reservations recommended.',
  ogImage:     '/og-image.jpg',
  author:      'Bistro Maison',
  themeColor:  '#1A1A14',
};

// ─── CALL TO ACTION ───────────────────────────────────────────────────────────
export const primaryCTA: CTAConfig = {
  type:  'url',
  value: 'https://bistromaison.com/reservations',
  label: 'Reserve a table',
};

export const secondaryCTA: CTAConfig = {
  type:  'url',
  value: '#menu',
  label: 'View the menu',
};

// ─── NAVIGATION ───────────────────────────────────────────────────────────────
export const navigation: NavLink[] = [
  { label: 'About',      href: '#about'        },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Menu',       href: '#services'     },
  { label: 'Philosophy', href: '#approach'     },
  { label: 'Reviews',    href: '#testimonials' },
];

// ─── HERO SECTION ─────────────────────────────────────────────────────────────
export const hero = {
  eyebrow:      'Now booking for summer',
  heading:      'Where every meal becomes <em>a memory.</em>',
  body:         "We are Bistro Maison — a modern French kitchen in the heart of Chicago. Every dish is seasonal, every wine is natural, every evening is worth savouring.",
  profilePhoto: '/uploads/chef.jpg',
  badgeLabel:   'Chef & Founder',
  floatCards: [
    { icon: '✦', label: 'Cuisine',   value: 'Modern French' },
    { icon: '📍', label: 'Location', value: 'Chicago, IL'   },
  ] satisfies FloatCard[],
  stats: [
    { value: '200+', label: 'covers nightly'  },
    { value: '15',   label: 'years open'      },
    { value: '⭐',   label: 'Michelin rated'  },
  ] satisfies Stat[],
};

// ─── PAIN POINTS SECTION ─────────────────────────────────────────────────────
export const painPoints = {
  eyebrow:         'Sound familiar?',
  heading:         'Tired of...',
  pains: [
    "Restaurants that rush you through a meal",
    "Menus that don't change with the seasons",
    "Special occasions that feel disappointingly ordinary",
    "Nowhere to host a private dinner that actually impresses",
  ],
  transition:      "Great food should never feel like a compromise. At Bistro Maison, we believe dining is an event — not an errand.",
  solutionHeading: 'We do things differently.',
  solutions: [
    'A seasonal menu that changes every eight weeks',
    'A curated list of natural and biodynamic wines',
    'Private dining rooms for groups of 10 to 40',
    'A kitchen team with over 60 years of combined experience',
  ],
};

// ─── ABOUT SECTION ───────────────────────────────────────────────────────────
export const about = {
  sectionTag: 'About',
  heading:    'A kitchen built on <em>seasonal simplicity.</em>',
  paragraphs: [
    'Bistro Maison was founded in 2009 by Chef Laurent Dubois, a Paris-born cook who trained in Lyon before moving to Chicago to open his first restaurant.',
    'Every dish starts at the market — not the other way around. Our menu is built around what is growing, what is best, and what surprises us that week.',
  ],
  photo:       '/uploads/restaurant.jpg',
  photoAlt:    'Bistro Maison dining room',
  credentials: [
    { icon: '◎', title: 'Michelin Star',      subtitle: 'Awarded 2018, retained every year since' },
    { icon: '◈', title: 'James Beard Nominee', subtitle: 'Best New Restaurant, 2011'              },
    { icon: '◇', title: 'Natural Wine List',   subtitle: 'Over 120 producers from 14 countries'  },
  ] satisfies Credential[],
  values: [
    'Seasonal always',
    'No shortcuts',
    'Zero-waste kitchen',
    'Warm hospitality',
  ],
};

// ─── PROCESS (HOW IT WORKS) ──────────────────────────────────────────────────
export const process = {
  sectionTag: 'The experience',
  heading:    'How it works',
  subheading: 'From reservation to last bite — here is what to expect.',
  steps: [
    { number: '01', title: 'Make a reservation',    body: 'Book online or call us. We hold tables for up to 15 minutes after your time.' },
    { number: '02', title: 'Arrive and be seated',  body: 'Our team will greet you, take your coats, and walk you through tonight\'s menu.' },
    { number: '03', title: 'Choose your experience', body: 'À la carte or the tasting menu — both include optional wine pairing.' },
    { number: '04', title: 'Enjoy and return',       body: 'We hope to see you again. Members of our loyalty programme get priority booking.' },
  ] satisfies ProcessStep[],
};

// ─── SERVICES (MENU) SECTION ─────────────────────────────────────────────────
export const services = {
  sectionTag:   'Menu',
  heading:      'Our <em>offerings</em>',
  subheading:   'Each experience is designed around the best of the season.',
  areaLabels:   ['Starters', 'Mains', 'Desserts', 'Wines', 'Private', 'Brunch'],
  modalityNote: '📍 Open Tuesday–Sunday. Reservations recommended.',
  items: [
    {
      number:      '01',
      icon:        '◎',
      title:       'Dinner Service',
      tagline:     'Tuesday to Sunday, from 6 pm',
      description: 'Our signature evening service — à la carte or a five-course tasting menu with optional wine pairing.',
      features:    ['À la carte or tasting menu', 'Optional wine pairing', 'Seasonal dessert trolley', 'Cocktail bar open from 5 pm'],
      price:       'From $85 per person',
      featured:    true,
    },
    {
      number:      '02',
      icon:        '◈',
      title:       'Sunday Brunch',
      tagline:     'Sunday, 11 am to 3 pm',
      description: 'A relaxed long lunch with free-flowing Champagne, oysters, and our most popular à la carte dishes.',
      features:    ['Free-flow Champagne option', 'Oyster bar', 'Full à la carte menu', 'Finish by 3 pm'],
      price:       'From $55 per person',
      featured:    false,
    },
    {
      number:      '03',
      icon:        '◇',
      title:       'Private Dining',
      tagline:     'Groups of 10 to 40',
      description: 'Two private rooms available for celebrations, corporate dinners, and events — with bespoke menus.',
      features:    ['Bespoke set menu', 'Dedicated server', 'AV equipment available', 'Full buyout option'],
      price:       'Contact for pricing',
      featured:    false,
    },
  ] satisfies ServiceItem[],
};

// ─── APPROACH SECTION ────────────────────────────────────────────────────────
export const approach = {
  sectionTag: 'Our philosophy',
  quote:      '"The best ingredient is the one that has never left the region."',
  body:       "Our work is grounded in seasonal French technique. We focus on restraint because we believe that the fewer things you do to a great ingredient, the better it tastes.",
  principles: [
    { title: 'Seasonal menus',      body: 'We rewrite the menu every eight weeks based on what the market offers — never what is convenient.' },
    { title: 'Zero-waste kitchen',  body: 'Every trim, bone, and offcut has a purpose. We compost, ferment, and preserve to reduce what we throw away.' },
    { title: 'Natural wine',        body: 'Our 120-label list is built entirely from growers who farm organically and vinify without intervention.' },
    { title: 'Unhurried service',   body: 'We never turn tables. When you sit down, the evening is yours.' },
  ] satisfies Principle[],
};

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────
export const testimonials = {
  sectionTag: 'Reviews',
  heading:    'What our guests say',
  ctaPrompt:  'Ready to join us?',
  items: [
    {
      quote:  'The tasting menu was the best meal I have had in Chicago. Every course was a surprise and nothing felt fussy.',
      name:   'Sarah L.',
      role:   'Food writer, Chicago',
      avatar: 'SL',
      result: 'Returned 4 times',
    },
    {
      quote:  'We booked the private room for our anniversary and the team made it completely magical. Worth every penny.',
      name:   'Marcus D.',
      role:   'Architect, Chicago',
      avatar: 'MD',
      result: 'Regular guest',
    },
    {
      quote:  'Sunday brunch with the Champagne pairing is now our non-negotiable family ritual. The kids even love the cheese trolley.',
      name:   'Priya K.',
      role:   'Doctor, Evanston',
      avatar: 'PK',
      result: 'Every Sunday',
    },
  ] satisfies TestimonialItem[],
};

// ─── CONTACT SECTION ─────────────────────────────────────────────────────────
export const contact = {
  sectionTag:  'Reservations',
  heading:     'Book your <em>table</em>',
  subheading:  'Reserve online or call us directly. We confirm all bookings within a few hours.',
  email:       'hello@bistromaison.com',
  location:    '142 W Randolph St, Chicago, IL 60601',
  hours:       'Tue–Sun, 17:00–23:00',
  social: [
    { platform: 'instagram', label: 'Instagram', href: 'https://instagram.com/bistromaison' },
  ] satisfies SocialLink[],
  formFields: {
    namePlaceholder:    'Jane Smith',
    emailPlaceholder:   'jane@email.com',
    goalLabel:          'What brings you in?',
    goalOptions: [
      { value: 'dinner',    label: 'Dinner service'    },
      { value: 'brunch',    label: 'Sunday brunch'     },
      { value: 'private',   label: 'Private dining'    },
      { value: 'other',     label: 'Other'             },
    ] satisfies FormOption[],
    messageLabel:       'Tell us about your visit',
    messagePlaceholder: "Date, party size, any dietary needs — any context helps.",
    submitLabel:        'Send enquiry',
  },
};

// ─── FOOTER ──────────────────────────────────────────────────────────────────
export const footer = {
  tagline: 'Modern French cooking — rooted in the season, built for the table.',
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms',          href: '/terms'   },
  ] satisfies LegalLink[],
};

// ─── STRUCTURED DATA (JSON-LD) ────────────────────────────────────────────────
export const structuredData: StructuredDataConfig = {
  businessType:    'Restaurant',
  personJobTitle:  'Executive Chef',
  knowsAbout:      ['French cuisine', 'Natural wine', 'Seasonal cooking', 'Private dining'],
  credential:      'Michelin Star',
  priceRange:      '$$$',
  currency:        'USD',
  paymentMethods:  'Cash, Credit Card, AMEX',
  address: {
    country:  'US',
    locality: 'Chicago',
    street:   '142 W Randolph St',
    zip:      '60601',
  },
  areaServed:   ['Chicago', 'Illinois'],
  openingHours: [
    { days: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '17:00', closes: '23:00' },
    { days: ['Sunday'], opens: '11:00', closes: '15:00' },
  ],
  faq: [
    {
      question: 'Do you take walk-ins?',
      answer:   'We hold a small number of bar seats for walk-in guests, but we strongly recommend reserving in advance, especially on weekends.',
    },
    {
      question: 'Is there a vegetarian or vegan menu?',
      answer:   'Yes. Our kitchen team creates a parallel vegetarian tasting menu on request. Please note this when booking so we can prepare.',
    },
    {
      question: 'How do I book the private dining room?',
      answer:   'Contact us via the form or call us directly. We will send you a capacity guide, sample menu, and pricing within 24 hours.',
    },
  ],
  sameAs: [],
};
