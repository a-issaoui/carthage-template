import type { Metadata } from "next";
import { serviceStyles, overallRange } from "@/data/pricing";
import { faqsFor } from "@/data/faqs";
import { TrustStrip } from "@/components/shared/trust-strip";
import { QuoteCtaCard } from "@/components/blocks/quote-cta-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Kicker } from "@/components/ui/kicker";
import { HeroMark, heroFrame } from "@/components/shared/page-hero";
import { PricePanel } from "@/components/blocks/price-panel";
import { Reveal } from "@/components/shared/reveal";
import { JsonLd } from "@/components/shared/json-ld";
import { img } from "@/lib/images";
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
      <section className={heroFrame}>
        <Container wide>
          <div className="flex items-center gap-10">
            <div className="min-w-0 max-w-4xl flex-[2]">
              <Reveal>
                <Kicker tone="dark">Pricing, Answer-First</Kicker>
              </Reveal>
              <Reveal delay={0.1}>
                <h1
                  className="font-display mt-6 text-balance font-medium leading-[1.06] text-foam"
                  style={{ fontSize: "var(--text-display-page)" }}
                >
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
            </div>
            <HeroMark />
          </div>
        </Container>
        <div className="chevron-strip absolute inset-x-0 bottom-0" />
      </section>

      <TrustStrip />

      {/* Per-person ranges by service style — one composed panel */}
      <Section tone="ivory">
        <Container wide>
          <Reveal>
            <PricePanel
              columns={serviceStyles.map((style, i) => ({
                name: style.name,
                price: `$${style.range[0]}–${style.range[1]}`,
                priceSub: "per person",
                blurb: style.blurb,
                items: style.includes,
                cta: {
                  href: `/get-a-quote?from=pricing-${style.slug}`,
                  label: `Quote ${style.name.split(" ")[0]}`,
                },
                featured: i === 1,
                badge: "Most booked",
              }))}
            />
          </Reveal>
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

      <QuoteCtaCard
        from="pricing"
        title="Get your exact per-person number"
        body="Ranges are honest, but your event deserves arithmetic — date, headcount, format, and we'll do the math line by line."
        image={img.platedFine}
        imageAlt="A precisely composed course on porcelain"
      />
    </>
  );
}
