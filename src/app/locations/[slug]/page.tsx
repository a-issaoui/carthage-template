import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LatticeLink } from "@/components/blocks/lattice-link";
import { locations, getLocation } from "@/data/locations";
import { getOffering, offeringHref } from "@/data/offerings";
import { caseStudiesForArea } from "@/data/case-studies";
import { site } from "@/lib/site";
import { PageHero } from "@/components/shared/page-hero";
import { TrustStrip } from "@/components/shared/trust-strip";
import { Breadcrumbs } from "@/components/blocks/breadcrumbs";
import { ParallaxImage } from "@/components/shared/parallax-image";
import { CaseStudyStrip } from "@/components/blocks/case-study-strip";
import { LocationChips } from "@/components/blocks/location-chips";
import { QuoteCtaCard } from "@/components/blocks/quote-cta-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Kicker } from "@/components/ui/kicker";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  return {
    title: `Catering in ${location.name}`,
    description: location.headline,
    alternates: { canonical: `/locations/${location.slug}` },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const studies = caseStudiesForArea(location.slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations" },
    { name: location.name, path: `/locations/${location.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FoodEstablishment",
          "@id": `${site.url}/locations/${location.slug}#service`,
          name: `${site.name} — ${location.name}`,
          url: `${site.url}/locations/${location.slug}`,
          parentOrganization: { "@id": `${site.url}/#business` },
          areaServed: { "@type": "Place", name: `${location.name}, Los Angeles, CA` },
        }}
      />
      <PageHero kicker={`Catering · ${location.name}`} title={`Catering in ${location.name}`} lede={location.headline} />
      <Breadcrumbs items={crumbs} />
      <TrustStrip />

      {/* About-the-area prose — the anti-doorway content */}
      <Section tone="ivory">
        <Container wide>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Reveal>
                <Kicker>Working {location.name}</Kicker>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display mt-5 text-balance text-3xl font-medium leading-[1.08] text-ink sm:text-4xl">
                  We've parked here <em className="italic text-copper-deep">before.</em>
                </h2>
              </Reveal>
              <div className="mt-6 space-y-5 text-pretty text-lg leading-relaxed text-ink-soft">
                {location.about.map((paragraph, i) => (
                  <Reveal key={i} delay={0.18 + i * 0.08}>
                    <p>{paragraph}</p>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.3}>
                <p className="mt-7 font-sans text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-copper-deep">
                  Typical lead time · {location.leadTime}
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <ParallaxImage
                src={location.image}
                alt={location.imageAlt}
                className="aspect-[4/3] shadow-[var(--shadow-plate-lg)]"
                sizes="(min-width: 1024px) 45vw, 100vw"
                strength={6}
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Popular events in this area — kind-aware links */}
      <Section tone="parchment" className="py-14 sm:py-18">
        <Container wide>
          <SectionHeading kicker="Popular Here" title={`What ${location.name} books.`} />
          <ul className="mx-auto mt-8 max-w-3xl border-t border-ink/10">
            {location.popularEvents.map((slug) => {
              const offering = getOffering(slug);
              if (!offering) return null;
              return (
                <li key={slug}>
                  <LatticeLink
                    href={offeringHref(offering)}
                    title={offering.label}
                    sub={offering.startingPrice ? `from $${offering.startingPrice}/guest` : undefined}
                  />
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <CaseStudyStrip studies={studies} title={`From the record, near ${location.name}.`} />
      <QuoteCtaCard from={`location-${location.slug}`} title={`Price an event in ${location.name}`} />
      <LocationChips title="Nearby neighborhoods" slugs={[...location.nearby]} exclude={location.slug} />
    </>
  );
}
