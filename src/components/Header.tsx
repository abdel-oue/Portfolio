import site from "@/content/site.json";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-6 px-6 py-6 text-sm sm:px-10">
      <a href="#" className="hover:opacity-60">
        {site.name}
      </a>
      <nav className="hidden gap-8 sm:flex">
        {site.nav.map((item) => (
          <a key={item.href} href={item.href} className="hover:opacity-60">
            {item.label}
          </a>
        ))}
      </nav>
      <ThemeToggle />
    </header>
  );
}
