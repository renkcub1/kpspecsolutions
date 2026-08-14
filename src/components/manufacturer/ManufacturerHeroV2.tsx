interface ManufacturerHeroV2Props {
  name: string;
  title: string;
  description: string;
  heroImage?: string;
  logo?: string;
  logoOnLight?: boolean;
  compactLogo?: boolean;
}

export default function ManufacturerHeroV2({
  name,
  title,
  description,
  heroImage,
  logo,
  logoOnLight = false,
  compactLogo = false,
}: ManufacturerHeroV2Props) {
  return (
    <section className={`relative min-h-[620px] overflow-hidden sm:min-h-[680px] lg:h-[760px] ${heroImage ? "bg-[#2F3533]" : "bg-gradient-to-br from-[#27302d] via-[#3f4a44] to-[#8A9A7B]"}`}>

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
      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1550px] items-center px-5 pb-20 pt-32 sm:min-h-[680px] sm:px-8 lg:h-full lg:min-h-0 lg:items-start lg:px-10 lg:pb-0 lg:pt-[240px]">

        <div className="max-w-[640px]">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C8D3BE] sm:text-sm sm:tracking-[0.45em]">
            Materials That Matter
          </p>

          {logo ? (
            <div className={logoOnLight ? "mt-5 inline-flex max-w-full rounded-2xl bg-white px-5 py-3 shadow-sm" : "mt-5"}>
              <img
                src={logo}
                alt={name}
                className={`max-h-24 max-w-full object-contain object-center ${compactLogo ? "w-[142px]" : "w-[220px] sm:w-[260px] lg:w-[300px]"}`}
              />
            </div>
          ) : (
            <h1 className="mt-8 font-serif text-5xl text-white sm:text-7xl lg:text-8xl">
              {name}
            </h1>
          )}

          <div className="mt-8 h-[3px] w-14 rounded-full bg-[#8A9A7B]" />

          <h2 className="mt-7 text-2xl font-light text-white sm:text-3xl lg:text-[36px]">
            {title}
          </h2>

          <p className="mt-6 max-w-[430px] text-lg leading-8 text-white/90 sm:text-xl sm:leading-9 lg:mt-8 lg:text-[22px] lg:leading-10">
            {description}
          </p>

        </div>

      </div>

    </section>
  );
}
