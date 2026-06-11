import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  wide = false,
}: {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",
        wide ? "max-w-[88rem]" : "max-w-7xl",
        className
      )}
    >
      {children}
    </div>
  );
}
