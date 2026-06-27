import { NavBar } from "@/components/organisms/NavBar";
import { Footer } from "@/components/organisms/Footer";
import { HeroSection } from "@/components/organisms/HeroSection";
import { SectionWrapper } from "@/components/organisms/SectionWrapper";
import { AlternatingMediaRow } from "@/components/molecules/AlternatingMediaRow";
import { brooklyn } from "@/content/brooklyn";
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
        />

        {brooklyn.eventTypes && (
          <section className="pb-20 flex flex-col gap-12 pt-16">
            <SectionWrapper as="div">
              <h2
                className="font-bold text-nearly-black text-center"
                style={{ fontSize: "var(--text-h2)", lineHeight: "var(--lh-h2)" }}
              >
                What we get up to
              </h2>
            </SectionWrapper>
            <div className="flex flex-col gap-16">
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
          </section>
        )}
      </main>

      <Footer chapter={brooklyn} />
    </>
  );
}
