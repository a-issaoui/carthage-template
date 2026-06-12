import type { PackageTier } from "@/types";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { OliveBranch } from "@/components/ui/motifs";
import { ButtonLink } from "@/components/ui/button";
import { PricePanel } from "@/components/blocks/price-panel";

/** Priced package tiers — the shared price panel; the richer tier is the
 *  featured anchor. Intent pages (combos) only. */
export function PackageGrid({
  packages,
  quoteHref,
}: {
  packages: PackageTier[];
  quoteHref: string;
}) {
  const featuredIndex = packages.length > 1 ? packages.length - 1 : -1;
  return (
    <section className="limewash py-(--space-section-sm)">
      <Container wide>
        <SectionHeading kicker="Packages" title="Priced tiers," accent="honestly built." />
        <Reveal delay={0.15} className="mt-14">
          <PricePanel
            columns={packages.map((tier, i) => ({
              name: tier.name,
              price: `$${tier.pricePerPerson}`,
              priceSub: `per guest · ${tier.minGuests}+ guests`,
              items: tier.inclusions,
              cta: { href: quoteHref, label: "Quote This Package" },
              featured: i === featuredIndex,
              badge: "The full architecture",
            }))}
          />
        </Reveal>
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
          <div className="relative mx-auto overflow-hidden rounded-[4px] border-t-2 border-t-gold bg-ivory px-8 py-12 text-center ring-1 ring-ink/10">
            <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
              No fixed package — <em className="italic text-copper-deep">on purpose.</em>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-ink-soft">
              This pairing is always built to the brief: headcount, venue, and format move the
              architecture too much for an honest flat tier. Tell us the details and we'll price
              exactly your event — nothing templated, nothing padded.
            </p>
            <OliveBranch className="mx-auto mt-6 h-4 text-copper/60" />
            <div className="mt-8">
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
