import { Star } from "lucide-react";
import type { Testimonial } from "@/types";
import { cn } from "@/lib/utils";

export function Stars({ count }: { count: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden
          className={i < count ? "size-3.5 fill-gold text-gold" : "size-3.5 text-gold/30"}
        />
      ))}
    </span>
  );
}

/** Testimonial — an open editorial column on a hairline, no panel box.
 *  Same anatomy on light and dark surfaces: stars → italic quote →
 *  gold/copper name → role → platform microcopy. */
export function TestimonialCard({ t, dark = false }: { t: Testimonial; dark?: boolean }) {
  return (
    <figure
      className={cn(
        "group h-full border-l pl-7 transition-colors duration-200 ease-out",
        dark ? "border-foam/15 hover:border-gold/50" : "border-ink/15 hover:border-copper/50"
      )}
    >
      <Stars count={t.stars} />
      <blockquote
        className={cn(
          "font-display mt-5 text-pretty text-xl font-medium italic leading-snug",
          dark ? "text-foam" : "text-ink"
        )}
      >
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-6">
        <p className={cn("font-sans text-sm font-semibold tracking-wide", dark ? "text-gold" : "text-copper-deep")}>
          {t.name}
        </p>
        <p className={cn("mt-1 text-sm leading-snug", dark ? "text-foam-dim" : "text-ink-soft")}>{t.role}</p>
        <p
          className={cn(
            "mt-1.5 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.18em]",
            dark ? "text-foam-dim/70" : "text-ink-soft/70"
          )}
        >
          {t.event} · via {t.platform}
        </p>
      </figcaption>
    </figure>
  );
}
