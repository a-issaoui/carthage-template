"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { eventOfferings } from "@/data/offerings";
import { combosForEvent } from "@/data/combos";
import { cuisines } from "@/data/cuisines";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

/** Per-event linked menus — answers "do you actually do MY event?" with the
 *  real event→cuisine lattice (crawlable links rendered for every tab). */
export function CateringTabs() {
  const tabs = eventOfferings.filter((o) => combosForEvent(o.slug).length > 0);
  const [active, setActive] = useState(0);

  return (
    <Section tone="parchment">
      <Container wide>
        <SectionHeading
          kicker="Event × Cuisine"
          title="Every event type has"
          accent="its own menus."
          lede="Pick your occasion — these are the cuisine programs we've actually paired with it, packages and all."
        />

        <div role="tablist" aria-label="Event types" className="mt-12 flex flex-wrap gap-2">
          {tabs.map((tab, i) => (
            <button
              key={tab.slug}
              type="button"
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={cn(
                "border px-5 py-2.5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.16em] transition-all duration-300",
                active === i
                  ? "border-copper bg-copper text-ivory"
                  : "border-ink/20 text-ink-soft hover:border-copper hover:text-copper-deep"
              )}
            >
              {tab.short}
            </button>
          ))}
        </div>

        {tabs.map((tab, i) => {
          const eventCombos = combosForEvent(tab.slug);
          return (
            <div key={tab.slug} role="tabpanel" hidden={active !== i} className="mx-auto mt-6 max-w-3xl">
              <ul className="border-t border-ink/10">
                {eventCombos.map((combo) => {
                  const cuisine = cuisines.find((c) => c.slug === combo.cuisine);
                  return (
                    <li key={combo.cuisine}>
                      <Link
                        href={`/services/${combo.event}/${combo.cuisine}`}
                        className="group block border-b border-ink/10 py-5 transition-colors hover:border-copper/40"
                      >
                        <span className="flex items-baseline gap-3">
                          <span className="font-display text-xl font-medium text-ink transition-colors group-hover:text-copper-deep">
                            {cuisine?.name} for {tab.short}
                          </span>
                          <span aria-hidden className="mb-1 flex-1 border-b border-dotted border-ink/25" />
                          <span className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-copper-deep">
                            {combo.packages
                              ? `from $${Math.min(...combo.packages.map((p) => p.pricePerPerson))}/guest`
                              : "built to brief"}
                          </span>
                          <ArrowUpRight aria-hidden className="size-4 shrink-0 self-center text-copper-deep transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                        <span className="mt-1 block max-w-xl text-sm leading-relaxed text-ink-soft">
                          {combo.blurb}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link
                href={`/services/${tab.slug}`}
                className="mt-5 inline-block font-sans text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-copper-deep transition-colors hover:text-copper"
              >
                All {tab.label} options →
              </Link>
            </div>
          );
        })}
      </Container>
    </Section>
  );
}
