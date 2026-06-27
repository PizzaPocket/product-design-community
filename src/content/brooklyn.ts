import type { ChapterConfig } from "@/types/content";

export const brooklyn: ChapterConfig = {
  slug: "brooklyn",
  name: "Brooklyn Product Design",
  accentColor: "var(--color-deep-blueklyn)",

  nav: {
    links: [
      { label: "Events", href: "https://lu.ma/bkproductdesign" },
      { label: "About", href: "/brooklyn/about" },
    ],
    cta: { label: "Get involved", href: "https://forms.gle/mobrphDchV83EdQK9" },
  },

  footer: {
    aboutLinks: [
      { label: "About Brooklyn Product Design", href: "/brooklyn/about" },
      { label: "Product Design Community", href: "/" },
    ],
    involvedLinks: [
      { label: "Events", href: "https://lu.ma/bkproductdesign" },
      { label: "Volunteer", href: "https://forms.gle/mobrphDchV83EdQK9" },
    ],
    social: {
      linkedin: "https://linkedin.com/company/bkproductdesign",
      instagram: "https://instagram.com/bkproductdesign",
      luma: "https://lu.ma/bkproductdesign",
    },
  },

  hero: {
    heading: "Brooklyn Product Design",
    body: "A community for product designers in Brooklyn.",
    ctaLabel: "See upcoming events",
    ctaHref: "https://lu.ma/bkproductdesign",
    image: "/images/brooklyn/hero.jpg",
  },

  eventTypes: [
    {
      title: "Lightning Talks",
      description:
        "Short, focused talks from designers in the community sharing what they've learned.",
      image: "/images/brooklyn/event-lightning.jpg",
    },
    {
      title: "Fireside Chats",
      description:
        "In-depth conversations with experienced designers on craft, career, and process.",
      image: "/images/brooklyn/event-fireside.jpg",
    },
    {
      title: "Happy Hour",
      description:
        "Informal gatherings to connect with fellow designers over drinks.",
      image: "/images/brooklyn/event-happyhour.jpg",
    },
  ],

  team: [
    { name: "Brian Hui", role: "Co-Organizer, Design" },
    { name: "Jose Arias", role: "Co-Organizer, Design" },
    { name: "Samantha Li", role: "Advisor" },
    { name: "Leonard Reese", role: "Founder, Advisor" },
  ],
};
