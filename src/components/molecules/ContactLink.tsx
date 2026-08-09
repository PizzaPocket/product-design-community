"use client";

import { useState } from "react";
import { Modal } from "@/components/molecules/Modal";
import { ContactForm } from "@/components/molecules/ContactForm";
import type { ChapterConfig } from "@/types/content";

interface ContactLinkProps {
  chapter: ChapterConfig["slug"];
  chapterName: string;
  label?: string;
  title?: string;
  className?: string;
}

const SUCCESS_TITLE = "You did the thing, nice.";

export function ContactLink({
  chapter,
  chapterName,
  label = "Contact us",
  title,
  className = "text-literally-white hover:text-just-grey transition-colors text-sm text-left bg-transparent border-0 p-0 cursor-pointer",
}: ContactLinkProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setSubmitted(false);
  };

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className={className}>
        {label}
      </button>
      <Modal isOpen={isOpen} onClose={handleClose} title={submitted ? SUCCESS_TITLE : title ?? `Contact ${chapterName}`}>
        <ContactForm chapter={chapter} onSuccess={() => setSubmitted(true)} />
      </Modal>
    </>
  );
}
