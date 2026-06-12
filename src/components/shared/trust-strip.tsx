import { ShieldCheck, BadgeCheck, CalendarClock, Star } from "lucide-react";
import { site } from "@/lib/site";

const items = [
  { icon: ShieldCheck, value: `$${site.insuranceM}M`, label: "Liability insured" },
  { icon: BadgeCheck, value: "Licensed · CA", label: "ServSafe certified" },
  { icon: CalendarClock, value: `${new Date().getFullYear() - site.founded} years`, label: "In Los Angeles" },
  { icon: Star, value: `${site.rating.value}★`, label: `${site.rating.count} reviews` },
];

/** Trust strip — the page's first quiet line of proof. A copper thread
 *  marks the seam with the section above; each claim reads value-first
 *  (display face) over a small-caps label, divided by hairlines. */
export function TrustStrip() {
  return (
    <div className="limewash relative">
      {/* Seam thread — the deliberate cut from the hero/slab above */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper/35 to-transparent"
      />
      <ul className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-y-7 px-5 py-8 lg:grid-cols-4 lg:py-9">
        {items.map(({ icon: Icon, value, label }) => (
          <li
            key={label}
            className="flex items-center justify-center gap-3.5 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:border-ink/8"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-full border border-copper/25 text-copper-deep">
              <Icon aria-hidden className="size-[18px]" strokeWidth={1.75} />
            </span>
            <span className="leading-none">
              <span className="font-display block text-[1.1rem] font-medium tracking-[0.01em] text-ink">
                {value}
              </span>
              <span className="mt-1.5 block font-sans text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                {label}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
