"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { CalendarRange } from "lucide-react";

/** Floating inquiry CTA — appears after the first scroll. Hidden on the
 *  quote page itself and on /thank-you (they just sent a request). */
export function QuoteFab() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const show = visible && pathname !== "/get-a-quote" && pathname !== "/thank-you";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Link
            href="/get-a-quote?from=fab"
            className="flex items-center gap-3 bg-abyss px-6 py-4 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-foam shadow-[var(--shadow-plate-lg)] transition-all duration-300 ease-[var(--ease-luxe)] hover:-translate-y-0.5 hover:text-gold"
          >
            <CalendarRange aria-hidden className="size-4 text-gold" />
            Plan Your Event
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
