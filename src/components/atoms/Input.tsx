import React from "react";

export interface InputProps {
  id: string;
  name: string;
  type?: string;
  multiline?: boolean;
  rows?: number;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const fieldStyles =
  "w-full px-4 py-2.5 bg-literally-white border border-just-grey rounded-[var(--radius-button)] text-nearly-black placeholder:text-just-grey focus:outline-none focus:border-deep-blueklyn transition-colors";

export function Input({
  id,
  name,
  type = "text",
  multiline = false,
  rows = 5,
  required,
  placeholder,
  value,
  onChange,
  className = "",
}: InputProps) {
  if (multiline) {
    return (
      <textarea
        id={id}
        name={name}
        rows={rows}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${fieldStyles} resize-none ${className}`}
      />
    );
  }

  return (
    <input
      id={id}
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`${fieldStyles} ${className}`}
    />
  );
}
