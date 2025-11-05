"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type HeroSectionProps = {
  backgroundImageSrc?: string;
  backgroundVideoSrc?: string;
  overlayOpacity?: number; // 0 to 1
};

export default function HeroSection({
  backgroundImageSrc,
  backgroundVideoSrc,
  overlayOpacity = 0.35,
}: HeroSectionProps) {
  const hasMedia = Boolean(backgroundImageSrc || backgroundVideoSrc);

  return (
    <motion.section
      className={
        hasMedia
          ? "relative min-h-screen px-6 py-32 flex flex-col items-center justify-center text-white overflow-hidden"
          : "min-h-screen bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 text-gray-900 px-6 py-32 text-center flex flex-col items-center justify-center"
      }
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {hasMedia && (
        <>
          {backgroundVideoSrc ? (
            <video
              className="absolute inset-0 h-full w-full object-cover z-0"
              src={backgroundVideoSrc}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : null}
          {backgroundImageSrc ? (
            <Image
              src={backgroundImageSrc}
              alt="Hero background"
              fill
              priority
              className="object-cover z-0"
            />
          ) : null}
          <div
            className="absolute inset-0 bg-black z-10"
            style={{ opacity: overlayOpacity }}
          />
        </>
      )}

      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="relative z-20">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 drop-shadow-lg">
            Premium catering & event experiences across Kerala & Tamil Nadu
          </h1>
          <p className="mb-10 text-lg sm:text-xl font-light drop-shadow">
            Experience the best of Kerala & Tamil Nadu with our premium catering
            & event services.
          </p>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition">
            Book Your Event
          </button>
        </div>
      </div>
    </motion.section>
  );
}
