import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | BuyOps",
  description:
    "The terms and conditions governing your access to and use of the BuyOps real estate investment platform.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      subtitle="The terms governing your access to and use of the BuyOps website, mobile apps, Sales Dashboard, Admin Dashboard and related services."
      updated="Effective 1 June 2026 · Last updated 31 May 2026"
      sections={[
        {
          heading: "Introduction",
          body: [
            "Welcome to BuyOps, Nigeria's trusted real estate digital platform for diaspora and local property investment. These Terms and Conditions (\u201cTerms\u201d) govern your access to and use of our website, mobile applications, Sales Dashboard, Admin Dashboard and related services. By accessing or using BuyOps' services, you acknowledge that you have read, understood, and agreed to be bound by these Terms. If you do not agree with any part of these Terms, you should discontinue use of our services immediately.",
            "BuyOps lists real estate investment opportunities, facilitates fractional and full-unit property purchases, enables secure digital payment processing, and tracks ownership and commission attribution. BuyOps does not guarantee investment returns, provide financial advice, or act as a bank or licensed investment fund.",
          ],
        },
        {
          heading: "Disclaimer",
          body: [
            "While BuyOps strives to ensure that all information provided on this website is accurate, reliable, and up to date, we do not warrant or guarantee the completeness, accuracy, or reliability of any content published on the platform. We reserve the right to modify, update, or remove any information on this website, including these Terms and Conditions, at any time without prior notice.",
            "BuyOps provides this website and its contents on an \u201cas is\u201d and \u201cas available\u201d basis. To the fullest extent permitted by applicable law, BuyOps disclaims all representations, warranties, and conditions, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, accuracy, non-infringement, system availability, or freedom from viruses and harmful components. All information is intended solely for general informational purposes and should not be interpreted as legal, financial, investment, or professional advice.",
          ],
        },
        {
          heading: "Registration",
          body: [
            "To create an account and use certain features of the BuyOps platform, you must be at least eighteen (18) years old. By registering, you confirm that all information provided is accurate, complete, and up to date. You are solely responsible for keeping your account details current and notifying us promptly of any changes.",
            "By registering, you consent to receiving communications from BuyOps, including service-related notices, account updates, and promotional materials. You may update your communication preferences or opt out of non-essential marketing at any time through your account settings or the unsubscribe instructions in our emails.",
          ],
        },
        {
          heading: "User Roles",
          body: [
            "Investors may browse listings, invest in fractional or full ownership opportunities, and manage their portfolios. Investors are responsible for conducting their own due diligence before investing.",
            "Agents and Team Leads may onboard and manage prospective investors, generate and track leads, and facilitate transactions. They act solely as intermediaries of BuyOps and are strictly prohibited from collecting cash payments directly from investors.",
            "Administrators oversee platform operations, including asset onboarding, transaction verification, allocation of ownership interests, and administration of commission structures.",
          ],
        },
        {
          heading: "Investment Structure",
          body: [
            "All investment opportunities are structured on a FRACTIONAL OWNERSHIP BASIS rather than a percentage ownership model. Fractional ownership represents a defined unit or share in a property asset. Ownership interests are allocated and confirmed only upon successful verification and receipt of payment by BuyOps or its authorized channels. Rights and obligations are governed by the specific terms and asset documentation applicable to each opportunity.",
          ],
        },
        {
          heading: "Information Accuracy & Risk Disclosure",
          body: [
            "BuyOps is committed to providing accurate, reliable property information to support informed decisions. While reasonable effort is made to ensure accuracy, BuyOps does not guarantee that all information is free from errors, omissions, or inaccuracies.",
          ],
        },
        {
          heading: "Investor Risk Acknowledgment",
          body: [
            "Each investor acknowledges that real estate and fractional property investments involve inherent financial, operational, regulatory, and market risks, including fluctuations in value, illiquidity, delayed completion, vacancy, policy or tax changes, inflation, currency volatility, and economic downturns. All decisions are made voluntarily at the investor's sole discretion and risk. BuyOps does not guarantee capital preservation, fixed returns, profitability, or performance. Projected returns are indicative only and are not guarantees of future performance.",
          ],
        },
        {
          heading: "Independent Financial Advice",
          body: [
            "All information is for general informational and investment facilitation purposes only and does not constitute financial, investment, legal, tax, or professional advice. BuyOps strongly recommends investors seek independent professional advice before investing. No material provided shall be interpreted as a recommendation, fiduciary undertaking, or guarantee of performance.",
          ],
        },
        {
          heading: "Payments",
          body: [
            "All payments must be made exclusively through official BuyOps payment channels and the authorized payment gateway. BuyOps is not liable for payments made to unauthorized individuals or agents. Cash payments or direct transfers to agents are strictly prohibited. Ownership rights are confirmed only upon successful payment verification. Where installment options are available, payments are governed by the agreed schedule; failure to comply may result in suspension, cancellation, or forfeiture of allocation rights.",
          ],
        },
        {
          heading: "Refund Policy",
          body: [
            "Except as required by law or stated in a separate agreement, all payments are final and non-refundable. Refunds may be reviewed for verified system or transaction errors, duplicate or unauthorized charges, material misrepresentation of an asset, or platform technical malfunctions.",
          ],
          bullets: [
            "Non-refundable: change of mind or voluntary withdrawal after confirmation.",
            "Non-refundable: market fluctuations or changes in property valuation.",
            "Non-refundable: delays in returns or completion due to market, third parties, or force majeure.",
            "Non-refundable: failure to review disclosed risks or seek independent advice.",
            "Investors may request to transfer or resell an interest to a qualified replacement, subject to KYC/AML, documentation, fees, and BuyOps approval. Refund requests are reviewed within 7\u201314 business days.",
          ],
        },
        {
          heading: "Regulatory Disclaimer",
          body: [
            "BuyOps operates as a technology-enabled real estate marketplace and investment facilitation platform, and may administer holdings via special purpose vehicles (SPVs). BuyOps does not represent that every offering is a regulated securities product unless expressly stated. Certain opportunities may be subject to applicable laws and oversight, including the Securities and Exchange Commission Nigeria where applicable.",
          ],
        },
        {
          heading: "Electronic Acceptance / Clickwrap Consent",
          body: [
            "By clicking \u201cI Agree,\u201d \u201cAccept,\u201d \u201cInvest,\u201d \u201cContinue,\u201d or similar, you provide a valid and legally binding acceptance of these Terms, the Privacy Policy, and related agreements. Electronic signatures and records have the same legal effect as physically signed documents under applicable Nigerian law. BuyOps may retain electronic records of acceptances and transactions for compliance purposes.",
          ],
        },
        {
          heading: "Limitation of Liability",
          body: [
            "To the fullest extent permitted by law, BuyOps and its affiliates are not liable for any direct, indirect, incidental, consequential, or economic losses arising from use of the platform, investment decisions, market fluctuations, project delays, third-party acts, downtime, or data breach. Total aggregate liability shall not exceed fees directly paid for the specific transaction. Nothing excludes liability for fraud or willful misconduct.",
          ],
        },
        {
          heading: "Force Majeure",
          body: [
            "BuyOps is not liable for delays or failures caused by events beyond its reasonable control, including acts of God, fire, epidemic, war, civil unrest, governmental actions, infrastructure or internet failure, cyber incidents, and supply chain disruption. Affected obligations may be suspended for the duration of the event and a reasonable recovery period.",
          ],
        },
        {
          heading: "Dispute Resolution & Arbitration",
          body: [
            "Disputes are first resolved through good-faith negotiation. If unresolved within thirty (30) days, the matter proceeds to mediation and, failing that, arbitration under the Arbitration and Mediation Act 2023 of Nigeria, conducted by a single arbitrator in Lagos State in English, with a final and binding award. BuyOps may still seek interim or injunctive relief from a court of competent jurisdiction.",
          ],
        },
        {
          heading: "Governing Law",
          body: [
            "These Terms and any disputes are governed by the laws of the Federal Republic of Nigeria, with jurisdiction in the competent courts of Nigeria subject to the dispute resolution provisions.",
          ],
        },
        {
          heading: "Intellectual Property",
          body: [
            "All content, trademarks, software, designs, and listings are owned by or licensed to BuyOps and protected by intellectual property law. Users receive a limited, non-exclusive, non-transferable, revocable right to use the platform for lawful purposes and may not copy, distribute, reverse engineer, or create derivative works without written consent. Submitted user content grants BuyOps a worldwide royalty-free license for operational and platform-related purposes. All rights not expressly granted are reserved.",
          ],
        },
        {
          heading: "Platform Rights",
          bullets: [
            "Suspend or terminate accounts for misconduct or policy violations.",
            "Remove, unpublish, or reject listings or investment opportunities.",
            "Modify platform fees, commissions, services, or policies prospectively.",
            "Conduct compliance, identity verification, and security checks.",
            "Update these Terms; continued use after publication constitutes acceptance.",
          ],
        },
      ]}
    />
  );
}
