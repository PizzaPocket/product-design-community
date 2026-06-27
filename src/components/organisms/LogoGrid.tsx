import { BrandLogo } from "@/components/atoms/BrandLogo";
import { SectionWrapper } from "@/components/organisms/SectionWrapper";

interface LogoItem {
  src: string;
  alt: string;
  href?: string;
}

interface LogoGridProps {
  logos: LogoItem[];
  sectionHeading?: string;
  background?: string;
  footer?: React.ReactNode;
}

export function LogoGrid({ logos, sectionHeading, background, footer }: LogoGridProps) {
  const inner = (
    <SectionWrapper className="pt-[var(--section-pt-sm)] pb-[var(--section-pb-sm)] flex flex-col gap-10">
      {sectionHeading && (
        <h2
          className="font-bold text-nearly-black text-center"
          style={{
            fontSize: "var(--text-h2)",
            lineHeight: "var(--lh-h2)",
            letterSpacing: "var(--ls-h2)",
          }}
        >
          {sectionHeading}
        </h2>
      )}
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
        {logos.map((logo) => (
          <BrandLogo key={logo.src} src={logo.src} alt={logo.alt} href={logo.href} />
        ))}
      </div>
      {footer && (
        <>
          <div className="w-full border-t border-just-grey/20" />
          <div className="flex flex-col items-center gap-4 text-center">
            {footer}
          </div>
        </>
      )}
    </SectionWrapper>
  );

  if (background) {
    return <div className={`w-full ${background}`}>{inner}</div>;
  }

  return inner;
}
