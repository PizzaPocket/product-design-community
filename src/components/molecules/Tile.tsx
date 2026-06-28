interface TileProps {
  name: string;
  href: string;
  image?: string;
  label?: string;
}

export function Tile({ name, href, image, label }: TileProps) {
  if (!image) {
    return (
      <a href={href || "#"} className="group no-underline block">
        <div className="relative aspect-[2/1] rounded-image overflow-hidden bg-nearly-black flex flex-col items-center justify-center gap-2 p-6 transition-colors duration-300 group-hover:bg-deep-blueklyn">
          {label && (
            <p
              className="text-just-grey group-hover:text-literally-white/70 transition-colors text-center"
              style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}
            >
              {label}
            </p>
          )}
          <h3
            className="font-bold text-cookie-dough text-center"
            style={{ fontSize: "var(--text-h3)", lineHeight: "var(--lh-h3)" }}
          >
            {name}
          </h3>
        </div>
      </a>
    );
  }

  return (
    <a href={href} className="group no-underline block">
      <div className="relative aspect-[2/1] rounded-image overflow-hidden bg-just-grey/20">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-nearly-black/70 to-transparent flex items-end p-6">
          <h3
            className="font-bold text-literally-white"
            style={{ fontSize: "var(--text-h3)", lineHeight: "var(--lh-h3)" }}
          >
            {name}
          </h3>
        </div>
      </div>
    </a>
  );
}
