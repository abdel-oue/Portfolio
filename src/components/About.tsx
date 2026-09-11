import about from "@/content/about.json";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" heading={about.heading}>
      <div className="max-w-xl space-y-4 text-lg">
        {about.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <dl className="mt-10 space-y-2 text-sm">
        {about.details.map((d) => (
          <div key={d.label} className="flex gap-6">
            <dt className="w-24 shrink-0 opacity-60">{d.label}</dt>
            <dd>{d.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
