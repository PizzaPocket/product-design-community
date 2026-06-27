import type { ChapterConfig } from "@/types/content";

export const brooklyn: ChapterConfig = {
  slug: "brooklyn",
  name: "Brooklyn Product Design",
  accentColor: "var(--color-deep-blueklyn)",
  logo: "/logos/bpd_logo_nav.svg",
  footerLogo: "/logos/bpd_logo_footer.svg",

  nav: {
    links: [
      { label: "Events", href: "https://lu.ma/bkproductdesign" },
      { label: "About", href: "/brooklyn/about" },
    ],
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
    heading: "What's on over the Bridge",
    image: "/images/brooklyn/hero.webp",
    textAlign: "center",
    scrim: true,
    compact: true,
  },

  about: {
    heading: "About us",
    body: "Brooklyn Product Design has been bringing together designers in New York since 2017. We create space for honest conversations, unexpected connections, and the kind of learning that only happens when people get together in a room.",
  },

  stats: [
    { value: "2017", label: "Founded" },
    { value: "5,600+", label: "Meetup members" },
    { value: "600+", label: "Luma subscribers" },
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

  eventTypes: [
    {
      title: "Lightning Talks",
      description:
        "Short, focused talks from designers in the community sharing what they've learned, built, or gotten wrong. Fast-paced, honest, and always worth your evening.",
      image: "/images/brooklyn/event_lightning_talks.webp",
    },
    {
      title: "Fireside Chats",
      description:
        "In-depth conversations with experienced designers on craft, career, and process. Less stage, more dialogue — the kind of talk you'd want to have over coffee.",
      image: "/images/brooklyn/event_fireside.webp",
    },
    {
      title: "Happy Hour",
      description:
        "Informal gatherings to unwind, swap stories, and meet the designers working around you. No agenda, no slides — just good people and better drinks.",
      image: "/images/brooklyn/event_happy_hour.webp",
    },
  ],

  team: [
    { name: "Brian Hui", role: "Co-Organizer, Design", photo: "/images/brooklyn/team_1.jpeg" },
    { name: "Jose Arias", role: "Co-Organizer, Design", photo: "/images/brooklyn/team_2.jpeg" },
  ],

  alumniTeam: [
    { name: "Samantha Li", role: "Advisor", photo: "/images/brooklyn/team_3.png" },
    { name: "Leonard Reese", role: "Founder, Advisor", photo: "/images/brooklyn/team_4.png" },
  ],
};
