import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import {
  BRAND_NAME,
  EMAIL_HREF,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  PHONE_HREF,
  SERVICE_AREAS,
} from "@/lib/contact";

const footerLinks = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface-dark text-white/80">
      <div className="container-wide section-pad grid gap-12 md:grid-cols-3">
        <div>
          <BrandLogo
            variant="lockup"
            tone="onDark"
            className="h-10 w-auto max-w-full sm:h-11 sm:max-w-xs md:max-w-sm"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            Event management and premium catering across Kerala. We craft
            immersive celebrations with culinary precision and cinematic staging.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
            Reach us
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={PHONE_HREF} className="hover:text-white">
                Call our events desk
              </a>
            </li>
            <li>
              <a href={EMAIL_HREF} className="hover:text-white">
                Email inquiries
              </a>
            </li>
            <li className="pt-2 text-white/50">
              Serving {SERVICE_AREAS.join(" & ")}
            </li>
            <li className="flex flex-wrap gap-4 pt-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Instagram
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
