import type { Metadata } from "next";
import Link from "next/link";
import { SmartImage } from "@/components/shared/smart-image";
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
          <ul className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
            {locations.map((location, i) => (
              <Reveal as="li" key={location.slug} delay={(i % 4) * 0.07}>
                <Link href={`/locations/${location.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[3px] shadow-[var(--shadow-plate)] transition-all duration-300 ease-[var(--ease-luxe)] group-hover:-translate-y-1 group-hover:shadow-[var(--shadow-plate-lg)]">
                    <SmartImage
                      src={location.image}
                      alt={location.imageAlt}
                      sizes="(min-width: 1024px) 23vw, 48vw"
                      className="transition-transform duration-500 ease-[var(--ease-luxe)] group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-abyss/45 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-40" />
                  </div>
                  <div className="mt-3.5 flex items-baseline gap-2.5">
                    <h2 className="font-display text-lg font-medium leading-snug text-ink transition-colors duration-200 ease-out group-hover:text-copper-deep">
                      {location.name}
                    </h2>
                    <span aria-hidden className="mb-1 flex-1 border-b border-dotted border-ink/25" />
                    <span className="shrink-0 font-sans text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-copper-deep/80">
                      {location.leadTime.replace(" typical", "")}
                    </span>
                  </div>
                  <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-soft">{location.headline}</p>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>
      <QuoteCtaCard
        from="locations-hub"
        title="Somewhere else in LA?"
        body="We cater across the county — name the neighborhood and we'll tell you honestly what the logistics look like."
        image="/images/areas/downtown-los-angeles.jpg"
        imageAlt="The downtown Los Angeles skyline at dusk"
      />
    </>
  );
}
