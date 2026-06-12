import Image from "next/image";
import { site } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";
import { TanitMark } from "@/components/ui/tanit-mark";

/** FullHero — the only H1. Entirely CSS-animated and server-rendered:
 *  nothing here waits on hydration, so the image and headline are visible
 *  on first paint in any browser. Ends in the site's signature arc so the
 *  page flows into the TrustStrip below instead of cutting to it. */
export function Hero() {
  return (
    <section className="slab grain relative isolate flex min-h-svh flex-col justify-end overflow-hidden">
      {/* CSS-only backdrop: visible before hydration, never blanks */}
      <div className="hero-backdrop absolute inset-0 -z-10">
        <Image
          src="/images/hero/hero-carthage.jpg"
          alt="A Carthaginian terrace feast overlooking the ancient harbor at sunset"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/40 to-abyss/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-abyss/65 via-abyss/15 to-transparent" />
      </div>

      {/* The sign of Tanit — centered in the gutter between the viewport
          edge and the text column ((100vw − 88rem)/4 = the gap's midpoint) */}
      <div
        aria-hidden
        className="css-fade-up pointer-events-none absolute top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-gold max-lg:hidden"
        style={{
          left: "max(calc((100vw - 88rem) / 4), 1rem)",
          animationDelay: "0.8s",
          animationDuration: "2.4s",
        }}
      >
        <TanitMark className="h-[clamp(14rem,22vw,26rem)] opacity-[0.11]" />
      </div>

      <div className="mx-auto w-full max-w-[88rem] px-5 pb-28 pt-40 sm:px-8 sm:pb-32 lg:px-12">


        <p
          className="css-fade-up mt-7 flex items-center gap-3 font-sans text-[0.72rem] font-semibold uppercase tracking-[var(--tracking-kicker)] text-ember"
          style={{ animationDelay: "0.45s" }}
        >
          <span aria-hidden className="inline-block h-px w-10 bg-ember" />
          Since {site.founded} · {site.rating.value}★ across {site.rating.count} reviews
        </p>

        <h1
          className="font-display mt-6 max-w-4xl text-balance font-medium leading-[1.12] text-foam"
          style={{ fontSize: "var(--text-display-hero)" }}
        >
          {/* Each mask gets a descender allowance (pb) that a negative mb
              reclaims — glyphs render fully, lines stay visually tight. */}
          {["Chef-led catering across", "Los Angeles —"].map((line, i) => (
            <span key={line} className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
              <span className="rise-line block" style={{ animationDelay: `${0.6 + i * 0.12}s` }}>
                {line}
              </span>
            </span>
          ))}
          <span className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
            <span className="rise-line block" style={{ animationDelay: "0.84s" }}>
              <em className="italic text-gold">Mediterranean & beyond.</em>
            </span>
          </span>
        </h1>

        <p
          className="css-fade-up mt-6 max-w-xl text-pretty text-lg leading-relaxed text-foam-dim"
          style={{ animationDelay: "1.1s" }}
        >
          Seven cuisine programs, eleven event types, one chef-led kitchen.
          Weddings, premieres, school lunches, and office programs — same
          brigade, same standard.
        </p>

        <div className="css-fade-up mt-8 flex flex-wrap items-center gap-4" style={{ animationDelay: "1.3s" }}>
          <ButtonLink href="/get-a-quote?from=home-hero" variant="gold" size="lg">
            Request a Quote
          </ButtonLink>
          <ButtonLink href={site.phoneHref} variant="outline-light" size="lg" withArrow={false}>
            Call {site.phone}
          </ButtonLink>
        </div>
      </div>

    </section>
  );
}
