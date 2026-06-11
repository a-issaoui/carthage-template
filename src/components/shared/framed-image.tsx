import { SmartImage } from "@/components/shared/smart-image";
import { cn } from "@/lib/utils";

/* Gallery-framed imagery — the site's signature treatment.
   Radius-based arch (shadows render, unlike clip-path), an inner mat ring
   like a passe-partout, and an offset echo outline behind — the double-
   drawn arch of a medina doorway. */

const shapes = {
  arch: "rounded-[999px_999px_14px_14px/420px_420px_14px_14px]",
  rect: "rounded-[3px]",
} as const;

export function FramedImage({
  src,
  alt,
  sizes,
  className,
  shape = "arch",
  echo = true,
  priority = false,
  imgClassName,
}: {
  src: string;
  alt: string;
  sizes?: string;
  /** Aspect/size classes for the whole frame, e.g. "aspect-[3/4] w-full". */
  className?: string;
  shape?: keyof typeof shapes;
  /** Offset outline behind the image — disable on very small thumbs. */
  echo?: boolean;
  priority?: boolean;
  imgClassName?: string;
}) {
  const radius = shapes[shape];
  return (
    <div className={cn("relative", className)}>
      {echo && (
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 translate-x-2.5 translate-y-2.5 border border-copper/40",
            radius
          )}
        />
      )}
      <div className={cn("relative h-full w-full overflow-hidden shadow-[var(--shadow-plate-lg)]", radius)}>
        <SmartImage src={src} alt={alt} sizes={sizes} priority={priority} className={imgClassName} />
        {/* Passe-partout: a quiet ivory hairline floating inside the frame */}
        <div
          aria-hidden
          className={cn("pointer-events-none absolute inset-2 border border-ivory/45", radius)}
        />
      </div>
    </div>
  );
}
