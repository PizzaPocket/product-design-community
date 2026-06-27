import React from "react";

interface SocialIconLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export function SocialIconLink({ href, icon, label }: SocialIconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-literally-white hover:text-just-grey transition-colors duration-150"
    >
      {icon}
    </a>
  );
}
