import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LatticeLink } from "@/components/blocks/lattice-link";
import { eventOfferings, getOffering } from "@/data/offerings";
import { combosForEvent } from "@/data/combos";
import { cuisines } from "@/data/cuisines";
import { caseStudiesForEvent } from "@/data/case-studies";
import { faqsFor } from "@/data/faqs";
import { PageHero } from "@/components/shared/page-hero";
import { TrustStrip } from "@/components/shared/trust-strip";
import { Breadcrumbs } from "@/components/blocks/breadcrumbs";
import { FactsRow } from "@/components/blocks/facts-row";
import { CaseStudyStrip } from "@/components/blocks/case-study-strip";
import { LocationChips } from "@/components/blocks/location-chips";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { QuoteCtaCard } from "@/components/blocks/quote-cta-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { ButtonLink } from "@/components/ui/button";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export function generateStaticParams() {
  return eventOfferings.map((o) => ({ event: o.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ event: string }> }): Promise<Metadata> {
  const { event } = await params;
  const offering = getOffering(event);
  if (!offering || offering.kind !== "event") return {};
  return {
    title: `${offering.label} in Los Angeles`,
    description: `${offering.blurb} From $${offering.startingPrice}/guest · ${offering.leadTime}.`,
    alternates: { canonical: `/services/${offering.slug}` },
  };
}

export default async function EventServicePage({ params }: { params: Promise<{ event: string }> }) {
  const { event } = await params;
  const offering = getOffering(event);
  if (!offering || offering.kind !== "event") notFound();

  const eventCombos = combosForEvent(offering.slug);
  const studies = caseStudiesForEvent(offering.slug);
  const faqs = faqsFor(offering.slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: offering.short, path: `/services/${offering.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={serviceSchema(`${offering.label} — Los Angeles`, offering.blurb, `/services/${offering.slug}`)} />
      <PageHero kicker={`Services · ${offering.short}`} title={offering.label.replace(" Catering", "")} accent="catering, solved." lede={offering.blurb} />
      <FactsRow
        facts={[
          { label: "Starting price", value: `$${offering.startingPrice}/guest` },
          { label: "Lead time", value: offering.leadTime ?? "Ask us" },
          { label: "Cuisine pairings", value: String(eventCombos.length || cuisines.length) },
          { label: "Custom menus", value: offering.allowsCustom ? "Available" : "On request" },
        ]}
      />
      <Breadcrumbs items={crumbs} />
      <TrustStrip />

      <CaseStudyStrip studies={studies} title={`${offering.short} we've actually catered.`} />

      {/* Linked cuisines — the crawl path into event×cuisine combos */}
      <Section tone="ivory">
        <Container wide>
          <SectionHeading
            kicker="Menus for This Event"
            title="The food options,"
            accent="paired honestly."
            lede={
              eventCombos.length > 0
                ? `Curated cuisine pairings for ${offering.short.toLowerCase()} — each with its own packages or built to brief.`
                : "Any of our seven cuisine programs can carry this event — these are the menus to start from."
            }
          />
          <ul className="mx-auto mt-10 max-w-3xl border-t border-ink/10">
            {(eventCombos.length > 0
              ? eventCombos.map((combo) => ({
                  href: `/services/${combo.event}/${combo.cuisine}`,
                  title: combo.title,
                  blurb: combo.blurb,
                  sub: combo.packages
                    ? `from $${Math.min(...combo.packages.map((p) => p.pricePerPerson))}/guest`
                    : "built to brief",
                }))
              : cuisines.slice(0, 6).map((c) => ({
                  href: `/menus/${c.slug}`,
                  title: `${c.name} Menu`,
                  blurb: c.tagline,
                  sub: "full menu",
                }))
            ).map((link, i) => (
              <Reveal as="li" key={link.href} delay={i * 0.05}>
                <LatticeLink {...link} />
              </Reveal>
            ))}
          </ul>
          {offering.allowsCustom && (
            <Reveal delay={0.25}>
              <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-between gap-6">
                <p className="max-w-xl text-pretty leading-relaxed text-ink-soft">
                  <span className="font-semibold text-ink">Nothing here fits exactly?</span>{" "}
                  Build a custom spread across all seven kitchens and we'll price precisely that.
                </p>
                <ButtonLink href="/custom-package" variant="outline" className="shrink-0">
                  Custom Spread
                </ButtonLink>
              </div>
            </Reveal>
          )}
        </Container>
      </Section>

      <FaqAccordion
        faqs={faqs}
        kicker={`${offering.short} FAQs`}
        title="What this buyer"
        accent="always asks."
        withSchema
      />
      <QuoteCtaCard from={`event-${offering.slug}`} event={offering.slug} title={`Price your ${offering.short.toLowerCase()} event`} />
      <LocationChips title={`${offering.short} catering across LA`} />
    </>
  );
}
