import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing Carthage Kitchen's website and catering services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      name="Terms"
      path="/terms"
      kicker="Legal"
      title="Terms of"
      accent="Service"
      sections={[
        { heading: "Quotes & proposals", body: "Quotes are estimates based on the information provided and remain valid for 30 days. Final pricing is set in the written proposal, itemized line by line. No work begins, and no charge is made, before a signed proposal." },
        { heading: "Deposits & cancellation", body: "Events are confirmed with a deposit specified in the proposal. Cancellation terms are stated per event and scale with proximity to the date; recurring programs may be cancelled with two weeks' notice." },
        { heading: "Dietary information", body: "We engineer menus around declared dietary needs and label allergens diligently, but our kitchen handles all major allergens. Guests with severe allergies should be flagged to us explicitly so sealed-service protocols can be applied." },
        { heading: "Liability & insurance", body: "Carthage Kitchen is licensed in California and carries $2M general liability coverage. Certificates of insurance are issued on request for any confirmed event." },
        { heading: "Website content", body: "Content on this site — menus, prices, photography — is provided for information and may change with seasons and markets. The signed proposal, not the website, is the contractual document for any event." },
      ]}
    />
  );
}
