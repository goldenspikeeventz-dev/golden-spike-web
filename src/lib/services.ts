export type ServiceImage = {
  src: string;
  alt: string;
};

export type FeaturedService = {
  title: string;
  description: string;
  image: ServiceImage;
};

export type CatalogService = {
  slug: string;
  title: string;
  description: string;
  image: ServiceImage;
};

const catalogImg = (slug: string, alt: string): ServiceImage => ({
  src: `/img/services/catalog-${slug}.jpg`,
  alt,
});

export const featuredServices: FeaturedService[] = [
  {
    title: "Wedding planning & décor",
    description:
      "Stages, venues, florals, and timelines coordinated with your vision.",
    image: {
      src: "/img/services/featured-wedding-decor.jpg",
      alt: "South Indian wedding stage with florals and warm golden lighting",
    },
  },
  {
    title: "Customized catering",
    description:
      "Menus engineered for your guest list, traditions, and service style.",
    image: {
      src: "/img/services/featured-custom-catering.jpg",
      alt: "Elegant buffet and plated catering spread at a celebration",
    },
  },
  {
    title: "Live entertainment",
    description:
      "DJs, emcees, live music, and programming that keeps energy high.",
    image: {
      src: "/img/services/featured-live-entertainment.jpg",
      alt: "Live music and entertainment on a decorated event floor",
    },
  },
  {
    title: "Wedding & reception catering",
    description:
      "End-to-end food service for weddings, receptions, and private events.",
    image: {
      src: "/img/services/featured-reception-catering.jpg",
      alt: "Wedding reception dining hall with banquet service",
    },
  },
  {
    title: "Corporate events",
    description:
      "Boardrooms, offsites, and galas with executive-level presentation.",
    image: {
      src: "/img/services/featured-corporate-events.jpg",
      alt: "Corporate gala dinner with professional table settings",
    },
  },
  {
    title: "Lighting & equipment",
    description:
      "Sound, lighting, rentals, and guest management on event day.",
    image: {
      src: "/img/services/featured-lighting-equipment.jpg",
      alt: "Event venue with ambient uplighting and production equipment",
    },
  },
];

/** Fallback IDs for featured cards if generated assets are missing (matches prior homepage). */
export const featuredServiceFallbackImageIds = [1, 2, 3, 4, 5, 6] as const;

export const catalogServices: CatalogService[] = [
  {
    slug: "corporate-and-conference",
    title: "Corporate and conference",
    description: "Conference logistics, AV, and hospitality for business gatherings.",
    image: catalogImg(
      "corporate-and-conference",
      "Conference hall with stage lighting and seated delegates",
    ),
  },
  {
    slug: "anniversary-party-planning",
    title: "Anniversary party planning",
    description: "Milestone celebrations with custom décor and curated menus.",
    image: catalogImg(
      "anniversary-party-planning",
      "Elegant anniversary dinner table with cake and candles",
    ),
  },
  {
    slug: "baby-shower-planning",
    title: "Baby shower planning",
    description: "Intimate showers with styling, catering, and guest flow.",
    image: catalogImg(
      "baby-shower-planning",
      "Pastel baby shower tablescape with florals and desserts",
    ),
  },
  {
    slug: "birthday-party-planning",
    title: "Birthday party planning",
    description: "Birthdays from intimate soirées to large themed productions.",
    image: catalogImg(
      "birthday-party-planning",
      "Premium birthday cake and celebration table styling",
    ),
  },
  {
    slug: "catering",
    title: "Catering",
    description: "Buffets, live counters, and plated service across Kerala.",
    image: catalogImg("catering", "Live catering counters and plated Kerala banquet dishes"),
  },
  {
    slug: "corporate-events",
    title: "Corporate events",
    description: "Galas, offsites, and boardroom programs with full production.",
    image: catalogImg(
      "corporate-events",
      "Corporate gala dinner with stage and formal table settings",
    ),
  },
  {
    slug: "decorations",
    title: "Decorations",
    description: "Floral, stage, and venue dressing for any scale of event.",
    image: catalogImg("decorations", "Floral mandap and fabric venue dressing"),
  },
  {
    slug: "event-decor-design",
    title: "Event decor design",
    description: "Concept-to-floorplan design aligned with your brand or theme.",
    image: catalogImg(
      "event-decor-design",
      "Designed floral arch stage with coordinated furniture layout",
    ),
  },
  {
    slug: "event-decor-rental",
    title: "Event decor rental",
    description: "Furniture, backdrops, and staging elements for hire.",
    image: catalogImg(
      "event-decor-rental",
      "Gold chairs, lounge seating, and backdrop pieces staged for hire",
    ),
  },
  {
    slug: "event-staffing",
    title: "Event staffing",
    description: "Hosts, floor managers, and service crews on event day.",
    image: catalogImg(
      "event-staffing",
      "Uniformed service captains carrying trays on a banquet floor",
    ),
  },
  {
    slug: "outdoor-event-planning",
    title: "Outdoor event planning",
    description: "Garden, resort, and waterfront programs built for weather and flow.",
    image: catalogImg(
      "outdoor-event-planning",
      "Garden resort dining setup under string lights at golden hour",
    ),
  },
  {
    slug: "private-event-planning",
    title: "Private event planning",
    description: "House parties, family milestones, and exclusive soirées.",
    image: catalogImg(
      "private-event-planning",
      "Intimate private dining table in a luxury villa",
    ),
  },
  {
    slug: "retirement-party-planning",
    title: "Retirement party planning",
    description: "Farewell events with dignified staging and catering.",
    image: catalogImg(
      "retirement-party-planning",
      "Dignified retirement banquet with floral stage and formal tables",
    ),
  },
  {
    slug: "school-event",
    title: "School event",
    description: "Annual days, graduations, and institutional hospitality at scale.",
    image: catalogImg(
      "school-event",
      "Institutional auditorium seating and hospitality for a school gathering",
    ),
  },
  {
    slug: "theme-parties",
    title: "Theme parties",
    description: "Concept-driven décor, menus, and entertainment for themed nights.",
    image: catalogImg(
      "theme-parties",
      "Jewel-tone themed party décor with lanterns and floral set",
    ),
  },
  {
    slug: "wedding-and-engagement",
    title: "Wedding and engagement",
    description: "Engagement ceremonies through wedding day coordination.",
    image: catalogImg(
      "wedding-and-engagement",
      "South Indian engagement mandap with jasmine and brass lamps",
    ),
  },
  {
    slug: "weddings",
    title: "Weddings",
    description: "Full wedding planning, catering, and production statewide.",
    image: catalogImg(
      "weddings",
      "Kerala wedding feast table with floral mandap beyond",
    ),
  },
];