"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "@/media/logo/Buyops Logo.svg";

const platformLinks = [
  {
    label: "Sales Agent Dashboard",
    href: process.env.NEXT_PUBLIC_SALES_PORTAL_URL ?? "https://sales.buyops.ng",
    color: "text-green-600",
  },
  {
    label: "Investor Portal",
    href:
      process.env.NEXT_PUBLIC_INVESTOR_PORTAL_URL ??
      "https://investors.buyops.ng",
    color: "text-brand-blue",
  },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "The Platform", href: "#ecosystem" },
    { label: "Properties", href: "#inventory" },
    { label: "Our Process", href: "#trail" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <span className="flex items-center gap-3 group cursor-default select-none">
            <Image
              src={logo}
              alt="BuyOps Logo"
              width={107}
              height={32}
              className="h-7 sm:h-8 w-auto"
              style={{ height: "32px", width: "auto", maxHeight: "32px" }}
              priority
            />
          </span>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-brand-gray hover:text-brand-blue transition-colors font-secondary"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            {/* Platform dropdown */}
            <div className="relative hidden sm:block" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((o) => !o)}
                className="flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 border border-gray-300 text-brand-dark rounded-lg hover:border-brand-blue hover:text-brand-blue transition-colors font-secondary font-semibold text-sm"
              >
                Login
                <svg
                  className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50"
                  >
                    {platformLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block px-4 py-3 text-sm font-medium font-secondary hover:bg-gray-50 transition-colors ${link.color}`}
                        onClick={() => setDropdownOpen(false)}
                      >
                        {link.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <motion.a
              href="https://freeinvoice.buyops.ng"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden sm:inline-flex px-4 py-2 sm:px-5 sm:py-2.5 bg-brand-green text-white rounded-lg hover:bg-green-700 transition-colors font-secondary font-semibold text-sm"
            >
              Free Invoice
            </motion.a>
            <motion.a
              href="#waitlist"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 sm:px-6 sm:py-2.5 bg-brand-blue text-white rounded-lg hover:bg-blue-700 transition-colors font-secondary font-semibold text-sm sm:text-base"
            >
              Secure Early Access
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
