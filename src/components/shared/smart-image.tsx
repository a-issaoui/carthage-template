"use client";

import { useState } from "react";
import Image from "next/image";
import { TanitMark } from "@/components/ui/tanit-mark";
import { cn } from "@/lib/utils";

/** next/image with a designed fallback: if the photo fails to load, the
 *  exact same box renders a zellige-patterned holder with the Tanit mark
 *  and the intended subject — layout never collapses, brand never breaks. */
export function SmartImage({
  src,
  alt,
  sizes,
  className,
  priority = false,
  holderLabel,
}: {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
  /** Optional short label for the placeholder (defaults to alt). */
  holderLabel?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "zellige absolute inset-0 flex flex-col items-center justify-center gap-3 bg-parchment px-6 text-center",
          className
        )}
      >
        <TanitMark className="h-10 text-copper/50" />
        <p className="font-display max-w-[16rem] text-balance text-sm italic leading-snug text-copper-deep/70">
          {holderLabel ?? alt}
        </p>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn("object-cover", className)}
      onError={() => setFailed(true)}
    />
  );
}
