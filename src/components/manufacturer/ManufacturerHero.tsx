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
    <section className="relative h-[100vh] min-h-[900px] overflow-hidden">

      {/* Hero Image */}

      {heroImage && (
        <>
          <img
            src={heroImage}
            alt={name}
           className="absolute inset-0 h-full w-full object-cover object-[center_75%]"
          />

          {/* Gradient Overlay */}

         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/15" />
        </>
      )}

      {/* Content */}

      <div className="relative z-10 mx-auto flex h-full max-w-[1550px] items-center px-12">

        <div className="max-w-3xl">

          <p className="uppercase tracking-[0.45em] text-sm font-semibold text-[#C8D3BE]">
            Materials That Matter
          </p>

          <h1 className="mt-6 font-serif text-[128px] leading-[0.88] text-white">
            {name}
          </h1>

          <div className="mt-8 h-[3px] w-28 rounded-full bg-[#8A9A7B]" />

          <h2 className="mt-8 text-[36px] font-light text-white">
            {title}
          </h2>

          <p className="mt-8 max-w-xl text-[24px] leading-10 text-white/90">
            {description}
          </p>

        </div>

      </div>

    </section>
  );
}