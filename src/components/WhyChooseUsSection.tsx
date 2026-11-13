"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { byId } from "@/lib/images";

const stats = [
  { value: "1,200+", label: "Events delivered" },
  { value: "48", label: "Executive chefs & leads" },
  { value: "2", label: "States served daily" },
  { value: "97%", label: "On-time service rating" },
];

const principles = [
  "Single point of contact from menu tasting to teardown",
  "Kitchens audited for consistency across every service line",
  "Regional sourcing with transparent dietary accommodations",
  "Production crews trained for high-guest-count choreography",
];

export default function WhyChooseUsSection() {
  const image = byId(19);

  return (
    <section className="section-pad relative overflow-hidden bg-background">
      <div className="container-wide">
        <SectionHeading
          label="Why Golden Spike"
          title="Reliability at scale, warmth at every table"
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.ul
            className="grid grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {stats.map((stat) => (
              <motion.li
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <p className="font-display text-4xl font-semibold text-accent">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </motion.li>
            ))}
          </motion.ul>

          <div>
            <ul className="space-y-4">
              {principles.map((text, i) => (
                <motion.li
                  key={text}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-3 text-muted"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">{text}</span>
                </motion.li>
              ))}
            </ul>

            {image ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative mt-10 aspect-[16/10] overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
              </motion.div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
