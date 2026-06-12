"use client";

import { MotionConfig } from "motion/react";

/** Makes every motion/react animation honor prefers-reduced-motion.
 *  The CSS kill-switch in globals.css only reaches CSS animations;
 *  Reveal & friends animate via JS inline styles and need this. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
