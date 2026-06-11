import * as React from "react";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full border border-ink/20 bg-ivory px-5 py-4 text-ink placeholder:text-ink/35 transition-colors duration-300 focus:border-copper focus:outline-none focus:ring-1 focus:ring-copper";

export function Label({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "mb-2.5 block font-sans text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-ink-soft",
        className
      )}
      {...props}
    />
  );
}

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldBase, className)} {...props} />;
}

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(fieldBase, "min-h-36 resize-y", className)} {...props} />;
}

export function Select({
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={cn(fieldBase, "appearance-none bg-no-repeat pr-12", className)}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238a4a20' stroke-width='1.5'/%3E%3C/svg%3E\")",
        backgroundPosition: "right 1.25rem center",
      }}
      {...props}
    >
      {children}
    </select>
  );
}
