"use client";

import { useState } from "react";
import { Input } from "@/components/atoms/Input";
import { Button } from "@/components/atoms/Button";
import type { ChapterConfig } from "@/types/content";

interface ContactFormProps {
  chapter: ChapterConfig["slug"];
}

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ chapter }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");

  if (status === "success") {
    return (
      <p className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>
        Thanks for reaching out. We&apos;ll get back to you soon.
      </p>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chapter, name, email, message, company }),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-name" className="text-sm font-bold text-nearly-black">
          Name
        </label>
        <Input id="contact-name" name="name" required value={name} onChange={setName} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-email" className="text-sm font-bold text-nearly-black">
          Email
        </label>
        <Input id="contact-email" name="email" type="email" required value={email} onChange={setEmail} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-sm font-bold text-nearly-black">
          Message
        </label>
        <Input id="contact-message" name="message" multiline required value={message} onChange={setMessage} />
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
        <p className="text-singapore-sling text-sm">Something went wrong. Please try again.</p>
      )}

      <Button variant="primary" disabled={status === "submitting"} className="w-full justify-center mt-2">
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
