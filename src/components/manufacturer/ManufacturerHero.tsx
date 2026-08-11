interface ManufacturerHeroProps {
  name: string;
  title: string;
  description: string;
  heroImage?: string;
}

export default function ManufacturerHero({
  name,
  title,
  description,
  heroImage,
}: ManufacturerHeroProps) {
  return (
    <section className="relative h-[1000px] overflow-hidden">

      {/* Background Image */}
      {heroImage && (
        <>
          <img
            src={heroImage}
            alt={name}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto h-full max-w-[1550px] px-12">

        <div className="w-[720px] pt-[230px]">

          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#C8D3BE]">
            Materials That Matter
          </p>

          <h1 className="mt-5 font-serif text-[120px] leading-[0.88] text-white">
            {name}
          </h1>

          <div className="mt-8 h-[3px] w-28 rounded-full bg-[#8A9A7B]" />

          <h2 className="mt-8 text-[34px] font-light text-white">
            {title}
          </h2>

          <p className="mt-8 max-w-[640px] text-[22px] leading-10 text-white/90">
            {description}
          </p>

        </div>

      </div>

    </section>
  );
}