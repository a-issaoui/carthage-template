import { cn } from "@/lib/utils";

const tones = {
  ivory: "limewash text-ink",
  parchment: "bg-parchment text-ink",
  slab: "slab grain relative isolate",
} as const;

export function Section({
  children,
  className,
  tone = "ivory",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: keyof typeof tones;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative py-(--space-section)", tones[tone], className)}>
      {children}
    </section>
  );
}
