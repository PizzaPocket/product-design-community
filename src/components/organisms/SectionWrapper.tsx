import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div" | "article";
  id?: string;
}

export function SectionWrapper({
  children,
  className = "",
  as: Tag = "section",
  id,
}: SectionWrapperProps) {
  return (
    <Tag id={id} className={`px-[var(--section-px)] ${className}`}>
      {children}
    </Tag>
  );
}
