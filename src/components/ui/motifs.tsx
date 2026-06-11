import { cn } from "@/lib/utils";

/** Curved hand-off between sections — the swoop replaces hard seams.
 *  Place at the END of a section; `fill` is the NEXT section's bg class. */
export function ArcDivider({
  fill = "fill-ivory",
  flip = false,
  className,
}: {
  fill?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-x-0 bottom-0 leading-none", className)}>
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className={cn("block h-[clamp(1.75rem,4vw,3.5rem)] w-full", fill, flip && "rotate-180")}
      >
        {/* One calm, symmetric swell — no wobble */}
        <path d="M0,64 L0,56 Q720,-16 1440,56 L1440,64 Z" />
      </svg>
    </div>
  );
}

/** Olive branch — the Mediterranean rest mark, replaces heavy rules. */
export function OliveBranch({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 24" fill="none" aria-hidden className={cn("h-5 w-auto", className)}>
      <path d="M4 12 C 34 6, 86 6, 116 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {[
        [22, -1, -35], [40, -3, -25], [58, -4, -15], [76, -3, 15], [94, -1, 30],
      ].map(([x, dy, rot], i) => (
        <ellipse key={i} cx={x} cy={9 + dy} rx="2.4" ry="5" fill="currentColor" opacity="0.8" transform={`rotate(${rot} ${x} ${9 + dy})`} />
      ))}
      {[
        [31, 4, 30], [49, 5, 20], [67, 5, -12], [85, 4, -28],
      ].map(([x, dy, rot], i) => (
        <ellipse key={`b${i}`} cx={x} cy={11 + dy} rx="2.2" ry="4.6" fill="currentColor" opacity="0.55" transform={`rotate(${rot} ${x} ${11 + dy})`} />
      ))}
    </svg>
  );
}

/** Khomsa (hand of Fatima) — protective mark, used sparingly as accent. */
export function KhomsaMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 40" fill="none" aria-hidden className={cn("h-8 w-auto", className)}>
      <path
        d="M16 38 C9 38 5 33 5 26 L5 14 C5 12.5 7.5 12.5 7.5 14 L7.5 21 M7.5 14 L7.5 9 C7.5 7.5 10 7.5 10 9 L10 20 M10 9 L10 6 C10 4.5 12.8 4.5 12.8 6 L12.8 19.5 M12.8 6 L12.8 4 C12.8 2.5 15.6 2.5 15.6 4 L15.6 19.5 M15.6 5 C15.6 3.5 18.4 3.5 18.4 5 L18.4 20 M18.4 8 C18.4 6.5 21 6.5 21 8 L21 21 M21 13 C21 11.5 23.5 11.5 23.5 13 L23.5 24 C25.5 22 27.5 21.8 27 24.5 C26.2 28.5 24 31 22 33 C20.3 36.2 18.5 38 16 38 Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="15.8" cy="27" r="2.6" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

/** Crescent & disc — the Punic sky pair, tiny separator glyph. */
export function CrescentMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={cn("h-4 w-auto", className)}>
      <path d="M12 3 A 9.5 9.5 0 1 0 21 14.5 A 7.5 7.5 0 1 1 12 3 Z" fill="currentColor" opacity="0.85" />
      <circle cx="16.5" cy="8" r="2.6" fill="currentColor" />
    </svg>
  );
}
