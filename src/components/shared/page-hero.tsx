import { Container } from "@/components/layout/container";
import { Kicker } from "@/components/ui/kicker";
import { TanitMark } from "@/components/ui/tanit-mark";
import { ArcDivider } from "@/components/ui/motifs";
import { FramedImage } from "@/components/shared/framed-image";
import { Reveal } from "@/components/shared/reveal";

/** Inner-page opener: navy slab swooping into the page via an arc — no hard
 *  seam. Optionally carries a Sidi Bou Saïd arch image that bleeds across
 *  the boundary into the content below. */
export function PageHero({
  kicker,
  title,
  accent,
  lede,
  image,
  imageAlt,
}: {
  kicker: string;
  title: string;
  accent?: string;
  lede?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="slab grain relative isolate overflow-visible pb-24 pt-40 sm:pb-28 sm:pt-48">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-24 -z-10 text-gold opacity-[0.05]"
      >
        <TanitMark className="h-[24rem]" />
      </div>

      <Container wide>
        <div className={image ? "grid items-end gap-10 lg:grid-cols-[1.5fr_1fr]" : undefined}>
          <div>
            <Reveal>
              <Kicker tone="dark">{kicker}</Kicker>
            </Reveal>
            <Reveal delay={0.1}>
              <h1
                className="font-display mt-6 max-w-4xl text-balance font-medium leading-[1.04] text-foam"
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
          </div>

          {image && (
            <Reveal delay={0.25} className="relative z-20 max-lg:hidden">
              {/* The arch: bleeds past the arc into the section below */}
              <FramedImage
                src={image}
                alt={imageAlt ?? ""}
                sizes="(min-width: 1024px) 22vw, 0px"
                className="-mb-28 ml-auto aspect-[3/4] w-full max-w-2xs xl:max-w-xs"
              />
            </Reveal>
          )}
        </div>
      </Container>

      <ArcDivider fill="fill-ivory" />
    </section>
  );
}
