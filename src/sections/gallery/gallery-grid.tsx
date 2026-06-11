"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { galleryCategories, galleryImages } from "@/data/gallery";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

const aspectClass = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
} as const;

export function GalleryGrid() {
  const [filter, setFilter] = useState<string>("all");
  const visible =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((image) => image.category === filter);

  return (
    <Section tone="ivory">
      <Container wide>
        <div
          role="tablist"
          aria-label="Filter gallery by category"
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {galleryCategories.map((category) => {
            const active = filter === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(category.id)}
                className={cn(
                  "border px-6 py-3 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] transition-all duration-300 ease-[var(--ease-luxe)]",
                  active
                    ? "border-copper bg-copper text-ivory shadow-[var(--shadow-plate)]"
                    : "border-ink/20 text-ink-soft hover:border-copper hover:text-copper-deep"
                )}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <motion.ul layout className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>li]:mb-6">
          <AnimatePresence mode="popLayout">
            {visible.map((image) => (
              <motion.li
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="break-inside-avoid"
              >
                <figure className="group relative overflow-hidden shadow-[var(--shadow-plate)]">
                  <div className={cn("relative", aspectClass[image.aspect])}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-abyss/85 to-transparent p-5 pt-14 opacity-0 transition-all duration-500 ease-[var(--ease-luxe)] group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-foam">{image.alt}</p>
                    <p className="mt-1 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-gold">
                      {image.category.replace("-", " ")}
                    </p>
                  </figcaption>
                </figure>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </Container>
    </Section>
  );
}
