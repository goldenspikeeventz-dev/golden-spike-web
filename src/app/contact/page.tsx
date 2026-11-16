import type { Metadata } from "next";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Golden Spike Events & Caterers for event planning and premium catering across Kerala.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
