import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SpreadBuilder } from "@/components/forms/spread-builder";

export const metadata: Metadata = {
  title: "Build a Custom Spread",
  description: "Pick dishes from all seven Carthage Kitchen cuisine programs and get a quote for exactly that spread.",
  robots: { index: false, follow: true },
};

export default function CustomPackagePage() {
  return (
    <>
      <PageHero
        kicker="The Builder"
        title="Every kitchen,"
        accent="one table."
        lede="No fixed menu fits? Pick dishes across all seven programs — the estimate updates as you build, and the quote carries your exact selection."
      />
      <SpreadBuilder />
    </>
  );
}
