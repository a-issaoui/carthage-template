import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cuisines } from "@/data/cuisines";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { OrnamentDivider } from "@/components/ui/ornament-divider";
import { Reveal } from "@/components/shared/reveal";
import { MenuCard } from "@/components/blocks/menu-card";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request Received",
  description: "Your catering request has reached the Carthage Kitchen events team.",
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <>
      <section className="slab grain relative isolate flex flex-col items-center justify-center px-6 pb-20 pt-48 text-center sm:pt-56">
        <OrnamentDivider className="text-gold" />
        <h1 className="font-display mt-9 max-w-2xl text-balance text-4xl font-medium leading-[1.05] text-foam sm:text-5xl">
          It landed. <em className="italic text-gold">The sketch begins.</em>
        </h1>
        <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-foam-dim">
          A real person from our events team will reply within one business day —
          usually faster. If it's urgent, call{" "}
          <a href={site.phoneHref} className="text-gold underline decoration-gold/40 underline-offset-4">
            {site.phone}
          </a>
          .
        </p>
        <div className="chevron-strip absolute inset-x-0 bottom-0" />
      </section>

      {/* Keep momentum — a browsing lead arrives at the call warmer */}
      <Section tone="ivory">
        <Container wide>
          <Reveal>
            <h2 className="font-display flex items-center justify-between gap-4 text-2xl font-medium text-ink sm:text-3xl">
              While you wait — the menus.
              <Link
                href="/menus"
                className="flex items-center gap-1.5 font-sans text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-copper-deep hover:text-copper"
              >
                All seven <ArrowUpRight aria-hidden className="size-3.5" />
              </Link>
            </h2>
          </Reveal>
          <ul className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cuisines.slice(0, 4).map((cuisine, i) => (
              <Reveal as="li" key={cuisine.slug} delay={i * 0.08}>
                <MenuCard cuisine={cuisine} priority={i < 2} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
