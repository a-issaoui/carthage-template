import type { Metadata } from "next";
import { ShieldCheck, Scale, BookOpen, Salad } from "lucide-react";
import { differentiators, kitchenFacts } from "@/data/pillars";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { OrnamentDivider } from "@/components/ui/ornament-divider";
import { Reveal } from "@/components/shared/reveal";
import { ParallaxImage } from "@/components/shared/parallax-image";
import { QuoteCtaCard } from "@/components/blocks/quote-cta-card";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Why Carthage — Licensed, Insured, One Kitchen",
  description:
    "What makes Carthage Kitchen different from the other three quotes you're getting: compliance on file, rehearsed scale, owned recipes, and dietary engineering.",
  alternates: { canonical: "/why-carthage" },
};

const icons = [ShieldCheck, Scale, BookOpen, Salad];

export default function WhyCarthagePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Why Carthage", path: "/why-carthage" }])} />
      <PageHero
        kicker="The Comparison Page"
        title="Get your three quotes."
        accent="Then read this."
        lede="The food must be excellent, but the logistics must be flawless. Here is exactly what we do differently — documented, not asserted."
      />

      {/* What sets us apart */}
      <Section tone="ivory">
        <Container wide>
          <SectionHeading kicker="What Sets Us Apart" title="Four arguments," accent="all checkable." />
          <ul className="mt-12 grid gap-8 sm:grid-cols-2">
            {differentiators.map((d, i) => {
              const Icon = icons[i % icons.length];
              return (
                <Reveal as="li" key={d.title} delay={(i % 2) * 0.1}>
                  <div className="h-full border border-ink/10 bg-ivory p-8 shadow-[var(--shadow-plate)]">
                    <span className="grid size-11 place-items-center border border-copper/30 text-copper-deep">
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <h2 className="font-display mt-5 text-2xl font-medium text-ink">{d.title}</h2>
                    <p className="mt-3 text-pretty leading-relaxed text-ink-soft">{d.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* One chef-led kitchen prose */}
      <Section tone="parchment" className="py-16 sm:py-20">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <OrnamentDivider className="text-copper-deep" />
          </Reveal>
          <Reveal delay={0.12}>
            <p className="font-display mt-9 text-balance text-2xl font-medium leading-snug text-ink sm:text-[1.85rem]">
              Most "multi-cuisine" caterers subcontract. We don't.{" "}
              <em className="italic text-copper-deep">
                Every cuisine on this site is cooked by our brigade, in our kitchen, from
                recipes we own
              </em>{" "}
              — which is why one truck, one invoice, and one accountable team can serve a
              menu that crosses three borders.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Commercial kitchen — anchored */}
      <Section tone="ivory" id="kitchen">
        <Container wide>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <ParallaxImage
                src={img.chefTeam}
                alt="The Carthage Kitchen brigade working the line in the Melrose facility"
                className="aspect-[4/3] shadow-[var(--shadow-plate-lg)]"
                sizes="(min-width: 1024px) 45vw, 100vw"
                strength={6}
              />
            </Reveal>
            <div>
              <SectionHeading kicker="The Facility" title="The kitchen behind" accent="every quote." />
              <Reveal delay={0.2}>
                <dl className="mt-9 grid grid-cols-2 gap-x-8 gap-y-7">
                  {kitchenFacts.map((fact) => (
                    <div key={fact.label} className="border-l-2 border-copper/40 pl-5">
                      <dd className="font-display text-3xl text-copper-deep">{fact.value}</dd>
                      <dt className="mt-1 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">
                        {fact.label}
                      </dt>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Documented & compliant */}
      <section className="slab grain relative isolate py-16 sm:py-20">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-balance text-3xl font-medium leading-tight text-foam sm:text-4xl">
              Documented and <em className="italic text-gold">compliant.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-foam-dim">
              Licensed in California. ${site.insuranceM}M liability insured — COI issued before
              delivery, not after you chase it. ServSafe-certified leads on every shift, allergen
              sheets with every order, and health-department records available on request.
            </p>
          </Reveal>
        </Container>
      </section>

      <QuoteCtaCard from="why-carthage" title="Make us your easiest quote to compare" />
    </>
  );
}
