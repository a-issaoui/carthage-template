import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Offering } from "@/types";
import { offeringHref } from "@/data/offerings";
import { SmartImage } from "@/components/shared/smart-image";
import { cn } from "@/lib/utils";

/** One card per `catering` row — an image with a title panel overlapping its
 *  lower edge, not a sealed box. `featured` gets the Mediterranean arch. */
export function OfferingCard({
  offering,
  featured = false,
}: {
  offering: Offering;
  featured?: boolean;
}) {
  return (
    <Link href={offeringHref(offering)} className="group block">
      <div
        className={cn(
          "relative overflow-hidden shadow-[var(--shadow-plate)] transition-shadow duration-500 group-hover:shadow-[var(--shadow-plate-lg)]",
          featured ? "arch aspect-[4/5] sm:aspect-[5/6]" : "aspect-[4/3]"
        )}
      >
        <SmartImage
          src={offering.image}
          alt={offering.imageAlt}
          sizes={featured ? "(min-width: 1024px) 45vw, 100vw" : "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"}
          className="transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:scale-105"
        />
        {offering.startingPrice && (
          <span className="absolute right-4 top-4 bg-abyss/85 px-3 py-1.5 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-gold backdrop-blur-sm">
            From ${offering.startingPrice}/guest
          </span>
        )}
      </div>

      {/* Title panel straddling the image edge */}
      <div className="overlap-panel -mt-9 mr-6 bg-ivory px-5 pb-1 pt-4 sm:mr-10">
        <h3 className="font-display flex items-start justify-between gap-3 text-xl font-medium leading-tight text-ink transition-colors group-hover:text-copper-deep">
          {offering.label}
          <ArrowUpRight
            aria-hidden
            className="mt-0.5 size-4 shrink-0 text-copper-deep transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </h3>
        <p className="mt-2 text-pretty text-[0.92rem] leading-relaxed text-ink-soft">
          {offering.blurb}
        </p>
        <p className="mt-2.5 font-sans text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-copper-deep/80">
          {offering.kind === "program" ? "Recurring program" : offering.leadTime}
        </p>
      </div>
    </Link>
  );
}
