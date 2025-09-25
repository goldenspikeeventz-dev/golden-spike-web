"use client";

import { motion } from "framer-motion";

const services = [
  { title: "Wedding Catering", description: "Exceptional menus tailored to your special day." },
  { title: "Corporate Events", description: "Professional catering for corporate needs." },
  { title: "Private Parties", description: "Personalized service for unforgettable moments." },
];

export default function Services() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-semibold text-center mb-14">Our Services</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map(({ title, description }, i) => (
          <motion.div
            key={i}
            className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
