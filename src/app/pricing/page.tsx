import type { Metadata } from "next";
import { Check } from "lucide-react";
import { serviceStyles, overallRange } from "@/data/pricing";
import { faqsFor } from "@/data/faqs";
import { TrustStrip } from "@/components/shared/trust-strip";
import { QuoteCtaCard } from "@/components/blocks/quote-cta-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/shared/reveal";
import { ButtonLink } from "@/components/ui/button";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "How Much Does Catering Cost in Los Angeles?",
  description: `Real Los Angeles catering prices: $${overallRange[0]}–$${overallRange[1]} per person by service style — drop-off, stations, and plated full-service — plus what moves the number.`,
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  const faqs = faqsFor("pricing");
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }])} />
      <JsonLd data={faqSchema(faqs)} />

      {/* Question-form H1 with the short answer in the first sentence */}
      <section className="slab grain relative isolate overflow-hidden pb-16 pt-44 sm:pb-20 sm:pt-52">
        <Container wide>
          <Reveal>
            <Kicker tone="dark">Pricing, Answer-First</Kicker>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display mt-6 max-w-4xl text-balance text-4xl font-medium leading-[1.06] text-foam sm:text-6xl">
              How much does catering cost in <em className="italic text-gold">Los Angeles?</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-2xl text-pretty text-xl leading-relaxed text-foam-dim">
              <strong className="text-foam">
                ${overallRange[0]} to ${overallRange[1]} per person
              </strong>{" "}
              at Carthage Kitchen, depending on service style — drop-off is the most
              affordable, plated full-service the highest. Here's the whole math, with
              nothing hidden behind "call for pricing."
            </p>
          </Reveal>
        </Container>
        <div className="chevron-strip absolute inset-x-0 bottom-0" />
      </section>

      <TrustStrip />

      {/* Per-person ranges by service style */}
      <Section tone="ivory">
        <Container wide>
          <div className="grid gap-8 lg:grid-cols-3">
            {serviceStyles.map((style, i) => (
              <Reveal key={style.slug} delay={i * 0.1}>
                <article className="flex h-full flex-col border border-ink/10 bg-ivory p-8 shadow-[var(--shadow-plate)]">
                  <h2 className="font-display text-2xl font-medium text-ink">{style.name}</h2>
                  <p className="font-display mt-4 text-4xl text-copper-deep">
                    ${style.range[0]}–${style.range[1]}
                    <span className="ml-1 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                      / person
                    </span>
                  </p>
                  <p className="mt-4 text-pretty text-[0.95rem] leading-relaxed text-ink-soft">{style.blurb}</p>
                  <ul className="mt-6 flex-1 space-y-2.5">
                    {style.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm leading-snug text-ink-soft">
                        <Check aria-hidden className="mt-0.5 size-3.5 shrink-0 text-copper-deep" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7">
                    <ButtonLink href={`/get-a-quote?from=pricing-${style.slug}`} variant="outline" withArrow={false}>
                      Quote {style.name.split(" ")[0]}
                    </ButtonLink>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Question-style H2 sections — visible text mirrors FAQPage schema verbatim */}
      <Section tone="parchment">
        <Container className="max-w-3xl">
          <div className="space-y-12">
            {faqs.map((faq, i) => (
              <Reveal key={faq.question} delay={i * 0.05}>
                <section className="border-l-2 border-copper/40 pl-7">
                  <h2 className="font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
                    {faq.question}
                  </h2>
                  <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-soft">{faq.answer}</p>
                </section>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <QuoteCtaCard from="pricing" title="Get your exact per-person number" />
    </>
  );
}
