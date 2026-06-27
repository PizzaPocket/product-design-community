import { PartnerLogo } from "@/components/molecules/PartnerLogo";
import { SectionWrapper } from "@/components/organisms/SectionWrapper";

interface LogoItem {
  src: string;
  alt: string;
  href?: string;
}

interface PartnerLogoGridProps {
  logos: LogoItem[];
  sectionHeading?: string;
}

export function PartnerLogoGrid({ logos, sectionHeading }: PartnerLogoGridProps) {
  return (
    <SectionWrapper className="py-16 flex flex-col gap-10">
      {sectionHeading && (
        <h2
          className="font-bold text-nearly-black"
          style={{
            fontSize: "var(--text-h2)",
            lineHeight: "var(--lh-h2)",
            letterSpacing: "var(--ls-h2)",
          }}
        >
          {sectionHeading}
        </h2>
      )}
      <div className="flex flex-wrap items-center gap-x-12 gap-y-8">
        {logos.map((logo) => (
          <PartnerLogo key={logo.src} src={logo.src} alt={logo.alt} href={logo.href} />
        ))}
      </div>
    </SectionWrapper>
  );
}
