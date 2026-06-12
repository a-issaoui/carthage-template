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

/** Amphora — the Punic trade vessel; marks mezze, antipasti, openers. */
export function AmphoraMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 32" fill="none" aria-hidden className={cn("h-6 w-auto", className)}>
      <path d="M9 3 H15 M10 3 L10 6.5 M14 3 L14 6.5 M10 6.5 C5.5 8 4.5 12 5.5 16 C6.5 20.5 8.5 23 9.5 26 C9.9 27.3 10.6 28 12 28 C13.4 28 14.1 27.3 14.5 26 C15.5 23 17.5 20.5 18.5 16 C19.5 12 18.5 8 14 6.5 Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 6.8 C7.2 7.6 5.2 9 5 11.5 M14 6.8 C16.8 7.6 18.8 9 19 11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M9.5 28 H14.5 M10.5 28 L10.5 29.5 H13.5 L13.5 28" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

/** Brazier flame — the fire bowls of the terrace; marks mains and smokers. */
export function FlameMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 32" fill="none" aria-hidden className={cn("h-6 w-auto", className)}>
      <path d="M12 3 C14.5 6.5 16.5 9 16.5 12 C16.5 14.8 14.5 17 12 17 C9.5 17 7.5 14.8 7.5 12 C7.5 10.5 8 9.2 9 7.8 C9.2 9.6 10 10.6 11 11 C10.4 8 10.8 5.5 12 3 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M5 20 H19 L17.5 23.5 H6.5 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8.5 23.5 L7 29 M15.5 23.5 L17 29 M12 23.5 L12 29" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

/** Date palm — the emblem of Punic coinage; marks sweets (dates, honey). */
export function PalmMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 32" fill="none" aria-hidden className={cn("h-6 w-auto", className)}>
      <path d="M14 12 C14.5 17 14.5 23 13.5 29 M14 12 C10 10.5 6.5 11 4 13.5 C7.5 13.8 10.5 14.5 13 16 M14 12 C18 10.5 21.5 11 24 13.5 C20.5 13.8 17.5 14.5 15 16 M14 12 C11.5 9 9.5 6.5 9 3.5 C12 5.5 13.5 7.5 14 10 M14 12 C16.5 9 18.5 6.5 19 3.5 C16 5.5 14.5 7.5 14 10 M14 12 L14 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="11.5" cy="14.5" r="1" fill="currentColor" />
      <circle cx="16.5" cy="14.5" r="1" fill="currentColor" />
      <path d="M9 29 H18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

/** Mosaic fish — the Mediterranean floor motif; marks crudo and the raw harbor. */
export function FishMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 20" fill="none" aria-hidden className={cn("h-4 w-auto", className)}>
      <path d="M3 10 C7 4.5 13 3 18 5 C21.5 6.4 24 8 26 10 C24 12 21.5 13.6 18 15 C13 17 7 15.5 3 10 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M26 10 L30 5.5 L29 10 L30 14.5 Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <circle cx="8.5" cy="9" r="1" fill="currentColor" />
      <path d="M13 6 C14 8.5 14 11.5 13 14 M18 5.5 C19.2 8.4 19.2 11.6 18 14.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}
