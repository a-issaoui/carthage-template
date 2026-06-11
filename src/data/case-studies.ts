import { img } from "@/lib/images";
import type { CaseStudy } from "@/types";

/** The evidence layer — 4 case studies told STAR-style
 *  (brief / approach / on the day / outcome), each cross-linked
 *  into all three axes (event type, cuisine, area). */
export const caseStudies: CaseStudy[] = [
  {
    slug: "malibu-cliffside-wedding",
    title: "A Cliffside Wedding Above the Pacific",
    eventType: "wedding",
    area: "santa-monica",
    menuSlug: "mediterranean",
    venue: "Private Estate, Malibu",
    guests: 180,
    date: "October 2025",
    summary: "A 180-guest estate wedding where the entire kitchen was built on-site, forty meters from the cliff edge.",
    brief: "No permanent kitchen, a single switchback access road, and a couple who wanted a twelve-dish mezze hour followed by a plated four-course dinner — all timed against a Pacific sunset.",
    approach: "We staged a full field kitchen behind the olive grove: two chef stations, a dedicated cold line, and a wood-fired hearth trucked up in sections. Service ran on a minute-map rehearsed twice with the planning team.",
    onTheDay: "The marine layer burned off at 4:40pm, twenty minutes later than forecast — we slid the mezze hour back fifteen minutes and shortened the cocktail gap so dinner still met the light. Guests never knew the schedule moved.",
    outcome: "Saffron-poached halibut hit 180 tables within eleven minutes, as the sun touched the water. The planner has since placed four more weddings with us.",
    quote: {
      text: "Our guests still talk about the food before they talk about the view — and we got married on a cliff over the Pacific.",
      name: "Sofia & Daniel R.",
      role: "The couple",
    },
    image: img.weddingTent,
    imageAlt: "Elegant tented wedding reception with long candlelit tables",
    gallery: [
      { src: img.weddingFlorals, alt: "Florals and place settings at the cliffside reception" },
      { src: img.platedFine, alt: "The plated halibut course" },
      { src: img.weddingDance, alt: "First dance under string lights" },
    ],
  },
  {
    slug: "studio-premiere-gala",
    title: "A Premiere Gala for Six Hundred",
    eventType: "film-production",
    area: "culver-city",
    menuSlug: "fusion",
    venue: "Studio Backlot, Culver City",
    guests: 600,
    date: "January 2026",
    summary: "A film premiere after-party where the menu had to carry a North African storyline written into the film itself.",
    brief: "Six hundred guests arriving in one wave at 10pm, press on the floor, and a creative brief that asked the food to echo the film's setting without a single cliché.",
    approach: "Eight chef-attended stations arranged as a souk of light — charred citrus lamb, saffron arancini with cotija and macha, pomegranate-glazed duck — each station plated to camera-readiness.",
    onTheDay: "The wave hit at 10:04pm. Stations refreshed on eight-minute cycles for three hours; the test-kitchen arancini ran out twice and was re-fired from the support truck both times without a visible gap.",
    outcome: "The studio's events team booked us for three more premieres before the night ended.",
    quote: {
      text: "The most precise catering operation I have worked with in fifteen years of producing premieres. They run a kitchen like a film set.",
      name: "Marcus Lee",
      role: "Head of Events, major studio",
    },
    image: img.galaSparklers,
    imageAlt: "Evening gala celebration with sparkling lights",
    gallery: [
      { src: img.galaLights, alt: "The backlot under festival lighting" },
      { src: img.cocktailsBar, alt: "The craft cocktail bar in service" },
      { src: img.tapasSpread, alt: "A station spread mid-refresh" },
    ],
  },
  {
    slug: "bel-air-garden-anniversary",
    title: "Fifty Years, One Long Table",
    eventType: "private-events",
    area: "beverly-hills",
    menuSlug: "mediterranean",
    venue: "Private Residence, Bel Air",
    guests: 42,
    date: "May 2025",
    summary: "A golden-anniversary dinner for 42 family members at a single sixty-foot table under the jacarandas.",
    brief: "The couple's families span four continents and five dietary traditions — kosher-style, halal, vegan, gluten-free, and a grandmother's Sicilian recipes that had to appear, faithfully, beside them all.",
    approach: "One menu, five parallel architectures. Every course existed in every tradition, plated identically, so no guest ever received a 'special meal.' The grandmother's caponata was recreated from her handwritten card.",
    onTheDay: "She tasted the caponata, called the chef out of the kitchen, and corrected exactly one thing: more celery. We fixed it for course two.",
    outcome: "Forty-two guests, five dietary traditions, zero exceptions felt. The family books us every May now.",
    quote: {
      text: "Five dietary traditions at one table and not a single guest felt like an exception. That is not catering — that is diplomacy.",
      name: "Leila H.",
      role: "Host, the couple's daughter",
    },
    image: img.longTableOutdoor,
    imageAlt: "A long outdoor dinner table set beneath trees",
    gallery: [
      { src: img.dinnerOverhead, alt: "The sixty-foot table from above" },
      { src: img.rusticSpread, alt: "Family-style platters mid-service" },
      { src: img.dessertBerries, alt: "The dessert course" },
    ],
  },
  {
    slug: "downtown-executive-summit",
    title: "Three Days Feeding a Summit",
    eventType: "corporate",
    area: "downtown-los-angeles",
    menuSlug: "mediterranean",
    venue: "Penthouse Conference Floor, DTLA",
    guests: 90,
    date: "July 2025",
    summary: "Breakfast through late-night service for a three-day executive summit — ninety principals, zero repeated dishes.",
    brief: "Eighteen consecutive service windows across three days, in a penthouse with a residential-grade kitchen, for a room of executives who had, between them, eaten everywhere.",
    approach: "A rotating brigade of six chefs, menus engineered around the agenda's energy curve — lighter before negotiations, expansive at the close. Fifty-four dishes over three days, none repeated.",
    onTheDay: "Day two's lunch window shrank from thirty minutes to nineteen when a session ran long. We pivoted the plated course to composed bowls in the service corridor and still cleared on schedule.",
    outcome: "Day three's closing dinner ran on a single nod from the COO — service invisible, conversation never interrupted.",
    quote: {
      text: "They engineered three days of menus around our agenda's energy. By the closing dinner, the deal was already done.",
      name: "Katherine Vance",
      role: "Chief of Staff, Fortune 500",
    },
    image: img.dinnerOverhead,
    imageAlt: "Overhead view of an elegant shared dinner table",
    gallery: [
      { src: img.platedOverhead, alt: "A composed lunch course" },
      { src: img.chefTeam, alt: "The brigade plating in the service corridor" },
      { src: img.minimalPlate, alt: "Day-one breakfast course" },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export function caseStudiesForEvent(eventType: string) {
  return caseStudies.filter((c) => c.eventType === eventType);
}

export function caseStudiesForArea(area: string) {
  return caseStudies.filter((c) => c.area === area);
}
