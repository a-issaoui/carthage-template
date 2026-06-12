import { Star, Clock, CalendarCheck } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/shared/reveal";
import { FramedImage } from "@/components/shared/framed-image";
import { ButtonLink } from "@/components/ui/button";
import { OliveBranch, CrescentMark } from "@/components/ui/motifs";
import { site } from "@/lib/site";
import { img } from "@/lib/images";

/** The ONE universal block — every page's conversion exit. A navy band the
 *  page flows into, with an arch photo rising through its top edge over a
 *  soft gold halo. Builds /get-a-quote with ?event/?menu/?diet + from=. */
export function QuoteCtaCard({
  from,
  event,
  menu,
  diet,
  title = "Tell us about your event",
  body = "Two required fields, a couple of minutes. A real menu sketch and per-person figure within one business day — no spam, no upsell call.",
  image = img.banquetCandles,
  imageAlt = "A candlelit banquet table set by Carthage Kitchen",
}: {
  from: string;
  event?: string;
  menu?: string;
  diet?: string;
  title?: string;
  body?: string;
  image?: string;
  imageAlt?: string;
}) {
  const params = new URLSearchParams({ from });
  if (event) params.set("event", event);
  if (menu) params.set("menu", menu);
  if (diet) params.set("diet", diet);

  const trust = [
    { icon: Star, label: `${site.rating.value}★ · ${site.rating.count} reviews` },
    { icon: Clock, label: "1 business day reply" },
    { icon: CalendarCheck, label: `${site.eventsCatered}+ events` },
  ];

  return (
    <section className="limewash relative isolate pt-20 sm:pt-24">
      <div className="slab grain relative isolate">
        {/* Seam thread — the band's entrance is drawn, like every dark cut */}
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <Container wide>
          <div className="grid items-end gap-x-16 gap-y-0 pb-14 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:pb-16">
            <Reveal className="overlap-panel order-last lg:order-first">
              <div className="relative mx-auto w-56 sm:w-72 lg:-mt-20 lg:w-full lg:max-w-sm">
                {/* Gold halo breathing behind the arch */}
                <div
                  aria-hidden
                  className="absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(ellipse_at_center,rgb(201_163_106/0.18),transparent_70%)] blur-xl"
                />
                <FramedImage
                  src={image}
                  alt={imageAlt}
                  sizes="(min-width: 1024px) 28vw, 288px"
                  className="aspect-[3/4]"
                />
              </div>
            </Reveal>

            <div className="pt-14 lg:pt-16">
              <Reveal>
                <OliveBranch className="h-5 text-gold/80" />
              </Reveal>
              <Reveal delay={0.08}>
                <h2
                  className="font-display mt-6 max-w-xl text-balance font-medium leading-[1.06] text-foam"
                  style={{ fontSize: "var(--text-display-section)" }}
                >
                  {title}
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-5 max-w-xl text-pretty leading-relaxed text-foam-dim">{body}</p>
              </Reveal>
              <Reveal delay={0.24}>
                <ul className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
                  {trust.map(({ icon: Icon, label }, i) => (
                    <li key={label} className="flex items-center gap-x-4">
                      {i > 0 && <CrescentMark className="h-2 text-gold/40" />}
                      <span className="flex items-center gap-2 font-sans text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-foam-dim">
                        <Icon aria-hidden className="size-3.5 text-gold" />
                        {label}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4 pb-10 lg:pb-0">
                  <ButtonLink href={`/get-a-quote?${params.toString()}`} variant="gold" size="lg">
                    Request a Quote
                  </ButtonLink>
                  <a
                    href={site.phoneHref}
                    className="group/tel relative font-sans text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-foam transition-colors duration-200 ease-out hover:text-gold"
                  >
                    or call {site.phone}
                    <span
                      aria-hidden
                      className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-200 ease-out group-hover/tel:scale-x-100"
                    />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
