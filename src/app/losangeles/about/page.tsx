import { NavBar } from "@/components/organisms/NavBar";
import { Footer } from "@/components/organisms/Footer";
import { ImageColumns } from "@/components/organisms/ImageColumns";
import { ProfileGrid } from "@/components/organisms/ProfileGrid";
import { Shelf } from "@/components/organisms/Shelf";
import { Button } from "@/components/atoms/Button";
import { losangeles } from "@/content/losangeles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Los Angeles Product Design",
  description: "Los Angeles Product Design was founded in 2022 to create a dedicated home for product designers across LA.",
};

export default function LosAngelesAboutPage() {
  const paragraphs = losangeles.about?.paragraphs ?? [];

  return (
    <>
      <NavBar chapter={losangeles} />

      <main>
        <Shelf background="bg-literally-white" className="flex flex-col gap-8">
          <h1
            className="font-bold text-nearly-black text-center max-w-2xl mx-auto w-full"
            style={{ fontSize: "var(--text-h1)", lineHeight: "var(--lh-h1)" }}
          >
            {losangeles.about?.heading}
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
              The Los Angeles chapter is part of the broader{" "}
              <a href="/" className="text-deep-blueklyn hover:opacity-70 transition-opacity">Product Design Community</a>
              , which includes sibling chapters in{" "}
              <a href="/brooklyn" className="text-deep-blueklyn hover:opacity-70 transition-opacity">Brooklyn</a>
              {" "}and{" "}
              <a href="/singapore" className="text-deep-blueklyn hover:opacity-70 transition-opacity">Singapore</a>
              , committed to building thoughtful, welcoming spaces where people can grow.
            </p>
            <p
              className="text-really-dark-grey break-inside-avoid"
              style={{ fontSize: "var(--text-b1)", lineHeight: "var(--lh-b1)" }}
            >
              Check out our upcoming events on{" "}
              <a href="https://luma.com/losangelesproductdesign" target="_blank" rel="noopener" className="text-deep-blueklyn hover:opacity-70 transition-opacity">Luma</a>
              . Follow us on{" "}
              <a href={losangeles.footer.social.linkedin} target="_blank" rel="noopener" className="text-deep-blueklyn hover:opacity-70 transition-opacity">LinkedIn</a>
              {" "}or{" "}
              <a href={losangeles.footer.social.instagram} target="_blank" rel="noopener" className="text-deep-blueklyn hover:opacity-70 transition-opacity">Instagram</a>
              {" "}to stay in the loop.
            </p>
          </div>
        </Shelf>

        {losangeles.values && (
          <ImageColumns
            pillars={losangeles.values}
            sectionHeading="What our community stands for"
            background="bg-cookie-dough"
            footer={
              <div className="flex flex-col items-center gap-10 pt-4">
                <div className="w-full aspect-[16/7] overflow-hidden rounded-image">
                  <img
                    src="/images/losangeles/event_strip.jpg"
                    alt="Los Angeles Product Design community event"
                    className="w-full h-full object-cover"
                  />
                </div>
                {losangeles.volunteerHref && (
                  <Button variant="primary" href={losangeles.volunteerHref} target="_blank">
                    Volunteer with us
                  </Button>
                )}
              </div>
            }
          />
        )}

        {losangeles.team && (
          <Shelf background="bg-literally-white" className="flex flex-col gap-16">
            <ProfileGrid members={losangeles.team} heading="Meet the volunteers" />
            {losangeles.alumniTeam && (
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
                  {losangeles.alumniTeam.map((m) => m.name).join(", ")}
                </p>
              </div>
            )}
          </Shelf>
        )}
      </main>

      <Footer chapter={losangeles} />
    </>
  );
}
