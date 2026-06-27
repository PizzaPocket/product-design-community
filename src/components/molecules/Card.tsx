import React from "react";
import { Button } from "@/components/atoms/Button";

interface CardProps {
  title: string;
  description?: string;
  label?: string;
  image?: string;
  portrait?: boolean;
  items?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  ctaVariant?: "primary" | "secondary" | "tertiary" | "primary-alt";
  ctaRightIcon?: React.ReactNode;
  bare?: boolean;
}

export function Card({
  title,
  description,
  label,
  image,
  portrait = false,
  items,
  ctaLabel,
  ctaHref,
  ctaVariant = "secondary",
  ctaRightIcon,
  bare = false,
}: CardProps) {
  const aspect = portrait ? "aspect-[3/4]" : "aspect-[3/2]";

  return (
    <div className={`flex flex-col ${image ? "md:flex-row md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 lg:flex-col" : ""} gap-4 ${bare ? "" : "p-8 bg-literally-white rounded-card border border-just-grey/20"}`}>
      {image && (
        <div className={`flex-shrink-0 w-full md:w-2/5 md:self-start lg:w-full lg:self-auto overflow-hidden rounded-image ${aspect}`}>
          <img src={image} alt="" aria-hidden="true" className="w-full h-full object-cover" />
        </div>
      )}
      <div className="flex flex-col gap-4">
        {label && (
          <p
            className="font-bold uppercase text-just-grey"
            style={{ fontSize: "var(--text-label)", letterSpacing: "var(--ls-label)" }}
          >
            {label}
          </p>
        )}
        <h3
          className="font-semibold text-nearly-black"
          style={{ fontSize: "var(--text-h3)", lineHeight: "var(--lh-h3)" }}
        >
          {title}
        </h3>
        {description && (
          <p className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>
            {description}
          </p>
        )}
        {items && items.length > 0 && (
          <ul className="flex flex-col gap-1">
            {items.map((item) => (
              <li
                key={item}
                className="text-really-dark-grey flex items-start gap-2"
                style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}
              >
                <span className="mt-[0.4em] w-1 h-1 rounded-full bg-really-dark-grey flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        )}
        {ctaLabel && ctaHref && (
          <div>
            <Button variant={ctaVariant} href={ctaHref} target="_blank" rightIcon={ctaRightIcon}>
              {ctaLabel}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
