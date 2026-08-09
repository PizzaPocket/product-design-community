"use client";

import { useState } from "react";
import { Input } from "@/components/atoms/Input";
import { Button } from "@/components/atoms/Button";
import type { ChapterConfig } from "@/types/content";

interface ContactFormProps {
  chapter: ChapterConfig["slug"];
  onSuccess?: () => void;
}

type Status = "idle" | "submitting" | "success" | "error";

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const labelStyle = { fontSize: "var(--text-label)", lineHeight: "var(--lh-label)" };
const bodyStyle = { fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" };

function RequiredMark() {
  return (
    <span className="text-singapore-sling" aria-hidden="true">
      {" "}
      *
    </span>
  );
}

export function ContactForm({ chapter, onSuccess }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  if (status === "success") {
    return (
      <p className="text-really-dark-grey" style={bodyStyle}>
        Thanks for reaching out. Please give our volunteers time to get back to you soon.
      </p>
    );
  }

  const validate = (): FieldErrors => {
    const nextErrors: FieldErrors = {};
    if (!name.trim()) nextErrors.name = "Name is required";
    if (!email.trim()) nextErrors.email = "Email is required";
    else if (!EMAIL_RE.test(email)) nextErrors.email = "Enter a valid email address";
    if (!message.trim()) nextErrors.message = "Message is required";
    return nextErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chapter, name, email, message, company }),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      onSuccess?.();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-name" className="font-bold text-nearly-black" style={labelStyle}>
          Name<RequiredMark />
        </label>
        <Input id="contact-name" name="name" required error={!!errors.name} value={name} onChange={setName} />
        {errors.name && <p className="text-singapore-sling" style={bodyStyle}>{errors.name}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-email" className="font-bold text-nearly-black" style={labelStyle}>
          Email<RequiredMark />
        </label>
        <Input id="contact-email" name="email" type="email" required error={!!errors.email} value={email} onChange={setEmail} />
        {errors.email && <p className="text-singapore-sling" style={bodyStyle}>{errors.email}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="font-bold text-nearly-black" style={labelStyle}>
          Message<RequiredMark />
        </label>
        <Input id="contact-message" name="message" multiline required error={!!errors.message} value={message} onChange={setMessage} />
        {errors.message && <p className="text-singapore-sling" style={bodyStyle}>{errors.message}</p>}
      </div>

      {/* Honeypot — hidden from sighted users, left open for bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      {status === "error" && (
        <p className="text-singapore-sling" style={bodyStyle}>Something went wrong. Please try again.</p>
      )}

      <Button variant="primary" disabled={status === "submitting"} className="w-full justify-center mt-2">
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
