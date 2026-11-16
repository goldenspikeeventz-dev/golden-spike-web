"use client";

import Image from "next/image";
import { motion } from "motion/react";
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

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
      />
    </svg>
  );
}

const cards = [
  {
    title: "Call the events desk",
    detail: PHONE_DISPLAY,
    href: PHONE_HREF,
    cta: "Call now",
    external: false,
    Icon: PhoneIcon,
  },
  {
    title: "Email inquiries",
    detail: EMAIL,
    href: EMAIL_HREF,
    cta: "Send email",
    external: false,
    Icon: MailIcon,
  },
  {
    title: "WhatsApp",
    detail: "Quick briefs & menu questions",
    href: WHATSAPP_URL,
    cta: "Open chat",
    external: true,
    Icon: ChatIcon,
  },
];

export default function ContactPageContent() {
  const heroImage = byId(22);

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-surface-dark pb-12 pt-32 text-white md:pb-16 md:pt-40">
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

      <div className="border-b border-border bg-surface">
        <div className="container-wide px-6 py-4 md:py-5">
          <p className="text-center text-sm text-muted">
            <span className="font-semibold uppercase tracking-[0.12em] text-accent">
              Response time
            </span>
            <span className="mx-2 text-border">·</span>
            Most inquiries receive a reply within one business day.
          </p>
        </div>
      </div>

      <section className="section-pad">
        <div className="container-wide grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col rounded-2xl border border-border border-t-2 border-t-accent bg-surface p-8 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <card.Icon className="h-8 w-8 text-accent" />
              <h2 className="font-display mt-5 text-2xl font-semibold">
                {card.title}
              </h2>
              <p className="mt-3 text-foreground/80">{card.detail}</p>
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
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">
            We are headquartered in Kodungallur, Thrissur, and produce events
            across {SERVICE_AREAS.join(" and ")}.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {SERVICE_AREAS.map((area) => (
              <li
                key={area}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:border-accent/50"
              >
                {area}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      <section className="border-t border-border bg-surface-dark px-6 py-14 text-center text-white md:py-16">
        <div className="container-wide">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
            Ready when you are
          </p>
          <h2 className="text-display mt-4 text-[clamp(1.75rem,4vw,2.5rem)] font-semibold">
            Speak with our events desk
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-white/70">
            Tell us your date, guest count, and venue — we&apos;ll shape cuisine,
            crew, and run-of-show across Kerala.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href={PHONE_HREF} variant="primary">
              Call now
            </MagneticButton>
            <MagneticButton href={WHATSAPP_URL} variant="outline" external>
              WhatsApp
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}