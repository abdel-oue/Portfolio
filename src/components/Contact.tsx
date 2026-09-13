import type { Content } from "@/content";
import Section from "./Section";
import CvButton from "./CvButton";

export default function Contact({
  contact,
  cv,
}: {
  contact: Content["contact"];
  cv: Content["site"]["cv"];
}) {
  return (
    <Section id="contact" heading={contact.heading}>
      <p className="text-lg">{contact.text}</p>
      <a
        href={`mailto:${contact.email}`}
        className="mt-6 inline-block text-xl underline underline-offset-4 hover:opacity-60 sm:text-2xl"
      >
        {contact.email}
      </a>
      <div className="mt-8">
        <CvButton cv={cv} />
      </div>
      <ul className="mt-10 flex flex-wrap gap-6 text-sm">
        {contact.links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="hover:opacity-60">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
