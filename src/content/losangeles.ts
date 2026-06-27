import type { ChapterConfig } from "@/types/content";

export const losangeles: ChapterConfig = {
  slug: "losangeles",
  name: "Los Angeles Product Design",
  accentColor: "var(--color-la-poolside)",
  logo: "/logos/lapd_logo_nav.svg",
  footerLogo: "/logos/lapd_logo_footer.svg",

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
    heading: "What's in LA",
    image: "/images/losangeles/hero.png",
    textAlign: "center",
    scrim: true,
    compact: true,
  },

  about: {
    heading: "About us",
    body: "Los Angeles Product Design was founded in 2022 to create a dedicated home for product designers across LA. In a city full of creative energy and diverse industries, we bring together designers to learn from each other, find community, and grow their craft.",
  },

  stats: [
    { value: "2022", label: "Founded" },
    { value: "1,100+", label: "Repeat attendees" },
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
    { name: "Lillian Yang",     role: "Founder / Organizer", photo: "/images/losangeles/team_1.jpeg" },
    { name: "Tiffany Lim",      role: "Partnerships",         photo: "/images/losangeles/team_2.jpeg" },
    { name: "Kevin Ulloa",      role: "Design",               photo: "/images/losangeles/team_3.jpg" },
    { name: "Leonard Reese",    role: "Co-Founder",           photo: "/images/losangeles/team_4.png" },
    { name: "Brian Hui",        role: "Content / Design",     photo: "/images/losangeles/alumni_2.jpeg" },
    { name: "Annie Chuong",     role: "Logistics",            photo: "/images/losangeles/alumni_3.jpg" },
    { name: "Sneha Lakshmanan", role: "Photography",          photo: "/images/losangeles/alumni_4.jpeg" },
  ],

  alumniTeam: [
    { name: "Samantha Li", role: "Alumni" },
  ],
};
