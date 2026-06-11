"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { img } from "@/lib/images";
import { site } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";
import { TanitMark } from "@/components/ui/tanit-mark";

const ease = [0.22, 1, 0.36, 1] as const;

/** FullHero — the only H1: head keyword + breadth qualifier; quote + phone CTAs. */
export function Hero() {
  return (
    <section className="slab grain relative isolate flex min-h-svh flex-col justify-end overflow-hidden">
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src={img.heroTable}
          alt="A candlelit dinner table set by Carthage Kitchen for an evening event"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/55 to-abyss/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-abyss/60 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.07 }}
        transition={{ duration: 2.4, delay: 0.8, ease }}
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 -z-10 -translate-y-1/2 text-gold max-lg:hidden"
      >
        <TanitMark className="h-[36rem]" />
      </motion.div>

      <div className="mx-auto w-full max-w-[88rem] px-5 pb-16 pt-40 sm:px-8 sm:pb-20 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
          className="flex items-center gap-3 font-sans text-[0.72rem] font-semibold uppercase tracking-[var(--tracking-kicker)] text-gold"
        >
          <span aria-hidden className="inline-block h-px w-10 bg-gold" />
          Since {site.founded} · {site.rating.value}★ across {site.rating.count} reviews
        </motion.p>

        <h1
          className="font-display mt-7 max-w-4xl text-balance font-medium leading-[1.04] text-foam"
          style={{ fontSize: "var(--text-display-hero)" }}
        >
          {["Chef-led catering across", "Los Angeles —"].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.7 + i * 0.12, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.94, ease }}
            >
              <em className="italic text-gold">Mediterranean & beyond.</em>
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.25, ease }}
          className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-foam-dim"
        >
          Seven cuisine programs, eleven event types, one chef-led kitchen.
          Weddings, premieres, school lunches, and office programs — same
          brigade, same standard.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.45, ease }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <ButtonLink href="/get-a-quote?from=home-hero" variant="gold" size="lg">
            Request a Quote
          </ButtonLink>
          <ButtonLink href={site.phoneHref} variant="outline-light" size="lg" withArrow={false}>
            Call {site.phone}
          </ButtonLink>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="border-t border-foam/15"
      >
        <div className="mx-auto flex w-full max-w-[88rem] items-center justify-between px-5 py-4 font-sans text-[0.6rem] uppercase tracking-[0.3em] text-foam-dim sm:px-8 lg:px-12">
          <span>Weddings · Corporate · Film · Schools · Programs</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          >
            Scroll ↓
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
}
