import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/** The lattice row — internal links set like menu lines (dotted leader,
 *  hairline rest), replacing boxed link-cards everywhere. */
export function LatticeLink({
  href,
  title,
  sub,
  blurb,
}: {
  href: string;
  title: string;
  sub?: string;
  blurb?: string;
}) {
  return (
    <Link href={href} className="group block border-b border-ink/10 py-5 transition-colors hover:border-copper/40">
      <span className="flex items-baseline gap-3">
        <span className="font-display text-xl font-medium leading-snug text-ink transition-colors group-hover:text-copper-deep">
          {title}
        </span>
        <span aria-hidden className="mb-1 flex-1 border-b border-dotted border-ink/25" />
        {sub && (
          <span className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-copper-deep">
            {sub}
          </span>
        )}
        <ArrowUpRight
          aria-hidden
          className="size-4 shrink-0 self-center text-copper-deep transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </span>
      {blurb && <span className="mt-1.5 block max-w-xl text-sm leading-relaxed text-ink-soft">{blurb}</span>}
    </Link>
  );
}
