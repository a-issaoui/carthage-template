import { img } from "@/lib/images";
import type { AreaLocation } from "@/types";

/** 8 service areas — genuinely local prose (venues, logistics), never
 *  find-and-replace city names. Deliberately NOT crossed with cuisines. */
export const locations: AreaLocation[] = [
  {
    slug: "beverly-hills",
    name: "Beverly Hills",
    headline: "Estate staff entrances, valet choreography, and HOA quiet hours — we know the drill north of Sunset.",
    about: [
      "Most of our Beverly Hills work is residential: estate weddings off Benedict Canyon, foundation dinners in flat-lot gardens, and milestone parties where the kitchen we cook in costs more than our trucks. We stage at the service entrance, badge our staff, and leave before the neighbors notice.",
      "Hotel ballroom work (the Crystal Ballroom circuit) runs through loading docks we've used for a decade.",
    ],
    leadTime: "2–6 weeks typical",
    popularEvents: ["wedding", "private-events", "non-profit"],
    nearby: ["west-hollywood", "santa-monica", "hollywood"],
    image: img.weddingSweetheart,
    imageAlt: "An elegant sweetheart table with florals at an estate reception",
  },
  {
    slug: "culver-city",
    name: "Culver City",
    headline: "Studio gates, stage adjacencies, and a 30-minute lunch window — Culver City is our production backyard.",
    about: [
      "Between the Culver studios and the tech campuses on Hayden, most Culver City briefs are run-of-show: crew breakfast at call, hot lunch that lands inside the window, and wrap parties on stage floors with forklift access.",
      "We hold standing COIs with the major lots and pre-clear our trucks through transportation, so first-day load-in never burns an hour at the gate.",
    ],
    leadTime: "72 hours minimum for sets",
    popularEvents: ["film-production", "corporate", "office-meal-program"],
    nearby: ["santa-monica", "west-hollywood", "downtown-los-angeles"],
    image: img.galaSparklers,
    imageAlt: "Evening wrap party with sparkling lights",
  },
  {
    slug: "downtown-los-angeles",
    name: "Downtown Los Angeles",
    headline: "Freight elevators, dock schedules, and rooftop wind — DTLA catering is a logistics sport, and we train for it.",
    about: [
      "Penthouse conference floors, loft weddings in the Arts District, and gala dinners in historic theatres: downtown events live and die on load-in. We book docks early, pad freight time, and bring our own power where rooftops run thin.",
      "Government and civic work clusters here too — per-head invoicing and labeled service are our default posture.",
    ],
    leadTime: "1–4 weeks typical",
    popularEvents: ["corporate", "government", "wedding"],
    nearby: ["hollywood", "pasadena", "culver-city"],
    image: img.corporateCrowd,
    imageAlt: "An evening corporate reception in a downtown venue",
  },
  {
    slug: "hollywood",
    name: "Hollywood",
    headline: "Premiere timing is non-negotiable: six hundred guests arrive in one wave at 10pm, and the food must be ready at 9:58.",
    about: [
      "Our Hollywood work is event-wave catering — premieres, after-parties, and award-season receptions where stations must look untouched for the cameras and refresh on eight-minute cycles.",
      "We've run the alley load-ins behind the Boulevard's theatres enough times to know which docks flood in January.",
    ],
    leadTime: "2–6 weeks typical",
    popularEvents: ["film-production", "corporate", "non-profit"],
    nearby: ["west-hollywood", "downtown-los-angeles", "beverly-hills"],
    image: img.galaLights,
    imageAlt: "A gala evening under festival lighting",
  },
  {
    slug: "long-beach",
    name: "Long Beach",
    headline: "Waterfront weddings, convention service, and harbor wind that eats canapés — we plan for the breeze.",
    about: [
      "From Rainbow Lagoon receptions to convention-adjacent corporate dinners, Long Beach events mean salt air and open sky. We weight the linens, lid the stations, and time service against the afternoon onshore push.",
      "The aquarium and maritime venues have service corridors we know by heart.",
    ],
    leadTime: "3–6 weeks typical",
    popularEvents: ["wedding", "corporate", "non-profit"],
    nearby: ["downtown-los-angeles", "culver-city", "santa-monica"],
    image: img.longTableOutdoor,
    imageAlt: "A long outdoor reception table set near the water",
  },
  {
    slug: "pasadena",
    name: "Pasadena",
    headline: "Craftsman gardens, institutional dining, and rose-season calendars that book out a year ahead.",
    about: [
      "Pasadena briefs split between garden weddings at Craftsman estates and institutional service for the universities and labs — recurring lunches, symposium dinners, donor events under old oaks.",
      "January is its own season here; if your date touches parade week, call us yesterday.",
    ],
    leadTime: "3–8 weeks typical",
    popularEvents: ["wedding", "healthcare", "office-meal-program"],
    nearby: ["downtown-los-angeles", "hollywood", "long-beach"],
    image: img.weddingTent,
    imageAlt: "A tented garden reception with long candlelit tables",
  },
  {
    slug: "santa-monica",
    name: "Santa Monica",
    headline: "Beach-adjacent venues, strict noise curfews, and the best produce market in the county at our back door.",
    about: [
      "We shop the Wednesday Santa Monica farmers market for the whole kitchen, so local events get the shortest produce miles we run. Bluff-top weddings and tech-office programs make up most of the calendar here.",
      "Coastal curfews are real: we build teardown into the minute-map so the last truck door closes before the ordinance does.",
    ],
    leadTime: "2–6 weeks typical",
    popularEvents: ["wedding", "corporate", "weekly-meal"],
    nearby: ["beverly-hills", "culver-city", "west-hollywood"],
    image: img.weddingOutdoorArch,
    imageAlt: "An outdoor ceremony arch near the coast",
  },
  {
    slug: "west-hollywood",
    name: "West Hollywood",
    headline: "Rooftop receptions, design-district dinners, and parking that requires a permit strategy, not luck.",
    about: [
      "WeHo events skew intimate and design-forward: showroom dinners, rooftop birthday parties, and launch events where the tablescape is part of the press kit. Our Melrose atelier is ten minutes away, which makes same-week briefs possible.",
      "We pre-pull parking permits and stage from the atelier to keep trucks off the curb.",
    ],
    leadTime: "1–4 weeks typical",
    popularEvents: ["private-events", "corporate", "wedding"],
    nearby: ["beverly-hills", "hollywood", "santa-monica"],
    image: img.dinnerToast,
    imageAlt: "A candlelit rooftop dinner toast",
  },
];

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}
