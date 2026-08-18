import nydreeLogo from "../../assets/manufacturers/nydree_logo_green.png";
import everstepLogo from "../../assets/manufacturers/everstep_logo_white_background.png";
import gilesMillerLogo from "../../assets/manufacturers/gms_black_logo.png";
import primeSurfaceLogo from "../../assets/manufacturers/pss_black_logo.png";
import tcgLogo from "../../assets/manufacturers/tcg_logo.png";
import buloLogo from "../../assets/manufacturers/bulo_logo_hero.png";
import pointLogo from "../../assets/manufacturers/point_logo.png";
import pssCatalog from "../../assets/resources/pss-catalog-2026.pdf";

const resourceCards = [
  {
    slug: "nydree",
    name: "Nydree",
    category: "Wood & Performance Flooring",
    description:
      "Find technical specifications and supporting documentation for Nydree's acrylic-infused hardwood flooring systems.",
    logo: nydreeLogo,
    logoAlt: "Nydree Wood Flooring",
    logoClassName: "max-w-[15rem] sm:max-w-[18rem]",
    primaryLabel: "Technical Specifications",
    primaryHref: "https://nydreeflooring.com/pages/resources",
    links: [
      {
        label: "Certifications",
        href: "https://nydreeflooring.com/pages/industry-affiliations-and-certifications",
      },
      {
        label: "Sustainability",
        href: "https://nydreeflooring.com/pages/sustainability",
      },
      {
        label: "CEU Courses",
        href: "https://nydreeflooring.com/pages/ceu-presentation-request",
      },
    ],
  },
  {
    slug: "everstep",
    name: "Everstep",
    category: "Luxury Vinyl Tile",
    description:
      "Access specifications, installation instructions, maintenance guidance, warranties, adhesives, and product literature for EverStep flooring.",
    logo: everstepLogo,
    logoAlt: "EverStep Flooring",
    logoClassName: "max-w-[17rem] sm:max-w-[21rem]",
    primaryLabel: "Technical Library",
    primaryHref: "https://www.everstepflooring.com/technical/",
    links: [
      {
        label: "Warranty",
        href: "https://www.everstepflooring.com/wp-content/uploads/2024/08/8-9-24-EVERSTEP-LIMITED-COMMERCIAL-WARRANTIES-1.pdf",
      },
      {
        label: "Care & Maintenance",
        href: "https://www.everstepflooring.com/technical/lvp-care-and-maintenance/",
      },
      {
        label: "Installation",
        href: "https://www.everstepflooring.com/wp-content/uploads/2022/10/vinylplk_instructions_residential.pdf",
      },
    ],
  },
  {
    slug: "giles-miller-studio",
    name: "Giles Miller Studio",
    category: "Architectural Art",
    description:
      "Explore studio brochures, surface portfolios, material inspiration, and guidance for cleaning, maintenance, recycling, and reclamation.",
    logo: gilesMillerLogo,
    logoAlt: "Giles Miller Studio",
    logoClassName: "max-w-[14rem] sm:max-w-[17rem]",
    primaryLabel: "Download Brochure",
    primaryHref:
      "https://gilesmiller.com/app/uploads/2026/05/GMS_Brochure.pdf",
    links: [
      {
        label: "Surface Portfolio",
        href: "https://gilesmiller.com/app/uploads/2026/05/GMS_Surface_Portfolio.pdf",
      },
      {
        label: "Sculpture Portfolio",
        href: "https://gilesmiller.com/app/uploads/2026/05/GMS_Sculpture_Portfolio.pdf",
      },
      {
        label: "Care & Maintenance",
        href: "https://gilesmiller.com/app/uploads/2026/05/GMS_Cleaning_Maintenance_Recycling_Reclamation.pdf",
      },
    ],
  },
  {
    slug: "prime-surface-solutions",
    name: "Prime Surface Solutions",
    category: "Textured Panels",
    description:
      "Review the 2026 TakTart collection, including performance features, pattern and color options, project applications, and panel dimensions.",
    logo: primeSurfaceLogo,
    logoAlt: "Prime Surface Solutions",
    logoClassName: "max-w-[8.875rem]",
    primaryLabel: "Download 2026 Catalog",
    primaryHref: pssCatalog,
    links: [],
  },
  {
    slug: "tcg-glass",
    name: "TCG Glass",
    category: "Architectural Glass",
    description:
      "Access cast glass product literature, specification guidance, cleaning and maintenance instructions, and warranty information.",
    logo: tcgLogo,
    logoAlt: "TCG Glass",
    logoClassName: "max-w-[16rem] sm:max-w-[20rem]",
    primaryLabel: "Cast Glass Brochure",
    primaryHref:
      "https://irp.cdn-website.com/4217fa8e/files/uploaded/TCG_product_CastGlass_02-1.pdf",
    links: [
      {
        label: "Specification Guide",
        href: "https://irp.cdn-website.com/4217fa8e/files/uploaded/TCG_Cast_Glass_Specification_Guide.docx",
      },
      {
        label: "Care & Maintenance",
        href: "https://irp.cdn-website.com/4217fa8e/files/uploaded/TCG_-_Glass_Cleaning_and_Maintenance-8f3f3847.pdf",
      },
      {
        label: "Warranty",
        href: "https://irp.cdn-website.com/4217fa8e/files/uploaded/TCG_LIMITED_Glass_Warranty-97ff1c2d.pdf",
      },
    ],
  },
  {
    slug: "bulo",
    name: "BULO",
    category: "Commercial Furniture",
    description:
      "Browse Bulo's commercial furniture portfolio and access product sheets, 3D files, Revit files, configurators, and manuals by product.",
    logo: buloLogo,
    logoAlt: "Bulo",
    logoClassName: "max-w-[13rem] sm:max-w-[16rem]",
    primaryLabel: "Browse Product Resources",
    primaryHref: "https://bulo.com/catalog/",
    links: [
      {
        label: "Seating",
        href: "https://bulo.com/catalog/?cat=4",
      },
      {
        label: "Tables",
        href: "https://bulo.com/catalog/?cat=73",
      },
      {
        label: "Storage",
        href: "https://bulo.com/catalog/?cat=7",
      },
    ],
  },
  {
    slug: "point",
    name: "POINT",
    category: "Outdoor Living",
    description:
      "Access technical data, design files, material and finish references, and maintenance guidance for POINT's outdoor furniture collections.",
    logo: pointLogo,
    logoAlt: "POINT",
    logoClassName: "max-w-[14rem] sm:max-w-[17rem]",
    primaryLabel: "Product Data Sheets",
    primaryHref:
      "https://pointsl.box.com/s/fsphj3qi6jth1pa6gh42h3h2c85n9ch7",
    links: [
      {
        label: "2D / 3D Files",
        href: "https://pointsl.box.com/s/c3vmhw1r596te3rxkko4md2t1rfbmxit",
      },
      {
        label: "Maintenance",
        href: "https://pointsl.box.com/s/j368sqo7pstf9g3cida6cubctt19xma8",
      },
      {
        label: "Textures Catalogue",
        href: "https://pointsl.box.com/s/v3jkrs3f3jt1vgvmzmb2e8bobmku95xz",
      },
    ],
  },
];

function ExternalArrow() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 17 17 7M8 7h9v9"
      />
    </svg>
  );
}

function DownloadArrow() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
      />
    </svg>
  );
}

type ResourceCardProps = (typeof resourceCards)[number];

function ResourceCard({
  slug,
  name,
  category,
  description,
  logo,
  logoAlt,
  logoClassName,
  primaryLabel,
  primaryHref,
  links,
}: ResourceCardProps) {
  const isPssCatalog = slug === "prime-surface-solutions";

  return (
    <article
      id={`resource-${slug}`}
      className="scroll-mt-32 overflow-hidden rounded-[2rem] border border-[#DED9CF] bg-white shadow-[0_24px_60px_rgba(43,43,43,0.08)]"
    >
      <div className="p-7 sm:p-10">
        <div className="flex min-h-28 items-center justify-center rounded-2xl bg-[#F7F6F2] px-8 py-7 sm:min-h-36">
          <img
            src={logo}
            alt={logoAlt}
            className={`h-auto w-full object-contain ${logoClassName}`}
          />
        </div>

        <div className="mt-7">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#91A27F]">
            {category}
          </p>

          <h3 className="mt-3 font-serif text-3xl text-[#2B2B2B] sm:text-4xl">
            {name}
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#666] sm:text-base sm:leading-7">
            {description}
          </p>
        </div>

        <a
          href={primaryHref}
          target={isPssCatalog ? undefined : "_blank"}
          rel={isPssCatalog ? undefined : "noopener noreferrer"}
          download={
            isPssCatalog
              ? "Prime-Surface-Solutions-2026-Catalog.pdf"
              : undefined
          }
          style={{ color: "#FFFFFF" }}
          className="mt-7 flex min-h-14 w-full items-center justify-between rounded-full bg-[#2F3834] px-6 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#222A27] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F3834] sm:w-auto sm:min-w-80"
        >
          {primaryLabel}
          {isPssCatalog ? <DownloadArrow /> : <ExternalArrow />}
        </a>
      </div>

      {links.length > 0 && (
        <div className="border-t border-[#DED9CF] bg-[#FBFAF7] px-7 py-5 sm:px-10">
          <p className="mb-3 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-[#777]">
            More from {name}
          </p>

          <div className="grid sm:grid-cols-3">
            {links.map((resource) => (
              <a
                key={resource.label}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center justify-between border-t border-[#E5E1D8] py-3 text-sm font-medium text-[#2B2B2B] transition hover:text-[#718060] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#91A27F] sm:border-l sm:border-t-0 sm:px-5 sm:first:border-l-0 sm:first:pl-0 sm:last:pr-0"
              >
                {resource.label}
                <ExternalArrow />
              </a>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

function Resources() {
  return (
    <section className="bg-[#F7F6F2] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div id="resources" className="scroll-mt-28 lg:pt-4">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#91A27F]">
              Specification Support
            </p>

            <h2 className="mt-4 font-serif text-5xl leading-none text-[#2B2B2B] sm:text-6xl">
              Technical Resources
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#666] sm:text-lg sm:leading-8">
              Access current product literature, technical specifications,
              certifications, and continuing education directly from our
              represented manufacturers.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-6 text-[#777]">
              Need help finding the right document or reviewing a specification?
              We are here to support your project.
            </p>

            <a
              href="/contact"
              style={{ color: "#FFFFFF" }}
              className="mt-7 inline-flex min-h-12 items-center rounded-full bg-[#91A27F] px-7 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#7E906E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91A27F]"
            >
              Request Assistance
            </a>
          </div>

          <div className="space-y-8">
            {resourceCards.map((card) => (
              <ResourceCard key={card.name} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resources;