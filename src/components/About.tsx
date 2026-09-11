import type { Content } from "@/content";
import Section from "./Section";

export default function About({ about }: { about: Content["about"] }) {
  return (
    <Section id="about" heading={about.heading}>
      <div className="max-w-3xl space-y-4 text-lg">
        {about.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <dl className="mt-10 space-y-2 text-sm">
        {about.details.map((d) => (
          <div
            key={d.label}
            className="flex flex-col gap-1 sm:flex-row sm:gap-6"
          >
            <dt className="w-28 shrink-0 opacity-60">{d.label}</dt>
            <dd className="max-w-3xl">{d.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
