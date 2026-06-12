import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" }, // dev phase — flip back at launch
    sitemap: `${site.url}/sitemap.xml`,
  };
}
