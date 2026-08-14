import CollectionsHeader from "./CollectionsHeader";
import MaterialCollection from "./MaterialCollection";
import { materialCollections } from "../../data/materialCollections";

function Collections() {
  return (
    <section className="bg-[#F8F7F3]">
      <CollectionsHeader />

      {materialCollections.map((collection, index) => (
        <MaterialCollection
          key={collection.id}
          image={collection.image}
          collectionNumber={collection.collectionNumber}
          title={collection.title}
          description={collection.description}
          manufacturers={collection.manufacturers}
          reverse={index % 2 !== 0}
        />
      ))}
    </section>
  );
}

export default Collections;
