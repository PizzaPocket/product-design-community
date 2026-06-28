import { NavBar } from "@/components/organisms/NavBar";
import { Footer } from "@/components/organisms/Footer";
import { HeroSection } from "@/components/organisms/HeroSection";
import { Shelf } from "@/components/organisms/Shelf";
import { SectionWrapper } from "@/components/organisms/SectionWrapper";
import { LogoGrid } from "@/components/organisms/LogoGrid";
import { AlternatingMediaRow } from "@/components/molecules/AlternatingMediaRow";
import { Button } from "@/components/atoms/Button";
import { brooklyn, bkPartnerLogos } from "@/content/brooklyn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brooklyn Product Design",
  description: "A home for product designers in Brooklyn — where curious minds gather, connect, and grow together.",
};

export default function BrooklynPage() {
  return (
    <>
      <NavBar chapter={brooklyn} />

      <main>
        <HeroSection
          heading={brooklyn.hero.heading}
          image={brooklyn.hero.image}
          textAlign={brooklyn.hero.textAlign}
          scrim={brooklyn.hero.scrim}
          compact={brooklyn.hero.compact}
          ctaLabel={brooklyn.hero.ctaLabel}
          ctaHref={brooklyn.hero.ctaHref}
          ctaVariant={brooklyn.hero.ctaVariant}
        />

        {/* About blurb */}
        {brooklyn.about && (
          <Shelf size="sm" background="bg-literally-white" className="flex flex-col items-center gap-6">
            <p className="w-full text-really-dark-grey" style={{ fontSize: "var(--text-b1)", lineHeight: "var(--lh-b1)" }}>
              {brooklyn.about.body}
            </p>
            <Button variant="secondary" href="/brooklyn/about">
              More about us
            </Button>
          </Shelf>
        )}

        {/* Events we host */}
        {brooklyn.eventTypes && (
          <Shelf bleed className="flex flex-col gap-6">
            <SectionWrapper as="div">
              <h2
                className="font-bold text-nearly-black text-center"
                style={{ fontSize: "var(--text-h2)", lineHeight: "var(--lh-h2)" }}
              >
                Events we host
              </h2>
            </SectionWrapper>
            <div className="flex flex-col gap-8">
              {brooklyn.eventTypes.map((event, i) => (
                <AlternatingMediaRow
                  key={event.title}
                  heading={event.title}
                  body={event.description}
                  image={event.image}
                  imagePosition={i % 2 === 0 ? "left" : "right"}
                />
              ))}
            </div>
          </Shelf>
        )}

        {/* Partner logos */}
        <LogoGrid
          logos={bkPartnerLogos}
          sectionHeading="Thanks to our partners & supporters"
          background="bg-literally-white"
        />
      </main>

      <Footer chapter={brooklyn} />
    </>
  );
}
