import type { Content } from "@/content";
import Section from "./Section";

export default function Skills({ skills }: { skills: Content["skills"] }) {
  return (
    <Section id="skills" heading={skills.heading}>
      <dl className="space-y-4 text-sm">
        {skills.groups.map((g) => (
          <div
            key={g.label}
            className="flex flex-col gap-1 sm:flex-row sm:gap-6"
          >
            <dt className="w-36 shrink-0 opacity-60">{g.label}</dt>
            <dd className="max-w-4xl">{g.items}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
