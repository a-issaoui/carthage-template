import { ShieldCheck, BadgeCheck, CalendarClock, Star } from "lucide-react";
import { CrescentMark } from "@/components/ui/motifs";
import { site } from "@/lib/site";

const items = [
  { icon: ShieldCheck, label: `$${site.insuranceM}M liability insured` },
  { icon: BadgeCheck, label: "Licensed in CA · ServSafe" },
  { icon: CalendarClock, label: `${new Date().getFullYear() - site.founded} years in Los Angeles` },
  { icon: Star, label: `${site.rating.value}★ · ${site.rating.count} reviews` },
];

/** Trust ribbon — a quiet inline row, not a row of boxes. Crescent glyphs
 *  separate the claims; the strip reads as one breath, not four cells. */
export function TrustStrip() {
  return (
    <div className="limewash relative">
      <ul className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-5 py-6 sm:gap-x-7">
        {items.map(({ icon: Icon, label }, i) => (
          <li key={label} className="flex items-center gap-x-5 sm:gap-x-7">
            {i > 0 && <CrescentMark className="h-2.5 shrink-0 text-copper/40 max-sm:hidden" />}
            <span className="flex items-center gap-2.5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink-soft">
              <Icon aria-hidden className="size-4 text-copper-deep" />
              {label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
