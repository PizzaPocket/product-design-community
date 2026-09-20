import { NavBar } from "@/components/organisms/NavBar";
import { Footer } from "@/components/organisms/Footer";
import { ImageColumns } from "@/components/organisms/ImageColumns";
import { ProfileGrid } from "@/components/organisms/ProfileGrid";
import { Shelf } from "@/components/organisms/Shelf";
import { ContactLink } from "@/components/molecules/ContactLink";
import { newYork } from "@/content/newyork";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — New York Product Design",
  description: "New York Product Design, formerly Brooklyn Product Design, has been bringing together designers across the city since 2017.",
};

export default function NewYorkAboutPage() {
  const paragraphs = newYork.about?.paragraphs ?? [];

  return (
    <>
      <NavBar chapter={newYork} />

      <main>
        <Shelf background="bg-literally-white" className="flex flex-col gap-8">
          <h1
            className="font-bold text-nearly-black text-center max-w-2xl mx-auto w-full"
            style={{ fontSize: "var(--text-h1)", lineHeight: "var(--lh-h1)" }}
          >
            {newYork.about?.heading}
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
              The New York chapter is part of the broader{" "}
              <a href="/" className="text-deep-blueklyn hover:opacity-70 transition-opacity">Product Design Community</a>
              , alongside sibling chapters in{" "}
              <a href="/losangeles" className="text-deep-blueklyn hover:opacity-70 transition-opacity">Los Angeles</a>
              {" "}and{" "}
              <a href="/singapore" className="text-deep-blueklyn hover:opacity-70 transition-opacity">Singapore</a>
              , all committed to building thoughtful, welcoming spaces where people can grow.
            </p>
            <p
              className="text-really-dark-grey break-inside-avoid"
              style={{ fontSize: "var(--text-b1)", lineHeight: "var(--lh-b1)" }}
            >
              Check out our upcoming events on{" "}
              <a href="https://luma.com/nyproductdesign" target="_blank" rel="noopener" className="text-deep-blueklyn hover:opacity-70 transition-opacity">Luma</a>
              {" "}and read the{" "}
              <a href={newYork.footer.social.substack} target="_blank" rel="noopener" className="text-deep-blueklyn hover:opacity-70 transition-opacity">newsletter</a>
              . Follow us on{" "}
              <a href={newYork.footer.social.linkedin} target="_blank" rel="noopener" className="text-deep-blueklyn hover:opacity-70 transition-opacity">LinkedIn</a>
              {" "}or{" "}
              <a href={newYork.footer.social.instagram} target="_blank" rel="noopener" className="text-deep-blueklyn hover:opacity-70 transition-opacity">Instagram</a>
              {" "}to stay in the loop.
            </p>
          </div>
        </Shelf>

        {newYork.values && (
          <ImageColumns
            pillars={newYork.values}
            sectionHeading="What our community stands for"
            background="bg-cookie-dough"
          />
        )}

        {newYork.team && (
          <Shelf background="bg-literally-white" className="flex flex-col gap-16">
            <ProfileGrid members={newYork.team} heading="Meet the volunteers" />
            {newYork.alumniTeam && (
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
                  {newYork.alumniTeam.map((m) => m.name).join(", ")}
                </p>
              </div>
            )}
          </Shelf>
        )}
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
