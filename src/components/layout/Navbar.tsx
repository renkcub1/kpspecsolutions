import logo from "../../assets/logos/KPSpecLogo.png";

function Navbar() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Material Collections", href: "#collections" },
    { label: "Resources", href: "#resources" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-6 z-50 flex justify-center px-6">
      <nav
        className="
          w-full
          max-w-[1650px]
          rounded-[30px]
          border border-white/50
          bg-white/75
          backdrop-blur-2xl
          shadow-[0_20px_60px_rgba(0,0,0,.10)]
          transition-all
          duration-500
        "
      >
        <div className="flex h-[78px] items-center justify-between px-10">

          {/* Logo */}

          <a
            href="#home"
            className="transition duration-500 hover:scale-[1.03]"
          >
            <img
              src={logo}
              alt="KP Spec Solutions"
              className="h-9 max-w-[220px] object-contain"
            />
          </a>

          {/* Navigation */}

         <ul className="hidden items-center gap-14 lg:flex">

            {navItems.map((item) => (

              <li key={item.label}>

                <a
                  href={item.href}
                  className="
                    group
                    relative
                    text-[13px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#3D3D3D]
                    transition-colors
                    duration-300
                    hover:text-[#8A9A7B]
                  "
                >
                  {item.label}

                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0
                      h-[2px]
                      w-0
                      rounded-full
                      bg-[#8A9A7B]
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />

                </a>

              </li>

            ))}

          </ul>

          {/* CTA */}

          <a
            href="#presentation"
            className="
              inline-flex
              items-center
              rounded-full
              bg-[#8F9F7A]
              px-8
              py-3.5
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.20em]
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#798868]
              hover:shadow-xl
            "
          >
            Request a Presentation
          </a>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;