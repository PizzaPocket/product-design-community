import type { ChapterConfig } from "@/types/content";
import type { LogoItem } from "@/content/pdc";

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
    scrim: "bt",
    compact: true,
  },

  about: {
    heading: "About us",
    body: "Since 2022, Los Angeles Product Design has been a place where designers cross the bridge, literally and figuratively, to connect, learn, and create together. From humble beginnings post-COVID to 1K+ members, we've grown into a cornerstone of Los Angeles's design scene.",
    paragraphs: [
      "Los Angeles Product Design began in 2022 as a way to bring people together around shared curiosity, creative exchange, and honest conversations about product design. The first sessions were small and casual over coffee.",
      "As Los Angeles reopened, our community grew alongside it. What started with a few designers has expanded into a collective of over 1,100 repeat event attendees. Some come to learn and network. Others come to speak, to share, or to give back.",
      "We are a non-commercial, volunteer-run collective shaped by the people who show up, share their time, and give something back. We believe that thoughtful design deserves a thoughtful community behind it.",
      "Our events are intentionally free or low-cost. We've partnered with generous hosts and sponsors to keep the momentum going and provide the spaces to create room for reflection, celebration, and experimentation.",
      "You don't need a job title to belong here. Whether you're curious, starting out, switching fields, or a dozen years into product design, you are welcome. Come learn, teach, or just sit in the back with a coffee and take it all in.",
    ],
  },

  volunteerHref: "https://forms.gle/yT7dE3byeGCYrPos6",

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
      title: "Career coaching",
      description: "Led by Lillian, our sessions focus on guiding members from portfolio building to professional networking skills, to prepare designers for the ever-changing market.",
      image: "/images/losangeles/mentor.jpeg",
      ctaLabel: "Sign up",
      ctaHref: "https://forms.gle/yMW8SN6YGpCdMyGP6",
    },
    {
      title: "Speaker chats",
      description: "Interested to give a knowledge share or practice a design pitch?",
      image: "/images/losangeles/photo.webp",
      ctaLabel: "Sign up",
      ctaHref: "https://forms.gle/yMW8SN6YGpCdMyGP6",
    },
  ],

  team: [
    { name: "Lillian Yang",     role: "Founder / Organizer", photo: "/images/losangeles/team_1.jpeg" },
    { name: "Tiffany Lim",      role: "Partnerships",         photo: "/images/losangeles/team_2.jpeg" },
    { name: "Kevin Ulloa",      role: "Design",               photo: "/images/losangeles/team_3.jpg" },
    { name: "José Arias",       role: "Design",               photo: "/images/losangeles/alumni_1.jpeg" },
    { name: "Brian Hui",        role: "Content / Design",     photo: "/images/losangeles/alumni_2.jpeg" },
    { name: "Annie Chuong",     role: "Logistics",            photo: "/images/losangeles/alumni_3.jpg" },
    { name: "Sneha Lakshmanan", role: "Photography",          photo: "/images/losangeles/alumni_4.jpeg" },
    { name: "Leonard Reese",    role: "Advisor",              photo: "/images/losangeles/team_4.png" },
  ],

  alumniTeam: [
    { name: "Samantha Li", role: "Alumni" },
  ],
};

export const laPartnerLogos: LogoItem[] = [
  { src: "/images/losangeles/partner_1.png", alt: "Tinder" },
  { src: "/images/losangeles/partner_2.svg", alt: "Bamboo Crowd" },
  { src: "/images/losangeles/partner_3.png", alt: "Framer" },
  { src: "/images/losangeles/partner_4.png", alt: "General Assembly" },
  { src: "/images/losangeles/partner_5.png", alt: "LottieFiles" },
];
