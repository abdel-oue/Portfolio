import type { Content } from "@/content";
import Section from "./Section";

export default function Experience({
  experience,
}: {
  experience: Content["experience"];
}) {
  return (
    <Section id="experience" heading={experience.heading}>
      <ul className="space-y-10">
        {experience.roles.map((r) => (
          <li key={r.title + r.company}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-xl">{r.title}</h3>
              <span className="text-sm opacity-60">{r.period}</span>
            </div>
            <p className="mt-1 text-sm opacity-60">
              {r.company} · {r.location}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {r.points.map((point) => (
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
