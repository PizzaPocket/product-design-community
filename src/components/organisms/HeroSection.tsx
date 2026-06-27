import { Button } from "@/components/atoms/Button";

interface HeroSectionProps {
  heading: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  image: string;
  ctaTarget?: string;
}

export function HeroSection({
  heading,
  body,
  ctaLabel,
  ctaHref,
  image,
  ctaTarget,
}: HeroSectionProps) {
  return (
    <section className="relative flex items-center min-h-[360px]">
      {/* Background photo */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      {/* Gradient scrim */}
      <div className="absolute inset-0 bg-gradient-to-b from-nearly-black/60 via-nearly-black/20 to-transparent" />

      {/* Content — centered over the full hero width */}
      <div className="absolute inset-0 z-10 flex items-center justify-center py-12">
        <div className="flex flex-col items-center text-center gap-6 px-[var(--section-px)] w-full">
          <h1
            className="font-bold text-literally-white"
            style={{
              fontSize: "var(--text-h1)",
              lineHeight: "var(--lh-h1)",
              letterSpacing: "var(--ls-h1)",
            }}
          >
            {heading}
          </h1>
          {body && (
            <p
              className="text-literally-white/90"
              style={{ fontSize: "var(--text-b1)", lineHeight: "var(--lh-b1)" }}
            >
              {body}
            </p>
          )}
          {ctaLabel && (
            <Button variant="primary" href={ctaHref} target={ctaTarget}>
              {ctaLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
