import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/types";
import { Container } from "@/components/layout/container";
import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/shared/reveal";
import { FramedImage } from "@/components/shared/framed-image";

/** Evidence injection for intent + location pages — arch-framed thumbnails
 *  beside open text, divided by hairlines, no card boxes. */
export function CaseStudyStrip({
  studies,
  kicker = "From the Record",
  title = "We've done this before.",
}: {
  studies: CaseStudy[];
  kicker?: string;
  title?: string;
}) {
  if (studies.length === 0) return null;
  return (
    <section className="zellige bg-parchment py-(--space-section-sm)">
      <Container wide>
        <Reveal>
          <Kicker>{kicker}</Kicker>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display mt-4 font-medium text-ink" style={{ fontSize: "var(--text-display-section)" }}>
            {title}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-x-16 gap-y-10 lg:grid-cols-2">
          {studies.map((study, i) => (
            <Reveal key={study.slug} delay={i * 0.1}>
              <Link
                href={`/events/${study.slug}`}
                className="group flex gap-6 border-b border-ink/10 pb-9"
              >
                <FramedImage
                  src={study.image}
                  alt={study.imageAlt}
                  sizes="144px"
                  echo={false}
                  className="aspect-[3/4] w-28 shrink-0 sm:w-36"
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="min-w-0 pt-1">
                  <p className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-copper-deep">
                    {study.venue} · {study.guests} guests
                  </p>
                  <h3 className="font-display mt-2 flex items-start gap-2 text-xl font-medium leading-snug text-ink transition-colors group-hover:text-copper-deep sm:text-2xl">
                    {study.title}
                    <ArrowUpRight aria-hidden className="mt-1.5 size-4 shrink-0 text-copper-deep transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </h3>
                  <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-ink-soft">
                    {study.summary}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
