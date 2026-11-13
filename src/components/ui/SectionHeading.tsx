"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: SectionHeadingProps) {
  const alignClass =
    align === "center" ? "text-center mx-auto" : "text-left max-w-3xl";

  return (
    <motion.header
      className={cn("mb-14 md:mb-16", alignClass, className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {label ? (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.2em]",
            dark ? "text-accent-light" : "text-accent"
          )}
        >
          {label}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-display text-[clamp(2.25rem,5vw,3.75rem)] font-semibold",
          dark ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed md:text-lg",
            align === "center" && "mx-auto",
            dark ? "text-white/70" : "text-muted"
          )}
        >
          {description}
        </p>
      ) : null}
    </motion.header>
  );
}
