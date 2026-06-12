import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Users, CalendarDays, MapPin } from "lucide-react";
import { LatticeLink } from "@/components/blocks/lattice-link";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import { getOffering } from "@/data/offerings";
import { getCuisine } from "@/data/cuisines";
import { getLocation } from "@/data/locations";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/blocks/breadcrumbs";
import { ParallaxImage } from "@/components/shared/parallax-image";
import { QuoteCtaCard } from "@/components/blocks/quote-cta-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/shared/reveal";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema, articleSchema } from "@/lib/schema";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.title} — Case Study`,
    description: study.summary,
    alternates: { canonical: `/events/${study.slug}` },
  };
}

const storyBlocks = (study: NonNullable<ReturnType<typeof getCaseStudy>>) => [
  { heading: "The Brief", text: study.brief },
  { heading: "Our Approach", text: study.approach },
  { heading: "On the Day", text: study.onTheDay },
  { heading: "The Outcome", text: study.outcome },
];

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const offering = getOffering(study.eventType);
  const cuisine = getCuisine(study.menuSlug);
  const location = getLocation(study.area);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: study.title, path: `/events/${study.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={articleSchema({
          title: study.title,
          description: study.summary,
          path: `/events/${study.slug}`,
          image: study.image,
          datePublished: "2026-01-15",
        })}
      />
      <PageHero kicker={`${offering?.short ?? study.eventType} · ${study.venue}`} title={study.title} lede={study.summary} />
      <Breadcrumbs items={crumbs} />

      <Section tone="ivory">
        <Container wide>
          <Reveal>
            <ParallaxImage
              src={study.image}
              alt={study.imageAlt}
              className="aspect-[21/9] shadow-[var(--shadow-plate-lg)]"
              sizes="100vw"
              strength={6}
              priority
            />
          </Reveal>

          {/* Stat row — the scannable proof */}
          <Reveal delay={0.1}>
            <dl className="relative mx-auto -mt-10 grid max-w-2xl grid-cols-3 divide-x divide-ink/10 border border-ink/10 bg-ivory text-center shadow-[var(--shadow-plate-lg)]">
              {[
                { icon: Users, label: "Guests", value: String(study.guests) },
                { icon: CalendarDays, label: "Date", value: study.date },
                { icon: MapPin, label: "Area", value: location?.name ?? study.area },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="px-3 py-6">
                  <Icon aria-hidden className="mx-auto size-4 text-copper-deep" />
                  <dd className="font-display mt-2 text-lg text-ink sm:text-xl">{value}</dd>
                  <dt className="mt-0.5 font-sans text-[0.56rem] font-semibold uppercase tracking-[0.22em] text-ink-soft">{label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* STAR story blocks */}
          <div className="mx-auto mt-16 max-w-2xl space-y-11">
            {storyBlocks(study).map((block, i) => (
              <Reveal key={block.heading} delay={0.1 + i * 0.06}>
                <div className="border-l-2 border-copper/40 pl-7">
                  <h2 className="font-sans text-[0.66rem] font-semibold uppercase tracking-[var(--tracking-kicker)] text-copper-deep">
                    {block.heading}
                  </h2>
                  <p className="mt-3.5 text-pretty text-lg leading-relaxed text-ink-soft">{block.text}</p>
                </div>
              </Reveal>
            ))}

            {/* Pull-quote testimonial */}
            <Reveal delay={0.2}>
              <figure className="slab grain relative isolate p-10 text-foam shadow-[var(--shadow-plate-lg)]">
                <blockquote className="font-display text-2xl italic leading-snug">“{study.quote.text}”</blockquote>
                <figcaption className="mt-5 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">
                  {study.quote.name} — {study.quote.role}
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* Photo gallery */}
          <ul className="mt-16 grid gap-6 sm:grid-cols-3">
            {study.gallery.map((photo, i) => (
              <Reveal as="li" key={photo.src + i} delay={i * 0.08}>
                <div className="relative aspect-[4/3] overflow-hidden shadow-[var(--shadow-plate)]">
                  <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 640px) 30vw, 100vw" className="object-cover" />
                </div>
              </Reveal>
            ))}
          </ul>

          {/* Cross-links — every case study pumps equity into all three axes */}
          <Reveal delay={0.1}>
            <nav aria-label="Plan one like it" className="mt-16 border-t border-ink/10 pt-10">
              <h2 className="font-sans text-[0.66rem] font-semibold uppercase tracking-[var(--tracking-kicker)] text-copper-deep">
                Plan one like it
              </h2>
              <ul className="mt-4 border-t border-ink/10">
                {[
                  offering && { href: `/services/${offering.slug}`, label: `${offering.label}` },
                  cuisine && { href: `/menus/${cuisine.slug}`, label: `${cuisine.name} Menu` },
                  location && { href: `/locations/${location.slug}`, label: `Catering in ${location.name}` },
                ]
                  .filter((l): l is { href: string; label: string } => Boolean(l))
                  .map((link) => (
                    <li key={link.href}>
                      <LatticeLink href={link.href} title={link.label} />
                    </li>
                  ))}
              </ul>
            </nav>
          </Reveal>
        </Container>
      </Section>

      <QuoteCtaCard from={`case-study-${study.slug}`} event={study.eventType} title="Plan one like it" image={study.image} imageAlt={study.imageAlt} />
    </>
  );
}
