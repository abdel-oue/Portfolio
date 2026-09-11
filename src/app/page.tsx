import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import site from "@/content/site.json";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Work />
        <Process />
        <Contact />
      </main>
      <footer className="border-t border-black/10 px-6 py-6 text-sm opacity-60 sm:px-10 dark:border-white/15">
        © {new Date().getFullYear()} {site.name}
      </footer>
    </>
  );
}
