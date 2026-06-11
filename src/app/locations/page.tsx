import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { locations } from "@/data/locations";
import { PageHero } from "@/components/shared/page-hero";
import { TrustStrip } from "@/components/shared/trust-strip";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/shared/reveal";
import { QuoteCtaCard } from "@/components/blocks/quote-cta-card";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Catering Locations Across Los Angeles",
  description:
    "Carthage Kitchen caters across greater Los Angeles — Beverly Hills, Santa Monica, Hollywood, DTLA, Pasadena, Culver City, Long Beach, and West Hollywood.",
  alternates: { canonical: "/locations" },
};

export default function LocationsHubPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Locations", path: "/locations" }])} />
      <PageHero
        kicker="Service Areas"
        title="Eight neighborhoods,"
        accent="known by name."
        lede="Not a delivery radius — a working knowledge: the venues, the load-ins, the curfews, and the lead times that are actually true."
      />
      <TrustStrip />
      <Section tone="ivory">
        <Container wide>
          <ul className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((location, i) => (
              <Reveal as="li" key={location.slug} delay={(i % 4) * 0.07}>
                <Link
                  href={`/locations/${location.slug}`}
                  className="group block h-full bg-ivory shadow-[var(--shadow-plate)] transition-all duration-500 ease-[var(--ease-luxe)] hover:-translate-y-1 hover:shadow-[var(--shadow-plate-lg)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={location.image}
                      alt={location.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="font-display flex items-start justify-between gap-2 text-xl font-medium text-ink">
                      {location.name}
                      <ArrowUpRight aria-hidden className="mt-1 size-4 shrink-0 text-copper-deep transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-soft">{location.headline}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>
      <QuoteCtaCard from="locations-hub" title="Somewhere else in LA?" body="We cater across the county — name the neighborhood and we'll tell you honestly what the logistics look like." />
    </>
  );
}
