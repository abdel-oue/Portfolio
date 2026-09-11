import type { Content } from "@/content";
import Section from "./Section";

export default function Work({ work }: { work: Content["work"] }) {
  return (
    <Section id="work" heading={work.heading}>
      <ul className="space-y-10">
        {work.projects.map((p) => (
          <li key={p.title}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-2xl">{p.title}</h3>
              <span className="text-sm opacity-60">{p.period}</span>
            </div>
            <p className="mt-1 text-sm opacity-60">{p.role}</p>
            <p className="mt-1 text-sm opacity-60">{p.stack}</p>
            {p.href && (
              <a
                href={p.href}
                className="mt-2 inline-block text-sm underline underline-offset-4 hover:opacity-60"
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
