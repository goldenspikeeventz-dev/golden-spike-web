"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { byId, siteImages } from "@/lib/images";

export default function GalleryPageHero() {
  const heroImage = byId(38) ?? byId(25) ?? byId(17);
  const frameCount = siteImages.length;

  return (
    <section className="relative overflow-hidden border-b border-border bg-surface-dark pb-16 pt-32 text-white md:pb-20 md:pt-40">
      {heroImage ? (
        <Image
          src={heroImage.src}
          alt=""
          fill
          className="object-cover opacity-35"
          priority
          aria-hidden
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-b from-[#12100e]/80 to-[#12100e]" />
      <div className="container-wide relative px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-light"
        >
          Gallery
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-display mt-4 max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] font-semibold"
        >
          {frameCount} frames from the floor
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 max-w-2xl text-white/70"
        >
          Every image is from a real Golden Spike production — weddings,
          corporate programs, tourism hospitality, and private celebrations.
        </motion.p>
      </div>
    </section>
  );
}