import type { Content } from "@/content";
import Section from "./Section";

export default function Skills({ skills }: { skills: Content["skills"] }) {
  return (
    <Section id="skills" heading={skills.heading}>
      <p className="mb-6 text-sm opacity-40">{skills.legend}</p>
      <dl className="space-y-4 text-sm">
        {skills.groups.map((g) => (
          <div
            key={g.label}
            className="flex flex-col gap-1 sm:flex-row sm:gap-6"
          >
            <dt className="w-36 shrink-0 opacity-60">{g.label}</dt>
            <dd className="max-w-4xl">
              {g.strong}
              {g.working && <span className="opacity-40"> · {g.working}</span>}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
