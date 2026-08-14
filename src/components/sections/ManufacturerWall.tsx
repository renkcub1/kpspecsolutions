import { manufacturers } from "../../data/manufacturers";

function LogoGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="manufacturer-marquee-group" aria-hidden={duplicate || undefined}>
      {manufacturers.map((manufacturer) => (
        <a
          key={manufacturer.slug}
          href={`/manufacturers/${manufacturer.slug}`}
          tabIndex={duplicate ? -1 : undefined}
          aria-label={duplicate ? undefined : `View ${manufacturer.name}`}
          className="flex h-20 w-40 shrink-0 items-center justify-center rounded-2xl border border-[#E7E2D8] bg-[#FCFBF8] px-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:-translate-y-1 focus-visible:shadow-lg sm:h-24 sm:w-52 sm:px-7"
        >
          <img
            src={manufacturer.logo}
            alt={duplicate ? "" : manufacturer.name}
            className={`max-h-12 w-auto object-contain sm:max-h-14 ${
              manufacturer.compactLogo ? "max-w-[8.875rem]" : "max-w-[10rem] sm:max-w-[12rem]"
            }`}
          />
        </a>
      ))}
    </div>
  );
}

function ManufacturerWall() {
  return (
    <section
      aria-labelledby="manufacturer-marquee-title"
      className="overflow-hidden border-y border-[#E7E2D8] bg-white py-6 sm:py-8"
    >
      <h2 id="manufacturer-marquee-title" className="sr-only">
        Featured manufacturers
      </h2>
      <div className="manufacturer-marquee">
        <div className="manufacturer-marquee-track">
          <LogoGroup />
          <LogoGroup duplicate />
        </div>
      </div>
    </section>
  );
}

export default ManufacturerWall;
