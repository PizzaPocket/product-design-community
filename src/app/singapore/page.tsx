import { NavBar } from "@/components/organisms/NavBar";
import { Footer } from "@/components/organisms/Footer";
import { HeroSection } from "@/components/organisms/HeroSection";
import { SectionWrapper } from "@/components/organisms/SectionWrapper";
import { InitiativeCard } from "@/components/molecules/InitiativeCard";
import { singapore } from "@/content/singapore";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Singapore Product Design",
  description: "A home for product designers in Singapore — building community, elevating craft, and creating space for ideas that matter.",
};

export default function SingaporePage() {
  return (
    <>
      <NavBar chapter={singapore} />

      <main>
        <HeroSection
          heading={singapore.hero.heading}
          image={singapore.hero.image}
          textAlign={singapore.hero.textAlign}
          scrim={singapore.hero.scrim}
          compact={singapore.hero.compact}
        />

        {singapore.initiatives && (
          <SectionWrapper className="py-20 flex flex-col gap-12">
            <h2
              className="font-bold text-nearly-black text-center"
              style={{ fontSize: "var(--text-h2)", lineHeight: "var(--lh-h2)" }}
            >
              Get involved
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {singapore.initiatives.map((initiative) => (
                <InitiativeCard
                  key={initiative.title}
                  title={initiative.title}
                  description={initiative.description}
                  ctaLabel={initiative.ctaLabel}
                  ctaHref={initiative.ctaHref}
                />
              ))}
            </div>
          </SectionWrapper>
        )}
      </main>

      <Footer chapter={singapore} />
    </>
  );
}
