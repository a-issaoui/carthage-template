"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { getOffering } from "@/data/offerings";
import { getLocation } from "@/data/locations";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SmartImage } from "@/components/shared/smart-image";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Evidence hub: filter rails (event type AND area, derived from data),
 *  open photo cards with overlap title panels, an empty state that's
 *  never a dead end. */
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

  const railButton = (active: boolean) =>
    cn(
      "relative shrink-0 pb-3 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-200 ease-out",
      active
        ? "text-copper-deep after:absolute after:-bottom-px after:left-0 after:h-[2px] after:w-full after:bg-copper"
        : "text-ink-soft hover:text-ink"
    );

  const railLabel =
    "shrink-0 pb-3 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-copper-deep/60";

  return (
    <Section tone="ivory">
      <Container wide>
        {/* Filter rails — text on hairlines, the tab language of the site */}
        <div className="no-scrollbar flex flex-wrap items-end gap-x-10 gap-y-5 overflow-x-auto border-b border-ink/10">
          <div role="group" aria-label="Filter by event type" className="flex items-end gap-x-6">
            <span className={railLabel}>Event</span>
            <button type="button" aria-pressed={eventFilter === "all"} onClick={() => setEventFilter("all")} className={railButton(eventFilter === "all")}>
              All
            </button>
            {eventTypes.map((t) => (
              <button key={t} type="button" aria-pressed={eventFilter === t} onClick={() => setEventFilter(t)} className={railButton(eventFilter === t)}>
                {getOffering(t)?.short ?? t}
              </button>
            ))}
          </div>
          <div role="group" aria-label="Filter by area" className="flex items-end gap-x-6">
            <span className={railLabel}>Area</span>
            <button type="button" aria-pressed={areaFilter === "all"} onClick={() => setAreaFilter("all")} className={railButton(areaFilter === "all")}>
              All
            </button>
            {areas.map((a) => (
              <button key={a} type="button" aria-pressed={areaFilter === a} onClick={() => setAreaFilter(a)} className={railButton(areaFilter === a)}>
                {getLocation(a)?.name ?? a}
              </button>
            ))}
          </div>
        </div>

        {visible.length === 0 ? (
          <div className="double-rule mx-auto mt-16 max-w-xl pt-9 text-center text-ink/25">
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
          <motion.ul layout className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {visible.map((study, i) => (
                <motion.li
                  key={study.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={`/events/${study.slug}`} className="group block">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[3px] shadow-[var(--shadow-plate)] transition-shadow duration-300 group-hover:shadow-[var(--shadow-plate-lg)]">
                      <SmartImage
                        src={study.image}
                        alt={study.imageAlt}
                        priority={i < 2}
                        sizes="(min-width: 768px) 44vw, 100vw"
                        className="transition-transform duration-500 ease-[var(--ease-luxe)] group-hover:scale-[1.04]"
                      />
                      <div className="absolute left-5 top-5 bg-abyss/85 px-4 py-2 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
                        {getOffering(study.eventType)?.short} · {study.guests} guests · {getLocation(study.area)?.name}
                      </div>
                    </div>
                    {/* Title panel straddling the image edge */}
                    <div className="overlap-panel -mt-10 mr-10 bg-ivory px-6 pt-5">
                      <h2 className="font-display flex items-start justify-between gap-4 text-2xl font-medium leading-tight text-ink transition-colors duration-200 ease-out group-hover:text-copper-deep">
                        {study.title}
                        <ArrowUpRight
                          aria-hidden
                          className="mt-1 size-5 shrink-0 text-copper-deep transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </h2>
                      <p className="mt-2 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-copper-deep">
                        {study.venue} · {study.date}
                      </p>
                      <p className="mt-3 text-pretty leading-relaxed text-ink-soft">{study.summary}</p>
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
