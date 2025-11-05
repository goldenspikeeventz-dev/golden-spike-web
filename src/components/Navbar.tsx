"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold text-gray-900"
        >
          {/* Logo text placeholder */}
          Golden Spike
        </Link>

        <ul className="flex items-center gap-8 text-sm font-medium text-gray-700">
          <li>
            <Link
              href="/about"
              className="hover:text-gray-900 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className="hover:text-gray-900 transition-colors"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-gray-900 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
