"use client";

import { useState } from "react";
import { Tile } from "@/components/molecules/Tile";
import { Modal } from "@/components/molecules/Modal";
import { ContactForm } from "@/components/molecules/ContactForm";
import type { ChapterConfig } from "@/types/content";

interface ContactTileProps {
  chapter: ChapterConfig["slug"];
  chapterName: string;
  name: string;
  label?: string;
  title?: string;
  intro?: string;
}

export function ContactTile({ chapter, chapterName, name, label, title, intro }: ContactTileProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Tile name={name} label={label} onClick={() => setIsOpen(true)} />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={title ?? `Contact ${chapterName}`}>
        {intro && (
          <p
            className="text-really-dark-grey mb-6"
            style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}
          >
            {intro}
          </p>
        )}
        <ContactForm chapter={chapter} />
      </Modal>
    </>
  );
}
