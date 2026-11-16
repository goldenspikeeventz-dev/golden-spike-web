import type { Metadata } from "next";
import GalleryMasonry from "@/components/GalleryMasonry";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Event photography and production moments from Golden Spike Events & Caterers across Kerala.",
};

export default function GalleryPage() {
  return (
  <div className="bg-background">
      <section className="border-b border-border bg-surface-dark pb-16 pt-32 text-white md:pb-20 md:pt-40">
        <div className="container-wide px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
            Gallery
          </p>
          <h1 className="text-display mt-4 max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] font-semibold">
            Twenty-two frames from the floor
          </h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Every image is from a real Golden Spike production — weddings,
            corporate programs, tourism hospitality, and private celebrations.
          </p>
        </div>
      </section>
      <GalleryMasonry />
    </div>
  );
}
