import Link from "next/link";

export interface LegalSection {
  heading: string;
  /** Paragraphs of body text. */
  body?: string[];
  /** Optional bulleted list rendered after the body. */
  bullets?: string[];
}

interface LegalPageProps {
  title: string;
  subtitle?: string;
  updated?: string;
  sections: LegalSection[];
}

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "KYC Policy", href: "/kyc" },
  { label: "Commission Policy", href: "/commission-policy" },
];

export default function LegalPage({
  title,
  subtitle,
  updated,
  sections,
}: LegalPageProps) {
  return (
    <main className="min-h-screen bg-white">
      {/* Header band */}
      <section className="bg-gradient-to-br from-brand-blue to-blue-700 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container-custom">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-secondary mb-6 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to BuyOps
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-primary">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/90 font-secondary">
              {subtitle}
            </p>
          )}
          {updated && (
            <p className="mt-4 text-sm text-white/70 font-secondary">
              {updated}
            </p>
          )}
        </div>
      </section>

      {/* Body */}
      <section className="py-12 md:py-16">
        <div className="container-custom max-w-4xl">
          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-xl md:text-2xl font-semibold text-brand-dark font-primary mb-3">
                  {section.heading}
                </h2>
                {section.body?.map((p, j) => (
                  <p
                    key={j}
                    className="text-brand-gray leading-relaxed font-secondary mb-3"
                  >
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="list-disc pl-6 space-y-1.5 text-brand-gray font-secondary">
                    {section.bullets.map((b, k) => (
                      <li key={k}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Cross links */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-brand-gray font-secondary mb-4">
              Related policies
            </p>
            <div className="flex flex-wrap gap-3">
              {legalLinks
                .filter((l) => l.label !== title)
                .map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-brand-dark hover:border-brand-blue hover:text-brand-blue transition-colors font-secondary text-sm"
                  >
                    {l.label}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
