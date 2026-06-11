import Link from "next/link";
import { testimonials } from "@/data/testimonials";
import { site } from "@/lib/site";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { TestimonialCard } from "@/components/blocks/testimonial-card";

/** Three named cards on dark — borrowed credibility at the decision point. */
export function HomeTestimonials() {
  const featured = testimonials.filter((t) => t.featured).slice(0, 3);
  return (
    <section className="slab grain relative isolate py-18 sm:py-24">
      <Container wide>
        <SectionHeading kicker="In Their Words" title="Named hosts," accent="real rooms." tone="dark" />
        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {featured.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <TestimonialCard t={t} dark />
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <p className="mt-9">
            <Link
              href="/testimonials"
              className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:text-sand"
            >
              All {site.rating.count} reviews →
            </Link>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
