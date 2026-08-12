import Image from "next/image";

/**
 * Every photo on this site is the restaurant's own. The wrapper always carries
 * its own aspect ratio so a `fill` image can never collapse to zero height on
 * a phone.
 */
export default function Photo({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority = false,
}: {
  src: string;
  alt: string;
  /** Must include an aspect-ratio or height utility. */
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden bg-carbon-soft ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
