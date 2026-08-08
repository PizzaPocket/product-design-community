"use client";

import { useState } from "react";
import { Button } from "@/components/atoms/Button";
import { Modal } from "@/components/molecules/Modal";

export function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="secondary" onClick={() => setIsOpen(true)}>
        Open modal
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Example modal">
        <p className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>
          Any content can go here — a form, confirmation copy, whatever the trigger needs.
        </p>
      </Modal>
    </>
  );
}
