"use client";

import { useState } from "react";
import type { Content } from "@/content";
import Section from "./Section";

function LinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[0.7em] w-[0.7em]"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export default function Projects({
  projects,
}: {
  projects: Content["projects"];
}) {
  const [active, setActive] = useState(projects.groups[0].id);
  const group =
    projects.groups.find((g) => g.id === active) ?? projects.groups[0];

  return (
    <Section id="projects" heading={projects.heading}>
      <div className="mb-12 flex justify-center">
        <div className="inline-flex border border-black/20 dark:border-white/25">
          {projects.groups.map((g) => (
            <button
              key={g.id}
              onClick={() => setActive(g.id)}
              className={`px-5 py-2 text-sm transition-colors duration-200 ${
                g.id === active
                  ? "bg-foreground text-background"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      <ul key={group.id} className="fade-in space-y-14">
        {group.projects.map((p) => (
          <li key={p.title}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="flex items-center gap-2 text-2xl">
                {p.title}
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} (opens in a new tab)`}
                    className="opacity-40 transition-opacity hover:opacity-100"
                  >
                    <LinkIcon />
                  </a>
                )}
              </h3>
              {p.period && (
                <span className="text-sm opacity-60">{p.period}</span>
              )}
            </div>
            {p.subtitle && <p className="mt-1 text-lg">{p.subtitle}</p>}
            <p className="mt-2 text-sm opacity-60">{p.role}</p>
            <p className="mt-1 text-sm opacity-60">{p.stack}</p>
            {p.link && (
              <a
                href={p.href ?? undefined}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm underline underline-offset-4 transition-opacity hover:opacity-60"
              >
                {p.link}
              </a>
            )}
            <ul className="mt-4 max-w-4xl space-y-2 text-sm">
              {p.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="opacity-40">—</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
