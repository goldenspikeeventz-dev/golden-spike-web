"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    title: "Inquire",
    body: "Share your date, guest count, and vision. We respond within one business day with an initial feasibility brief.",
  },
  {
    title: "Plan",
    body: "Menu tastings, vendor alignment, and run-of-show drafting with your dedicated event captain.",
  },
  {
    title: "Execute",
    body: "On-site kitchens, service captains, and quality checks from guest arrival through final course.",
  },
  {
    title: "Celebrate",
    body: "Breakdown, feedback loop, and archive of service metrics for your next occasion with us.",
  },
];

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="section-pad bg-surface">
      <div className="container-wide">
        <SectionHeading
          label="Our process"
          title="Four acts, flawlessly timed"
          description="We treat every event like a production — clear acts, accountable owners, and no surprises backstage."
        />

        <div ref={ref} className="relative">
          <div
            className="pointer-events-none absolute left-[19px] top-0 hidden h-full w-px bg-border md:block"
            aria-hidden
          />
          <motion.div
            className="pointer-events-none absolute left-[19px] top-0 hidden h-full w-px origin-top bg-accent md:block"
            style={{ scaleY: lineScale }}
            aria-hidden
          />

          <ol className="space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.1 }}
                className="relative flex gap-8 md:gap-12"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-background font-display text-lg font-semibold text-accent">
                  {i + 1}
                </div>
                <div className="pt-1">
                  <h3 className="font-display text-3xl font-semibold">{step.title}</h3>
                  <p className="mt-3 max-w-xl text-muted leading-relaxed">{step.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
