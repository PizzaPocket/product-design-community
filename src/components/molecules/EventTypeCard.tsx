interface EventTypeCardProps {
  title: string;
  description: string;
  image: string;
}

export function EventTypeCard({ title, description, image }: EventTypeCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="aspect-[4/3] rounded-[var(--radius-card)] overflow-hidden bg-just-grey/20">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3
          className="font-bold text-nearly-black"
          style={{
            fontSize: "var(--text-h3)",
            lineHeight: "var(--lh-h3)",
          }}
        >
          {title}
        </h3>
        <p
          className="text-nearly-black/80"
          style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
