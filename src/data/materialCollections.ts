import flooringImage from "../assets/Images/collections/flooring/nydree-flooring-01.png";
import artImage from "../assets/Images/collections/art-panels/giles-miller-01.png";
import glassImage from "../assets/Images/collections/glass/tcg-glass-01.png";
import furnitureImage from "../assets/Images/collections/furniture/bulo-furniture-01.png";
import outdoorImage from "../assets/Images/collections/outdoor/point-outdoor-01.png";

// Manufacturer Logos
import nydreeLogo from "../assets/manufacturers/nydree_logo_green.png";
import everstepLogo from "../assets/manufacturers/everstep_logo.png";
import gmsLogo from "../assets/manufacturers/gms_black_logo.png";
import pssLogo from "../assets/manufacturers/pss_black_logo.png";
import tcgLogo from "../assets/manufacturers/tcg_logo.png";
import buloLogo from "../assets/manufacturers/bulo_logo.png";
import pointLogo from "../assets/manufacturers/point_logo.png";

export const materialCollections = [
  {
    id: 1,
    collectionNumber: "Collection 01",
    title: "Wood & Performance Flooring",
    image: flooringImage,
    description:
      "Beautiful commercial flooring solutions combining the warmth of natural wood with the durability today's commercial environments require.",
    manufacturers: [
      {
        name: "Nydree",
        slug: "nydree",
        type: "Premium Hardwood",
        logo: nydreeLogo,
        url: "https://www.nydreeflooring.com/",
      },
      {
        name: "EverStep",
        slug: "everstep",
        type: "Luxury Vinyl Tile",
        logo: everstepLogo,
        url: "https://www.everstepflooring.com/",
      },
    ],
  },

  {
    id: 2,
    collectionNumber: "Collection 02",
    title: "Architectural Art & Textured Panels",
    image: artImage,
    description:
      "Architectural wall systems, sculptural installations, and dimensional surfaces that transform commercial interiors into memorable environments.",
    manufacturers: [
      {
        name: "Giles Miller Studio",
        slug: "giles-miller-studio",
        type: "Architectural Art",
        logo: gmsLogo,
        url: "https://gilesmiller.com/",
      },
      {
        name: "Prime Surface Solutions",
        slug: "prime-surface-solutions",
        type: "Textured Panels",
        logo: pssLogo,
        url: "https://www.primesurfacesolutions.biz/",
      },
    ],
  },

  {
    id: 3,
    collectionNumber: "Collection 03",
    title: "Advanced Architectural Glass",
    image: glassImage,
    description:
      "Decorative architectural glass systems designed for healthcare, hospitality, workplace, and commercial environments.",
    manufacturers: [
      {
        name: "TCG Glass",
        slug: "tcg-glass",
        type: "Architectural Glass",
        logo: tcgLogo,
        url: "https://tcgglass.com/",
      },
    ],
  },

  {
    id: 4,
    collectionNumber: "Collection 04",
    title: "Commercial Furniture",
    image: furnitureImage,
    description:
      "European-inspired commercial furniture blending comfort, craftsmanship, and timeless design.",
    manufacturers: [
      {
        name: "Bulo",
        slug: "bulo",
        type: "Commercial Furniture",
        logo: buloLogo,
        url: "https://bulo.com/bulo-usa/",
      },
    ],
  },

  {
    id: 5,
    collectionNumber: "Collection 05",
    title: "Outdoor Living",
    image: outdoorImage,
    description:
      "Luxury outdoor furnishings designed for hospitality, multifamily, and commercial gathering spaces.",
    manufacturers: [
      {
        name: "POINT",
        slug: "point",
        type: "Outdoor Furniture",
        logo: pointLogo,
        url: "https://www.point1920.com/",
      },
    ],
  },
];
