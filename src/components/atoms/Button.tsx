import React from "react";
import { ExternalLink } from "lucide-react";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary" | "primary-alt";
  uppercase?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const variantStyles: Record<string, string> = {
  primary:
    "px-4 py-2.5 bg-nearly-black text-literally-white hover:bg-deep-blueklyn disabled:bg-just-grey disabled:cursor-not-allowed",
  secondary:
    "px-4 py-2.5 border border-nearly-black hover:border-deep-blueklyn hover:text-deep-blueklyn disabled:border-just-grey disabled:text-just-grey disabled:cursor-not-allowed",
  tertiary:
    "text-nearly-black hover:text-deep-blueklyn disabled:text-just-grey disabled:cursor-not-allowed",
  "primary-alt":
    "px-4 py-2.5 bg-egg-custard-tart text-nearly-black hover:bg-deep-blueklyn hover:text-literally-white disabled:bg-just-grey disabled:text-literally-white disabled:cursor-not-allowed",
};

const base =
  "inline-flex items-center gap-2 font-bold text-base rounded-[var(--radius-button)] transition-colors duration-150 cursor-pointer";

export function Button({
  variant = "primary",
  uppercase = true,
  leftIcon,
  rightIcon,
  disabled,
  href,
  target,
  rel,
  className = "",
  onClick,
  children,
}: ButtonProps) {
  const classes = [
    base,
    variantStyles[variant],
    uppercase ? "uppercase tracking-[1.28px]" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const trailingIcon = rightIcon ?? (target === "_blank" ? <ExternalLink size={14} strokeWidth={2.5} aria-hidden="true" /> : undefined);

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
        className={classes}
        aria-disabled={disabled}
      >
        {leftIcon}
        {children}
        {trailingIcon}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {leftIcon}
      {children}
      {trailingIcon}
    </button>
  );
}
