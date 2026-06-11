import Image from "next/image";
import { cn } from "@/lib/utils";

/** Simple offset two/three-image collage for heroes and evidence pages. */
export function ImageCollage({
  images,
  className,
}: {
  images: { src: string; alt: string }[];
  className?: string;
}) {
  const [a, b, c] = images;
  return (
    <div className={cn("relative", className)}>
      {a && (
        <div className="relative aspect-[4/3] w-4/5 overflow-hidden shadow-[var(--shadow-plate-lg)]">
          <Image src={a.src} alt={a.alt} fill sizes="(min-width: 1024px) 36vw, 80vw" className="object-cover" />
        </div>
      )}
      {b && (
        <div className="absolute -bottom-10 right-0 aspect-square w-2/5 overflow-hidden border-4 border-ivory shadow-[var(--shadow-plate-lg)]">
          <Image src={b.src} alt={b.alt} fill sizes="(min-width: 1024px) 18vw, 40vw" className="object-cover" />
        </div>
      )}
      {c && (
        <div className="absolute -left-4 -top-8 hidden aspect-square w-1/4 overflow-hidden border-4 border-ivory shadow-[var(--shadow-plate)] lg:block">
          <Image src={c.src} alt={c.alt} fill sizes="12vw" className="object-cover" />
        </div>
      )}
    </div>
  );
}
