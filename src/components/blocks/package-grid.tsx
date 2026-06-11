import { Check } from "lucide-react";
import type { PackageTier } from "@/types";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { OliveBranch } from "@/components/ui/motifs";
import { ButtonLink } from "@/components/ui/button";

/** Priced package tiers — set like printed menu cards, not pricing boxes:
 *  double-rule top, centered name, olive rest mark, staggered baseline. */
export function PackageGrid({
  packages,
  quoteHref,
}: {
  packages: PackageTier[];
  quoteHref: string;
}) {
  return (
    <section className="limewash py-(--space-section-sm)">
      <Container wide>
        <SectionHeading kicker="Packages" title="Priced tiers," accent="honestly built." />
        <div className="mt-14 grid gap-x-14 gap-y-12 md:grid-cols-2 lg:max-w-4xl">
          {packages.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.1} className={i % 2 === 1 ? "md:mt-12" : ""}>
              <article className="double-rule h-full pt-7 text-ink/25">
                <h3 className="font-display text-center text-2xl font-medium text-ink">{tier.name}</h3>
                <p className="font-display mt-3 text-center text-4xl text-copper-deep">
                  ${tier.pricePerPerson}
                  <span className="ml-1.5 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                    / guest · {tier.minGuests}+
                  </span>
                </p>
                <OliveBranch className="mx-auto mt-5 h-4 text-copper/60" />
                <ul className="mx-auto mt-6 max-w-xs space-y-2.5">
                  {tier.inclusions.map((inc) => (
                    <li key={inc} className="flex items-start gap-2.5 text-sm leading-snug text-ink-soft">
                      <Check aria-hidden className="mt-0.5 size-3.5 shrink-0 text-copper-deep" />
                      {inc}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 text-center">
                  <ButtonLink href={quoteHref} variant="outline" withArrow={false}>
                    Quote This Package
                  </ButtonLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Honesty card when no fixed package exists for a combo. */
export function CustomPairingCard({ quoteHref }: { quoteHref: string }) {
  return (
    <section className="limewash py-(--space-section-sm)">
      <Container className="max-w-3xl">
        <Reveal>
          <div className="double-rule pt-9 text-center text-ink/25">
            <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
              No fixed package — <em className="italic text-copper-deep">on purpose.</em>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-ink-soft">
              This pairing is always built to the brief: headcount, venue, and format move the
              architecture too much for an honest flat tier. Tell us the details and we'll price
              exactly your event — nothing templated, nothing padded.
            </p>
            <OliveBranch className="mx-auto mt-6 h-4 text-copper/60" />
            <div className="mt-7">
              <ButtonLink href={quoteHref} variant="primary">
                Price My Event
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
