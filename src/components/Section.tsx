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
      className="border-t border-black/10 px-6 py-20 sm:px-10 dark:border-white/15"
    >
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-[10rem_1fr]">
        <h2 className="text-sm opacity-60">{heading}</h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
