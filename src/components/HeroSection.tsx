"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 text-gray-900 py-32 px-6 text-center rounded-lg shadow-lg"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl sm:text-6xl font-extrabold mb-6">Golden Spike Events</h1>
      <p className="max-w-xl mx-auto mb-10 text-lg sm:text-xl font-light">
        Premium catering & event experiences across Kerala & Tamil Nadu
      </p>
      <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition">
        Explore Our Services
      </button>
    </motion.section>
  );
}
