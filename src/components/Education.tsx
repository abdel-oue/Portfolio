import type { Content } from "@/content";
import Section from "./Section";

function Group({
  heading,
  items,
}: {
  heading: string;
  items: { title: string; place?: string; period: string }[];
}) {
  return (
    <>
      <h3 className="mt-10 mb-4 text-sm opacity-60 first:mt-0">{heading}</h3>
      <ul className="space-y-4">
        {items.map((e) => (
          <li
            key={e.title}
            className="flex flex-col gap-x-6 gap-y-1 sm:flex-row sm:justify-between"
          >
            <div className="max-w-4xl">
              <p>{e.title}</p>
              {e.place && <p className="text-sm opacity-60">{e.place}</p>}
            </div>
            <span className="shrink-0 text-sm opacity-60">{e.period}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function Education({
  education,
}: {
  education: Content["education"];
}) {
  return (
    <Section id="education" heading={education.heading}>
      <Group heading={education.entriesHeading} items={education.entries} />
      <Group
        heading={education.certificationsHeading}
        items={education.certifications}
      />
      <Group
        heading={education.activitiesHeading}
        items={education.activities}
      />
    </Section>
  );
}
