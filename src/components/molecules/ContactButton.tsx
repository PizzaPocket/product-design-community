"use client";

import { useState } from "react";
import { Button, type ButtonProps } from "@/components/atoms/Button";
import { Modal } from "@/components/molecules/Modal";
import { ContactForm } from "@/components/molecules/ContactForm";
import type { ChapterConfig } from "@/types/content";

interface ContactButtonProps {
  chapter: ChapterConfig["slug"];
  chapterName: string;
  label?: string;
  title?: string;
  variant?: ButtonProps["variant"];
}

const SUCCESS_TITLE = "You did the thing, nice.";

export function ContactButton({ chapter, chapterName, label = "Contact us", title, variant = "primary" }: ContactButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setSubmitted(false);
  };

  return (
    <>
      <Button variant={variant} onClick={() => setIsOpen(true)}>
        {label}
      </Button>
      <Modal isOpen={isOpen} onClose={handleClose} title={submitted ? SUCCESS_TITLE : title ?? `Contact ${chapterName}`}>
        <ContactForm chapter={chapter} onSuccess={() => setSubmitted(true)} />
      </Modal>
    </>
  );
}
