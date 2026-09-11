import hero from "@/content/hero.json";

export default function Hero() {
  return (
    <section className="px-6 pt-16 pb-24 sm:px-10">
      <h1 className="text-[15vw] leading-[0.9] font-normal tracking-tight">
        {hero.headline.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h1>
      <p className="mt-6 max-w-xs text-sm sm:ml-auto">{hero.tagline}</p>
    </section>
  );
}
