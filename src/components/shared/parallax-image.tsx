"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

/** Image that drifts gently against scroll inside an overflow-hidden frame. */
export function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  sizes = "100vw",
  priority = false,
  strength = 8,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Scroll-linked styles bypass MotionConfig's reducedMotion — gate manually.
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const drift = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);
  const y = reduced ? "0%" : drift;

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ y }} className="absolute -inset-y-[12%] inset-x-0">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imgClassName)}
        />
      </motion.div>
    </div>
  );
}
