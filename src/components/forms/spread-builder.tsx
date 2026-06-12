"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { cuisines } from "@/data/cuisines";
import { SmartImage } from "@/components/shared/smart-image";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Cross-cuisine spread builder — a tool, not a landing page (noindex).
 *  Pick dishes from every kitchen; the selection rides into the wizard. */
export function SpreadBuilder() {
  const [picked, setPicked] = useState<Set<string>>(new Set());

  const toggle = (key: string) =>
    setPicked((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  const estimate = useMemo(() => {
    let total = 0;
    for (const key of picked) {
      const [slug, name] = key.split("::");
      const dish = cuisines
        .find((c) => c.slug === slug)
        ?.categories.flatMap((cat) => cat.dishes)
        .find((d) => d.name === name);
      if (dish) total += dish.price;
    }
    return total;
  }, [picked]);

  return (
    <Section tone="ivory">
      <Container wide>
        <div className="grid gap-12 lg:grid-cols-[1fr_20rem]">
          <div className="order-last space-y-12 lg:order-none">
            {cuisines.map((cuisine) => (
              <section key={cuisine.slug}>
                <h2 className="font-display border-b border-ink/15 pb-3 text-2xl font-medium text-ink">
                  {cuisine.name}
                  <Link
                    href={`/menus/${cuisine.slug}`}
                    className="ml-3 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-copper-deep hover:text-copper"
                  >
                    full menu →
                  </Link>
                </h2>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {cuisine.categories.flatMap((cat) =>
                    cat.dishes.map((dish) => {
                      const key = `${cuisine.slug}::${dish.name}`;
                      const on = picked.has(key);
                      return (
                        <li key={key} className="min-w-0">
                          <button
                            type="button"
                            aria-pressed={on}
                            onClick={() => toggle(key)}
                            className={cn(
                              "flex w-full items-center gap-3.5 rounded-[3px] px-3 py-2.5 text-left ring-1 transition-all duration-200 ease-out",
                              on
                                ? "bg-parchment/70 ring-copper"
                                : "bg-transparent ring-ink/10 hover:ring-copper/40"
                            )}
                          >
                            <span
                              className={cn(
                                "relative size-10 shrink-0 overflow-hidden rounded-full shadow-[var(--shadow-plate)] ring-1 ring-offset-1 ring-offset-ivory transition-all duration-200",
                                on ? "ring-copper" : "ring-copper/25"
                              )}
                            >
                              <SmartImage src={dish.image} alt={dish.imageAlt} sizes="40px" />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className={cn("font-display block truncate text-[1rem] leading-snug transition-colors duration-200", on ? "text-copper-deep" : "text-ink")}>
                                {dish.name}
                              </span>
                              <span className="mt-0.5 block text-xs text-ink-soft">{dish.serves}</span>
                            </span>
                            <span className="font-display whitespace-nowrap text-copper-deep">${dish.price}</span>
                            <span
                              aria-hidden
                              className={cn(
                                "grid size-5 shrink-0 place-items-center rounded-full border transition-all duration-200 ease-out",
                                on ? "border-copper bg-copper text-ivory" : "border-ink/20 text-transparent"
                              )}
                            >
                              <Check className="size-3" />
                            </span>
                          </button>
                        </li>
                      );
                    })
                  )}
                </ul>
              </section>
            ))}
          </div>

          {/* Sticky summary */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[4px] border-t-2 border-t-gold bg-ivory p-7 shadow-[0_24px_70px_-28px_rgb(12_31_44/0.3)] ring-1 ring-ink/8">
              <h2 className="font-display text-xl font-medium text-ink">Your spread</h2>
              <p className="mt-2 text-sm text-ink-soft">
                {picked.size === 0
                  ? "Nothing picked yet — tap dishes from any kitchen."
                  : `${picked.size} dish${picked.size === 1 ? "" : "es"} across ${new Set([...picked].map((k) => k.split("::")[0])).size} kitchen(s).`}
              </p>
              {picked.size > 0 && (
                <>
                  <ul className="mt-4 max-h-64 space-y-1.5 overflow-y-auto text-sm text-ink-soft">
                    {[...picked].map((key) => (
                      <li key={key} className="flex justify-between gap-3">
                        <span className="truncate">{key.split("::")[1]}</span>
                        <button
                          type="button"
                          onClick={() => toggle(key)}
                          className="shrink-0 font-sans text-[0.58rem] font-semibold uppercase tracking-wider text-copper-deep hover:text-copper"
                        >
                          remove
                        </button>
                      </li>
                    ))}
                  </ul>
                  <p className="font-display mt-5 border-t border-ink/15 pt-4 text-2xl text-copper-deep">
                    ≈ ${estimate}
                    <span className="ml-1 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">
                      base, before service
                    </span>
                  </p>
                </>
              )}
              <div className="mt-6">
                <ButtonLink
                  href={`/get-a-quote?from=custom-package${picked.size ? `&vision=${encodeURIComponent([...picked].map((k) => k.split("::")[1]).join(", "))}` : ""}`}
                  variant="primary"
                  className="w-full"
                >
                  Quote This Spread
                </ButtonLink>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
