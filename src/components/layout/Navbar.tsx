import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

import logo from "../../assets/logos/KPSpecLogo.png";
import { manufacturers } from "../../data/manufacturers";

type SubmenuLink = { label: string; href: string };

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<"collections" | "resources" | null>(null);

  const manufacturerLinks = manufacturers.map((manufacturer) => ({ label: manufacturer.name, href: `/manufacturers/${manufacturer.slug}` }));
  const resourceLinks = manufacturers.map((manufacturer) => ({ label: manufacturer.name, href: `/#resource-${manufacturer.slug}` }));

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4 sm:px-5 lg:top-6 lg:px-6">
      <nav aria-label="Primary navigation" className="w-full max-w-[1650px] rounded-[24px] border border-white/50 bg-white/90 shadow-[0_20px_60px_rgba(0,0,0,.10)] backdrop-blur-2xl transition-all duration-500 lg:rounded-[30px]">
        <div className="flex h-16 items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:h-[78px] lg:px-10">
          <a href="/#home" aria-label="KP Spec Solutions home" className="min-w-0 shrink transition duration-300 hover:scale-[1.03]">
            <img src={logo} alt="KP Spec Solutions" className="h-6 max-w-[132px] object-contain sm:h-8 sm:max-w-[190px] lg:h-9 lg:max-w-[220px]" />
          </a>

          <ul className="hidden items-center gap-8 xl:flex 2xl:gap-14">
            <li><a href="/#home" className="nav-primary-link">Home</a></li>
            <li><a href="/#about" className="nav-primary-link">About</a></li>
            <li className="group/nav relative">
              <a href="/#collections" className="nav-primary-link inline-flex items-center gap-1.5" aria-haspopup="true">Material Collections <ChevronDown aria-hidden="true" className="size-3.5 transition group-hover/nav:rotate-180 group-focus-within/nav:rotate-180" /></a>
              <NavDropdown links={manufacturerLinks} />
            </li>
            <li className="group/nav relative">
              <a href="/#resources" className="nav-primary-link inline-flex items-center gap-1.5" aria-haspopup="true">Resources <ChevronDown aria-hidden="true" className="size-3.5 transition group-hover/nav:rotate-180 group-focus-within/nav:rotate-180" /></a>
              <NavDropdown links={resourceLinks} />
            </li>
            <li><a href="/contact" className="nav-primary-link">Contact</a></li>
          </ul>

          <div className="ml-5 flex shrink-0 items-center gap-2 sm:ml-6 sm:gap-3 xl:ml-0">
            <a href="/contact?request=presentation" className="hidden min-h-11 items-center rounded-full bg-[#8F9F7A] px-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#798868] hover:shadow-xl xl:inline-flex">Request a Presentation</a>
            <button type="button" className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-[#D9D5CC] bg-white text-[#2B2B2B] shadow-sm transition hover:bg-[#F0EEE8] sm:size-11 xl:hidden" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
              {menuOpen ? <X aria-hidden="true" className="size-5 sm:size-6" strokeWidth={2.5} /> : <Menu aria-hidden="true" className="size-5 sm:size-6" strokeWidth={2.5} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div id="mobile-navigation" className="max-h-[calc(100vh-6.5rem)] overflow-y-auto border-t border-[#E6E1D8] px-5 pb-6 pt-3 xl:hidden">
            <ul className="flex flex-col">
              <MobileLink href="/#home" label="Home" onNavigate={() => setMenuOpen(false)} />
              <MobileLink href="/#about" label="About" onNavigate={() => setMenuOpen(false)} />
              <MobileSubmenu label="Material Collections" open={mobileSubmenu === "collections"} links={manufacturerLinks} onToggle={() => setMobileSubmenu((current) => current === "collections" ? null : "collections")} onNavigate={() => setMenuOpen(false)} />
              <MobileSubmenu label="Resources" open={mobileSubmenu === "resources"} links={resourceLinks} onToggle={() => setMobileSubmenu((current) => current === "resources" ? null : "resources")} onNavigate={() => setMenuOpen(false)} />
              <MobileLink href="/contact" label="Contact" onNavigate={() => setMenuOpen(false)} />
            </ul>
            <a href="/contact?request=presentation" onClick={() => setMenuOpen(false)} className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#8F9F7A] px-5 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white">Request a Presentation</a>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavDropdown({ links }: { links: SubmenuLink[] }) {
  return (
    <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-1 pt-6 opacity-0 transition duration-200 group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:translate-y-0 group-focus-within/nav:opacity-100">
      <ul className="rounded-2xl border border-[#E1DDD4] bg-white/95 p-2 shadow-[0_20px_50px_rgba(34,38,34,.16)] backdrop-blur-xl">
        {links.map((link) => <li key={link.href}><a href={link.href} className="flex min-h-10 items-center rounded-xl px-4 text-[11px] font-semibold uppercase tracking-[0.13em] text-[#3D3D3D] transition hover:bg-[#EEF0E9] hover:text-[#68775C] focus:bg-[#EEF0E9]">{link.label}</a></li>)}
      </ul>
    </div>
  );
}

function MobileLink({ href, label, onNavigate }: { href: string; label: string; onNavigate: () => void }) {
  return <li><a href={href} onClick={onNavigate} className="flex min-h-12 items-center border-b border-[#ECE7DE] text-sm font-semibold uppercase tracking-[0.14em] text-[#3D3D3D]">{label}</a></li>;
}

function MobileSubmenu({ label, open, links, onToggle, onNavigate }: { label: string; open: boolean; links: SubmenuLink[]; onToggle: () => void; onNavigate: () => void }) {
  return (
    <li className="border-b border-[#ECE7DE]">
      <button type="button" onClick={onToggle} aria-expanded={open} className="flex min-h-12 w-full items-center justify-between text-left text-sm font-semibold uppercase tracking-[0.14em] text-[#3D3D3D]">{label}<ChevronDown aria-hidden="true" className={`size-4 transition ${open ? "rotate-180" : ""}`} /></button>
      {open && (
        <ul className="mb-3 grid grid-cols-2 gap-1 rounded-2xl bg-[#F3F2ED] p-2">
          {links.map((link) => <li key={link.href}><a href={link.href} onClick={onNavigate} className="flex min-h-10 items-center rounded-xl px-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#596052] transition hover:bg-white">{link.label}</a></li>)}
        </ul>
      )}
    </li>
  );
}

export default Navbar;
