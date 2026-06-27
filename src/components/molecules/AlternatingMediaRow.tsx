import { Button } from "@/components/atoms/Button";

interface AlternatingMediaRowProps {
  heading: string;
  body: string;
  image: string;
  imagePosition?: "left" | "right";
  ctaLabel?: string;
  ctaHref?: string;
  ctaVariant?: "primary" | "secondary" | "tertiary" | "primary-alt";
}

export function AlternatingMediaRow({
  heading,
  body,
  image,
  imagePosition = "left",
  ctaLabel,
  ctaHref,
  ctaVariant = "tertiary",
}: AlternatingMediaRowProps) {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-stretch md:gap-8 md:px-[var(--section-px)] md:max-w-[var(--page-max-w)] md:mx-auto ${
        imagePosition === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image — full-bleed with no radius on mobile, constrained + rounded on desktop.
          On desktop: drops aspect-ratio and fills the row's natural height instead. */}
      <div className="w-full md:w-[40%] md:flex-shrink-0 aspect-[3/2] overflow-hidden md:rounded-image">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text — left-aligned on mobile always; mirrors image anchor on desktop */}
      <div
        className={`flex flex-col justify-center gap-4 px-[var(--section-px)] pt-5 md:px-0 md:py-6 md:flex-1 text-left ${
          imagePosition === "right" ? "md:text-right" : ""
        }`}
      >
        <h3
          className="font-semibold text-nearly-black"
          style={{ fontSize: "var(--text-h3)", lineHeight: "var(--lh-h3)" }}
        >
          {heading}
        </h3>
        <p
          className="text-really-dark-grey"
          style={{ fontSize: "var(--text-b1)", lineHeight: "var(--lh-b1)" }}
        >
          {body}
        </p>
        {ctaLabel && ctaHref && (
          <div className="pt-2">
            <Button variant={ctaVariant} href={ctaHref} target="_blank">
              {ctaLabel}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
