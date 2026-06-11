/* Types for the structure.md IA: three product axes (event / cuisine / place),
   an evidence layer, attribute pages, and one conversion endpoint. */

export type AttributeTag =
  | "halal"
  | "kosher"
  | "vegan"
  | "vegetarian"
  | "gluten-free"
  | "boxed-lunch"
  | "breakfast";

export type OfferingKind = "event" | "program" | "tool";

/** One row of the `catering` table — an event type, program, or tool. */
export interface Offering {
  slug: string;
  label: string;
  short: string;
  blurb: string;
  image: string;
  imageAlt: string;
  kind: OfferingKind;
  startingPrice?: number;
  leadTime?: string;
  allowsCustom?: boolean;
}

export interface Dish {
  name: string;
  description: string;
  price: number;
  image: string;
  imageAlt: string;
  serves?: string;
  tags?: AttributeTag[];
}

export interface MenuCategory {
  name: string;
  dishes: Dish[];
}

/** One cuisine program — a `/menus/[slug]` product page. */
export interface Cuisine {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  categories: MenuCategory[];
}

export interface PackageTier {
  name: string;
  pricePerPerson: number;
  minGuests: number;
  inclusions: string[];
}

/** A curated event×cuisine combo — default-deny: only real pairings exist. */
export interface Combo {
  event: string;
  cuisine: string;
  title: string;
  blurb: string;
  packages?: PackageTier[];
}

export interface AreaLocation {
  slug: string;
  name: string;
  headline: string;
  about: string[];
  leadTime: string;
  popularEvents: string[];
  nearby: string[];
  image: string;
  imageAlt: string;
}

/** Evidence: a real (fictional) catered event, told STAR-style. */
export interface CaseStudy {
  slug: string;
  title: string;
  eventType: string;
  area: string;
  menuSlug: string;
  venue: string;
  guests: number;
  date: string;
  summary: string;
  brief: string;
  approach: string;
  onTheDay: string;
  outcome: string;
  quote: { text: string; name: string; role: string };
  image: string;
  imageAlt: string;
  gallery: { src: string; alt: string }[];
}

export interface AttributePageDef {
  slug: string;
  tag: AttributeTag;
  name: string;
  h1: string;
  promise: string;
  specifics: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  event: string;
  stars: number;
  platform: string;
  featured?: boolean;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface ServiceStyle {
  slug: string;
  name: string;
  range: [number, number];
  blurb: string;
  includes: string[];
}

export interface Program {
  slug: string;
  name: string;
  blurb: string;
  image: string;
  imageAlt: string;
  included: { title: string; text: string }[];
  testimonial: Testimonial;
}

export type GalleryCategory = "weddings" | "corporate" | "private-events" | "food";

export interface GalleryImage {
  src: string;
  alt: string;
  category: GalleryCategory;
  aspect: "portrait" | "landscape" | "square";
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}
