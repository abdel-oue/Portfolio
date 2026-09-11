import type { Content } from "@/content";
import Section from "./Section";

export default function Contact({ contact }: { contact: Content["contact"] }) {
  return (
    <Section id="contact" heading={contact.heading}>
      <p className="max-w-4xl text-lg">{contact.text}</p>
      <a
        href={`mailto:${contact.email}`}
        className="mt-6 inline-block text-xl underline underline-offset-4 hover:opacity-60 sm:text-2xl"
      >
        {contact.email}
      </a>
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
