import { NavBar } from "@/components/organisms/NavBar";
import { Footer } from "@/components/organisms/Footer";
import { HeroSection } from "@/components/organisms/HeroSection";
import { Shelf } from "@/components/organisms/Shelf";
import { SectionWrapper } from "@/components/organisms/SectionWrapper";
import { PhotoCarousel } from "@/components/organisms/PhotoCarousel";
import { LogoGrid } from "@/components/organisms/LogoGrid";
import { AlternatingMediaRow } from "@/components/molecules/AlternatingMediaRow";
import { Button } from "@/components/atoms/Button";
import { singapore, singaporePartnerLogos } from "@/content/singapore";
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
          ctaLabel={singapore.hero.ctaLabel}
          ctaHref={singapore.hero.ctaHref}
          ctaVariant={singapore.hero.ctaVariant}
        />

        {/* About blurb */}
        {singapore.about && (
          <Shelf size="sm" background="bg-literally-white">
            <div className="max-w-2xl mx-auto flex flex-col gap-6">
              <p
                className="text-really-dark-grey"
                style={{ fontSize: "var(--text-b1)", lineHeight: "var(--lh-b1)" }}
              >
                {singapore.about.body}
              </p>
              <Button variant="secondary" href="/singapore/about" className="self-center">
                More about us
              </Button>
            </div>
          </Shelf>
        )}

        {/* Photo carousel */}
        {singapore.carouselImages && singapore.carouselImages.length > 0 && (
          <PhotoCarousel images={singapore.carouselImages} />
        )}

        {/* Homegrown initiatives */}
        {singapore.initiatives && (
          <Shelf bleed className="flex flex-col gap-6">
            <SectionWrapper as="div">
              <h2
                className="font-bold text-nearly-black text-center"
                style={{ fontSize: "var(--text-h2)", lineHeight: "var(--lh-h2)" }}
              >
                Homegrown initiatives
              </h2>
            </SectionWrapper>
            <div className="flex flex-col gap-8">
              {singapore.initiatives.map((initiative, i) => (
                <AlternatingMediaRow
                  key={initiative.title}
                  heading={initiative.title}
                  body={initiative.description}
                  image={initiative.image ?? ""}
                  imagePosition={i % 2 === 0 ? "left" : "right"}
                  ctaLabel={initiative.ctaLabel}
                  ctaHref={initiative.ctaHref}
                />
              ))}
            </div>
            <SectionWrapper as="div" className="flex flex-col items-center gap-6">
              <Button variant="secondary" href="/singapore/initiatives">
                More about initiatives
              </Button>
              <p
                className="text-really-dark-grey text-center"
                style={{ fontSize: "var(--text-b1)", lineHeight: "var(--lh-b1)" }}
              >
                Keen to get involved?{" "}
                {singapore.volunteerHref && (
                  <a
                    href={singapore.volunteerHref}
                    className="underline hover:text-deep-blueklyn transition-colors"
                  >
                    Volunteer with us
                  </a>
                )}
              </p>
            </SectionWrapper>
          </Shelf>
        )}

        {/* Partner logos + support */}
        <LogoGrid
          logos={singaporePartnerLogos}
          sectionHeading="Thanks to our partners & supporters"
          background="bg-literally-white"
          footer={
            singapore.donateHref ? (
              <>
                <p
                  className="text-really-dark-grey max-w-xl"
                  style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}
                >
                  We&apos;re entirely volunteer-run and not-for-profit. Donations big or small help us cover essentials like printing, snacks, and web hosting. It&apos;s a small way to make a big difference.
                </p>
                <Button variant="secondary" href={singapore.donateHref} target="_blank">
                  Buy Us a Coffee
                </Button>
              </>
            ) : undefined
          }
        />
      </main>

      <Footer chapter={singapore} />
    </>
  );
}
