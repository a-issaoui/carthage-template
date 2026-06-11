import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Kicker } from "@/components/ui/kicker";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { ParallaxImage } from "@/components/shared/parallax-image";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

/** Our craft — emotional warm-up; chef-led, scratch-cooked positioning in 3 lines. */
export function OurCraft() {
  return (
    <Section tone="ivory" className="py-16 sm:py-24">
      <Container wide>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <Reveal>
              <ParallaxImage
                src={img.chefSearing}
                alt="Founder-chef Amine Khelifi searing fish over open flame"
                className="arch aspect-[4/5] shadow-[var(--shadow-plate-lg)]"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </Reveal>
            <Reveal delay={0.2}>
              <div className="absolute -bottom-6 -right-3 bg-abyss px-6 py-4 text-center shadow-[var(--shadow-plate-lg)] sm:-right-6">
                <p className="font-display text-3xl text-gold">Since {site.founded}</p>
                <p className="mt-0.5 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-foam-dim">
                  Scratch-cooked · Chef-led
                </p>
              </div>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <Kicker>Our Craft</Kicker>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display mt-5 text-balance text-4xl font-medium leading-[1.06] text-ink sm:text-5xl">
                One kitchen, seven cuisines,{" "}
                <em className="italic text-copper-deep">zero shortcuts.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-6 space-y-5 text-pretty text-lg leading-relaxed text-ink-soft">
                <p>
                  Everything is scratch-cooked under chef Amine Khelifi — Tunis-born,
                  Lyon-trained — from a Mediterranean program built on his grandmother's
                  recipes to BBQ, Mexican, Persian, Italian, American, and a fusion
                  test kitchen.
                </p>
                <p>
                  Same sourcing, same brigade, same standard — whether the brief is a
                  cliffside wedding for 180 or Tuesday lunch for a 140-seat office.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8">
                <ButtonLink href="/about" variant="outline">
                  Our Story
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
