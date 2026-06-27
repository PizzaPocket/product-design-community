import type { Metadata } from "next";
import React from "react";
import { Button } from "@/components/atoms/Button";

export const metadata: Metadata = {
  title: "Style Guide — PDC",
};

// ─── Data ────────────────────────────────────────────────────────────────────

const typeScale = [
  {
    name: "H1", specimen: "The quick brown fox jumps over the lazy dog",
    usage: "Page-level headings, hero titles", weight: "Bold", fontWeight: 700,
    desktop: { size: "60px", lh: "1.0" }, mobile: { size: "56px", lh: "1.0" },
    tokens: { size: "--text-h1", lh: "--lh-h1" },
  },
  {
    name: "H2", specimen: "Events uplifting local designers",
    usage: "Section headings", weight: "Bold", fontWeight: 700,
    desktop: { size: "32px", lh: "1.2" }, mobile: { size: "28px", lh: "1.2" },
    tokens: { size: "--text-h2", lh: "--lh-h2" },
  },
  {
    name: "H3", specimen: "Design Speaker Sessions",
    usage: "Card headings, subsection titles", weight: "Semibold", fontWeight: 600,
    desktop: { size: "28px", lh: "1.4" }, mobile: { size: "20px", lh: "1.3" },
    tokens: { size: "--text-h3", lh: "--lh-h3" },
  },
  {
    name: "B1", specimen: "Connecting the world's product design community through curiosity and shared learning.",
    usage: "Lead paragraphs, hero body copy", weight: "Regular", fontWeight: 400,
    desktop: { size: "20px", lh: "1.5" }, mobile: { size: "18px", lh: "1.4" },
    tokens: { size: "--text-b1", lh: "--lh-b1" },
  },
  {
    name: "B2", specimen: "Our speaker events bring together industry experts to share stories, lessons, and inspiration that help us grow. More than just talks, they're a place where strangers become collaborators, and ideas spark impact far beyond the event.",
    usage: "Body copy, card descriptions, footer links", weight: "Regular", fontWeight: 400,
    desktop: { size: "16px", lh: "1.6" }, mobile: { size: "14px", lh: "1.5" },
    tokens: { size: "--text-b2", lh: "--lh-b2" },
  },
  {
    name: "Label", specimen: "Find Your Chapter", uppercase: true,
    usage: "Buttons, nav links, all-caps UI labels", weight: "Bold", fontWeight: 700,
    desktop: { size: "16px", lh: "1.6", ls: "0.08em" }, mobile: { size: "14px", lh: "1.5", ls: "0.08em" },
    tokens: { size: "--text-label", lh: "--lh-label", ls: "--ls-label" },
  },
] as const;

const brandColors = [
  { name: "Deep Blueklyn",    cssVar: "--color-deep-blueklyn",    hex: "#409AF9", usage: "Brooklyn accent · links · CTAs · interactive states" },
  { name: "LA Poolside",      cssVar: "--color-la-poolside",      hex: "#60DBDA", usage: "Los Angeles chapter accent" },
  { name: "Singapore Sling",  cssVar: "--color-singapore-sling",  hex: "#F66363", usage: "Singapore chapter accent" },
  { name: "Egg Custard Tart", cssVar: "--color-egg-custard-tart", hex: "#F8DA4D", usage: "Illustration accent · global brand palette" },
  { name: "Cookie Dough",     cssVar: "--color-cookie-dough",     hex: "#FFFAEF", usage: "Page background · warm neutral" },
];

const neutralColors = [
  { name: "Nearly Black",     cssVar: "--color-nearly-black",     hex: "#1B1D1F", usage: "Primary text · dark backgrounds · button fills" },
  { name: "Really Dark Grey", cssVar: "--color-really-dark-grey", hex: "#4A4A4A", usage: "Secondary text · footer background" },
  { name: "Just Grey",        cssVar: "--color-just-grey",        hex: "#9C9C9C", usage: "Subdued text · borders · disabled states" },
  { name: "Literally White",  cssVar: "--color-literally-white",  hex: "#FFFFFF", usage: "White backgrounds · text on dark backgrounds" },
];

const radii = [
  { token: "--radius-image",  value: "40px", label: "Image",  usage: "Photos and media — md+ only. On mobile images are full-bleed with no radius. Use md:rounded-image." },
  { token: "--radius-button", value: "10px", label: "Button", usage: "All button variants — primary, secondary, tertiary." },
  { token: "--radius-card",   value: "8px",  label: "Card",   usage: "Small content cards and chips." },
];

const spacingTokens = [
  {
    group: "Layout",
    tokens: [
      { token: "--section-px", value: "120px / 60px / 24px", note: "Horizontal page padding — desktop / tablet / mobile" },
      { token: "--page-max-w", value: "1440px",              note: "Maximum content width for all sections and rows" },
      { token: "--nav-height", value: "74px",                note: "Sticky nav bar height" },
      { token: "--gap-nav",    value: "24px",                note: "Gap between desktop nav links" },
    ],
  },
];

const photoRules = [
  { rule: "Aspect ratio",     value: "2 / 1", detail: "Used consistently for AlternatingMediaRow and ChapterCard. Forces a wide cinematic crop regardless of source image." },
  { rule: "Object fit",       value: "cover + center", detail: "object-cover object-center — always. Never stretch or letterbox." },
  { rule: "Corner radius",    value: "md:rounded-image (40px)", detail: "Rounded only at md+ breakpoints. On mobile, images are full-bleed: no horizontal padding, no corner radius." },
  { rule: "Alt text",         value: "Descriptive or empty", detail: 'Decorative images use alt="" aria-hidden="true". Content images get a descriptive alt.' },
  { rule: "Hero treatment",   value: "object-cover + scrim", detail: "Hero images span full width with object-cover. A gradient scrim (from-nearly-black/75 left to transparent) ensures text legibility." },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function Token({ name }: { name: string }) {
  return (
    <span className="inline-block font-mono text-deep-blueklyn bg-cookie-dough px-1.5 py-0.5 rounded" style={{ fontSize: "13px" }}>
      {name}
    </span>
  );
}

function MetaLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="block font-bold uppercase text-just-grey" style={{ fontSize: "11px", letterSpacing: "0.1em" }}>
      {children}
    </span>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div id={id} className="flex flex-col gap-2 pb-6 border-b border-nearly-black">
      <h2 className="font-bold" style={{ fontSize: "var(--text-h2)", lineHeight: "var(--lh-h2)" }}>
        {children}
      </h2>
    </div>
  );
}

function ColorSwatch({ name, cssVar, hex, usage }: { name: string; cssVar: string; hex: string; usage: string }) {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden border border-just-grey/20">
      <div className="h-24 w-full" style={{ backgroundColor: `var(${cssVar})` }} />
      <div className="flex flex-col gap-1 p-4 bg-literally-white">
        <div className="flex items-center justify-between gap-2">
          <span className="font-bold text-nearly-black" style={{ fontSize: "var(--text-b2)" }}>{name}</span>
          <span className="font-mono text-just-grey" style={{ fontSize: "12px" }}>{hex}</span>
        </div>
        <Token name={cssVar} />
        <p className="text-really-dark-grey mt-1" style={{ fontSize: "12px", lineHeight: "1.5" }}>{usage}</p>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const NAV_SECTIONS = [
  ["Typography",  "#typography"],
  ["Colors",      "#colors"],
  ["Spacing",     "#spacing"],
  ["Radii",       "#radii"],
  ["Photography", "#photography"],
  ["Buttons",     "#buttons"],
];

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen bg-literally-white text-nearly-black">

      {/* Sticky header */}
      <header
        className="sticky top-0 z-50 bg-literally-white border-b border-just-grey/20 flex items-center justify-between px-[var(--section-px)]"
        style={{ height: "var(--nav-height)" }}
      >
        <div className="flex items-center gap-3">
          <a href="/" className="text-just-grey hover:text-nearly-black transition-colors" style={{ fontSize: "var(--text-b2)" }}>
            ← PDC
          </a>
          <span className="text-just-grey" aria-hidden>/</span>
          <span className="font-bold" style={{ fontSize: "var(--text-b2)" }}>Style Guide</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {NAV_SECTIONS.map(([label, href]) => (
            <a key={href} href={href}
               className="font-bold uppercase text-just-grey hover:text-nearly-black transition-colors"
               style={{ fontSize: "var(--text-label)", letterSpacing: "var(--ls-label)" }}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main className="max-w-[var(--page-max-w)] mx-auto px-[var(--section-px)]" style={{ paddingTop: "64px", paddingBottom: "120px" }}>

        {/* Page title */}
        <div className="flex flex-col gap-4 mb-20 pb-10 border-b border-just-grey/20">
          <h1 className="font-bold" style={{ fontSize: "var(--text-h1)", lineHeight: "var(--lh-h1)" }}>
            Style Guide
          </h1>
          <p className="text-really-dark-grey max-w-2xl" style={{ fontSize: "var(--text-b1)", lineHeight: "var(--lh-b1)" }}>
            Design tokens and visual standards for productdesign.community. Specimens respond to the actual viewport — resize to see the M preset kick in below 768px.
          </p>
        </div>

        {/* ── TYPOGRAPHY ─────────────────────────────────────────────────── */}
        <section className="flex flex-col gap-12 mb-24">
          <SectionHeading id="typography">Typography</SectionHeading>
          <p className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>
            Typeface: <strong>Figtree</strong> — loaded via <code className="font-mono text-deep-blueklyn" style={{ fontSize: "14px" }}>next/font/google</code>.
            Two responsive presets: <strong>L</strong> (≥768px) and <strong>M</strong> (&lt;768px).
            Pattern: <code className="font-mono text-deep-blueklyn" style={{ fontSize: "14px" }}>{"fontSize: 'var(--text-h1)', lineHeight: 'var(--lh-h1)'"}</code>
          </p>
          <div className="flex flex-col">
            {typeScale.map((style, i) => {
              const tokens = Object.values(style.tokens).filter(Boolean);
              return (
                <div key={style.name} className={`flex flex-col gap-8 py-12 ${i > 0 ? "border-t border-just-grey/20" : ""}`}>
                  <p className="text-nearly-black" style={{
                    fontSize: `var(${style.tokens.size})`, lineHeight: `var(${style.tokens.lh})`,
                    fontWeight: style.fontWeight,
                    letterSpacing: "ls" in style.tokens ? `var(${style.tokens.ls})` : undefined,
                    textTransform: "uppercase" in style && style.uppercase ? "uppercase" : undefined,
                  }}>
                    {style.specimen}
                  </p>
                  <div className="flex flex-wrap gap-x-10 gap-y-4">
                    <div className="flex flex-col gap-1 min-w-[56px]">
                      <MetaLabel>Style</MetaLabel>
                      <span className="inline-block font-bold text-literally-white bg-nearly-black px-2 py-0.5 rounded self-start"
                            style={{ fontSize: "var(--text-b2)", lineHeight: "1.5" }}>{style.name}</span>
                    </div>
                    <div className="flex flex-col gap-1"><MetaLabel>Weight</MetaLabel>
                      <span style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>{style.weight}</span>
                    </div>
                    <div className="flex flex-col gap-1"><MetaLabel>Desktop ≥768px</MetaLabel>
                      <span className="font-mono" style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>
                        {style.desktop.size} / lh {style.desktop.lh}{"ls" in style.desktop ? ` / ls ${style.desktop.ls}` : ""}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1"><MetaLabel>Mobile &lt;768px</MetaLabel>
                      <span className="font-mono" style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>
                        {style.mobile.size} / lh {style.mobile.lh}{"ls" in style.mobile ? ` / ls ${style.mobile.ls}` : ""}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1.5"><MetaLabel>Tokens</MetaLabel>
                      <div className="flex flex-wrap gap-1.5">{tokens.map((t) => <Token key={t} name={t} />)}</div>
                    </div>
                    <div className="flex flex-col gap-1"><MetaLabel>Used for</MetaLabel>
                      <span className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>{style.usage}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── COLORS ─────────────────────────────────────────────────────── */}
        <section className="flex flex-col gap-12 mb-24">
          <SectionHeading id="colors">Colors</SectionHeading>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-really-dark-grey uppercase" style={{ fontSize: "12px", letterSpacing: "0.1em" }}>Brand palette</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {brandColors.map((c) => <ColorSwatch key={c.cssVar} {...c} />)}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-really-dark-grey uppercase" style={{ fontSize: "12px", letterSpacing: "0.1em" }}>Neutrals</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {neutralColors.map((c) => <ColorSwatch key={c.cssVar} {...c} />)}
              </div>
            </div>
            <div className="bg-cookie-dough rounded-lg p-6 flex flex-col gap-2">
              <p className="font-bold" style={{ fontSize: "var(--text-b2)" }}>Token rule</p>
              <p className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>
                Raw hex values must never appear in component files. Use Tailwind utilities (<code className="font-mono text-deep-blueklyn" style={{ fontSize: "13px" }}>bg-deep-blueklyn</code>, <code className="font-mono text-deep-blueklyn" style={{ fontSize: "13px" }}>text-cookie-dough</code>) or CSS variables (<code className="font-mono text-deep-blueklyn" style={{ fontSize: "13px" }}>var(--color-deep-blueklyn)</code>) only. Changing a color = one line in <code className="font-mono text-deep-blueklyn" style={{ fontSize: "13px" }}>globals.css</code>.
              </p>
            </div>
          </div>
        </section>

        {/* ── SPACING ────────────────────────────────────────────────────── */}
        <section className="flex flex-col gap-12 mb-24">
          <SectionHeading id="spacing">Spacing & Layout</SectionHeading>
          <div className="flex flex-col gap-10">
            {spacingTokens.map((group) => (
              <div key={group.group} className="flex flex-col gap-4">
                <h3 className="font-semibold text-really-dark-grey uppercase" style={{ fontSize: "12px", letterSpacing: "0.1em" }}>{group.group}</h3>
                <div className="flex flex-col divide-y divide-just-grey/20 border border-just-grey/20 rounded-lg overflow-hidden">
                  {group.tokens.map((t) => (
                    <div key={t.token} className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 px-5 py-4 bg-literally-white">
                      <div className="md:w-48 flex-shrink-0"><Token name={t.token} /></div>
                      <div className="md:w-36 flex-shrink-0">
                        <span className="font-mono text-nearly-black" style={{ fontSize: "var(--text-b2)" }}>{t.value}</span>
                      </div>
                      <span className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>{t.note}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {/* Section padding live demo */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-really-dark-grey uppercase" style={{ fontSize: "12px", letterSpacing: "0.1em" }}>Section padding preview</h3>
              <div className="relative bg-cookie-dough rounded-lg overflow-hidden" style={{ height: "64px" }}>
                <div className="absolute inset-0 flex items-center px-[var(--section-px)]">
                  <div className="w-full h-8 bg-deep-blueklyn/20 rounded flex items-center justify-center">
                    <span className="text-deep-blueklyn font-mono" style={{ fontSize: "12px" }}>content</span>
                  </div>
                </div>
                <div className="absolute inset-y-0 left-0 bg-deep-blueklyn/10 flex items-center justify-center" style={{ width: "var(--section-px)" }}>
                  <span className="text-deep-blueklyn font-mono" style={{ fontSize: "11px" }}>← px</span>
                </div>
                <div className="absolute inset-y-0 right-0 bg-deep-blueklyn/10 flex items-center justify-center" style={{ width: "var(--section-px)" }}>
                  <span className="text-deep-blueklyn font-mono" style={{ fontSize: "11px" }}>px →</span>
                </div>
              </div>
              <p className="text-just-grey" style={{ fontSize: "var(--text-b2)" }}>
                Resize the window to see <Token name="--section-px" /> adjust: 120px (desktop) → 60px (tablet) → 24px (mobile).
              </p>
            </div>
          </div>
        </section>

        {/* ── CORNER RADIUS ──────────────────────────────────────────────── */}
        <section className="flex flex-col gap-12 mb-24">
          <SectionHeading id="radii">Corner Radius</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Image radius — show an actual photo */}
            <div className="flex flex-col gap-5">
              <div className="overflow-hidden md:rounded-image aspect-[2/1] w-full">
                <img src="/images/global/global_4.jpg" alt="" aria-hidden className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-nearly-black" style={{ fontSize: "var(--text-h3)", lineHeight: "var(--lh-h3)" }}>40px</span>
                  <span className="font-semibold text-just-grey" style={{ fontSize: "var(--text-b2)" }}>Image</span>
                </div>
                <Token name="--radius-image" />
                <p className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>{radii[0].usage}</p>
              </div>
            </div>

            {/* Button radius — show an actual button */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-center bg-cookie-dough aspect-[2/1] w-full" style={{ borderRadius: "var(--radius-image)" }}>
                <Button variant="primary">Get involved</Button>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-nearly-black" style={{ fontSize: "var(--text-h3)", lineHeight: "var(--lh-h3)" }}>10px</span>
                  <span className="font-semibold text-just-grey" style={{ fontSize: "var(--text-b2)" }}>Button</span>
                </div>
                <Token name="--radius-button" />
                <p className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>{radii[1].usage}</p>
              </div>
            </div>

            {/* Card radius — show an actual card */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-center bg-cookie-dough aspect-[2/1] w-full" style={{ borderRadius: "var(--radius-image)" }}>
                <div className="bg-literally-white border border-just-grey/30 p-5 flex flex-col gap-2 w-3/4" style={{ borderRadius: "var(--radius-card)" }}>
                  <p className="font-semibold text-nearly-black" style={{ fontSize: "var(--text-b2)" }}>Career Coaching</p>
                  <p className="text-really-dark-grey" style={{ fontSize: "12px", lineHeight: "1.5" }}>Free 1:1 sessions with an experienced product design leader.</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-nearly-black" style={{ fontSize: "var(--text-h3)", lineHeight: "var(--lh-h3)" }}>8px</span>
                  <span className="font-semibold text-just-grey" style={{ fontSize: "var(--text-b2)" }}>Card</span>
                </div>
                <Token name="--radius-card" />
                <p className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>{radii[2].usage}</p>
              </div>
            </div>

          </div>
        </section>

        {/* ── PHOTOGRAPHY ────────────────────────────────────────────────── */}
        <section className="flex flex-col gap-12 mb-24">
          <SectionHeading id="photography">Photography & Media</SectionHeading>

          {/* Single responsive example */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-really-dark-grey uppercase" style={{ fontSize: "12px", letterSpacing: "0.1em" }}>
              Responsive treatment — resize to see it adapt
            </h3>
            <div className="-mx-[var(--section-px)] md:mx-0 overflow-hidden aspect-[2/1] w-[calc(100%+2*var(--section-px))] md:w-full md:rounded-image">
              <img
                src="/images/global/global_6.jpeg"
                alt="Example: full-bleed on mobile, rounded on desktop"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="text-just-grey" style={{ fontSize: "var(--text-b2)" }}>
              Mobile: full-bleed with no corner radius. Desktop (md+): constrained width with <Token name="--radius-image" />.
            </p>
          </div>

          {/* Rules table */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-really-dark-grey uppercase" style={{ fontSize: "12px", letterSpacing: "0.1em" }}>
              Rules
            </h3>
            <div className="flex flex-col divide-y divide-just-grey/20 border border-just-grey/20 rounded-lg overflow-hidden">
              {photoRules.map((r) => (
                <div key={r.rule} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 px-5 py-4 bg-literally-white">
                  <div className="md:w-40 flex-shrink-0">
                    <span className="font-bold text-nearly-black" style={{ fontSize: "var(--text-b2)" }}>{r.rule}</span>
                  </div>
                  <div className="md:w-48 flex-shrink-0">
                    <span className="font-mono text-deep-blueklyn" style={{ fontSize: "13px" }}>{r.value}</span>
                  </div>
                  <span className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>{r.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BUTTONS ────────────────────────────────────────────────────── */}
        <section className="flex flex-col gap-12">
          <SectionHeading id="buttons">Buttons</SectionHeading>

          <div className="flex flex-col gap-10">

            {/* Variants — default (hover is live) */}
            <div className="flex flex-col gap-4">
              <div className="flex items-baseline justify-between">
                <h3 className="font-semibold text-really-dark-grey uppercase" style={{ fontSize: "12px", letterSpacing: "0.1em" }}>
                  Variants
                </h3>
                <span className="text-just-grey" style={{ fontSize: "12px" }}>Hover is live</span>
              </div>
              <div className="flex flex-wrap items-center gap-6 p-8 bg-cookie-dough rounded-lg">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="tertiary">Tertiary</Button>
              </div>
            </div>

            {/* Variants — disabled */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-really-dark-grey uppercase" style={{ fontSize: "12px", letterSpacing: "0.1em" }}>
                Variants — disabled state
              </h3>
              <div className="flex flex-wrap items-center gap-6 p-8 bg-cookie-dough rounded-lg">
                <Button variant="primary" disabled>Primary</Button>
                <Button variant="secondary" disabled>Secondary</Button>
                <Button variant="tertiary" disabled>Tertiary</Button>
              </div>
            </div>

            {/* Specs table */}
            <div className="flex flex-col divide-y divide-just-grey/20 border border-just-grey/20 rounded-lg overflow-hidden">
              {[
                { variant: "Primary",   default: "bg nearly-black · white text",       hover: "bg deep-blueklyn",                   disabled: "bg just-grey"   },
                { variant: "Secondary", default: "border nearly-black · no fill",       hover: "border + text deep-blueklyn",        disabled: "border + text just-grey" },
                { variant: "Tertiary",  default: "no border or fill · nearly-black text", hover: "text deep-blueklyn",              disabled: "text just-grey" },
              ].map((row) => (
                <div key={row.variant} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 px-5 py-4 bg-literally-white">
                  <div className="md:w-28 flex-shrink-0">
                    <span className="font-bold text-nearly-black" style={{ fontSize: "var(--text-b2)" }}>{row.variant}</span>
                  </div>
                  <div className="flex-1 flex flex-col md:flex-row gap-2 md:gap-8">
                    <div className="flex-1"><MetaLabel>Default</MetaLabel><span className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)" }}>{row.default}</span></div>
                    <div className="flex-1"><MetaLabel>Hover</MetaLabel><span className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)" }}>{row.hover}</span></div>
                    <div className="flex-1"><MetaLabel>Disabled</MetaLabel><span className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)" }}>{row.disabled}</span></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Shared props */}
            <div className="bg-cookie-dough rounded-lg p-6 flex flex-col gap-3">
              <p className="font-bold" style={{ fontSize: "var(--text-b2)" }}>All variants share</p>
              <div className="flex flex-wrap gap-1.5">
                {["px-4 py-2", "font-bold", "uppercase", "tracking-[1.28px]", "rounded-[var(--radius-button)]", "transition-colors duration-150"].map((c) => (
                  <code key={c} className="font-mono text-deep-blueklyn bg-literally-white px-1.5 py-0.5 rounded border border-just-grey/20" style={{ fontSize: "13px" }}>{c}</code>
                ))}
              </div>
              <p className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>
                Renders as <code className="font-mono text-deep-blueklyn" style={{ fontSize: "13px" }}>{"<a>"}</code> when <code className="font-mono text-deep-blueklyn" style={{ fontSize: "13px" }}>href</code> is provided, <code className="font-mono text-deep-blueklyn" style={{ fontSize: "13px" }}>{"<button>"}</code> otherwise. Pass <code className="font-mono text-deep-blueklyn" style={{ fontSize: "13px" }}>uppercase={"{false}"}</code> to suppress all-caps (e.g. nav CTA).
              </p>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
