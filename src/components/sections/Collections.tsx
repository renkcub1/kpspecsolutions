import MaterialCollection from "./MaterialCollection";
import { materialCollections } from "../../data/materialCollections";

function Collections() {
  return (
    <section id="collections" className="bg-[#F8F7F3]">

      {/* Intro */}

      <div className="mx-auto max-w-5xl px-8 pt-36 pb-24 text-center">

        <p className="mb-6 uppercase tracking-[0.45em] text-sm font-semibold text-[#8A9A7B]">
          Curated Material Collections
        </p>

        <h2 className="font-serif text-[72px] leading-[0.95] text-[#2B2B2B]">
          Materials Selected
          <br />
          for Inspired Spaces
        </h2>

        <div className="mx-auto mt-10 h-[3px] w-28 rounded-full bg-[#8A9A7B]" />

        <p className="mx-auto mt-10 max-w-4xl text-[22px] leading-10 text-[#666666]">
          Every manufacturer we represent is intentionally selected for
          exceptional craftsmanship, proven performance, and timeless design.
          Our curated collections help designers, architects, owners, and
          contractors specify materials with confidence.
        </p>

      </div>

      {/* Material Collections */}

      {materialCollections.map((collection, index) => (
        <MaterialCollection
          key={collection.id}
          image={collection.image}
          collectionNumber={collection.collectionNumber}
          title={collection.title}
          description={collection.description}
          manufacturers={collection.manufacturers}
          buttonText={collection.buttonText}
          reverse={index % 2 === 1}
        />
      ))}

    </section>
  );
}

export default Collections;