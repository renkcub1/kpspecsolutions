import nydreeLogo from "../../assets/manufacturers/nydree_logo_green.png";

const nydreeResources = [
  {
    label: "Certifications",
    href: "https://nydreeflooring.com/pages/industry-affiliations-and-certifications",
  },
  {
    label: "Sustainability",
    href: "https://nydreeflooring.com/pages/sustainability",
  },
  {
    label: "CEU Courses",
    href: "https://nydreeflooring.com/pages/ceu-presentation-request",
  },
];

function ExternalArrow() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function Resources() {
  return (
    <section id="resources" className="scroll-mt-28 bg-[#F7F6F2] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:pt-4">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#91A27F]">
              Specification Support
            </p>
            <h2 className="mt-4 font-serif text-5xl leading-none text-[#2B2B2B] sm:text-6xl">
              Technical Resources
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#666] sm:text-lg sm:leading-8">
              Access current product literature, technical specifications, certifications,
              and continuing education directly from our represented manufacturers.
            </p>
            <p className="mt-5 max-w-xl text-sm leading-6 text-[#777]">
              Need help finding the right document or reviewing a specification? We are
              here to support your project.
            </p>
            <a
              href="#presentation"
              className="mt-7 inline-flex min-h-12 items-center rounded-full bg-[#91A27F] px-7 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#7E906E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91A27F]"
            >
              Request Assistance
            </a>
          </div>

          <article className="overflow-hidden rounded-[2rem] border border-[#DED9CF] bg-white shadow-[0_24px_60px_rgba(43,43,43,0.08)]">
            <div className="p-7 sm:p-10">
              <div className="flex min-h-28 items-center justify-center rounded-2xl bg-[#F7F6F2] px-8 py-7 sm:min-h-36">
                <img
                  src={nydreeLogo}
                  alt="Nydree Flooring"
                  className="h-auto w-full max-w-[15rem] object-contain sm:max-w-[18rem]"
                />
              </div>

              <div className="mt-7">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#91A27F]">
                  Wood &amp; Performance Flooring
                </p>
                <h3 className="mt-3 font-serif text-3xl text-[#2B2B2B] sm:text-4xl">
                  Nydree
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#666] sm:text-base sm:leading-7">
                  Find technical specifications and supporting documentation for Nydree's
                  acrylic-infused hardwood flooring systems.
                </p>
              </div>

              <a
                href="https://nydreeflooring.com/pages/resources"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex min-h-14 w-full items-center justify-between rounded-full bg-[#2F3834] px-6 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#222A27] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F3834] sm:w-auto sm:min-w-80"
              >
                Technical Specifications
                <ExternalArrow />
              </a>
            </div>

            <div className="border-t border-[#DED9CF] bg-[#FBFAF7] px-7 py-5 sm:px-10">
              <p className="mb-3 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-[#777]">
                More from Nydree
              </p>
              <div className="grid sm:grid-cols-3">
                {nydreeResources.map((resource) => (
                  <a
                    key={resource.label}
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-12 items-center justify-between border-t border-[#E5E1D8] py-3 text-sm font-medium text-[#2B2B2B] transition hover:text-[#718060] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#91A27F] sm:border-l sm:border-t-0 sm:px-5 sm:first:border-l-0 sm:first:pl-0 sm:last:pr-0"
                  >
                    {resource.label}
                    <ExternalArrow />
                  </a>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Resources;
