import Link from "next/link";
import { Plus } from "lucide-react";
import { cuisines } from "@/data/cuisines";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { MenuCard } from "@/components/blocks/menu-card";
import { ButtonLink } from "@/components/ui/button";

const archRadius = "rounded-[999px_999px_14px_14px/420px_420px_14px_14px]";

/** Seven doors + yours — an infinite medina walk. The row loops as a slow
 *  marquee (paused on hover), sized so six doors are always in frame.
 *  The list renders twice; the clone set is inert + aria-hidden. */
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
        <div className="group/doors relative mx-auto mt-14 max-w-[88rem] overflow-hidden">
          {/* Edge fades — the walk continues past the frame */}
          <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-ivory to-transparent sm:w-16" />
          <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-ivory to-transparent sm:w-16" />

          {/* Slot width = container/6 (gap baked into each slot as pr) */}
          <ul
            className="animate-marquee flex w-max pb-6 [--door-w:10rem] group-hover/doors:[animation-play-state:paused] motion-reduce:animate-none sm:[--door-w:12rem] lg:[--door-w:calc((min(100vw,88rem)-1.5rem)/6-1.5rem)]"
            style={{ animationDuration: "72s" }}
          >
            {[0, 1].map((set) =>
              [
                ...cuisines.map((cuisine, i) => (
                  <li
                    key={`${set}-${cuisine.slug}`}
                    aria-hidden={set === 1 || undefined}
                    inert={set === 1 || undefined}
                    className={`shrink-0 pr-6 ${i % 2 === 1 ? "mt-8" : ""}`}
                    style={{ width: "calc(var(--door-w) + 1.5rem)" }}
                  >
                    <p
                      aria-hidden
                      className="mb-3 flex items-center gap-3 font-sans text-[0.6rem] font-semibold tracking-[0.24em] text-copper-deep/70"
                    >
                      0{i + 1}
                      <span className="h-px flex-1 bg-copper/20" />
                    </p>
                    <MenuCard cuisine={cuisine} tabbable={set === 0} />
                  </li>
                )),
                <li
                  key={`${set}-custom`}
                  aria-hidden={set === 1 || undefined}
                  inert={set === 1 || undefined}
                  className="shrink-0 pr-6"
                  style={{ width: "calc(var(--door-w) + 1.5rem)" }}
                >
                  <p
                    aria-hidden
                    className="mb-3 flex items-center gap-3 font-sans text-[0.6rem] font-semibold tracking-[0.24em] text-copper-deep/70"
                  >
                    08
                    <span className="h-px flex-1 bg-copper/20" />
                  </p>
                  <Link href="/custom-package" className="group block" tabIndex={set === 1 ? -1 : undefined}>
                    <span
                      className={`flex aspect-[3/4] flex-col items-center justify-center gap-4 border border-dashed border-copper/40 text-copper-deep transition-all duration-300 ease-[var(--ease-luxe)] group-hover:-translate-y-1.5 group-hover:border-copper group-hover:bg-parchment/50 ${archRadius}`}
                    >
                      <span className="grid size-11 place-items-center rounded-full border border-copper/30 transition-transform duration-300 ease-out group-hover:rotate-90">
                        <Plus aria-hidden className="size-4" />
                      </span>
                      <span className="px-5 text-center font-sans text-[0.64rem] font-semibold uppercase tracking-[0.18em]">
                        Build a custom spread
                      </span>
                    </span>
                    <span className="mt-5 block text-center">
                      <span className="font-display block text-2xl font-medium text-ink transition-colors duration-300 group-hover:text-copper-deep">
                        Your Door
                      </span>
                      <span className="mx-auto mt-1 block max-w-[16rem] text-sm leading-snug text-ink-soft">
                        Pick dishes across all seven kitchens.
                      </span>
                    </span>
                  </Link>
                </li>,
              ]
            )}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
