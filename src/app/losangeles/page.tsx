import { NavBar } from "@/components/organisms/NavBar";
import { Footer } from "@/components/organisms/Footer";
import { HeroSection } from "@/components/organisms/HeroSection";
import { SectionWrapper } from "@/components/organisms/SectionWrapper";
import { InitiativeCard } from "@/components/molecules/InitiativeCard";
import { losangeles } from "@/content/losangeles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Los Angeles Product Design",
  description: "A community for product designers across LA — connecting talent, sharing craft, and building something lasting together.",
};

export default function LosAngelesPage() {
  return (
    <>
      <NavBar chapter={losangeles} />

      <main>
        <HeroSection
          heading={losangeles.hero.heading}
          image={losangeles.hero.image}
          textAlign={losangeles.hero.textAlign}
          scrim={losangeles.hero.scrim}
          compact={losangeles.hero.compact}
        />

        {losangeles.initiatives && (
          <SectionWrapper className="py-20 flex flex-col gap-12">
            <h2
              className="font-bold text-nearly-black text-center"
              style={{ fontSize: "var(--text-h2)", lineHeight: "var(--lh-h2)" }}
            >
              Get involved
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {losangeles.initiatives.map((initiative) => (
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

      <Footer chapter={losangeles} />
    </>
  );
}
