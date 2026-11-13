"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import {
  EMAIL_HREF,
  PHONE_HREF,
  WHATSAPP_URL,
} from "@/lib/contact";

export default function ContactStrip() {
  return (
    <section className="section-pad bg-surface-dark text-white">
      <motion.div
        className="container-wide text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
          Let&apos;s begin
        </p>
        <h2 className="text-display mt-4 text-[clamp(2rem,5vw,3.25rem)] font-semibold">
          Make your next event unforgettable
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          Speak with our events desk today — we&apos;ll align cuisine, crew, and
          calendar for Kerala or Tamil Nadu.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href={PHONE_HREF} variant="primary">
            Call now
          </MagneticButton>
          <MagneticButton href={EMAIL_HREF} variant="outline">
            Email us
          </MagneticButton>
          <MagneticButton href={WHATSAPP_URL} variant="outline" external>
            WhatsApp
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}
