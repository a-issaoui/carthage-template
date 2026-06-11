import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RefreshCw, Salad, Receipt, Truck } from "lucide-react";
import { programs, getProgram } from "@/data/programs";
import { getOffering } from "@/data/offerings";
import { faqsFor } from "@/data/faqs";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/blocks/breadcrumbs";
import { FactsRow } from "@/components/blocks/facts-row";
import { TestimonialCard } from "@/components/blocks/testimonial-card";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { QuoteCtaCard } from "@/components/blocks/quote-cta-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

const icons = [RefreshCw, Salad, Receipt, Truck];

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return {};
  return {
    title: `${program.name} — Los Angeles`,
    description: program.blurb,
    alternates: { canonical: `/programs/${program.slug}` },
  };
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();
  const offering = getOffering(slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Programs", path: "/programs" },
    { name: program.name, path: `/programs/${program.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={serviceSchema(`${program.name} — Los Angeles`, program.blurb, `/programs/${program.slug}`)} />
      <PageHero kicker="Recurring Program" title={program.name} lede={program.blurb} />
      {offering && (
        <FactsRow
          facts={[
            { label: "From", value: `$${offering.startingPrice}/head` },
            { label: "Start", value: offering.leadTime ?? "2 weeks" },
            { label: "Rotation", value: "6-week cycle" },
            { label: "Commitment", value: "Month to month" },
          ]}
        />
      )}
      <Breadcrumbs items={crumbs} />

      <Section tone="ivory">
        <Container wide>
          <SectionHeading kicker="What's Included" title="The program," accent="itemized." />
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {program.included.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <Reveal as="li" key={item.title} delay={i * 0.08}>
                  <div className="h-full border border-ink/10 bg-ivory p-7 shadow-[var(--shadow-plate)]">
                    <span className="grid size-10 place-items-center border border-copper/30 text-copper-deep">
                      <Icon aria-hidden className="size-4.5" />
                    </span>
                    <h3 className="font-display mt-5 text-xl font-medium text-ink">{item.title}</h3>
                    <p className="mt-2.5 text-pretty text-sm leading-relaxed text-ink-soft">{item.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section tone="parchment" className="py-14 sm:py-18">
        <Container className="max-w-2xl">
          <Reveal>
            <TestimonialCard t={program.testimonial} />
          </Reveal>
        </Container>
      </Section>

      <FaqAccordion faqs={faqsFor(program.slug)} kicker="Program FAQs" title="Contracts, billing," accent="and the fine print." withSchema />
      <QuoteCtaCard
        from={`program-${program.slug}`}
        event={program.slug}
        title={`Price the ${program.name.toLowerCase()}`}
        body="The wizard is cadence-aware — tell it the frequency and start date and we'll sketch a rotation with a monthly number."
      />
    </>
  );
}
