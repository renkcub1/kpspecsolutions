import { useParams } from "react-router-dom";

import ManufacturerHeroV2 from "../components/manufacturer/ManufacturerHeroV2";
import ManufacturerInfoCard from "../components/manufacturer/ManufacturerInfoCard";

import { manufacturers } from "../data/manufacturers";

export default function ManufacturerPage() {
  const { slug } = useParams();

  const manufacturer = manufacturers.find(
    (m) => m.slug === slug
  );

  if (!manufacturer) {
    return (
      <main className="mx-auto max-w-6xl px-8 py-40">
        <h1 className="font-serif text-5xl">
          Manufacturer Not Found
        </h1>
      </main>
    );
  }

  return (
    <main>

      <ManufacturerHeroV2
        name={manufacturer.name}
        title={manufacturer.title}
        description={manufacturer.description}
        heroImage={manufacturer.heroImage}
        logo={manufacturer.logo}
      />

      <ManufacturerInfoCard
        name={manufacturer.name}
        title={manufacturer.title}
        website={manufacturer.website}
      />

      {/* About */}

      <section className="mx-auto grid max-w-7xl gap-24 px-8 pt-52 pb-28 lg:grid-cols-2">

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8A9A7B]">
            About
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight text-[#2B2B2B]">
            Designed for Commercial Interiors
          </h2>
        </div>

        <div>
          <p className="text-xl leading-10 text-[#555]">
            {manufacturer.description}
          </p>
        </div>

      </section>

      {/* Features */}

      <section className="mx-auto max-w-7xl px-8 pb-28">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {[
            "Commercial Performance",
            "Premium Quality",
            "Design Focused",
            "Trusted by Architects",
          ].map((item) => (

            <div
              key={item}
              className="rounded-[28px] border border-[#E6E1D8] bg-white p-10 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <h3 className="font-serif text-2xl text-[#2B2B2B]">
                {item}
              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="mx-auto max-w-7xl px-8 pb-36">

        <div className="rounded-[40px] bg-[#2F3533] px-16 py-20 text-center">

          <p className="text-sm uppercase tracking-[0.45em] text-[#AAB998]">
            REPRESENTED BY KP SPEC SOLUTIONS
          </p>

          <h2 className="mt-6 font-serif text-5xl text-white">
            Learn More About {manufacturer.name}
          </h2>

          <a
            href={manufacturer.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-block rounded-full bg-[#8A9A7B] px-10 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:opacity-90"
          >
            Visit Manufacturer
          </a>

        </div>

      </section>

    </main>
  );
}