import { testimonials } from "@/data/testimonials";
import { site } from "@/lib/site";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Stars } from "@/components/blocks/testimonial-card";
import { OliveBranch } from "@/components/ui/motifs";
import { ButtonLink } from "@/components/ui/button";

/** Three named testimonies — the second chapter of the dark movement.
 *  Open editorial columns on hairlines, no boxes; an olive branch marks
 *  the chapter break from the featured band above. */
export function HomeTestimonials() {
  const featured = testimonials.filter((t) => t.featured).slice(0, 3);
  return (
    <section className="slab-deep grain relative isolate pb-(--space-section) pt-(--space-section-sm)">
      {/* Seam thread — the return to ivory below */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <Container wide>
        {/* Chapter break within the slab */}
        <Reveal>
          <OliveBranch className="mx-auto h-4 text-gold/50" />
        </Reveal>

        <div className="mt-12 flex flex-wrap items-end justify-between gap-8">
          <SectionHeading kicker="In Their Words" title="Named hosts," accent="real rooms." tone="dark" />
          <Reveal delay={0.2}>
            <ButtonLink href="/testimonials" variant="outline-light" className="mb-2">
              All {site.rating.count} Reviews
            </ButtonLink>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-3">
          {featured.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 0.1}>
              <figure className="group h-full border-l border-foam/15 pl-7 transition-colors duration-200 ease-out hover:border-gold/50">
                <Stars count={t.stars} />
                <blockquote className="font-display mt-5 text-pretty text-xl font-medium italic leading-snug text-foam">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-sans text-sm font-semibold tracking-wide text-gold">{t.name}</p>
                  <p className="mt-1 text-sm leading-snug text-foam-dim">{t.role}</p>
                  <p className="mt-1.5 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-foam-dim/70">
                    {t.event} · via {t.platform}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
