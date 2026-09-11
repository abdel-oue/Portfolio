import work from "@/content/work.json";
import Section from "./Section";

export default function Work() {
  return (
    <Section id="work" heading={work.heading}>
      <ul>
        {work.projects.map((p) => (
          <li
            key={p.title}
            className="border-b border-black/10 py-6 first:pt-0 dark:border-white/15"
          >
            <a href={p.href} className="block hover:opacity-60">
              <div className="flex items-baseline justify-between gap-6">
                <h3 className="text-2xl">{p.title}</h3>
                <span className="text-sm opacity-60">{p.year}</span>
              </div>
              <p className="mt-2 text-sm opacity-60">{p.role}</p>
              <p className="mt-2 max-w-xl text-sm">{p.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
