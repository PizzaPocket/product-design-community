interface BrandLogoProps {
  src: string;
  alt: string;
  href?: string;
}

export function BrandLogo({ src, alt, href }: BrandLogoProps) {
  const img = (
    <div className="h-10 w-[140px] flex items-center justify-center">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-200"
      />
    </div>
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
