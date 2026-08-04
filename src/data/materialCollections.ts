import flooringImage from "../assets/Images/collections/flooring/nydree-flooring-01.webp";
import artImage from "../assets/Images/collections/art-panels/giles-miller-01.webp";
import glassImage from "../assets/Images/collections/glass/tcg-glass-01.webp";
import furnitureImage from "../assets/Images/collections/furniture/bulo-furniture-01.webp";
import outdoorImage from "../assets/Images/collections/outdoor/point-outdoor-01.webp";

export const materialCollections = [
  {
    id: 1,
    collectionNumber: "Collection 01",
    title: "Wood & Performance Flooring",
    image: flooringImage,
    description:
      "Beautiful commercial flooring solutions combining the warmth of natural wood with the durability today's commercial environments require.",
    buttonText: "Explore Flooring",
    manufacturers: [
      {
        name: "Nydree Flooring",
        type: "Premium Hardwood",
      },
      {
        name: "EverStep",
        type: "Luxury Vinyl Tile",
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
    buttonText: "Explore Architectural Art",
    manufacturers: [
      {
        name: "Giles Miller Studio",
        type: "Architectural Art",
      },
      {
        name: "Prime Surface Solutions",
        type: "Textured Panels",
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
    buttonText: "Explore Glass",
    manufacturers: [
      {
        name: "TCG",
        type: "Architectural Glass",
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
    buttonText: "Explore Furniture",
    manufacturers: [
      {
        name: "BULO",
        type: "Commercial Furniture",
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
    buttonText: "Explore Outdoor",
    manufacturers: [
      {
        name: "POINT",
        type: "Outdoor Furniture",
      },
    ],
  },
];