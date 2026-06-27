import React from "react";
import { SectionWrapper } from "@/components/organisms/SectionWrapper";

interface ShelfProps {
  children: React.ReactNode;
  className?: string;
  background?: string;
  size?: "default" | "sm";
  bleed?: boolean;
  id?: string;
}

export function Shelf({
  children,
  className = "",
  background,
  size = "default",
  bleed = false,
  id,
}: ShelfProps) {
  const py = size === "sm"
    ? "pt-[var(--section-pt-sm)] pb-[var(--section-pb-sm)]"
    : "pt-[var(--section-pt)] pb-[var(--section-pb)]";

  if (bleed) {
    // Full-bleed: py lives on the section itself; inner content manages its own max-width
    return (
      <section
        id={id}
        className={`w-full ${py}${background ? ` ${background}` : ""}${className ? ` ${className}` : ""}`}
      >
        {children}
      </section>
    );
  }

  if (background) {
    // Background must go on a full-bleed wrapper; SectionWrapper has max-w
    return (
      <div className={`w-full ${background}`}>
        <SectionWrapper id={id} className={`${py}${className ? ` ${className}` : ""}`}>
          {children}
        </SectionWrapper>
      </div>
    );
  }

  return (
    <SectionWrapper id={id} className={`${py}${className ? ` ${className}` : ""}`}>
      {children}
    </SectionWrapper>
  );
}
