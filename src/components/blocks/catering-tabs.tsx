"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { eventOfferings } from "@/data/offerings";
import { combosForEvent } from "@/data/combos";
import { cuisines } from "@/data/cuisines";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

/** Per-event linked menus — the event→cuisine lattice. Text tabs on a
 *  hairline rail with a sliding copper underline; every panel stays in the
 *  DOM (SEO lattice), fading up when revealed. */
export function CateringTabs() {
  const tabs = eventOfferings.filter((o) => combosForEvent(o.slug).length > 0);
  const [active, setActive] = useState(0);

  return (
    <Section tone="parchment" className="zellige">
      <Container wide>
        <SectionHeading
          kicker="Event × Cuisine"
          title="Every event type has"
          accent="its own menus."
          lede="Pick your occasion — these are the cuisine programs we've actually paired with it, packages and all."
        />

        {/* Tab rail — text on a hairline, the underline glides */}
        <div
          role="tablist"
          aria-label="Event types"
          className="no-scrollbar mt-12 flex gap-x-8 overflow-x-auto border-b border-ink/10"
        >
          {tabs.map((tab, i) => {
            const isActive = active === i;
            return (
              <button
                key={tab.slug}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(i)}
                className={cn(
                  "relative shrink-0 pb-3.5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-200 ease-out",
                  isActive ? "text-copper-deep" : "text-ink-soft hover:text-ink"
                )}
              >
                {tab.short}
                <sup className="ml-1.5 font-sans text-[0.56rem] tracking-normal text-copper/70">
                  {combosForEvent(tab.slug).length}
                </sup>
                {isActive && (
                  <motion.span
                    layoutId="catering-tab-underline"
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute -bottom-px left-0 h-[2px] w-full bg-copper"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Panels — all server-rendered (crawlable); css-fade-up replays
            each time a panel's display flips from none to visible */}
        {tabs.map((tab, i) => {
          const eventCombos = combosForEvent(tab.slug);
          return (
            <div
              key={tab.slug}
              role="tabpanel"
              hidden={active !== i}
              className="css-fade-up mx-auto mt-2 max-w-3xl"
              style={{ animationDuration: "0.45s" }}
            >
              <ul>
                {eventCombos.map((combo) => {
                  const cuisine = cuisines.find((c) => c.slug === combo.cuisine);
                  return (
                    <li key={combo.cuisine}>
                      <Link
                        href={`/services/${combo.event}/${combo.cuisine}`}
                        className="group block border-b border-ink/10 py-5 transition-colors duration-200 ease-out hover:border-copper/40"
                      >
                        <span className="flex items-baseline gap-3">
                          <span className="font-display min-w-0 text-xl font-medium leading-snug text-ink transition-colors duration-200 ease-out group-hover:text-copper-deep">
                            {cuisine?.name} for {tab.short}
                          </span>
                          <span aria-hidden className="mb-1 flex-1 border-b border-dotted border-ink/25" />
                          <span className="shrink-0 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-copper-deep">
                            {combo.packages
                              ? `from $${Math.min(...combo.packages.map((p) => p.pricePerPerson))}/guest`
                              : "built to brief"}
                          </span>
                          <ArrowUpRight
                            aria-hidden
                            className="size-4 shrink-0 self-center text-copper-deep transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </span>
                        <span className="mt-1.5 block max-w-xl text-sm leading-relaxed text-ink-soft">
                          {combo.blurb}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link
                href={`/services/${tab.slug}`}
                className="mt-6 inline-flex items-center gap-2 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-copper-deep transition-colors duration-200 ease-out hover:text-copper"
              >
                All {tab.label} options
                <ArrowUpRight aria-hidden className="size-3.5" />
              </Link>
            </div>
          );
        })}
      </Container>
    </Section>
  );
}
