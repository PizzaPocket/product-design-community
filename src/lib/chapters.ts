import { pdc } from "@/content/pdc";
import { brooklyn } from "@/content/brooklyn";
import { losangeles } from "@/content/losangeles";
import { singapore } from "@/content/singapore";
import type { ChapterConfig } from "@/types/content";

export const CHAPTERS: Record<string, ChapterConfig> = { pdc, brooklyn, losangeles, singapore };

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
