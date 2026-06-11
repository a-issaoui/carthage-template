import Image from "next/image";
import { cuisines } from "@/data/cuisines";
import { Container } from "@/components/layout/container";
import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/shared/reveal";
import { ButtonLink } from "@/components/ui/button";

/** Featured cuisine band — rhythm break + seasonal merchandising slot. */
export function FeaturedBand() {
  const featured = cuisines.find((c) => c.slug === "persian") ?? cuisines[0];
  return (
    <section className="slab grain relative isolate overflow-hidden py-20 sm:py-28">
      <Image
        src={featured.image}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-20"
      />
      <Container wide>
        <div className="max-w-2xl">
          <Reveal>
            <Kicker tone="dark">This Season</Kicker>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display mt-5 text-balance text-4xl font-medium leading-[1.05] text-foam sm:text-5xl">
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
              <ButtonLink href={`/get-a-quote?menu=${featured.slug}&from=home-featured-band`} variant="outline-light" withArrow={false}>
                Get a {featured.name} Quote
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
