"use client";

import { useState } from "react";
import { PanelLeft, PanelLeftClose, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { SidebarNav } from "./SidebarNav";

export function StyleGuideShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-literally-white text-nearly-black">

      {/* ── Top bar ── */}
      <header className="fixed top-0 inset-x-0 z-50 h-[var(--nav-height)] bg-literally-white shadow-[0_1px_0_0_#e5e5e5] flex items-center gap-4 px-6 md:px-10">
        <button
          onClick={() => setOpen(true)}
          className="text-really-dark-grey hover:text-deep-blueklyn transition-colors flex-shrink-0"
          aria-label="Open navigation"
        >
          <PanelLeft size={20} strokeWidth={2} />
        </button>
        <div className="flex items-center gap-3">
          <Link href="/" className="font-bold uppercase text-really-dark-grey hover:text-deep-blueklyn transition-colors flex items-center gap-1" style={{ fontSize: "var(--text-label)", letterSpacing: "var(--ls-label)" }}>
            <ChevronLeft size={14} strokeWidth={2.5} />PDC
          </Link>
          <span className="text-just-grey" aria-hidden="true">/</span>
          <span className="font-bold uppercase text-really-dark-grey" style={{ fontSize: "var(--text-label)", letterSpacing: "var(--ls-label)" }}>Style Guide</span>
        </div>
      </header>

      {/* ── Backdrop ── */}
      <div
        className={`fixed inset-0 z-40 bg-nearly-black/20 transition-opacity duration-200 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* ── Sidebar panel ── */}
      <aside
        className={`fixed left-0 top-0 h-screen w-72 z-50 bg-cookie-dough border-r border-just-grey/20 flex flex-col transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button — same height and x-position as the open button in the header */}
        <div className="h-[var(--nav-height)] flex items-center px-6 md:px-10 flex-shrink-0">
          <button
            onClick={() => setOpen(false)}
            className="text-really-dark-grey hover:text-deep-blueklyn transition-colors"
            aria-label="Close navigation"
          >
            <PanelLeftClose size={20} strokeWidth={2} />
          </button>
        </div>
        <div className="overflow-y-auto px-8 pb-10">
          <SidebarNav onNavigate={() => setOpen(false)} />
        </div>
      </aside>

      {/* ── Main content ── */}
      <main className="pt-[var(--nav-height)]">
        {children}
      </main>
    </div>
  );
}
