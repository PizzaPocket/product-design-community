import type { Metadata } from "next";
import React from "react";
import { ArrowRight, Coffee, ChevronLeft } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Shelf } from "@/components/organisms/Shelf";
import { AlternatingMediaRow } from "@/components/molecules/AlternatingMediaRow";
import { Card } from "@/components/molecules/Card";
import { ProfileGrid } from "@/components/organisms/ProfileGrid";
import { LogoGrid } from "@/components/organisms/LogoGrid";
import { ImageColumns } from "@/components/organisms/ImageColumns";
import { PhotoCarousel } from "@/components/organisms/PhotoCarousel";
import { CallToAction } from "@/components/organisms/CallToAction";
import { HeroSection } from "@/components/organisms/HeroSection";
import { Tile } from "@/components/molecules/Tile";
import { BrandLogo } from "@/components/atoms/BrandLogo";
import { IconMark } from "@/components/atoms/IconMark";
import { Divider } from "@/components/atoms/Divider";
import { bkPartnerLogos, brooklyn } from "@/content/brooklyn";
import { singapore } from "@/content/singapore";
import { StyleGuideShell } from "./StyleGuideShell";

export const metadata: Metadata = { title: "Style Guide — PDC" };

// ─── Data ────────────────────────────────────────────────────────────────────

const typeScale = [
  { name: "H1", specimen: "The quick brown fox jumps over the lazy dog", usage: "Page-level headings, hero titles", weight: "Bold", fontWeight: 700, desktop: { size: "60px", lh: "1.0", ls: "-2px" }, mobile: { size: "56px", lh: "1.0", ls: "-2px" }, tokens: { size: "--text-h1", lh: "--lh-h1" } },
  { name: "H2", specimen: "Events uplifting local designers", usage: "Section headings", weight: "Bold", fontWeight: 700, desktop: { size: "40px", lh: "1.2", ls: "-0.8px" }, mobile: { size: "28px", lh: "1.2", ls: "-2px" }, tokens: { size: "--text-h2", lh: "--lh-h2" } },
  { name: "H3", specimen: "Design Speaker Sessions", usage: "Card headings, subsection titles", weight: "Semibold", fontWeight: 600, desktop: { size: "28px", lh: "1.4" }, mobile: { size: "20px", lh: "1.3", ls: "-2px" }, tokens: { size: "--text-h3", lh: "--lh-h3" } },
  { name: "B1", specimen: "Connecting the world's product design community through curiosity and shared learning.", usage: "Lead paragraphs, hero body copy", weight: "Regular", fontWeight: 400, desktop: { size: "20px", lh: "1.5" }, mobile: { size: "18px", lh: "1.4" }, tokens: { size: "--text-b1", lh: "--lh-b1" } },
  { name: "B2", specimen: "Our speaker events bring together industry experts to share stories, lessons, and inspiration.", usage: "Body copy, card descriptions, footer links", weight: "Regular", fontWeight: 400, desktop: { size: "16px", lh: "1.6" }, mobile: { size: "14px", lh: "1.5" }, tokens: { size: "--text-b2", lh: "--lh-b2" } },
  { name: "Label", specimen: "Find Your Chapter", uppercase: true, usage: "Buttons, all-caps UI labels", weight: "Bold", fontWeight: 700, desktop: { size: "16px", lh: "1.6", ls: "8px" }, mobile: { size: "14px", lh: "1.5", ls: "8px" }, tokens: { size: "--text-label", lh: "--lh-label", ls: "--ls-label" } },
] as const;

const brandColors = [
  { name: "Deep Blueklyn",    cssVar: "--color-deep-blueklyn",    hex: "#409AF9", usage: "Brooklyn accent · links · CTAs · hover states" },
  { name: "LA Poolside",      cssVar: "--color-la-poolside",      hex: "#60DBDA", usage: "Los Angeles chapter accent" },
  { name: "Singapore Sling",  cssVar: "--color-singapore-sling",  hex: "#F66363", usage: "Singapore chapter accent" },
  { name: "Egg Custard Tart", cssVar: "--color-egg-custard-tart", hex: "#F8DA4D", usage: "Primary Alt button · illustration palette" },
  { name: "Cookie Dough",     cssVar: "--color-cookie-dough",     hex: "#FFFAEF", usage: "Section backgrounds · warm neutral" },
];

const neutralColors = [
  { name: "Nearly Black",     cssVar: "--color-nearly-black",     hex: "#1B1D1F", usage: "Primary text · primary button fill" },
  { name: "Really Dark Grey", cssVar: "--color-really-dark-grey", hex: "#4A4A4A", usage: "Body copy · secondary text" },
  { name: "Just Grey",        cssVar: "--color-just-grey",        hex: "#9C9C9C", usage: "Subdued labels · borders · disabled states" },
  { name: "Literally White",  cssVar: "--color-literally-white",  hex: "#FFFFFF", usage: "White section backgrounds · text on dark" },
];

const spacingTokens = [
  { token: "--section-px",    value: "220px / 60px / 24px", note: "Horizontal page padding — desktop / tablet / mobile" },
  { token: "--section-pt",    value: "48px / 36px / 28px",  note: "Section top padding — desktop / tablet / mobile" },
  { token: "--section-pb",    value: "64px / 48px / 40px",  note: "Section bottom padding — desktop / tablet / mobile" },
  { token: "--section-pt-sm", value: "36px / 28px / 20px",  note: "Compact section top padding (LogoGrid, small shelves)" },
  { token: "--section-pb-sm", value: "48px / 36px / 32px",  note: "Compact section bottom padding" },
  { token: "--page-max-w",    value: "1440px",               note: "Maximum content width for all sections and rows" },
  { token: "--nav-height",    value: "74px",                 note: "Sticky nav bar height" },
];

const radii = [
  { token: "--radius-image",  value: "40px", label: "Image",  usage: "Photos and media that are not full-bleed to the screen edge. Always use rounded-image unless the image bleeds to the viewport edge." },
  { token: "--radius-button", value: "10px", label: "Button", usage: "All button variants." },
  { token: "--radius-card",   value: "8px",  label: "Card",   usage: "Card component and small content chips." },
];

const photoRules = [
  { rule: "Aspect ratio",   value: "Varies",               detail: "AlternatingMediaRow: 3/2. Event strips: 16/7. Zine covers: 3/4. Carousel: no fixed ratio." },
  { rule: "Object fit",     value: "cover + center",       detail: "object-cover object-center always. Never stretch or letterbox." },
  { rule: "Corner radius",  value: "rounded-image",        detail: "Rounded corners (40px) on any image that is not full-bleed to the screen edge. Use md:rounded-image only when the image is full-bleed on mobile — i.e. it intentionally breaks out to the viewport edge with no surrounding margin or container. Cards, rows, and padded sections always use rounded-image at all breakpoints." },
  { rule: "Alt text",       value: "Descriptive or empty", detail: 'Decorative images use alt="" aria-hidden="true". Content images get descriptive alt.' },
  { rule: "Hero scrim",     value: "scrim prop",           detail: 'HeroSection accepts scrim="tb" | "lr" | "full" | false. Ensures legibility of text overlaid on photos.' },
];

const sampleTeam = [
  { name: "Sangeetha Selvaraja", role: "Secretary",     photo: "/images/singapore/team_3.png" },
  { name: "Qi Jie Lim",         role: "President",     photo: "/images/singapore/team_2.png" },
  { name: "Naafiah Saleem",     role: "Media Officer", photo: "/images/singapore/team_5.png" },
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
    <div id={id} className="flex flex-col items-center gap-2 pb-6 border-b border-nearly-black scroll-mt-20 text-center">
      <h2 className="font-bold" style={{ fontSize: "var(--text-h2)", lineHeight: "var(--lh-h2)" }}>
        {children}
      </h2>
    </div>
  );
}

function SubSectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-bold text-nearly-black text-center" style={{ fontSize: "var(--text-h3)", lineHeight: "var(--lh-h3)" }}>
      {children}
    </h3>
  );
}

function ColorSwatch({ name, cssVar, hex, usage }: { name: string; cssVar: string; hex: string; usage: string }) {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden border border-just-grey/20">
      <div className="h-20 w-full" style={{ backgroundColor: `var(${cssVar})` }} />
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

function PropTable({ props }: { props: { name: string; type: string; note: string }[] }) {
  return (
    <div className="flex flex-col divide-y divide-just-grey/20 border border-just-grey/20 rounded-lg overflow-hidden">
      <div className="hidden md:grid grid-cols-[140px_1fr_1fr] gap-4 px-5 py-2 bg-cookie-dough">
        <MetaLabel>Prop</MetaLabel><MetaLabel>Type</MetaLabel><MetaLabel>Notes</MetaLabel>
      </div>
      {props.map((p) => (
        <div key={p.name} className="grid grid-cols-1 md:grid-cols-[140px_1fr_1fr] gap-1 md:gap-4 px-5 py-3 bg-literally-white">
          <Token name={p.name} />
          <span className="font-mono text-really-dark-grey" style={{ fontSize: "13px" }}>{p.type}</span>
          <span className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>{p.note}</span>
        </div>
      ))}
    </div>
  );
}

function Guidance({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-cookie-dough rounded-lg p-5 flex flex-col gap-2">
      <p className="font-bold text-nearly-black" style={{ fontSize: "var(--text-b2)" }}>When to use</p>
      <div className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>{children}</div>
    </div>
  );
}

function Preview({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-semibold text-really-dark-grey uppercase" style={{ fontSize: "12px", letterSpacing: "0.08em" }}>{label}</p>
      {children}
    </div>
  );
}

function LevelBadge({ level }: { level: string }) {
  const colors: Record<string, string> = {
    Atom:     "bg-egg-custard-tart text-nearly-black",
    Molecule: "bg-la-poolside text-nearly-black",
    Organism: "bg-deep-blueklyn text-literally-white",
  };
  return (
    <span className={`inline-block font-bold uppercase px-2 py-0.5 rounded ${colors[level] ?? ""}`} style={{ fontSize: "11px", letterSpacing: "0.08em" }}>
      {level}
    </span>
  );
}

function ComponentHeader({ level, file, children }: { level: string; file: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <SubSectionHeading>{children}</SubSectionHeading>
      <div className="flex items-center gap-2">
        <LevelBadge level={level} />
        <span className="font-mono text-just-grey" style={{ fontSize: "13px" }}>{file}</span>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function StyleGuidePage() {
  return (
    <StyleGuideShell>

        {/* ── INTRO ── */}
        <Shelf className="flex flex-col gap-4 border-b border-just-grey/20">
          <h1 className="font-bold text-center" style={{ fontSize: "var(--text-h1)", lineHeight: "var(--lh-h1)" }}>Style Guide</h1>
          <p className="text-really-dark-grey" style={{ fontSize: "var(--text-b1)", lineHeight: "var(--lh-b1)" }}>
            Design tokens and visual standards for productdesign.community. Specimens render at actual scale — resize to see the mobile preset below 768px.
          </p>
        </Shelf>

        {/* ── TYPOGRAPHY ── */}
        <Shelf className="flex flex-col gap-12">
          <SectionHeading id="typography">Typography</SectionHeading>
          <p className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>
            Typeface: <strong>Figtree</strong> via <Token name="next/font/google" />. Two responsive presets: <strong>L</strong> (≥768px) and <strong>M</strong> (&lt;768px).
            Usage: <code className="font-mono text-deep-blueklyn" style={{ fontSize: "13px" }}>{`fontSize: 'var(--text-h1)', lineHeight: 'var(--lh-h1)'`}</code>
          </p>
          <div className="bg-cookie-dough rounded-lg p-6 flex flex-col gap-3">
            <p className="font-bold text-nearly-black" style={{ fontSize: "var(--text-b2)" }}>Alignment convention</p>
            <p className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>
              <strong>H1, H2, H3 are always <Token name="text-center" />.</strong> Body copy (B1, B2) is always <Token name="text-left" /> — the browser default, never override it. The impression that body text is centered comes from the <em>column</em> being centered on the page via <Token name="SectionWrapper" />, not from centering the text itself. If body text appears off-center, fix the layout, not the alignment.
            </p>
          </div>
          <div className="flex flex-col">
            {typeScale.map((style, i) => {
              const tokens = Object.values(style.tokens).filter(Boolean);
              return (
                <div key={style.name} className={`flex flex-col gap-8 py-12 ${i > 0 ? "border-t border-just-grey/20" : ""}`}>
                  <p style={{ fontSize: `var(${style.tokens.size})`, lineHeight: `var(${style.tokens.lh})`, fontWeight: style.fontWeight, letterSpacing: "ls" in style.tokens ? `var(${style.tokens.ls})` : undefined, textTransform: "uppercase" in style && style.uppercase ? "uppercase" : undefined, textAlign: ["H1", "H2", "H3"].includes(style.name) ? "center" : "left" }}>
                    {style.specimen}
                  </p>
                  <div className="flex flex-wrap gap-x-10 gap-y-4">
                    <div className="flex flex-col gap-1 min-w-[56px]">
                      <MetaLabel>Style</MetaLabel>
                      <span className="inline-block font-bold text-literally-white bg-nearly-black px-2 py-0.5 rounded self-start" style={{ fontSize: "var(--text-b2)", lineHeight: "1.5" }}>{style.name}</span>
                    </div>
                    <div className="flex flex-col gap-1"><MetaLabel>Weight</MetaLabel><span style={{ fontSize: "var(--text-b2)" }}>{style.weight}</span></div>
                    <div className="flex flex-col gap-1"><MetaLabel>Desktop ≥768px</MetaLabel>
                      <span className="font-mono" style={{ fontSize: "var(--text-b2)" }}>{style.desktop.size} / lh {style.desktop.lh}{"ls" in style.desktop ? ` / ls ${style.desktop.ls}` : ""}</span>
                    </div>
                    <div className="flex flex-col gap-1"><MetaLabel>Mobile &lt;768px</MetaLabel>
                      <span className="font-mono" style={{ fontSize: "var(--text-b2)" }}>{style.mobile.size} / lh {style.mobile.lh}{"ls" in style.mobile ? ` / ls ${style.mobile.ls}` : ""}</span>
                    </div>
                    <div className="flex flex-col gap-1.5"><MetaLabel>Tokens</MetaLabel>
                      <div className="flex flex-wrap gap-1.5">{tokens.map((t) => <Token key={t} name={t} />)}</div>
                    </div>
                    <div className="flex flex-col gap-1"><MetaLabel>Used for</MetaLabel>
                      <span className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)" }}>{style.usage}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Shelf>

        {/* ── COLORS ── */}
        <Shelf background="bg-cookie-dough" className="flex flex-col gap-12">
          <SectionHeading id="colors">Colors</SectionHeading>
          <div className="flex flex-col gap-10">
            <div id="colors-brand" className="flex flex-col gap-4 scroll-mt-20">
              <h3 className="font-semibold text-really-dark-grey uppercase" style={{ fontSize: "12px", letterSpacing: "0.1em" }}>Brand palette</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {brandColors.map((c) => <ColorSwatch key={c.cssVar} {...c} />)}
              </div>
            </div>
            <div id="colors-neutral" className="flex flex-col gap-4 scroll-mt-20">
              <h3 className="font-semibold text-really-dark-grey uppercase" style={{ fontSize: "12px", letterSpacing: "0.1em" }}>Neutrals</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {neutralColors.map((c) => <ColorSwatch key={c.cssVar} {...c} />)}
              </div>
            </div>
            <div className="bg-literally-white rounded-lg p-6 flex flex-col gap-2">
              <p className="font-bold" style={{ fontSize: "var(--text-b2)" }}>Token rule</p>
              <p className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>
                Raw hex values must never appear in component files. Use Tailwind utilities (<Token name="bg-deep-blueklyn" />) or CSS variables (<Token name="var(--color-deep-blueklyn)" />) only. One line in <Token name="globals.css" /> changes it everywhere.
              </p>
            </div>
          </div>
        </Shelf>

        {/* ── SPACING ── */}
        <Shelf className="flex flex-col gap-12">
          <SectionHeading id="spacing">Spacing & Layout</SectionHeading>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col divide-y divide-just-grey/20 border border-just-grey/20 rounded-lg overflow-hidden">
              {spacingTokens.map((t) => (
                <div key={t.token} className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 px-5 py-4 bg-literally-white">
                  <div className="md:w-52 flex-shrink-0"><Token name={t.token} /></div>
                  <div className="md:w-44 flex-shrink-0"><span className="font-mono text-nearly-black" style={{ fontSize: "var(--text-b2)" }}>{t.value}</span></div>
                  <span className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>{t.note}</span>
                </div>
              ))}
            </div>
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
                Resize to see <Token name="--section-px" /> adjust: 220px → 60px → 24px.
              </p>
            </div>
          </div>
        </Shelf>

        {/* ── RADII ── */}
        <Shelf background="bg-cookie-dough" className="flex flex-col gap-12">
          <SectionHeading id="radii">Corner Radius</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-5">
              <div className="overflow-hidden rounded-image aspect-[2/1] w-full bg-literally-white">
                <img src="/images/singapore/carousel_1.jpg" alt="Community event photo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-nearly-black" style={{ fontSize: "var(--text-h3)" }}>40px</span>
                  <span className="text-just-grey" style={{ fontSize: "var(--text-b2)" }}>Image</span>
                </div>
                <Token name="--radius-image" />
                <p className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>{radii[0].usage}</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-center bg-literally-white aspect-[2/1] w-full rounded-image">
                <Button variant="primary">Get involved</Button>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-nearly-black" style={{ fontSize: "var(--text-h3)" }}>10px</span>
                  <span className="text-just-grey" style={{ fontSize: "var(--text-b2)" }}>Button</span>
                </div>
                <Token name="--radius-button" />
                <p className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>{radii[1].usage}</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-center bg-literally-white aspect-[2/1] w-full rounded-image">
                <div className="bg-cookie-dough border border-just-grey/30 p-5 flex flex-col gap-2 w-3/4" style={{ borderRadius: "var(--radius-card)" }}>
                  <p className="font-semibold text-nearly-black" style={{ fontSize: "var(--text-b2)" }}>Career Coaching</p>
                  <p className="text-really-dark-grey" style={{ fontSize: "12px", lineHeight: "1.5" }}>Free 1:1 sessions with an experienced design leader.</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-nearly-black" style={{ fontSize: "var(--text-h3)" }}>8px</span>
                  <span className="text-just-grey" style={{ fontSize: "var(--text-b2)" }}>Card</span>
                </div>
                <Token name="--radius-card" />
                <p className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>{radii[2].usage}</p>
              </div>
            </div>
          </div>
        </Shelf>

        {/* ── PHOTOGRAPHY ── */}
        <Shelf className="flex flex-col gap-12">
          <SectionHeading id="photography">Photography & Media</SectionHeading>
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-really-dark-grey uppercase" style={{ fontSize: "12px", letterSpacing: "0.1em" }}>Standard treatment</h3>
            <div className="overflow-hidden aspect-[2/1] w-full rounded-image">
              <img src="/images/singapore/event_strip.jpg" alt="Community event" className="w-full h-full object-cover object-center" />
            </div>
            <p className="text-just-grey" style={{ fontSize: "var(--text-b2)" }}>Standard treatment — <Token name="rounded-image" /> at all breakpoints. Only omit corner radius when the image intentionally bleeds edge-to-edge with no surrounding container.</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-really-dark-grey uppercase" style={{ fontSize: "12px", letterSpacing: "0.1em" }}>Rules</h3>
            <div className="flex flex-col divide-y divide-just-grey/20 border border-just-grey/20 rounded-lg overflow-hidden">
              {photoRules.map((r) => (
                <div key={r.rule} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 px-5 py-4 bg-literally-white">
                  <div className="md:w-36 flex-shrink-0"><span className="font-bold text-nearly-black" style={{ fontSize: "var(--text-b2)" }}>{r.rule}</span></div>
                  <div className="md:w-44 flex-shrink-0"><span className="font-mono text-deep-blueklyn" style={{ fontSize: "13px" }}>{r.value}</span></div>
                  <span className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>{r.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </Shelf>

        {/* ── BUTTONS ── */}
        <Shelf background="bg-cookie-dough" className="flex flex-col gap-12">
          <SectionHeading id="buttons">Buttons</SectionHeading>
          <div className="flex flex-col gap-10">
            <div id="buttons-variants" className="flex flex-col gap-4 scroll-mt-20">
              <div className="flex items-baseline justify-between">
                <h3 className="font-semibold text-really-dark-grey uppercase" style={{ fontSize: "12px", letterSpacing: "0.1em" }}>Variants</h3>
                <span className="text-just-grey" style={{ fontSize: "12px" }}>Hover is live</span>
              </div>
              <div className="flex flex-wrap items-center gap-6 p-8 bg-literally-white rounded-lg">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="tertiary">Tertiary</Button>
                <Button variant="primary-alt">Primary Alt</Button>
              </div>
              <div className="flex flex-wrap items-center gap-6 p-8 bg-literally-white rounded-lg">
                <Button variant="primary" disabled>Primary</Button>
                <Button variant="secondary" disabled>Secondary</Button>
                <Button variant="tertiary" disabled>Tertiary</Button>
                <Button variant="primary-alt" disabled>Primary Alt</Button>
              </div>
            </div>
            <div id="buttons-icons" className="flex flex-col gap-4 scroll-mt-20">
              <h3 className="font-semibold text-really-dark-grey uppercase" style={{ fontSize: "12px", letterSpacing: "0.1em" }}>With icons</h3>
              <div className="flex flex-wrap items-center gap-6 p-8 bg-literally-white rounded-lg">
                <Button variant="primary" rightIcon={<ArrowRight size={16} />}>Right icon</Button>
                <Button variant="secondary" leftIcon={<ChevronLeft size={16} />}>Left icon</Button>
                <Button variant="secondary" rightIcon={<Coffee size={16} />}>Custom right icon</Button>
                <Button variant="primary" href="https://example.com" target="_blank">Auto external</Button>
              </div>
              <p className="text-just-grey" style={{ fontSize: "var(--text-b2)" }}>
                <Token name="target=&quot;_blank&quot;" /> auto-adds <code className="font-mono text-deep-blueklyn" style={{ fontSize: "13px" }}>ExternalLink</code> as the right icon when no <Token name="rightIcon" /> is provided.
              </p>
            </div>
            <div id="buttons-specs" className="flex flex-col gap-4 scroll-mt-20">
              <h3 className="font-semibold text-really-dark-grey uppercase" style={{ fontSize: "12px", letterSpacing: "0.1em" }}>Specs</h3>
              <div className="flex flex-col divide-y divide-just-grey/20 border border-just-grey/20 rounded-lg overflow-hidden">
                {[
                  { variant: "Primary",     default: "bg nearly-black · white text",            hover: "bg deep-blueklyn",              disabled: "bg just-grey · white text" },
                  { variant: "Secondary",   default: "border nearly-black · no fill",            hover: "border + text deep-blueklyn",   disabled: "border + text just-grey" },
                  { variant: "Tertiary",    default: "no border or fill · nearly-black text",    hover: "text deep-blueklyn",            disabled: "text just-grey" },
                  { variant: "Primary Alt", default: "bg egg-custard-tart · nearly-black text",  hover: "bg deep-blueklyn · white text", disabled: "bg just-grey · white text" },
                ].map((row) => (
                  <div key={row.variant} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 px-5 py-4 bg-literally-white">
                    <div className="md:w-28 flex-shrink-0"><span className="font-bold text-nearly-black" style={{ fontSize: "var(--text-b2)" }}>{row.variant}</span></div>
                    <div className="flex-1 flex flex-col md:flex-row gap-2 md:gap-8">
                      <div className="flex-1"><MetaLabel>Default</MetaLabel><span className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)" }}>{row.default}</span></div>
                      <div className="flex-1"><MetaLabel>Hover</MetaLabel><span className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)" }}>{row.hover}</span></div>
                      <div className="flex-1"><MetaLabel>Disabled</MetaLabel><span className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)" }}>{row.disabled}</span></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-literally-white rounded-lg p-6 flex flex-col gap-3">
                <p className="font-bold" style={{ fontSize: "var(--text-b2)" }}>All variants share</p>
                <div className="flex flex-wrap gap-1.5">
                  {["px-4 py-2.5", "font-bold", "uppercase", "tracking-[1.28px]", "rounded-[var(--radius-button)]", "transition-colors"].map((c) => (
                    <code key={c} className="font-mono text-deep-blueklyn bg-cookie-dough px-1.5 py-0.5 rounded border border-just-grey/20" style={{ fontSize: "13px" }}>{c}</code>
                  ))}
                </div>
                <p className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>
                  Renders as <Token name="<a>" /> when <Token name="href" /> is set, <Token name="<button>" /> otherwise. Pass <Token name="uppercase={false}" /> to suppress all-caps.
                </p>
              </div>
            </div>
          </div>
        </Shelf>

        {/* ── COMPONENTS INTRO ── */}
        <Shelf className="flex flex-col gap-12">
          <SectionHeading id="components">Components</SectionHeading>
          <p className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>
            Atomic hierarchy: <LevelBadge level="Atom" /> indivisible primitives &nbsp;→&nbsp; <LevelBadge level="Molecule" /> composed layout patterns &nbsp;→&nbsp; <LevelBadge level="Organism" /> full-width page sections with their own padding and background. No hardcoded content strings anywhere — all copy comes from props or content files.
          </p>
          <div className="bg-cookie-dough rounded-lg p-6 flex flex-col gap-3">
            <p className="font-bold text-nearly-black" style={{ fontSize: "var(--text-b2)" }}>Name the pattern, not the content</p>
            <p className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>
              Components are named by what they look like and how they behave — not by what content happens to be inside them. A card with a heading, body, and CTA button is a <Token name="Card" /> whether it holds partnership tiers, event types, or job listings. The layout pattern defines the component; the content is just props.
            </p>
            <p className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>
              The test: if you swapped the content for something unrelated, would the name still make sense? <Token name="Card" /> with job listings still makes sense. <Token name="InitiativeCard" /> with job listings doesn't — the name has become a lie. When two things look the same, they should be the same component. Resist making a new one for each new use case.
            </p>
          </div>
        </Shelf>

        {/* ── BRAND LOGO ── */}
        <Shelf id="comp-brandlogo" background="bg-literally-white" className="flex flex-col gap-6">
          <ComponentHeader level="Atom" file="atoms/BrandLogo.tsx">Brand Logo</ComponentHeader>
          <Guidance>
            <p>A fixed-size image container for partner and sponsor logos. Renders greyscale at 60% opacity by default, transitioning to full colour on hover. Consistent height (<Token name="h-10" />) with fixed width (<Token name="w-[140px]" />) ensures uniform visual weight across mixed logo shapes.</p>
            <p className="mt-2">Wrap in an <Token name="href" /> to make it a link — renders as <Token name="<a>" /> with <Token name="target='_blank'" />. Without <Token name="href" />, renders as a plain div.</p>
            <p className="mt-2">Used internally by <Token name="LogoGrid" />. Render it directly only if you need a single logo outside of a grid.</p>
          </Guidance>
          <PropTable props={[
            { name: "src",  type: "string",  note: "Image src" },
            { name: "alt",  type: "string",  note: "Alt text" },
            { name: "href", type: "string",  note: "Optional — wraps image in an external link" },
          ]} />
          <div className="flex flex-wrap gap-8 items-center">
            <BrandLogo src="/logos/partners/partner_01.png" alt="Adobe" />
            <BrandLogo src="/logos/partners/partner_04.png" alt="Duolingo" />
            <BrandLogo src="/logos/partners/nyu.svg" alt="NYU" />
            <BrandLogo src="/logos/partners/wework.svg" alt="WeWork" />
          </div>
        </Shelf>

        {/* ── DIVIDER ── */}
        <Shelf id="comp-divider" background="bg-cookie-dough" className="flex flex-col gap-6">
          <ComponentHeader level="Atom" file="atoms/Divider.tsx">Divider</ComponentHeader>
          <Guidance>
            <p>A 1px horizontal rule in <Token name="just-grey" />. Use to separate adjacent content blocks within a section — between a list and a CTA, between a grid and supplementary copy. Not for separating sections (Shelfs handle that with spacing).</p>
            <p className="mt-2">Pass <Token name="className" /> to override width or add margin — e.g. <Token name='className="w-1/2"' /> for a short decorative rule.</p>
          </Guidance>
          <PropTable props={[
            { name: "className", type: "string", note: "Optional — additional Tailwind classes (margin, width, color)" },
          ]} />
          <div className="flex flex-col gap-6 py-2">
            <Divider />
          </div>
        </Shelf>

        {/* ── ICON MARK ── */}
        <Shelf id="comp-iconmark" background="bg-literally-white" className="flex flex-col gap-6">
          <ComponentHeader level="Atom" file="atoms/IconMark.tsx">Icon Mark</ComponentHeader>
          <Guidance>
            <p>The PDC geometric mark — a teal circle, yellow square, and red triangle composited together. Used in the <Token name="NavBar" />, <Token name="MobileMenu" />, and as the site favicon. Not for general decoration — it represents the PDC brand identity specifically.</p>
            <p className="mt-2">Pass <Token name="size" /> to scale uniformly. Default is 32px.</p>
          </Guidance>
          <PropTable props={[
            { name: "size",      type: "number", note: "Width and height in px. Default: 32" },
            { name: "className", type: "string", note: "Optional Tailwind classes" },
          ]} />
          <div className="flex items-end gap-8">
            <IconMark size={16} />
            <IconMark size={24} />
            <IconMark size={32} />
            <IconMark size={48} />
            <IconMark size={64} />
          </div>
        </Shelf>

        {/* ── ALTERNATING MEDIA ROW ── */}
        <Shelf id="comp-amr" background="bg-cookie-dough" className="flex flex-col gap-6">
          <ComponentHeader level="Molecule" file="molecules/AlternatingMediaRow.tsx">Alternating Media Row</ComponentHeader>
          <Guidance>
            <p>One large image alongside one block of text, with the image alternating sides when stacked. Use when a single item has a strong supporting photo and enough copy to fill the row — the image and text carry equal weight.</p>
            <p className="mt-2">Alternate <Token name='imagePosition="left"' /> and <Token name='imagePosition="right"' /> when stacking multiple rows — <code className="font-mono text-deep-blueklyn" style={{ fontSize: "13px" }}>i % 2 === 0 ? "left" : "right"</code> in a map.</p>
            <p className="mt-2"><strong>Not</strong> for grids of 3+ equal items — use <Token name="Card" /> in a grid instead. <strong>Not</strong> for content without a strong supporting photo.</p>
            <p className="mt-2">Requires <Token name="Shelf bleed" /> as its parent — it manages its own max-width and horizontal padding. In a regular Shelf the section padding would double.</p>
          </Guidance>
          <PropTable props={[
            { name: "heading",       type: "string",                                           note: "Renders as H3" },
            { name: "body",          type: "string",                                           note: "B1 body copy" },
            { name: "image",         type: "string",                                           note: "Image src — 3/2 aspect on mobile, fills row height on desktop" },
            { name: "imagePosition", type: '"left" | "right"',                                 note: 'Default: "left"' },
            { name: "ctaLabel",      type: "string",                                           note: "Optional CTA label" },
            { name: "ctaHref",       type: "string",                                           note: "Optional CTA href" },
            { name: "ctaVariant",    type: '"primary" | "secondary" | "tertiary" | "primary-alt"', note: 'Default: "tertiary"' },
          ]} />
        </Shelf>
        <Shelf bleed background="bg-cookie-dough">
          <AlternatingMediaRow
            heading="Career Coaching"
            body="Led by Sangeetha, our monthly Career Coaching sessions focus on guiding members from portfolio building to professional networking skills to emerge as confident, prepared designers."
            image="/images/singapore/initiative_coaching.png"
            imagePosition="left"
            ctaLabel="Sign Up"
            ctaHref="#"
            ctaVariant="secondary"
          />
        </Shelf>

        {/* ── CARD ── */}
        <Shelf id="comp-card" className="flex flex-col gap-6">
          <ComponentHeader level="Molecule" file="molecules/Card.tsx">Card</ComponentHeader>
          <Guidance>
            <p>Optional slots: label, image, heading, body, bullet list, CTA. Use in grids of 2–4 equal-weight items. Everything except <Token name="title" /> is optional — use what the content needs, omit what it doesn't.</p>
            <p className="mt-2"><strong>Three-state responsive layout</strong> (image cards only): stacked on mobile → horizontal row (image left, content right, one card wide) at md → stacked again in a multi-column grid at lg. Grids using Card must only go multi-column at <Token name="lg" />, never <Token name="md" /> — that's the breakpoint Card uses for its horizontal state.</p>
            <p className="mt-2"><strong>No image → use border.</strong> The border lifts the card off the surface when there's no image providing visual containment.</p>
            <p className="mt-2"><strong>With image → always <Token name="bare" />.</strong> The image already defines the card's boundary — adding a border creates a redundant double-frame.</p>
            <p className="mt-2"><strong><Token name="portrait" /></strong>: switches the image to a 3:4 aspect ratio for cover-style images. Default is 3:2 landscape.</p>
            <p className="mt-2"><strong><Token name="label" /></strong>: small uppercase text above the heading — useful for series numbers, categories, or volume labels.</p>
            <p className="mt-2">Images always use <Token name="rounded-image" /> (40px) — card images are never full-bleed to the screen edge, so they always carry corner radius.</p>
          </Guidance>
          <PropTable props={[
            { name: "title",        type: "string",                                                note: "H3 heading — required" },
            { name: "description",  type: "string",                                                note: "Optional B2 body copy" },
            { name: "label",        type: "string",                                                note: "Optional small uppercase label above heading (e.g. Vol. 3, Category)" },
            { name: "image",        type: "string",                                                note: "Optional image src" },
            { name: "portrait",     type: "boolean",                                               note: "3:4 image aspect. Default false (3:2)" },
            { name: "items",        type: "string[]",                                              note: "Optional bullet list" },
            { name: "ctaLabel",     type: "string",                                                note: "Optional CTA label — no button rendered if omitted" },
            { name: "ctaHref",      type: "string",                                                note: "Optional CTA href" },
            { name: "ctaVariant",   type: '"primary" | "secondary" | "tertiary" | "primary-alt"',  note: 'Default: "secondary"' },
            { name: "ctaRightIcon", type: "React.ReactNode",                                       note: "Optional icon in button right slot" },
            { name: "bare",         type: "boolean",                                               note: "Strips border, background, and padding. Default: false" },
          ]} />
        </Shelf>

        <Shelf size="sm">
          <Preview label="No image — with border">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card title="Support an event" description="From venues to juice boxes, every bit helps. Sponsorship lets us run better events and reach wider audiences." items={["Event spaces", "Light refreshments", "Discount codes"]} ctaLabel="Sponsorship info" ctaHref="#" ctaVariant="primary" />
              <Card title="Donate" description="We're entirely volunteer-run and not-for-profit. Donations help us cover essentials like printing, snacks, and web hosting." ctaLabel="Buy us a coffee" ctaHref="#" ctaVariant="primary" ctaRightIcon={<Coffee size={16} />} />
              <Card title="Speak" description="We host regular events in various formats. If you've got insights or war stories to share, we'd love to hear from you." items={["Panel talks", "Fireside chats", "Pecha Kucha"]} ctaLabel="Get in touch" ctaHref="#" ctaVariant="primary" />
            </div>
          </Preview>
        </Shelf>

        <Shelf size="sm">
          <Preview label="With image — no border">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card label="Vol. 3" title="Nation by Design" description="A collaborative effort with DesignSingapore Council." image="/images/singapore/zine_vol3_cover.png" portrait ctaLabel="Read now" ctaHref="#" ctaVariant="secondary" bare />
              <Card label="Vol. 2" title="Ink & Pixels" description="Celebrating community spirit with tribute articles." image="/images/singapore/zine_vol2_cover.png" portrait ctaLabel="Read now" ctaHref="#" ctaVariant="secondary" bare />
              <Card label="Vol. 1" title="Discussions on Design" description="Celebrating the love for Product Design through writing." image="/images/singapore/zine_vol1_cover.png" portrait ctaLabel="Read now" ctaHref="#" ctaVariant="secondary" bare />
            </div>
          </Preview>
        </Shelf>

        {/* ── TILE ── */}
        <Shelf id="comp-tile" background="bg-cookie-dough" className="flex flex-col gap-6">
          <ComponentHeader level="Molecule" file="molecules/Tile.tsx">Tile</ComponentHeader>
          <Guidance>
            <p>A linked 2:1 tile. Two variants: <strong>photo</strong> (with <Token name="image" />) renders a full-bleed photo with a name overlay at the bottom and a subtle zoom on hover. <strong>CTA</strong> (no <Token name="image" />) renders a dark <Token name="nearly-black" /> background that transitions to <Token name="deep-blueklyn" /> on hover, with an optional <Token name="label" /> above the name.</p>
            <p className="mt-2">Use in grids of equal-size items where the photo or brand colour does most of the communication. Not suitable for content needing body copy or a CTA button — use <Token name="Card" /> for that.</p>
            <p className="mt-2">Image uses <Token name="rounded-image" /> (40px). Pass an empty <Token name='href=""' /> as a placeholder when the link isn't ready yet.</p>
          </Guidance>
          <PropTable props={[
            { name: "name",  type: "string", note: "Displayed as H3 — the tile's primary label" },
            { name: "href",  type: "string", note: "Link destination. Pass empty string as placeholder." },
            { name: "image", type: "string", note: "Optional — image src at 2:1 aspect. Absent = CTA dark variant." },
            { name: "label", type: "string", note: "Optional — small text above name. Only visible in CTA variant." },
          ]} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Tile name="Brooklyn" href="#" image="/images/brooklyn/hero.webp" />
            <Tile name="Los Angeles" href="#" image="/images/losangeles/hero.png" />
            <Tile name="Singapore" href="#" image="/images/singapore/hero.jpg" />
            <Tile label="Not seeing your city?" name="Start a chapter" href="" />
          </div>
        </Shelf>

        {/* ── SHELF ── */}
        <Shelf id="comp-shelf" background="bg-cookie-dough" className="flex flex-col gap-6">
          <ComponentHeader level="Organism" file="organisms/Shelf.tsx">Shelf</ComponentHeader>
          <Guidance>
            <p><strong>Every page section lives in a Shelf.</strong> It applies consistent vertical padding and — in most modes — wraps content in a <Token name="SectionWrapper" /> for the standard max-width and horizontal padding.</p>
            <p className="mt-2"><strong>Default</strong>: standard padding + SectionWrapper. Use for most content sections.</p>
            <p className="mt-2"><strong><Token name="background=" /></strong>: adds a full-width coloured band behind the section. Pass a Tailwind bg class like <Token name="bg-cookie-dough" />. Still wraps content in SectionWrapper.</p>
            <p className="mt-2"><strong><Token name="bleed" /></strong>: skips the SectionWrapper entirely. Use when the child component handles its own max-width — specifically <Token name="AlternatingMediaRow" />. Using it inside a regular Shelf would double the horizontal padding.</p>
            <p className="mt-2"><strong><Token name='size="sm"' /></strong>: compact vertical padding. Use for smaller utility sections (e.g. LogoGrid).</p>
          </Guidance>
          <PropTable props={[
            { name: "background", type: "string",   note: "Tailwind bg class — creates full-width colour band" },
            { name: "bleed",      type: "boolean",  note: "Skips SectionWrapper. Required for AlternatingMediaRow." },
            { name: 'size="sm"',  type: "boolean",  note: "Compact vertical padding (pt-sm / pb-sm tokens)" },
            { name: "className",  type: "string",   note: "Applied to inner content div (e.g. flex flex-col gap-8)" },
            { name: "id",         type: "string",   note: "Anchor id on the section element" },
          ]} />
        </Shelf>

        {/* ── CALL TO ACTION ── */}
        <Shelf id="comp-cta" className="flex flex-col gap-6">
          <ComponentHeader level="Organism" file="organisms/CallToAction.tsx">Call To Action</ComponentHeader>
          <Guidance>
            <p>A centered full-width section with a heading, optional body copy, and a single CTA button. Two modes: <Token name='background="dark"' /> (default) renders on <Token name="nearly-black" /> with <Token name="cookie-dough" /> heading and <Token name="just-grey" /> body. <Token name='background="light"' /> renders on the current page background with <Token name="nearly-black" /> text.</p>
            <p className="mt-2">Use at the end of a page or section to prompt a single clear action. One CTA per section — not for multi-action blocks.</p>
          </Guidance>
          <PropTable props={[
            { name: "heading",    type: "string",                               note: "Required H2" },
            { name: "body",       type: "string",                               note: "Optional B2 body copy below heading" },
            { name: "ctaLabel",   type: "string",                               note: "Required button label" },
            { name: "ctaHref",    type: "string",                               note: "Required button href" },
            { name: "ctaVariant", type: '"primary" | "secondary" | "primary-alt"', note: 'Default: "primary"' },
            { name: "background", type: '"dark" | "light"',                     note: 'Default: "dark"' },
          ]} />
        </Shelf>
        <CallToAction
          heading="Ready to get involved?"
          body="Whether you're here to learn, teach, or just meet great people — there's a place for you."
          ctaLabel="Find your chapter"
          ctaHref="#"
          ctaVariant="primary"
          background="dark"
        />
        <Shelf size="sm">
          <Preview label='background="light"'>
            <CallToAction
              heading="Ready to get involved?"
              body="Whether you're here to learn, teach, or just meet great people — there's a place for you."
              ctaLabel="Find your chapter"
              ctaHref="#"
              ctaVariant="secondary"
              background="light"
            />
          </Preview>
        </Shelf>

        {/* ── HERO SECTION ── */}
        <Shelf id="comp-hero" background="bg-cookie-dough" className="flex flex-col gap-6">
          <ComponentHeader level="Organism" file="organisms/HeroSection.tsx">Hero Section</ComponentHeader>
          <Guidance>
            <p>Full-width photo background with an optional heading (H1) and CTA button. Used at the top of every chapter home page. The photo always fills the container with <Token name="object-cover object-center" />.</p>
            <p className="mt-2"><strong>Scrim</strong> — a gradient overlay to ensure text legibility. Choose based on where the text lives in the frame:</p>
            <p className="mt-2 pl-3"><Token name='scrim="lr"' /> — gradient from left, for left-aligned text. Default.<br />
            <Token name='scrim="tb"' /> — dark at top, clear below — use when text is centered and the sky/top of the photo is bright.<br />
            <Token name='scrim="bt"' /> — dark at bottom, clear above — pair with <Token name='textAlign="left"' /> and content anchored to the bottom (<Token name="items-end" /> behaviour).<br />
            <Token name='scrim="full"' /> — flat 30% overlay, use only when the photo is very busy across the whole frame.<br />
            <Token name="scrim={false}" /> — no overlay, only use when photo contrast is sufficient.</p>
            <p className="mt-2"><strong><Token name="compact" /></strong> — reduces min height (mobile: 320px, desktop: 360px vs. default 360px/520px). Use when the hero shares the page with dense content below and full-height feels heavy.</p>
            <p className="mt-2">Heading and CTA are both optional — pass neither for a purely photographic hero.</p>
          </Guidance>
          <PropTable props={[
            { name: "image",     type: "string",                                                    note: "Required — background photo src" },
            { name: "heading",   type: "string",                                                    note: "Optional H1 rendered over the photo" },
            { name: "textAlign", type: '"left" | "center"',                                         note: 'Default: "left"' },
            { name: "scrim",     type: '"lr" | "tb" | "bt" | "full" | false',                       note: 'Default: "lr"' },
            { name: "compact",   type: "boolean",                                                   note: "Reduced min-height. Default: false" },
            { name: "ctaLabel",  type: "string",                                                    note: "Optional — CTA button label" },
            { name: "ctaHref",   type: "string",                                                    note: "Optional — CTA button href (both required to render)" },
            { name: "ctaVariant",type: '"primary" | "secondary" | "tertiary" | "primary-alt"',      note: 'Default: "primary"' },
          ]} />
        </Shelf>
        <HeroSection
          heading="What's on over the Bridge"
          image="/images/brooklyn/hero.webp"
          textAlign="center"
          scrim="tb"
          compact
          ctaLabel="Go to events"
          ctaHref="#"
          ctaVariant="primary-alt"
        />

        {/* ── LOGO GRID ── */}
        <Shelf id="comp-logogrid" className="flex flex-col gap-6">
          <ComponentHeader level="Organism" file="organisms/LogoGrid.tsx">Logo Grid</ComponentHeader>
          <Guidance>
            <p>A flex-wrap row of images rendered at consistent height — each image shrinks or grows to fill its natural width at a fixed height, keeping them visually level. Use whenever you have a set of external brand images that need uniform visual weight. On this site it's used for partner and sponsor logos.</p>
            <p className="mt-2">Use the <Token name="footer" /> slot for supplementary content below the images, separated by a divider.</p>
            <p className="mt-2">Items are typed as <Token name="LogoItem[]" /> (<code className="font-mono text-deep-blueklyn" style={{ fontSize: "13px" }}>{'{ src: string, alt: string }'}</code>). Export them from the chapter content file, not inline in the page.</p>
          </Guidance>
          <PropTable props={[
            { name: "logos",          type: "LogoItem[]",      note: "Array of { src, alt } objects" },
            { name: "sectionHeading", type: "string",          note: "Optional H2 above the grid" },
            { name: "background",     type: "string",          note: 'Tailwind bg class. Default: "bg-cookie-dough"' },
            { name: "footer",         type: "React.ReactNode", note: "Optional slot below logos, separated by a divider" },
          ]} />
        </Shelf>
        <LogoGrid
          logos={bkPartnerLogos}
          sectionHeading="Thanks to our partners & supporters"
          background="bg-literally-white"
        />

        {/* ── IMAGE COLUMNS ── */}
        <Shelf id="comp-imagecolumns" background="bg-cookie-dough" className="flex flex-col gap-6">
          <ComponentHeader level="Organism" file="organisms/ImageColumns.tsx">Image Columns</ComponentHeader>
          <Guidance>
            <p>A 3-column grid where each column has an image, heading, and body. Use for any set of 3 equal-weight items you want to present with a visual above the text. On this site it's used for community values on about pages.</p>
            <p className="mt-2">Use <Token name="background" /> to set the section colour. Use the <Token name="footer" /> slot for content below the columns — an image strip, a CTA — without needing a separate Shelf.</p>
            <p className="mt-2">Column data lives in the chapter content file. Never hardcode column content in the component itself.</p>
          </Guidance>
          <PropTable props={[
            { name: "pillars",        type: "ValuePillar[]",   note: "Array of { illustration, heading, body }" },
            { name: "sectionHeading", type: "string",          note: "Optional H2 above the columns" },
            { name: "background",     type: "string",          note: 'Tailwind bg class. Default: "bg-literally-white"' },
            { name: "footer",         type: "React.ReactNode", note: "Optional slot below the columns" },
          ]} />
        </Shelf>
        <ImageColumns
          pillars={brooklyn.values}
          sectionHeading="What our community stands for"
          background="bg-cookie-dough"
        />

        {/* ── PROFILE GRID ── */}
        <Shelf id="comp-profilegrid" className="flex flex-col gap-6">
          <ComponentHeader level="Organism" file="organisms/ProfileGrid.tsx">Profile Grid</ComponentHeader>
          <Guidance>
            <p>A flex-wrap grid of circular portrait photos with names and optional roles. Center-weighted — naturally limits to 4 per row at full content width without explicit column counts. Use for any set of people: volunteers, contributors, speakers. On this site it's used for volunteer listings on about pages.</p>
            <p className="mt-2"><Token name="role" /> is optional — omit it when roles aren't relevant. For people without photos, render names as a comma-separated paragraph under an H3 instead — cleaner than a row of empty circles.</p>
            <p className="mt-2">Photos should be cropped square or portrait-heavy before use — the circle crop discards the lower portion of tall portrait images.</p>
          </Guidance>
          <ProfileGrid members={sampleTeam} heading="Meet the volunteers" />
          <PropTable props={[
            { name: "members", type: "TeamMember[]", note: "Array of { name, role?, photo? }" },
            { name: "heading", type: "string",       note: "Required H2 above the grid" },
          ]} />
        </Shelf>

        {/* ── PHOTO CAROUSEL ── */}
        <Shelf id="comp-carousel" background="bg-cookie-dough" className="flex flex-col gap-6">
          <ComponentHeader level="Organism" file="organisms/PhotoCarousel.tsx">Photo Carousel</ComponentHeader>
          <Guidance>
            <p>An auto-scrolling image carousel with looping, left/right chevron navigation, and dot indicators. Use for any ordered sequence of images that benefits from progressive reveal rather than a static grid. On this site it's used for event photo strips on chapter home pages.</p>
            <p className="mt-2">Client component (<Token name='"use client"' />) using Embla Carousel. Loop enabled, 3-second autoplay. Images are full-bleed on desktop — use <Token name="Shelf bleed" /> as the parent.</p>
            <p className="mt-2">Image paths come from the chapter content file. No aspect ratio is enforced — crop source images consistently before use (e.g. 4:3 landscape).</p>
          </Guidance>
          <PropTable props={[
            { name: "images", type: "string[]", note: "Array of image src paths. Loop enabled. Autoplays at 3s." },
          ]} />
        </Shelf>
        <PhotoCarousel images={singapore.carouselImages ?? []} />

    </StyleGuideShell>
  );
}
