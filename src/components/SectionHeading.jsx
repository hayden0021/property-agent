export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  inverted = false,
}) {
  const titleClass = inverted ? "text-white" : "text-slate-950";
  const copyClass = inverted ? "text-slate-300" : "text-slate-600";
  const eyebrowClass = inverted ? "text-accent" : "text-brand-600";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.24em] ${eyebrowClass}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`section-title ${titleClass}`}>{title}</h2>
      {description ? (
        <p className={`section-copy mt-4 ${copyClass}`}>{description}</p>
      ) : null}
    </div>
  );
}
