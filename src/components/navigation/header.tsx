"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { eventOfferings, programOfferings } from "@/data/offerings";
import { cuisines } from "@/data/cuisines";
import { site } from "@/lib/site";
import { TanitMark } from "@/components/ui/tanit-mark";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* Header — logo lockup left (TANIT + stacked CARTHAGE/KITCHEN caps),
   nav centered, phone + quote pill right. Dropdowns mirror the two
   buyer modes (Catering / Cuisines). */

function Wordmark({ light }: { light: boolean }) {
  return (
    <span className="flex flex-col items-center leading-none">
      <span className="font-display text-[1.05rem] font-medium tracking-[0.3em]">
        CARTHAGE
      </span>
      <span
        className={cn(
          "mt-1 font-sans text-[0.52rem] font-semibold tracking-[0.74em]",
          light ? "text-gold" : "text-copper-deep"
        )}
        style={{ marginRight: "-0.74em" }}
      >
        KITCHEN
      </span>
    </span>
  );
}

const panelClass =
  "invisible absolute left-1/2 top-full z-50 -translate-x-1/2 border-t-2 border-gold bg-ivory opacity-0 shadow-[var(--shadow-plate-lg)] transition-all duration-300 ease-[var(--ease-luxe)] translate-y-2 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100";

const panelHeading =
  "px-4 pb-2 pt-1 font-sans text-[0.56rem] font-semibold uppercase tracking-[0.3em] text-copper-deep/70";

const panelLink =
  "block px-4 py-2 text-[0.92rem] font-medium text-ink transition-colors hover:bg-parchment/70 hover:text-copper-deep";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const overHero = pathname === "/" && !scrolled;
  const light = overHero && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const topItem =
    "group/item relative flex items-center gap-1.5 py-2 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition-opacity";
  const underline =
    "pointer-events-none absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-[var(--ease-luxe)] group-hover/item:scale-x-100";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[var(--ease-luxe)]",
        light
          ? "bg-transparent text-foam"
          : "border-b border-ink/8 bg-ivory/95 text-ink backdrop-blur-md"
      )}
    >
      <div className="mx-auto grid h-20 w-full max-w-[88rem] grid-cols-[1fr_auto] items-center px-5 sm:px-8 xl:grid-cols-[1fr_auto_1fr] lg:px-12">
        {/* Lockup */}
        <Link
          href="/"
          aria-label={`${site.name} — home`}
          className="flex w-fit items-center gap-3.5"
        >
          <TanitMark className={cn("h-9", light ? "text-gold" : "text-copper-deep")} />
          <Wordmark light={light} />
        </Link>

        {/* Centered nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 xl:flex">
          <div className="group relative">
            <button type="button" className={cn(topItem, "opacity-85 hover:opacity-100")} aria-haspopup="true">
              Catering <ChevronDown aria-hidden className="size-3 transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div className={panelClass} style={{ minWidth: "34rem" }}>
              <div className="grid grid-cols-2 gap-x-6 p-5">
                <div>
                  <p className={panelHeading}>By Event</p>
                  {eventOfferings.map((o) => (
                    <Link key={o.slug} href={`/services/${o.slug}`} className={panelLink}>
                      {o.label}
                    </Link>
                  ))}
                </div>
                <div className="border-l border-ink/8 pl-6">
                  <p className={panelHeading}>Recurring</p>
                  {programOfferings.map((o) => (
                    <Link key={o.slug} href={`/programs/${o.slug}`} className={panelLink}>
                      {o.label}
                    </Link>
                  ))}
                  <p className={cn(panelHeading, "mt-4")}>More</p>
                  <Link href="/services" className={panelLink}>
                    All services
                  </Link>
                  <Link href="/pricing" className={panelLink}>
                    Pricing guide
                  </Link>
                  <Link href="/events" className={panelLink}>
                    Events we've catered
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative">
            <button type="button" className={cn(topItem, "opacity-85 hover:opacity-100")} aria-haspopup="true">
              Cuisines <ChevronDown aria-hidden className="size-3 transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div className={panelClass} style={{ minWidth: "17rem" }}>
              <div className="p-5">
                <p className={panelHeading}>Seven Kitchens</p>
                {cuisines.map((c) => (
                  <Link key={c.slug} href={`/menus/${c.slug}`} className={panelLink}>
                    {c.name}
                  </Link>
                ))}
                <p className={cn(panelHeading, "mt-4")}>More</p>
                <Link href="/menus" className={panelLink}>
                  All menus
                </Link>
                <Link href="/custom-package" className={panelLink}>
                  Custom spread builder
                </Link>
              </div>
            </div>
          </div>

          {[
            { href: "/locations", label: "Locations" },
            { href: "/gallery", label: "Gallery" },
            { href: "/about", label: "About" },
          ].map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  topItem,
                  active
                    ? light
                      ? "text-gold"
                      : "text-copper-deep"
                    : "opacity-85 hover:opacity-100"
                )}
              >
                {link.label}
                <span className={cn(underline, active && "scale-x-100")} />
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden items-center justify-end gap-6 xl:flex">
          <a
            href={site.phoneHref}
            className="group/item relative flex items-center gap-2 font-sans text-[0.7rem] font-semibold tracking-[0.08em] opacity-85 transition-opacity hover:opacity-100"
          >
            <span
              className={cn(
                "grid size-8 place-items-center rounded-full border",
                light ? "border-foam/30" : "border-ink/15"
              )}
            >
              <Phone aria-hidden className="size-3.5" />
            </span>
            {site.phone}
          </a>
          <ButtonLink
            href="/get-a-quote?from=header"
            variant={light ? "gold" : "primary"}
            withArrow={false}
          >
            Request Quote
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="justify-self-end xl:hidden"
        >
          {open ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="slab grain fixed inset-0 top-20 z-40 overflow-y-auto xl:hidden"
          >
            <div className="space-y-8 px-7 pb-28 pt-8">
              <div>
                <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[var(--tracking-kicker)] text-gold">
                  Catering
                </p>
                <ul className="mt-3 grid grid-cols-2 gap-x-4">
                  {[...eventOfferings, ...programOfferings].map((o) => (
                    <li key={o.slug}>
                      <Link
                        href={o.kind === "event" ? `/services/${o.slug}` : `/programs/${o.slug}`}
                        className="block border-b border-foam/10 py-2.5 text-[0.95rem] text-foam hover:text-gold"
                      >
                        {o.short}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[var(--tracking-kicker)] text-gold">
                  Cuisines
                </p>
                <ul className="mt-3 grid grid-cols-2 gap-x-4">
                  {cuisines.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/menus/${c.slug}`}
                        className="block border-b border-foam/10 py-2.5 text-[0.95rem] text-foam hover:text-gold"
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="space-y-1">
                {[
                  { href: "/locations", label: "Locations" },
                  { href: "/events", label: "Events We've Catered" },
                  { href: "/gallery", label: "Gallery" },
                  { href: "/pricing", label: "Pricing" },
                  { href: "/about", label: "About" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="font-display block py-2 text-2xl text-foam hover:text-gold">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col items-start gap-4">
                <ButtonLink href="/get-a-quote?from=mobile-menu" variant="gold" size="lg">
                  Request Quote
                </ButtonLink>
                <a href={site.phoneHref} className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-foam">
                  {site.phone}
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
