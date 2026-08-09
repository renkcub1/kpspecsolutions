import heroImage from "../../assets/Images/hero/hero-commercial.webp";

function Hero() {
  return (
    <section
      id="home"
      className="relative h-[92vh] min-h-[780px] overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-10 lg:px-16">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.45em] text-[#B7C6A4]">
            KP SPEC SOLUTIONS
          </p>

          <h1 className="font-serif text-[72px] leading-[0.90] text-white lg:text-[96px]">
            Materials
            <br />
            That Matter
          </h1>

          <div className="mt-8 h-[3px] w-28 rounded-full bg-[#8A9A7B]" />

          <p className="mt-8 max-w-2xl text-[21px] leading-9 text-white/90">
            Representing thoughtfully curated architectural materials for
            commercial interiors through timeless design, craftsmanship,
            innovation, and trusted manufacturer partnerships.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="#collections"
              className="rounded-full bg-[#8F9F7A] px-9 py-4 text-sm font-semibold uppercase tracking-[0.20em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#798868]"
            >
              Explore Collections
            </a>

            <a
              href="#presentation"
              className="rounded-full border border-white/40 bg-white/10 px-9 py-4 text-sm font-semibold uppercase tracking-[0.20em] text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
            >
              Request Presentation
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white">
        <svg
          width="28"
          height="28"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-bounce"
        >
          <path d="M14 6v16" />
          <path d="M7 15l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;