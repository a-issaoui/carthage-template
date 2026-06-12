import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import { locations } from "@/data/locations";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/shared/reveal";
import { AreaTile } from "@/components/blocks/area-tile";

/** Geo routing strip — the same photo tiles as home's ServiceArea,
 *  optionally filtered (nearby) or excluding the current area. */
export function LocationChips({
  title = "Serving greater Los Angeles",
  exclude,
  slugs,
}: {
  title?: string;
  exclude?: string;
  slugs?: string[];
}) {
  const list = (slugs ? locations.filter((l) => slugs.includes(l.slug)) : locations).filter(
    (l) => l.slug !== exclude
  );
  const filtered = Boolean(slugs || exclude);

  return (
    <section className="limewash py-(--space-section-sm)">
      <Container wide>
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
          <p className="flex items-center gap-2.5 font-sans text-[0.66rem] font-semibold uppercase tracking-[var(--tracking-kicker)] text-copper-deep">
            <MapPin aria-hidden className="size-3.5" />
            {title}
          </p>
          {filtered && (
            <Link
              href="/locations"
              className="group flex items-center gap-1.5 font-sans text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-ink-soft transition-colors duration-200 ease-out hover:text-copper-deep"
            >
              All areas
              <ArrowUpRight aria-hidden className="size-3.5 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          )}
        </div>

        <ul
          className={`mt-8 grid gap-x-6 gap-y-10 ${
            list.length <= 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-2 md:grid-cols-4"
          }`}
        >
          {list.map((location, i) => (
            <Reveal as="li" key={location.slug} delay={(i % 4) * 0.06}>
              <AreaTile
                location={location}
                sizes={list.length <= 3 ? "(min-width: 640px) 30vw, 100vw" : "(min-width: 768px) 23vw, 48vw"}
              />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
