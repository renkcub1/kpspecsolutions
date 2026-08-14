import { manufacturers } from "../../data/manufacturers";

function LogoGroup() {
  return (
    <div className="manufacturer-marquee-group">
      {manufacturers.map((manufacturer) => (
        <div
          key={manufacturer.slug}
          className="flex h-24 w-52 shrink-0 items-center justify-center rounded-2xl border border-[#E7E2D8] bg-[#FCFBF8] px-7 sm:h-28 sm:w-72 sm:px-10"
        >
          <img
            src={manufacturer.logo}
            alt={manufacturer.name}
            className={`max-h-14 w-auto object-contain sm:max-h-16 ${
              manufacturer.compactLogo ? "max-w-[8.875rem]" : "max-w-[11rem] sm:max-w-[14rem]"
            }`}
          />
        </div>
      ))}
    </div>
  );
}

function ManufacturerWall() {
  return (
    <section
      aria-labelledby="manufacturer-marquee-title"
      className="overflow-hidden border-y border-[#E7E2D8] bg-white py-10 sm:py-12"
    >
      <h2
        id="manufacturer-marquee-title"
        className="mb-7 text-center text-xs font-medium uppercase tracking-[0.32em] text-[#8A9A7B]"
      >
        Represented Manufacturers
      </h2>
      <div className="manufacturer-marquee">
        <div className="manufacturer-marquee-track">
          <LogoGroup />
        </div>
      </div>
    </section>
  );
}

export default ManufacturerWall;
