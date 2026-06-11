import type { Metadata } from "next";
import { cuisines } from "@/data/cuisines";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/shared/reveal";
import { MenuCard } from "@/components/blocks/menu-card";
import { QuoteCtaCard } from "@/components/blocks/quote-cta-card";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Catering Menus — 7 Cuisines, One Kitchen",
  description:
    "Browse Carthage Kitchen's catering menus for Los Angeles: Mediterranean, BBQ, Mexican, Persian, Italian, American, and Fusion — complete dishes with real prices.",
  alternates: { canonical: "/menus" },
};

export default function MenusHubPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Menus", path: "/menus" }])} />
      <PageHero
        kicker="The Menus"
        title="One chef."
        accent="Seven cuisines."
        lede="Every program below is a complete, priced menu — cooked from scratch in the same chef-led kitchen, not subcontracted across town."
      />
      <Section tone="ivory">
        <Container wide>
          <ul className="grid gap-7 sm:grid-cols-2">
            {cuisines.map((cuisine, i) => (
              <Reveal as="li" key={cuisine.slug} delay={(i % 2) * 0.1}>
                <MenuCard cuisine={cuisine} large />
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>
      <QuoteCtaCard
        from="menus-hub"
        title="Get a tailored menu"
        body="Tell us the occasion and the appetite — we'll build a menu across any of these kitchens and price it per person."
      />
    </>
  );
}
