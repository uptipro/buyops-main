import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Commission Policy | BuyOps",
  description:
    "BuyOps Commission Policy: eligibility, roles, allocation, calculation, clawback, and dispute resolution for agents and team leads.",
  alternates: { canonical: "/commission-policy" },
};

export default function CommissionPage() {
  return (
    <LegalPage
      title="Commission Policy"
      subtitle="Eligibility, calculation, allocation, and payment of commissions for Agents, Team Leads, Freelancers, and other authorized users."
      sections={[
        {
          heading: "Overview",
          body: [
            "This Commission Policy governs the eligibility, calculation, allocation, and payment of commissions for Agents, Team Leads, Freelancers, and other authorized users operating on the BuyOps platform.",
          ],
        },
        {
          heading: "Commission Eligibility",
          body: [
            "A commission becomes earned and payable only where the investor completes payment through the official BuyOps platform, the payment is verified and confirmed, and the transaction is finalized and approved. No commission is payable for unpaid, cancelled, reversed, disputed, fraudulent, or non-compliant transactions. BuyOps may withhold, adjust, reverse, suspend, or recover commissions where a transaction is later found invalid, fraudulent, refunded, or in breach of policy.",
          ],
        },
        {
          heading: "Commission Roles",
          bullets: [
            "Lead Finder \u2014 the individual who originally sourced the investor.",
            "Deal Closer \u2014 the individual responsible for completing the transaction.",
          ],
        },
        {
          heading: "Commission Allocation",
          body: [
            "Where more than one person contributes, commission may be shared between the Lead Finder, Deal Closer, Team Lead, or other eligible parties per BuyOps' internal structure. All commission determinations are final unless reviewed at the company's discretion.",
          ],
        },
        {
          heading: "Calculation Rules",
          bullets: [
            "Commission percentages are defined per asset.",
            "Commission is calculated on actual funds received.",
            "Partial payments generate proportional commission.",
            "Team Leads may receive a 5% bonus based on the team commission pool, where applicable per asset configuration.",
          ],
        },
        {
          heading: "No Employer\u2013Employee Relationship",
          body: [
            "Nothing in this Policy creates an employer\u2013employee relationship, partnership, joint venture, or agency. Agents, Team Leads, and Freelancers operate as independent contractors. BuyOps is not responsible for salaries, pensions, insurance, taxes, or statutory contributions, and no person may bind BuyOps unless authorized in writing. Participation does not guarantee exclusivity, continued engagement, or minimum earnings.",
          ],
        },
        {
          heading: "Chargeback & Clawback",
          body: [
            "BuyOps may withhold, reverse, deduct, offset, or recover any commission or bonus previously paid where a payment is reversed or charged back, a transaction is fraudulent or unlawful, a commission was paid in error, the transaction fails to complete, there is misconduct or misrepresentation, or the matter becomes subject to investigation. Recovery may be made by deducting from future commissions, requesting repayment, or other lawful methods. Recipients must promptly refund overpaid or invalid commissions on demand.",
          ],
        },
        {
          heading: "Non-Circumvention",
          body: [
            "Users agree not to bypass BuyOps for any listing, opportunity, or transaction introduced or facilitated through the platform to avoid fees or commissions. Users must not divert investors, misuse confidential information, or structure transactions to avoid payment obligations. This applies only where BuyOps can reasonably demonstrate it facilitated the relationship. Where breach is established, BuyOps may suspend access, withhold commissions, and pursue lawful remedies, generally after notice and an opportunity to resolve.",
          ],
        },
        {
          heading: "Commission Disputes",
          body: [
            "Any dispute relating to commission calculation, allocation, eligibility, or payout must be submitted in writing within seven (7) days of the relevant payout notification, including supporting details. BuyOps will investigate and communicate its determination within a reasonable period. Failure to raise a dispute in time constitutes acceptance as final, except for manifest error, fraud, or technical malfunction.",
          ],
        },
      ]}
    />
  );
}
