import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cuisines } from "@/data/cuisines";
import { SmartImage } from "@/components/shared/smart-image";

/** Cinematic interlude — three featured kitchens, edge to edge, equal
 *  height. On desktop the hovered panel widens while its siblings yield;
 *  copper threads mark the deliberate cuts to the light sections around it. */
export function FeatureLinks() {
  const featured = cuisines.filter((c) => c.featured).slice(0, 3);
  return (
    <section
      aria-label="Featured cuisines"
      className="relative flex flex-col sm:h-[clamp(26rem,58vh,34rem)] sm:flex-row"
    >
      {/* Seam threads — the cut is drawn, not accidental */}
      <div aria-hidden className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-copper/35 to-transparent" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 z-10 h-px bg-gradient-to-r from-transparent via-copper/35 to-transparent" />

      {featured.map((cuisine, i) => (
        <Link
          key={cuisine.slug}
          href={`/menus/${cuisine.slug}`}
          className="group relative block h-64 flex-1 overflow-hidden transition-[flex-grow] duration-500 ease-[var(--ease-luxe)] sm:h-auto sm:hover:flex-[1.7] sm:focus-visible:flex-[1.7]"
        >
          <SmartImage
            src={cuisine.image}
            alt={cuisine.imageAlt}
            sizes="(min-width: 640px) 40vw, 100vw"
            className="brightness-[0.92] transition-[transform,filter] duration-500 ease-[var(--ease-luxe)] group-hover:scale-[1.04] group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-abyss/85 via-abyss/25 to-abyss/10 transition-opacity duration-500 group-hover:via-abyss/15" />
          {/* Hairline between panels */}
          {i > 0 && (
            <div aria-hidden className="absolute inset-y-0 left-0 z-10 w-px bg-foam/15 max-sm:hidden" />
          )}

          <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
            <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[var(--tracking-kicker)] text-gold">
              {cuisine.name} Catering
            </p>
            <p className="font-display mt-3 max-w-md text-balance text-2xl font-medium leading-snug text-foam">
              {cuisine.tagline}
            </p>
            <p className="mt-4 flex items-center gap-2 font-sans text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-foam-dim transition-colors duration-300 ease-out group-hover:text-gold">
              See the menu
              <ArrowRight aria-hidden className="size-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
}
