import ManufacturerCard from "./ManufacturerCard";

interface Manufacturer {
  name: string;
  type: string;
  logo: string;
  url: string;
}

interface MaterialCollectionProps {
  image: string;
  collectionNumber: string;
  title: string;
  description: string;
  manufacturers: Manufacturer[];
  buttonText: string;
  reverse?: boolean;
}

function MaterialCollection({
  image,
  collectionNumber,
  title,
  description,
  manufacturers,
  buttonText,
  reverse = false,
}: MaterialCollectionProps) {
  return (
    <section className={`py-36 ${reverse ? "bg-white" : "bg-[#F8F7F3]"}`}>
      <div className="mx-auto max-w-[1550px] px-10 lg:px-20">
        <div
          className={`grid items-center gap-20 lg:grid-cols-[1fr_1fr] ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Image */}

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[34px]
              shadow-[0_30px_80px_rgba(0,0,0,.12)]
            "
          >
            <img
              src={image}
              alt={title}
              className="
                h-[600px]
                w-full
                object-cover
                transition-all
                duration-[2500ms]
                ease-out
                group-hover:scale-110
                group-hover:brightness-105
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/10
                via-transparent
                to-transparent
                opacity-60
                transition-opacity
                duration-700
                group-hover:opacity-30
              "
            />
          </div>

          {/* Content */}

          <div className="max-w-[560px]">
            <p className="uppercase tracking-[0.42em] text-sm font-semibold text-[#8A9A7B]">
              {collectionNumber}
            </p>

            <h3 className="mt-5 font-serif text-[60px] leading-[0.94] text-[#2B2B2B]">
              {title}
            </h3>

            <div className="mt-8 h-[3px] w-28 rounded-full bg-[#8A9A7B]" />

            <p className="mt-10 text-[21px] leading-9 text-[#4A4A4A]">
              {description}
            </p>

            <h4 className="mt-16 mb-6 uppercase tracking-[0.35em] text-xs font-semibold text-[#8A9A7B]">
              Featured Manufacturers
            </h4>

            <div className="grid gap-6">
              {manufacturers.map((manufacturer) => (
                <ManufacturerCard
                  key={manufacturer.name}
                  manufacturer={manufacturer}
                />
              ))}
            </div>

            <div className="mt-14">
              <button
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#8A9A7B]
                  px-9
                  py-4
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.20em]
                  text-[#2B2B2B]
                  transition-all
                  duration-300
                  hover:bg-[#8A9A7B]
                  hover:text-white
                "
              >
                {buttonText}

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MaterialCollection;