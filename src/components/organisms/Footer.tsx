import { CalendarDays } from "lucide-react";
import { SocialIconLink } from "@/components/molecules/SocialIconLink";
import { LinkedInIcon, InstagramIcon } from "@/components/atoms/SocialIcons";
import type { ChapterConfig } from "@/types/content";
// TODO: replace LinkedInIcon + InstagramIcon with exported SVG assets from Figma/brand kit

interface FooterProps {
  chapter: ChapterConfig;
}

export function Footer({ chapter }: FooterProps) {
  const homeHref = chapter.slug === "pdc" ? "/" : `/${chapter.slug}`;
  const { footer } = chapter;

  return (
    <footer className="bg-really-dark-grey text-literally-white">
      <div className="px-[var(--section-px)] py-16">
        {/* Desktop: 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Col 1: Logo */}
          <div className="flex flex-col gap-4">
            <a href={homeHref}>
              <img
                src={chapter.footerLogo ?? "/logos/pdc_logo_stacked.png"}
                alt={chapter.name}
                className="h-16 w-auto"
              />
            </a>
          </div>

          {/* Col 2: About Us */}
          <div className="flex flex-col gap-4">
            <span
              className="text-just-grey font-bold text-sm uppercase"
              style={{ letterSpacing: "var(--ls-label)" }}
            >
              About us
            </span>
            <ul className="flex flex-col gap-3">
              {footer.aboutLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-literally-white hover:text-just-grey transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Get Involved */}
          <div className="flex flex-col gap-4">
            <span
              className="text-just-grey font-bold text-sm uppercase"
              style={{ letterSpacing: "var(--ls-label)" }}
            >
              Check out events
            </span>
            <ul className="flex flex-col gap-3">
              {footer.involvedLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-literally-white hover:text-just-grey transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Social + copyright */}
          <div className="flex flex-col gap-4">
            <span
              className="text-just-grey font-bold text-sm uppercase"
              style={{ letterSpacing: "var(--ls-label)" }}
            >
              Follow us
            </span>
            <div className="flex items-center gap-4">
              {footer.social.linkedin && (
                <SocialIconLink
                  href={footer.social.linkedin}
                  label="LinkedIn"
                  icon={<LinkedInIcon size={20} />}
                />
              )}
              {footer.social.instagram && (
                <SocialIconLink
                  href={footer.social.instagram}
                  label="Instagram"
                  icon={<InstagramIcon size={20} />}
                />
              )}
              {footer.social.luma && (
                <SocialIconLink
                  href={footer.social.luma}
                  label="Events on Luma"
                  icon={<CalendarDays size={20} />}
                />
              )}
            </div>
            <p className="text-just-grey text-xs mt-auto pt-4">
              © {new Date().getFullYear()} Product Design Community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
