import { cn } from "@/lib/utils";

/** Editorial eyebrow label: small caps, wide tracking, copper tick. */
export function Kicker({
  children,
  className,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-sans text-[0.7rem] font-semibold uppercase tracking-[var(--tracking-kicker)]",
        tone === "light" ? "text-copper-deep" : "text-gold",
        className
      )}
    >
      <span aria-hidden className="inline-block h-px w-8 bg-current" />
      {children}
    </p>
  );
}
