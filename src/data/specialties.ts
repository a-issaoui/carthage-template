import { img } from "@/lib/images";

/** Signature dishes with live prices — the honesty signal on home. */
export const specialties = [
  { name: "Saffron-Poached Halibut", price: 34, cuisine: "Mediterranean", cuisineSlug: "mediterranean", description: "Fennel three ways, broth finished at the table.", image: img.platedOverhead, imageAlt: "Composed halibut course from above" },
  { name: "18-Hour Oak Brisket", price: 26, cuisine: "BBQ", cuisineSlug: "bbq", description: "Carved on-site, espresso bark, jus.", image: img.ribs, imageAlt: "Slow-smoked brisket with charred bark" },
  { name: "Al Pastor off the Trompo", price: 18, cuisine: "Mexican", cuisineSlug: "mexican", description: "Pineapple, white onion, cilantro — carved live.", image: img.tapasSpread, imageAlt: "A vibrant taco spread" },
  { name: "Koobideh", price: 22, cuisine: "Persian", cuisineSlug: "persian", description: "Twice-ground beef, grilled tomato, sumac onion.", image: img.steak, imageAlt: "Charcoal-grilled kabob plate" },
  { name: "Tagliatelle al Limone", price: 19, cuisine: "Italian", cuisineSlug: "italian", description: "Hand-cut, finished in the parmesan wheel.", image: img.platedFine, imageAlt: "Hand-cut pasta on porcelain" },
  { name: "Koobideh Taco", price: 16, cuisine: "Fusion", cuisineSlug: "fusion", description: "Sumac onion, tahdig crumble, herb salsa.", image: img.minimalPlate, imageAlt: "A test-kitchen fusion plate" },
  { name: "Orange-Blossom Mahalabia", price: 8, cuisine: "Mediterranean", cuisineSlug: "mediterranean", description: "Silken milk pudding, kumquat, pistachio.", image: img.dessertBerries, imageAlt: "A composed dessert with berries" },
] as const;
