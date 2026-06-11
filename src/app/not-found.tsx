import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TanitMark } from "@/components/ui/tanit-mark";
import { OrnamentDivider } from "@/components/ui/ornament-divider";

const routesBack = [
  { href: "/menus", label: "Browse the menus" },
  { href: "/services", label: "Every event we cater" },
  { href: "/events", label: "Events we've catered" },
  { href: "/get-a-quote?from=404", label: "Get a quote" },
];

export default function NotFound() {
  return (
    <section className="slab grain relative isolate flex min-h-svh flex-col items-center justify-center px-6 py-32 text-center">
      <TanitMark className="h-16 text-gold/40" />
      <p className="mt-10 font-sans text-[0.7rem] font-semibold uppercase tracking-[var(--tracking-kicker)] text-gold">
        404
      </p>
      <h1 className="font-display mt-6 max-w-2xl text-balance text-4xl font-medium leading-[1.05] text-foam sm:text-6xl">
        That page is <em className="italic text-gold">off the menu.</em>
      </h1>
      <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-foam-dim">
        Retired, renamed, or never served. Four good routes back in:
      </p>
      <OrnamentDivider className="mt-10 text-gold" />
      <ul className="mt-10 grid w-full max-w-2xl gap-3 sm:grid-cols-2">
        {routesBack.map((route) => (
          <li key={route.href}>
            <Link
              href={route.href}
              className="group flex items-center justify-between gap-3 border border-foam/20 px-6 py-4 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-foam transition-all duration-300 hover:border-gold hover:text-gold"
            >
              {route.label}
              <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
