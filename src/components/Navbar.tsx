"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { BrandLogo } from "@/components/BrandLogo";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#about", label: "About", match: (p: string) => p === "/" },
  {
    href: "/services",
    label: "Services",
    match: (p: string) => p.startsWith("/services"),
  },
  { href: "/gallery", label: "Gallery", match: (p: string) => p.startsWith("/gallery") },
  { href: "/contact", label: "Contact", match: (p: string) => p.startsWith("/contact") },
];

export default function Navbar() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const open = mobileMenuOpen;
  const onHome = pathname === "/";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const transparent = onHome && !scrolled;

  const mobileDrawer = (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          initial={{ opacity: reduceMotion ? 1 : 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col bg-surface-dark px-8 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(7rem,env(safe-area-inset-top))] md:hidden"
        >
          <ul className="flex flex-col gap-8">
            {links.map((item, i) => (
              <li
                key={item.href}
                className={reduceMotion ? undefined : "opacity-0"}
                style={
                  reduceMotion
                    ? undefined
                    : {
                        animation: "navbar-link-in 0.45s ease forwards",
                        animationDelay: `${i * 0.06}s`,
                      }
                }
              >
                <Link
                  href={item.href}
                  className="font-display text-4xl text-white"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-colors duration-300",
        transparent
          ? "border-transparent bg-transparent"
          : "border-b border-border bg-background/85 backdrop-blur-md",
        open && "md:border-b md:border-border md:bg-background/85"
      )}
    >
      <nav className="container-wide flex items-center justify-between px-6 py-4 md:py-5">
        <Link href="/" className="inline-flex shrink-0 items-center overflow-visible">
          <BrandLogo
            variant="lockup"
            tone={transparent && !open ? "onDark" : "onLight"}
            priority
            className="h-8 max-h-11 w-auto max-w-[min(92vw,20rem)] sm:h-9 md:h-10 lg:h-11"
          />
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
          aria-expanded={open}
          className={cn(
            "relative z-[110] flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full md:hidden",
            "ring-1 transition-colors",
            open && "bg-white/10 text-white ring-white/25",
            !open &&
              transparent &&
              "bg-black/35 text-white backdrop-blur-sm ring-white/20",
            !open && !transparent && "bg-foreground/5 text-foreground ring-border"
          )}
          onClick={toggleMobileMenu}
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

      {mounted ? createPortal(mobileDrawer, document.body) : null}
    </header>
  );
}