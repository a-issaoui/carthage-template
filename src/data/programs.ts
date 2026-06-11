import { img } from "@/lib/images";
import type { Program } from "@/types";

/** Recurring-revenue programs — a different decision shape (cadence,
 *  invoicing, rotation), so a separate URL namespace from events. */
export const programs: Program[] = [
  {
    slug: "office-meal-program",
    name: "Office Meal Program",
    blurb:
      "Recurring office lunch on a rotation your team won't get bored of — one invoice, dietary tracks for every hire, and headcount that flexes week to week without penalty.",
    image: img.buffetTrays,
    imageAlt: "Labeled catering trays set for an office lunch service",
    included: [
      { title: "Rotating menus", text: "A six-week rotation across all seven kitchens — nobody sees the same lunch twice in a month and a half." },
      { title: "Dietary tracks", text: "Vegan, halal, and gluten-free lines run parallel every single day, labeled per dish with allergen sheets." },
      { title: "One invoice", text: "Monthly consolidated billing with per-day headcounts itemized — built for office managers, not accountants." },
      { title: "Flexible delivery", text: "Headcount locks at 10am the day before; holiday weeks pause with two days' notice, no penalty." },
    ],
    testimonial: {
      quote: "Our lunch program went from a weekly complaint to a recruiting line. The rotation is genuinely good — people schedule office days around it.",
      name: "Dana Okafor",
      role: "Workplace Experience Lead",
      event: "Office Meal Program · 140 seats",
      stars: 5,
      platform: "Google",
    },
  },
  {
    slug: "weekly-meal",
    name: "Weekly Meal Service",
    blurb:
      "Chef-cooked family meals delivered once a week — a rotating menu of mains and sides, labeled and fridge-ready. No subscription games, pause whenever you like.",
    image: img.rusticSpread,
    imageAlt: "A chef-styled table of prepared family dishes",
    included: [
      { title: "Weekly rotation", text: "Four mains and six sides each week, drawn from the whole kitchen — Mediterranean one week, Persian the next." },
      { title: "Dietary architecture", text: "Each menu publishes vegan, gluten-free, and halal swaps; allergies are flagged at the household level, permanently." },
      { title: "Simple billing", text: "Weekly card billing, itemized; skip a week from a text message. No contracts, no cancellation theater." },
      { title: "Labeled & ready", text: "Every container dated and labeled with reheat times — Sunday delivery, meals through Friday." },
    ],
    testimonial: {
      quote: "It is restaurant food that survives a Tuesday. The kids ask for the koobideh week by name.",
      name: "The Harmon Family",
      role: "Weekly Meal clients since 2024",
      event: "Weekly Meal Service · family of five",
      stars: 5,
      platform: "Yelp",
    },
  },
];

export function getProgram(slug: string) {
  return programs.find((p) => p.slug === slug);
}
