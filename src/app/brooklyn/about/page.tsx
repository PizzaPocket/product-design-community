import { NavBar } from "@/components/organisms/NavBar";
import { Footer } from "@/components/organisms/Footer";
import { ImageColumns } from "@/components/organisms/ImageColumns";
import { ProfileGrid } from "@/components/organisms/ProfileGrid";
import { Shelf } from "@/components/organisms/Shelf";
import { brooklyn } from "@/content/brooklyn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Brooklyn Product Design",
  description: "Brooklyn Product Design has been bringing together designers in New York since 2017.",
};

export default function BrooklynAboutPage() {
  const paragraphs = brooklyn.about?.paragraphs ?? [];

  return (
    <>
      <NavBar chapter={brooklyn} />

      <main>
        <Shelf background="bg-literally-white" className="flex flex-col gap-8">
          <h1
            className="font-bold text-nearly-black text-center max-w-2xl mx-auto w-full"
            style={{ fontSize: "var(--text-h1)", lineHeight: "var(--lh-h1)" }}
          >
            {brooklyn.about?.heading}
          </h1>
          <div className="md:columns-2 md:gap-x-16 space-y-5">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-really-dark-grey break-inside-avoid"
                style={{ fontSize: "var(--text-b1)", lineHeight: "var(--lh-b1)" }}
              >
                {p}
              </p>
            ))}
            <p
              className="text-really-dark-grey break-inside-avoid"
              style={{ fontSize: "var(--text-b1)", lineHeight: "var(--lh-b1)" }}
            >
              The Brooklyn chapter is part of the broader{" "}
              <a href="/" className="text-deep-blueklyn hover:opacity-70 transition-opacity">Product Design Community</a>
              , alongside sibling chapters in{" "}
              <a href="/singapore" className="text-deep-blueklyn hover:opacity-70 transition-opacity">Singapore</a>
              {" "}and{" "}
              <a href="/losangeles" className="text-deep-blueklyn hover:opacity-70 transition-opacity">Los Angeles</a>
              , all committed to building thoughtful, welcoming spaces where people can grow.
            </p>
            <p
              className="text-really-dark-grey break-inside-avoid"
              style={{ fontSize: "var(--text-b1)", lineHeight: "var(--lh-b1)" }}
            >
              Check out our upcoming events on{" "}
              <a href="https://lu.ma/bkproductdesign" target="_blank" rel="noopener" className="text-deep-blueklyn hover:opacity-70 transition-opacity">Luma</a>
              . Follow us on{" "}
              <a href={brooklyn.footer.social.linkedin} target="_blank" rel="noopener" className="text-deep-blueklyn hover:opacity-70 transition-opacity">LinkedIn</a>
              {" "}or{" "}
              <a href={brooklyn.footer.social.instagram} target="_blank" rel="noopener" className="text-deep-blueklyn hover:opacity-70 transition-opacity">Instagram</a>
              {" "}to stay in the loop.
            </p>
          </div>
        </Shelf>

        {brooklyn.values && (
          <ImageColumns
            pillars={brooklyn.values}
            sectionHeading="What our community stands for"
            background="bg-cookie-dough"
          />
        )}

        {brooklyn.team && (
          <Shelf background="bg-literally-white" className="flex flex-col gap-16">
            <ProfileGrid members={brooklyn.team} heading="Meet the volunteers" />
            {brooklyn.alumniTeam && (
              <div className="flex flex-col gap-3">
                <h3
                  className="font-bold text-nearly-black text-center"
                  style={{ fontSize: "var(--text-h3)", lineHeight: "var(--lh-h3)" }}
                >
                  Alumni volunteers
                </h3>
                <p
                  className="text-really-dark-grey text-center"
                  style={{ fontSize: "var(--text-b1)", lineHeight: "var(--lh-b1)" }}
                >
                  {brooklyn.alumniTeam.map((m) => m.name).join(", ")}
                </p>
              </div>
            )}
          </Shelf>
        )}
      </main>

      <Footer chapter={brooklyn} />
    </>
  );
}
