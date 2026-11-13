"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND_NAME } from "@/lib/contact";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#about", label: "About", match: (p: string) => p === "/" },
  { href: "/gallery", label: "Gallery", match: (p: string) => p.startsWith("/gallery") },
  { href: "/contact", label: "Contact", match: (p: string) => p.startsWith("/contact") },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const transparent = onHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-colors duration-300",
        transparent
          ? "border-transparent bg-transparent"
          : "border-b border-border bg-background/85 backdrop-blur-md"
      )}
    >
      <nav className="container-wide flex items-center justify-between px-6 py-4 md:py-5">
        <Link
          href="/"
          className={cn(
            "font-display text-xl font-semibold tracking-tight md:text-2xl",
            transparent ? "text-white" : "text-foreground"
          )}
        >
          {BRAND_NAME}
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((item) => {
            const active = item.match(pathname);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    transparent && !active && "text-white/80 hover:text-white",
                    !transparent && !active && "text-muted hover:text-foreground",
                    active && (transparent ? "text-white" : "text-accent")
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn(
            "relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden",
            transparent ? "text-white" : "text-foreground"
          )}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={cn(
              "block h-0.5 w-6 bg-current transition-transform",
              open && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-current transition-opacity",
              open && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-current transition-transform",
              open && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-surface-dark px-8 pt-28 md:hidden"
          >
            <ul className="flex flex-col gap-8">
              {links.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={item.href}
                    className="font-display text-4xl text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
