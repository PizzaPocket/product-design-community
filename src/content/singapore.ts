import type { ChapterConfig, ZineVolume, PartnershipTierItem } from "@/types/content";

export const singapore: ChapterConfig = {
  slug: "singapore",
  name: "Singapore Product Design",
  accentColor: "var(--color-singapore-sling)",

  nav: {
    links: [
      { label: "About", href: "/singapore/about" },
      { label: "Events", href: "https://lu.ma/singaporeproductdesign" },
      { label: "Initiatives", href: "/singapore/initiatives" },
      { label: "Partnerships", href: "/singapore/partnerships" },
    ],
    cta: { label: "Get involved", href: "https://forms.gle/volunteer-spd" },
  },

  footer: {
    aboutLinks: [
      { label: "About Singapore Product Design", href: "/singapore/about" },
      { label: "Product Design Community", href: "/" },
    ],
    involvedLinks: [
      { label: "Events", href: "https://lu.ma/singaporeproductdesign" },
      { label: "Partnership", href: "/singapore/partnerships" },
      { label: "Volunteer", href: "https://forms.gle/volunteer-spd" },
    ],
    social: {
      linkedin: "https://linkedin.com/company/singaporeproductdesign",
      instagram: "https://instagram.com/sgproductdesign",
      luma: "https://lu.ma/singaporeproductdesign",
    },
  },

  hero: {
    heading: "Singapore Product Design",
    body: "A community for product designers in Singapore.",
    ctaLabel: "See upcoming events",
    ctaHref: "https://lu.ma/singaporeproductdesign",
    image: "/images/singapore/hero.jpg",
  },

  initiatives: [
    {
      title: "Career Coaching",
      description:
        "Free one-on-one career coaching with Sangeetha Selvaraja, an experienced product design leader.",
      ctaLabel: "Book a session",
      ctaHref: "https://cal.com/sangeetha/30min-copy",
    },
    {
      title: "DotGrid Zine",
      description:
        "A design zine exploring ideas, conversations, and perspectives from the product design community.",
      ctaLabel: "Read the zine",
      ctaHref: "https://heyzine.com/flip-book/3040871950.html",
    },
  ],

  team: [
    { name: "Leonard Reese", role: "Founder" },
    { name: "Qi Jie Lim", role: "Co-organiser" },
    { name: "Sangeetha Selvaraja", role: "Co-organiser" },
    { name: "Chip Lim", role: "Partnerships" },
    { name: "Naafiah Saleem", role: "Social / Content" },
    { name: "Desiree Seow", role: "Co-organiser" },
    { name: "Natalie Oh", role: "Co-organiser, Content / Design" },
    { name: "Toby Gail", role: "Design" },
    { name: "Alicia Chong", role: "Co-organiser" },
    { name: "Angeline Quah", role: "Social / Photography" },
    { name: "Shawn Sim", role: "Photo / Video" },
    { name: "Gladys Foo", role: "Photography" },
    { name: "Mijin Choi", role: "Logistics" },
  ],

  alumniTeam: [
    { name: "Alex Wong", role: "Alumni" },
    { name: "Martyn Chan", role: "Alumni" },
    { name: "Niki Non", role: "Alumni" },
    { name: "Elle Lee", role: "Alumni" },
  ],
};

export const singaporeZines: ZineVolume[] = [
  {
    volume: 3,
    title: "Nation by Design",
    href: "https://drive.google.com/file/d/singapore-zine-vol3",
  },
  {
    volume: 2,
    title: "Ink & Pixels",
    href: "https://heyzine.com/flip-book/3040871950.html",
  },
  {
    volume: 1,
    title: "Discussions on Design",
    href: "https://drive.google.com/file/d/singapore-zine-vol1",
  },
];

export const singaporePartnershipTiers: PartnershipTierItem[] = [
  {
    title: "Support an event",
    description:
      "Sponsor a Singapore Product Design event. Your brand reaches engaged product designers across Singapore.",
    ctaLabel: "View sponsorship deck",
    ctaHref: "https://docs.google.com/presentation/d/singapore-deck",
  },
  {
    title: "Donate",
    description:
      "We're a volunteer-run community. Your donation helps us keep events free and accessible.",
    ctaLabel: "Donate",
    ctaHref: "https://buymeacoffee.com/designnerd",
  },
  {
    title: "Speak",
    description:
      "Share your expertise with the Singapore product design community.",
    ctaLabel: "Apply to speak",
    ctaHref: "https://forms.gle/speak-spd",
  },
];
