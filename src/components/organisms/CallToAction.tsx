import { Button } from "@/components/atoms/Button";
import { SectionWrapper } from "@/components/organisms/SectionWrapper";

interface CallToActionProps {
  heading: string;
  body?: string;
  ctaLabel: string;
  ctaHref: string;
  ctaVariant?: "primary" | "secondary" | "primary-alt";
  background?: "dark" | "light";
}

export function CallToAction({
  heading,
  body,
  ctaLabel,
  ctaHref,
  ctaVariant = "primary",
  background = "dark",
}: CallToActionProps) {
  const isDark = background === "dark";

  return (
    <div className={`w-full ${isDark ? "bg-nearly-black" : ""}`}>
      <SectionWrapper className="pt-[var(--section-pt)] pb-[var(--section-pb)] flex flex-col items-center gap-8 text-center">
        <h2
          className={`font-bold ${isDark ? "text-cookie-dough" : "text-nearly-black"}`}
          style={{ fontSize: "var(--text-h2)", lineHeight: "var(--lh-h2)" }}
        >
          {heading}
        </h2>
        {body && (
          <p
            className={`max-w-xl ${isDark ? "text-just-grey" : "text-really-dark-grey"}`}
            style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}
          >
            {body}
          </p>
        )}
        <Button variant={ctaVariant} href={ctaHref} target="_blank">
          {ctaLabel}
        </Button>
      </SectionWrapper>
    </div>
  );
}
