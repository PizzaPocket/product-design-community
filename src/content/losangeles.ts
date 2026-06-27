import type { ChapterConfig } from "@/types/content";

export const losangeles: ChapterConfig = {
  slug: "losangeles",
  name: "Los Angeles Product Design",
  accentColor: "var(--color-la-poolside)",

  nav: {
    links: [
      { label: "About", href: "/losangeles/about" },
      { label: "Events", href: "https://luma.com/losangelesproductdesign" },
    ],
  },

  footer: {
    aboutLinks: [
      { label: "About Los Angeles Product Design", href: "/losangeles/about" },
      { label: "Product Design Community", href: "/" },
    ],
    involvedLinks: [
      { label: "Events", href: "https://luma.com/losangelesproductdesign" },
      { label: "Volunteer", href: "https://forms.gle/yT7dE3byeGCYrPos6" },
    ],
    social: {
      linkedin: "https://linkedin.com/company/los-angeles-product-design",
      instagram: "https://instagram.com/laproductdesign",
      luma: "https://luma.com/losangelesproductdesign",
    },
  },

  hero: {
    heading: "Los Angeles Product Design",
    body: "A community for product designers in Los Angeles.",
    ctaLabel: "See upcoming events",
    ctaHref: "https://luma.com/losangelesproductdesign",
    image: "/images/losangeles/hero.jpg",
  },

  initiatives: [
    {
      title: "Career Coaching",
      description:
        "One-on-one career coaching sessions with experienced product designers.",
      ctaLabel: "Book a session",
      ctaHref: "https://forms.gle/yMW8SN6YGpCdMyGP6",
    },
    {
      title: "Speaker Chats",
      description:
        "Sign up to speak at an upcoming LA Product Design event.",
      ctaLabel: "Sign up to speak",
      ctaHref: "https://forms.gle/yMW8SN6YGpCdMyGP6",
    },
  ],

  team: [
    { name: "Lillian Yang", role: "Founder / Organizer" },
    { name: "Leonard Reese", role: "Co-Founder" },
    { name: "Tiffany Lim", role: "Partnerships" },
    { name: "Kevin Ulloa", role: "Design" },
    { name: "Brian Hui", role: "Content / Design" },
    { name: "Annie Chuong", role: "Logistics" },
    { name: "Sneha Lakshmanan", role: "Photography" },
  ],

  alumniTeam: [{ name: "Samantha Li", role: "Alumni" }],
};
