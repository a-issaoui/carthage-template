# Carthage Template

A production-grade marketing-website template built with **Next.js 16 (App Router)**,
**React 19**, **Tailwind CSS v4**, and **Motion**. It ships a full multi-page catering/
hospitality site — but the architecture (block-based composition, typed content layer,
end-to-end SEO) is domain-agnostic and meant to be reskinned for any content-driven
business site.

> All content (testimonials, case studies, locations, menus) is **fictional placeholder
> data** living in typed modules under `src/data/` — swap it for your own.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16, App Router, React Server Components |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 (`@tailwindcss/postcss`) |
| Animation | Motion (`motion`) |
| UI utilities | `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react` |
| Package manager | pnpm |

No database or backend required — content is statically typed data, so the site builds
and deploys as a static/SSR Next.js app out of the box.

## Architecture

The design unit is the **block**: a reusable, data-bound component. Pages are
*compositions* of intent-scoped blocks rather than a single copied skeleton — each page
class assembles only the blocks its purpose requires. See **[`structure.md`](./structure.md)**
for the full page-by-page map and the reasoning behind it (also a worked example of
SEO-driven information architecture).

```
src/
  app/            # ~25 routes: home, services, menus, events, locations,
                  #   pricing, gallery, testimonials, get-a-quote, legal, [slug]
  components/
    blocks/       # data-bound page sections (Hero, TrustStrip, FaqAccordion, …)
    forms/  layout/  navigation/  shared/  ui/
  data/           # typed placeholder content (testimonials, locations, menus, …)
  lib/
    schema.ts     # JSON-LD structured-data builders
    images.ts     # image registry
  app/sitemap.ts  app/robots.ts
```

**SEO is first-class:** every indexable page carries structured data (Organization,
LocalBusiness, WebSite, BreadcrumbList, plus page-specific FAQ/Service/Menu/Article/Review
nodes), with generated `sitemap.xml` and `robots.txt`.

## Use this template

```bash
pnpm install
pnpm dev        # http://localhost:3004
pnpm build      # production build
pnpm start      # serve the build
```

To make it yours: replace the modules in `src/data/`, swap the brand name and copy,
point `lib/images.ts` at your assets, and adjust the routes in `src/app/` to your
content map.

## License

MIT
