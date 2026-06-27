interface PartnerLogoProps {
  src: string;
  alt: string;
  href?: string;
}

export function PartnerLogo({ src, alt, href }: PartnerLogoProps) {
  const img = (
    <img
      src={src}
      alt={alt}
      className="h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-200"
    />
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {img}
      </a>
    );
  }

  return img;
}
