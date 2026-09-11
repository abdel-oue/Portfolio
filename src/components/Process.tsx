import process from "@/content/process.json";
import Section from "./Section";

export default function Process() {
  return (
    <Section id="process" heading={process.heading}>
      <ol className="space-y-8">
        {process.steps.map((s, i) => (
          <li key={s.title} className="flex gap-6">
            <span className="w-8 shrink-0 text-sm opacity-60">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="max-w-xl">
              <h3 className="text-lg">{s.title}</h3>
              <p className="mt-1 text-sm opacity-60">{s.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
