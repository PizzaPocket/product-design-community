import { NavBar } from "@/components/organisms/NavBar";
import { Footer } from "@/components/organisms/Footer";
import { SectionWrapper } from "@/components/organisms/SectionWrapper";
import { ZineCard } from "@/components/molecules/ZineCard";
import { Button } from "@/components/atoms/Button";
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
        <SectionWrapper className="py-20 flex flex-col gap-4">
          <h1
            className="font-bold text-nearly-black"
            style={{ fontSize: "var(--text-h1)", lineHeight: "var(--lh-h1)" }}
          >
            Initiatives
          </h1>
          <p
            className="text-really-dark-grey max-w-xl"
            style={{ fontSize: "var(--text-b1)", lineHeight: "var(--lh-b1)" }}
          >
            Programs built by the community, for the community.
          </p>
        </SectionWrapper>

        {/* Career Coaching */}
        <SectionWrapper as="div" className="pb-20 flex flex-col gap-8 border-t border-just-grey/20 pt-16">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2
              className="font-bold text-nearly-black"
              style={{ fontSize: "var(--text-h2)", lineHeight: "var(--lh-h2)" }}
            >
              Career Coaching
            </h2>
            <p
              className="text-really-dark-grey"
              style={{ fontSize: "var(--text-b1)", lineHeight: "var(--lh-b1)" }}
            >
              Free one-on-one career coaching sessions led by Sangeetha Selvaraja, an experienced product design leader. Whether you're navigating a career transition, working through portfolio challenges, or just need a sounding board — book a session.
            </p>
            <div className="pt-2">
              <Button variant="primary" href="https://cal.com/sangeetha/30min-copy" target="_blank">
                Book a session
              </Button>
            </div>
          </div>
        </SectionWrapper>

        {/* DotGrid Zine */}
        <SectionWrapper as="div" className="pb-20 flex flex-col gap-10 border-t border-just-grey/20 pt-16">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2
              className="font-bold text-nearly-black"
              style={{ fontSize: "var(--text-h2)", lineHeight: "var(--lh-h2)" }}
            >
              DotGrid Zine
            </h2>
            <p
              className="text-really-dark-grey"
              style={{ fontSize: "var(--text-b1)", lineHeight: "var(--lh-b1)" }}
            >
              A design zine exploring ideas, conversations, and perspectives from the product design community. Each volume brings together writers, designers, and thinkers to examine what design means — and what it could be.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {singaporeZines.map((zine) => (
              <ZineCard key={zine.volume} {...zine} />
            ))}
          </div>
        </SectionWrapper>
      </main>

      <Footer chapter={singapore} />
    </>
  );
}
