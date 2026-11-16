import type { Metadata } from "next";
import GalleryPageHero from "@/components/GalleryPageHero";
import GalleryMasonry from "@/components/GalleryMasonry";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Event photography and production moments from Golden Spike Events & Caterers across Kerala.",
};

export default function GalleryPage() {
  return (
    <div className="bg-background">
      <GalleryPageHero />
      <GalleryMasonry />
    </div>
  );
}