export interface NavItem {
  label: string;
  href: string;
}

export interface NavConfig {
  links: NavItem[];
  cta?: NavItem;
}

export interface FooterConfig {
  aboutLinks: NavItem[];
  involvedLinks: NavItem[];
  social: {
    linkedin?: string;
    instagram?: string;
    luma?: string;
  };
}

export interface TeamMember {
  name: string;
  role: string;
  photo?: string;
}

export interface EventTypeItem {
  title: string;
  description: string;
  image: string;
}

export interface InitiativeItem {
  title: string;
  description: string;
  image?: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface ZineVolume {
  volume: number;
  title: string;
  href: string;
  cover?: string;
}

export interface PartnershipTierItem {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image?: string;
}

export interface ValuePillar {
  illustration: string;
  heading: string;
  body: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ChapterConfig {
  slug: "pdc" | "brooklyn" | "losangeles" | "singapore";
  name: string;
  accentColor: string;
  logo?: string;
  footerLogo?: string;
  nav: NavConfig;
  footer: FooterConfig;
  hero: {
    heading: string;
    body?: string;
    ctaLabel?: string;
    ctaHref?: string;
    image: string;
    textAlign?: "center" | "left";
    scrim?: boolean;
    compact?: boolean;
  };
  about?: {
    heading: string;
    body: string;
  };
  stats?: StatItem[];
  values?: ValuePillar[];
  eventTypes?: EventTypeItem[];
  initiatives?: InitiativeItem[];
  team?: TeamMember[];
  alumniTeam?: TeamMember[];
  partnerLogos?: string[];
}
