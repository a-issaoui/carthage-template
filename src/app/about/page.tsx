import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { TrustStrip } from "@/components/shared/trust-strip";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Kicker } from "@/components/ui/kicker";
import { OrnamentDivider } from "@/components/ui/ornament-divider";
import { Reveal } from "@/components/shared/reveal";
import { ParallaxImage } from "@/components/shared/parallax-image";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { TestimonialCard } from "@/components/blocks/testimonial-card";
import { QuoteCtaCard } from "@/components/blocks/quote-cta-card";
import { ButtonLink } from "@/components/ui/button";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { testimonials } from "@/data/testimonials";
import { stats } from "@/data/stats";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — The Kitchen, the Chef, the Numbers",
  description: `Carthage Kitchen: founded ${site.founded} by chef Amine Khelifi. From one borrowed kitchen to ${site.eventsCatered}+ events across Los Angeles.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <PageHero
        kicker="About Us"
        title="Humans cook here."
        accent="Meet them."
        lede={`In ${site.founded}, fourteen strangers answered a handwritten flyer for a couscous dinner in a borrowed kitchen. Three asked for their weddings. One asked for her company. The flyer is framed; the standard never moved.`}
      />
      <TrustStrip />

      {/* Executive-chef panel — a face is E-E-A-T's first E */}
      <Section tone="ivory">
        <Container wide>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <ParallaxImage
                src={img.chefSearing}
                alt="Founder and executive chef Amine Khelifi at the pass"
                className="arch aspect-[4/5] shadow-[var(--shadow-plate-lg)]"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </Reveal>
            <div>
              <Reveal>
                <Kicker>The Founder</Kicker>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display mt-5 text-balance text-4xl font-medium leading-[1.06] text-ink sm:text-5xl">
                  Amine Khelifi — <em className="italic text-copper-deep">Tunis, Lyon, Los Angeles.</em>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-6 space-y-5 text-pretty text-lg leading-relaxed text-ink-soft">
                  <p>
                    Born two miles from the ruins of Carthage, trained in Lyon's old-guard
                    kitchens, seasoned in two Michelin-starred brigades. Amine founded
                    Carthage Kitchen in {site.founded} with one rule: every plate must
                    survive his grandmother's judgment.
                  </p>
                  <p>
                    ServSafe-certified, still on the pass most nights, and personally at
                    the table for every wedding tasting. The couscous from that first
                    flyer dinner is still on the Mediterranean menu.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-8">
                  <ButtonLink href="/get-a-quote?from=about-chef" variant="outline">
                    Book a Tasting with Amine
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* What we're about — centered prose */}
      <Section tone="parchment" className="py-16 sm:py-20">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <OrnamentDivider className="text-copper-deep" />
          </Reveal>
          <Reveal delay={0.12}>
            <p className="font-display mt-9 text-balance text-2xl font-medium leading-snug text-ink sm:text-[1.85rem]">
              Seven cuisines. Eleven event types. One kitchen.{" "}
              <em className="italic text-copper-deep">
                The food must be excellent, but the logistics must be flawless
              </em>{" "}
              — that is the whole philosophy, in one sentence.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section tone="ivory" className="py-14 sm:py-18">
        <Container className="max-w-2xl">
          <Reveal>
            <TestimonialCard t={testimonials[2]} />
          </Reveal>
        </Container>
      </Section>

      {/* Dark stats band — the quantified summary */}
      <section className="slab grain relative isolate py-16 sm:py-20">
        <div className="chevron-strip absolute inset-x-0 top-0" />
        <Container wide>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1}>
                <div className="border-l border-foam/15 pl-6">
                  <dd className="font-display text-5xl font-medium text-gold sm:text-6xl">
                    {Number.isInteger(stat.value) ? (
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    ) : (
                      `${stat.value}${stat.suffix}`
                    )}
                  </dd>
                  <dt className="mt-3 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-foam-dim">
                    {stat.label}
                  </dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      <QuoteCtaCard
        from="about"
        title="Cook with us, once."
        body="The story reads well, but the couscous argues better — book a tasting and judge the kitchen the way Amine's grandmother would."
        image={img.chefTeam}
        imageAlt="The Carthage Kitchen brigade working the line"
      />
    </>
  );
}
