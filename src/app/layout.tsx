import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { APPLE_ICON, ICON, OG_IMAGE } from "@/lib/brand";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Golden Spike Events & Caterers",
    template: "%s | Golden Spike Events & Caterers",
  },
  description:
    "Event management and premium catering across Kerala. Wedding planning, décor, customized menus, and full production for celebrations statewide.",
  icons: {
    icon: [{ url: ICON, type: "image/png" }],
    apple: [{ url: APPLE_ICON, type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Golden Spike Events & Caterers",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Golden Spike Events and Caterers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${cormorant.variable} ${dmSans.variable} grain antialiased`}
      >
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
