import { site } from "@/lib/site";
import type { Stat } from "@/types";

export const stats: Stat[] = [
  { value: new Date().getFullYear() - site.founded, suffix: "", label: "Years in Los Angeles" },
  { value: site.eventsCatered, suffix: "+", label: "Events delivered" },
  { value: site.rating.value, suffix: "★", label: `Across ${site.rating.count} reviews` },
  { value: 7, suffix: "", label: "Cuisine programs, one kitchen" },
];
