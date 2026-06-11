import type { Metadata } from "next";
import { offerings } from "@/data/offerings";
import { PageHero } from "@/components/shared/page-hero";
import { TrustStrip } from "@/components/shared/trust-strip";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/shared/reveal";
import { OfferingCard } from "@/components/blocks/offering-card";
import { QuoteCtaCard } from "@/components/blocks/quote-cta-card";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Catering Services by Event Type in Los Angeles",
  description:
    "Every catering service Carthage Kitchen runs in Los Angeles — weddings, corporate, film production, government, schools, healthcare, and recurring meal programs.",
  alternates: { canonical: "/services" },
};

export default function ServicesHubPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
      <PageHero
        kicker="Services"
        title="Eleven programs,"
        accent="one standard."
        lede="Compare everything we cater at a glance — each card is a full program with its own packages, menus, lead times, and proof."
      />
      <TrustStrip />
      <Section tone="ivory">
        <Container wide>
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((offering, i) => (
              <Reveal as="li" key={offering.slug} delay={(i % 3) * 0.08}>
                <OfferingCard offering={offering} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>
      <QuoteCtaCard from="services-hub" />
    </>
  );
}
