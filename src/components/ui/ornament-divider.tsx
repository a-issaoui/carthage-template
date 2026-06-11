import { TanitMark } from "@/components/ui/tanit-mark";
import { cn } from "@/lib/utils";

/** Centered ornamental rule: hairline — Tanit glyph — hairline. */
export function OrnamentDivider({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("flex items-center justify-center gap-5 opacity-60", className)}>
      <span className="h-px w-16 bg-current" />
      <TanitMark className="h-5" />
      <span className="h-px w-16 bg-current" />
    </div>
  );
}
