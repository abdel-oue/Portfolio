import type { Content } from "@/content";
import Section from "./Section";

function List({
  id,
  heading,
  items,
}: {
  id: string;
  heading: string;
  items: { title: string; place?: string; period: string }[];
}) {
  return (
    <Section id={id} heading={heading}>
      <ul className="space-y-4">
        {items.map((e) => (
          <li
            key={e.title}
            className="flex flex-col gap-x-6 gap-y-1 sm:flex-row sm:justify-between"
          >
            <div>
              <p>{e.title}</p>
              {e.place && <p className="text-sm opacity-60">{e.place}</p>}
            </div>
            <span className="shrink-0 text-sm opacity-60">{e.period}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default function Education({
  education,
}: {
  education: Content["education"];
}) {
  return (
    <>
      <List
        id="education"
        heading={education.heading}
        items={education.entries}
      />
      <List
        id="certifications"
        heading={education.certificationsHeading}
        items={education.certifications}
      />
      <List
        id="activities"
        heading={education.activitiesHeading}
        items={education.activities}
      />
      <List
        id="organizations"
        heading={education.organizationsHeading}
        items={education.organizations}
      />
    </>
  );
}
