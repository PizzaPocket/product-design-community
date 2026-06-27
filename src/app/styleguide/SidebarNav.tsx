"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Child { label: string; href: string }
interface NavItem { label: string; href: string; children?: Child[] }

const NAV: NavItem[] = [
  { label: "Typography",  href: "#typography" },
  { label: "Colors",      href: "#colors", children: [
    { label: "Brand palette", href: "#colors-brand" },
    { label: "Neutrals",      href: "#colors-neutral" },
  ]},
  { label: "Spacing",     href: "#spacing" },
  { label: "Radii",       href: "#radii" },
  { label: "Photography", href: "#photography" },
  { label: "Buttons",     href: "#buttons", children: [
    { label: "Variants",   href: "#buttons-variants" },
    { label: "With icons", href: "#buttons-icons" },
    { label: "Specs",      href: "#buttons-specs" },
  ]},
  { label: "Components",  href: "#components", children: [
    { label: "Alternating Media Row", href: "#comp-amr" },
    { label: "Card",                  href: "#comp-card" },
    { label: "Shelf",                 href: "#comp-shelf" },
    { label: "Logo Grid",             href: "#comp-logogrid" },
    { label: "Image Columns",  href: "#comp-imagecolumns" },
    { label: "Profile Grid",          href: "#comp-profilegrid" },
    { label: "Photo Carousel",        href: "#comp-carousel" },
  ]},
];

const linkBase = "font-bold uppercase transition-colors py-1.5 block";
const linkStyle = `${linkBase} text-just-grey hover:text-nearly-black`;
const subLinkStyle = "block text-just-grey hover:text-nearly-black transition-colors py-1 pl-3 border-l border-just-grey/30 hover:border-nearly-black";

export function SidebarNav() {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const toggle = (label: string) =>
    setOpen((prev) => ({ ...prev, [label]: !prev[label] }));

  return (
    <nav className="flex flex-col gap-0.5">
      {NAV.map((item) =>
        item.children ? (
          <div key={item.href}>
            <button
              onClick={() => toggle(item.label)}
              className={`${linkBase} text-just-grey hover:text-nearly-black w-full flex items-center justify-between`}
              style={{ fontSize: "var(--text-label)", letterSpacing: "var(--ls-label)" }}
            >
              {item.label}
              <ChevronDown
                size={14}
                strokeWidth={2.5}
                className="transition-transform duration-200 flex-shrink-0"
                style={{ transform: open[item.label] ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>
            {open[item.label] && (
              <div className="flex flex-col gap-0.5 mt-1 mb-2 bg-literally-white -mx-8 px-8 py-2">
                {item.children.map((child) => (
                  <a
                    key={child.href}
                    href={child.href}
                    className={subLinkStyle}
                    style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ) : (
          <a
            key={item.href}
            href={item.href}
            className={linkStyle}
            style={{ fontSize: "var(--text-label)", letterSpacing: "var(--ls-label)" }}
          >
            {item.label}
          </a>
        )
      )}
    </nav>
  );
}
