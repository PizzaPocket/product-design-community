import { NextResponse } from "next/server";
import { getResendClient } from "@/lib/resend";
import { pdc } from "@/content/pdc";
import { brooklyn } from "@/content/brooklyn";
import { losangeles } from "@/content/losangeles";
import { singapore } from "@/content/singapore";
import type { ChapterConfig } from "@/types/content";

const CHAPTERS: Record<string, ChapterConfig> = { pdc, brooklyn, losangeles, singapore };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactBody {
  chapter?: string;
  name?: string;
  email?: string;
  message?: string;
  company?: string; // honeypot — real users never fill this in
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { chapter, name, email, message, company } = body;

  // Honeypot tripped — pretend success so bots don't learn to skip the field.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  const chapterConfig = chapter ? CHAPTERS[chapter] : undefined;
  if (!chapterConfig?.contactEmail) {
    return NextResponse.json({ error: "Unknown chapter" }, { status: 400 });
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const fromAddress = process.env.RESEND_FROM_EMAIL;
  if (!fromAddress) {
    return NextResponse.json({ error: "Contact form is not configured" }, { status: 500 });
  }

  try {
    const resend = getResendClient();
    const { error } = await resend.emails.send({
      from: `${chapterConfig.name} website <${fromAddress}>`,
      to: chapterConfig.contactEmail,
      replyTo: email,
      subject: `New contact form submission — ${chapterConfig.name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
