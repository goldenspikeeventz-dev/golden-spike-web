"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import {
  BRAND_NAME,
  EMAIL,
  EMAIL_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
  SERVICE_AREAS,
  WHATSAPP_URL,
} from "@/lib/contact";
import { byId } from "@/lib/images";

const cards = [
  {
    title: "Call the events desk",
    detail: PHONE_DISPLAY,
    href: PHONE_HREF,
    cta: "Call now",
    external: false,
  },
  {
    title: "Email inquiries",
    detail: EMAIL,
    href: EMAIL_HREF,
    cta: "Send email",
    external: false,
  },
  {
    title: "WhatsApp",
    detail: "Quick briefs & menu questions",
    href: WHATSAPP_URL,
    cta: "Open chat",
    external: true,
  },
];

export default function ContactPageContent() {
  const heroImage = byId(22);

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-surface-dark pb-20 pt-32 text-white md:pt-40">
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
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-display mt-4 max-w-2xl text-[clamp(2.5rem,6vw,4rem)] font-semibold"
          >
            Plan with {BRAND_NAME}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-xl text-white/70"
          >
            Choose the channel that fits your timeline. We typically respond to
            new inquiries within one business day.
          </motion.p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col rounded-2xl border border-border bg-surface p-8 shadow-sm"
            >
              <h2 className="font-display text-2xl font-semibold">{card.title}</h2>
              <p className="mt-3 text-muted">{card.detail}</p>
              <div className="mt-auto pt-8">
                <MagneticButton
                  href={card.href}
                  variant="ghost"
                  external={card.external}
                >
                  {card.cta}
                </MagneticButton>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container-wide mt-16 rounded-2xl border border-border bg-surface p-8 md:p-12"
        >
          <h2 className="font-display text-3xl font-semibold">Service areas</h2>
          <p className="mt-3 max-w-2xl text-muted leading-relaxed">
            Our production kitchens and event captains operate across{" "}
            {SERVICE_AREAS.join(" and ")}. Destination events elsewhere in South
            India are available by arrangement.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {SERVICE_AREAS.map((area) => (
              <li
                key={area}
                className="rounded-full border border-border px-4 py-2 text-sm font-medium"
              >
                {area}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>
    </div>
  );
}
