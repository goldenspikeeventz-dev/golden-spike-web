"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BrandLogo } from "@/components/BrandLogo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { byId } from "@/lib/images";

export default function AboutSection() {
  const primary = byId(16);
  const secondary = byId(18);

  return (
    <section id="about" className="section-pad bg-background">
      <div className="container-wide">
        <SectionHeading
          label="About us"
          title="A production mindset for every plate and every moment"
          description="Golden Spike Events & Caterers pairs Kerala’s culinary heritage with event production discipline — coordinating vendors, timelines, and guest experience across the state."
          align="left"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-muted"
          >
            <BrandLogo
              variant="lockup"
              tone="onLight"
              className="h-auto w-auto max-w-[280px]"
            />
            <p className="text-lg leading-relaxed text-foreground/90">
              We are caterers, planners, and hosts in one team. From Kodungallur
              to destinations across Kerala, we obsess over flow, flavor, and
              the details guests remember.
            </p>
            <p className="leading-relaxed">
              Our on-site culinary teams and production crew travel with you —
              so your menu is never limited to a standard banquet template.
              Every event receives bespoke menu engineering, logistics planning,
              and on-the-day direction.
            </p>
          </motion.div>

          <div className="relative grid grid-cols-12 gap-4">
            {primary ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative col-span-8 aspect-[4/5] overflow-hidden rounded-2xl"
              >
                <Image
                  src={primary.src}
                  alt={primary.alt}
                  width={600}
                  height={750}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            ) : null}
            {secondary ? (
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="relative col-span-4 -mt-12 aspect-[3/4] overflow-hidden rounded-2xl border-4 border-background shadow-xl"
              >
                <Image
                  src={secondary.src}
                  alt={secondary.alt}
                  width={320}
                  height={420}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
