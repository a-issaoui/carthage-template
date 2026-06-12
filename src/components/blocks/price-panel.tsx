import { Check } from "lucide-react";
import { OliveBranch } from "@/components/ui/motifs";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface PriceColumn {
  name: string;
  price: string;
  priceSub: string;
  blurb?: string;
  items: string[];
  cta: { href: string; label: string };
  /** The anchor tier — parchment wash, badge, gold action. */
  featured?: boolean;
  badge?: string;
}

/** The price panel — one composed object (gold thread, soft ring, deep
 *  shadow) with hairline-divided columns and a featured tier that glows.
 *  Shared by /pricing and the combo PackageGrid. */
export function PricePanel({ columns }: { columns: PriceColumn[] }) {
  return (
    <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[4px] border-t-2 border-t-gold bg-ivory ring-1 ring-ink/10">
      <div
        className={cn(
          "grid divide-y divide-ink/8 md:divide-x md:divide-y-0",
          columns.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
        )}
      >
        {columns.map((col) => (
          <div
            key={col.name}
            className={cn(
              "relative flex flex-col px-8 pb-10 pt-12",
              col.featured && "zellige bg-parchment/70"
            )}
          >
            {col.featured && (
              <span className="absolute left-1/2 top-0 -translate-x-1/2 bg-gold px-4 py-1.5 font-sans text-[0.56rem] font-semibold uppercase tracking-[0.24em] text-abyss">
                {col.badge ?? "Most booked"}
              </span>
            )}
            <h3 className="font-display text-center text-2xl font-medium text-ink">{col.name}</h3>
            <p className="font-display mt-4 text-center text-[2.6rem] leading-none text-copper-deep">
              {col.price}
            </p>
            <p className="mt-2 text-center font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">
              {col.priceSub}
            </p>
            <OliveBranch className="mx-auto mt-6 h-4 text-copper/60" />
            {col.blurb && (
              <p className="mx-auto mt-6 max-w-xs text-center text-pretty text-[0.92rem] leading-relaxed text-ink-soft">
                {col.blurb}
              </p>
            )}
            <ul className="mx-auto mt-7 w-full max-w-[16rem] flex-1 space-y-3">
              {col.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-snug text-ink-soft">
                  <span className="mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-full border border-copper/30 text-copper-deep">
                    <Check aria-hidden className="size-2.5" strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-9 text-center">
              <ButtonLink
                href={col.cta.href}
                variant={col.featured ? "primary" : "outline"}
                withArrow={false}
                className="w-full max-w-[14rem]"
              >
                {col.cta.label}
              </ButtonLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
