import { cuisines } from "@/data/cuisines";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { MenuCard } from "@/components/blocks/menu-card";
import { ButtonLink } from "@/components/ui/button";

/** Seven doors, seven kitchens — a staggered row of Sidi Bou Saïd arches,
 *  scrolling like a walk through the medina. */
export function CuisineGrid() {
  return (
    <Section tone="ivory" className="overflow-hidden">
      <Container wide>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            kicker="The Cuisines"
            title="Seven doors,"
            accent="one kitchen behind them."
            lede="Every program below is a complete, priced menu — same sourcing, same brigade, every flavor profile."
          />
          <Reveal delay={0.2}>
            <ButtonLink href="/menus" variant="outline" className="mb-2">
              All Menus
            </ButtonLink>
          </Reveal>
        </div>
      </Container>

      <Reveal delay={0.15}>
        <ul className="no-scrollbar mt-14 flex snap-x gap-7 overflow-x-auto px-5 pb-6 sm:px-8 lg:px-12">
          {cuisines.map((cuisine, i) => (
            <li
              key={cuisine.slug}
              className={`w-52 shrink-0 snap-start sm:w-60 ${i % 2 === 1 ? "mt-10" : ""}`}
            >
              <MenuCard cuisine={cuisine} />
            </li>
          ))}
          <li className="flex w-52 shrink-0 snap-start items-center justify-center sm:w-60">
            <ButtonLink
              href="/custom-package"
              variant="outline"
              withArrow
              className="flex aspect-[3/4] w-full flex-col items-center justify-center gap-3 rounded-[999px_999px_14px_14px/420px_420px_14px_14px] border-dashed text-center"
            >
              Build a custom spread
            </ButtonLink>
          </li>
        </ul>
      </Reveal>
    </Section>
  );
}
