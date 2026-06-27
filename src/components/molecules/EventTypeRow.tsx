interface EventTypeRowProps {
  title: string;
  description: string;
  image: string;
  imagePosition?: "left" | "right";
}

export function EventTypeRow({
  title,
  description,
  image,
  imagePosition = "left",
}: EventTypeRowProps) {
  const textAlign = imagePosition === "right" ? "text-right" : "text-left";

  return (
    <div
      className={`flex flex-col md:flex-row md:items-center md:gap-16 md:px-[var(--section-px)] ${
        imagePosition === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image — full-bleed on mobile, 40% of content row on desktop */}
      <div className="w-full md:w-[40%] md:flex-shrink-0 overflow-hidden">
        <img
          src={image}
          alt=""
          className="w-full aspect-[2/1] object-cover rounded-image"
        />
      </div>

      {/* Text — padded on mobile, plain on desktop; alignment mirrors image anchor */}
      <div
        className={`flex flex-col gap-4 px-[var(--section-px)] py-10 md:px-0 md:py-0 md:flex-1 ${textAlign}`}
      >
        <h3
          className="font-semibold text-nearly-black"
          style={{
            fontSize: "var(--text-h3)",
            lineHeight: "var(--lh-h3)",
          }}
        >
          {title}
        </h3>
        <p
          className="text-really-dark-grey"
          style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
