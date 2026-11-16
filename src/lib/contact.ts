export const BRAND_NAME = "Golden Spike Events & Caterers";

export const PHONES = [
  { display: "+91 97446 70003", href: "tel:+919744670003" },
  { display: "+91 97449 40003", href: "tel:+919744940003" },
  { display: "+91 97446 50003", href: "tel:+919744650003" },
] as const;

export const PHONE_DISPLAY = PHONES.map((p) => p.display).join(" · ");
export const PHONE_HREF = PHONES[0].href;

export const EMAIL = "Goldenspikeeventz@gmail.com";
export const EMAIL_HREF = `mailto:${EMAIL}`;

export const WHATSAPP_NUMBER = "919744670003";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Golden Spike Events & Caterers — I'd like to plan an event."
)}`;

export const INSTAGRAM_URL =
  "https://www.instagram.com/goldenspike_events_caterers/?hl=en";
export const FACEBOOK_URL = "https://www.facebook.com/goldenspikeevents/";

export const HEADQUARTERS =
  "Mathilakam, Kodungallur, Thrissur — serving all of Kerala";

export const SERVICE_AREAS = ["Kerala"];
