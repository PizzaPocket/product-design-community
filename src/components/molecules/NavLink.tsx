"use client";

import { usePathname } from "next/navigation";

interface NavLinkProps {
  label: string;
  href: string;
  onClick?: () => void;
  className?: string;
}

export function NavLink({ label, href, onClick, className = "" }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <a
      href={href}
      onClick={onClick}
      className={`py-2 font-bold uppercase transition-colors duration-150 ${
        isActive ? "text-deep-blueklyn" : "text-nearly-black hover:text-deep-blueklyn"
      } ${className}`}
      style={{ fontSize: "var(--text-label)", letterSpacing: "var(--ls-label)" }}
    >
      {label}
    </a>
  );
}
