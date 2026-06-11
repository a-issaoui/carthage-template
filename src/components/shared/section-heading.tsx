import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

/**
 * Canonical section opener: kicker → display headline → optional lede.
 * Pass `accent` to render an italic Fraunces flourish inside the headline.
 */
export function SectionHeading({
  kicker,
  title,
  accent,
  lede,
  tone = "light",
  align = "left",
  className,
}: {
  kicker: string;
  title: string;
  accent?: string;
  lede?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <Reveal>
        <Kicker tone={tone} className={cn(align === "center" && "justify-center")}>
          {kicker}
        </Kicker>
      </Reveal>
      <Reveal delay={0.1}>
        <h2
          className={cn(
            "font-display mt-5 text-balance font-medium leading-[1.06]",
            tone === "dark" ? "text-foam" : "text-ink"
          )}
          style={{ fontSize: "var(--text-display-section)" }}
        >
          {title}
          {accent && (
            <>
              {" "}
              <em className={cn("italic", tone === "dark" ? "text-gold" : "text-copper-deep")}>
                {accent}
              </em>
            </>
          )}
        </h2>
      </Reveal>
      {lede && (
        <Reveal delay={0.2}>
          <p
            className={cn(
              "mt-6 text-pretty text-lg leading-relaxed",
              tone === "dark" ? "text-foam-dim" : "text-ink-soft"
            )}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}
