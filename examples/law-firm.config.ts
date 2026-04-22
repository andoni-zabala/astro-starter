/**
 * EXAMPLE CONFIG — Law Firm
 * ──────────────────────────
 * Copy this file to src/content/site.config.ts and fill in your
 * client's real details. All values here are fictional.
 *
 * To use: cp examples/law-firm.config.ts src/content/site.config.ts
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
  name:        'Mitchell & Associates',
  tagline:     'Personal Injury Law',
  url:         'https://mitchellandassociates.com',
  locale:      'en',
  ogLocale:    'en_US',
  description: 'Chicago personal injury attorneys with a 98% case success rate. Free consultation. No fee unless we win.',
  ogImage:     '/og-image.jpg',
  author:      'Mitchell & Associates',
  themeColor:  '#1A2744',
};

// ─── CALL TO ACTION ───────────────────────────────────────────────────────────
export const primaryCTA: CTAConfig = {
  type:  'phone',
  value: '+13125550100',
  label: 'Free consultation',
};

export const secondaryCTA: CTAConfig = {
  type:  'url',
  value: '#how-it-works',
  label: 'See how we work',
};

// ─── NAVIGATION ───────────────────────────────────────────────────────────────
export const navigation: NavLink[] = [
  { label: 'About',         href: '#about'        },
  { label: 'How it works',  href: '#how-it-works' },
  { label: 'Practice areas', href: '#services'    },
  { label: 'Our approach',  href: '#approach'     },
  { label: 'Results',       href: '#testimonials' },
];

// ─── HERO SECTION ─────────────────────────────────────────────────────────────
export const hero = {
  eyebrow:      'Fighting for you since 2003',
  heading:      'You deserve an attorney who <em>fights for you.</em>',
  body:         "We are Mitchell & Associates — a personal injury law firm in Chicago. We work on contingency: no fee unless we win your case.",
  profilePhoto: '/uploads/attorney.jpg',
  badgeLabel:   'Senior Partner',
  floatCards: [
    { icon: '⚖', label: 'Fee model', value: 'No win, no fee' },
    { icon: '📞', label: 'Available', value: '24/7 emergency line' },
  ] satisfies FloatCard[],
  stats: [
    { value: '98%',  label: 'case success rate' },
    { value: '$50M+', label: 'recovered'         },
    { value: '20+',  label: 'years experience'   },
  ] satisfies Stat[],
};

// ─── PAIN POINTS SECTION ─────────────────────────────────────────────────────
export const painPoints = {
  eyebrow:         'Sound familiar?',
  heading:         'Are you...',
  pains: [
    "Dealing with mounting medical bills after an accident that wasn't your fault",
    "Getting lowball settlement offers from the insurance company",
    "Unsure whether you even have a case worth pursuing",
    "Worried you can't afford a lawyer while you're off work",
  ],
  transition:      "You are not alone. Insurance companies have teams of lawyers working to minimise your payout. You need someone fighting on your side.",
  solutionHeading: 'We level the playing field.',
  solutions: [
    'We work on contingency — zero upfront cost, no fee unless we win',
    'Free initial consultation to assess your case within 24 hours',
    'Direct access to your attorney, not a paralegal or call centre',
    'Track record of $50M+ recovered for our clients',
  ],
};

// ─── ABOUT SECTION ───────────────────────────────────────────────────────────
export const about = {
  sectionTag: 'About',
  heading:    'A firm built on <em>results, not promises.</em>',
  paragraphs: [
    'Mitchell & Associates was founded in 2003 by James Mitchell, a former insurance defence attorney who switched sides after seeing how injured people were treated by the system.',
    'We are a boutique firm — small enough that you always speak to a partner, large enough to take on the biggest insurers and win.',
  ],
  photo:       '/uploads/team.jpg',
  photoAlt:    'Mitchell & Associates team',
  credentials: [
    { icon: '◎', title: 'Illinois Bar',           subtitle: 'Licensed since 2001'             },
    { icon: '◈', title: 'Super Lawyers 2023',      subtitle: 'Top 5% personal injury Illinois' },
    { icon: '◇', title: 'Multi-Million Dollar Verdicts', subtitle: 'Verdicts & settlements'   },
  ] satisfies Credential[],
  values: [
    'Client first',
    'Contingency only',
    'Direct access',
    'Proven results',
  ],
};

// ─── PROCESS (HOW IT WORKS) ──────────────────────────────────────────────────
export const process = {
  sectionTag: 'The process',
  heading:    'How it works',
  subheading: 'From first call to final settlement — here is what to expect.',
  steps: [
    { number: '01', title: 'Free consultation',     body: 'Call or submit a form. We review your case within 24 hours and tell you honestly if we can help.' },
    { number: '02', title: 'We investigate',        body: 'We gather evidence, interview witnesses, and review medical records — at our expense.' },
    { number: '03', title: 'We negotiate',          body: 'We make demand on the insurance company and fight for the maximum settlement.' },
    { number: '04', title: 'You receive your award', body: 'Once settled or decided at trial, you receive your compensation. Our fee comes from the award, not from you.' },
  ] satisfies ProcessStep[],
};

// ─── SERVICES (PRACTICE AREAS) SECTION ───────────────────────────────────────
export const services = {
  sectionTag:   'Practice areas',
  heading:      'How can we <em>help you?</em>',
  subheading:   'We handle cases across all major personal injury categories.',
  areaLabels:   ['Auto', 'Work', 'Medical', 'Slip & Fall', 'Product', 'Wrongful Death'],
  modalityNote: '📍 Serving all of Illinois. Free home or hospital visits available.',
  items: [
    {
      number:      '01',
      icon:        '◎',
      title:       'Personal Injury',
      tagline:     'Car, truck, motorcycle, pedestrian',
      description: 'If you were injured through someone else\'s negligence, we handle every aspect of your claim from filing to settlement.',
      features:    ['Car & truck accidents', 'Motorcycle accidents', 'Pedestrian & bicycle', 'Rideshare injuries'],
      price:       'No fee unless we win',
      featured:    true,
    },
    {
      number:      '02',
      icon:        '◈',
      title:       'Workplace Injuries',
      tagline:     'Construction, industrial, office',
      description: 'Injured at work? We handle both workers\' compensation claims and third-party liability suits.',
      features:    ['Workers\' compensation', 'Third-party claims', 'Construction accidents', 'Occupational illness'],
      price:       'No fee unless we win',
      featured:    false,
    },
    {
      number:      '03',
      icon:        '◇',
      title:       'Medical Malpractice',
      tagline:     'Surgical errors, misdiagnosis, negligence',
      description: 'When a healthcare provider\'s negligence causes harm, we hold them accountable.',
      features:    ['Surgical errors', 'Misdiagnosis', 'Birth injuries', 'Medication errors'],
      price:       'No fee unless we win',
      featured:    false,
    },
  ] satisfies ServiceItem[],
};

// ─── APPROACH SECTION ────────────────────────────────────────────────────────
export const approach = {
  sectionTag: 'Our approach',
  quote:      '"Insurance companies have armies of lawyers. You deserve someone who will fight just as hard."',
  body:       "Our work is grounded in aggressive negotiation and preparation for trial. We focus on building the strongest possible case because insurance companies settle higher when they know we are ready to go to court.",
  principles: [
    { title: 'Contingency fee',      body: 'We take no upfront fees. Our success is tied to yours — we only get paid when you do.' },
    { title: 'Trial-ready cases',    body: 'We prepare every case as if it is going to trial. That preparation is what drives better settlements.' },
    { title: 'Direct partner access', body: 'You work directly with a partner, not a paralegal. You always know where your case stands.' },
    { title: 'Full transparency',    body: 'No surprises. We explain your options clearly and never pressure you to accept a settlement.' },
  ] satisfies Principle[],
};

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────
export const testimonials = {
  sectionTag: 'Results',
  heading:    'What our clients say',
  ctaPrompt:  'Ready to get started?',
  items: [
    {
      quote:  'After the insurance company offered me $8,000, Mitchell & Associates got me $240,000. I had no idea what I was entitled to.',
      name:   'Robert T.',
      role:   'Construction worker, Chicago',
      avatar: 'RT',
      result: '$240K recovered',
    },
    {
      quote:  'James Mitchell personally took my calls at 9 pm. I never felt like just a case number. They fought for everything I deserved.',
      name:   'Maria G.',
      role:   'Teacher, Evanston',
      avatar: 'MG',
      result: '$180K settlement',
    },
    {
      quote:  'I was nervous about the costs but paid nothing until we won. The whole process was explained to me at every step.',
      name:   'David K.',
      role:   'Driver, Chicago',
      avatar: 'DK',
      result: 'Case won at trial',
    },
  ] satisfies TestimonialItem[],
};

// ─── CONTACT SECTION ─────────────────────────────────────────────────────────
export const contact = {
  sectionTag:  'Free consultation',
  heading:     'Get in touch <em>today</em>',
  subheading:  'The fastest way to get started is to call or submit the form. We usually respond within a few hours.',
  email:       'hello@mitchellandassociates.com',
  location:    'Downtown Chicago & home visits available',
  hours:       'Mon–Fri, 8:00–19:00 · 24/7 emergency line',
  social: [
    { platform: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/company/mitchell-associates' },
  ] satisfies SocialLink[],
  formFields: {
    namePlaceholder:    'Jane Smith',
    emailPlaceholder:   'jane@email.com',
    goalLabel:          'What type of case do you have?',
    goalOptions: [
      { value: 'auto',        label: 'Car or truck accident'  },
      { value: 'workplace',   label: 'Workplace injury'       },
      { value: 'malpractice', label: 'Medical malpractice'    },
      { value: 'other',       label: 'Other injury'           },
    ] satisfies FormOption[],
    messageLabel:       'Tell us about your situation',
    messagePlaceholder: "What happened? When did it occur? Any context helps.",
    submitLabel:        'Request free consultation',
  },
};

// ─── FOOTER ──────────────────────────────────────────────────────────────────
export const footer = {
  tagline: 'No fee unless we win — fighting for Illinois injury victims since 2003.',
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy'    },
    { label: 'Terms',          href: '/terms'      },
    { label: 'Disclaimer',     href: '/disclaimer' },
  ] satisfies LegalLink[],
};

// ─── STRUCTURED DATA (JSON-LD) ────────────────────────────────────────────────
export const structuredData: StructuredDataConfig = {
  businessType:    'LegalService',
  personJobTitle:  'Senior Partner, Personal Injury Attorney',
  knowsAbout:      ['Personal injury law', 'Workers compensation', 'Medical malpractice', 'Insurance claims'],
  credential:      'Illinois Bar License',
  priceRange:      'Contingency fee — no upfront cost',
  currency:        'USD',
  paymentMethods:  'Contingency only',
  address: {
    country:  'US',
    locality: 'Chicago',
    street:   '233 S Wacker Dr Suite 4100',
    zip:      '60606',
  },
  areaServed:   ['Chicago', 'Illinois'],
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '19:00' },
  ],
  faq: [
    {
      question: 'How much does it cost to hire a personal injury lawyer?',
      answer:   'Nothing upfront. We work on a contingency fee basis — we only get paid if we win your case. Our fee is a percentage of the settlement or verdict.',
    },
    {
      question: 'How long does a personal injury case take?',
      answer:   'Most cases settle within 6 to 18 months. Cases that go to trial can take longer. We will give you an honest timeline estimate during your free consultation.',
    },
    {
      question: 'What should I do right after an accident?',
      answer:   'Seek medical attention immediately. Document the scene with photos if safe to do so. Get the other party\'s information. Do not give a recorded statement to the insurance company before speaking with us.',
    },
  ],
  sameAs: [],
};
