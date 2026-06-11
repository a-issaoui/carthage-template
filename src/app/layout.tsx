import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/layout/footer";
import { QuoteFab } from "@/components/shared/quote-fab";
import { JsonLd } from "@/components/shared/json-ld";
import { localBusinessSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Luxury Catering in Los Angeles`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Los Angeles catering",
    "luxury catering LA",
    "wedding catering Los Angeles",
    "corporate catering LA",
    "private chef Los Angeles",
    "Mediterranean catering",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Luxury Catering in Los Angeles`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Luxury Catering in Los Angeles`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${hanken.variable}`}>
      <body>
        <JsonLd data={localBusinessSchema()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-copper focus:px-4 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <QuoteFab />
        <Footer />
      </body>
    </html>
  );
}
