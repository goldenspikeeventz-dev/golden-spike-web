"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import {
  catalogServices,
  featuredServiceFallbackImageIds,
  featuredServices,
} from "@/lib/services";
import { byId } from "@/lib/images";

const catalogCount = catalogServices.length;

export default function Services() {
  return (
    <section id="services" className="section-pad bg-surface">
      <div className="container-wide">
        <SectionHeading
          label="Our services"
          title="Highlights from our full catalog"
          description={`A curated snapshot of how we work — weddings, corporate programs, catering, and production. Explore ${catalogCount} specialized services across Kerala on the services page.`}
          className="mb-6 md:mb-8"
        />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col items-center gap-4 md:mb-16"
        >
          <MagneticButton href="/services" variant="primary">
            Browse full service catalog
          </MagneticButton>
          <Link
            href="/services"
            className="text-sm font-semibold text-accent underline-offset-4 transition hover:underline"
          >
            See décor, staffing, theme nights, and more →
          </Link>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {featuredServices.map((service, index) => {
            const fallback = byId(featuredServiceFallbackImageIds[index]);
            const src = service.image.src;
            const alt = service.image.alt;
            const tall = index % 3 === 1;
            return (
              <motion.article
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: { opacity: 1, y: 0 },
                }}
                className={`group relative overflow-hidden rounded-2xl bg-surface-dark ${
                  tall ? "md:row-span-1 lg:min-h-[420px]" : "min-h-[360px]"
                }`}
              >
                <Link
                  href="/services"
                  className="absolute inset-0 z-10 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  aria-label={`${service.title} — view all services`}
                />
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                  onError={(e) => {
                    if (fallback) {
                      e.currentTarget.srcset = "";
                      e.currentTarget.src = fallback.src;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <h3 className="font-display text-2xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <MagneticButton href="/services" variant="ghost">
            View all {catalogCount} services
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}