import { whyPillars } from "@/data/pillars";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { ButtonLink } from "@/components/ui/button";
import { TanitMark } from "@/components/ui/tanit-mark";

/** Why pillars — objection handling on the dark slab. Numbered editorial
 *  columns (the site's numbering language), one watermark anchoring the
 *  band, gold threads marking both seams. */
export function WhyPillars() {
  return (
    <section className="slab grain relative isolate overflow-hidden py-(--space-section)">
      {/* Seam threads — deliberate cuts to the light sections around */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      {/* One watermark instead of four repeated glyphs */}
      <div aria-hidden className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 text-gold opacity-[0.05] max-lg:hidden">
        <TanitMark className="h-[26rem]" />
      </div>

      <Container wide>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            kicker="Why Carthage"
            title="Built for the briefs"
            accent="others decline."
            tone="dark"
          />
          <Reveal delay={0.2}>
            <ButtonLink href="/why-carthage" variant="outline-light" className="mb-2">
              The Full Case
            </ButtonLink>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {whyPillars.map((pillar, i) => (
            <Reveal as="li" key={pillar.title} delay={i * 0.1}>
              <div className="group h-full border-t border-foam/15 pt-6 transition-colors duration-200 ease-out hover:border-gold/50">
                <p
                  aria-hidden
                  className="font-display text-2xl italic leading-none text-gold/80 transition-colors duration-200 ease-out group-hover:text-gold"
                >
                  0{i + 1}
                </p>
                <h3 className="font-display mt-4 text-xl font-medium leading-snug text-foam">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-pretty text-[0.95rem] leading-relaxed text-foam-dim">
                  {pillar.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
