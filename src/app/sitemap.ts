import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { eventOfferings } from "@/data/offerings";
import { combos } from "@/data/combos";
import { programs } from "@/data/programs";
import { cuisines } from "@/data/cuisines";
import { locations } from "@/data/locations";
import { caseStudies } from "@/data/case-studies";
import { attributePages } from "@/data/attributes";

/** Every indexable URL, generated from the data layer.
 *  /custom-package and /thank-you are noindex and deliberately absent. */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    ...eventOfferings.map((o) => `/services/${o.slug}`),
    ...combos.map((c) => `/services/${c.event}/${c.cuisine}`),
    "/programs",
    ...programs.map((p) => `/programs/${p.slug}`),
    "/menus",
    ...cuisines.map((c) => `/menus/${c.slug}`),
    "/locations",
    ...locations.map((l) => `/locations/${l.slug}`),
    "/events",
    ...caseStudies.map((c) => `/events/${c.slug}`),
    ...attributePages.map((a) => `/${a.slug}`),
    "/testimonials",
    "/gallery",
    "/about",
    "/why-carthage",
    "/pricing",
    "/get-a-quote",
    "/privacy",
    "/terms",
    "/accessibility",
  ];
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.split("/").length > 2 ? 0.7 : 0.8,
  }));
}
