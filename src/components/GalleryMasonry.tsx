"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteImages } from "@/lib/images";

const spanPattern = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
  "md:col-span-1",
];

export default function GalleryMasonry() {
  return (
    <section className="section-pad">
      <div className="container-wide grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 auto-rows-[220px] md:auto-rows-[260px]">
        {siteImages.map((image, i) => (
          <motion.figure
            key={image.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ delay: (i % 6) * 0.05, duration: 0.5 }}
            className={`group relative min-h-[220px] overflow-hidden rounded-2xl ${
              spanPattern[i % spanPattern.length] ?? ""
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width:768px) 100vw, 33vw"
            />
            <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/20 to-transparent p-6 opacity-100 transition md:opacity-0 md:group-hover:opacity-100">
              <p className="text-xs uppercase tracking-[0.15em] text-accent-light">
                Production {String(image.id).padStart(2, "0")}
              </p>
              <p className="mt-1 font-display text-2xl text-white">{image.caption}</p>
              <p className="mt-2 text-sm text-white/70">{image.alt}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
