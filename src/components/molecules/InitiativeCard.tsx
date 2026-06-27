import { Button } from "@/components/atoms/Button";

interface InitiativeCardProps {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image?: string;
}

export function InitiativeCard({ title, description, ctaLabel, ctaHref, image }: InitiativeCardProps) {
  return (
    <div className="flex flex-col gap-4 p-8 bg-literally-white rounded-card border border-just-grey/20">
      {image && (
        <img src={image} alt="" className="w-full aspect-[3/2] object-cover rounded-image" aria-hidden="true" />
      )}
      <h3 className="font-semibold text-nearly-black" style={{ fontSize: "var(--text-h3)", lineHeight: "var(--lh-h3)" }}>
        {title}
      </h3>
      <p className="text-really-dark-grey flex-1" style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>
        {description}
      </p>
      <div>
        <Button variant="secondary" href={ctaHref} target="_blank">
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
