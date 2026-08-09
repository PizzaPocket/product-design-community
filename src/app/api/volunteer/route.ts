import { NextResponse } from "next/server";
import { getResendClient } from "@/lib/resend";
import { CHAPTERS, EMAIL_RE } from "@/lib/chapters";

interface VolunteerBody {
  chapter?: string;
  name?: string;
  email?: string;
  phone?: string;
  categories?: string[];
  otherHelp?: string;
  commitmentPeriod?: string;
  commitmentOther?: string;
  company?: string; // honeypot — real users never fill this in
}

export async function POST(request: Request) {
  let body: VolunteerBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { chapter, name, email, phone, categories, otherHelp, commitmentPeriod, commitmentOther, company } = body;

  // Honeypot tripped — pretend success so bots don't learn to skip the field.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  const chapterConfig = chapter ? CHAPTERS[chapter] : undefined;
  if (!chapterConfig?.contactEmail) {
    return NextResponse.json({ error: "Unknown chapter" }, { status: 400 });
  }

  if (!name?.trim() || !email?.trim() || !categories?.length || !commitmentPeriod?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const fromAddress = process.env.RESEND_FROM_EMAIL;
  if (!fromAddress) {
    return NextResponse.json({ error: "Volunteer form is not configured" }, { status: 500 });
  }

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone?.trim() ? `Phone: ${phone}` : null,
    "",
    `Interested in: ${categories.join(", ")}`,
    otherHelp?.trim() ? `Other ways they'd like to help: ${otherHelp}` : null,
    "",
    `Commitment period: ${commitmentPeriod}${commitmentOther?.trim() ? ` (${commitmentOther})` : ""}`,
  ].filter((line) => line !== null);

  try {
    const resend = getResendClient();
    const { error } = await resend.emails.send({
      from: `${chapterConfig.name} website <${fromAddress}>`,
      to: chapterConfig.contactEmail,
      replyTo: email,
      subject: `New volunteer sign-up — ${chapterConfig.name}`,
      text: lines.join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Volunteer form error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
