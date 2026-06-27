interface HeroSectionProps {
  heading?: string;
  image: string;
  textAlign?: "center" | "left";
  scrim?: boolean;
  compact?: boolean;
}

export function HeroSection({
  heading,
  image,
  textAlign = "left",
  scrim = true,
  compact = false,
}: HeroSectionProps) {
  const isCenter = textAlign === "center";

  return (
    <section className={`relative ${compact ? "min-h-[360px]" : "min-h-[520px]"}`}>
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        aria-hidden="true"
      />

      {scrim && (
        isCenter
          ? <div className="absolute inset-0 bg-nearly-black/55" />
          : <div className="absolute inset-0 bg-gradient-to-r from-nearly-black/75 via-nearly-black/30 via-60% to-transparent" />
      )}

      {heading && (
        <div className={`absolute inset-0 z-10 flex items-center${isCenter ? " justify-center" : ""}`}>
          <div className="w-full px-[var(--section-px)]">
            <h1
              className={`font-bold text-cookie-dough${isCenter ? " text-center" : ""}`}
              style={{ fontSize: "var(--text-h1)", lineHeight: "var(--lh-h1)" }}
            >
              {heading}
            </h1>
          </div>
        </div>
      )}
    </section>
  );
}
