import type { ChapterConfig, EventTypeItem } from "@/types/content";

export interface LogoItem {
  src: string;
  alt: string;
  href?: string;
}

export const pdc: ChapterConfig = {
  slug: "pdc",
  name: "Product Design Community",
  accentColor: "var(--color-deep-blueklyn)",
  logo: "/images/global/logo_strip.png",

  nav: {
    links: [
      { label: "Brooklyn", href: "/brooklyn" },
      { label: "Los Angeles", href: "/losangeles" },
      { label: "Singapore", href: "/singapore" },
    ],
  },

  footer: {
    aboutLinks: [
      { label: "Brooklyn Product Design", href: "/brooklyn" },
      { label: "Los Angeles Product Design", href: "/losangeles" },
      { label: "Singapore Product Design", href: "/singapore" },
    ],
    involvedLinks: [
      { label: "Brooklyn Events", href: "https://lu.ma/bkproductdesign" },
      { label: "LA Events", href: "https://luma.com/losangelesproductdesign" },
      { label: "Singapore Events", href: "https://lu.ma/singaporeproductdesign" },
    ],
    social: {
      linkedin: "https://linkedin.com/company/productdesigncommunity",
      instagram: "https://instagram.com/productdesigncommunity",
    },
  },

  hero: {
    heading: "This is Product Design Community",
    body: "Connecting the world's product design community through curiosity and shared learning.",
    ctaLabel: "Find your chapter",
    ctaHref: "#chapters",
    image: "/images/global/global_1.jpg",
  },
};

export const pdcEventTypes: EventTypeItem[] = [
  {
    title: "Design Speaker Sessions",
    description:
      "Our speaker events bring together industry experts to share stories, lessons, and inspiration that help us grow. More than just talks, they're a place where strangers become collaborators, and ideas spark impact far beyond the event.",
    image: "/images/global/global_2.jpg",
  },
  {
    title: "Happy Hours",
    description:
      "Our happy hours offer a relaxed setting for product design professionals and enthusiasts to unwind, share ideas, and build lasting connections. It's where casual chats turn into new partnerships, and shared passion turns into lasting friendships.",
    image: "/images/global/global_3.jpg",
  },
  {
    title: "Workshops and Design Jams",
    description:
      "Our hackathon-style design jams are fast-paced, purpose-driven gatherings where creativity meets real-world impact. Whether you're here to learn, lead, or just have fun, you'll find a supportive team, meaningful challenges, and a chance to turn bold ideas into action as a community.",
    image: "/images/global/global_4.jpg",
  },
];

export const pdcValuePillars = [
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
];

export const pdcPartnerLogos: LogoItem[] = [
  { src: "/logos/partners/partner_01.png", alt: "Adobe" },
  { src: "/logos/partners/partner_02.png", alt: "BrainStation" },
  { src: "/logos/partners/partner_03.png", alt: "Capital One" },
  { src: "/logos/partners/partner_04.png", alt: "Duolingo" },
  { src: "/logos/partners/partner_05.png", alt: "Framer" },
  { src: "/logos/partners/partner_06.png", alt: "General Assembly" },
  { src: "/logos/partners/partner_07.png", alt: "GDG Singapore" },
  { src: "/logos/partners/partner_08.png", alt: "Grab" },
  { src: "/logos/partners/partner_09.png", alt: "LottieFiles" },
  { src: "/logos/partners/partner_10.png", alt: "Mastercard" },
  { src: "/logos/partners/partner_11.png", alt: "Mobbin" },
  { src: "/logos/partners/partner_12.png", alt: "OKX" },
  { src: "/logos/partners/partner_13.png", alt: "Optimal" },
  { src: "/logos/partners/partner_14.png", alt: "Pratt Institute" },
  { src: "/logos/partners/partner_15.png", alt: "ShopBack" },
  { src: "/logos/partners/partner_16.png", alt: "StashAway" },
  { src: "/logos/partners/partner_17.png", alt: "Taskade" },
  { src: "/logos/partners/partner_18.png", alt: "Tinder" },
];

export const pdcChapters = [
  {
    name: "Brooklyn",
    href: "/brooklyn",
    image: "/images/brooklyn/chapter-card.jpg",
  },
  {
    name: "Los Angeles",
    href: "/losangeles",
    image: "/images/losangeles/chapter-card.jpg",
  },
  {
    name: "Singapore",
    href: "/singapore",
    image: "/images/singapore/chapter-card.jpg",
  },
];
