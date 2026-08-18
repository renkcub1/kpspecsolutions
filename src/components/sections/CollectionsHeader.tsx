function CollectionsHeader() {
  return (
    <section
      className="bg-[#F8F7F3] pt-36 pb-24 overflow-hidden"
    >
      <div className="mx-auto max-w-[1550px] px-5 sm:px-8 lg:px-20">

        <div id="collections" className="max-w-5xl scroll-mt-28 fade-up">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8A9A7B] sm:text-sm sm:tracking-[0.45em]">
            Material Collections
          </p>

          <h2 className="mt-6 font-serif text-5xl leading-[0.95] text-[#2B2B2B] sm:text-7xl lg:text-[92px]">
            Curated Materials.
            <br />
            Exceptional Manufacturers.
          </h2>

          <div className="mt-10 h-[3px] w-32 rounded-full bg-[#8A9A7B]" />

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#555555] sm:text-xl sm:leading-9 lg:mt-12 lg:text-[24px] lg:leading-10">
            Every manufacturer we represent has been carefully selected for
            exceptional design, proven performance, and long-term reliability.
            Explore our curated collections to discover architectural materials
            that elevate commercial environments.
          </p>

        </div>

      </div>
    </section>
  );
}

export default CollectionsHeader;
