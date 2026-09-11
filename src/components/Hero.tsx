import type { Content } from "@/content";
import CvButton from "./CvButton";

export default function Hero({
  hero,
  cv,
}: {
  hero: Content["hero"];
  cv: Content["site"]["cv"];
}) {
  return (
    <section className="reveal flex flex-col items-center px-6 pt-24 pb-24 text-center sm:px-10">
      <h1 className="text-5xl leading-[0.95] font-normal tracking-tight text-balance sm:text-6xl lg:text-7xl">
        {hero.name}
      </h1>
      <p className="mt-5 text-xl text-balance opacity-80 sm:text-2xl">
        {hero.title}
      </p>
      <p className="mt-8 max-w-md text-sm text-pretty">{hero.tagline}</p>
      <CvButton cv={cv} className="mt-8" />
    </section>
  );
}
