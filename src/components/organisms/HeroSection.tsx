import { Button } from "@/components/atoms/Button";

interface HeroSectionProps {
  heading?: string;
  image: string;
  textAlign?: "center" | "left";
  scrim?: "lr" | "tb" | "bt" | "full" | false;
  compact?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
  ctaVariant?: "primary" | "secondary" | "tertiary" | "primary-alt";
}

export function HeroSection({
  heading,
  image,
  textAlign = "left",
  scrim = "lr",
  compact = false,
  ctaLabel,
  ctaHref,
  ctaVariant = "primary",
}: HeroSectionProps) {
  const isCenter = textAlign === "center";

  return (
    <section className={`relative ${compact ? "min-h-[320px] md:min-h-[360px]" : "min-h-[360px] md:min-h-[520px]"}`}>
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        aria-hidden="true"
      />

      {scrim === "full" && <div className="absolute inset-0 bg-nearly-black/30" />}
      {scrim === "lr"   && <div className="absolute inset-0 bg-gradient-to-r from-nearly-black/40 via-nearly-black/10 via-60% to-transparent" />}
      {scrim === "tb"   && <div className="absolute inset-0 bg-gradient-to-b from-nearly-black/40 via-nearly-black/10 via-60% to-transparent" />}
      {scrim === "bt"   && <div className="absolute inset-0 bg-gradient-to-t from-nearly-black/40 via-nearly-black/10 via-60% to-transparent" />}

      {(heading || ctaLabel) && (
        <div className={`absolute inset-0 z-10 flex ${scrim === "bt" ? "items-end pb-[var(--section-pb)]" : "items-center"}${isCenter ? " justify-center" : ""}`}>
          <div className={`w-full px-[var(--section-px)] flex flex-col gap-4 md:gap-6${isCenter ? " items-center" : ""}`}>
            {heading && (
              <h1
                className={`font-bold text-cookie-dough${isCenter ? " text-center" : ""}`}
                style={{ fontSize: "var(--text-h1)", lineHeight: "var(--lh-h1)", ...(!isCenter && { maxWidth: "var(--hero-heading-max-w)" }) }}
              >
                {heading}
              </h1>
            )}
            {ctaLabel && ctaHref && (
              <Button variant={ctaVariant} href={ctaHref} target="_blank">
                {ctaLabel}
              </Button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
