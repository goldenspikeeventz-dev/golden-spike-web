"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { byId } from "@/lib/images";

const services = [
  {
    title: "Restaurants & food courts",
    description: "High-volume dining with consistent quality and rapid service.",
    imageId: 1,
  },
  {
    title: "Bake house",
    description: "Signature breads, pastries, and celebration cakes from our ovens.",
    imageId: 2,
  },
  {
    title: "Bakers & confectionaries",
    description: "Artisan desserts and live confection counters for guest delight.",
    imageId: 3,
  },
  {
    title: "Golden Spike catering",
    description: "End-to-end catering for weddings, receptions, and private events.",
    imageId: 4,
  },
  {
    title: "Corporate catering",
    description: "Boardrooms, offsites, and galas with executive-level presentation.",
    imageId: 5,
  },
  {
    title: "Tourism catering",
    description: "Hospitality programs for resorts, festivals, and visitor experiences.",
    imageId: 6,
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad bg-surface">
      <div className="container-wide">
        <SectionHeading
          label="What we do"
          title="Six disciplines, one golden standard"
          description="From our own restaurants to the largest temporary kitchens, every service line shares the same commitment to timing, taste, and guest care."
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {services.map((service, index) => {
            const image = byId(service.imageId);
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
                {image ? (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                ) : null}
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
      </div>
    </section>
  );
}
