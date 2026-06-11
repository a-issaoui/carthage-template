import { Star } from "lucide-react";
import type { Testimonial } from "@/types";

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

export function TestimonialCard({ t, dark = false }: { t: Testimonial; dark?: boolean }) {
  return (
    <figure
      className={
        dark
          ? "flex h-full flex-col border border-foam/15 bg-abyss-2/60 p-8"
          : "flex h-full flex-col border border-ink/10 bg-ivory p-8 shadow-[var(--shadow-plate)]"
      }
    >
      <Stars count={t.stars} />
      <blockquote
        className={`font-display mt-5 flex-1 text-pretty text-lg font-medium italic leading-snug ${dark ? "text-foam" : "text-ink"}`}
      >
        “{t.quote}”
      </blockquote>
      <figcaption className={`mt-6 border-t pt-4 ${dark ? "border-foam/15" : "border-ink/10"}`}>
        <p className={`font-sans text-sm font-semibold ${dark ? "text-gold" : "text-copper-deep"}`}>
          {t.name}
        </p>
        <p className={`mt-0.5 text-sm ${dark ? "text-foam-dim" : "text-ink-soft"}`}>{t.role}</p>
        <p className={`mt-0.5 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.18em] ${dark ? "text-foam-dim/70" : "text-ink-soft/70"}`}>
          {t.event} · via {t.platform}
        </p>
      </figcaption>
    </figure>
  );
}
