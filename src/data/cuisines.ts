import { img } from "@/lib/images";
import type { Cuisine } from "@/types";

/** The 7 cuisine programs — one chef, one kitchen, every flavor profile.
 *  Every dish carries its own photo (SmartImage falls back to a branded
 *  holder if a source ever dies). Dish tags drive the attribute-page
 *  proof grids — derived, never asserted. */
export const cuisines: Cuisine[] = [
  {
    slug: "mediterranean",
    name: "Mediterranean",
    tagline: "The house cuisine — saffron, smoke, and the old trade routes.",
    description:
      "Our founding kitchen: Tunisian roots under French technique. Mezze spreads, charcoal proteins, and hand-rolled grains that anchor weddings and galas across the city.",
    image: img.mezzeOverhead,
    imageAlt: "Mediterranean mezze spread photographed from above",
    featured: true,
    categories: [
      {
        name: "Mezze & Starters",
        dishes: [
          { name: "Twelve-Dish Mezze Spread", description: "Muhammara, whipped feta, smoked baba ghanouj, market crudités.", price: 9, serves: "per guest", tags: ["vegetarian", "halal"], image: img.mezzeOverhead, imageAlt: "Twelve mezze dishes arranged from above" },
          { name: "Saffron Arancini", description: "Crisped to order, preserved-lemon aioli.", price: 6, serves: "per guest", tags: ["vegetarian", "halal"], image: img.minimalPlate, imageAlt: "Golden arancini on minimal plating" },
          { name: "Harissa Hummus Trio", description: "Classic, beet, and black-garlic, with house flatbread.", price: 55, serves: "tray · 12–15", tags: ["vegan", "vegetarian", "halal", "kosher"], image: img.saladBowl, imageAlt: "A vibrant trio of dips with fresh garnish" },
        ],
      },
      {
        name: "Mains",
        dishes: [
          { name: "Saffron-Poached Halibut", description: "Fennel three ways, broth finished at the table.", price: 34, serves: "per guest", tags: ["gluten-free", "halal"], image: img.platedOverhead, imageAlt: "Composed halibut course from above" },
          { name: "Twelve-Hour Lamb Shoulder", description: "Ras el hanout crust, smoked date jus.", price: 31, serves: "per guest", tags: ["gluten-free", "halal"], image: img.ribs, imageAlt: "Slow-cooked lamb with charred crust" },
          { name: "Aubergine Royale", description: "Whole-roasted, freekeh, fig, tahini velouté.", price: 24, serves: "per guest", tags: ["vegan", "vegetarian", "halal", "kosher"], image: img.bowl, imageAlt: "Roasted aubergine over warm grains" },
        ],
      },
      {
        name: "Sweets",
        dishes: [
          { name: "Orange-Blossom Mahalabia", description: "Silken milk pudding, candied kumquat, pistachio.", price: 8, serves: "per guest", tags: ["vegetarian", "gluten-free", "halal"], image: img.dessertBerries, imageAlt: "A silken dessert with fruit and pistachio" },
          { name: "Date & Espresso Truffles", description: "Passed with cardamom coffee.", price: 42, serves: "tray · 24 pieces", tags: ["vegan", "vegetarian", "gluten-free", "halal", "kosher"], image: img.cocktailCraft, imageAlt: "Dark truffles beside cardamom coffee service" },
        ],
      },
    ],
  },
  {
    slug: "bbq",
    name: "BBQ",
    tagline: "Low, slow, and Californian — oak smoke over West Coast produce.",
    description:
      "Brisket and ribs out of our offset smokers, balanced by bright California sides. The crowd-pleaser program for wrap parties, company picnics, and backyard weddings.",
    image: img.ribs,
    imageAlt: "Slow-smoked ribs with charred crust on dark slate",
    featured: true,
    categories: [
      {
        name: "From the Smoker",
        dishes: [
          { name: "18-Hour Oak Brisket", description: "Carved on-site, espresso bark, jus.", price: 26, serves: "per guest", tags: ["gluten-free"], image: img.steak, imageAlt: "Carved smoked brisket with jus" },
          { name: "St. Louis Ribs", description: "Date-molasses glaze, charred scallion.", price: 24, serves: "per guest", tags: ["gluten-free", "halal"], image: img.ribs, imageAlt: "Glazed ribs with char marks" },
          { name: "Smoked Half Chicken", description: "Alabama white sauce, pickled fresno.", price: 21, serves: "per guest", tags: ["gluten-free", "halal"], image: img.platedFine, imageAlt: "Smoked chicken plated with sauce" },
        ],
      },
      {
        name: "Sides & Boards",
        dishes: [
          { name: "Charred Corn Esquites", description: "Cotija, lime crema, chile dust.", price: 48, serves: "tray · 12–15", tags: ["vegetarian", "gluten-free"], image: img.saladBowl, imageAlt: "Charred corn salad with crema" },
          { name: "Smoked Mac & Cheese", description: "Three-cheese custard, toasted crumb.", price: 52, serves: "tray · 12–15", tags: ["vegetarian"], image: img.bowl, imageAlt: "Baked mac and cheese with golden crumb" },
          { name: "Grilled Vegetable Board", description: "Seasonal market haul over romesco.", price: 58, serves: "board · 15", tags: ["vegan", "vegetarian", "gluten-free", "kosher", "halal"], image: img.rusticSpread, imageAlt: "A board of grilled seasonal vegetables" },
        ],
      },
      {
        name: "Sweets",
        dishes: [
          { name: "Bourbon Peach Cobbler", description: "Cast-iron, vanilla soft cream.", price: 7, serves: "per guest", tags: ["vegetarian"], image: img.dessertBerries, imageAlt: "Warm cobbler with soft cream" },
        ],
      },
    ],
  },
  {
    slug: "mexican",
    name: "Mexican",
    tagline: "Taquero energy with banquet discipline.",
    description:
      "Al pastor off the trompo, handmade tortillas pressed on-site, and salsas built that morning. Our most-requested station format for corporate events and premieres.",
    image: img.tapasSpread,
    imageAlt: "A colorful spread of shared Mexican plates",
    featured: true,
    categories: [
      {
        name: "Taquiza",
        dishes: [
          { name: "Al Pastor off the Trompo", description: "Pineapple, white onion, cilantro — carved live.", price: 18, serves: "per guest", tags: ["gluten-free"], image: img.tapasSpread, imageAlt: "Tacos al pastor with fresh garnish" },
          { name: "Baja Fish Tacos", description: "Beer batter, lime crema, cabbage slaw.", price: 17, serves: "per guest", image: img.minimalPlate, imageAlt: "Crisp fish tacos with lime" },
          { name: "Hongos Tacos", description: "Charred oyster mushroom, salsa macha.", price: 15, serves: "per guest", tags: ["vegan", "vegetarian"], image: img.bowl, imageAlt: "Mushroom tacos with salsa macha" },
        ],
      },
      {
        name: "Platters",
        dishes: [
          { name: "Cochinita Pibil", description: "Banana-leaf braise, pickled red onion, tortillas.", price: 64, serves: "tray · 12–15", tags: ["gluten-free"], image: img.rusticSpread, imageAlt: "Slow-braised cochinita pibil platter" },
          { name: "Enchiladas Verdes", description: "Pulled chicken, tomatillo, queso fresco.", price: 58, serves: "tray · 12–15", tags: ["gluten-free", "halal"], image: img.platedOverhead, imageAlt: "Enchiladas verdes with queso fresco" },
        ],
      },
      {
        name: "Sweets",
        dishes: [
          { name: "Churro Bar", description: "Cajeta, dark chocolate, horchata dip.", price: 8, serves: "per guest", tags: ["vegetarian"], image: img.dessertBerries, imageAlt: "Churros with chocolate and cajeta dips" },
        ],
      },
    ],
  },
  {
    slug: "persian",
    name: "Persian",
    tagline: "Saffron rice with proper tahdig — celebration food at scale.",
    description:
      "Kabobs over open flame, jeweled rice, and the stews that anchor Persian family tables. The program LA's Persian wedding planners ask for by name.",
    image: img.platedOverhead,
    imageAlt: "A composed Persian plate photographed from above",
    categories: [
      {
        name: "Kabob",
        dishes: [
          { name: "Koobideh", description: "Twice-ground beef, grilled tomato, sumac onion.", price: 22, serves: "per guest", tags: ["gluten-free", "halal"], image: img.steak, imageAlt: "Charcoal-grilled koobideh with tomato" },
          { name: "Joojeh", description: "Saffron-yogurt chicken, charred lime.", price: 21, serves: "per guest", tags: ["gluten-free", "halal"], image: img.platedFine, imageAlt: "Saffron chicken kabob with charred lime" },
          { name: "Barg", description: "Filet ribbon, butter-saffron baste.", price: 28, serves: "per guest", tags: ["gluten-free", "halal"], image: img.ribs, imageAlt: "Filet barg over open flame" },
        ],
      },
      {
        name: "Rice & Stews",
        dishes: [
          { name: "Tahdig Service", description: "Crisp saffron crust, carved tableside.", price: 9, serves: "per guest", tags: ["vegetarian", "gluten-free", "halal"], image: img.bowl, imageAlt: "Golden tahdig crust carved tableside" },
          { name: "Jeweled Rice", description: "Barberry, pistachio, candied orange peel.", price: 56, serves: "tray · 12–15", tags: ["vegan", "vegetarian", "gluten-free", "halal", "kosher"], image: img.saladBowl, imageAlt: "Jeweled rice with barberries and pistachio" },
          { name: "Ghormeh Sabzi", description: "Herb stew, dried lime, lamb.", price: 62, serves: "tray · 12–15", tags: ["gluten-free", "halal"], image: img.rusticSpread, imageAlt: "Herb stew served family-style" },
        ],
      },
      {
        name: "Sweets",
        dishes: [
          { name: "Saffron Rosewater Bastani", description: "Persian ice cream sandwich, pistachio.", price: 7, serves: "per guest", tags: ["vegetarian", "halal"], image: img.dessertBerries, imageAlt: "Saffron ice cream with pistachio" },
        ],
      },
    ],
  },
  {
    slug: "italian",
    name: "Italian",
    tagline: "Hand-rolled pasta finished in the wheel, in front of the room.",
    description:
      "Fresh pasta stations, coastal crudo, and slow Sunday ragùs. The program for rehearsal dinners and any room that needs the smell of parmesan and basil.",
    image: img.platedFine,
    imageAlt: "A fine-dining Italian course on porcelain",
    categories: [
      {
        name: "Antipasti",
        dishes: [
          { name: "Burrata & Charred Apricot", description: "Dukkah, saba, grilled bread.", price: 12, serves: "per guest", tags: ["vegetarian"], image: img.minimalPlate, imageAlt: "Burrata with charred fruit on grilled bread" },
          { name: "Crudo of the Day", description: "Citrus, olio nuovo, sea salt.", price: 14, serves: "per guest", tags: ["gluten-free"], image: img.platedOverhead, imageAlt: "Delicate crudo dressed with citrus" },
        ],
      },
      {
        name: "Pasta & Mains",
        dishes: [
          { name: "Tagliatelle al Limone", description: "Hand-cut, finished in the parmesan wheel.", price: 19, serves: "per guest", tags: ["vegetarian"], image: img.bowl, imageAlt: "Hand-cut tagliatelle in lemon butter" },
          { name: "Short Rib Ragù", description: "Six-hour braise, rigatoni, gremolata.", price: 23, serves: "per guest", image: img.rusticSpread, imageAlt: "Rigatoni with slow-braised ragù" },
          { name: "Branzino al Forno", description: "Whole-roasted, salsa verde, lemon.", price: 29, serves: "per guest", tags: ["gluten-free"], image: img.platedFine, imageAlt: "Whole roasted branzino with salsa verde" },
        ],
      },
      {
        name: "Dolci",
        dishes: [
          { name: "Tiramisu Coppa", description: "Espresso-soaked, mascarpone cloud.", price: 8, serves: "per guest", tags: ["vegetarian"], image: img.dessertBerries, imageAlt: "Tiramisu layered in a coupe" },
        ],
      },
    ],
  },
  {
    slug: "american",
    name: "American",
    tagline: "The familiar, done flawlessly — comfort with receipts.",
    description:
      "Roast chicken people remember, proper burgers, big salads, and breakfast spreads. The reliable backbone for school programs, government service, and crew meals.",
    image: img.steak,
    imageAlt: "Seared beef with jus on a composed plate",
    categories: [
      {
        name: "Breakfast",
        dishes: [
          { name: "Breakfast Board", description: "Soft scramble, bacon, roasted potatoes, toast.", price: 13, serves: "per guest", tags: ["breakfast"], image: img.minimalPlate, imageAlt: "A composed breakfast plate" },
          { name: "Overnight Oats & Fruit", description: "Maple, toasted seeds, market berries.", price: 9, serves: "per guest", tags: ["vegan", "vegetarian", "breakfast", "kosher"], image: img.saladBowl, imageAlt: "Oats with market berries and seeds" },
          { name: "Breakfast Burrito Drop", description: "Egg, cheese, salsa roja — foil-wrapped, labeled.", price: 11, serves: "per guest", tags: ["vegetarian", "breakfast", "boxed-lunch"], image: img.buffetTrays, imageAlt: "Labeled breakfast burritos ready for delivery" },
        ],
      },
      {
        name: "Lunch & Mains",
        dishes: [
          { name: "Herb-Roasted Half Chicken", description: "Pan jus, mashed yukons.", price: 19, serves: "per guest", tags: ["gluten-free", "halal"], image: img.platedFine, imageAlt: "Herb-roasted chicken with pan jus" },
          { name: "Boxed Cobb Lunch", description: "Chicken, avocado, egg, labeled allergens.", price: 16, serves: "per box", tags: ["gluten-free", "boxed-lunch"], image: img.saladBowl, imageAlt: "A composed cobb salad lunch box" },
          { name: "Smash Burger Station", description: "Griddled to order, secret sauce.", price: 17, serves: "per guest", image: img.steak, imageAlt: "Griddled smash burgers at the station" },
        ],
      },
      {
        name: "Sweets",
        dishes: [
          { name: "Chocolate Chip Cookie Tray", description: "Baked the morning of, flake salt.", price: 36, serves: "tray · 24", tags: ["vegetarian"], image: img.dessertBerries, imageAlt: "Fresh-baked cookies with flake salt" },
        ],
      },
    ],
  },
  {
    slug: "fusion",
    name: "Fusion",
    tagline: "The test kitchen's greatest hits — two traditions, one plate.",
    description:
      "Where the kitchen plays: harissa smash burgers, koobideh tacos, saffron arancini with cotija. The program for hosts who want a menu nobody else has served.",
    image: img.minimalPlate,
    imageAlt: "A minimalist composed plate from the test kitchen",
    categories: [
      {
        name: "Signatures",
        dishes: [
          { name: "Koobideh Taco", description: "Sumac onion, tahdig crumble, herb salsa.", price: 16, serves: "per guest", tags: ["halal"], image: img.tapasSpread, imageAlt: "Koobideh tacos with herb salsa" },
          { name: "Harissa Smash Burger", description: "Whipped feta, pickled cucumber.", price: 18, serves: "per guest", image: img.steak, imageAlt: "Harissa burger with whipped feta" },
          { name: "Saffron Arancini, Cotija & Macha", description: "The premiere-party favorite.", price: 7, serves: "per guest", tags: ["vegetarian"], image: img.minimalPlate, imageAlt: "Arancini dusted with cotija" },
        ],
      },
      {
        name: "Mains & Boards",
        dishes: [
          { name: "Miso-Date Glazed Salmon", description: "Charred broccolini, citrus.", price: 27, serves: "per guest", tags: ["gluten-free"], image: img.platedOverhead, imageAlt: "Glazed salmon with charred broccolini" },
          { name: "Shawarma Porchetta", description: "Toum, pickles, jus — carved live.", price: 25, serves: "per guest", tags: ["gluten-free"], image: img.ribs, imageAlt: "Carved porchetta with shawarma spice" },
        ],
      },
      {
        name: "Sweets",
        dishes: [
          { name: "Baklava Cheesecake", description: "Phyllo shards, dark honey, pistachio.", price: 9, serves: "per guest", tags: ["vegetarian"], image: img.dessertBerries, imageAlt: "Baklava cheesecake with dark honey" },
        ],
      },
    ],
  },
];

export function getCuisine(slug: string) {
  return cuisines.find((c) => c.slug === slug);
}

/** Dishes carrying a tag — the derived proof for attribute pages. */
export function dishesByTag(tag: string) {
  return cuisines.flatMap((c) =>
    c.categories.flatMap((cat) =>
      cat.dishes
        .filter((d) => d.tags?.includes(tag as never))
        .map((d) => ({ ...d, cuisine: c.name, cuisineSlug: c.slug }))
    )
  );
}
