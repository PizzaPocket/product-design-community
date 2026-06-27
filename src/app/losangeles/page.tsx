import { NavBar } from "@/components/organisms/NavBar";
import { Footer } from "@/components/organisms/Footer";
import { HeroSection } from "@/components/organisms/HeroSection";
import { Shelf } from "@/components/organisms/Shelf";
import { LogoGrid } from "@/components/organisms/LogoGrid";
import { Card } from "@/components/molecules/Card";
import { Button } from "@/components/atoms/Button";
import { losangeles, laPartnerLogos } from "@/content/losangeles";
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

        {/* About blurb */}
        {losangeles.about && (
          <Shelf size="sm" background="bg-literally-white" className="flex flex-col items-center gap-6">
            <Button variant="primary" href="https://luma.com/losangelesproductdesign" target="_blank">
              Go to Events
            </Button>
            <p className="w-full text-really-dark-grey" style={{ fontSize: "var(--text-b1)", lineHeight: "var(--lh-b1)" }}>
              {losangeles.about.body}
            </p>
            <Button variant="secondary" href="/losangeles/about">
              More about us
            </Button>
          </Shelf>
        )}

        {/* Homegrown initiatives */}
        {losangeles.initiatives && (
          <Shelf background="bg-cookie-dough" className="flex flex-col gap-8">
            <h2
              className="font-bold text-nearly-black text-center"
              style={{ fontSize: "var(--text-h2)", lineHeight: "var(--lh-h2)" }}
            >
              Homegrown Initiatives
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {losangeles.initiatives.map((initiative) => (
                <Card
                  key={initiative.title}
                  title={initiative.title}
                  description={initiative.description}
                  image={initiative.image}
                  ctaLabel={initiative.ctaLabel}
                  ctaHref={initiative.ctaHref}
                  ctaVariant="tertiary"
                  bare
                />
              ))}
            </div>
            <hr className="border-just-grey/20" />
            <div className="flex flex-col items-center gap-4">
              <p className="text-really-dark-grey" style={{ fontSize: "var(--text-b1)", lineHeight: "var(--lh-b1)" }}>
                Keen to get involved?
              </p>
              {losangeles.volunteerHref && (
                <Button variant="primary" href={losangeles.volunteerHref} target="_blank">
                  Volunteer with us
                </Button>
              )}
            </div>
          </Shelf>
        )}

        {/* Partner logos */}
        <LogoGrid
          logos={laPartnerLogos}
          sectionHeading="Thanks to our partners & supporters"
          background="bg-literally-white"
          footer={
            <p
              className="text-really-dark-grey text-center max-w-xl"
              style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}
            >
              We&apos;re entirely volunteer-run and not-for-profit. Donations big or small help us cover essentials like printing, snacks, and web hosting. It&apos;s a small way to make a big difference.
            </p>
          }
        />
      </main>

      <Footer chapter={losangeles} />
    </>
  );
}
