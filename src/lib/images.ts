export type SiteImage = {
  id: number;
  src: string;
  alt: string;
  caption: string;
  tags: string[];
};

const img = (n: number, alt: string, caption: string, tags: string[]): SiteImage => ({
  id: n,
  src: `/img/image_${n}.jpeg`,
  alt,
  caption,
  tags,
});

export const siteImages: SiteImage[] = [
  img(1, "Banquet hall with elegant table settings", "Grand banquet reception", ["service", "gallery"]),
  img(2, "Outdoor catering spread", "Garden celebration lunch", ["service", "gallery"]),
  img(3, "Dessert and confection display", "Artisan pastry showcase", ["service", "gallery"]),
  img(4, "Live food counter service", "Interactive culinary station", ["service", "gallery"]),
  img(5, "Corporate dining setup", "Executive boardroom catering", ["service", "gallery"]),
  img(6, "Festival and tourism crowd dining", "Tourism hospitality service", ["service", "gallery"]),
  img(7, "Traditional wedding feast", "Wedding celebrations", ["category", "gallery"]),
  img(8, "Corporate gala dinner", "Corporate events", ["category", "gallery"]),
  img(9, "Resort-style outdoor event", "Destination gatherings", ["category", "gallery"]),
  img(10, "Institutional catering line", "Large-scale hospitality", ["category", "gallery"]),
  img(11, "Intimate private dining", "Private soirées", ["category", "gallery"]),
  img(12, "Coastal venue evening event", "Featured — Kochi waterfront", ["featured", "gallery"]),
  img(13, "Heritage hall celebration", "Featured — heritage venue", ["featured", "gallery"]),
  img(14, "Tech park corporate summit", "Featured — corporate summit", ["featured", "gallery"]),
  img(15, "Destination wedding reception", "Featured — destination wedding", ["featured", "gallery"]),
  img(16, "Golden Spike team service moment", "Crafted with care", ["about", "gallery"]),
  img(17, "Cinematic event wide shot", "Signature event production", ["hero", "gallery"]),
  img(18, "Plated fine dining course", "Precision in every plate", ["about", "gallery"]),
  img(19, "Evening ambient lighting at venue", "Atmosphere & staging", ["why", "gallery"]),
  img(20, "Large-scale event floor", "Scale without compromise", ["hero", "gallery"]),
  img(21, "Traditional Kerala spread", "Regional culinary mastery", ["gallery"]),
  img(22, "Night celebration with warm lighting", "Unforgettable finales", ["hero", "gallery"]),
];

export const byTag = (tag: string) => siteImages.filter((i) => i.tags.includes(tag));

export const byId = (id: number) => siteImages.find((i) => i.id === id);
