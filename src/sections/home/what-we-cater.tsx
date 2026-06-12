import { offerings } from "@/data/offerings";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { OfferingCard } from "@/components/blocks/offering-card";
import { ButtonLink } from "@/components/ui/button";

/** What we cater — one composed grid: the lead offering runs tall under the
 *  arch (row-span-2) while the other ten fill the lattice around it. No
 *  dead tracks, no ragged offsets. */
export function WhatWeCater() {
  const [lead, ...rest] = offerings;

  return (
    <Section tone="parchment" className="zellige">
      <Container wide>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            kicker="What We Cater"
            title="Eleven ways we"
            accent="set the table."
            lede="Event-first? Start here — every card is its own program with real packages, real lead times, and proof we've done yours before."
          />
          <Reveal delay={0.2}>
            <ButtonLink href="/services" variant="outline" className="mb-2">
              All Services
            </ButtonLink>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal as="li" className="sm:col-span-2 lg:col-span-1 lg:row-span-2">
            <OfferingCard offering={lead} featured />
          </Reveal>
          {rest.map((offering, i) => (
            <Reveal as="li" key={offering.slug} delay={((i + 1) % 3) * 0.07}>
              <OfferingCard offering={offering} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
