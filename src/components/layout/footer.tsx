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

const col =
  "flex items-center gap-2.5 font-sans text-[0.62rem] font-semibold uppercase tracking-[var(--tracking-kicker)] text-gold before:inline-block before:h-px before:w-4 before:bg-gold/50";
const item =
  "inline-block text-sm text-foam-dim transition-[color,transform] duration-200 ease-out hover:translate-x-1 hover:text-gold";

/** Footer — the sitewide link mesh on the deep slab: Events / Programs /
 *  Cuisines / Locations columns + NAP. Opens with the gold seam thread;
 *  closes the page in the same dark register the CTA band began. */
export function Footer() {
  return (
    <footer className="slab-deep grain relative isolate">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="mx-auto w-full max-w-[88rem] px-5 pb-10 pt-16 sm:px-8 lg:px-12 lg:pt-20">
        <div className="grid gap-x-8 gap-y-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          {/* Lockup + NAP */}
          <div>
            <Link href="/" className="flex w-fit items-center gap-4 text-foam">
              <TanitMark className="h-11 text-gold" />
              <span className="flex flex-col items-center leading-none" style={{ fontFamily: "var(--font-logo)" }}>
                <span className="text-[1.2rem] font-semibold tracking-[0.18em]" style={{ marginRight: "-0.18em" }}>
                  CARTHAGE
                </span>
                <span className="mt-1.5 text-[0.62rem] font-semibold tracking-[0.62em] text-gold" style={{ marginRight: "-0.62em" }}>
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
                <a href={site.phoneHref} className="flex items-center gap-3 transition-colors duration-200 ease-out hover:text-gold">
                  <Phone aria-hidden className="size-4 text-gold" /> {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 transition-colors duration-200 ease-out hover:text-gold">
                  <Mail aria-hidden className="size-4 text-gold" /> {site.email}
                </a>
              </li>
              <li>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors duration-200 ease-out hover:text-gold">
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
                    {o.label.replace(" Catering", "")}
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
            <p className={`${col} mt-9`}>Company</p>
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

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-foam/10 pt-6 text-xs text-foam-dim/70 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-x-2.5">
            {[
              { href: "/privacy", label: "Privacy" },
              { href: "/terms", label: "Terms" },
              { href: "/accessibility", label: "Accessibility" },
            ].map((l, i) => (
              <li key={l.href} className="flex items-center gap-x-2.5">
                {i > 0 && <span aria-hidden className="inline-block size-0.5 rounded-full bg-foam-dim/40" />}
                <Link href={l.href} className="transition-colors duration-200 ease-out hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="font-sans text-[0.56rem] uppercase tracking-[0.3em]">
            Crafted in Los Angeles · Rooted in the Mediterranean
          </p>
        </div>
      </div>
    </footer>
  );
}
