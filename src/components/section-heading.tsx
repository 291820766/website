type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent-deep)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-serif text-4xl leading-tight text-[var(--navy)] md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-[var(--muted)] md:text-lg">
        {subtitle}
      </p>
    </div>
  );
}
