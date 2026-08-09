import React from "react";

export interface InputProps {
  id: string;
  name: string;
  type?: string;
  multiline?: boolean;
  rows?: number;
  required?: boolean;
  error?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const fieldStyles =
  "w-full px-4 py-2.5 bg-literally-white border rounded-[var(--radius-button)] text-nearly-black placeholder:text-just-grey focus:outline-none transition-colors";

export function Input({
  id,
  name,
  type = "text",
  multiline = false,
  rows = 5,
  required,
  error,
  placeholder,
  value,
  onChange,
  className = "",
}: InputProps) {
  const borderStyles = error
    ? "border-singapore-sling focus:border-singapore-sling"
    : "border-just-grey focus:border-deep-blueklyn";

  if (multiline) {
    return (
      <textarea
        id={id}
        name={name}
        rows={rows}
        required={required}
        aria-invalid={error || undefined}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${fieldStyles} ${borderStyles} resize-none ${className}`}
        style={{ fontSize: "var(--text-input)" }}
      />
    );
  }

  return (
    <input
      id={id}
      name={name}
      type={type}
      required={required}
      aria-invalid={error || undefined}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`${fieldStyles} ${borderStyles} ${className}`}
      style={{ fontSize: "var(--text-input)" }}
    />
  );
}
