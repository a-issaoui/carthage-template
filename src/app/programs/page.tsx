import type { Metadata } from "next";
import { programs } from "@/data/programs";
import { programOfferings } from "@/data/offerings";
import { PageHero } from "@/components/shared/page-hero";
import { TrustStrip } from "@/components/shared/trust-strip";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/shared/reveal";
import { OfferingCard } from "@/components/blocks/offering-card";
import { QuoteCtaCard } from "@/components/blocks/quote-cta-card";
import { JsonLd } from "@/components/shared/json-ld";
import { img } from "@/lib/images";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Recurring Meal Programs in Los Angeles",
  description:
    "Office lunch programs and weekly meal service from Carthage Kitchen — rotating chef menus, dietary tracks, one invoice, headcount that flexes.",
  alternates: { canonical: "/programs" },
};

export default function ProgramsHubPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Programs", path: "/programs" }])} />
      <PageHero
        kicker="Recurring Programs"
        title="Catering on"
        accent="a cadence."
        lede={`Not an event — a rhythm. ${programs.length} recurring programs with rotating menus, dietary tracks, and billing built for whoever signs the invoice.`}
      />
      <TrustStrip />
      <Section tone="ivory">
        <Container wide>
          <ul className="grid gap-8 md:grid-cols-2 lg:max-w-4xl">
            {programOfferings.map((offering, i) => (
              <Reveal as="li" key={offering.slug} delay={i * 0.1}>
                <OfferingCard offering={offering} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>
      <QuoteCtaCard from="programs-hub" title="Start a program conversation" body="Tell us the cadence, headcount, and dietary mix — we'll sketch a rotation and a monthly number within one business day."
        image={img.buffetTrays}
        imageAlt="Labeled trays set for a recurring office service"
      />
    </>
  );
}
