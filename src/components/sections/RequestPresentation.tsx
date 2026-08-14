function RequestPresentation() {
  return (
    <section
      id="presentation"
      className="bg-[#2F2F2F] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">

        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#A4B494] sm:text-sm sm:tracking-[0.45em]">
          Let's Connect
        </p>

        <h2 className="font-serif text-4xl leading-[1] text-white sm:text-5xl lg:text-[64px]">
          Request a Product
          <br />
          Presentation
        </h2>

        <div className="mx-auto mt-10 h-[3px] w-28 rounded-full bg-[#8A9A7B]" />

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/80 sm:mt-10 sm:text-xl sm:leading-9 lg:text-[22px] lg:leading-10">
          We'd welcome the opportunity to introduce you to our curated
          portfolio of architectural materials and discuss your next project.
        </p>

        <div className="mt-14">
          <a href="/contact?request=presentation" className="btn-primary">
            Schedule a Presentation
          </a>
        </div>

      </div>
    </section>
  );
}

export default RequestPresentation;
