import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-3 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.22em] transition-all duration-300 ease-[var(--ease-luxe)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-copper text-ivory hover:bg-copper-deep shadow-[var(--shadow-plate)] hover:shadow-[var(--shadow-plate-lg)] hover:-translate-y-px",
        outline:
          "border border-ink/30 text-ink hover:border-copper hover:text-copper-deep",
        gold:
          "bg-gold text-abyss hover:bg-sand shadow-[var(--shadow-glow)] hover:-translate-y-px",
        "outline-light":
          "border border-foam/35 text-foam hover:border-gold hover:text-gold",
        link: "p-0 text-copper-deep hover:text-copper",
      },
      size: {
        md: "h-12 px-7",
        lg: "h-14 px-9",
        none: "",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  withArrow?: boolean;
  children: React.ReactNode;
};

function ArrowSlot() {
  return (
    <ArrowRight
      aria-hidden
      className="size-4 transition-transform duration-300 ease-[var(--ease-luxe)] group-hover:translate-x-1"
    />
  );
}

export function ButtonLink({
  href,
  variant,
  size,
  className,
  withArrow = true,
  children,
  ...rest
}: ButtonBaseProps & { href: string } & Omit<React.ComponentProps<typeof Link>, "href" | "children">) {
  return (
    <Link href={href} className={cn(buttonVariants({ variant, size }), className)} {...rest}>
      {children}
      {withArrow && <ArrowSlot />}
    </Link>
  );
}

export function Button({
  variant,
  size,
  className,
  withArrow = false,
  children,
  ...rest
}: ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...rest}>
      {children}
      {withArrow && <ArrowSlot />}
    </button>
  );
}
