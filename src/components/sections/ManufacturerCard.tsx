import { Link } from "react-router-dom";

interface Manufacturer {
  name: string;
  type: string;
  logo: string;
  url: string;
  slug?: string;
}

interface ManufacturerCardProps {
  manufacturer: Manufacturer;
}

export default function ManufacturerCard({
  manufacturer,
}: ManufacturerCardProps) {
  return (
    <Link
      to={`/manufacturers/${manufacturer.slug}`}
      className="group block"
    >
      <div
        className="
          h-full
          rounded-[28px]
          border
          border-[#E6E1D8]
          bg-[#FCFBF8]
          p-8
          shadow-[0_12px_30px_rgba(0,0,0,.04)]
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-[#8A9A7B]
          hover:shadow-[0_28px_60px_rgba(0,0,0,.10)]
        "
      >
        {/* Logo */}
        <div className="flex h-32 items-center justify-center">
          <img
            src={manufacturer.logo}
            alt={manufacturer.name}
            className="
              max-h-16
              max-w-[220px]
              object-contain
              transition-all
              duration-500
              group-hover:scale-105
            "
          />
        </div>

        {/* Divider */}
        <div className="my-7 h-px bg-[#ECE7DE]" />

        {/* Type */}
        <p className="text-center text-[15px] font-medium leading-6 text-[#444A4A]">
          {manufacturer.type}
        </p>

        {/* Footer */}
        <div className="mt-7 flex items-center justify-between">
          <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#8A9A7B]">
            View Manufacturer
          </span>

          <span className="text-lg text-[#8A9A7B] transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}