import { cn } from "@/lib/utils";

/**
 * Abstract brand glyph drawn from the sign of Tanit — disc, horizon bar,
 * rising triangle — reduced to pure geometry. No literal iconography.
 */
export function TanitMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 40"
      fill="none"
      aria-hidden="true"
      className={cn("h-8 w-auto", className)}
    >
      <circle cx="16" cy="7.5" r="5" stroke="currentColor" strokeWidth="2.6" />
      <line x1="3" y1="17.5" x2="29" y2="17.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M16 21.8 L26.6 37.7 H5.4 Z" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
    </svg>
  );
}
