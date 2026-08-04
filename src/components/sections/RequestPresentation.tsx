function RequestPresentation() {
  return (
    <section
      id="presentation"
      className="bg-[#2F2F2F] py-32"
    >
      <div className="mx-auto max-w-5xl px-8 text-center">

        <p className="mb-5 uppercase tracking-[0.45em] text-sm font-semibold text-[#A4B494]">
          Let's Connect
        </p>

        <h2 className="font-serif text-[64px] leading-[0.95] text-white">
          Request a Product
          <br />
          Presentation
        </h2>

        <div className="mx-auto mt-10 h-[3px] w-28 rounded-full bg-[#8A9A7B]" />

        <p className="mx-auto mt-10 max-w-3xl text-[22px] leading-10 text-white/80">
          We'd welcome the opportunity to introduce you to our curated
          portfolio of architectural materials and discuss your next project.
        </p>

        <div className="mt-14">
          <a href="#contact" className="btn-primary">
            Schedule a Presentation
          </a>
        </div>

      </div>
    </section>
  );
}

export default RequestPresentation;