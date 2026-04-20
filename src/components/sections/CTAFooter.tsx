"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/media/logo/Buyops Logo.svg";
import WaitlistForm from "./WaitlistForm";

export default function CTAFooter() {
  const [stats, setStats] = useState([
    { value: "₦2.5B+", label: "Total Assets Under Management" },
    { value: "10,000+", label: "Active Investors" },
    { value: "500+", label: "Properties Listed" },
    { value: "18%", label: "Average ROI" },
  ]);

  useEffect(() => {
    const apiUrl =
      process.env.NEXT_PUBLIC_API_URL ??
      "https://buyops-backend-production.up.railway.app";
    fetch(`${apiUrl}/public/stats`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!data) return;
        const {
          assetsListed,
          totalInvestors,
          totalTransactionValue,
          averageROI,
        } = data;
        setStats([
          {
            value:
              totalTransactionValue > 0
                ? `₦${(totalTransactionValue / 1e9).toFixed(1)}B+`
                : "₦2.5B+",
            label: "Total Assets Under Management",
          },
          {
            value:
              totalInvestors > 0
                ? `${totalInvestors.toLocaleString()}+`
                : "10,000+",
            label: "Active Investors",
          },
          {
            value: assetsListed > 0 ? `${assetsListed}+` : "500+",
            label: "Properties Listed",
          },
          {
            value: averageROI > 0 ? `${averageROI}%` : "18%",
            label: "Average ROI",
          },
        ]);
      })
      .catch(() => {
        /* keep default stats */
      });
  }, []);

  return (
    <footer id="waitlist" className="bg-gray-50">
      <div className="section-padding">
        <div className="container-custom">
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-24 py-12 sm:py-16 md:py-20 px-5 sm:px-8 card-modern bg-gradient-to-br from-brand-blue to-blue-700"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 sm:mb-6 font-primary">
              Don't just watch the market. Own it.
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto font-secondary">
              Join 10,000+ users building the future of Nigerian real estate.
              Early waitlist members get first-look access to the "Emerald
              Garden" release.
            </p>

            <div className="max-w-md mx-auto">
              <WaitlistForm />
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16 pb-12 md:pb-16 border-b border-gray-200"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="text-center p-4 sm:p-6 card-modern"
              >
                <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-brand-gray">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Platform Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16 pb-12 md:pb-16 border-b border-gray-200"
          >
            <p className="text-brand-gray font-secondary text-sm font-medium text-center mb-6">
              Access the Platform:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              {/* <a
                href={
                  process.env.NEXT_PUBLIC_ADMIN_PORTAL_URL ??
                  "https://admin.buyops.ng"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-secondary font-semibold text-sm hover:bg-indigo-700 transition-colors shadow-sm"
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                Asset Owner Admin
              </a> */}
              <a
                href={
                  process.env.NEXT_PUBLIC_SALES_PORTAL_URL ??
                  "https://sales.buyops.ng"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white rounded-xl font-secondary font-semibold text-sm hover:bg-green-700 transition-colors shadow-sm"
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                Sales Agent Dashboard
              </a>
            </div>
            <p className="text-brand-gray font-secondary text-sm font-medium text-center mb-4">
              Investor App:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <p className="text-brand-gray font-secondary text-sm font-medium mr-2">
                Access the Investor Platform:
              </p>
              <a
                href={
                  process.env.NEXT_PUBLIC_INVESTOR_PORTAL_URL ??
                  "https://app.buyops.ng"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-brand-blue text-white rounded-xl font-secondary font-semibold text-sm hover:bg-blue-700 transition-colors shadow-sm"
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
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Web Portal
              </a>
              <a
                href={process.env.NEXT_PUBLIC_APP_STORE_URL ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-brand-dark text-white rounded-xl font-secondary font-semibold text-sm hover:bg-black transition-colors shadow-sm"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a
                href={process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white rounded-xl font-secondary font-semibold text-sm hover:bg-green-700 transition-colors shadow-sm"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.18 23.76c.3.17.65.19.97.06l12.43-6.89-2.61-2.61-10.79 9.44zm-1.74-20.4C1.16 3.73 1 4.12 1 4.56v14.88c0 .44.16.83.44 1.2l.07.06 8.34-8.34v-.2L1.44 3.3l-.0.06zM20.49 10.7l-2.78-1.56-2.95 2.95 2.95 2.95 2.79-1.57c.8-.45.8-1.32-.01-1.77zM4.15.24L16.58 7.13l-2.61 2.61L3.18.3C3.5.17 3.85.19 4.15.24z" />
                </svg>
                Google Play
              </a>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="BuyOps Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>

            <div className="text-brand-gray text-center md:text-left">
              © 2026 BuyOps. Built for Nigeria's smartest investors.
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {["Twitter", "LinkedIn", "Instagram", "Facebook"].map(
                (social) => (
                  <a
                    key={social}
                    tabIndex={-1}
                    className="pointer-events-none opacity-60 text-brand-gray hover:text-brand-blue transition-colors"
                  >
                    {social}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
