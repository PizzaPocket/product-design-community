import type { ChapterConfig, ZineVolume, PartnershipTierItem } from "@/types/content";
import type { LogoItem } from "@/content/pdc";

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
  },

  footer: {
    aboutLinks: [
      { label: "About Singapore Product Design", href: "/singapore/about" },
      { label: "Product Design Community", href: "/" },
    ],
    involvedLinks: [
      { label: "Events", href: "https://lu.ma/singaporeproductdesign" },
      { label: "Partnership", href: "/singapore/partnerships" },
      { label: "Volunteer", href: "https://docs.google.com/forms/d/e/1FAIpQLSca_XSvg7ybB16e3fMEQFEds2LYxlqIEmDogyEmkDJbzA05tg/viewform" },
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
    ctaLabel: "Go to events",
    ctaHref: "https://lu.ma/singaporeproductdesign",
    ctaVariant: "primary-alt",
  },

  about: {
    heading: "About us",
    body: "Founded in 2022, Singapore Product Design brings people together through shared curiosity and creative exchange. What started with a few quiet sessions has grown into one of the most active design communities in the region.",
    paragraphs: [
      "Singapore Product Design began in 2022 as a way to bring people together around shared curiosity, creative exchange, and honest conversations about product design. The first sessions were small. A few people met online to sketch, write, and think out loud. We had no formal agenda but a desire to learn and to connect.",
      "As Singapore reopened, our community grew alongside it. What started with ten designers has expanded into a collective of over 3,500 repeat event attendees. Some come to learn and network. Others come to speak, to share, or to give back.",
      "Our events are intentionally free or low-cost. We've partnered with generous hosts and sponsors to keep the momentum going and provide the spaces to create room for reflection, celebration, and experimentation.",
      "You don't need a job title to belong here. Whether you're just starting out, switching fields, or a dozen years into the industry, you are welcome. Come learn, teach, or just sit in the back with a coffee and take it all in.",
    ],
  },

  carouselImages: [
    "/images/singapore/carousel_1.jpg",
    "/images/singapore/carousel_2.jpg",
    "/images/singapore/carousel_3.jpg",
    "/images/singapore/carousel_4.jpg",
    "/images/singapore/carousel_5.jpg",
    "/images/singapore/carousel_6.jpg",
    "/images/singapore/carousel_7.jpg",
    "/images/singapore/carousel_8.jpg",
    "/images/singapore/carousel_9.jpg",
    "/images/singapore/carousel_10.jpg",
  ],

  volunteerHref: "https://docs.google.com/forms/d/e/1FAIpQLSca_XSvg7ybB16e3fMEQFEds2LYxlqIEmDogyEmkDJbzA05tg/viewform",
  donateHref: "https://buymeacoffee.com/designnerd",

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
        "A collaborative zine made with DesignSingapore Council exploring 'Nation by Design' — conversations and perspectives from the product design community.",
      ctaLabel: "Read the zine",
      ctaHref: "https://drive.google.com/file/d/19zQRNbIVw1d5SOHKjRikX2pg8H9No7ix/view?usp=sharing",
      image: "/images/singapore/initiative_zine.png",
    },
  ],

  team: [
    { name: "Qi Jie Lim",          role: "President",                        photo: "/images/singapore/team_2.png" },
    { name: "Sangeetha Selvaraja", role: "Secretary",                        photo: "/images/singapore/team_3.png" },
    { name: "Desiree Seow",        role: "Treasurer",                        photo: "/images/singapore/team_6.png" },
    { name: "Naafiah Saleem",      role: "Media Officer",                    photo: "/images/singapore/team_5.png" },
    { name: "Leonard Reese",       role: "Partnerships Officer",             photo: "/images/singapore/team_1.png" },
    { name: "Natalie Oh",          role: "Co-organiser, DotGrid Founder",    photo: "/images/singapore/team_7.png" },
    { name: "Chip Lim",            role: "Co-organiser",                     photo: "/images/singapore/team_4.png" },
    { name: "Toby Gail",           role: "Co-Organiser, Design",             photo: "/images/singapore/team_8.png" },
    { name: "Alicia Chong",        role: "Co-Organiser",                     photo: "/images/singapore/team_9.png" },
    { name: "Angeline Quah",       role: "Co-organiser",                     photo: "/images/singapore/team_10.png" },
    { name: "Shawn Sim",           role: "Co-organiser, Photography",        photo: "/images/singapore/team_11.png" },
    { name: "Gladys Foo",          role: "Co-organiser, Photography",        photo: "/images/singapore/team_12.png" },
    { name: "Mijin Choi",          role: "Co-organiser",                     photo: "/images/singapore/team_13.png" },
  ],

  alumniTeam: [
    { name: "Alex Wong" },
    { name: "Martyn Chan" },
    { name: "Niki Non" },
    { name: "Elle Lee" },
  ],
};

export const singaporeZines: ZineVolume[] = [
  {
    volume: 3,
    title: "Nation by Design",
    description: "The third launch of the community zine is a collaborative effort with DesignSingapore Council, featuring themed articles on Nation by Design for Singapore Design Week 2025.",
    href: "https://drive.google.com/file/d/19zQRNbIVw1d5SOHKjRikX2pg8H9No7ix/view?usp=sharing",
    cover: "/images/singapore/zine_vol3_cover.png",
    ctaLabel: "Read Volume 3",
  },
  {
    volume: 2,
    title: "Ink & Pixels",
    description: "The second launch of the community zine takes a spin on celebrating the community spirit with a collection of tribute articles to 5 different design communities in Singapore.",
    href: "https://heyzine.com/flip-book/3040871950.html",
    cover: "/images/singapore/zine_vol2_cover.png",
    ctaLabel: "Read Volume 2",
  },
  {
    volume: 1,
    title: "Discussions on Design",
    description: "Kickstarted by Natalie, our community zine celebrates the love for Product Design through writing. Topics include user research methods, designing for good and accessible design.",
    href: "https://drive.google.com/file/d/singapore-zine-vol1",
    cover: "/images/singapore/zine_vol1_cover.png",
    ctaLabel: "Read Volume 1",
  },
];

export const singaporePartnershipTiers: PartnershipTierItem[] = [
  {
    title: "Support an event",
    description:
      "From venues to juice boxes, every bit helps. Sponsorship lets us run better events and reach wider audiences, and we're always up for a creative collab.",
    items: [
      "Event spaces",
      "Light refreshments (food & beverage)",
      "Discount codes for attendees",
    ],
    ctaLabel: "Sponsorship info",
    ctaHref: "https://docs.google.com/document/d/1FsaCNiH0B3cEyB-cQVJ3QrCQv-x9W5ec__cDvR5lvjI/edit?usp=sharing",
    image: "/images/singapore/partnership_event.jpg",
  },
  {
    title: "Donate",
    description:
      "We're entirely volunteer-run and not-for-profit. Donations big or small help us cover essentials like printing, snacks, and web hosting. It's a small way to make a big difference.",
    ctaLabel: "Buy us a coffee",
    ctaHref: "https://buymeacoffee.com/designnerd",
    ctaIcon: "coffee",
    image: "/images/singapore/partnership_donate.jpg",
  },
  {
    title: "Speak",
    description:
      "We host regular community events in various formats — from lightning talks to deep dives. If you've got insights, war stories, or provocations to share, we'd love to hear from you.",
    items: [
      "Panel Talks",
      "Fireside Chats",
      "Pecha Kucha / World Café",
    ],
    ctaLabel: "Speaker Sign-up",
    ctaHref: "https://forms.gle/hBxEK4uJ8AqzouQh7",
    image: "/images/singapore/partnership_speak.jpg",
  },
];

export const singaporePartnerLogos: LogoItem[] = [
  { src: "/logos/partners/sg_partner_01.png", alt: "" },
  { src: "/logos/partners/sg_partner_02.png", alt: "" },
  { src: "/logos/partners/sg_partner_03.png", alt: "" },
  { src: "/logos/partners/sg_partner_04.png", alt: "" },
  { src: "/logos/partners/sg_partner_05.png", alt: "" },
  { src: "/logos/partners/sg_partner_06.png", alt: "" },
  { src: "/logos/partners/sg_partner_07.png", alt: "" },
  { src: "/logos/partners/sg_partner_08.png", alt: "" },
  { src: "/logos/partners/sg_partner_09.png", alt: "" },
  { src: "/logos/partners/sg_partner_10.png", alt: "" },
  { src: "/logos/partners/sg_partner_11.png", alt: "" },
  { src: "/logos/partners/sg_partner_12.png", alt: "" },
  { src: "/logos/partners/sg_partner_13.png", alt: "" },
];
