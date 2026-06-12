import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { img } from "@/lib/images";
import { site } from "@/lib/site";
import { galleryImages } from "@/data/gallery";
import { PageHero } from "@/components/shared/page-hero";
import { GalleryGrid } from "@/sections/gallery/gallery-grid";
import { QuoteCtaCard } from "@/components/blocks/quote-cta-card";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/shared/reveal";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Gallery — The Food, the Rooms, the Plating",
  description:
    "Visual diligence: Carthage Kitchen events across Los Angeles — wedding receptions, corporate galas, private dinners, and the plates themselves.",
  alternates: { canonical: "/gallery" },
};

/** Pick-an-event-format cards — kind-aware hub links above the photo grid. */
const formatCards = [
  { label: "Weddings", href: "/services/wedding", image: img.weddingBallroom, alt: "Wedding reception ballroom" },
  { label: "Corporate", href: "/services/corporate", image: img.corporateCrowd, alt: "Corporate evening reception" },
  { label: "Private Events", href: "/services/private-events", image: img.dinnerToast, alt: "Private candlelit dinner" },
  { label: "The Food", href: "/menus", image: img.platedFine, alt: "A composed tasting course" },
];

const imageObjectSchemas = galleryImages.map((g) => ({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  contentUrl: `${site.url}${g.src}`,
  caption: `${g.alt} — Carthage Kitchen catering, Los Angeles`,
  creator: { "@type": "Organization", name: site.name },
}));

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }])} />
      {imageObjectSchemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      <PageHero
        kicker="Gallery"
        title="Visual"
        accent="diligence."
        lede="The food, the rooms, the plating — photographed as served, not staged after. Browse by format, then go see what each one costs."
      />

      <section className="limewash py-12 sm:py-16">
        <Container wide>
          <ul className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {formatCards.map((card, i) => (
              <Reveal as="li" key={card.href} delay={i * 0.07}>
                <Link href={card.href} className="group relative block aspect-[4/3] overflow-hidden shadow-[var(--shadow-plate)]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 23vw, 45vw"
                    className="object-cover transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-abyss/80 to-transparent" />
                  <span className="font-display absolute bottom-4 left-4 flex items-center gap-2 text-xl text-foam">
                    {card.label}
                    <ArrowUpRight aria-hidden className="size-4 text-gold transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <GalleryGrid />
      <QuoteCtaCard
        from="gallery"
        title="Picture your own event"
        body="Everything above was photographed as served. Your evening gets the same kitchen — and the same camera-readiness."
        image={img.galaLights}
        imageAlt="An evening event under festival lighting"
      />
    </>
  );
}
