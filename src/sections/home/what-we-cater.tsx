import { offerings } from "@/data/offerings";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { OfferingCard } from "@/components/blocks/offering-card";

/** What we cater — a broken grid, not a card wall: the lead offering runs
 *  tall under the arch while the rest stagger in offset columns. */
export function WhatWeCater() {
  const [lead, ...rest] = offerings;

  return (
    <Section tone="parchment" className="zellige overflow-visible">
      <Container wide>
        <SectionHeading
          kicker="What We Cater"
          title="Eleven ways we"
          accent="set the table."
          lede="Event-first? Start here — every door leads to its own program with real packages, real lead times, and proof we've done yours before."
        />
        <div className="mt-16 grid gap-x-10 gap-y-14 lg:grid-cols-[1.2fr_2fr]">
          <Reveal className="lg:-mt-6">
            <OfferingCard offering={lead} featured />
          </Reveal>
          <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2">
            {rest.map((offering, i) => (
              <Reveal
                as="li"
                key={offering.slug}
                delay={(i % 2) * 0.08}
                className={i % 2 === 1 ? "sm:translate-y-10" : undefined}
              >
                <OfferingCard offering={offering} />
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
