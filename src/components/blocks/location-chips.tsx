import Link from "next/link";
import { MapPin } from "lucide-react";
import { locations } from "@/data/locations";
import { Container } from "@/components/layout/container";

/** Geo-anchor chip row — home, intent, and location pages. */
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
  return (
    <section className="border-y border-ink/10 bg-parchment/50 py-10">
      <Container wide>
        <p className="flex items-center gap-2.5 font-sans text-[0.66rem] font-semibold uppercase tracking-[var(--tracking-kicker)] text-copper-deep">
          <MapPin aria-hidden className="size-3.5" />
          {title}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2.5">
          {list.map((location) => (
            <li key={location.slug}>
              <Link
                href={`/locations/${location.slug}`}
                className="inline-block border border-ink/15 bg-ivory px-4 py-2 font-sans text-[0.72rem] font-semibold tracking-wide text-ink transition-all duration-300 hover:border-copper hover:text-copper-deep"
              >
                {location.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/locations"
              className="inline-block border border-copper/40 bg-ivory px-4 py-2 font-sans text-[0.72rem] font-semibold tracking-wide text-copper-deep transition-all duration-300 hover:bg-copper hover:text-ivory"
            >
              All areas →
            </Link>
          </li>
        </ul>
      </Container>
    </section>
  );
}
