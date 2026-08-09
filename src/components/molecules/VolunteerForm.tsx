"use client";

import { useState } from "react";
import { Input } from "@/components/atoms/Input";
import { Button } from "@/components/atoms/Button";
import { CheckboxField } from "@/components/molecules/CheckboxField";
import type { ChapterConfig, VolunteerCategory } from "@/types/content";

interface VolunteerFormProps {
  chapter: ChapterConfig["slug"];
  categories: VolunteerCategory[];
  onSuccess?: () => void;
}

type Status = "idle" | "submitting" | "success" | "error";

interface FieldErrors {
  name?: string;
  email?: string;
  categories?: string;
  commitmentOther?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const COMMITMENT_OPTIONS = [
  { id: "short", label: "Short-term", description: "Up to 3 months" },
  { id: "medium", label: "Medium-term", description: "3–9 months" },
  { id: "long", label: "Long-term", description: "9+ months, or ongoing" },
  { id: "other", label: "Other", description: undefined },
] as const;

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

export function VolunteerForm({ chapter, categories, onSuccess }: VolunteerFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [otherHelp, setOtherHelp] = useState("");
  const [commitmentPeriod, setCommitmentPeriod] = useState<string>("");
  const [commitmentOther, setCommitmentOther] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  if (status === "success") {
    return (
      <p className="text-really-dark-grey" style={bodyStyle}>
        Thanks for signing up to volunteer! We&apos;ll be in touch about next steps.
      </p>
    );
  }

  const toggleCategory = (id: string, checked: boolean) => {
    setSelectedCategories((prev) => (checked ? [...prev, id] : prev.filter((c) => c !== id)));
  };

  const validate = (): FieldErrors => {
    const nextErrors: FieldErrors = {};
    if (!name.trim()) nextErrors.name = "Name is required";
    if (!email.trim()) nextErrors.email = "Email is required";
    else if (!EMAIL_RE.test(email)) nextErrors.email = "Enter a valid email address";
    if (selectedCategories.length === 0) nextErrors.categories = "Select at least one way to help";
    if (!commitmentPeriod) nextErrors.commitmentOther = "Select a commitment period";
    else if (commitmentPeriod === "other" && !commitmentOther.trim())
      nextErrors.commitmentOther = "Let us know your expected commitment";
    return nextErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chapter,
          name,
          email,
          phone,
          categories: selectedCategories.map((id) => categories.find((c) => c.id === id)?.label ?? id),
          otherHelp,
          commitmentPeriod: COMMITMENT_OPTIONS.find((o) => o.id === commitmentPeriod)?.label ?? commitmentPeriod,
          commitmentOther,
          company,
        }),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      onSuccess?.();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="volunteer-name" className="font-bold text-nearly-black" style={labelStyle}>
            Name<RequiredMark />
          </label>
          <Input id="volunteer-name" name="name" required error={!!errors.name} value={name} onChange={setName} />
          {errors.name && <p className="text-singapore-sling" style={bodyStyle}>{errors.name}</p>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="volunteer-email" className="font-bold text-nearly-black" style={labelStyle}>
            Email<RequiredMark />
          </label>
          <Input id="volunteer-email" name="email" type="email" required error={!!errors.email} value={email} onChange={setEmail} />
          {errors.email && <p className="text-singapore-sling" style={bodyStyle}>{errors.email}</p>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="volunteer-phone" className="font-bold text-nearly-black" style={labelStyle}>
            Phone
          </label>
          <Input id="volunteer-phone" name="phone" type="tel" value={phone} onChange={setPhone} placeholder="Optional" />
          <p className="text-just-grey" style={bodyStyle}>Add this if you&apos;d like to be added to our volunteer WhatsApp group.</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="font-bold text-nearly-black" style={labelStyle}>
          How would you like to help?<RequiredMark />
        </p>
        <div className="flex flex-col gap-3">
          {categories.map((category) => (
            <CheckboxField
              key={category.id}
              id={`volunteer-category-${category.id}`}
              name="categories"
              checked={selectedCategories.includes(category.id)}
              onChange={(checked) => toggleCategory(category.id, checked)}
              label={category.label}
              description={category.description}
            />
          ))}
        </div>
        {errors.categories && <p className="text-singapore-sling" style={bodyStyle}>{errors.categories}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="volunteer-other-help" className="font-bold text-nearly-black" style={labelStyle}>
          Anything else you&apos;d like to help with?
        </label>
        <Input id="volunteer-other-help" name="otherHelp" multiline rows={3} value={otherHelp} onChange={setOtherHelp} />
      </div>

      <div className="flex flex-col gap-3">
        <p className="font-bold text-nearly-black" style={labelStyle}>
          Commitment period<RequiredMark />
        </p>
        <div className="flex flex-col gap-3">
          {COMMITMENT_OPTIONS.map((option) => (
            <CheckboxField
              key={option.id}
              id={`volunteer-commitment-${option.id}`}
              name="commitmentPeriod"
              type="radio"
              value={option.id}
              checked={commitmentPeriod === option.id}
              onChange={(checked) => checked && setCommitmentPeriod(option.id)}
              label={option.label}
              description={option.description}
            />
          ))}
        </div>
        {commitmentPeriod === "other" && (
          <Input
            id="volunteer-commitment-other-detail"
            name="commitmentOther"
            placeholder="e.g. through the end of the year"
            error={!!errors.commitmentOther}
            value={commitmentOther}
            onChange={setCommitmentOther}
          />
        )}
        {errors.commitmentOther && <p className="text-singapore-sling" style={bodyStyle}>{errors.commitmentOther}</p>}
      </div>

      {/* Honeypot — hidden from sighted users, left open for bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="volunteer-company">Company</label>
        <input
          id="volunteer-company"
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

      <Button variant="primary" disabled={status === "submitting"} className="w-full justify-center">
        {status === "submitting" ? "Sending…" : "Sign up to volunteer"}
      </Button>
    </form>
  );
}
