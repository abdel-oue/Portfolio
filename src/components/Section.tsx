export default function Section({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="reveal scroll-mt-8 border-t border-black/15 px-6 py-28 sm:px-10 dark:border-white/20"
    >
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-[10rem_1fr]">
        <h2 className="text-sm tracking-wide uppercase opacity-40">
          {heading}
        </h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
