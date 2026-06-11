import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { LatticeLink } from "@/components/blocks/lattice-link";
import { SmartImage } from "@/components/shared/smart-image";
import { attributePages, getAttributePage } from "@/data/attributes";
import { dishesByTag } from "@/data/cuisines";
import { eventOfferings } from "@/data/offerings";
import { faqsFor } from "@/data/faqs";
import { PageHero } from "@/components/shared/page-hero";
import { TrustStrip } from "@/components/shared/trust-strip";
import { Breadcrumbs } from "@/components/blocks/breadcrumbs";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { QuoteCtaCard } from "@/components/blocks/quote-cta-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { ButtonLink } from "@/components/ui/button";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

/* Attribute pages — the 7 EARNED dietary/format pages. Dish proof is
   derived from dish tags (evidence, not assertion). */

export function generateStaticParams() {
  return attributePages.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const attr = getAttributePage(slug);
  if (!attr) return {};
  return {
    title: attr.h1,
    description: attr.promise,
    alternates: { canonical: `/${attr.slug}` },
  };
}

export default async function AttributePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const attr = getAttributePage(slug);
  if (!attr) notFound();

  const dishes = dishesByTag(attr.tag);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: attr.name, path: `/${attr.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={serviceSchema(attr.h1, attr.promise, `/${attr.slug}`)} />
      <PageHero kicker={`${attr.name} · Verified per dish`} title={attr.h1} lede={attr.promise} />
      <Breadcrumbs items={crumbs} />
      <TrustStrip />

      {/* Sourcing & labeling specifics */}
      <Section tone="ivory" className="py-14 sm:py-18">
        <Container>
          <ul className="mx-auto max-w-3xl divide-y divide-ink/10 border-y border-ink/10">
            {attr.specifics.map((line, i) => (
              <Reveal as="li" key={line} delay={i * 0.06}>
                <p className="flex items-start gap-4 py-4 text-[0.98rem] leading-relaxed text-ink-soft">
                  <Check aria-hidden className="mt-1 size-4 shrink-0 text-copper-deep" />
                  {line}
                </p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Dish proof grid — derived from the data, never asserted */}
      <Section tone="parchment">
        <Container wide>
          <SectionHeading
            kicker="The Proof"
            title={`${dishes.length} ${attr.name.toLowerCase()} dishes,`}
            accent="on real menus today."
            lede={`Every dish below carries the ${attr.name.toLowerCase()} mark in our menu data — this list is generated from the dishes themselves, not written by marketing.`}
          />
          <ul className="mt-12 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {dishes.map((dish, i) => (
              <Reveal as="li" key={`${dish.cuisineSlug}-${dish.name}`} delay={(i % 3) * 0.05}>
                <Link href={`/menus/${dish.cuisineSlug}`} className="group flex items-start gap-4 border-b border-ink/10 pb-5">
                  <div className="relative size-14 shrink-0 overflow-hidden rounded-full shadow-[var(--shadow-plate)] ring-1 ring-copper/25 ring-offset-2 ring-offset-parchment">
                    <SmartImage src={dish.image} alt={dish.imageAlt} sizes="56px" className="transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-lg font-medium leading-snug text-ink transition-colors group-hover:text-copper-deep">
                        {dish.name}
                      </h3>
                      <span className="font-display text-copper-deep">${dish.price}</span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{dish.description}</p>
                    <p className="mt-1.5 font-sans text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-copper-deep">
                      {dish.cuisine} menu →
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Event-type links */}
      <Section tone="ivory" className="py-14 sm:py-18">
        <Container wide>
          <SectionHeading kicker="By Occasion" title={`${attr.name} catering, for your event.`} />
          <ul className="mx-auto mt-8 max-w-3xl border-t border-ink/10">
            {eventOfferings.slice(0, 4).map((offering) => (
              <li key={offering.slug}>
                <LatticeLink
                  href={`/services/${offering.slug}`}
                  title={`${attr.name} ${offering.label}`}
                  sub={offering.startingPrice ? `from $${offering.startingPrice}/guest` : undefined}
                />
              </li>
            ))}
          </ul>
          <Reveal delay={0.15}>
            <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-between gap-6">
              <p className="max-w-xl text-pretty leading-relaxed text-ink-soft">
                <span className="font-semibold text-ink">Need the whole menu {attr.name.toLowerCase()}?</span>{" "}
                We build full-event menus inside this constraint — same tasting, same standard.
              </p>
              <ButtonLink href={`/get-a-quote?diet=${attr.tag}&from=attr-${attr.slug}`} variant="outline" className="shrink-0">
                Custom {attr.name} Menu
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </Section>

      <FaqAccordion faqs={faqsFor(attr.tag)} kicker={`${attr.name} FAQs`} title="Certification, cross-contact," accent="and labels." withSchema />
      <QuoteCtaCard from={`attr-${attr.slug}`} diet={attr.tag} title={`Price a ${attr.name.toLowerCase()} event`} />
    </>
  );
}
