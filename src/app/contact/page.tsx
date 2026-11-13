import type { Metadata } from "next";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Golden Spike for event planning and premium catering in Kerala and Tamil Nadu.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
