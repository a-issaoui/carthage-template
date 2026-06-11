import type { ServiceStyle } from "@/types";

/** Per-person ranges by service style — "live" numbers (computed from the
 *  package catalog in the real system; representative figures here). */
export const serviceStyles: ServiceStyle[] = [
  {
    slug: "drop-off",
    name: "Drop-Off Catering",
    range: [13, 32],
    blurb: "Trays and boxes delivered, set, and labeled — no on-site staff. The honest workhorse for offices, schools, and crews.",
    includes: ["Food, packaging & delivery", "Setup and labeling included", "Allergen sheets with every order", "Compostable service standard"],
  },
  {
    slug: "stations",
    name: "Chef Stations & Buffet",
    range: [28, 74],
    blurb: "Live equipment and chef attendants — trompos, smokers, pasta wheels. The format premieres and company parties book.",
    includes: ["Chef-attended live stations", "Service equipment & refresh cycles", "Service staff scaled to headcount", "Station styling included"],
  },
  {
    slug: "plated",
    name: "Plated Full-Service",
    range: [68, 167],
    blurb: "Composed courses served to seat by uniformed staff — weddings, galas, and the dinners deals close over.",
    includes: ["Composed plating, served to seat", "Captains, servers & sommeliers", "China, glassware & linen rentals", "On-site coordination & minute-map"],
  },
];

export const overallRange: [number, number] = [
  Math.min(...serviceStyles.map((s) => s.range[0])),
  Math.max(...serviceStyles.map((s) => s.range[1])),
];
