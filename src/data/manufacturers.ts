import nydreeHero from "../assets/Images/manufacturers/nydree/nydree-hero.webp";

export interface Manufacturer {
  slug: string;
  name: string;
  title: string;
  description: string;
  website: string;
  heroImage?: string;
}

export const manufacturers: Manufacturer[] = [
  {
    slug: "nydree",
    name: "Nydree",
    title: "Wood & Performance Flooring",
    description:
      "Beautiful commercial flooring solutions combining the warmth of natural wood with the durability today's commercial environments require.",
    website: "https://www.nydreeflooring.com/",
    heroImage: nydreeHero,
  },
  {
    slug: "everstep",
    name: "EverStep",
    title: "Luxury Vinyl Tile",
    description:
      "Premium commercial luxury vinyl flooring engineered for durability and performance.",
    website: "https://www.everstepflooring.com/",
  },
  {
    slug: "giles-miller-studio",
    name: "Giles Miller Studio",
    title: "Architectural Art",
    description:
      "Sculptural architectural surfaces transforming commercial interiors.",
    website: "https://gilesmiller.com/",
  },
  {
    slug: "prime-surface-solutions",
    name: "Prime Surface Solutions",
    title: "Textured Panels",
    description:
      "Innovative decorative wall systems for hospitality and commercial interiors.",
    website: "https://www.primesurfacesolutions.biz/",
  },
  {
    slug: "tcg-glass",
    name: "TCG Glass",
    title: "Architectural Glass",
    description:
      "Decorative glass systems for healthcare, workplace and hospitality.",
    website: "https://tcgglass.com/",
  },
  {
    slug: "bulo",
    name: "Bulo",
    title: "Commercial Furniture",
    description:
      "European furniture blending comfort, craftsmanship and timeless design.",
    website: "https://bulo.com/bulo-usa/",
  },
  {
    slug: "point",
    name: "POINT",
    title: "Outdoor Living",
    description:
      "Luxury outdoor furnishings for commercial hospitality environments.",
    website: "https://www.point1920.com/",
  },
];