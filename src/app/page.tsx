"use client";

import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import GallerySection from "@/components/GallerySection";
import TestimonialSection from "@/components/TestimonialSection";

export default function HomePage() {
  return (
    <>
      <HeroSection
        backgroundVideoSrc="/background_video.mp4"
        overlayOpacity={0.5}
      />
      <AboutSection />
      <Services />
      <GallerySection />
      <TestimonialSection />
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Let’s Make Your Event Unforgettable
        </h2>
        <p className="text-gray-700 mb-8 max-w-xl mx-auto">
          Contact us today to customize your perfect catering and event
          experience.
        </p>
        <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition">
          Contact Us
        </button>
      </section>
    </>
  );
}
