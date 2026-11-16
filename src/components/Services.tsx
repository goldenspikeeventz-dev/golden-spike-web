"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { byId } from "@/lib/images";

const services = [
  {
    title: "Wedding planning & décor",
    description:
      "Stages, venues, florals, and timelines coordinated with your vision.",
    imageId: 1,
  },
  {
    title: "Customized catering",
    description:
      "Menus engineered for your guest list, traditions, and service style.",
    imageId: 2,
  },
  {
    title: "Live entertainment",
    description: "DJs, emcees, live music, and programming that keeps energy high.",
    imageId: 3,
  },
  {
    title: "Wedding & reception catering",
    description: "End-to-end food service for weddings, receptions, and private events.",
    imageId: 4,
  },
  {
    title: "Corporate events",
    description: "Boardrooms, offsites, and galas with executive-level presentation.",
    imageId: 5,
  },
  {
    title: "Lighting & equipment",
    description: "Sound, lighting, rentals, and guest management on event day.",
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
          description="From intimate gatherings to large productions, every line of service shares the same commitment to timing, taste, and guest care."
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
