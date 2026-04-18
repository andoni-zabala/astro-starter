export type CTAType = 'whatsapp' | 'calendly' | 'phone' | 'email' | 'url';

export interface CTAConfig {
  type: CTAType;
  value: string;
  label: string;
  message?: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  url: string;
  locale: string;
  ogLocale: string;
  description: string;
  ogImage: string;
  author: string;
  themeColor: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FloatCard {
  icon: string;
  label: string;
  value: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Credential {
  icon: string;
  title: string;
  subtitle: string;
}

export interface ServiceItem {
  number: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  price: string;
  featured: boolean;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  result: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  body: string;
}

export interface Principle {
  title: string;
  body: string;
}

export interface SocialLink {
  platform: 'instagram' | 'linkedin' | 'twitter' | 'facebook' | 'tiktok' | 'youtube';
  label: string;
  href: string;
}

export interface FormOption {
  value: string;
  label: string;
}

export interface LegalLink {
  label: string;
  href: string;
}

export interface BusinessHours {
  days: string[];
  opens: string;
  closes: string;
}

export interface StructuredDataConfig {
  businessType: string;
  personJobTitle: string;
  knowsAbout: string[];
  credential?: string;
  priceRange?: string;
  currency?: string;
  paymentMethods?: string;
  address: {
    country: string;
    locality: string;
    street?: string;
    zip?: string;
  };
  areaServed: string[];
  openingHours?: BusinessHours[];
  faq?: Array<{ question: string; answer: string }>;
  sameAs?: string[];
}

export interface LayoutProps {
  title?: string;
  description?: string;
  canonicalURL?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  jsonLd?: object;
}
