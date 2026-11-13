"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { byId } from "@/lib/images";

const testimonialImages = [byId(7), byId(12), byId(15), byId(5), byId(9)];

const testimonials = [
  {
    quote:
      "Golden Spike coordinated our three-day wedding without a single service delay. Guests still talk about the midnight appam station.",
    name: "Ananya Krishnan",
    designation: "Wedding client, Kochi",
    src: testimonialImages[0]?.src ?? "/img/image_7.jpeg",
  },
  {
    quote:
      "Our annual leadership summit needed precision plating for 600 covers. Their kitchen lead ran the floor like a choreographed production.",
    name: "Rahul Menon",
    designation: "HR Director, Chennai",
    src: testimonialImages[1]?.src ?? "/img/image_12.jpeg",
  },
  {
    quote:
      "From tasting to teardown, one team owned everything. The destination reception felt intimate even with four hundred guests.",
    name: "Priya & Arjun",
    designation: "Destination wedding, Munnar",
    src: testimonialImages[2]?.src ?? "/img/image_15.jpeg",
  },
  {
    quote:
      "We rely on them for quarterly board dinners. Dietary requests are handled quietly and flawlessly every time.",
    name: "Sandra Joseph",
    designation: "EA to CEO, Bengaluru firm",
    src: testimonialImages[3]?.src ?? "/img/image_5.jpeg",
  },
  {
    quote:
      "Tourism season means unpredictable headcounts. Golden Spike scales up without compromising the warmth of service.",
    name: "Vikram Nair",
    designation: "Resort partnerships, Kerala",
    src: testimonialImages[4]?.src ?? "/img/image_9.jpeg",
  },
];

export default function TestimonialSection() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-wide">
        <SectionHeading
          label="Testimonials"
          title="Trusted by hosts who care about the details"
        />
        <AnimatedTestimonials testimonials={testimonials} autoplay />
      </div>
    </section>
  );
}
