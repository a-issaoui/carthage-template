import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LatticeLink } from "@/components/blocks/lattice-link";
import { SmartImage } from "@/components/shared/smart-image";
import { combos, getCombo, combosForCuisine, combosForEvent } from "@/data/combos";
import { getOffering } from "@/data/offerings";
import { getCuisine } from "@/data/cuisines";
import { caseStudiesForEvent } from "@/data/case-studies";
import { faqsFor } from "@/data/faqs";
import { PageHero } from "@/components/shared/page-hero";
import { TrustStrip } from "@/components/shared/trust-strip";
import { Breadcrumbs } from "@/components/blocks/breadcrumbs";
import { FactsRow } from "@/components/blocks/facts-row";
import { PackageGrid, CustomPairingCard } from "@/components/blocks/package-grid";
import { CaseStudyStrip } from "@/components/blocks/case-study-strip";
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
  return combos.map((c) => ({ event: c.event, cuisine: c.cuisine }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ event: string; cuisine: string }>;
}): Promise<Metadata> {
  const { event, cuisine } = await params;
  const combo = getCombo(event, cuisine);
  if (!combo) return {};
  return {
    title: `${combo.title} in Los Angeles`,
    description: combo.blurb,
    alternates: { canonical: `/services/${event}/${cuisine}` },
  };
}

export default async function ComboPage({
  params,
}: {
  params: Promise<{ event: string; cuisine: string }>;
}) {
  const { event, cuisine: cuisineSlug } = await params;
  const combo = getCombo(event, cuisineSlug);
  const offering = getOffering(event);
  const cuisine = getCuisine(cuisineSlug);
  if (!combo || !offering || !cuisine) notFound();

  const quoteHref = `/get-a-quote?event=${event}&menu=${cuisineSlug}&from=combo-${event}-${cuisineSlug}`;
  const siblingsSameCuisine = combosForCuisine(cuisineSlug).filter((c) => c.event !== event);
  const siblingsSameEvent = combosForEvent(event).filter((c) => c.cuisine !== cuisineSlug);
  const previewDishes = cuisine.categories.flatMap((c) => c.dishes).slice(0, 6);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: offering.short, path: `/services/${event}` },
    { name: cuisine.name, path: `/services/${event}/${cuisineSlug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={serviceSchema(`${combo.title} — Los Angeles`, combo.blurb, `/services/${event}/${cuisineSlug}`)} />
      <PageHero kicker={`${offering.short} × ${cuisine.name}`} title={combo.title} lede={combo.blurb} />
      <FactsRow
        facts={[
          combo.packages
            ? { label: "Packages from", value: `$${Math.min(...combo.packages.map((p) => p.pricePerPerson))}/guest` }
            : { label: "Pricing", value: "Built to brief" },
          { label: "Lead time", value: offering.leadTime ?? "Ask us" },
          { label: "Packages", value: combo.packages ? String(combo.packages.length) : "Custom" },
          { label: "Full menu", value: `${cuisine.name} program` },
        ]}
      />
      <Breadcrumbs items={crumbs} />
      <TrustStrip />

      {combo.packages ? (
        <PackageGrid packages={combo.packages} quoteHref={quoteHref} />
      ) : (
        <CustomPairingCard quoteHref={quoteHref} />
      )}

      {/* Menu preview — links to the product page instead of duplicating it */}
      <Section tone="parchment">
        <Container wide>
          <SectionHeading
            kicker="The Food"
            title={`A taste of the ${cuisine.name} program.`}
            lede={cuisine.tagline}
          />
          <ul className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {previewDishes.map((dish, i) => (
              <Reveal as="li" key={dish.name} delay={(i % 3) * 0.06}>
                <div className="flex items-start gap-4 border-b border-ink/10 pb-5">
                  <div className="relative size-14 shrink-0 overflow-hidden rounded-full shadow-[var(--shadow-plate)] ring-1 ring-copper/25 ring-offset-2 ring-offset-parchment">
                    <SmartImage src={dish.image} alt={dish.imageAlt} sizes="56px" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-lg font-medium leading-snug text-ink">{dish.name}</h3>
                      <span className="font-display text-copper-deep">${dish.price}</span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{dish.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.2}>
            <div className="mt-10">
              <ButtonLink href={`/menus/${cuisine.slug}`} variant="outline">
                Full {cuisine.name} Menu & Prices
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CaseStudyStrip studies={caseStudiesForEvent(event)} title={`${offering.short} from the record.`} />

      {/* Sibling combo lattice */}
      {(siblingsSameCuisine.length > 0 || siblingsSameEvent.length > 0) && (
        <Section tone="ivory" className="py-14 sm:py-18">
          <Container wide>
            <SectionHeading kicker="Related Pairings" title="The rest of" accent="the lattice." />
            <ul className="mx-auto mt-8 max-w-3xl border-t border-ink/10">
              {[...siblingsSameCuisine, ...siblingsSameEvent].map((sibling) => {
                const sibOffering = getOffering(sibling.event);
                const sibCuisine = getCuisine(sibling.cuisine);
                return (
                  <li key={`${sibling.event}-${sibling.cuisine}`}>
                    <LatticeLink
                      href={`/services/${sibling.event}/${sibling.cuisine}`}
                      title={`${sibCuisine?.name} for ${sibOffering?.short}`}
                      sub={sibling.packages ? `from $${Math.min(...sibling.packages.map((p) => p.pricePerPerson))}/guest` : "built to brief"}
                    />
                  </li>
                );
              })}
            </ul>
          </Container>
        </Section>
      )}

      <FaqAccordion faqs={faqsFor(event)} kicker="FAQs" title="Before you" accent="ask." withSchema />
      <QuoteCtaCard
        from={`combo-${event}-${cuisineSlug}`}
        event={event}
        menu={cuisineSlug}
        title={`Quote ${cuisine.name} for your ${offering.short.toLowerCase()}`}
      />
    </>
  );
}
