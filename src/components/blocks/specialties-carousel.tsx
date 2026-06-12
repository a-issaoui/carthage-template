import Link from "next/link";
import { specialties } from "@/data/specialties";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { FramedImage } from "@/components/shared/framed-image";
import { ButtonLink } from "@/components/ui/button";

/** Six signature dishes, six kitchens — all on the table at once. The row
 *  runs wider than the page layout, centered and full-bleed; no scroll,
 *  no fades. */
export function SpecialtiesCarousel() {
  return (
    <Section tone="ivory" className="overflow-hidden">
      <Container wide>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            kicker="Signature Dishes"
            title="Real dishes,"
            accent="real prices."
            lede="No 'market price', no mystery minimums — the plates our hosts ask for by name, priced as served."
          />
          <Reveal delay={0.2}>
            <ButtonLink href="/custom-package" variant="outline" className="mb-2">
              Build Your Spread
            </ButtonLink>
          </Reveal>
        </div>
      </Container>

      <Reveal delay={0.15}>
        <ul className="mx-auto mt-12 grid grid-cols-2 gap-x-6 gap-y-12 px-5 sm:grid-cols-3 sm:px-8 xl:grid-cols-6 xl:px-10">
          {specialties.map((dish, i) => (
            <li key={dish.name} className={i % 2 === 1 ? "xl:mt-8" : ""}>
              <Link href={`/menus/${dish.cuisineSlug}`} className="group block">
                {/* Cuisine eyebrow — the per-card datum, like the door numerals */}
                <p
                  aria-hidden
                  className="mb-3 flex items-center gap-3 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-copper-deep/70"
                >
                  {dish.cuisine}
                  <span className="h-px flex-1 bg-copper/20" />
                </p>

                <div className="transition-transform duration-300 ease-[var(--ease-luxe)] group-hover:-translate-y-1.5">
                  <FramedImage
                    src={dish.image}
                    alt={dish.imageAlt}
                    shape={i % 2 === 0 ? "arch" : "rect"}
                    echo={i % 2 === 0}
                    sizes="(min-width: 1280px) 16vw, (min-width: 640px) 32vw, 48vw"
                    className="aspect-[4/5]"
                    imgClassName="transition-transform duration-500 ease-[var(--ease-luxe)] group-hover:scale-[1.04]"
                  />
                </div>

                <span className="mt-5 flex items-baseline gap-2.5">
                  <span className="font-display text-lg font-medium leading-snug text-ink transition-colors duration-200 ease-out group-hover:text-copper-deep">
                    {dish.name}
                  </span>
                  <span aria-hidden className="mb-1 flex-1 border-b border-dotted border-ink/25" />
                  <span className="font-display text-lg text-copper-deep">${dish.price}</span>
                </span>
                <span className="mt-1.5 block text-sm leading-relaxed text-ink-soft">
                  {dish.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
