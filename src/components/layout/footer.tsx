import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { eventOfferings, programOfferings } from "@/data/offerings";
import { cuisines } from "@/data/cuisines";
import { locations } from "@/data/locations";
import { site } from "@/lib/site";
import { TanitMark } from "@/components/ui/tanit-mark";

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const col = "font-sans text-[0.66rem] font-semibold uppercase tracking-[var(--tracking-kicker)] text-gold";
const item = "text-sm text-foam-dim transition-colors hover:text-gold";

/** Footer per §8 — the sitewide internal-link mesh: Events / Programs /
 *  Cuisines / Locations columns + company links + NAP. */
export function Footer() {
  return (
    <footer className="slab grain relative isolate">
      <div className="chevron-strip" />
      <div className="mx-auto w-full max-w-[88rem] px-5 py-18 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex w-fit items-center gap-4 text-foam">
              <TanitMark className="h-11 text-gold" />
              <span className="flex flex-col items-center leading-none">
                <span className="font-display text-xl font-medium tracking-[0.3em]">CARTHAGE</span>
                <span className="mt-1.5 font-sans text-[0.56rem] font-semibold tracking-[0.74em] text-gold" style={{ marginRight: "-0.74em" }}>
                  KITCHEN
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-xs text-pretty text-sm leading-relaxed text-foam-dim">
              Chef-led catering across Los Angeles — Mediterranean & beyond.
              Seven cuisines, eleven event types, one kitchen. Since {site.founded}.
            </p>
            <ul className="mt-7 space-y-3 text-sm text-foam-dim">
              <li className="flex gap-3">
                <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>
                  {site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}
                </span>
              </li>
              <li>
                <a href={site.phoneHref} className="flex items-center gap-3 transition-colors hover:text-gold">
                  <Phone aria-hidden className="size-4 text-gold" /> {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 transition-colors hover:text-gold">
                  <Mail aria-hidden className="size-4 text-gold" /> {site.email}
                </a>
              </li>
              <li>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-gold">
                  <InstagramGlyph className="size-4 text-gold" /> @carthagekitchen
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Events">
            <p className={col}>Events</p>
            <ul className="mt-5 space-y-2.5">
              {eventOfferings.map((o) => (
                <li key={o.slug}>
                  <Link href={`/services/${o.slug}`} className={item}>
                    {o.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Programs and company">
            <p className={col}>Programs</p>
            <ul className="mt-5 space-y-2.5">
              {programOfferings.map((o) => (
                <li key={o.slug}>
                  <Link href={`/programs/${o.slug}`} className={item}>
                    {o.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className={`${col} mt-8`}>Company</p>
            <ul className="mt-5 space-y-2.5">
              {[
                { href: "/about", label: "About" },
                { href: "/why-carthage", label: "Why Carthage" },
                { href: "/events", label: "Events We've Catered" },
                { href: "/testimonials", label: "Testimonials" },
                { href: "/gallery", label: "Gallery" },
                { href: "/pricing", label: "Pricing" },
                { href: "/get-a-quote?from=footer", label: "Get a Quote" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={item}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Cuisines">
            <p className={col}>Cuisines</p>
            <ul className="mt-5 space-y-2.5">
              {cuisines.map((c) => (
                <li key={c.slug}>
                  <Link href={`/menus/${c.slug}`} className={item}>
                    {c.name} Catering
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/custom-package" className={item}>
                  Custom Spread Builder
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Locations">
            <p className={col}>Locations</p>
            <ul className="mt-5 space-y-2.5">
              {locations.map((l) => (
                <li key={l.slug}>
                  <Link href={`/locations/${l.slug}`} className={item}>
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-foam/10 pt-7 text-xs text-foam-dim/70 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-5">
            {[
              { href: "/privacy", label: "Privacy" },
              { href: "/terms", label: "Terms" },
              { href: "/accessibility", label: "Accessibility" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="font-sans text-[0.58rem] uppercase tracking-[0.3em]">
            Crafted in Los Angeles · Rooted in the Mediterranean
          </p>
        </div>
      </div>
    </footer>
  );
}
