import type { ZineVolume } from "@/types/content";
import { Button } from "@/components/atoms/Button";

interface ZineCardProps extends ZineVolume {}

export function ZineCard({ volume, title, href, cover }: ZineCardProps) {
  return (
    <div className="flex flex-col gap-5">
      {cover && (
        <div className="overflow-hidden rounded-card aspect-[3/4] w-full">
          <img src={cover} alt={`DotGrid Vol. ${volume} cover`} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="flex flex-col gap-3">
        <p
          className="font-bold uppercase text-just-grey"
          style={{ fontSize: "var(--text-label)", letterSpacing: "var(--ls-label)" }}
        >
          Vol. {volume}
        </p>
        <h3
          className="font-semibold text-nearly-black"
          style={{ fontSize: "var(--text-h3)", lineHeight: "var(--lh-h3)" }}
        >
          {title}
        </h3>
        <div>
          <Button variant="secondary" href={href} target="_blank">
            Read now
          </Button>
        </div>
      </div>
    </div>
  );
}
