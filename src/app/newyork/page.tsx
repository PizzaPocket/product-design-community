import { NavBar } from "@/components/organisms/NavBar";
import { Footer } from "@/components/organisms/Footer";
import { HeroSection } from "@/components/organisms/HeroSection";
import { Shelf } from "@/components/organisms/Shelf";
import { SectionWrapper } from "@/components/organisms/SectionWrapper";
import { LogoGrid } from "@/components/organisms/LogoGrid";
import { AlternatingMediaRow } from "@/components/molecules/AlternatingMediaRow";
import { Button } from "@/components/atoms/Button";
import { ContactButton } from "@/components/molecules/ContactButton";
import { ContactLink } from "@/components/molecules/ContactLink";
import { newYork, nyPartnerLogos } from "@/content/newyork";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New York Product Design",
  description: "A home for product designers across New York, where curious minds gather, connect, and grow together.",
};

export default function NewYorkPage() {
  return (
    <>
      <NavBar chapter={newYork} />

      <main>
        <HeroSection
          heading={newYork.hero.heading}
          image={newYork.hero.image}
          textAlign={newYork.hero.textAlign}
          scrim={newYork.hero.scrim}
          compact={newYork.hero.compact}
          ctaLabel={newYork.hero.ctaLabel}
          ctaHref={newYork.hero.ctaHref}
          ctaVariant={newYork.hero.ctaVariant}
        />

        {/* About blurb */}
        {newYork.about && (
          <Shelf size="sm" background="bg-literally-white" className="flex flex-col items-center gap-6">
            <p className="w-full text-really-dark-grey" style={{ fontSize: "var(--text-b1)", lineHeight: "var(--lh-b1)" }}>
              {newYork.about.body}
            </p>
            <Button variant="secondary" href="/newyork/about">
              More about us
            </Button>
          </Shelf>
        )}

        {/* Events we host */}
        {newYork.eventTypes && (
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
              {newYork.eventTypes.map((event, i) => (
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

        {/* Keen to get involved */}
        <Shelf size="sm" className="flex flex-col items-center gap-6">
          <hr className="w-full border-just-grey/20" />
          <p
            className="text-really-dark-grey text-center"
            style={{ fontSize: "var(--text-b1)", lineHeight: "var(--lh-b1)" }}
          >
            Keen to get involved?
          </p>
          <ContactButton
            chapter="newyork"
            chapterName={newYork.name}
            title="Volunteer with New York Product Design"
            label="Volunteer with us"
          />
        </Shelf>

        {/* Partner logos */}
        <LogoGrid
          logos={nyPartnerLogos}
          sectionHeading="Thanks to our partners & supporters"
          background="bg-literally-white"
        />
      </main>

      <Footer
        chapter={newYork}
        volunteerTrigger={
          <ContactLink chapter="newyork" chapterName={newYork.name} title="Volunteer with New York Product Design" label="Volunteer" />
        }
      />
    </>
  );
}
