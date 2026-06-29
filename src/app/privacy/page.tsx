import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | BuyOps",
  description:
    "How BuyOps collects, uses, stores, discloses, and protects your personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="How BuyOps collects, uses, stores, discloses, processes, and protects personal information across our platform and services."
      sections={[
        {
          heading: "1. Introduction",
          body: [
            "BuyOps (\u201cBuyOps,\u201d \u201cwe,\u201d \u201cour,\u201d or \u201cus\u201d) is committed to protecting the privacy, confidentiality, and security of personal information collected through our website, mobile application, platform, and related services. This Privacy Policy explains how we collect, use, store, disclose, process, and protect personal information. By using BuyOps, you acknowledge that you have read, understood, and agreed to this Policy.",
          ],
        },
        {
          heading: "2. Information We Collect",
          body: [
            "Personal information: name, email, phone number, KYC documentation, payment records, transaction history, and bank/payment information. Account and transaction information: credentials, investment history, payment confirmations, commission and referral records, and property preferences.",
            "Technical and usage information: IP address, device and browser data, login activity, platform interaction, cookies, and analytics. Communications: support messages, emails, feedback, and inquiries.",
          ],
        },
        {
          heading: "3. How We Use Information",
          bullets: [
            "Creating and managing user accounts.",
            "Verifying identity and conducting KYC/AML compliance checks.",
            "Processing investments, payments, commissions, and transactions.",
            "Providing platform functionality and customer support.",
            "Improving performance, security, and user experience.",
            "Detecting fraud and complying with legal and regulatory obligations.",
          ],
        },
        {
          heading: "4. Legal Basis for Processing",
          body: [
            "We process personal information based on user consent, performance of contractual obligations, compliance with legal and regulatory obligations, legitimate business interests, and fraud prevention, risk management, and security purposes.",
          ],
        },
        {
          heading: "5. Sharing and Disclosure",
          body: [
            "We may share information with payment processors and financial institutions; identity verification and compliance providers; legal, regulatory, or law enforcement authorities; professional advisers and auditors; technology and cloud providers; and developers or SPVs involved in transactions. BuyOps does not sell personal information to third parties.",
          ],
        },
        {
          heading: "6. Data Security",
          body: [
            "We implement reasonable administrative, technical, and physical safeguards including encrypted storage, role-based access control, and secure payment gateway integration. No internet platform is completely secure; users acknowledge inherent transmission risks.",
          ],
        },
        {
          heading: "7. Data Retention",
          body: [
            "We retain information only as long as necessary to provide services, comply with legal and regulatory obligations, resolve disputes, enforce agreements, and maintain security records. When no longer needed, data may be securely deleted, anonymized, or archived.",
          ],
        },
        {
          heading: "8. Cookies and Tracking",
          body: [
            "We use cookies and analytics to improve functionality, remember preferences, analyze usage, enhance security, and personalize experience. You may manage cookies via browser settings, though some features may not function if disabled.",
          ],
        },
        {
          heading: "9. Your Rights",
          bullets: [
            "Request access to your personal information.",
            "Request correction of inaccurate or incomplete information.",
            "Request deletion where legally permissible.",
            "Object to or restrict certain processing.",
            "Withdraw consent where processing relies on consent.",
          ],
        },
        {
          heading: "10. Third-Party Links",
          body: [
            "The platform may link to third-party sites we do not control. We are not responsible for their privacy practices and encourage you to review their policies.",
          ],
        },
        {
          heading: "11. International Transfers",
          body: [
            "Where necessary, information may be processed or stored outside Nigeria, subject to appropriate safeguards and applicable legal requirements.",
          ],
        },
        {
          heading: "12. Children's Privacy",
          body: [
            "The platform is not intended for persons under eighteen (18). We do not knowingly collect information from minors without lawful authorization.",
          ],
        },
        {
          heading: "13. Policy Updates",
          body: [
            "We may update this Policy to reflect legal, operational, or regulatory changes. Updates take effect upon publication, and continued use constitutes acceptance.",
          ],
        },
        {
          heading: "14. Contact",
          body: [
            "For questions, complaints, or requests regarding this Policy, contact BuyOps through the official support or compliance channels on the platform.",
          ],
        },
      ]}
    />
  );
}
