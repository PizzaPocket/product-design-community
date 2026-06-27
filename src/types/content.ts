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
  role?: string;
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
  description?: string;
  href: string;
  cover?: string;
  ctaLabel?: string;
}

export interface PartnershipTierItem {
  title: string;
  description: string;
  items?: string[];
  ctaLabel: string;
  ctaHref: string;
  ctaIcon?: "coffee";
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
    ctaVariant?: "primary" | "secondary" | "tertiary" | "primary-alt";
    image: string;
    textAlign?: "center" | "left";
    scrim?: "lr" | "tb" | "bt" | "full" | false;
    compact?: boolean;
  };
  about?: {
    heading: string;
    body: string;
    paragraphs?: string[];
  };
  stats?: StatItem[];
  values?: ValuePillar[];
  eventTypes?: EventTypeItem[];
  initiatives?: InitiativeItem[];
  team?: TeamMember[];
  alumniTeam?: TeamMember[];
  carouselImages?: string[];
  volunteerHref?: string;
  donateHref?: string;
}
