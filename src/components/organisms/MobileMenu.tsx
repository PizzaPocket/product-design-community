"use client";

import { X } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { IconMark } from "@/components/organisms/IconMark";
import type { ChapterConfig } from "@/types/content";

interface MobileMenuProps {
  chapter: ChapterConfig;
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ chapter, isOpen, onClose }: MobileMenuProps) {
  const homeHref = chapter.slug === "pdc" ? "/" : `/${chapter.slug}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className={`fixed inset-0 z-[60] bg-literally-white flex flex-col transition-opacity duration-200 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Header row — identical padding and height to NavBar so logo and close icon
          sit at exactly the same coordinates as the wordmark and hamburger */}
      <div className="flex items-center justify-between px-6 h-[var(--nav-height)] shrink-0 shadow-[0_1px_0_0_#e5e5e5]">
        <a href={homeHref} onClick={onClose} className="flex items-center gap-2 shrink-0">
          {chapter.logo ? (
            <img src={chapter.logo} alt={chapter.name} className="h-6 w-auto" />
          ) : (
            <>
              <IconMark size={28} />
              <span className="font-bold text-xl leading-none" style={{ color: chapter.accentColor }}>
                {chapter.name}
              </span>
            </>
          )}
        </a>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="text-nearly-black hover:text-deep-blueklyn transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      {/* Nav links — H2 scale, sentence case, bold */}
      <nav className="flex flex-col px-6 py-10 gap-8">
        {chapter.nav.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="font-bold text-nearly-black hover:text-deep-blueklyn transition-colors"
            style={{ fontSize: "var(--text-h2)", lineHeight: "var(--lh-h2)" }}
          >
            {link.label}
          </a>
        ))}
        {chapter.nav.cta && (
          <div className="pt-2">
            <Button variant="primary" href={chapter.nav.cta.href} uppercase={false} onClick={onClose}>
              {chapter.nav.cta.label}
            </Button>
          </div>
        )}
      </nav>
    </div>
  );
}
