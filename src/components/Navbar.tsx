import { useState, useEffect } from "react";
import { Hammer, Menu, X, Phone, Dumbbell, ShieldAlert, Award } from "lucide-react";

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link tracker
      const sections = ["home", "about", "services", "gallery", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Wayne" },
    { id: "services", label: "Our Services" },
    { id: "gallery", label: "Completed Work" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact Us" },
  ];

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of the header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0b0f19]/90 border-b border-gray-800 shadow-xl backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <button
            id="navbar-logo-btn"
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 text-left focus:outline-none group active:scale-98 transition-transform"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#FACC15] to-amber-500 shadow-md shadow-[#FACC15]/20">
              <span className="font-display font-black text-black text-xl">D</span>
              <div className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-sm bg-black border border-[#FACC15]">
                <span className="text-[9px] text-[#FACC15] font-bold">🚧</span>
              </div>
            </div>
            <div>
              <span className="font-display text-lg font-bold tracking-tight text-white block leading-none">
                DIG IT UP
              </span>
              <span className="text-[10px] font-bold text-[#FACC15] uppercase tracking-widest block mt-0.5 leading-none">
                GROUNDWORKS
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                id={`nav-link-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-semibold tracking-wide transition-colors cursor-pointer hover:text-[#FACC15] ${
                  activeSection === item.id ? "text-[#FACC15]" : "text-gray-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Call / Action CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              id="navbar-phone-btn"
              href="tel:+447787300827"
              className="flex items-center gap-2 rounded-xl border border-gray-800 hover:border-[#FACC15] bg-gray-950/40 hover:bg-gray-900 px-4 py-2.5 text-xs font-bold text-gray-300 hover:text-white transition-all"
            >
              <Phone className="h-4 w-4 text-[#FACC15] animate-pulse" />
              <span>+44 7787 300827</span>
            </a>

            <button
              id="navbar-quote-btn"
              onClick={onOpenQuote}
              className="rounded-xl bg-[#FACC15] hover:bg-yellow-400 active:scale-95 px-5 py-2.5 text-xs font-bold text-black shadow-lg shadow-yellow-500/10 transition-all cursor-pointer"
            >
              Get Free Estimate
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex lg:hidden rounded-xl bg-gray-900 border border-gray-800 p-2.5 text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (with slide-down transition) */}
      {isMobileMenuOpen && (
        <div id="mobile-nav-panel" className="lg:hidden absolute top-full left-0 right-0 bg-[#0f1524] border-b border-gray-800 shadow-2xl py-6 px-4 animate-fade-in">
          <nav className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <button
                id={`mobile-nav-link-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-base font-bold tracking-wide py-1.5 transition-colors ${
                  activeSection === item.id ? "text-[#FACC15] border-l-2 border-[#FACC15] pl-3" : "text-gray-300 pl-3 border-l border-transparent"
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-gray-800">
              <a
                id="mobile-navbar-phone"
                href="tel:+447787300827"
                className="flex items-center justify-center gap-2 rounded-xl border border-gray-800 bg-gray-900 py-3 text-sm font-bold text-gray-300"
              >
                <Phone className="h-4 w-4 text-[#FACC15]" />
                Call Wayne
              </a>
              <button
                id="mobile-navbar-quote"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="rounded-xl bg-[#FACC15] text-black py-3 text-sm font-bold shadow-lg"
              >
                Free Estimate
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
