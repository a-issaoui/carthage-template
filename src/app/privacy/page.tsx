import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Carthage Kitchen collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      name="Privacy"
      path="/privacy"
      kicker="Legal"
      title="Privacy"
      accent="Policy"
      sections={[
        { heading: "What we collect", body: "When you request a quote we collect the details you provide: contact information, event details, and dietary notes. We also collect standard analytics data (pages visited, referral source) to understand how the site is used." },
        { heading: "How we use it", body: "Quote details are used to prepare your proposal and coordinate your event — nothing else. We do not sell, rent, or share your personal information with third parties for marketing. Attribution parameters (like which page sent you to the quote form) are used only to improve the site." },
        { heading: "Email & communication", body: "We email you about your inquiry and your events. We do not add you to a newsletter without explicit consent, and every marketing email we ever send includes a working unsubscribe link." },
        { heading: "Data retention & access", body: "Event records are retained for our business and tax records. You may request a copy of the personal data we hold about you, or its deletion where the law permits, by emailing events@carthagekitchen.com." },
        { heading: "Cookies", body: "We use essential cookies for site function and a privacy-respecting analytics tool. We do not run third-party advertising trackers." },
      ]}
    />
  );
}
