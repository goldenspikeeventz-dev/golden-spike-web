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
  img(22, "Night celebration with warm lighting", "Unforgettable finales", ["hero", "gallery"]),
  img(23, "Wedding stage with white florals and gold seating", "Wedding stage design", ["gallery"]),
  img(
    25,
    "Floral wedding stage with red uplighting and crystal chandeliers",
    "Signature reception stage",
    ["featured", "gallery", "hero"],
  ),
  img(
    26,
    "Golden Spike service team in formal banquet uniforms",
    "Event staffing at scale",
    ["gallery", "about", "service"],
  ),
  img(
    27,
    "Wedding aisle with white florals and botanical stage backdrop",
    "Botanical wedding aisle",
    ["gallery", "category"],
  ),
  img(
    28,
    "Tropical fruit palm tree with tiered fresh fruit platters",
    "Live fruit and dessert station",
    ["gallery", "service", "category"],
  ),
  img(
    29,
    "Outdoor LED light tunnel leading to a venue entrance",
    "Outdoor light tunnel entry",
    ["gallery", "why"],
  ),
  img(
    30,
    "Arched mirror welcome sign with roses and gold vases",
    "Mirror welcome installation",
    ["gallery"],
  ),
  img(
    31,
    "Ceremony aisle with floral stands and pink wedding arch",
    "Floral ceremony arch",
    ["gallery", "category"],
  ),
  img(
    32,
    "Two-tier wedding cake with gold leaf and fresh florals",
    "Custom wedding confection",
    ["gallery", "service"],
  ),
  img(
    33,
    "Gold vases and candle holders on a welcome tablescape",
    "Welcome vignette styling",
    ["gallery"],
  ),
  img(
    34,
    "Neon floral welcome display with mirror signage",
    "Neon floral welcome",
    ["featured", "gallery"],
  ),
  img(
    35,
    "Beachfront wedding stage with wave backdrop and ocean view",
    "Destination beach stage",
    ["featured", "gallery", "hero", "category"],
  ),
  img(
    36,
    "Classical columns with blush florals and patterned tile stage",
    "Classical floral stage",
    ["gallery", "category"],
  ),
  img(
    37,
    "Gold-panel bridal stage with fairy lights and white runway",
    "Gold bridal runway",
    ["gallery", "hero"],
  ),
  img(
    38,
    "Wide wavy LED wedding backdrop with cream lounge seating",
    "Wavy LED wedding backdrop",
    ["featured", "gallery", "hero"],
  ),
  img(
    39,
    "Illuminated wedding entry with floral pillars and welcome signs",
    "Illuminated wedding entry",
    ["gallery"],
  ),
  img(
    40,
    "Neon lily floral arch at a venue entrance",
    "Neon lily entrance arch",
    ["featured", "gallery"],
  ),
  img(
    41,
    "Two-tier cake with gold Mr and Mrs topper and custom names",
    "Personalized wedding cake",
    ["gallery", "service"],
  ),
  img(
    42,
    "Couple on stage with smoke, uplighting, and floral canopy",
    "Atmospheric couple reveal",
    ["gallery", "why"],
  ),
  img(
    43,
    "Bride and groom with confetti and cold spark fountains",
    "Confetti celebration moment",
    ["featured", "gallery"],
  ),
  img(
    44,
    "Newlyweds amid confetti rain and sparklers on the dance floor",
    "Sparkler couple portrait",
    ["featured", "gallery"],
  ),
  img(
    45,
    "Couple celebrating with floor fog, bubbles, and pyrotechnics",
    "Fog and bubble finale",
    ["gallery", "why"],
  ),
  img(
    46,
    "Tanoura whirling dancers on a floral wedding stage",
    "Tanoura stage performance",
    ["gallery", "entertainment"],
  ),
  img(
    47,
    "Bride and groom with Sufi dancers and floral ceiling",
    "Cultural entertainment finale",
    ["gallery", "entertainment"],
  ),
  img(
    48,
    "Grand entrance with handheld sparklers and glowing orbs",
    "Sparkler grand entrance",
    ["featured", "gallery"],
  ),
  img(
    49,
    "Tiered gold stand with colorful welcome beverages",
    "Welcome beverage tower",
    ["gallery", "service"],
  ),
  img(
    50,
    "Couple portrait on a red-carpet wedding stage",
    "Bridal stage portrait",
    ["gallery", "category"],
  ),
  img(
    51,
    "Choreographed aisle entrance with LED props",
    "Choreographed aisle entrance",
    ["gallery", "entertainment"],
  ),
  img(
    52,
    "Processional dance performance down a geometric runner",
    "Processional dance performance",
    ["gallery", "entertainment"],
  ),
  img(
    53,
    "Banquet hall with chafing dishes and uniformed service",
    "Large-scale banquet catering",
    ["gallery", "service", "category"],
  ),
  img(
    54,
    "Couple walking through neon triangular garden arches",
    "Garden neon arch procession",
    ["gallery", "category"],
  ),
  img(
    55,
    "Wedding cake ritual with family at a floral round backdrop",
    "Cake ritual with family",
    ["gallery", "service"],
  ),
  img(
    56,
    "Golden Spike production moment on the event floor",
    "On the event floor",
    ["gallery"],
  ),
];

/** JPEGs under `public/img` (gaps at 21 and 24). */
export const galleryFileIds = siteImages.map((i) => i.id);

export const byTag = (tag: string) => siteImages.filter((i) => i.tags.includes(tag));

export const byId = (id: number) => siteImages.find((i) => i.id === id);
