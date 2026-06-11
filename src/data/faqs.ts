import type { Faq } from "@/types";

/** Page-scoped FAQ rows (the `faqs` table) — no recycled questions.
 *  Keys: event slugs, program slugs, attribute tags, and "pricing". */
export const faqsByPage: Record<string, Faq[]> = {
  wedding: [
    { question: "Do you offer tastings before we book?", answer: "Yes — every wedding engagement includes a tasting at our Melrose atelier with the chef at the table. Menus are corrected in pencil, then signed in ink." },
    { question: "Can you cater at a venue without a kitchen?", answer: "It's our specialty. We build full field kitchens — chef stations, cold lines, even a wood-fired hearth — on cliffsides, gardens, and lofts across LA." },
    { question: "How do you handle guests' dietary restrictions?", answer: "Every menu runs parallel dietary tracks (vegan, halal, gluten-free, kosher-style) plated identically to the main course, tracked from your RSVP cards." },
  ],
  corporate: [
    { question: "Can you serve lunch inside a 30-minute window?", answer: "Yes — composed lunches plate in under twelve minutes and clear in eight. We rehearse the window against your agenda before the day." },
    { question: "Do you sign NDAs for sensitive meetings?", answer: "Routinely. Our captains and service staff are NDA-comfortable and briefed on silent-service protocol for boardrooms." },
    { question: "Can you invoice per department or cost center?", answer: "Yes — itemized invoices split by cost center, with per-head detail, on net-30 terms for established accounts." },
  ],
  "private-events": [
    { question: "What's the minimum party size?", answer: "Private dinners start at 10 guests; garden parties and milestone events typically run 20–80. Below 10, ask about our chef's-table format." },
    { question: "Will there be a chef on-site?", answer: "Yes — private events always include a dedicated event chef on-site, plus service staff scaled to your headcount." },
    { question: "Can you recreate a family recipe?", answer: "It's one of our favorite briefs. Bring the handwritten card; the chef will test it, refine nothing without permission, and serve it faithfully." },
  ],
  government: [
    { question: "Are you registered for public procurement?", answer: "Yes — we hold an active SAM registration, carry $2M liability coverage, and provide COIs before delivery as standard." },
    { question: "Can you provide per-head, itemized invoicing?", answer: "Per-head invoicing with allergen documentation is our default posture for government service — no special request needed." },
    { question: "Do you meet labeling requirements?", answer: "Every dish is labeled with contents and allergens, and a full ingredient sheet accompanies each delivery." },
  ],
  "film-production": [
    { question: "What's your minimum notice for a shoot?", answer: "72 hours for standard crew service. Same-week additions to an existing production run are usually possible — call us." },
    { question: "Can you feed split calls and overnight crews?", answer: "Yes — second-meal and overnight service run from our 24-hour-capable kitchen, with hot service at any call time." },
    { question: "Do you have studio lot clearances?", answer: "We hold standing COIs with the major lots and pre-clear vehicles through transportation, so load-in doesn't burn shoot time." },
  ],
  "school-lunch": [
    { question: "Are your menus USDA-compliant?", answer: "Our school menus are built to USDA portion and component guidance, with documentation per menu cycle for your records." },
    { question: "How do you handle nut allergies?", answer: "School service runs from our nut-free line, and every box is labeled per student group with full allergen marks." },
    { question: "Can you deliver sorted by classroom?", answer: "Yes — boxes arrive sorted and labeled by classroom or grade, with counts confirmed against your roster the day before." },
  ],
  healthcare: [
    { question: "Can you provide texture-modified meals?", answer: "Yes — minced, pureed, and soft tracks are available, prepared to IDDSI-aligned levels with dietitian documentation." },
    { question: "How strict is your allergen control?", answer: "Hospital-grade: dedicated prep zones, sealed labeled service, and ingredient sheets per dish, per delivery." },
    { question: "Do you serve staff-appreciation events?", answer: "Often — overnight-shift service included. We've fed 3am nursing breaks more than once and bring the coffee to match." },
  ],
  "non-profit": [
    { question: "Do you offer non-profit pricing?", answer: "Registered 501(c)(3) organizations receive program pricing, and we'll structure the menu honestly around the budget line you have." },
    { question: "Can sponsors be recognized in the menu?", answer: "Yes — printed menu cards can carry sponsor recognition, and stations can be named for major donors." },
    { question: "Can you scale a gala on a fixed budget?", answer: "That's the usual brief. We weight the spend toward visible moments — carving stations, dessert — and engineer the rest quietly." },
  ],
  "office-meal-program": [
    { question: "How does headcount flexing work?", answer: "Counts lock at 10am the day before each service. Scale up or down within 20% week to week at the same per-head rate." },
    { question: "What does contracting look like?", answer: "A simple monthly agreement, cancellable with two weeks' notice. No annual lock-in, no minimum term games." },
    { question: "How is billing handled?", answer: "One consolidated monthly invoice, itemized per service day, on net-30 terms — built for office managers, not accountants." },
  ],
  "weekly-meal": [
    { question: "Can we skip a week?", answer: "Any week, from a text message, by Thursday for the following Sunday. No penalty, no cancellation theater." },
    { question: "How does delivery work?", answer: "Sunday delivery windows you pick at signup; insulated drop-off if you're out. Every container is dated with reheat instructions." },
    { question: "Can menus avoid specific allergens permanently?", answer: "Yes — household allergy flags are permanent and checked against every weekly rotation before it's offered to you." },
  ],
  halal: [
    { question: "Is your halal certified or self-declared?", answer: "Proteins come from certified zabiha suppliers with documentation available on request; our prep protocol keeps lines fully separated." },
    { question: "Is alcohol used anywhere in halal dishes?", answer: "No — halal-marked preparations use no alcohol at any stage, including deglazing and desserts." },
    { question: "Can a whole wedding menu run halal?", answer: "Yes, and often does — the full Mediterranean and Persian programs run halal end-to-end without substitutions." },
  ],
  kosher: [
    { question: "Are you a certified kosher caterer?", answer: "We are kosher-style, not certified, and we say so plainly. For certified events we partner with a hashgacha-supervised commissary — raise it early." },
    { question: "How do you separate meat and dairy?", answer: "Separated through prep, plating, and service order — meat and dairy courses never share a line or a service wave." },
    { question: "Which ingredients are certified?", answer: "Base ingredients marked kosher-certified on our sourcing sheet carry hechshers; the list is provided with your proposal." },
  ],
  vegan: [
    { question: "Is anything cooked in shared fryers?", answer: "No — vegan dishes use dedicated prep surfaces and oil. Shared-equipment risks are flagged per dish on the allergen sheet." },
    { question: "Can an entire event menu be vegan?", answer: "Yes — full-vegan weddings and galas get the same tasting and the same architecture as any other engagement." },
    { question: "How do you treat honey and dairy derivatives?", answer: "Tracked at ingredient level and excluded from vegan-marked dishes; labeling calls out anything borderline." },
  ],
  vegetarian: [
    { question: "Do your cheeses use animal rennet?", answer: "Rennet is tracked per cheese; vegetarian-marked dishes use microbial-rennet cheeses only, listed on the sourcing sheet." },
    { question: "Are stocks and sauces vegetarian?", answer: "Vegetable stocks are built in-house; nothing vegetarian-marked sits on a meat base, ever." },
    { question: "Is there always a vegetarian main?", answer: "Every event menu carries at least one vegetarian main by default — designed as a main, not a garnish plate." },
  ],
  "gluten-free": [
    { question: "Can you serve celiac guests safely?", answer: "Yes — dedicated prep zone, separate fryer oil, and sealed individually plated service for celiac-flagged guests on request." },
    { question: "Where does hidden gluten show up?", answer: "Soy sauce, spice blends, and fryer cross-contact — all tracked on our allergen sheets down to the brand level." },
    { question: "Is your gluten-free menu separate?", answer: "No — it's derived. A dish is marked gluten-free only when every ingredient and its prep path qualify." },
  ],
  "boxed-lunch": [
    { question: "What's the minimum and maximum order?", answer: "From 15 boxes to 1,000+, with staggered delivery windows for large orders across multiple sites." },
    { question: "How is each box labeled?", answer: "Contents, allergens, and dietary marks on every box — plus sorting by team, floor, or classroom before delivery." },
    { question: "Is the packaging compostable?", answer: "Compostable is our default, not an upcharge. Plastic appears only where food safety demands it." },
  ],
  breakfast: [
    { question: "How early can you deliver?", answer: "5:30am windows are routine for production crew calls; earlier is possible with notice. Hot service arrives hot, not held." },
    { question: "Do you bring coffee service?", answer: "Proper urns, real cups on request, and oat milk as standard — the coffee program is part of the order, not an afterthought." },
    { question: "Can we set a standing weekly breakfast?", answer: "Yes — standing orders get program pricing and a rotating menu so Monday never tastes like last Monday." },
  ],
  pricing: [
    { question: "How much does catering cost per person in Los Angeles?", answer: "Carthage Kitchen ranges from about $13 to $167 per person. Drop-off service is the most affordable; chef-attended stations sit in the middle; plated full-service is the highest because it includes staffing, rentals, and on-site execution." },
    { question: "What is the difference between drop-off, stations, and plated pricing?", answer: "Drop-off covers food, packaging, and delivery only. Stations add chef attendants and live equipment. Plated full-service adds composed plating, uniformed servers, rentals, and coordination — which is why per-person pricing rises with each step." },
    { question: "What drives catering prices up or down?", answer: "Guest count (larger events lower the per-person cost), service style, menu tier and proteins, staffing hours, rentals, and venue logistics like load-in and field kitchens. Dietary tracks and bar service add to the total." },
    { question: "Is there a minimum guest count or order size?", answer: "Most service starts around 10–15 guests; boxed lunches start at 15 boxes. Larger events unlock better per-person pricing and more service options." },
    { question: "How do I get an exact quote?", answer: "Share your event type, date, guest count, and dietary needs through the quote form. We come back within one business day with menu options and a per-person price for your exact event." },
  ],
};

export function faqsFor(key: string): Faq[] {
  return faqsByPage[key] ?? [];
}
