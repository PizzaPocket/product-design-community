"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { NavLink } from "@/components/molecules/NavLink";
import { IconMark } from "@/components/organisms/IconMark";
import { MobileMenu } from "@/components/organisms/MobileMenu";
import type { ChapterConfig } from "@/types/content";

interface NavBarProps {
  chapter: ChapterConfig;
}

export function NavBar({ chapter }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const homeHref = chapter.slug === "pdc" ? "/" : `/${chapter.slug}`;

  return (
    <>
      <header className="sticky top-0 z-50 bg-literally-white shadow-[0_1px_0_0_#e5e5e5]">
        <div
          className="flex items-center justify-between px-10 h-[var(--nav-height)]"
          style={{ maxWidth: "100%" }}
        >
          {/* Logo */}
          <a href={homeHref} className="flex items-center gap-2 shrink-0">
            {chapter.logo ? (
              <img src={chapter.logo} alt={chapter.name} className="h-6 w-auto" />
            ) : (
              <>
                <IconMark size={28} />
                <span
                  className="font-bold text-xl leading-none"
                  style={{ color: chapter.accentColor }}
                >
                  {chapter.name}
                </span>
              </>
            )}
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center"
            style={{ gap: "var(--gap-nav)" }}
          >
            {chapter.nav.links.map((link) => (
              <NavLink key={link.href} label={link.label} href={link.href} />
            ))}
            {chapter.nav.cta && (
              <Button
                variant="primary"
                href={chapter.nav.cta.href}
                uppercase={false}
              >
                {chapter.nav.cta.label}
              </Button>
            )}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-nearly-black hover:text-deep-blueklyn transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileMenu
        chapter={chapter}
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
