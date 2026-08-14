function Footer() {
  return (
    <footer
      className="bg-[#1F1F1F] py-16 text-center text-white"
    >
      <div className="mx-auto max-w-7xl px-8">

        <h3 className="font-serif text-3xl">
          KP Spec Solutions
        </h3>

        <p className="mt-4 text-white/70">
          Materials That Matter
        </p>

        <a
          href="/contact"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-7 text-xs font-semibold uppercase tracking-[0.18em] transition hover:border-white hover:bg-white hover:text-[#1F1F1F]"
        >
          Contact KP Spec Solutions
        </a>

        <p className="mt-10 text-sm text-white/50">
          © {new Date().getFullYear()} KP Spec Solutions.
          All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
