import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { CaseStudyExplorer } from "@/sections/events/case-study-explorer";
import { QuoteCtaCard } from "@/components/blocks/quote-cta-card";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Events We've Actually Catered — Case Studies",
  description:
    "The real record: weddings, premieres, summits, and family tables across Los Angeles — guest counts, venues, what went wrong-and-right, and what the client said.",
  alternates: { canonical: "/events" },
};

export default function EventsHubPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Events", path: "/events" }])} />
      <PageHero
        kicker="The Record"
        title="Events we've"
        accent="actually catered."
        lede="Not a highlight reel — the operational record. Guest counts, venues, the thing that went sideways, and how the evening landed anyway."
      />
      <CaseStudyExplorer />
      <QuoteCtaCard from="events-hub" title="Put your event on this page" />
    </>
  );
}
