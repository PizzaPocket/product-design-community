import { NavBar } from "@/components/organisms/NavBar";
import { Footer } from "@/components/organisms/Footer";
import { HeroSection } from "@/components/organisms/HeroSection";
import { ValuePillars } from "@/components/organisms/ValuePillars";
import { PartnerLogoGrid } from "@/components/organisms/PartnerLogoGrid";
import { SectionWrapper } from "@/components/organisms/SectionWrapper";
import { AlternatingMediaRow } from "@/components/molecules/AlternatingMediaRow";
import { ChapterCard } from "@/components/molecules/ChapterCard";
import {
  pdc,
  pdcEventTypes,
  pdcValuePillars,
  pdcChapters,
  pdcPartnerLogos,
} from "@/content/pdc";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Design Community",
  description:
    "Connecting the world's product design community through curiosity and shared learning.",
};

export default function HomePage() {
  return (
    <>
      <NavBar chapter={pdc} />

      <main>
        <HeroSection
          heading={pdc.hero.heading}
          image={pdc.hero.image}
        />

        {/* Subtitle — centered, sits directly below the hero */}
        <SectionWrapper className="py-10 text-center">
          <p
            className="text-nearly-black"
            style={{ fontSize: "var(--text-b1)", lineHeight: "var(--lh-b1)" }}
          >
            {pdc.hero.body}
          </p>
        </SectionWrapper>

        {/* Events — heading is max-width constrained; rows handle their own max-width so images can bleed on mobile */}
        <section className="pb-20 flex flex-col gap-12">
          <SectionWrapper as="div" className="pt-0">
            <h2
              className="font-bold text-nearly-black text-center"
              style={{ fontSize: "var(--text-h2)", lineHeight: "var(--lh-h2)" }}
            >
              Events uplifting local designers
            </h2>
          </SectionWrapper>
          <div className="flex flex-col gap-16">
            {pdcEventTypes.map((event, i) => (
              <AlternatingMediaRow
                key={event.title}
                heading={event.title}
                body={event.description}
                image={event.image}
                imagePosition={i % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>
        </section>

        {/* Community values */}
        <ValuePillars pillars={pdcValuePillars} />

        {/* Partners */}
        <PartnerLogoGrid
          logos={pdcPartnerLogos}
          sectionHeading="Thanks to our partners & supporters"
        />

        {/* Chapters */}
        <SectionWrapper id="chapters" className="py-20 flex flex-col gap-10">
          <h2
            className="font-bold text-nearly-black text-center"
            style={{ fontSize: "var(--text-h2)", lineHeight: "var(--lh-h2)" }}
          >
            Our Chapters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pdcChapters.map((chapter) => (
              <ChapterCard key={chapter.href} {...chapter} />
            ))}
          </div>
        </SectionWrapper>
      </main>

      <Footer chapter={pdc} />
    </>
  );
}
