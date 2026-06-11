"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { getOffering } from "@/data/offerings";
import { getLocation } from "@/data/locations";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Evidence hub: filter chips by event type AND area (both derived from
 *  the data), photo cards, and an empty state that's never a dead end. */
export function CaseStudyExplorer() {
  const eventTypes = [...new Set(caseStudies.map((c) => c.eventType))];
  const areas = [...new Set(caseStudies.map((c) => c.area))];
  const [eventFilter, setEventFilter] = useState("all");
  const [areaFilter, setAreaFilter] = useState("all");

  const visible = useMemo(
    () =>
      caseStudies.filter(
        (c) =>
          (eventFilter === "all" || c.eventType === eventFilter) &&
          (areaFilter === "all" || c.area === areaFilter)
      ),
    [eventFilter, areaFilter]
  );

  const chip = (active: boolean) =>
    cn(
      "border px-4 py-2 font-sans text-[0.66rem] font-semibold uppercase tracking-[0.16em] transition-all duration-300",
      active
        ? "border-copper bg-copper text-ivory"
        : "border-ink/20 text-ink-soft hover:border-copper hover:text-copper-deep"
    );

  return (
    <Section tone="ivory">
      <Container wide>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <div role="group" aria-label="Filter by event type" className="flex flex-wrap items-center gap-2">
            <span className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-ink-soft">Event</span>
            <button type="button" onClick={() => setEventFilter("all")} className={chip(eventFilter === "all")}>
              All
            </button>
            {eventTypes.map((t) => (
              <button key={t} type="button" onClick={() => setEventFilter(t)} className={chip(eventFilter === t)}>
                {getOffering(t)?.short ?? t}
              </button>
            ))}
          </div>
          <div role="group" aria-label="Filter by area" className="flex flex-wrap items-center gap-2">
            <span className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-ink-soft">Area</span>
            <button type="button" onClick={() => setAreaFilter("all")} className={chip(areaFilter === "all")}>
              All
            </button>
            {areas.map((a) => (
              <button key={a} type="button" onClick={() => setAreaFilter(a)} className={chip(areaFilter === a)}>
                {getLocation(a)?.name ?? a}
              </button>
            ))}
          </div>
        </div>

        {visible.length === 0 ? (
          <div className="mt-14 border border-dashed border-copper/40 bg-parchment/40 p-12 text-center">
            <h2 className="font-display text-2xl font-medium text-ink">
              No story for that combination — <em className="italic text-copper-deep">yet.</em>
            </h2>
            <p className="mx-auto mt-3 max-w-md text-pretty leading-relaxed text-ink-soft">
              Which means yours would be the first. We like firsts.
            </p>
            <div className="mt-7 flex justify-center">
              <ButtonLink href="/get-a-quote?from=events-empty-state" variant="primary">
                Plan It With Us
              </ButtonLink>
            </div>
          </div>
        ) : (
          <motion.ul layout className="mt-12 grid gap-10 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {visible.map((study) => (
                <motion.li
                  key={study.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={`/events/${study.slug}`}
                    className="group block h-full bg-ivory shadow-[var(--shadow-plate)] transition-all duration-500 ease-[var(--ease-luxe)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-plate-lg)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={study.image}
                        alt={study.imageAlt}
                        fill
                        sizes="(min-width: 768px) 44vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:scale-105"
                      />
                      <div className="absolute left-5 top-5 bg-abyss/85 px-4 py-2 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
                        {getOffering(study.eventType)?.short} · {study.guests} guests · {getLocation(study.area)?.name}
                      </div>
                    </div>
                    <div className="p-7">
                      <h2 className="font-display flex items-start justify-between gap-4 text-2xl font-medium leading-tight text-ink">
                        {study.title}
                        <ArrowUpRight aria-hidden className="mt-1 size-5 shrink-0 text-copper-deep transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </h2>
                      <p className="mt-2.5 font-sans text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-copper-deep">
                        {study.venue} · {study.date}
                      </p>
                      <p className="mt-3.5 text-pretty leading-relaxed text-ink-soft">{study.summary}</p>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        )}
      </Container>
    </Section>
  );
}
