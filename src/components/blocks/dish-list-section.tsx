import type { MenuCategory } from "@/types";
import { Container } from "@/components/layout/container";
import { OrnamentDivider } from "@/components/ui/ornament-divider";
import { Reveal } from "@/components/shared/reveal";
import { SmartImage } from "@/components/shared/smart-image";

const tagLabels: Record<string, string> = {
  halal: "H",
  kosher: "K",
  vegan: "VG",
  vegetarian: "V",
  "gluten-free": "GF",
  "boxed-lunch": "BOX",
  breakfast: "AM",
};

/** Printed-menu layout: every dish served on its own plate — a round photo
 *  medallion beside name · dotted leader · price. Product pages only. */
export function DishListSection({ categories }: { categories: MenuCategory[] }) {
  return (
    <section className="limewash py-16 sm:py-24">
      <Container className="max-w-3xl">
        <Reveal>
          <article className="border border-ink/10 bg-ivory px-6 py-12 shadow-[var(--shadow-plate-lg)] sm:px-12">
            {categories.map((category, i) => (
              <section key={category.name} className={i > 0 ? "mt-14" : ""}>
                <OrnamentDivider className="text-copper" />
                <h2 className="font-display mt-5 text-center text-2xl italic text-copper-deep">
                  {category.name}
                </h2>
                <ul className="mt-9 space-y-8">
                  {category.dishes.map((dish) => (
                    <li key={dish.name} className="group flex items-start gap-5">
                      {/* The plate */}
                      <div className="relative size-16 shrink-0 overflow-hidden rounded-full shadow-[var(--shadow-plate)] ring-1 ring-copper/25 ring-offset-2 ring-offset-ivory sm:size-20">
                        <SmartImage
                          src={dish.image}
                          alt={dish.imageAlt}
                          sizes="80px"
                          className="transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:scale-110"
                        />
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5">
                        <div className="flex items-baseline gap-3">
                          <h3 className="font-display text-lg font-medium leading-snug text-ink">
                            {dish.name}
                          </h3>
                          <span aria-hidden className="mb-1 flex-1 border-b border-dotted border-ink/30" />
                          <span className="font-display whitespace-nowrap text-lg text-copper-deep">
                            ${dish.price}
                          </span>
                        </div>
                        <p className="mt-1 max-w-md text-pretty text-[0.92rem] leading-relaxed text-ink-soft">
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
            <p className="mt-12 border-t border-ink/10 pt-6 text-center font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ink-soft/70">
              V vegetarian · VG vegan · GF gluten-free · H halal · K kosher-style
            </p>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
