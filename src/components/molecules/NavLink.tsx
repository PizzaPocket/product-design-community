"use client";

import { usePathname } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { isExternalHref } from "@/lib/links";

interface NavLinkProps {
  label: string;
  href: string;
  onClick?: () => void;
  className?: string;
}

export function NavLink({ label, href, onClick, className = "" }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const isExternal = isExternalHref(href);

  return (
    <a
      href={href}
      onClick={onClick}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center gap-1.5 py-2 font-bold uppercase transition-colors duration-150 ${
        isActive ? "text-deep-blueklyn" : "text-really-dark-grey hover:text-deep-blueklyn"
      } ${className}`}
      style={{ fontSize: "var(--text-label)", letterSpacing: "var(--ls-label)" }}
    >
      {label}
      {isExternal && <ExternalLink size={13} strokeWidth={2.5} aria-hidden="true" />}
    </a>
  );
}
