"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: 1,
    title: "List",
    description:
      "Every asset is stress-tested. We verify titles and legal standing so you don’t have to.",
    details: [
      "Legal title verification",
      "Legal standing & encumbrance checks",
      "Compliance certificates",
      "Institutional-grade listing pack",
    ],
  },
  {
    number: 2,
    title: "Match",
    description:
      "Our Sales agents use Smart Sales Tools to match the right property with the right investor.",
    details: [
      "Precision lead matching",
      "Automated follow-ups",
      "Pipeline visibility across teams",
      "Zero lead leakage",
    ],
  },
  {
    number: 3,
    title: "Pay",
    description:
      "Security is non-negotiable. Payments are encrypted and routed directly—no middleman, no cash handling.",
    details: [
      "One-click payment links",
      "Bank-grade encryption",
      "Zero cash handling",
      "Instant confirmation",
    ],
  },
  {
    number: 4,
    title: "Own",
    description:
      "Immediate legal finality. Your unique Registration Code is generated instantly, linking your identity to the asset forever.",
    details: [
      "Unique PR-HRL-#### format",
      "Blockchain-backed verification",
      "Instant ownership transfer",
      "Digital certificate issued",
    ],
  },
];

export default function DigitalTrailSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="trail"
      ref={containerRef}
      className="section-padding bg-white relative"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            From Listing to Ownership
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-brand-gray max-w-2xl mx-auto">
            The journey of a naira—tracked end-to-end with zero friction and
            total transparency
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20">
          {/* Sticky Sidebar */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 space-y-6">
              {steps.map((step, index) => {
                const startProgress = index / steps.length;
                const endProgress = (index + 1) / steps.length;

                const opacity = useTransform(
                  scrollYProgress,
                  [
                    startProgress - 0.1,
                    startProgress,
                    endProgress,
                    endProgress + 0.1,
                  ],
                  [0.3, 1, 1, 0.3],
                );

                return (
                  <motion.div
                    key={step.number}
                    style={{ opacity }}
                    className="relative"
                  >
                    <div className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 bg-white hover:border-brand-blue transition-colors">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-blue text-white flex items-center justify-center font-bold">
                        {step.number}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-brand-dark mb-1">
                          {step.title}
                        </h3>
                        <p className="text-sm text-brand-gray line-clamp-2">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-24 sm:space-y-40 lg:space-y-96">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="min-h-[240px] sm:min-h-[320px] md:min-h-[400px]"
              >
                <div className="card-modern p-6 sm:p-8 md:p-12 space-y-6">
                  <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-brand-blue text-white flex items-center justify-center text-xl sm:text-2xl font-bold">
                      {step.number}
                    </div>
                    <div>
                      <div className="text-sm text-brand-gray font-semibold mb-1">
                        STEP {step.number}
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-dark">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-brand-gray leading-relaxed">
                    {step.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {step.details.map((detail, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                      >
                        <svg
                          className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-brand-dark">{detail}</p>
                      </motion.div>
                    ))}
                  </div>

                  {step.number === 4 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="mt-8 p-4 sm:p-6 bg-blue-50 rounded-lg border border-blue-200"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <div className="text-sm text-brand-gray mb-1">
                            Sample Registration Code
                          </div>
                          <div className="text-2xl font-mono font-bold text-brand-blue">
                            PR-HRL-2026
                          </div>
                        </div>
                        <div className="w-12 h-12 rounded-full border-4 border-brand-blue border-t-transparent animate-spin" />
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
