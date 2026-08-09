"use client";

import { useState } from "react";
import { Button, type ButtonProps } from "@/components/atoms/Button";
import { Modal } from "@/components/molecules/Modal";
import { VolunteerForm } from "@/components/molecules/VolunteerForm";
import type { ChapterConfig, VolunteerCategory } from "@/types/content";

interface VolunteerButtonProps {
  chapter: ChapterConfig["slug"];
  chapterName: string;
  categories: VolunteerCategory[];
  label?: string;
  variant?: ButtonProps["variant"];
}

const SUCCESS_TITLE = "You did the thing, nice.";

export function VolunteerButton({ chapter, chapterName, categories, label = "Volunteer with us", variant = "primary" }: VolunteerButtonProps) {
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
      <Modal isOpen={isOpen} onClose={handleClose} title={submitted ? SUCCESS_TITLE : `Volunteer with ${chapterName}`}>
        <VolunteerForm chapter={chapter} categories={categories} onSuccess={() => setSubmitted(true)} />
      </Modal>
    </>
  );
}
