"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { catalogServices } from "@/lib/services";

export default function ServicesPageContent() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-wide">
        <SectionHeading
          label="Event planner"
          title="Services we offer"
          description="The same catalog guests see on our business profile — planning, décor, catering, and on-site crews for celebrations across Kerala."
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
          variants={{
            visible: { transition: { staggerChildren: 0.05 } },
          }}
        >
          {catalogServices.map((service) => (
            <motion.article
              key={service.slug}
              id={service.slug}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              className="group relative min-h-[320px] overflow-hidden rounded-2xl bg-surface-dark scroll-mt-28"
            >
              <Image
                src={service.image.src}
                alt={service.image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width:768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <h2 className="font-display text-xl font-semibold text-white md:text-2xl">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-14 flex flex-col items-start gap-4 rounded-2xl border border-border bg-background p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl text-foreground">
              Need a custom scope?
            </p>
            <p className="mt-2 max-w-xl text-sm text-muted">
              Tell us your date, guest count, and venue — we&apos;ll map the right
              mix of planning, décor, and catering.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Contact our events desk
          </Link>
        </div>
      </div>
    </section>
  );
}