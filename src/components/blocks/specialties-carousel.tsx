import Link from "next/link";
import { specialties } from "@/data/specialties";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { SmartImage } from "@/components/shared/smart-image";

/** Signature dishes with real prices — staggered scroll row; every other
 *  plate framed under the Mediterranean arch, prices on dotted leaders. */
export function SpecialtiesCarousel() {
  return (
    <Section tone="ivory" className="overflow-hidden">
      <Container wide>
        <SectionHeading
          kicker="Signature Dishes"
          title="Real dishes,"
          accent="real prices."
          lede="No 'market price', no mystery minimums — the plates our hosts ask for by name, priced as served."
        />
      </Container>
      <Reveal delay={0.15}>
        <ul className="no-scrollbar mt-12 flex snap-x gap-7 overflow-x-auto px-5 pb-6 sm:px-8 lg:px-12">
          {specialties.map((dish, i) => (
            <li
              key={dish.name}
              className={`w-60 shrink-0 snap-start sm:w-68 ${i % 2 === 1 ? "mt-9" : ""}`}
            >
              <Link href={`/menus/${dish.cuisineSlug}`} className="group block">
                <div
                  className={`relative overflow-hidden shadow-[var(--shadow-plate)] ${
                    i % 2 === 0 ? "arch aspect-[4/5]" : "aspect-[4/3] mt-7"
                  }`}
                >
                  <SmartImage
                    src={dish.image}
                    alt={dish.imageAlt}
                    sizes="272px"
                    className="transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-baseline gap-2.5">
                  <h3 className="font-display text-lg font-medium leading-snug text-ink transition-colors group-hover:text-copper-deep">
                    {dish.name}
                  </h3>
                  <span aria-hidden className="mb-1 flex-1 border-b border-dotted border-ink/30" />
                  <span className="font-display text-lg text-copper-deep">${dish.price}</span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{dish.description}</p>
                <p className="mt-1.5 font-sans text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-copper-deep/80">
                  {dish.cuisine}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
