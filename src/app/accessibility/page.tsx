import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/legal-page";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Carthage Kitchen's commitment to an accessible website and accessible events.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <LegalPage
      name="Accessibility"
      path="/accessibility"
      kicker="Commitment"
      title="Accessibility"
      sections={[
        { heading: "Our standard", body: "We aim for WCAG 2.2 AA across this site: semantic structure, keyboard operability, visible focus states, sufficient color contrast, alt text on meaningful images, and forms with proper labels." },
        { heading: "Known limitations", body: "Decorative motion respects prefers-reduced-motion. If you find a page or interaction that doesn't work with your assistive technology, we treat that as a bug — please tell us." },
        { heading: "At your event", body: "Accessibility extends past the website: we plate for guests with motor and visual impairments on request, brief service staff accordingly, and design buffet heights and station flow with mobility devices in mind." },
        { heading: "Feedback", body: "Email events@carthagekitchen.com with 'Accessibility' in the subject line and a description of the barrier. A human reads these, and fixes are prioritized." },
      ]}
    />
  );
}
