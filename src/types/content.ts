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

export interface ChapterConfig {
  slug: "pdc" | "brooklyn" | "losangeles" | "singapore";
  name: string;
  accentColor: string;
  logo?: string;
  nav: NavConfig;
  footer: FooterConfig;
  hero: {
    heading: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
    image: string;
  };
  eventTypes?: EventTypeItem[];
  initiatives?: InitiativeItem[];
  team?: TeamMember[];
  alumniTeam?: TeamMember[];
  partnerLogos?: string[];
}
