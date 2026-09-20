import { pdc } from "@/content/pdc";
import { newYork } from "@/content/newyork";
import { losangeles } from "@/content/losangeles";
import { singapore } from "@/content/singapore";
import type { ChapterConfig } from "@/types/content";

export const CHAPTERS: Record<string, ChapterConfig> = {
  pdc,
  newyork: newYork,
  losangeles,
  singapore,
  // Legacy alias: keeps contact-form posts from cached /brooklyn pages resolving
  // to the right inbox. Safe to remove once the redirect has been live a while.
  brooklyn: newYork,
};

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
