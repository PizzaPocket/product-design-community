"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
    >
      <div
        className="absolute inset-0 bg-nearly-black/60"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-md max-h-[90vh] bg-literally-white rounded-[var(--radius-card)] shadow-lg overflow-hidden">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 text-nearly-black hover:text-deep-blueklyn transition-colors"
        >
          <X size={20} />
        </button>
        <div className="overflow-y-auto max-h-[90vh] p-8">
          {title && (
            <h3
              className="font-bold text-nearly-black mb-6 pr-8"
              style={{ fontSize: "var(--text-h3)", lineHeight: "var(--lh-h3)" }}
            >
              {title}
            </h3>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
