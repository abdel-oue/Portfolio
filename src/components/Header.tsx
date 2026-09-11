import Link from "next/link";
import type { Content, Locale } from "@/content";
import { locales } from "@/content";
import ThemeToggle from "./ThemeToggle";

export default function Header({
  lang,
  site,
}: {
  lang: Locale;
  site: Content["site"];
}) {
  return (
    <header className="flex items-center justify-between gap-6 px-6 py-6 text-sm sm:px-10">
      <a href="#" className="hover:opacity-60">
        {site.name}
      </a>
      <nav className="hidden gap-8 lg:flex">
        {site.nav.map((item) => (
          <a key={item.href} href={item.href} className="hover:opacity-60">
            {item.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        {locales.map((l) => (
          <Link
            key={l}
            href={`/${l}`}
            className={l === lang ? "" : "opacity-40 hover:opacity-100"}
          >
            {l.toUpperCase()}
          </Link>
        ))}
        <ThemeToggle />
      </div>
    </header>
  );
}
