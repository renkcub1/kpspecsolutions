import nydreeHero from "../assets/Images/manufacturers/nydree/nydree-hero.webp";
import everstepHero from "../assets/Images/manufacturers/everstep/everstep-hero.webp";
import everstepHeroDesktop from "../assets/Images/manufacturers/everstep/everstep-hero-desktop.webp";
import gilesMillerHeroPoster from "../assets/Images/manufacturers/giles-miller/giles-miller-hero-poster.webp";
import pssHero from "../assets/Images/manufacturers/prime-surface-solutions/pss-hero.webp";
import gilesMillerHeroVideo from "../assets/manufacturers/giles-miller-hero-web.mp4";

import nydreeLogoGreen from "../assets/manufacturers/nydree_logo_green.png";
import everstepLogoWhiteBackground from "../assets/manufacturers/everstep_logo_white_background.png";
import gmsLogoBlack from "../assets/manufacturers/gms_black_logo.png";
import pssLogoBlack from "../assets/manufacturers/pss_black_logo.png";
import tcgLogo from "../assets/manufacturers/tcg_logo.png";
import buloHeroLogo from "../assets/manufacturers/bulo_logo_hero.png";
import pointLogo from "../assets/manufacturers/point_logo.png";

export interface Manufacturer {
  slug: string;
  name: string;
  title: string;
  description: string;
  website: string;
  heroImage?: string;
  heroImageDesktop?: string;
  heroVideo?: string;
  logo?: string;
  logoOnLight?: boolean;
  compactLogo?: boolean;
  heroFocus?: "floor" | "hospitality" | "panels";
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
    heroFocus: "floor",
    logo: nydreeLogoGreen,
    logoOnLight: true,
  },

  {
    slug: "everstep",
    name: "EverStep",
    title: "Luxury Vinyl Tile",
    description:
      "Premium commercial luxury vinyl flooring engineered for durability and performance.",
    website: "https://www.everstepflooring.com/",
    heroImage: everstepHero,
    heroImageDesktop: everstepHeroDesktop,
    heroFocus: "hospitality",
    logo: everstepLogoWhiteBackground,
    logoOnLight: true,
  },

  {
    slug: "giles-miller-studio",
    name: "Giles Miller Studio",
    title: "Architectural Art",
    description:
      "Sculptural architectural surfaces transforming commercial interiors.",
    website: "https://gilesmiller.com/",
    heroImage: gilesMillerHeroPoster,
    heroVideo: gilesMillerHeroVideo,
    logo: gmsLogoBlack,
    logoOnLight: true,
  },

  {
    slug: "prime-surface-solutions",
    name: "Prime Surface Solutions",
    title: "Textured Panels",
    description:
      "Innovative decorative wall systems for hospitality and commercial interiors.",
    website: "https://www.primesurfacesolutions.biz/",
    heroImage: pssHero,
    heroFocus: "panels",
    logo: pssLogoBlack,
    logoOnLight: true,
    compactLogo: true,
  },

  {
    slug: "tcg-glass",
    name: "TCG Glass",
    title: "Architectural Glass",
    description:
      "Decorative glass systems for healthcare, workplace and hospitality.",
    website: "https://tcgglass.com/",
    logo: tcgLogo,
    logoOnLight: true,
  },

  {
    slug: "bulo",
    name: "Bulo",
    title: "Commercial Furniture",
    description:
      "European furniture blending comfort, craftsmanship and timeless design.",
    website: "https://bulo.com/bulo-usa/",
    logo: buloHeroLogo,
    logoOnLight: true,
  },

  {
    slug: "point",
    name: "POINT",
    title: "Outdoor Living",
    description:
      "Luxury outdoor furnishings for commercial hospitality environments.",
    website: "https://www.point1920.com/",
    logo: pointLogo,
    logoOnLight: true,
  },
];
