import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "KYC Policy | BuyOps",
  description:
    "BuyOps Know Your Customer (KYC) Policy: identity verification, required documentation, and compliance requirements.",
  alternates: { canonical: "/kyc" },
};

export default function KycPage() {
  return (
    <LegalPage
      title="KYC Policy"
      subtitle="Our Know Your Customer policy verifies user identity, prevents fraud, and ensures compliance with applicable laws and risk management procedures."
      sections={[
        {
          heading: "1. Purpose",
          body: [
            "BuyOps is committed to maintaining a secure, transparent, and compliant investment environment. This Know Your Customer (\u201cKYC\u201d) Policy verifies the identity of users, prevents fraud, combats money laundering and financial crime, and ensures compliance with applicable laws, regulatory requirements, and internal risk management procedures. By registering on or using BuyOps, users agree to comply with all applicable identity verification and compliance requirements.",
          ],
        },
        {
          heading: "2. Required Information and Documentation",
          body: [
            "To access certain services, investments, or features, users may be required to provide accurate, complete, and up-to-date information, including:",
          ],
          bullets: [
            "Valid government-issued ID (international passport, national ID card, driver's license, or voter's card).",
            "Proof of residential address (utility bills, bank statements, or other acceptable documents).",
            "Verified phone number and email address.",
            "Next of kin or emergency contact details.",
            "Bank account or payment information where applicable.",
            "Any additional documentation reasonably required for compliance or regulatory purposes.",
          ],
        },
        {
          heading: "3. Verification Process",
          body: [
            "All submitted information is subject to review, verification, screening, and approval by BuyOps or its authorized compliance partners. BuyOps may conduct identity authentication and background checks, request additional documents, reject or restrict accounts with incomplete or fraudulent information, and delay or decline transactions pending verification. Timelines vary based on risk assessment and completeness of submissions.",
          ],
        },
        {
          heading: "4. Compliance and Monitoring",
          body: [
            "BuyOps reserves the right, at its discretion and in compliance with applicable laws, to suspend or cancel transactions pending review, request updated documentation, monitor activity for suspicious conduct, restrict access where concerns arise, and report suspicious activity to relevant authorities. Verification records may be retained per legal and audit requirements.",
          ],
        },
        {
          heading: "5. Failure to Comply",
          body: [
            "Failure to provide requested information or comply with KYC requirements may result in inability to access features, suspension of access, delay or cancellation of transactions, or permanent account termination. BuyOps is not liable for losses resulting from a user's failure to satisfy KYC requirements.",
          ],
        },
        {
          heading: "6. Data Protection",
          body: [
            "All personal information collected under this Policy is handled in accordance with the BuyOps Privacy Policy and applicable data protection laws. BuyOps implements reasonable security measures to protect user information from unauthorized access, misuse, or disclosure.",
          ],
        },
      ]}
    />
  );
}
