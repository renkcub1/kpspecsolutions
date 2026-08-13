import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logos/KPSpecLogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Material Collections", href: "/#collections" },
    { label: "Resources", href: "/#resources" },
    { label: "Contact", href: "/#contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4 sm:px-5 lg:top-6 lg:px-6">
      <nav aria-label="Primary navigation" className="w-full max-w-[1650px] rounded-[24px] border border-white/50 bg-white/90 shadow-[0_20px_60px_rgba(0,0,0,.10)] backdrop-blur-2xl transition-all duration-500 lg:rounded-[30px]">
        <div className="flex h-16 items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:h-[78px] lg:px-10">
          <a href="/#home" aria-label="KP Spec Solutions home" className="min-w-0 shrink transition duration-300 hover:scale-[1.03]">
            <img src={logo} alt="KP Spec Solutions" className="h-7 max-w-[150px] object-contain sm:h-8 sm:max-w-[190px] lg:h-9 lg:max-w-[220px]" />
          </a>
          <ul className="hidden items-center gap-8 xl:flex 2xl:gap-14">
            {navItems.map((item) => (
              <li key={item.label}><a href={item.href} className="group relative text-[12px] font-semibold uppercase tracking-[0.16em] text-[#3D3D3D] transition-colors duration-300 hover:text-[#8A9A7B]">{item.label}<span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-[#8A9A7B] transition-all duration-300 group-hover:w-full" /></a></li>
            ))}
          </ul>
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="/#presentation" className="hidden min-h-11 items-center rounded-full bg-[#8F9F7A] px-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#798868] hover:shadow-xl xl:inline-flex">Request a Presentation</a>
            <button type="button" className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-[#D9D5CC] bg-white text-[#2B2B2B] shadow-sm transition hover:bg-[#F0EEE8] xl:hidden" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
              {menuOpen ? <X aria-hidden="true" className="size-6" strokeWidth={2.5} /> : <Menu aria-hidden="true" className="size-6" strokeWidth={2.5} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div id="mobile-navigation" className="border-t border-[#E6E1D8] px-5 pb-6 pt-3 xl:hidden">
            <ul className="flex flex-col">{navItems.map((item) => <li key={item.label}><a href={item.href} onClick={() => setMenuOpen(false)} className="flex min-h-12 items-center border-b border-[#ECE7DE] text-sm font-semibold uppercase tracking-[0.14em] text-[#3D3D3D]">{item.label}</a></li>)}</ul>
            <a href="/#presentation" onClick={() => setMenuOpen(false)} className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#8F9F7A] px-5 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white">Request a Presentation</a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
