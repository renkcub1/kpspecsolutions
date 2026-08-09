interface GalleryImage {
  image: string;
  title: string;
}

interface FeaturedGalleryProps {
  images: GalleryImage[];
}

export default function FeaturedGallery({
  images,
}: FeaturedGalleryProps) {
  return (
    <section className="mx-auto max-w-[1550px] px-8 py-28">

      <p className="uppercase tracking-[0.4em] text-sm font-semibold text-[#8A9A7B]">
        Featured Projects
      </p>

      <h2 className="mt-4 font-serif text-5xl text-[#2B2B2B]">
        Inspiration Gallery
      </h2>

      <div className="mt-16 grid gap-8 md:grid-cols-2">

        {images.map((item, index) => (

          <div
            key={index}
            className="
              group
              overflow-hidden
              rounded-[36px]
              shadow-[0_25px_60px_rgba(0,0,0,.12)]
            "
          >

            <img
              src={item.image}
              alt={item.title}
              className="
                h-[500px]
                w-full
                object-cover
                transition
                duration-700
                group-hover:scale-105
              "
            />

            <div className="bg-white p-6">

              <h3 className="font-serif text-2xl text-[#2B2B2B]">
                {item.title}
              </h3>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}