import contact from "@/content/contact.json";
import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact" heading={contact.heading}>
      <p className="max-w-xl text-lg">{contact.text}</p>
      <a
        href={`mailto:${contact.email}`}
        className="mt-6 inline-block text-2xl underline underline-offset-4 hover:opacity-60"
      >
        {contact.email}
      </a>
      <ul className="mt-10 flex gap-6 text-sm">
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
