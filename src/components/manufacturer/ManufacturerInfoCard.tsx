interface ManufacturerInfoCardProps {
  name: string;
  title: string;
  website: string;
}

export default function ManufacturerInfoCard({
  name,
  title,
  website,
}: ManufacturerInfoCardProps) {
  return (
    <section className="relative z-30">
      <div className="relative mx-auto max-w-[1550px] px-8">

        <div className="absolute right-8 -top-60 w-full max-w-md rounded-[28px] border border-[#E5E1D8] bg-white p-10 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">

          <p className="text-xs uppercase tracking-[0.35em] text-[#8A9A7B]">
            Represented by KP Spec Solutions
          </p>

          <h3 className="mt-5 font-serif text-5xl text-[#252A25]">
            {name}
          </h3>

          <p className="mt-3 text-lg text-[#606060]">
            {title}
          </p>

          <div className="mt-8 h-px bg-[#E6E2D8]" />

          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-full bg-[#8A9A7B] px-7 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#738366]"
          >
            Visit Manufacturer
          </a>

        </div>

      </div>
    </section>
  );
}