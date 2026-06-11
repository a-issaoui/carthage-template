import { img } from "@/lib/images";
import type { Offering } from "@/types";

/** The `catering` table — 8 event types, 2 programs, 1 tool. 11 offering cards on home. */
export const offerings: Offering[] = [
  {
    slug: "wedding",
    label: "Wedding Catering",
    short: "Weddings",
    blurb: "Estate ceremonies to ballroom receptions — tastings, captains, and a plated dinner timed against sunset.",
    image: img.weddingBallroom,
    imageAlt: "Candlelit wedding reception in a draped ballroom",
    kind: "event",
    startingPrice: 68,
    leadTime: "4–9 months typical",
    allowsCustom: true,
  },
  {
    slug: "corporate",
    label: "Corporate Catering",
    short: "Corporate",
    blurb: "Launches, summits, and executive dinners — dietary mapping, silent service, and food worth the agenda.",
    image: img.corporateCrowd,
    imageAlt: "Guests at an evening corporate reception",
    kind: "event",
    startingPrice: 24,
    leadTime: "1–4 weeks typical",
    allowsCustom: true,
  },
  {
    slug: "private-events",
    label: "Private Event Catering",
    short: "Private Events",
    blurb: "Birthdays, anniversaries, garden parties — a dedicated chef and a team that disappears into the evening.",
    image: img.dinnerToast,
    imageAlt: "Friends toasting over a candlelit private dinner",
    kind: "event",
    startingPrice: 38,
    leadTime: "2–6 weeks typical",
    allowsCustom: true,
  },
  {
    slug: "government",
    label: "Government Catering",
    short: "Government",
    blurb: "Procurement-ready: COIs on file, per-head invoicing, allergen sheets, and on-time delivery to the minute.",
    image: img.dinnerOverhead,
    imageAlt: "A composed working dinner table from above",
    kind: "event",
    startingPrice: 19,
    leadTime: "1–3 weeks typical",
  },
  {
    slug: "film-production",
    label: "Film Production Catering",
    short: "Film & TV",
    blurb: "Run-of-show catering for sets and backlots — crew meals on cycle, talent tables, and wrap parties.",
    image: img.galaSparklers,
    imageAlt: "Evening celebration with sparkling lights on a backlot",
    kind: "event",
    startingPrice: 22,
    leadTime: "72 hours minimum",
    allowsCustom: true,
  },
  {
    slug: "school-lunch",
    label: "School Lunch Catering",
    short: "Schools",
    blurb: "USDA-aware menus kids actually eat — nut-free lines, portion compliance, and labeled boxed service.",
    image: img.saladBowl,
    imageAlt: "A fresh composed lunch bowl",
    kind: "event",
    startingPrice: 11,
    leadTime: "1–2 weeks typical",
  },
  {
    slug: "healthcare",
    label: "Healthcare Catering",
    short: "Healthcare",
    blurb: "Hospital and clinic service — texture-modified tracks, allergen rigor, and staff-appreciation programs.",
    image: img.mezzeOverhead,
    imageAlt: "An overhead spread of fresh seasonal dishes",
    kind: "event",
    startingPrice: 16,
    leadTime: "1–2 weeks typical",
  },
  {
    slug: "non-profit",
    label: "Non-Profit & Gala Catering",
    short: "Non-Profit",
    blurb: "Fundraisers and galas that respect a budget line — sponsor-friendly menus and donor-grade presentation.",
    image: img.partyToast,
    imageAlt: "Guests raising glasses at a fundraising dinner",
    kind: "event",
    startingPrice: 28,
    leadTime: "3–8 weeks typical",
    allowsCustom: true,
  },
  {
    slug: "office-meal-program",
    label: "Office Meal Program",
    short: "Office Meals",
    blurb: "Recurring office lunch on a weekly rotation — one invoice, dietary tracks, headcount that flexes.",
    image: img.buffetTrays,
    imageAlt: "Catering trays set for an office lunch service",
    kind: "program",
    startingPrice: 14,
    leadTime: "Starts within 2 weeks",
  },
  {
    slug: "weekly-meal",
    label: "Weekly Meal Service",
    short: "Weekly Meals",
    blurb: "Chef-cooked family meals delivered weekly — rotating menus, labeled and ready, no subscription games.",
    image: img.rusticSpread,
    imageAlt: "A chef-styled table of prepared family dishes",
    kind: "program",
    startingPrice: 13,
    leadTime: "Starts within 1 week",
  },
  {
    slug: "custom-package",
    label: "Build a Custom Spread",
    short: "Custom Spread",
    blurb: "Pick dishes across all seven kitchens and get a quote for exactly that — no fixed package required.",
    image: img.tapasSpread,
    imageAlt: "Shared mezze and small plates across a table",
    kind: "tool",
  },
];

export const eventOfferings = offerings.filter((o) => o.kind === "event");
export const programOfferings = offerings.filter((o) => o.kind === "program");

export function offeringHref(o: Offering): string {
  if (o.kind === "event") return `/services/${o.slug}`;
  if (o.kind === "program") return `/programs/${o.slug}`;
  return `/${o.slug}`;
}

export function getOffering(slug: string) {
  return offerings.find((o) => o.slug === slug);
}
