"use client";

import { useRef } from "react";
import type { Content } from "@/content";

export default function CvButton({
  cv,
  className = "",
}: {
  cv: Content["site"]["cv"];
  className?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        onClick={() => dialog.current?.showModal()}
        className={`inline-block border border-current px-4 py-2 text-sm hover:opacity-60 ${className}`}
      >
        {cv.label} ↓
      </button>

      <dialog
        ref={dialog}
        // Clicks land on the dialog itself only when they miss the panel inside it.
        onClick={(e) => e.target === dialog.current && dialog.current?.close()}
        className="bg-background text-foreground fade-in m-auto w-[min(22rem,calc(100vw-3rem))] border border-black/20 p-0 backdrop:bg-black/50 dark:border-white/25"
      >
        <div className="p-6">
          <h2 className="text-sm tracking-wide uppercase opacity-40">
            {cv.modalTitle}
          </h2>
          <ul className="mt-5 space-y-2">
            {cv.files.map((f) => (
              <li key={f.href}>
                <a
                  href={f.href}
                  download
                  onClick={() => dialog.current?.close()}
                  className="flex items-baseline justify-between gap-4 border border-black/20 px-4 py-3 hover:opacity-60 dark:border-white/25"
                >
                  <span>{f.lang}</span>
                  <span className="text-sm opacity-40">{f.note} ↓</span>
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => dialog.current?.close()}
            className="mt-5 text-sm opacity-40 hover:opacity-100"
          >
            {cv.close}
          </button>
        </div>
      </dialog>
    </>
  );
}
