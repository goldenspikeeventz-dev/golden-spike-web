"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { byId } from "@/lib/images";

const previewIds = [23, 22, 1, 14];

export default function GalleryPreviewSection() {
  return (
    <section className="section-pad bg-background">
      <div className="container-wide">
        <SectionHeading
          label="Gallery"
          title="Moments from the floor"
          description="Tap through selected frames from our latest productions — the full archive lives on the gallery page."
        />

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {previewIds.map((id, i) => {
            const image = byId(id);
            if (!image) return null;
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`relative overflow-hidden rounded-xl ${
                  i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto md:min-h-[420px]" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  sizes="(max-width:768px) 50vw, 25vw"
                />
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <MagneticButton href="/gallery" variant="ghost">
            View full gallery
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
