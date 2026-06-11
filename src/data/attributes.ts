import type { AttributePageDef } from "@/types";

/** The 7 EARNED attribute pages — veto-criteria queries with real demand.
 *  Every other tag rightly stays a filter (default-deny). Dish proof on
 *  these pages is derived from dish tags, never asserted. */
export const attributePages: AttributePageDef[] = [
  {
    slug: "halal-catering-los-angeles",
    tag: "halal",
    name: "Halal",
    h1: "Halal Catering in Los Angeles",
    promise: "Zabiha-sourced proteins from named suppliers, separate prep lines, and per-dish labeling — reassurance in writing, not in passing.",
    specifics: [
      "Proteins sourced from certified zabiha suppliers, documentation available on request",
      "Dedicated prep lines and utensils; no cross-contact with non-halal proteins",
      "Per-dish labels at service plus a printed sourcing sheet for the host",
      "No alcohol used in any halal-marked preparation, including deglazing",
    ],
  },
  {
    slug: "kosher-catering-los-angeles",
    tag: "kosher",
    name: "Kosher-Style",
    h1: "Kosher-Style Catering in Los Angeles",
    promise: "Kosher-style service with full transparency: separated dairy and meat courses, certified-source ingredients, and honest labeling about what we are — and aren't.",
    specifics: [
      "Kosher-style (not certified): we say so plainly and document every ingredient",
      "Meat and dairy courses separated through prep, plating, and service",
      "Certified-kosher base ingredients where marked; supplier list provided",
      "For certified events we partner with a hashgacha-supervised commissary — ask early",
    ],
  },
  {
    slug: "vegan-catering-los-angeles",
    tag: "vegan",
    name: "Vegan",
    h1: "Vegan Catering in Los Angeles",
    promise: "Vegan mains that headline, not apologize — built as first-class dishes, with honest derivation: a menu is only vegan here if every dish in it is.",
    specifics: [
      "Vegan dishes are designed as mains, never as the salad nobody chose",
      "Dedicated prep surfaces; no shared fryers with animal products",
      "Honey, dairy, and egg derivatives flagged at ingredient level",
      "Full-menu vegan events get the same tasting session as any wedding",
    ],
  },
  {
    slug: "vegetarian-catering-los-angeles",
    tag: "vegetarian",
    name: "Vegetarian",
    h1: "Vegetarian Catering in Los Angeles",
    promise: "Seven kitchens' worth of vegetarian depth — from jeweled rice to wheel-finished pasta — with rennet, gelatin, and stock bases tracked per dish.",
    specifics: [
      "Cheese rennet and gelatin tracked and labeled per dish",
      "Vegetable stocks built in-house; no hidden meat bases",
      "Every event menu carries at least one vegetarian main by default",
      "Vegetarian tasting available for fully vegetarian events",
    ],
  },
  {
    slug: "gluten-free-catering-los-angeles",
    tag: "gluten-free",
    name: "Gluten-Free",
    h1: "Gluten-Free Catering in Los Angeles",
    promise: "Celiac-grade discipline, not gluten-light marketing — dedicated prep zones, sealed service, and allergen sheets for every dish on the table.",
    specifics: [
      "Dedicated gluten-free prep zone with separate boards, pans, and fryer oil",
      "Celiac-flagged guests get sealed, individually plated service on request",
      "Allergen sheet for every menu, listing gluten sources down to soy sauce",
      "Cross-contact protocol briefed to service staff before every event",
    ],
  },
  {
    slug: "boxed-lunch-catering-los-angeles",
    tag: "boxed-lunch",
    name: "Boxed Lunch",
    h1: "Boxed Lunch Catering in Los Angeles",
    promise: "Individually packed, clearly labeled, and stacked by team or classroom — boxed service that scales from a site crew to a school district.",
    specifics: [
      "Every box labeled with contents, allergens, and dietary marks",
      "Sorted and stacked by team, floor, or classroom before delivery",
      "Compostable packaging as the default, not the upcharge",
      "Orders to 1,000+ boxes with staggered delivery windows",
    ],
  },
  {
    slug: "breakfast-catering-los-angeles",
    tag: "breakfast",
    name: "Breakfast",
    h1: "Breakfast Catering in Los Angeles",
    promise: "Crew calls, board meetings, and morning programs — hot breakfast that arrives before the city does, labeled and ready at 6am if that's the call time.",
    specifics: [
      "Delivery windows from 5:30am for production crew calls",
      "Hot lines (scrambles, burritos) and cold boards (oats, fruit, pastry)",
      "Coffee program with proper urns, oat milk standard",
      "Standing weekly breakfast orders get program pricing",
    ],
  },
];

export function getAttributePage(slug: string) {
  return attributePages.find((a) => a.slug === slug);
}
