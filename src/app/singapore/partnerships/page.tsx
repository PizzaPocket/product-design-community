import { NavBar } from "@/components/organisms/NavBar";
import { Footer } from "@/components/organisms/Footer";
import { SectionWrapper } from "@/components/organisms/SectionWrapper";
import { PartnershipTier } from "@/components/molecules/PartnershipTier";
import { singapore, singaporePartnershipTiers } from "@/content/singapore";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnerships — Singapore Product Design",
  description: "Partner with Singapore Product Design — sponsor an event, donate, or share your expertise.",
};

export default function SingaporePartnershipsPage() {
  return (
    <>
      <NavBar chapter={singapore} />

      <main>
        {/* Header */}
        <SectionWrapper className="py-20 flex flex-col gap-4">
          <h1
            className="font-bold text-nearly-black"
            style={{ fontSize: "var(--text-h1)", lineHeight: "var(--lh-h1)" }}
          >
            Howdy Partner
          </h1>
          <p
            className="text-really-dark-grey max-w-xl"
            style={{ fontSize: "var(--text-b1)", lineHeight: "var(--lh-b1)" }}
          >
            We're a volunteer-run community. Everything we do — from free events to career coaching — is made possible by people and organisations who believe in what we're building.
          </p>
        </SectionWrapper>

        {/* Ways to help */}
        <SectionWrapper as="div" className="pb-20 flex flex-col gap-10 border-t border-just-grey/20 pt-16">
          <h2
            className="font-bold text-nearly-black"
            style={{ fontSize: "var(--text-h2)", lineHeight: "var(--lh-h2)" }}
          >
            Ways you can help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {singaporePartnershipTiers.map((tier) => (
              <PartnershipTier key={tier.title} {...tier} />
            ))}
          </div>
        </SectionWrapper>
      </main>

      <Footer chapter={singapore} />
    </>
  );
}
