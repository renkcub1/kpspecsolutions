import heroImage from "../../assets/Images/hero/hero-commercial-v2.webp";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[680px] overflow-hidden sm:min-h-[720px] lg:h-[92vh] lg:min-h-[780px]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-5 pt-20 sm:min-h-[720px] sm:px-8 lg:h-full lg:min-h-0 lg:px-16 lg:pt-0">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#B7C6A4] sm:text-sm sm:tracking-[0.45em]">
            KP SPEC SOLUTIONS
          </p>

          <h1 className="font-serif text-5xl leading-[0.92] text-white min-[380px]:text-6xl sm:text-7xl lg:text-[96px]">
            Materials
            <br />
            That Matter
          </h1>

          <div className="mt-8 h-[3px] w-28 rounded-full bg-[#8A9A7B]" />

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8 lg:text-[21px] lg:leading-9">
            Representing thoughtfully curated architectural materials for
            commercial interiors through timeless design, craftsmanship,
            innovation, and trusted manufacturer partnerships.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-5">
            <a
              href="#collections"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#8F9F7A] px-6 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#798868] sm:px-9 sm:text-sm sm:tracking-[0.20em]"
            >
              Explore Collections
            </a>

            <a
              href="/contact?request=presentation"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 sm:px-9 sm:text-sm sm:tracking-[0.20em]"
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
