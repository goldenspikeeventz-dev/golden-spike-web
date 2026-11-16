"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useSyncExternalStore } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { byId } from "@/lib/images";

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerSnapshot() {
  return false;
}

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getServerSnapshot
  );

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  const primary = byId(17);
  const depth = byId(20);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100dvh] items-end overflow-hidden bg-surface-dark pb-20 pt-32 md:items-center md:pb-28"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={reducedMotion ? undefined : { y: bgY }}
      >
        {!reducedMotion ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/background_video.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : primary ? (
          <Image
            src={primary.src}
            alt={primary.alt}
            fill
            priority
            className="object-cover"
          />
        ) : null}
        {depth && reducedMotion ? (
          <div className="absolute inset-0 opacity-40 mix-blend-overlay">
            <Image
              src={depth.src}
              alt=""
              fill
              className="object-cover"
              aria-hidden
            />
          </div>
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12100e] via-[#12100e]/55 to-[#12100e]/30" />
      </motion.div>

      <motion.div
        className="container-wide relative z-10 px-6"
        style={reducedMotion ? undefined : { y: textY, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="pointer-events-none mb-6 w-full max-w-xl opacity-95 sm:max-w-2xl"
        >
          <BrandLogo
            variant="lockup"
            tone="onDark"
            priority
            className="h-auto w-auto max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-accent-light"
        >
          Kerala
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-display max-w-4xl text-[clamp(2.75rem,7vw,5.5rem)] font-semibold text-white"
        >
          Events crafted with cinematic scale and Southern hospitality
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
        >
          Golden Spike Events & Caterers designs premium catering experiences — from intimate
          gatherings to thousand-guest productions — with flawless service and
          atmosphere.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <MagneticButton href="/#featured" variant="primary">
            Explore our events
          </MagneticButton>
          <MagneticButton href="/contact" variant="outline">
            Plan your event
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
