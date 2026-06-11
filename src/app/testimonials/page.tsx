import type { Metadata } from "next";
import { Star } from "lucide-react";
import { testimonials, platforms } from "@/data/testimonials";
import { site } from "@/lib/site";
import { TrustStrip } from "@/components/shared/trust-strip";
import { TestimonialCard } from "@/components/blocks/testimonial-card";
import { QuoteCtaCard } from "@/components/blocks/quote-cta-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/shared/reveal";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Reviews & Testimonials",
  description: `Real reviews from Carthage Kitchen wedding, corporate, government, and private-event clients across Los Angeles — ${site.rating.value}★ across ${site.rating.count} reviews.`,
  alternates: { canonical: "/testimonials" },
};

const reviewSchemas = testimonials.map((t) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  reviewBody: t.quote,
  reviewRating: { "@type": "Rating", ratingValue: t.stars, bestRating: 5 },
  author: { "@type": "Person", name: t.name },
  itemReviewed: { "@type": "FoodEstablishment", "@id": `${site.url}/#business`, name: site.name },
}));

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Testimonials", path: "/testimonials" }])} />
      {reviewSchemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}

      {/* Ratings hero */}
      <section className="slab grain relative isolate overflow-hidden pb-16 pt-44 sm:pb-20 sm:pt-52">
        <Container wide>
          <Reveal>
            <Kicker tone="dark">The Diligence Page</Kicker>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display mt-6 max-w-4xl text-balance text-5xl font-medium leading-[1.04] text-foam sm:text-6xl">
              {site.rating.value} across {site.rating.count} reviews —{" "}
              <em className="italic text-gold">read the long ones.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3">
              <span className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} aria-hidden className="size-5 fill-gold text-gold" />
                ))}
              </span>
              <ul className="flex flex-wrap gap-2.5">
                {platforms.map((platform) => (
                  <li
                    key={platform}
                    className="border border-foam/25 px-4 py-1.5 font-sans text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-foam-dim"
                  >
                    {platform}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
        <div className="chevron-strip absolute inset-x-0 bottom-0" />
      </section>

      <TrustStrip />

      <Section tone="ivory">
        <Container wide>
          <div className="columns-1 gap-7 md:columns-2 xl:columns-3 [&>*]:mb-7">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.08} className="break-inside-avoid">
                <TestimonialCard t={t} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <QuoteCtaCard from="testimonials" title="Add your event to this page" />
    </>
  );
}
