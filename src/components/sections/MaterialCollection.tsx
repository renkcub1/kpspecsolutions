interface Manufacturer {
  name: string;
  type: string;
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
    <section className="mx-auto max-w-7xl px-8 py-32">

      <div
        className={`grid items-center gap-24 lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >

        {/* IMAGE */}

        <div className="group overflow-hidden rounded-[34px] shadow-[0_30px_80px_rgba(0,0,0,.12)]">

          <img
            src={image}
            alt={title}
            className="h-[700px] w-full object-cover transition duration-700 group-hover:scale-105"
          />

        </div>

        {/* CONTENT */}

        <div>

          <p className="uppercase tracking-[0.45em] text-sm font-semibold text-[#8A9A7B]">
            {collectionNumber}
          </p>

          <h3 className="mt-6 font-serif text-[64px] leading-[1] text-[#2B2B2B]">
            {title}
          </h3>

          <div className="mt-8 h-[3px] w-24 rounded-full bg-[#8A9A7B]" />

          <p className="mt-10 text-[22px] leading-10 text-[#666666]">
            {description}
          </p>

          <div className="mt-14 space-y-5">

            {manufacturers.map((manufacturer) => (

              <div
                key={manufacturer.name}
                className="flex items-center justify-between border-b border-[#DDD8CF] pb-5"
              >

                <span className="font-serif text-[28px] text-[#2B2B2B]">
                  {manufacturer.name}
                </span>

                <span className="uppercase tracking-[0.18em] text-sm text-[#8A9A7B]">
                  {manufacturer.type}
                </span>

              </div>

            ))}

          </div>

          <button
            className="
              group
              mt-14
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#8F9F7A]
              px-9
              py-4
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-white
              transition-all
              duration-300
              hover:bg-[#798868]
            "
          >

            {buttonText}

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>

          </button>

        </div>

      </div>

    </section>
  );
}

export default MaterialCollection;