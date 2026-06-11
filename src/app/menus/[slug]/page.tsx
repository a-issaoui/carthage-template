import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LatticeLink } from "@/components/blocks/lattice-link";
import { cuisines, getCuisine } from "@/data/cuisines";
import { combosForCuisine } from "@/data/combos";
import { getOffering } from "@/data/offerings";
import { site } from "@/lib/site";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/blocks/breadcrumbs";
import { DishListSection } from "@/components/blocks/dish-list-section";
import { QuoteCtaCard } from "@/components/blocks/quote-cta-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return cuisines.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cuisine = getCuisine(slug);
  if (!cuisine) return {};
  return {
    title: `${cuisine.name} Catering Menu — Los Angeles`,
    description: `${cuisine.description.slice(0, 150)}`,
    alternates: { canonical: `/menus/${cuisine.slug}` },
  };
}

export default async function CuisineMenuPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cuisine = getCuisine(slug);
  if (!cuisine) notFound();

  const eventLinks = combosForCuisine(cuisine.slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Menus", path: "/menus" },
    { name: cuisine.name, path: `/menus/${cuisine.slug}` },
  ];

  const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${cuisine.name} Catering Menu`,
    description: cuisine.description,
    provider: { "@id": `${site.url}/#business` },
    hasMenuSection: cuisine.categories.map((category) => ({
      "@type": "MenuSection",
      name: category.name,
      hasMenuItem: category.dishes.map((dish) => ({
        "@type": "MenuItem",
        name: dish.name,
        description: dish.description,
        offers: { "@type": "Offer", price: dish.price, priceCurrency: "USD" },
      })),
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={menuSchema} />
      <PageHero
        kicker={`Cuisine Program · ${cuisine.name}`}
        title={`${cuisine.name} Catering`}
        lede={cuisine.description}
        image={cuisine.image}
        imageAlt={cuisine.imageAlt}
      />
      <Breadcrumbs items={crumbs} />

      {/* The menu IS the product */}
      <DishListSection categories={cuisine.categories} />

      {/* Cuisine → combo crawl path */}
      {eventLinks.length > 0 && (
        <Section tone="parchment" className="py-14 sm:py-18">
          <Container wide>
            <SectionHeading
              kicker="By Occasion"
              title={`${cuisine.name}, for your event.`}
              lede="The occasions we've paired this program with — packages, lead times, and proof on each page."
            />
            <ul className="mx-auto mt-8 max-w-3xl border-t border-ink/10">
              {eventLinks.map((combo) => {
                const offering = getOffering(combo.event);
                return (
                  <li key={combo.event}>
                    <LatticeLink
                      href={`/services/${combo.event}/${combo.cuisine}`}
                      title={`${cuisine.name} for ${offering?.short}`}
                      sub={combo.packages ? `from $${Math.min(...combo.packages.map((p) => p.pricePerPerson))}/guest` : "built to brief"}
                    />
                  </li>
                );
              })}
            </ul>
            <Reveal delay={0.2}>
              <p className="mt-8 text-sm text-ink-soft">
                Different occasion?{" "}
                <Link href="/services" className="font-semibold text-copper-deep underline decoration-copper/40 underline-offset-4 hover:text-copper">
                  Every event type we cater →
                </Link>
              </p>
            </Reveal>
          </Container>
        </Section>
      )}

      <QuoteCtaCard
        from={`menu-${cuisine.slug}`}
        menu={cuisine.slug}
        title={`Get a ${cuisine.name} quote`}
        body="Convert at the peak of appetite — date, headcount, and we'll price this menu for your exact event."
      />
    </>
  );
}
