import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cuisines } from "@/data/cuisines";

/** Three full-bleed cuisine panels — appetite trigger + cuisine-first routing. */
export function FeatureLinks() {
  const featured = cuisines.filter((c) => c.featured).slice(0, 3);
  return (
    <section className="grid sm:grid-cols-3">
      {featured.map((cuisine) => (
        <Link
          key={cuisine.slug}
          href={`/menus/${cuisine.slug}`}
          className="group relative block aspect-[4/5] overflow-hidden sm:aspect-[3/4]"
        >
          <Image
            src={cuisine.image}
            alt={cuisine.imageAlt}
            fill
            sizes="(min-width: 640px) 34vw, 100vw"
            className="object-cover transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-abyss/90 via-abyss/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7">
            <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[var(--tracking-kicker)] text-gold">
              {cuisine.name} Catering
            </p>
            <p className="font-display mt-2 text-2xl font-medium leading-snug text-foam">
              {cuisine.tagline}
            </p>
            <p className="mt-3 flex items-center gap-2 font-sans text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-foam-dim transition-colors group-hover:text-gold">
              See the menu
              <ArrowRight aria-hidden className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
}
