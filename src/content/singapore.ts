import type { ChapterConfig, ZineVolume, PartnershipTierItem } from "@/types/content";

export const singapore: ChapterConfig = {
  slug: "singapore",
  name: "Singapore Product Design",
  accentColor: "var(--color-singapore-sling)",
  logo: "/logos/spd_logo_nav.svg",
  footerLogo: "/logos/spd_logo_footer.svg",

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
    heading: "What's on in the Little Red Dot",
    image: "/images/singapore/hero.jpg",
    textAlign: "center",
    scrim: false,
    compact: true,
  },

  about: {
    heading: "About us",
    body: "Singapore Product Design was founded in 2022 to bring together product designers across Singapore. In a city that moves fast and builds even faster, we create space to slow down, share honestly, and grow alongside each other.",
  },

  stats: [
    { value: "2022", label: "Founded" },
    { value: "3,500+", label: "Repeat attendees" },
  ],

  values: [
    {
      illustration: "/illustrations/value-grow.png",
      heading: "Grow together, learn always",
      body: "We believe the best design communities are built on curiosity and generosity. From speaker events, workshops, to open conversations, we're here to help each other grow no matter your experience level.",
    },
    {
      illustration: "/illustrations/value-impact.png",
      heading: "Making impact with design",
      body: "We're more than just designers. We're a community driven by shared purpose. By coming together, we use design to spark dialogue, support each other's goals, and contribute to something bigger than ourselves.",
    },
    {
      illustration: "/illustrations/value-strangers.png",
      heading: "Come as strangers, leave as friends",
      body: "Whether it's your first event or your hundredth, you'll find people ready to welcome, support, and grow with you. Here, collaboration turns into camaraderie, and shared passion turns strangers into lifelong friends and allies.",
    },
  ],

  initiatives: [
    {
      title: "Career Coaching",
      description:
        "Free one-on-one career coaching with Sangeetha Selvaraja, an experienced product design leader.",
      ctaLabel: "Book a session",
      ctaHref: "https://cal.com/sangeetha/30min-copy",
      image: "/images/singapore/initiative_coaching.png",
    },
    {
      title: "DotGrid Zine",
      description:
        "A design zine exploring ideas, conversations, and perspectives from the product design community.",
      ctaLabel: "Read the zine",
      ctaHref: "https://heyzine.com/flip-book/3040871950.html",
      image: "/images/singapore/zine_vol3_cover.png",
    },
  ],

  team: [
    { name: "Leonard Reese",       role: "Founder",                          photo: "/images/singapore/team_1.png" },
    { name: "Qi Jie Lim",          role: "Partnerships",                     photo: "/images/singapore/team_2.png" },
    { name: "Sangeetha Selvaraja", role: "Partnerships",                     photo: "/images/singapore/team_3.png" },
    { name: "Chip Lim",            role: "Partnerships",                     photo: "/images/singapore/team_4.png" },
    { name: "Naafiah Saleem",      role: "Social Media, Content",            photo: "/images/singapore/team_5.png" },
    { name: "Desiree Seow",        role: "Co-Organiser, Content, Design",    photo: "/images/singapore/team_6.png" },
    { name: "Natalie Oh",          role: "Co-Organiser, Content, Design",    photo: "/images/singapore/team_7.png" },
    { name: "Toby Gail",           role: "Co-Organiser, Design",             photo: "/images/singapore/team_8.png" },
    { name: "Alicia Chong",        role: "Co-Organiser",                     photo: "/images/singapore/team_9.png" },
    { name: "Angeline Quah",       role: "Social Media, Photography",        photo: "/images/singapore/team_10.png" },
    { name: "Shawn Sim",           role: "Photography, Videography",         photo: "/images/singapore/team_11.png" },
    { name: "Gladys Foo",          role: "Photography",                      photo: "/images/singapore/team_12.png" },
    { name: "Mijin Choi",          role: "Logistics",                        photo: "/images/singapore/team_13.png" },
  ],

  alumniTeam: [
    { name: "Alex Wong",   role: "Alumni" },
    { name: "Martyn Chan", role: "Alumni" },
    { name: "Niki Non",    role: "Alumni" },
    { name: "Elle Lee",    role: "Alumni" },
  ],
};

export const singaporeZines: ZineVolume[] = [
  {
    volume: 3,
    title: "Nation by Design",
    href: "https://drive.google.com/file/d/singapore-zine-vol3",
    cover: "/images/singapore/zine_vol3_cover.png",
  },
  {
    volume: 2,
    title: "Ink & Pixels",
    href: "https://heyzine.com/flip-book/3040871950.html",
    cover: "/images/singapore/zine_vol2_cover.png",
  },
  {
    volume: 1,
    title: "Discussions on Design",
    href: "https://drive.google.com/file/d/singapore-zine-vol1",
    cover: "/images/singapore/zine_vol1_cover.png",
  },
];

export const singaporePartnershipTiers: PartnershipTierItem[] = [
  {
    title: "Support an event",
    description:
      "Sponsor a Singapore Product Design event. Your brand reaches engaged product designers across Singapore.",
    ctaLabel: "View sponsorship deck",
    ctaHref: "https://docs.google.com/presentation/d/singapore-deck",
    image: "/images/singapore/partnership_event.jpg",
  },
  {
    title: "Donate",
    description:
      "We're a volunteer-run community. Your donation helps us keep events free and accessible.",
    ctaLabel: "Donate",
    ctaHref: "https://buymeacoffee.com/designnerd",
    image: "/images/singapore/partnership_donate.jpg",
  },
  {
    title: "Speak",
    description:
      "Share your expertise with the Singapore product design community.",
    ctaLabel: "Apply to speak",
    ctaHref: "https://forms.gle/speak-spd",
    image: "/images/singapore/partnership_speak.jpg",
  },
];
