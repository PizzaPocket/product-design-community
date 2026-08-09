"use client";

import { useState } from "react";
import { Modal } from "@/components/molecules/Modal";
import { VolunteerForm } from "@/components/molecules/VolunteerForm";
import type { ChapterConfig, VolunteerCategory } from "@/types/content";

interface VolunteerLinkProps {
  chapter: ChapterConfig["slug"];
  chapterName: string;
  categories: VolunteerCategory[];
  label?: string;
  className?: string;
}

const SUCCESS_TITLE = "You did the thing, nice.";

export function VolunteerLink({
  chapter,
  chapterName,
  categories,
  label = "Volunteer",
  className = "text-literally-white hover:text-just-grey transition-colors text-sm text-left bg-transparent border-0 p-0 cursor-pointer",
}: VolunteerLinkProps) {
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
      <Modal isOpen={isOpen} onClose={handleClose} title={submitted ? SUCCESS_TITLE : `Volunteer with ${chapterName}`}>
        <VolunteerForm chapter={chapter} categories={categories} onSuccess={() => setSubmitted(true)} />
      </Modal>
    </>
  );
}
