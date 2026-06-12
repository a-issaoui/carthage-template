import { Container } from "@/components/layout/container";
import { Kicker } from "@/components/ui/kicker";
import { TanitMark } from "@/components/ui/tanit-mark";
import { Reveal } from "@/components/shared/reveal";

/** The hero mark — gold Tanit centered in the zone between the text block
 *  and the hero's right end. Shared by PageHero and the custom heroes
 *  (quote, pricing, testimonials). */
export function HeroMark() {
  return (
    <Reveal
      delay={0.25}
      className="hidden flex-1 items-center justify-center self-stretch md:flex"
    >
      <TanitMark aria-hidden className="h-40 text-gold opacity-[0.16] sm:h-48 lg:h-56" />
    </Reveal>
  );
}

/** One height for every inner hero — locked min-h, content centered in the
 *  zone below the fixed header, regardless of how much content a page has. */
export const heroFrame =
  "slab grain relative isolate flex min-h-[30rem] flex-col justify-center overflow-hidden pb-12 pt-28 sm:min-h-[36rem] sm:pt-32";

/** In-hero facts rail — gold value, quiet small-caps label. The same
 *  register as the quote page's proof rail. */
export function HeroFacts({ facts }: { facts: { label: string; value: string }[] }) {
  return (
    <ul className="mt-8 flex flex-wrap gap-x-9 gap-y-3.5">
      {facts.map((fact) => (
        <li
          key={fact.label}
          className="font-sans text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-foam-dim"
        >
          <span className="font-display mr-2.5 text-lg normal-case tracking-normal text-gold">
            {fact.value}
          </span>
          {fact.label}
        </li>
      ))}
    </ul>
  );
}

/** Inner-page opener — the quote-page hero, sitewide: navy slab, kicker,
 *  fluid display headline, lede, the sign of Tanit centered right,
 *  chevron strip at the base. (Home keeps its own cinematic hero.) */
export function PageHero({
  kicker,
  title,
  accent,
  lede,
  children,
}: {
  kicker: string;
  title: string;
  accent?: string;
  lede?: string;
  /** Optional in-hero extras (e.g. a HeroFacts rail), rendered after the lede. */
  children?: React.ReactNode;
}) {
  return (
    <section className={heroFrame}>
      <Container wide>
        <div className="flex items-center gap-10">
          <div className="min-w-0 max-w-4xl flex-[2]">
            <Reveal>
              <Kicker tone="dark">{kicker}</Kicker>
            </Reveal>
            <Reveal delay={0.1}>
              <h1
                className="font-display mt-6 text-balance font-medium leading-[1.04] text-foam"
                style={{ fontSize: "var(--text-display-page)" }}
              >
                {title}
                {accent && (
                  <>
                    {" "}
                    <em className="italic text-gold">{accent}</em>
                  </>
                )}
              </h1>
            </Reveal>
            {lede && (
              <Reveal delay={0.2}>
                <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-foam-dim">
                  {lede}
                </p>
              </Reveal>
            )}
            {children && <Reveal delay={0.3}>{children}</Reveal>}
          </div>
          <HeroMark />
        </div>
      </Container>
      <div className="chevron-strip absolute inset-x-0 bottom-0" />
    </section>
  );
}
