import { NavBar } from "@/components/organisms/NavBar";
import { Footer } from "@/components/organisms/Footer";
import { SectionWrapper } from "@/components/organisms/SectionWrapper";
import { ValuePillars } from "@/components/organisms/ValuePillars";
import { TeamGrid } from "@/components/organisms/TeamGrid";
import { Button } from "@/components/atoms/Button";
import { losangeles } from "@/content/losangeles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Los Angeles Product Design",
  description: "Los Angeles Product Design was founded in 2022 to create a dedicated home for product designers across LA.",
};

export default function LosAngelesAboutPage() {
  return (
    <>
      <NavBar chapter={losangeles} />

      <main>
        {/* About intro */}
        <SectionWrapper className="py-20 flex flex-col gap-8">
          <h1
            className="font-bold text-nearly-black"
            style={{ fontSize: "var(--text-h1)", lineHeight: "var(--lh-h1)" }}
          >
            {losangeles.about?.heading}
          </h1>
          <p
            className="text-really-dark-grey max-w-2xl"
            style={{ fontSize: "var(--text-b1)", lineHeight: "var(--lh-b1)" }}
          >
            {losangeles.about?.body}
          </p>

          {/* Stats */}
          {losangeles.stats && (
            <div className="flex flex-wrap gap-12 pt-4">
              {losangeles.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <p
                    className="font-bold text-nearly-black"
                    style={{ fontSize: "var(--text-h2)", lineHeight: "var(--lh-h2)" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-just-grey"
                    style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </SectionWrapper>

        {/* Values */}
        {losangeles.values && <ValuePillars pillars={losangeles.values} />}

        {/* Current team */}
        {losangeles.team && (
          <SectionWrapper className="py-20 flex flex-col gap-16">
            <TeamGrid members={losangeles.team} />

            {/* Alumni */}
            {losangeles.alumniTeam && (
              <TeamGrid members={losangeles.alumniTeam} heading="Alumni volunteers" />
            )}
          </SectionWrapper>
        )}

        {/* CTA */}
        <SectionWrapper as="div" className="py-16 border-t border-just-grey/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-col gap-2">
              <h2
                className="font-bold text-nearly-black"
                style={{ fontSize: "var(--text-h2)", lineHeight: "var(--lh-h2)" }}
              >
                Keen to get involved?
              </h2>
              <p
                className="text-really-dark-grey"
                style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}
              >
                Come to an event or sign up to volunteer.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" href="https://luma.com/losangelesproductdesign" target="_blank">
                See events
              </Button>
              <Button variant="secondary" href="https://forms.gle/yT7dE3byeGCYrPos6" target="_blank">
                Volunteer
              </Button>
            </div>
          </div>
        </SectionWrapper>
      </main>

      <Footer chapter={losangeles} />
    </>
  );
}
