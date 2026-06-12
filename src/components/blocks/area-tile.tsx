import Link from "next/link";
import type { AreaLocation } from "@/types";
import { SmartImage } from "@/components/shared/smart-image";

/** One service-area tile — photo with soft scrim, dotted-leader name
 *  plaque, lead time. Shared by home's ServiceArea and LocationChips. */
export function AreaTile({ location, sizes = "(min-width: 768px) 23vw, 48vw" }: { location: AreaLocation; sizes?: string }) {
  return (
    <Link href={`/locations/${location.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[3px] shadow-[var(--shadow-plate)] transition-all duration-300 ease-[var(--ease-luxe)] group-hover:-translate-y-1 group-hover:shadow-[var(--shadow-plate-lg)]">
        <SmartImage
          src={location.image}
          alt={location.imageAlt}
          sizes={sizes}
          className="transition-transform duration-500 ease-[var(--ease-luxe)] group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-abyss/45 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-40" />
      </div>
      <div className="mt-3.5 flex items-baseline gap-2.5">
        <h3 className="font-display text-lg font-medium leading-snug text-ink transition-colors duration-200 ease-out group-hover:text-copper-deep">
          {location.name}
        </h3>
        <span aria-hidden className="mb-1 flex-1 border-b border-dotted border-ink/25" />
        <span className="shrink-0 font-sans text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-copper-deep/80">
          {location.leadTime.replace(" typical", "")}
        </span>
      </div>
    </Link>
  );
}
