interface ManufacturerHeroV2Props {
  name: string;
  title: string;
  description: string;
  heroImage?: string;
  logo?: string;
}

export default function ManufacturerHeroV2({
  name,
  title,
  description,
  heroImage,
  logo,
}: ManufacturerHeroV2Props) {
  return (
    <section className="relative h-[760px] overflow-hidden">

      {/* Background Image */}
      {heroImage && (
        <>
          <img
            src={heroImage}
            alt={name}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />
        </>
      )}

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1550px] items-start px-10 pt-[240px]">

        <div className="max-w-[640px]">

          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#C8D3BE]">
            Materials That Matter
          </p>

          {logo ? (
            <img
              src={logo}
              alt={name}
              className="mt-4 w-[300px] max-w-full object-contain"
            />
          ) : (
            <h1 className="mt-8 font-serif text-8xl text-white">
              {name}
            </h1>
          )}

          <div className="mt-8 h-[3px] w-14 rounded-full bg-[#8A9A7B]" />

          <h2 className="mt-8 text-[36px] font-light text-white">
            {title}
          </h2>

          <p className="mt-8 max-w-[430px] text-[22px] leading-10 text-white/90">
            {description}
          </p>

        </div>

      </div>

    </section>
  );
}