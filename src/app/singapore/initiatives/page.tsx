import { NavBar } from "@/components/organisms/NavBar";
import { Footer } from "@/components/organisms/Footer";
import { Shelf } from "@/components/organisms/Shelf";
import { AlternatingMediaRow } from "@/components/molecules/AlternatingMediaRow";
import { SectionWrapper } from "@/components/organisms/SectionWrapper";
import { singapore, singaporeZines } from "@/content/singapore";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Initiatives — Singapore Product Design",
  description: "Career coaching and the DotGrid Zine — community initiatives from Singapore Product Design.",
};

export default function SingaporeInitiativesPage() {
  return (
    <>
      <NavBar chapter={singapore} />

      <main>
        <Shelf background="bg-literally-white" className="flex flex-col gap-6">
          <h1
            className="font-bold text-nearly-black text-center"
            style={{ fontSize: "var(--text-h1)", lineHeight: "var(--lh-h1)" }}
          >
            Initiatives
          </h1>
        </Shelf>

        <Shelf bleed background="bg-literally-white">
          <AlternatingMediaRow
            heading="Career Coaching"
            body="Led by Sangeetha, our monthly Career Coaching sessions focus on guiding members from portfolio building to professional networking skills to emerge as confident, prepared designers in today's everchanging market."
            image="/images/singapore/initiative_coaching.png"
            imagePosition="left"
            ctaLabel="Sign Up"
            ctaHref="https://cal.com/sangeetha/30min-copy"
            ctaVariant="secondary"
          />
        </Shelf>

        <Shelf bleed className="flex flex-col gap-8">
          <SectionWrapper as="div">
            <h2
              className="font-bold text-nearly-black text-center"
              style={{ fontSize: "var(--text-h2)", lineHeight: "var(--lh-h2)" }}
            >
              DotGrid Design Community Zine
            </h2>
          </SectionWrapper>
          <div className="flex flex-col gap-8">
            {singaporeZines.map((zine, i) => (
              <AlternatingMediaRow
                key={zine.volume}
                heading={`Vol. ${zine.volume}: ${zine.title}`}
                body={zine.description ?? ""}
                image={zine.cover ?? ""}
                imagePosition={i % 2 === 0 ? "left" : "right"}
                ctaLabel={zine.ctaLabel}
                ctaHref={zine.href}
                ctaVariant="secondary"
              />
            ))}
          </div>
        </Shelf>
      </main>

      <Footer chapter={singapore} />
    </>
  );
}
