"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { SidebarNav } from "./SidebarNav";

export function StyleGuideShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-literally-white text-nearly-black">

      {/* ── Top bar ── */}
      <header className="fixed top-0 inset-x-0 z-50 h-14 bg-cookie-dough border-b border-just-grey/20 flex items-center gap-4 px-6">
        <button
          onClick={() => setOpen(true)}
          className="text-just-grey hover:text-nearly-black transition-colors flex-shrink-0"
          aria-label="Open navigation"
        >
          <Menu size={18} strokeWidth={2} />
        </button>
        <div className="flex items-center gap-2">
          <Link href="/" className="text-just-grey hover:text-nearly-black transition-colors" style={{ fontSize: "var(--text-b2)" }}>← PDC</Link>
          <span className="text-just-grey" aria-hidden="true">/</span>
          <span className="font-bold text-nearly-black" style={{ fontSize: "var(--text-b2)" }}>Style Guide</span>
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
        className={`fixed left-0 top-0 h-screen w-72 z-50 bg-cookie-dough border-r border-just-grey/20 overflow-y-auto flex flex-col gap-10 py-10 px-8 transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="font-bold text-nearly-black" style={{ fontSize: "var(--text-h3)", lineHeight: "var(--lh-h3)" }}>
            Style Guide
          </span>
          <button
            onClick={() => setOpen(false)}
            className="text-just-grey hover:text-nearly-black transition-colors"
            aria-label="Close navigation"
          >
            <X size={18} strokeWidth={2} />
          </button>
        </div>
        <SidebarNav onNavigate={() => setOpen(false)} />
      </aside>

      {/* ── Main content ── */}
      <main className="pt-14">
        {children}
      </main>
    </div>
  );
}
