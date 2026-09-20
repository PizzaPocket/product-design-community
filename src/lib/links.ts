/**
 * A link is external if it points off-site. External links open in a new tab
 * and carry a trailing arrow so the jump is signalled before the click.
 * Shared by NavLink and MobileMenu so the two navs can't drift apart.
 */
export function isExternalHref(href: string): boolean {
  return href.startsWith("http");
}
