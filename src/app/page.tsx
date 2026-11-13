import AboutSection from "@/components/AboutSection";
import ContactStrip from "@/components/ContactStrip";
import EventCategoriesSection from "@/components/EventCategoriesSection";
import FeaturedEventsSection from "@/components/FeaturedEventsSection";
import GalleryPreviewSection from "@/components/GalleryPreviewSection";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import Services from "@/components/Services";
import TestimonialSection from "@/components/TestimonialSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Services />
      <EventCategoriesSection />
      <FeaturedEventsSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <GalleryPreviewSection />
      <TestimonialSection />
      <ContactStrip />
    </>
  );
}
