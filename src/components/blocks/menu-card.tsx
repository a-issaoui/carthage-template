import Link from "next/link";
import type { Cuisine } from "@/types";
import { FramedImage } from "@/components/shared/framed-image";
import { cn } from "@/lib/utils";

/** Cuisine card — each kitchen framed under the gallery arch, the name
 *  beneath like a house plaque. */
export function MenuCard({
  cuisine,
  large = false,
  tabbable = true,
  priority = false,
}: {
  cuisine: Cuisine;
  large?: boolean;
  /** Set false on marquee clones so keyboard focus skips duplicates. */
  tabbable?: boolean;
  /** Set on above-the-fold cards (hub grids) — they are the page's LCP. */
  priority?: boolean;
}) {
  return (
    <Link href={`/menus/${cuisine.slug}`} className="group block" tabIndex={tabbable ? undefined : -1}>
      <div className="relative transition-transform duration-300 ease-[var(--ease-luxe)] group-hover:-translate-y-1.5">
        <FramedImage
          src={cuisine.image}
          alt={cuisine.imageAlt}
          shape={large ? "rect" : "arch"}
          priority={priority}
          className={cn(large ? "aspect-[4/3]" : "aspect-[3/4]")}
          sizes={large ? "(min-width: 768px) 45vw, 100vw" : "(min-width: 1024px) 18vw, (min-width: 640px) 40vw, 70vw"}
          imgClassName="transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:scale-105"
        />
        {cuisine.featured && (
          <span className="absolute left-1/2 top-[10%] z-10 -translate-x-1/2 bg-gold/90 px-3 py-1 font-sans text-[0.52rem] font-semibold uppercase tracking-[0.22em] text-abyss">
            Featured
          </span>
        )}
      </div>
      <div className="mt-5 text-center">
        <h3 className="font-display text-2xl font-medium text-ink transition-colors group-hover:text-copper-deep">
          {cuisine.name}
        </h3>
        <p className="mx-auto mt-1 max-w-[16rem] text-sm leading-snug text-ink-soft">
          {cuisine.tagline}
        </p>
      </div>
    </Link>
  );
}
