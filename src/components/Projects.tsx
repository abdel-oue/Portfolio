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

function FilterRow({
  label,
  allLabel,
  options,
  value,
  onChange,
}: {
  label: string;
  allLabel: string;
  options: { value: string; label: string }[];
  value: string | null;
  onChange: (v: string | null) => void;
}) {
  if (options.length < 2) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <span className="mr-1 text-xs tracking-wide uppercase opacity-40">
        {label}
      </span>
      {[{ value: "", label: allLabel }, ...options].map((o) => {
        const selected = (o.value || null) === value;
        return (
          <button
            key={o.value}
            onClick={() => onChange(o.value || null)}
            aria-pressed={selected}
            className={`border px-3 py-1 text-xs transition-colors duration-200 ${
              selected
                ? "border-foreground bg-foreground text-background"
                : "border-black/20 opacity-60 hover:opacity-100 dark:border-white/25"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

export default function Projects({
  projects,
}: {
  projects: Content["projects"];
}) {
  const [active, setActive] = useState(projects.groups[0].id);
  const [type, setType] = useState<string | null>(null);
  const [language, setLanguage] = useState<string | null>(null);

  const group =
    projects.groups.find((g) => g.id === active) ?? projects.groups[0];

  const typeLabels = projects.filters.types as Record<string, string>;

  // Options come from the active group only, so a filter is never offered
  // for something that group cannot show.
  const byLabel = (a: { label: string }, b: { label: string }) =>
    a.label.localeCompare(b.label);
  const types = [...new Set(group.projects.map((p) => p.type))]
    .map((t) => ({ value: t, label: typeLabels[t] ?? t }))
    .sort(byLabel);
  const languages = [...new Set(group.projects.flatMap((p) => p.languages))]
    .map((l) => ({ value: l, label: l }))
    .sort(byLabel);

  const visible = group.projects.filter(
    (p) =>
      (!type || p.type === type) &&
      (!language || p.languages.includes(language)),
  );

  function selectGroup(id: string) {
    setActive(id);
    setType(null);
    setLanguage(null);
  }

  return (
    <Section id="projects" heading={projects.heading}>
      <div className="mb-8 flex justify-center">
        <div className="inline-flex border border-black/20 dark:border-white/25">
          {projects.groups.map((g) => (
            <button
              key={g.id}
              onClick={() => selectGroup(g.id)}
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

      <div className="mb-12 space-y-3">
        <FilterRow
          label={projects.filters.type}
          allLabel={projects.filters.all}
          options={types}
          value={type}
          onChange={setType}
        />
        <FilterRow
          label={projects.filters.language}
          allLabel={projects.filters.all}
          options={languages}
          value={language}
          onChange={setLanguage}
        />
      </div>

      {visible.length === 0 ? (
        <p className="text-sm opacity-60">{projects.filters.empty}</p>
      ) : (
        <ul
          key={`${group.id}-${type}-${language}`}
          className="fade-in space-y-14"
        >
          {visible.map((p) => (
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
              <ul className="mt-4 space-y-2 text-sm">
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
      )}
    </Section>
  );
}
