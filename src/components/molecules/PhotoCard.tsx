interface PhotoCardProps {
  name: string;
  href: string;
  image: string;
}

export function PhotoCard({ name, href, image }: PhotoCardProps) {
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
