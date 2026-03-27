"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Persona = "owners" | "agents" | "investors";

export default function PersonaSwitcher() {
  const [activeTab, setActiveTab] = useState<Persona>("owners");

  const personas = {
    owners: {
      color: "#4338CA",
      bgColor: "bg-indigo-600",
      tag: "For Asset Owners",
      headline: "Turn Dead Capital into Liquid Cash.",
      description:
        "Stop waiting years for a sale. BuyOps Admin allows you to fractionalize your land or projects, reaching thousands of investors instantly while you maintain structural control.",
      features: [
        "Rapid Fractionalization: Go from title deed to listed asset in 48 hours.",
        "Automated Liquidity: Revenue distribution handled by system logic.",
        "The Command Center: Full-stack oversight of every naira and every unit.",
      ],
      stats: [
        { label: "Assets Fractionalized", value: "156" },
        { label: "Time to List", value: "48hrs" },
        { label: "Revenue Routed", value: "₦847M" },
      ],
      cta: "Open your Dashboard",
      ctaUrl: undefined, // Will use modal instead of link
      theme: "indigo",
    },
    agents: {
      color: "#10B981",
      bgColor: "bg-green-600",
      tag: "The High-Velocity Closer",
      headline: "Close Deals While You Sleep.",
      description:
        "Eliminate the cash-handling headache. Use a professional, bank-grade pipeline to manage leads, automate follow-ups, and get your commissions cleared the moment the link is clicked.",
      features: [
        "The 4-Tab Alpha: Never lose a lead; track Personal, Assigned, and Freelancer-sourced deals.",
        "Commission Transparency: Real-time visibility into Lead Finder and Deal Closer earnings.",
        "Frictionless Closing: Send secure payment links that convert 3x faster than traditional bank transfers.",
      ],
      stats: [
        { label: "Active Leads", value: "127" },
        { label: "Deals Closed This Month", value: "43" },
        { label: "Commission Cleared", value: "₦12.4M" },
      ],
      cta: "Try Smart Sales Tools",
      ctaUrl:
        process.env.NEXT_PUBLIC_SALES_PORTAL_URL ?? "https://sales.buyops.ng",
      theme: "green",
    },
    investors: {
      color: "#2563EB",
      bgColor: "bg-blue-600",
      tag: "The Wealth Accumulator",
      headline: "Own the Best of Lagos & Abuja, One Fraction at a Time.",
      description:
        "Bypass the multi-million naira barrier. Access institutional-grade real estate with as little as ₦850k. Your ownership is protected by a unique digital code and an immutable legal trail.",
      features: [
        "Fractional vs. Percentage: Own a specific, tangible piece of the asset.",
        "7-Layer Due Diligence: We show you the ROI, the Risk, and the Paperwork upfront.",
        "The PR-HRL Protocol: Instant ownership via unique registration codes.",
      ],
      stats: [
        { label: "Properties Available", value: "500+" },
        { label: "Entry Point", value: "₦850K" },
        { label: "Active Users", value: "10,000+" },
      ],
      cta: "Secure a Fraction",
      ctaUrl:
        process.env.NEXT_PUBLIC_INVESTOR_PORTAL_URL ?? "https://app.buyops.ng",
      theme: "blue",
    },
  };

  const currentPersona = personas[activeTab];

  return (
    <section
      id="ecosystem"
      className="section-padding relative overflow-hidden"
    >
      {/* Dynamic Background */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 0.5 }}
        className={`absolute inset-0 ${currentPersona.bgColor}`}
      />

      <div className="container-custom relative z-10">
        {/* Tab Switcher */}
        <div className="flex justify-center mb-10 sm:mb-16">
          <div className="inline-flex bg-gray-100 rounded-full p-1.5 gap-1">
            {[
              { key: "owners" as Persona, label: "Asset Owners" },
              { key: "agents" as Persona, label: "Sales Agents" },
              { key: "investors" as Persona, label: "Investors" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold transition-colors font-secondary text-sm sm:text-base ${
                  activeTab === tab.key
                    ? "text-white"
                    : "text-brand-gray hover:text-brand-dark"
                }`}
              >
                {activeTab === tab.key && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute inset-0 ${currentPersona.bgColor} rounded-full`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center"
          >
            {/* Left: Content */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <div className="text-xs uppercase tracking-widest text-brand-gray font-secondary mb-3">
                  {currentPersona.tag}
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-4 font-primary">
                  {currentPersona.headline}
                </h2>
                <p className="text-base sm:text-lg text-brand-gray leading-relaxed font-secondary">
                  {currentPersona.description}
                </p>
              </div>
              {/* Features */}
              <div className="space-y-3">
                {currentPersona.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className={`w-6 h-6 rounded-full ${currentPersona.bgColor} flex items-center justify-center flex-shrink-0 mt-0.5`}
                    >
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-brand-dark font-secondary">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
              {/* CTA */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`inline-block w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 ${currentPersona.bgColor} text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all font-secondary text-base sm:text-lg text-center`}
                onClick={
                  activeTab === "owners"
                    ? (e) => {
                        e.preventDefault();
                        setShowContactModal(true);
                      }
                    : undefined
                }
                href={
                  activeTab !== "owners" ? currentPersona.ctaUrl : undefined
                }
                target={activeTab !== "owners" ? "_blank" : undefined}
                rel={activeTab !== "owners" ? "noopener noreferrer" : undefined}
              >
                {currentPersona.cta}
              </motion.a>
              import ContactAdminModal from "../ContactAdminModal"; //
              ...existing code... const [showContactModal, setShowContactModal]
              = useState(false);
              <ContactAdminModal
                open={showContactModal}
                onClose={() => setShowContactModal(false)}
              />
            </div>

            {/* Right: Stats Visual */}
            <div className="card-modern p-5 sm:p-8 bg-white">
              <div className="grid grid-cols-3 gap-3 sm:gap-6">
                {currentPersona.stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.15 }}
                    className="text-center"
                  >
                    <div
                      className={`text-2xl sm:text-3xl font-bold mb-2 font-primary`}
                      style={{ color: currentPersona.color }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-brand-gray font-secondary">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Animation placeholder */}
              <div className="mt-6 sm:mt-8 p-5 sm:p-6 bg-gray-50 rounded-lg">
                <div className="h-24 sm:h-32 flex items-center justify-center text-brand-gray font-secondary">
                  {activeTab === "owners" && "📊 Growth Chart"}
                  {activeTab === "agents" && "📱 Mobile Dashboard"}
                  {activeTab === "investors" && "🗺️ Property Map"}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
