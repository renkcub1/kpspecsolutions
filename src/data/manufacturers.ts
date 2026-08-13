import nydreeHero from "../assets/Images/manufacturers/nydree/nydree-hero.webp";

import nydreeLogoWhite from "../assets/manufacturers/nydree_logo_white.png";
import everstepLogoWhiteBackground from "../assets/manufacturers/everstep_logo_white_background.png";
import gmsLogoWhite from "../assets/manufacturers/gms_white_logo.png";
import pssLogo from "../assets/manufacturers/pss_black_logo.png";
import tcgLogo from "../assets/manufacturers/tcg_logo.png";
import buloLogo from "../assets/manufacturers/bulo_logo.png";
import pointLogo from "../assets/manufacturers/point_logo.png";

export interface Manufacturer {
  slug: string;
  name: string;
  title: string;
  description: string;
  website: string;
  heroImage?: string;
  logo?: string;
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
    logo: nydreeLogoWhite,
  },

  {
    slug: "everstep",
    name: "EverStep",
    title: "Luxury Vinyl Tile",
    description:
      "Premium commercial luxury vinyl flooring engineered for durability and performance.",
    website: "https://www.everstepflooring.com/",
    logo: everstepLogoWhiteBackground,
  },

  {
    slug: "giles-miller-studio",
    name: "Giles Miller Studio",
    title: "Architectural Art",
    description:
      "Sculptural architectural surfaces transforming commercial interiors.",
    website: "https://gilesmiller.com/",
    logo: gmsLogoWhite,
  },

  {
    slug: "prime-surface-solutions",
    name: "Prime Surface Solutions",
    title: "Textured Panels",
    description:
      "Innovative decorative wall systems for hospitality and commercial interiors.",
    website: "https://www.primesurfacesolutions.biz/",
    logo: pssLogo,
  },

  {
    slug: "tcg-glass",
    name: "TCG Glass",
    title: "Architectural Glass",
    description:
      "Decorative glass systems for healthcare, workplace and hospitality.",
    website: "https://tcgglass.com/",
    logo: tcgLogo,
  },

  {
    slug: "bulo",
    name: "Bulo",
    title: "Commercial Furniture",
    description:
      "European furniture blending comfort, craftsmanship and timeless design.",
    website: "https://bulo.com/bulo-usa/",
    logo: buloLogo,
  },

  {
    slug: "point",
    name: "POINT",
    title: "Outdoor Living",
    description:
      "Luxury outdoor furnishings for commercial hospitality environments.",
    website: "https://www.point1920.com/",
    logo: pointLogo,
  },
];
