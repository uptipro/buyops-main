"use client";

import { motion } from "framer-motion";

export default function TrinitySection() {
  const apps = [
    {
      title: "BuyOps Admin",
      subtitle: "The Governance Layer.",
      description:
        "Total oversight for the enterprise. Manage the entire asset lifecycle, oversee company clusters, and track global revenue from a single indigo-tinted command center.",
      features: [
        "Multi-step Asset Wizard (Land, Off-plan, Under Construction)",
        "Global Transaction Reconciliation",
        "Cluster & Agent Hierarchy Management",
      ],
      stats: [
        { label: "Total Revenue", value: "₦847M", change: "+23%" },
        { label: "Active Assets", value: "156", change: "+12%" },
        { label: "Pending Review", value: "7", change: "-5%" },
      ],
      color: "brand-blue",
    },
    {
      title: "BuyOps Sales",
      subtitle: "Smart Sales Tools.",
      description:
        'Empowering agents to close without the friction. Smart Sales Tools move leads from "Contacted" to "Ready to Buy" with zero cash handling.',
      features: [
        "4-Tab Lead Pipeline (Personal, Assigned, Freelancer)",
        "Instant Commission Previews (Lead Finder vs. Deal Closer)",
        "One-Click Secure Payment Link Generation",
      ],
      leads: [
        {
          name: "Adebayo Johnson",
          status: "Ready to Buy",
          value: "₦5,000,000",
        },
        { name: "Chioma Okafor", status: "Negotiating", value: "₦3,200,000" },
        { name: "Ibrahim Sule", status: "Ready to Buy", value: "₦7,500,000" },
      ],
      color: "brand-green",
    },
    {
      title: "BuyOps Investor",
      subtitle: "The Liquidity Layer.",
      description:
        "Real estate investment, stripped of its barriers. Investors buy fractions, track portfolios in real-time, and access deep-dive risk assessments from a mobile-first interface.",
      features: [
        "Fractional Ownership Model (Not Percentages)",
        "7-Section Deep-Dive Asset Intelligence",
        "Automated Digital Certificates & PR-HRL Tracking",
      ],
      properties: [
        {
          name: "Lagos Prime Land",
          price: "₦2.5M",
          roi: "18%",
          sold: 6,
          total: 10,
        },
        {
          name: "Abuja Smart Suite",
          price: "₦4.2M",
          roi: "22%",
          sold: 11,
          total: 15,
        },
      ],
      color: "brand-blue",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            Three Powerful Apps, One Ecosystem
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-brand-gray max-w-2xl mx-auto">
            Everything you need to succeed in real estate investment
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-32">
          {apps.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Content */}
              <div
                className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark">
                    {app.title}
                  </h3>
                  <p
                    className={`text-base sm:text-lg md:text-xl font-semibold text-${app.color}`}
                  >
                    {app.subtitle}
                  </p>
                </div>

                <p className="text-base sm:text-lg text-brand-gray leading-relaxed">
                  {app.description}
                </p>

                <div className="space-y-3">
                  {app.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full bg-${app.color} flex items-center justify-center`}
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
                      <span className="text-brand-dark">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="card-modern p-5 sm:p-8 space-y-6">
                  {/* Admin Stats */}
                  {app.stats && (
                    <div className="grid grid-cols-3 gap-4">
                      {app.stats.map((stat, i) => (
                        <div
                          key={i}
                          className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg"
                        >
                          <div
                            className={`text-xl sm:text-2xl font-bold text-${app.color} mb-1`}
                          >
                            {stat.value}
                          </div>
                          <div className="text-xs text-brand-gray mb-1">
                            {stat.label}
                          </div>
                          <div
                            className={`text-xs ${stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                          >
                            {stat.change}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Sales Leads */}
                  {app.leads && (
                    <div className="space-y-3">
                      {app.leads.map((lead, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-brand-green transition-colors"
                        >
                          <div>
                            <div className="font-semibold text-brand-dark">
                              {lead.name}
                            </div>
                            <div className="text-sm text-brand-gray">
                              {lead.status}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-brand-dark">
                              {lead.value}
                            </div>
                            {lead.status === "Ready to Buy" && (
                              <button className="mt-2 px-4 py-1 bg-brand-green text-white text-xs rounded-lg hover:bg-green-600 transition-colors">
                                Send Link
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Investor Properties */}
                  {app.properties && (
                    <div className="space-y-4">
                      {app.properties.map((property, i) => (
                        <div
                          key={i}
                          className="p-4 border border-gray-200 rounded-lg"
                        >
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <div className="font-bold text-brand-dark">
                                {property.name}
                              </div>
                              <div className="text-sm text-brand-gray">
                                Price per fraction
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-brand-blue">
                                {property.price}
                              </div>
                              <div className="text-sm text-green-600">
                                ROI: {property.roi}
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-1">
                            {Array.from({ length: property.total }).map(
                              (_, idx) => (
                                <div
                                  key={idx}
                                  className={`flex-1 h-2 rounded ${
                                    idx < property.sold
                                      ? "bg-brand-blue"
                                      : "bg-gray-200"
                                  }`}
                                />
                              ),
                            )}
                          </div>
                          <div className="text-xs text-brand-gray mt-2">
                            {property.sold}/{property.total} fractions sold
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
