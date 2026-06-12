import type { Cuisine, MenuCategory } from "@/types";
import { Container } from "@/components/layout/container";
import { SmartImage } from "@/components/shared/smart-image";
import { FramedImage } from "@/components/shared/framed-image";
import { TanitMark } from "@/components/ui/tanit-mark";
import { AmphoraMark, FlameMark, PalmMark, FishMark, OliveBranch } from "@/components/ui/motifs";
import { Reveal } from "@/components/shared/reveal";
import { ButtonLink } from "@/components/ui/button";

const tagLabels: Record<string, string> = {
  halal: "H",
  kosher: "K",
  vegan: "VG",
  vegetarian: "V",
  "gluten-free": "GF",
  "boxed-lunch": "BOX",
  breakfast: "AM",
};

/** Pick the Punic mark that suits a menu category. */
function CategoryMark({ name, index }: { name: string; index: number }) {
  const n = name.toLowerCase();
  const cls = "h-7 text-copper-deep";
  if (/sweet|dolci|dessert|return/.test(n)) return <PalmMark className={cls} />;
  if (/crudo|fish|harbor|raw/.test(n)) return <FishMark className="h-5 text-copper-deep" />;
  if (/mezze|antipasti|starter|taquiza|breakfast|passed/.test(n)) return <AmphoraMark className={cls} />;
  if (/smoker|kabob|main|platter|lunch|pasta|rice|station|carving|hearth|feast|crossing/.test(n))
    return <FlameMark className={cls} />;
  return [<AmphoraMark key="a" className={cls} />, <FlameMark key="f" className={cls} />, <PalmMark key="p" className={cls} />][index % 3];
}

function CategoryHeader({ category, index }: { category: MenuCategory; index: number }) {
  return (
    <div className="flex items-center gap-5">
      <span aria-hidden className="h-px flex-1 bg-copper/25" />
      <span className="grid size-12 shrink-0 place-items-center rounded-full border border-copper/30">
        <CategoryMark name={category.name} index={index} />
      </span>
      <span aria-hidden className="h-px flex-1 bg-copper/25" />
    </div>
  );
}

/** The menu spread — a wide printed card (two-column dishes, Punic marks
 *  crowning each course, the Tanit seal on top) beside a sticky ordering
 *  aside. The menu IS the product; the page now wears it full-width. */
export function DishListSection({ cuisine }: { cuisine: Cuisine }) {
  return (
    <section className="limewash py-16 sm:py-24">
      <Container wide>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,21rem)]">
          {/* The printed menu */}
          <Reveal>
            <article className="relative border border-ink/10 bg-ivory px-6 pb-12 pt-16 sm:px-12">
              {/* Inner passe-partout */}
              <div aria-hidden className="pointer-events-none absolute inset-3 border border-copper/15" />
              {/* The seal */}
              <div className="absolute -top-7 left-1/2 grid size-14 -translate-x-1/2 place-items-center rounded-full bg-ivory shadow-[var(--shadow-plate)] ring-1 ring-copper/30">
                <TanitMark aria-hidden className="h-7 text-copper-deep" />
              </div>

              <header className="text-center">
                <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[var(--tracking-kicker)] text-copper-deep">
                  The {cuisine.name} Program
                </p>
                <h2 className="font-display mt-3 text-3xl font-medium text-ink">{cuisine.name}</h2>
                <OliveBranch className="mx-auto mt-4 h-4 text-copper/50" />
              </header>

              {cuisine.categories.map((category, i) => (
                <section key={category.name} className="mt-12">
                  <CategoryHeader category={category} index={i} />
                  <h3 className="font-display mt-4 text-center text-2xl italic text-copper-deep">
                    {category.name}
                  </h3>
                  <ul className="mt-8 grid gap-x-12 gap-y-8 sm:grid-cols-2">
                    {category.dishes.map((dish) => (
                      <li key={dish.name} className="group flex items-start gap-4">
                        {/* The plate */}
                        <div className="relative size-16 shrink-0 overflow-hidden rounded-full shadow-[var(--shadow-plate)] ring-1 ring-copper/25 ring-offset-2 ring-offset-ivory">
                          <SmartImage
                            src={dish.image}
                            alt={dish.imageAlt}
                            sizes="64px"
                            className="transition-transform duration-500 ease-[var(--ease-luxe)] group-hover:scale-110"
                          />
                        </div>
                        <div className="min-w-0 flex-1 pt-1">
                          <div className="flex items-baseline gap-3">
                            <h4 className="font-display text-lg font-medium leading-snug text-ink">
                              {dish.name}
                            </h4>
                            <span aria-hidden className="mb-1 flex-1 border-b border-dotted border-ink/30" />
                            <span className="font-display whitespace-nowrap text-lg text-copper-deep">
                              ${dish.price}
                            </span>
                          </div>
                          <p className="mt-1 text-pretty text-[0.92rem] leading-relaxed text-ink-soft">
                            {dish.description}
                          </p>
                          <p className="mt-1.5 font-sans text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-ink-soft/80">
                            {dish.serves}
                            {dish.tags && dish.tags.length > 0 && (
                              <span className="ml-3 text-copper">
                                {dish.tags.map((t) => tagLabels[t]).join(" · ")}
                              </span>
                            )}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}

              <p className="mt-14 border-t border-ink/10 pt-6 text-center font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ink-soft/70">
                V vegetarian · VG vegan · GF gluten-free · H halal · K kosher-style
              </p>
            </article>
          </Reveal>

          {/* Sticky ordering aside */}
          <Reveal delay={0.15} className="lg:sticky lg:top-24">
            <div className="space-y-7">
              <FramedImage
                src={cuisine.image}
                alt={cuisine.imageAlt}
                sizes="(min-width: 1024px) 21rem, 100vw"
                className="aspect-[4/3]"
                priority
              />
              <div className="rounded-[4px] border-t-2 border-t-gold bg-ivory p-6 ring-1 ring-ink/10">
                <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[var(--tracking-kicker)] text-copper-deep">
                  Ordering this program
                </p>
                <ul className="mt-5 space-y-4">
                  {[
                    { Mark: AmphoraMark, title: "Tasting included", text: "Large events taste at the Melrose atelier — chef at the table, pencil in hand." },
                    { Mark: FlameMark, title: "Cooked to order", text: "Nothing held, nothing reheated — fired against your event's minute-map." },
                    { Mark: PalmMark, title: "Dietary tracks", text: "Vegan, halal, kosher-style, and gluten-free run in parallel through every course." },
                  ].map(({ Mark, title, text }) => (
                    <li key={title} className="flex gap-3.5">
                      <span className="grid size-9 shrink-0 place-items-center rounded-full border border-copper/30 text-copper-deep">
                        <Mark className="h-4.5" />
                      </span>
                      <span>
                        <span className="block font-sans text-[0.72rem] font-semibold tracking-wide text-ink">
                          {title}
                        </span>
                        <span className="mt-0.5 block text-[0.8rem] leading-snug text-ink-soft">{text}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-ink/10 pt-5">
                  <ButtonLink
                    href={`/get-a-quote?menu=${cuisine.slug}&from=menu-aside-${cuisine.slug}`}
                    variant="primary"
                    className="w-full"
                  >
                    Get a {cuisine.name} Quote
                  </ButtonLink>
                  <ButtonLink
                    href="/custom-package"
                    variant="outline"
                    withArrow={false}
                    className="mt-3 w-full"
                  >
                    Mix With Other Kitchens
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
