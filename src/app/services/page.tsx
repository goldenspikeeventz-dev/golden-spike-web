import type { Metadata } from "next";
import ServicesPageContent from "@/components/ServicesPageContent";
import ServicesPageHero from "@/components/ServicesPageHero";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Event planning, décor, staffing, and premium catering across Kerala — weddings, corporate events, theme parties, and private celebrations from Golden Spike.",
};

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <ServicesPageHero />
      <ServicesPageContent />
    </div>
  );
}