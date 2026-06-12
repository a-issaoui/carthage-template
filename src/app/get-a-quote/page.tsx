import type { Metadata } from "next";
import { Suspense } from "react";
import { Star, Clock, CalendarCheck, Mail } from "lucide-react";
import { QuoteWizard } from "@/components/forms/quote-wizard";
import { HeroMark, heroFrame } from "@/components/shared/page-hero";
import { ProcessTimeline } from "@/components/blocks/process-timeline";
import { TestimonialCard } from "@/components/blocks/testimonial-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/shared/reveal";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { testimonials } from "@/data/testimonials";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a catering quote from Carthage Kitchen — two required fields, a couple of minutes, a real menu sketch within one business day. No spam, no upsell call.",
  alternates: { canonical: "/get-a-quote" },
};

export default function GetAQuotePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Get a Quote", path: "/get-a-quote" }])} />

      {/* Hero promise + proof rail */}
      <section className={heroFrame}>
        <Container wide>
          <div className="flex items-center gap-10">
            <div className="min-w-0 max-w-3xl flex-[2]">
              <Reveal>
                <Kicker tone="dark">The Quote</Kicker>
              </Reveal>
              <Reveal delay={0.1}>
                <h1
                  className="font-display mt-6 text-balance font-medium leading-[1.05] text-foam"
                  style={{ fontSize: "var(--text-display-page)" }}
                >
                  A couple of minutes. <em className="italic text-gold">That's the whole ask.</em>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-foam-dim">
                  Two required fields; everything else is honestly skippable. No spam, no
                  upsell call — a real menu sketch and a per-person figure from a human.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foam-dim">
                  <li className="flex items-center gap-2">
                    <Star aria-hidden className="size-4 text-gold" /> {site.rating.value}★ · {site.rating.count} reviews
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock aria-hidden className="size-4 text-gold" /> 1 business day reply
                  </li>
                  <li className="flex items-center gap-2">
                    <CalendarCheck aria-hidden className="size-4 text-gold" /> {site.eventsCatered}+ events
                  </li>
                </ul>
              </Reveal>
            </div>
            <HeroMark />
          </div>
        </Container>
        <div className="chevron-strip absolute inset-x-0 bottom-0" />
      </section>

      <ProcessTimeline />

      {/* The wizard */}
      <Section tone="parchment" id="wizard" className="py-14 sm:py-18">
        <Container className="max-w-3xl">
          <Suspense fallback={null}>
            <QuoteWizard />
          </Suspense>
          <Reveal delay={0.15}>
            <p className="mt-7 flex items-center justify-center gap-2 text-center text-sm text-ink-soft">
              <Mail aria-hidden className="size-4 text-copper-deep" />
              Prefer prose? Email{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-copper-deep underline decoration-copper/40 underline-offset-4">
                {site.email}
              </a>
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section tone="ivory" className="py-14 sm:py-18">
        <Container className="max-w-2xl">
          <Reveal>
            <TestimonialCard t={testimonials[3]} />
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
