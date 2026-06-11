# Carthage Kitchen — Public Website Structure

> Every page and every section, each justified twice:
> **CLIENT** = what it does for a visitor deciding whether to book us.
> **SEO** = what it does for Google (keyword target, schema, internal-link role, E-E-A-T).
>
> Grounded in the live site (62 indexable pages in the sitemap). Last updated 2026-06-11.

---

## 0. Architecture principles (the "why" behind the whole map)

1. **Three product axes, one conversion endpoint.** Visitors arrive thinking in one of three ways — *"I have an EVENT"* (wedding, corporate…), *"I want a CUISINE"* (Persian, BBQ…), or *"I'm in a PLACE"* (Beverly Hills…). Each axis gets its own hub + leaves, and **every leaf funnels into the single quote wizard at `/get-a-quote`** (prefilled via `?event=`, `?menu=`, `?diet=`). One form means one funnel to measure and zero asymmetric code paths.
2. **Default-deny landing pages.** Facets (dietary tags, dayparts, locations×cuisine…) are **filters by default**; a facet only earns a standalone URL when there is real search demand AND real content to serve it. This is why there are 7 cuisine pages and 7 attribute pages — not 700 auto-generated tag pages that would be thin-content spam.
3. **Evidence beats taxonomy.** Case studies, photography, named testimonials, and live prices are the scarce assets; pages are structured to surface evidence early and often. Google rewards the same thing (E-E-A-T).
4. **Everything dynamic from the DB.** Pages render CMS rows (catering, menus, locations, case_studies, faqs, site_settings); nothing user-visible is hardcoded. The operator can change menus, copy, and photos without a deploy.
5. **Every indexable page carries structured data**: Organization + LocalBusiness/FoodEstablishment + WebSite + BreadcrumbList on all 62 pages, plus page-specific nodes (FAQPage ×30, Service ×27, Menu ×7, Article ×4, Review, ImageObject). 124 JSON-LD blocks, all validated.

**6. Pages are COMPOSITIONS of intent-scoped blocks — there is no universal page skeleton.** The unit of design is the block (a reusable component bound to DB data); each page class assembles only the blocks its intent requires. The rule: *every page carries the minimum set of blocks needed to satisfy its intent and move the visitor to the next action* — never a copied 8-section template. (The repetitive-template antipattern produces duplicate content, low information density, and visitors scrolling past things they've seen on five other pages.)

### The block library (names = actual components in `apps/web/src/components`)

| Block | Component | Used by page classes |
|---|---|---|
| Hero | `FullHero` / `Hero` | all (content varies per class) |
| Trust stats | `TrustStrip` | commercial pages only (intent, product, pricing, quote) — **deliberately absent on evidence pages**, where the story IS the trust |
| Breadcrumbs | `Breadcrumbs` | all deep pages (BreadcrumbList schema) |
| Menu grid | `MenuCard` grids | home, menus hub, intent pages |
| Dish showcase | `DishListSection` (printed menu), `SpecialtiesCarousel` | **product-only** |
| Package grid | combo packages section | **intent-only** (combos/events) |
| Offering grid | `CateringOfferingCard` | home, services hub |
| Case-study strip | `CaseStudyStrip` | intent + location pages (evidence injection) |
| Event story | STAR story blocks (brief/approach/day/outcome) + stat row | **evidence-only** |
| Photo gallery | `ImageCollage` / gallery sections | evidence, gallery, heroes |
| Review cards | `TestimonialCard` | home, testimonials, quote page, programs |
| Process timeline | "What happens next" steps | quote page (+ program pages) |
| FAQ | `FaqAccordion` + FAQPage schema | intent, attribute, program, pricing — rows are page-scoped in the `faqs` table (no recycled questions) |
| Stats band | dark stats slab | about |
| Conversion exit | `QuoteCtaCard` (+ CTA band) | every page — the one universal block, by design: a single funnel with `?event/?menu/?diet` prefill and `from=` attribution |
| Location chips | `LocationChipsSection` | home, intent, location pages |

### Page-class compositions (what each class uses — and refuses)

- **Product** (`/menus/[slug]`): Hero → DishListSection per category → related-occasion combo links → QuoteCtaCard. *No corporate process, no company history, no program content.*
- **Intent** (`/services/[event]`, combos): Hero+facts → TrustStrip → CaseStudyStrip → packages/linked menus → FAQ → QuoteCtaCard → location chips. *No full dish lists — it links to the product page instead of duplicating it.*
- **Evidence** (`/events/[slug]`): stat row → event story → pull-quote → gallery → cross-links → QuoteCtaCard. *No TrustStrip, no feature grids, no FAQ — the story is the argument.*
- **Program** (`/programs/[slug]`): Hero → what's-included grid → corporate testimonial → program FAQ → QuoteCtaCard (recurring-aware). *No wedding content, no cuisine deep-dives.*
- **Attribute** (`/halal-…` etc.): Hero → tagged-dish proof grid → event-type links → attribute FAQ → QuoteCtaCard. *Proof is derived from the DB (`menu_tags` intersection), never asserted.*

The sections-per-page tables in §§1–7 below are these compositions instantiated — read them as block manifests, not as templates.

---

## 1. Home — `/`

**WHY THE PAGE** — CLIENT: the front door; must let all three visitor types (event-first, cuisine-first, location-first) self-route within two scrolls, while proving quality with photography. SEO: the domain's strongest page; targets the head term **"catering Los Angeles"** + brand; distributes link equity to all three hubs.

| # | Section | CLIENT why | SEO why |
|---|---------|-----------|---------|
| 1 | **FullHero** (full-bleed brand artwork, H1 from CMS, quote + phone CTAs, "Since 2014") | Instant brand differentiation (no stock-photo sameness); the two actions a hot lead needs (quote / call) above the fold | The only H1: "Chef-Led Catering Across Los Angeles — Mediterranean & Beyond" = head keyword + breadth qualifier; LCP-optimized image |
| 2 | **TrustStrip** | De-risks before asking anything | Trust/E-E-A-T signals near the top of the DOM |
| 3 | **Our craft** (story split with photo pair + "Since" seal) | Emotional warm-up; communicates chef-led, scratch-cooked positioning in 3 lines | Keyword-bearing intro copy near the top; image alt texts carry cuisine terms |
| 4 | **What we cater** (11 offering cards from `catering` table) | The event-first visitor self-routes here — the most common buyer mode | Internal links with exact-match anchors ("Wedding Catering", "School Lunch Catering") to all event/program hubs — the equity distributor |
| 5 | **FeatureLinks** (3 full-bleed cuisine panels) | Visual appetite trigger; cuisine-first routing for browsers | Image-rich links into top cuisine pages |
| 6 | **Cuisine grid** (7 MenuCards) | Complete cuisine-first routing — proves breadth ("same kitchen, every flavor profile") | One link per `/menus/*` page with keyword anchors |
| 7 | **Catering tabs** (per-event linked menus) | Shows that each event type has *its own* menus — answers "do you actually do MY event?" interactively | Crawlable links pairing event terms with cuisine terms |
| 8 | **Why pillars** (CMS pillar blocks) | Objection handling: scale, compliance, dietary, one-kitchen logistics | Unique selling-point copy that long-tail queries match ("allergen sheets", "USDA compliant") |
| 9 | **Specialties carousel** (signature dishes w/ prices) | Real dishes with real prices = honesty signal; appetite | Dish names + prices as crawlable text (menu-intent queries) |
| 10 | **Featured cuisine band** (dark slab) | Rhythm break + seasonal merchandising slot | Fresh content rotation on the homepage |
| 11 | **Testimonials** (3 named cards on dark) | Named clients (Sony Pictures, Warner Bros) — borrowed credibility at the decision point | Review-rich text; names matchable to brand searches |
| 12 | **Service area panel + Location chips** | Location-first routing; "do they come to me?" answered without leaving | Geo-anchor links to all 8 `/locations/*` pages — local SEO equity |
| 13 | **CTA band + QuoteCtaCard** | The page's single conversion exit, after all proof has landed | — |

---

## 2. The EVENT axis

### 2.1 `/services` (hub)

**WHY** — CLIENT: directory for the event-first buyer who skipped the homepage; compare all 11 offerings at a glance. SEO: targets "catering services by event type Los Angeles"; one hop from home to every event page (crawl depth 2 for the whole axis).

Sections: Hero (axis promise) → TrustStrip → **offering card grid** (one card per `catering` row, kind-aware hrefs) → CTA. Each card's description is the event row's CMS copy — unique text per link (no boilerplate anchors).

### 2.2 `/services/[event]` ×8 (wedding, corporate, private-events, government, film-production, school-lunch, healthcare, non-profit)

**WHY** — CLIENT: the money page for each buyer persona. A school-district buyer and a bride need *different proof* — these pages localize trust per persona (compliance for government, run-of-show for film, tastings for weddings). SEO: each targets a high-intent commercial query ("wedding catering los angeles", "film production catering") — the highest-converting query class we can rank for; carries Service schema.

| Section | CLIENT why | SEO why |
|---------|-----------|---------|
| Hero + facts (starting price, packages count, lead time) | Pre-qualifies budget instantly — respects the buyer's time; facts pulled live from packages | Price/lead-time facts make the snippet concrete; numbers earn clicks |
| TrustStrip | Persona-critical (B2B due diligence) | E-E-A-T |
| **Case study strip** (real events of this type) | Evidence: "they've done MY event before" — the strongest single conversion lever | Unique first-party content no competitor can copy; internal links to Article pages |
| **Linked cuisines / menus** (from `catering_menus`) | Shows the food options *for this event type*; deep-links to combo pages | Creates the crawl path to event×cuisine combos |
| Custom-spread entry (where `allows_custom_package`) | Captures buyers whose needs don't fit a fixed package | — |
| **FAQ accordion** (per-event rows from `faqs`) | Pre-answers the exact questions this persona asks (minimums, COIs, tastings) | FAQPage schema → rich result; long-tail question coverage |
| CTA band + QuoteCtaCard (`?event=` prefilled) | Quote, one click, pre-filled | — |
| Location chips | Geo reassurance + routing | Internal links event→locations (axis cross-linking) |

### 2.3 `/services/[event]/[cuisine]` ×11 combos (e.g. `/services/wedding/persian`)

**WHY** — CLIENT: the buyer who already knows both dimensions ("Persian wedding catering") lands on a page that speaks their exact sentence — highest intent in the funnel. SEO: targets the long-tail intersection queries ("persian wedding catering los angeles") where competition is thin and intent is razor-sharp. **Only curated combos exist** (default-deny): each is a real pairing with packages or menu content — never auto-generated.

Sections: Hero (combo title + photo collage + packages/lead-time facts) → TrustStrip → **Packages** (priced tiers w/ inclusions) *or* "Custom pairing" honesty card when no fixed package exists → **menu preview / dish list** → case studies for the event → **sibling combo links** (same cuisine × other events; same event × other cuisines — events-kind only) → FAQs → CTA + QuoteCtaCard (`?event=&menu=`). Sibling links are the lattice that lets Google discover every combo from any combo.

### 2.4 `/programs` (hub) + `/programs/[slug]` ×2 (office-meal-program, weekly-meal)

**WHY** — CLIENT: recurring-revenue B2B buyers (office lunch programs, weekly meal service) have a different decision shape — cadence, invoicing, rotation — and would bounce off event-shaped pages. SEO: targets "office lunch program los angeles", "weekly meal service" — recurring-intent queries; separated URL namespace keeps event vs program intent clean.

Program page sections: Hero → **What's included** 4-card grid (rotation, dietary tracks, invoicing, delivery) → corporate **testimonial figure** → **FAQ accordion** (program-specific: contracts, headcount changes, billing) → cross-link CTA band → QuoteCtaCard (wizard supports `cadence=recurring` with frequency/start-date fields — the form itself is program-aware).

---

## 3. The CUISINE axis

### 3.1 `/menus` (hub)

**WHY** — CLIENT: food-first browsers (very common in catering — people choose with their stomach) get a visual index of all 7 cuisine programs from "one chef, one kitchen." SEO: targets "catering menus los angeles"; hub for all cuisine equity.

Sections: Hero ("One chef. 7 cuisines.") with photo collage → **Browse-by-cuisine** full-width photo cards (one per published menu, FEATURED badges) → CTA ("Get a tailored menu").

### 3.2 `/menus/[slug]` ×7 (mediterranean, bbq, mexican, persian, italian, american, fusion)

**WHY** — CLIENT: the proof-of-food page — a real, complete, priced menu in a printed-menu layout. Removes the #1 catering anxiety: "is the food actually good and what does it cost?" SEO: targets "{cuisine} catering los angeles" — the second-highest-intent query class; carries **Menu/MenuItem schema** (rare among competitors; rich-result eligible).

| Section | CLIENT why | SEO why |
|---------|-----------|---------|
| Hero (cuisine title, description, hero photo, "Get a {cuisine} quote") | Sets the flavor story; CTA pre-filled with the cuisine | H1 exact-match; og:image = the cuisine's own photo for share previews |
| **DishListSection per category** (printed-menu style: dish, dotted leader, price, serves, photo) | The menu IS the product — full transparency on dishes, portions, prices builds enormous trust | Every dish name/description/price is crawlable unique text; MenuItem schema; long-tail dish queries ("koobideh catering") |
| **Linked event combos** ("Persian for weddings / corporate / …") | Routes the food-first browser into their event context | The cuisine→combo crawl path (other half of the lattice) |
| CTA + QuoteCtaCard (`?menu=` prefilled) | Convert at the peak of appetite | — |

### 3.3 `/custom-package` (noindex, follow)

**WHY** — CLIENT: the cross-cuisine builder — pick dishes from every kitchen menu, get a custom quote; serves the buyer no fixed menu fits. SEO: deliberately **noindex** (a tool, not a landing page — thin for Google, gold for users); `follow` preserves equity flow.

---

## 4. The PLACE axis (local SEO)

### 4.1 `/locations` (hub) + `/locations/[slug]` ×8 (beverly-hills, culver-city, downtown-los-angeles, hollywood, long-beach, pasadena, santa-monica, west-hollywood)

**WHY** — CLIENT: "do you cater in MY neighborhood?" answered with area-specific knowledge (venues, logistics, lead time) — not a find-and-replace city name. SEO: the local pack / "{catering} near me" play; each page targets "catering {neighborhood}"; LocalBusiness schema with areaServed. **Deliberately NOT crossed with cuisines** (no /beverly-hills/persian) — location×cuisine would be 56 thin doorway pages; the default-deny rule kills it.

Location page sections: Hero (area headline + photo collage + lead-time fact) → TrustStrip → **About-the-area prose** (genuinely local: named venues, neighborhood logistics — the anti-doorway content) → **Popular events in {area}** (kind-aware links to event/program pages) → case studies filtered to the area where they exist → CTA + QuoteCtaCard → **Nearby-neighborhood chips** (lateral local lattice).

---

## 5. The EVIDENCE layer

### 5.1 `/events` (hub) + `/events/[slug]` ×4 case studies

**WHY** — CLIENT: "Events we've *actually* catered" — the real record with guest counts, venues, what went wrong-and-right, and what the client said. This is the page that converts skeptics; B2B buyers specifically look for it. SEO: unique first-party storytelling content (Article schema + embedded Review) that no competitor can duplicate; ranks for "{venue/event-type} catering" stories and feeds E-E-A-T sitewide.

- Hub sections: Hero → **filter chips by event type AND area** (both from DB) → case-study photo cards → empty-state with quote CTA (never a dead end).
- Detail sections: kicker (event type · venue) → H1 + **stat row** (guests / date / location — the scannable proof) → **STAR story blocks** (The brief / Our approach / On the day / The outcome — operational credibility) → **pull-quote testimonial** → photo gallery → **cross-links** ("Plan one like it" → its event hub, cuisine page, location) → QuoteCtaCard (`?event=` from the study's type). The cross-links make every case study a hub that pumps evidence-equity into all three axes.

### 5.2 `/testimonials`

**WHY** — CLIENT: the dedicated social-proof destination for the diligence phase ("4.9 across 127 reviews", platforms named, long-form stories with names and roles). SEO: review-rich page supporting the aggregate rating shown in LocalBusiness schema; brand-query reassurance (people Google "{brand} reviews").

Sections: Ratings hero (4.9★ / 127, platform chips: Google, Yelp, WeddingWire, The Knot) → TrustStrip → **Featured stories** grid (named, role-attributed, event-type-tagged quote cards).

### 5.3 `/gallery`

**WHY** — CLIENT: pure visual diligence — the food, the rooms, the plating, browsable by event format. SEO: image SEO play — every photo emitted as **ImageObject schema** with captions that stitch event-axis and cuisine-axis keywords, so Google Images indexes each photo under both intents.

Sections: Hero with collage → **Pick-an-event-format** category cards (each linking to the right hub with a kind-aware href) → per-format photo sections.

---

## 6. ATTRIBUTE pages (dietary & format) ×7

`/halal-catering-los-angeles` · `/kosher-…` · `/vegan-…` · `/vegetarian-…` · `/gluten-free-…` · `/boxed-lunch-…` · `/breakfast-catering-los-angeles`

**WHY** — CLIENT: dietary and format requirements are *veto criteria* — a halal-keeping buyer will not book without explicit, detailed reassurance (sourcing, labeling, allergen sheets). One precise page per veto. SEO: each targets a high-intent modifier query ("halal catering los angeles") with real search volume; these 7 **earned** pages exist while dozens of other tags rightly stay filters (default-deny). The dietary proof is **derived, not claimed**: menu tags come from the `menu_tags` intersection view (a menu is only "vegan" if 100% of its dishes are), so the page's dish lists are honest by construction.

Sections: Hero (attribute promise + sourcing/labeling specifics) → TrustStrip → **dish proof grid** (real tagged dishes from the DB — evidence, not assertion) → **event-type links** ("Halal Wedding Catering" → kind-aware hub links) → FAQ accordion (attribute-specific: certification, cross-contact, labeling) → custom-menu line → CTA + QuoteCtaCard (`?diet=` prefilled).

---

## 7. TRUST & BRAND pages

### 7.1 `/about`

**WHY** — CLIENT: the "who are these people" click — story, founder-chef, and scale numbers; humans buy from humans. SEO: brand-query landing; entity-building for the Organization (founder, founding year, location history feed the knowledge graph).

Sections: Hero (origin story prose + photo grid) → TrustStrip → **Executive-chef panel** (named founder, training, since-2018, certifications, "Book Aimen" CTA — a face = E-E-A-T's first E) → **"What we're about"** centered prose (7 cuisines / 11 event types / one kitchen) → testimonial → **dark stats band** (years / events / rating / cuisines — the quantified summary).

### 7.2 `/why-carthage`

**WHY** — CLIENT: the comparison-shopper's page — "what makes you different from the other three quotes I'm getting?"; merges the old credentials + kitchen pages into one differentiation argument (logistics, compliance, scale, dietary engineering). SEO: targets comparison/long-tail trust queries ("licensed insured caterer los angeles", "commercial kitchen catering"); consolidating credentials+kitchen into one URL concentrated what were two thin pages into one strong one.

Sections: Hero (philosophy: "the food must be excellent, but the logistics must be flawless") → **What sets us apart** 4-card grid (compliance & safety / scale / authentic recipes / dietary flexibility) → **One chef-led kitchen, every cuisine** prose → **Commercial kitchen section** (anchored `#kitchen`, real facility photo, capacity numbers) → documented-and-compliant section (insurance, permits, ServSafe) → CTA.

### 7.3 `/pricing`

**WHY** — CLIENT: the question every buyer has and most caterers hide. Leading with "$13–$167/person, here's why" filters unqualified leads *in* and builds disproportionate trust. Numbers are **live** (computed from the package catalog — never stale). SEO: targets "how much does catering cost in los angeles" — huge-volume informational query; the page is built answer-first for featured snippets and AI answers, with matching FAQPage schema.

Sections: Hero (question-form H1 + the short answer with real numbers in the first sentence) → TrustStrip → **per-person ranges by service style** (3 live-priced cards: buffet / plated / drop-off) → **question-style H2 sections** (each mirrors a FAQPage entry verbatim — visible text and schema never drift) → per-question quote links → CTA band.

### 7.4 `/get-a-quote`

**WHY** — CLIENT: THE conversion page; everything else on the site exists to deliver people here. Only two required fields (event type + email) — every optional step is honestly skippable ("Skip for now"), with a review summary before sending; friction was measured out deliberately. SEO: minimal by design — the page ranks for brand+"quote" only; it's the funnel terminus, not a landing page.

Sections: Hero promise ("a couple of minutes… no spam, no upsell call") → **proof rail** (4.9★ / 1 business day / 200+ events) → **"What happens next"** 4-step timeline (kills fear of the unknown: request → reply → optional tasting → written proposal) → "Have questions?" email escape hatch → testimonial → **the 5-step wizard** (audience/cadence-aware, URL-prefilled, localStorage draft, jump-back progress bar, final review summary) → CTA band.

### 7.5 `/thank-you`

**WHY** — CLIENT: confirms the request landed, sets the response-time expectation again, and keeps momentum with menu browsing links (a submitted lead who keeps browsing arrives at the call warmer). SEO: noindex-irrelevant; exists for funnel completion and clean conversion tracking.

### 7.6 Legal & utility — `/privacy`, `/terms`, `/accessibility`, `/login`, `/account/*`, `/404`

**WHY** — CLIENT: contractual trust (B2B procurement checks for these), account self-service (quotes visible under the client's login). SEO: legal pages are crawl-trust hygiene; account/auth pages are noindex. The **404** is a branded recovery page ("That page is off the menu") with four DB-driven routes back in — never a dead end for users *or* crawlers.

---

## 8. Cross-cutting structures

| Structure | CLIENT why | SEO why |
|---|---|---|
| **Header** (logo, Catering + Cuisines dropdowns, Programs/Locations/Gallery/About, phone, sun-yellow Request Quote pill) | The two dropdowns mirror the two main buyer modes; quote pill persistent on every scroll (morphing pill→bar) | Sitewide crawl paths to both axes from every page; ≤5 top-level items keeps PageRank concentrated |
| **Footer** (4 link columns: Events / Programs / Cuisines / Locations + company links + contact + socials) | The "lost visitor" index; contact info where convention says it lives | The sitewide internal-link mesh — every axis leaf reachable from every page; NAP consistency for local SEO |
| **Mobile quote FAB** | Thumb-reachable conversion on mobile (majority of traffic) | — |
| **Sitemap.xml + robots** (62 canonical URLs, DB-generated) | — | Complete, current crawl manifest; regenerates as the operator publishes content |
| **Internal-link integrity** (`apps/web/scripts/check-internal-links.sh`) | No dead ends ever | 0 broken internal links, verified — crawl-budget hygiene |
| **Canonicals + meta discipline** (one brand suffix via template, ≤160-char descriptions via `lib/meta.ts`, per-page og:image) | Clean share previews when clients send links to stakeholders | No duplicate-title dilution; CTR-optimized snippets |

---

## 9. Acknowledged architecture debts (reviewed 2026-06-11)

Three items from external architecture review, each verified against the schema and given a verdict + trigger (per the wait-for-the-signal rule: surface, name the trigger, defer the build):

1. **`menus.is_cuisine` — NOT deprecated (review pushed back).** The reviewer assumed a separate projection engine made it dead data; in this codebase the column *is* the projection input (combo sibling filters read it; classification-in-DB-columns is a standing rule). It now carries a schema COMMENT marking it load-bearing. Revisit only if a richer projection model replaces it — migrate consumers first.
2. **Fulfillment as a first-class domain concept — agreed, deferred.** Today fulfillment is flattened into `service_format` columns on `packages` and `quotes` (the drop-off ×0.75 pricing pattern is the tell). **Trigger to build `fulfillment_modes` as a table:** a third pricing rule that varies by mode, or per-mode operational fields (lead time, staffing). Until then the column + quoteConstants single-sourcing is sufficient and honest.
3. **"Projection should become data-driven" — already true (second review, item rejected as moot).** The critique targets a `menuProjection.ts` config file that no longer exists; the live projection reads DB columns (`menus.is_cuisine`, `catering.kind`) and derived views (`menu_cuisines`, `menu_tags`). Adding a cuisine/program/facet is an INSERT, not a code change.
4. **Architecture status: FROZEN for building.** Two independent reviews converged on 9.4–9.7/10 with the same residual debts (fulfillment domain, case-study FK — both triggered above). Per both reviews and project judgment: further redesign now carries more risk than reward; remaining gains come from content, packages, operations, and reporting — not more taxonomy. **Reopening rule:** any proposal for a new taxonomy axis, menu classification, projection layer, or page-generation strategy must first prove which existing invariant is failing (the governing invariant: *IA projects reality; IA does not redefine reality*). No failing invariant → no redesign.
5. **Case-study evidence graph — mostly already built; one gap.** `case_studies` already carries `menu_id` FK (cuisine edge), `guest_count`, `venue`, `event_date`, `image_ids[]`, `client_quote`, `related_case_study_slugs`. The gap: `event_type` is a **text slug** matching `catering.slug` by convention, not a FK — the occasion edge of the graph is soft. **Trigger to fix (add `catering_id` FK, backfill, denormalize display):** renaming any catering slug, or any feature needing reliable case-study↔occasion joins. Both debts are now also recorded as COMMENTs on the columns themselves.

---

## 10. What is deliberately ABSENT (and why that's a feature)

- **No location×cuisine pages** (`/beverly-hills/persian`) — 56 thin doorway pages; would dilute crawl budget and invite a quality penalty. The combo lattice lives on the event axis only, where packages give each page real substance.
- **No auto-generated tag pages** — facets are filters until they earn a page with demand + content (default-deny).
- **No blog (yet)** — evidence (case studies) is the content engine; a blog without operational stories would be generic filler. Case studies grow as real events happen.
- **No second quote form** — the inline form was removed; one wizard, one funnel, one set of numbers.
- **No fake urgency / popups / chat-widgets** — the brand sells trust to procurement officers and brides alike; dark patterns poison both.
