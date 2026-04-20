"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import confetti from "canvas-confetti";

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    persona: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL ??
        "https://buyops-backend-production.up.railway.app";
      await fetch(`${apiUrl}/public/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch {
      // Silently fail — user still sees success state
    }

    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    setIsSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", persona: "" });
    }, 3000);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <input
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-blue focus:outline-none font-secondary text-base"
      />

      <input
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-blue focus:outline-none font-secondary text-base"
      />

      <select
        value={formData.persona}
        onChange={(e) => setFormData({ ...formData, persona: e.target.value })}
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-blue focus:outline-none font-secondary text-base"
      >
        <option value="">I am a...</option>
        <option value="owner">Asset Owner</option>
        <option value="agent">Sales Agent</option>
        <option value="investor">Investor</option>
      </select>

      <motion.button
        type="submit"
        disabled={isSubmitted}
        whileHover={{ scale: isSubmitted ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitted ? 1 : 0.98 }}
        className={`w-full px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold transition-all font-secondary text-base sm:text-lg ${
          isSubmitted
            ? "bg-green-500 text-white"
            : "bg-white text-brand-blue hover:shadow-xl"
        }`}
      >
        {isSubmitted ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            You're on the list!
          </span>
        ) : (
          "Get Early Access."
        )}
      </motion.button>

      {isSubmitted && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-sm text-gray-600 font-secondary"
        >
          Check your email for confirmation
        </motion.p>
      )}
    </motion.form>
  );
}
