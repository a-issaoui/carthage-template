import { cuisines } from "@/data/cuisines";
import { Container } from "@/components/layout/container";
import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/shared/reveal";
import { FramedImage } from "@/components/shared/framed-image";
import { ButtonLink } from "@/components/ui/button";

/** Featured cuisine band — the seasonal merchandising chapter. A framed
 *  arch portrait instead of a washed-out background; first half of the
 *  page's dark movement (testimonials follow on the same slab). */
export function FeaturedBand() {
  const featured = cuisines.find((c) => c.slug === "persian") ?? cuisines[0];
  return (
    <section className="slab grain relative isolate overflow-hidden pb-(--space-section-sm) pt-(--space-section)">
      {/* Seam thread — the cut from the ivory dishes above */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <Container wide>
        <div className="grid items-center gap-x-16 gap-y-12 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <Reveal>
              <Kicker tone="dark">This Season</Kicker>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="font-display mt-5 max-w-xl text-balance font-medium leading-[1.06] text-foam"
                style={{ fontSize: "var(--text-display-section)" }}
              >
                {featured.name} season is booking —{" "}
                <em className="italic text-gold">tahdig and all.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-foam-dim">
                {featured.description}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href={`/menus/${featured.slug}`} variant="gold">
                  See the {featured.name} Menu
                </ButtonLink>
                <ButtonLink
                  href={`/get-a-quote?menu=${featured.slug}&from=home-featured-band`}
                  variant="outline-light"
                  withArrow={false}
                >
                  Get a {featured.name} Quote
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="max-lg:hidden">
            <FramedImage
              src={featured.image}
              alt={featured.imageAlt}
              sizes="(min-width: 1024px) 30vw, 0px"
              className="ml-auto aspect-[4/5] w-full max-w-sm"
              imgClassName="brightness-[0.96]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
