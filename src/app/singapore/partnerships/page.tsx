import { Coffee } from "lucide-react";
import type { ReactNode } from "react";

const ICON_MAP: Record<string, ReactNode> = {
  coffee: <Coffee size={16} />,
};
import { NavBar } from "@/components/organisms/NavBar";
import { Footer } from "@/components/organisms/Footer";
import { Shelf } from "@/components/organisms/Shelf";
import { LogoGrid } from "@/components/organisms/LogoGrid";
import { Card } from "@/components/molecules/Card";
import { singapore, singaporePartnershipTiers, singaporePartnerLogos } from "@/content/singapore";
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
        <Shelf background="bg-literally-white" className="flex flex-col gap-4">
          <h1
            className="font-bold text-nearly-black text-center"
            style={{ fontSize: "var(--text-h1)", lineHeight: "var(--lh-h1)" }}
          >
            Howdy Partner
          </h1>
          <p
            className="text-really-dark-grey max-w-2xl mx-auto"
            style={{ fontSize: "var(--text-b1)", lineHeight: "var(--lh-b1)" }}
          >
            As a design-focused collective based in Singapore, we channel our creativity and resources to nurture innovation and elevate the product design industry across the region. From sparking meaningful conversations to supporting the next generation of designers, your partnership fuels our mission. With your support, we can continue to create impactful experiences, foster talent, and push the boundaries of product design.
          </p>
        </Shelf>

        <Shelf className="flex flex-col gap-6">
          <h2
            className="font-bold text-nearly-black text-center"
            style={{ fontSize: "var(--text-h2)", lineHeight: "var(--lh-h2)" }}
          >
            Ways you can help
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {singaporePartnershipTiers.map((tier) => (
              <Card
                key={tier.title}
                {...tier}
                ctaVariant="secondary"
                bare
                ctaRightIcon={tier.ctaIcon ? ICON_MAP[tier.ctaIcon] : undefined}
              />
            ))}
          </div>
        </Shelf>

        <LogoGrid
          sectionHeading="Thanks to our partners & supporters"
          logos={singaporePartnerLogos}
        />
      </main>

      <Footer chapter={singapore} />
    </>
  );
}
