# PDC Website — Claude Code Guidelines

## Architecture Principles

### 1. Atomic Design — component hierarchy is strict

```
src/components/
  atoms/       — indivisible primitives: no children components, no composed layout
  molecules/   — layout patterns composed from atoms; zero page-specific logic or content
  organisms/   — full-width page sections; may compose molecules + atoms; may hold local state
  templates/   — page-level layout shells; accept content props, render no real data
```

Pages live in `app/` and are thin: they import organisms/templates, pass content from `src/content/`, done. No UI logic in page files.

**Level tests:**
- Atom: renders a single element or SVG. No children that are components. Examples: `Button`, `Divider`, `IconMark`, `BrandLogo`
- Molecule: composes atoms into a reusable layout unit. No hardcoded copy. Examples: `NavLink`, `ActionCard`, `PhotoCard`, `AlternatingMediaRow`
- Organism: owns a full page section — has a `SectionWrapper`, a heading, its own vertical padding. Examples: `NavBar`, `HeroSection`, `ValuePillars`, `LogoGrid`, `CallToAction`

**If it has `SectionWrapper` inside it → organism. If it's a card or row pattern → molecule. If it renders one element → atom.**

### 2. Component naming — describe the pattern, not the content

Names must describe the **interaction or layout pattern**, never the specific content that happens to use it.

✅ `ActionCard` — a card with optional image, heading, body, and a CTA button
✅ `PhotoCard` — a linked card with a full-bleed background photo and overlay text
✅ `ContentCard` — an image + heading + body stack, no CTA
✅ `PublicationCard` — cover image + metadata label + title + CTA
✅ `CallToAction` — full-width section with a heading and a primary button
✅ `AlternatingMediaRow` — image + text row that flips sides

❌ `InitiativeCard` — names the data, not the pattern
❌ `EventTypeCard` — names the data, not the pattern
❌ `PartnershipTier` — names the domain concept, not the UI
❌ `ZineCard` — names the content type, not the pattern
❌ `DonationSupport` — names the purpose, not the UI pattern

If two components share the same layout pattern, they should be the same component — not two separately named ones.

### 3. Global CSS tokens — no raw values in components

All design values are defined once in `src/app/globals.css` (`@theme` block + `:root`). Tailwind utilities are generated from these tokens automatically.

**Rule: raw hex values and px literals must never appear in component files.**

✅ Use: `bg-deep-blueklyn`, `text-nearly-black`, `var(--color-deep-blueklyn)`, `var(--section-px)`
❌ Never: `bg-[#409AF9]`, `style={{ color: '#1B1D1F' }}`, hardcoded spacing in className

Changing a color = one line in `globals.css`. That's the contract.

### 4. Chapters are always listed alphabetically

Any list of chapters renders in alphabetical order by chapter name: Los Angeles, New York, Singapore. This applies to nav links, footer link columns, the home-page chapter tiles, and prose that names sibling chapters.

The order lives in the data, not the renderer, so it is set in `src/content/pdc.ts` and in each chapter's about-page copy. When a chapter is added, insert it in position rather than appending.

### 5. Abstract over local — always prefer reusable patterns

Before writing any JSX, ask: *could this be a reusable atom or molecule?*

✅ `<ActionCard title={…} description={…} ctaHref={…} />` used everywhere
❌ `<div className="…">Career Coaching<p>Led by Sangeetha…</p></div>` hardcoded in one page

Chapter-specific content (copy, links, team lists) lives in `src/content/[chapter].ts` data files.
Component files contain zero hard-coded content strings.

### 6. TypeScript interfaces before components

Content shape is defined in `src/types/content.ts` before any page or template is written.
Props must be typed. No `any`. No untyped objects.

---

## Tech Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styles | Tailwind v4 (CSS-first, no tailwind.config.ts) |
| Icons | lucide-react (Feather icon set) |
| Carousel | embla-carousel-react |
| Font | Figtree via next/font/google |
| Deploy | Vercel |

## Key Commands

```bash
npm run dev      # local dev server
npm run build    # production build
npm run lint     # ESLint
```

## Style Guide

The live style guide lives at `/styleguide` (source: `src/app/styleguide/`). It is the canonical reference for design tokens, typography, spacing, component usage rules, and prop documentation.

**Before making any UI change or addition:**
1. Check the style guide for the relevant component's documented props, usage guidance, and background-color conventions.
2. Reuse an existing component wherever the layout pattern fits — don't write new JSX if a component already covers it.
3. If a genuinely new pattern is needed, build it as a proper atom/molecule/organism, add it to the system, then document it in the style guide.

**Keep the style guide in sync with the code.** When a component's props, behavior, or usage rules change, update the corresponding `ComponentHeader` / `Guidance` / `PropTable` block in `src/app/styleguide/page.tsx` in the same commit. The style guide is not a snapshot — it should always reflect the current state of the component.

## Adding a New Component

1. Decide its atomic level (atom / molecule / organism / template)
2. Use only Tailwind token classes — no raw hex or px values
3. Content comes in via props, not hardcoded strings
4. Add a documentation block to `src/app/styleguide/page.tsx` — `ComponentHeader`, `Guidance`, `PropTable`, and a live example
5. If it needs Figma reference: use Figma MCP at `http://127.0.0.1:3845/mcp` — see `.mcp.json`

## Figma MCP

Config is in `.mcp.json`. Use it to extract design specs for new components:

```bash
# Get design context for a node
curl -s -X POST http://127.0.0.1:3845/mcp \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"get_design_context","arguments":{"node_url":"https://www.figma.com/design/X3NlpKEHZu7UWFWoCmftHW/Scratch?node-id=597-XXXXX"}}}'
```

## Git

- Committer: `leonard.d.reese@gmail.com` — always use SSH (not HTTPS) for remote operations
- **Never add Claude as a co-author** in commit messages
- Remote: `git@github.com:PizzaPocket/product-design-community.git`

## Design Token Quick Reference

Colors: `deep-blueklyn` (#409AF9) · `la-poolside` (#60DBDA) · `singapore-sling` (#F66363) · `egg-custard-tart` (#F8DA4D) · `cookie-dough` (#FFFAEF) · `nearly-black` (#1B1D1F) · `really-dark-grey` (#4A4A4A) · `just-grey` (#9C9C9C) · `literally-white` (#FFFFFF)

Type: L preset (≥768px) / M preset (<768px) — see globals.css for full scale

Breakpoints: `md` = 768px · `lg` = 1366px · `xl` = 1920px
