"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { byId } from "@/lib/images";

const categories = [
  { label: "Weddings", imageId: 7 },
  { label: "Corporate", imageId: 8 },
  { label: "Destinations", imageId: 9 },
  { label: "Institutional", imageId: 10 },
  { label: "Private soirées", imageId: 11 },
];

export default function EventCategoriesSection() {
  return (
    <section className="section-pad overflow-hidden bg-background">
      <div className="container-wide">
        <SectionHeading
          label="Event categories"
          title="Every occasion, orchestrated"
          description="Scroll through the celebrations we stage most often — each category backed by dedicated culinary leads and production crews."
        />
      </div>

      <div className="mt-4 flex gap-5 overflow-x-auto px-6 pb-4 md:px-[max(1.5rem,calc((100vw-88rem)/2+1.5rem))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((cat, i) => {
          const image = byId(cat.imageId);
          return (
            <motion.article
              key={cat.label}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="relative h-[420px] w-[min(85vw,320px)] shrink-0 overflow-hidden rounded-2xl md:h-[480px] md:w-[360px]"
              style={{ transform: `perspective(800px) rotateY(${i % 2 === 0 ? -2 : 2}deg)` }}
            >
              {image ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="360px"
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <p className="absolute bottom-6 left-6 font-display text-3xl text-white">
                {cat.label}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
