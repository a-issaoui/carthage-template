import { whyPillars } from "@/data/pillars";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { TanitMark } from "@/components/ui/tanit-mark";

/** Why pillars — objection handling: scale, compliance, dietary, logistics. */
export function WhyPillars() {
  return (
    <section className="slab grain relative isolate py-18 sm:py-24">
      <Container wide>
        <SectionHeading kicker="Why Carthage" title="Built for the briefs" accent="others decline." tone="dark" />
        <ul className="mt-12 grid gap-9 sm:grid-cols-2 lg:grid-cols-4">
          {whyPillars.map((pillar, i) => (
            <Reveal as="li" key={pillar.title} delay={i * 0.1}>
              <div className="h-full border-t border-foam/15 pt-6">
                <TanitMark className="h-6 text-gold/70" />
                <h3 className="font-display mt-4 text-xl font-medium text-foam">{pillar.title}</h3>
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
