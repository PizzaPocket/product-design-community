import type { PartnershipTierItem } from "@/types/content";
import { Button } from "@/components/atoms/Button";

interface PartnershipTierProps extends PartnershipTierItem {}

export function PartnershipTier({ title, description, ctaLabel, ctaHref, image }: PartnershipTierProps) {
  return (
    <div className="flex flex-col gap-6 p-8 bg-literally-white rounded-card border border-just-grey/20">
      {image && (
        <div className="overflow-hidden rounded-image aspect-[2/1] w-full">
          <img src={image} alt="" aria-hidden className="w-full h-full object-cover" />
        </div>
      )}
      <div className="flex flex-col gap-3 flex-1">
        <h3
          className="font-semibold text-nearly-black"
          style={{ fontSize: "var(--text-h3)", lineHeight: "var(--lh-h3)" }}
        >
          {title}
        </h3>
        <p
          className="text-really-dark-grey flex-1"
          style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}
        >
          {description}
        </p>
      </div>
      <div>
        <Button variant="primary" href={ctaHref} target="_blank">
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
