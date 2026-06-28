import type { ChapterConfig } from "@/types/content";
import type { LogoItem } from "@/content/pdc";

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
    scrim: "tb",
    compact: true,
    ctaLabel: "Go to events",
    ctaHref: "https://lu.ma/bkproductdesign",
    ctaVariant: "primary-alt",
  },

  about: {
    heading: "About us",
    body: "Since 2017, Brooklyn Product Design has been a place where designers cross the bridge, literally and figuratively, to connect, learn, and create together. From humble beginnings to thousands of members strong, we've grown into a cornerstone of NYC's design scene.",
    paragraphs: [
      "Brooklyn Product Design began in 2017 with a simple idea: to bring people together through curiosity, creativity, and shared learning. What started as small gatherings at Fuzz in Williamsburg has grown into a thriving community of over 5,600 Meetup members and 600 Luma subscribers.",
      "We come together to learn, share, and grow, exploring everything from design systems to AI, ethics, and the creative intersections shaping our field. Our events remain grassroots, collaborative, and deeply human, led by volunteers who care about making design accessible and meaningful for all.",
      "We are a non-commercial, volunteer-run collective shaped by the people who show up, share their time, and give something back. We believe that thoughtful design deserves a thoughtful community behind it.",
      "Our events are intentionally free or low-cost. We partner with generous hosts and sponsors to keep the momentum going and provide spaces that invite reflection, celebration, and experimentation.",
      "You don't need a job title to belong here. Whether you're curious, starting out, switching fields, or a dozen years into product design, you are welcome. Come learn, teach, or just sit in the back with a coffee and take it all in.",
    ],
  },

  volunteerHref: "https://forms.gle/mobrphDchV83EdQK9",

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
      title: "Lightning talks",
      description:
        "Quick, rapid-fire sessions where community members share what they are exploring, building, or learning about. It is designed to spark curiosity, introduce emerging ideas, and uplift a broad range of perspectives.",
      image: "/images/brooklyn/event_lightning_talks.webp",
    },
    {
      title: "Fireside chats",
      description:
        "Friendly and community-centered discussions that give attendees direct access to experienced practitioners. No slides, just meaningful conversation.",
      image: "/images/brooklyn/event_fireside.webp",
    },
    {
      title: "Happy hour socials",
      description:
        "A casual, after-hours meetup where the BKPD community can unwind, share stories, and build genuine relationships beyond structured programming.",
      image: "/images/brooklyn/event_happy_hour.webp",
    },
  ],

  team: [
    { name: "Brian Hui", role: "Co-organizer", photo: "/images/brooklyn/team_1.jpeg" },
    { name: "Jose Arias", role: "Co-organizer", photo: "/images/brooklyn/team_2.jpeg" },
    { name: "Collin Hadley", role: "Co-organizer", photo: "/images/brooklyn/team_5.png" },
  ],

  alumniTeam: [
    { name: "Samantha Li", role: "Advisor", photo: "/images/brooklyn/team_3.png" },
    { name: "Leonard Reese", role: "Founder, Advisor", photo: "/images/brooklyn/team_4.png" },
    { name: "Ke Wang", role: "Alumni" },
  ],
};

export const bkPartnerLogos: LogoItem[] = [
  { src: "/logos/partners/partner_01.png", alt: "Adobe" },
  { src: "/images/losangeles/partner_2.svg", alt: "Bamboo Crowd" },
  { src: "/logos/partners/partner_02.png", alt: "BrainStation" },
  { src: "/logos/partners/partner_03.png", alt: "Capital One Bank" },
  { src: "/logos/partners/partner_04.png", alt: "Duolingo" },
  { src: "/logos/partners/partner_05.png", alt: "Framer" },
  { src: "/logos/partners/partner_06.png", alt: "General Assembly" },
  { src: "/logos/partners/partner_09.png", alt: "LottieFiles" },
  { src: "/logos/partners/partner_10.png", alt: "Mastercard" },
  { src: "/logos/partners/nyu.svg", alt: "NYU" },
  { src: "/logos/partners/pratt.svg", alt: "Pratt" },
  { src: "/logos/partners/salt.svg", alt: "Salt" },
  { src: "/logos/partners/sp.svg", alt: "S+P" },
  { src: "/logos/partners/wework.svg", alt: "WeWork" },
  { src: "/logos/partners/partner_18.png", alt: "Yext" },
];
