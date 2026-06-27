interface AlternatingMediaRowProps {
  heading: string;
  body: string;
  image: string;
  imagePosition?: "left" | "right";
}

export function AlternatingMediaRow({
  heading,
  body,
  image,
  imagePosition = "left",
}: AlternatingMediaRowProps) {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-stretch md:gap-16 md:px-[var(--section-px)] md:max-w-[var(--page-max-w)] md:mx-auto ${
        imagePosition === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image — full-bleed with no radius on mobile, constrained + rounded on desktop.
          On desktop: drops aspect-ratio and fills the row's natural height instead. */}
      <div className="w-full md:w-[40%] md:flex-shrink-0 overflow-hidden md:rounded-image">
        <img
          src={image}
          alt=""
          className="w-full aspect-[2/1] object-cover md:aspect-auto md:h-full"
        />
      </div>

      {/* Text — left-aligned on mobile always; mirrors image anchor on desktop */}
      <div
        className={`flex flex-col justify-center gap-4 px-[var(--section-px)] py-10 md:px-0 md:flex-1 text-left ${
          imagePosition === "right" ? "md:text-right" : ""
        }`}
      >
        <h3
          className="font-semibold text-nearly-black"
          style={{ fontSize: "var(--text-h3)", lineHeight: "var(--lh-h3)" }}
        >
          {heading}
        </h3>
        <p
          className="text-really-dark-grey"
          style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}
