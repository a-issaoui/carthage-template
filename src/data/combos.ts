import type { Combo } from "@/types";

/** 11 curated event×cuisine combos — default-deny: each is a real pairing
 *  with packages or genuine menu content, never auto-generated. */
export const combos: Combo[] = [
  {
    event: "wedding",
    cuisine: "persian",
    title: "Persian Wedding Catering",
    blurb: "Sofreh-side service, kabob over flame, and tahdig carved like a ceremony of its own.",
    packages: [
      { name: "The Sofreh", pricePerPerson: 88, minGuests: 80, inclusions: ["Mezze hour with three stations", "Koobideh, joojeh & barg service", "Tahdig & jeweled rice tableside", "Tea & bastani late service"] },
      { name: "The Golestan", pricePerPerson: 124, minGuests: 120, inclusions: ["Everything in The Sofreh", "Caviar & flatbread welcome", "Live saffron ice-cream cart", "Sofreh styling partnership"] },
    ],
  },
  {
    event: "wedding",
    cuisine: "mediterranean",
    title: "Mediterranean Wedding Catering",
    blurb: "The house program: mezze hour, plated halibut or lamb, and a late-night spread that keeps the floor moving.",
    packages: [
      { name: "The Harbor", pricePerPerson: 78, minGuests: 60, inclusions: ["Twelve-dish mezze hour", "Plated two-choice main", "Wedding cake plated service", "Late-night mezze table"] },
      { name: "The Carthage", pricePerPerson: 115, minGuests: 100, inclusions: ["Everything in The Harbor", "Raw bar over carved ice", "Lamb carved under brass lamps", "Sommelier wine service"] },
    ],
  },
  {
    event: "wedding",
    cuisine: "italian",
    title: "Italian Wedding Catering",
    blurb: "Rehearsal-dinner warmth at reception scale — pasta finished in the wheel, branzino for the long table.",
    packages: [
      { name: "La Tavola", pricePerPerson: 82, minGuests: 60, inclusions: ["Antipasti & crudo hour", "Wheel-finished pasta course", "Plated branzino or short rib", "Tiramisu & espresso service"] },
    ],
  },
  {
    event: "corporate",
    cuisine: "mexican",
    title: "Mexican Corporate Catering",
    blurb: "The trompo on your terrace — taquiza stations engineered for a 90-minute all-hands window.",
    packages: [
      { name: "Taquiza Office", pricePerPerson: 28, minGuests: 30, inclusions: ["Two taco lines, one vegan", "Salsa bar built that morning", "Agua frescas service", "45-minute service window"] },
      { name: "Premiere Trompo", pricePerPerson: 46, minGuests: 75, inclusions: ["Al pastor carved live", "Churro bar finale", "Branded menu cards", "Late-call staffing"] },
    ],
  },
  {
    event: "corporate",
    cuisine: "mediterranean",
    title: "Mediterranean Corporate Catering",
    blurb: "Boardroom-silent service: composed lunches and working dinners with full dietary mapping.",
    packages: [
      { name: "The Composed Lunch", pricePerPerson: 24, minGuests: 12, inclusions: ["Plated in under twelve minutes", "Three mains incl. vegan", "Allergen sheet per guest", "Zero-proof beverage program"] },
    ],
  },
  {
    event: "corporate",
    cuisine: "bbq",
    title: "BBQ Corporate Catering",
    blurb: "Offset smokers in the parking structure, brisket at the all-hands — morale by the pound.",
    packages: [
      { name: "The Company Picnic", pricePerPerson: 32, minGuests: 50, inclusions: ["Brisket & ribs carved live", "Three California sides", "Cobbler in cast iron", "Compostable service throughout"] },
    ],
  },
  {
    event: "film-production",
    cuisine: "american",
    title: "Film Production American Catering",
    blurb: "Crew meals on cycle — breakfast at call, hot lunch in the window, second meal that beats the truck.",
    packages: [
      { name: "Run of Show", pricePerPerson: 26, minGuests: 40, inclusions: ["Breakfast at crew call", "Hot lunch, 30-minute window", "Second-meal swing service", "Per-day invoicing"] },
    ],
  },
  {
    event: "film-production",
    cuisine: "bbq",
    title: "Film Production BBQ Catering",
    blurb: "The wrap-party standard: smokers on the backlot, brisket for two hundred, nobody leaves early.",
  },
  {
    event: "private-events",
    cuisine: "fusion",
    title: "Fusion Private Event Catering",
    blurb: "Test-kitchen menus for hosts who want plates nobody else in LA has served.",
  },
  {
    event: "government",
    cuisine: "american",
    title: "Government American Catering",
    blurb: "Procurement-clean comfort service — labeled, portioned, invoiced per head, delivered to the minute.",
    packages: [
      { name: "The Session", pricePerPerson: 19, minGuests: 25, inclusions: ["Boxed or buffet service", "Allergen sheets & labels", "Per-head invoicing", "COI on file before delivery"] },
    ],
  },
  {
    event: "school-lunch",
    cuisine: "american",
    title: "School Lunch American Catering",
    blurb: "USDA-aware menus kids finish — nut-free lines, portion compliance, labeled boxes by classroom.",
    packages: [
      { name: "The Semester", pricePerPerson: 11, minGuests: 100, inclusions: ["Weekly rotating menu", "Nut-free facility line", "Portion-compliant boxes", "Classroom-sorted delivery"] },
    ],
  },
];

export function getCombo(event: string, cuisine: string) {
  return combos.find((c) => c.event === event && c.cuisine === cuisine);
}

export function combosForEvent(event: string) {
  return combos.filter((c) => c.event === event);
}

export function combosForCuisine(cuisine: string) {
  return combos.filter((c) => c.cuisine === cuisine);
}
