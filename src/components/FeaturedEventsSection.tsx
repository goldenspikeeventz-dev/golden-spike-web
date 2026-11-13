"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { byId } from "@/lib/images";

const featured = [
  {
    title: "Kochi waterfront reception",
    subtitle: "482 guests · live seafood pavilion",
    imageId: 12,
  },
  {
    title: "Heritage hall centenary",
    subtitle: "Multi-day gala · classical menu",
    imageId: 13,
  },
  {
    title: "Tech park leadership summit",
    subtitle: "3-day corporate program",
    imageId: 14,
  },
  {
    title: "Destination wedding finale",
    subtitle: "Sunset mandap · midnight dessert bar",
    imageId: 15,
  },
];

export default function FeaturedEventsSection() {
  return (
    <section id="featured" className="section-pad bg-surface-dark text-white">
      <div className="container-wide">
        <SectionHeading
          label="Featured events"
          title="Recent productions"
          description="A glimpse into the scale, styling, and service rhythm we bring to signature clients."
          dark
        />

        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((item, i) => {
            const image = byId(item.imageId);
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.01 }}
                className="group relative min-h-[320px] overflow-hidden rounded-2xl md:min-h-[380px]"
              >
                {image ? (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 p-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent-light">
                    {item.subtitle}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-semibold">
                    {item.title}
                  </h3>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
