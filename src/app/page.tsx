import { NavBar } from "@/components/organisms/NavBar";
import { Footer } from "@/components/organisms/Footer";
import { HeroSection } from "@/components/organisms/HeroSection";
import { ImageColumns } from "@/components/organisms/ImageColumns";
import { LogoGrid } from "@/components/organisms/LogoGrid";
import { Shelf } from "@/components/organisms/Shelf";
import { SectionWrapper } from "@/components/organisms/SectionWrapper";
import { AlternatingMediaRow } from "@/components/molecules/AlternatingMediaRow";
import { PhotoCard } from "@/components/molecules/PhotoCard";
import {
  pdc,
  pdcEventTypes,
  pdcValuePillars,
  pdcChapters,
  pdcPartnerLogos,
} from "@/content/pdc";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Design Community",
  description:
    "Connecting the world's product design community through curiosity and shared learning.",
};

export default function HomePage() {
  return (
    <>
      <NavBar chapter={pdc} />

      <main>
        <HeroSection
          image={pdc.hero.image}
          scrim={false}
        />

        <Shelf size="sm" background="bg-literally-white" className="text-center">
          <p
            className="text-really-dark-grey font-medium max-w-2xl mx-auto"
            style={{ fontSize: "var(--text-quote)", lineHeight: "var(--lh-quote)" }}
          >
            {pdc.hero.body}
          </p>
        </Shelf>

        <Shelf bleed className="flex flex-col gap-6">
          <SectionWrapper as="div">
            <h2
              className="font-bold text-nearly-black text-center"
              style={{ fontSize: "var(--text-h2)", lineHeight: "var(--lh-h2)" }}
            >
              Events uplifting local designers
            </h2>
          </SectionWrapper>
          <div className="flex flex-col gap-8">
            {pdcEventTypes.map((event, i) => (
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

        <ImageColumns pillars={pdcValuePillars} />

        <LogoGrid
          logos={pdcPartnerLogos}
          sectionHeading="Thanks to our partners & supporters"
          background="bg-literally-white"
        />

        <Shelf id="chapters" className="flex flex-col gap-6">
          <h2
            className="font-bold text-nearly-black text-center"
            style={{ fontSize: "var(--text-h2)", lineHeight: "var(--lh-h2)" }}
          >
            Our Chapters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pdcChapters.map((chapter) => (
              <PhotoCard key={chapter.href} {...chapter} />
            ))}
          </div>
        </Shelf>
      </main>

      <Footer chapter={pdc} />
    </>
  );
}
