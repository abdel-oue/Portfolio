import type { Content } from "@/content";

export default function Hero({ hero }: { hero: Content["hero"] }) {
  return (
    <section className="px-6 pt-16 pb-16 sm:px-10">
      <h1 className="text-5xl leading-[0.95] sm:text-6xl lg:text-7xl font-normal tracking-tight">
        {hero.headline.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h1>
      <p className="mt-6 max-w-md text-sm sm:ml-auto">{hero.tagline}</p>
    </section>
  );
}
