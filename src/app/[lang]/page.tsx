import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { content, locales, type Locale } from "@/content";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const lang = (await params).lang as Locale;
  if (!locales.includes(lang)) notFound();
  const c = content[lang];

  return (
    <>
      <Header lang={lang} site={c.site} />
      <main className="flex-1">
        <Hero hero={c.hero} />
        <About about={c.about} />
        <Work work={c.work} />
        <Experience experience={c.experience} />
        <Skills skills={c.skills} />
        <Education education={c.education} />
        <Contact contact={c.contact} />
      </main>
      <footer className="border-t border-black/10 px-6 py-6 text-sm opacity-60 sm:px-10 dark:border-white/15">
        © {new Date().getFullYear()} {c.site.name}
      </footer>
    </>
  );
}
