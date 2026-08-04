import aboutImage from "../../assets/Images/about/about-kp-spec-solutions.webp";

function About() {
  return (
    <section
      id="about"
      className="bg-[#F8F7F3] py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-[1550px] px-10 lg:px-20">

        {/* Section Header */}

        <div className="mb-16 max-w-4xl">

          <p className="uppercase tracking-[0.45em] text-sm font-semibold text-[#8A9A7B]">
            About KP Spec Solutions
          </p>

          <h2 className="mt-5 font-serif text-[64px] lg:text-[76px] leading-[0.92] text-[#2B2B2B]">
            Materials That Matter
          </h2>

          <div className="mt-8 h-[3px] w-32 rounded-full bg-[#8A9A7B]" />

        </div>

        {/* Main Layout */}

        <div className="grid items-center gap-20 lg:grid-cols-[1.45fr_auto_0.9fr]">

          {/* Image */}

          <div className="fade-up">

            <img
              src={aboutImage}
              alt="KP Spec Solutions"
              className="
                w-full
                rounded-[30px]
                object-cover
                shadow-[0_40px_90px_rgba(0,0,0,0.16)]
              "
            />

          </div>

          {/* Divider */}

          <div className="hidden lg:block h-[70%] w-px bg-[#DDD7CC]" />

          {/* Content */}

          <div className="fade-up max-w-[500px]">

            <p className="text-[22px] leading-10 text-[#4A4A4A]">
              We help architects, designers, owners and contractors specify
              thoughtfully curated architectural materials that balance
              exceptional design, proven performance and lasting value.
            </p>

            <p className="mt-10 text-[22px] leading-10 text-[#4A4A4A]">
              Serving clients throughout
              <strong> Georgia, Alabama and Tennessee</strong>, we guide
              projects from concept through construction with trusted
              manufacturer partnerships and more than
              <strong> 15 years of specification experience.</strong>
            </p>

            {/* Highlights */}

            <div className="mt-16 border-t border-[#DDD7CC] pt-8">

              <div className="flex items-center gap-12">

                <div>

                  <div className="font-serif text-[52px] leading-none text-[#2B2B2B]">
                    15+
                  </div>

                  <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-[#777777]">
                    Years of Specification
                    <br />
                    Experience
                  </div>

                </div>

                <div className="h-16 w-px bg-[#DDD7CC]" />

                <div>

                  <div className="font-serif text-[30px] leading-none text-[#2B2B2B]">
                    GA • AL • TN
                  </div>

                  <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-[#777777]">
                    Serving the Southeast
                  </div>

                </div>

              </div>

            </div>

            <div className="mt-14">

              <a
                href="#collections"
                className="btn-primary"
              >
                Explore Collections
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;