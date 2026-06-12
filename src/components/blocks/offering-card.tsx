import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Offering } from "@/types";
import { offeringHref } from "@/data/offerings";
import { SmartImage } from "@/components/shared/smart-image";
import { cn } from "@/lib/utils";

/** One card per `catering` row — an image with a title panel overlapping its
 *  lower edge. `featured` runs tall under the Mediterranean arch and fills
 *  its grid track (row-span layouts). */
export function OfferingCard({
  offering,
  featured = false,
}: {
  offering: Offering;
  featured?: boolean;
}) {
  return (
    <Link
      href={offeringHref(offering)}
      className="group flex h-full flex-col transition-transform duration-300 ease-[var(--ease-luxe)] hover:-translate-y-1"
    >
      <div
        className={cn(
          "relative overflow-hidden shadow-[var(--shadow-plate)] transition-shadow duration-300 group-hover:shadow-[var(--shadow-plate-lg)]",
          featured ? "arch min-h-[24rem] flex-1" : "aspect-[4/3] rounded-[3px]"
        )}
      >
        <SmartImage
          src={offering.image}
          alt={offering.imageAlt}
          sizes={featured ? "(min-width: 1024px) 32vw, 100vw" : "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"}
          className="transition-transform duration-500 ease-[var(--ease-luxe)] group-hover:scale-[1.04]"
        />
        {offering.startingPrice && (
          <span className="absolute right-4 top-4 bg-abyss/85 px-3 py-1.5 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-gold backdrop-blur-sm">
            From ${offering.startingPrice}/guest
          </span>
        )}
      </div>

      {/* Title panel straddling the image edge */}
      <div className="overlap-panel -mt-9 mr-8 bg-ivory px-5 pt-4">
        <h3 className="font-display flex items-start justify-between gap-3 text-xl font-medium leading-snug text-ink transition-colors duration-300 group-hover:text-copper-deep">
          {offering.label}
          <ArrowUpRight
            aria-hidden
            className="mt-1 size-4 shrink-0 text-copper-deep transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </h3>
        <p className={cn("mt-2 text-pretty text-[0.92rem] leading-relaxed text-ink-soft", !featured && "line-clamp-2")}>
          {offering.blurb}
        </p>
        <p className="mt-3 font-sans text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-copper-deep/80">
          {offering.kind === "program" ? "Recurring program" : offering.kind === "tool" ? "Build your own" : offering.leadTime}
        </p>
      </div>
    </Link>
  );
}
