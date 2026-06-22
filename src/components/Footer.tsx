import { Award, ShieldAlert, Heart, HardHat, ShieldCheck, Mail, PhoneCall } from "lucide-react";

interface FooterProps {
  onOpenQuote: () => void;
}

export default function Footer({ onOpenQuote }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer id="main-footer" className="relative bg-[#070a12] border-t border-gray-900 pt-16 pb-24 sm:pb-16 text-left">
      
      {/* Yellow Safety Stripe Accent line on top of entire footer */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[repeating-linear-gradient(45deg,#FACC15,#FACC15_10px,transparent_10px,transparent_20px)] opacity-60" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FACC15] text-black shadow-md font-display font-black text-lg">
                D
              </div>
              <div>
                <span className="font-display text-base font-bold tracking-tight text-white block leading-none">
                  DIG IT UP
                </span>
                <span className="text-[9px] font-bold text-[#FACC15] uppercase tracking-widest block mt-0.5 leading-none">
                  GROUNDWORKS
                </span>
              </div>
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Hi I'm Wayne from Dig It Up Groundworks. Backed by over 27 years in excavation and heavy construction, we lay durable, inspector-approved structural foundations and beautiful paving across Essex &amp; Suffolk.
            </p>

            {/* Badges */}
            <div className="flex gap-2 pt-2">
              <div className="inline-flex items-center gap-1.5 rounded-lg bg-gray-900/50 border border-gray-800 px-2.5 py-1 text-[10px] font-bold text-gray-300">
                <ShieldCheck className="h-3.5 w-3.5 text-[#FACC15]" />
                <span>Fully Insured £5M+</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-lg bg-gray-900/50 border border-gray-800 px-2.5 py-1 text-[10px] font-bold text-gray-300">
                <HardHat className="h-3.5 w-3.5 text-[#FACC15]" />
                <span>CSCS Approved</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-[#FACC15] uppercase tracking-widest">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-light">
              <li>
                <button
                  id="foot-nav-home"
                  onClick={() => handleScrollTo("home")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home / Introduction
                </button>
              </li>
              <li>
                <button
                  id="foot-nav-about"
                  onClick={() => handleScrollTo("about")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Wayne Chambers
                </button>
              </li>
              <li>
                <button
                  id="foot-nav-services"
                  onClick={() => handleScrollTo("services")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Excavation &amp; Drainage Services
                </button>
              </li>
              <li>
                <button
                  id="foot-nav-gallery"
                  onClick={() => handleScrollTo("gallery")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Completed Works Gallery
                </button>
              </li>
              <li>
                <button
                  id="foot-nav-contact"
                  onClick={() => handleScrollTo("contact")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Get in Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Coverage Area */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-[#FACC15] uppercase tracking-widest">
              Local Service Areas
            </h4>
            <div className="space-y-1.5 text-xs text-gray-400 font-light">
              <span className="block">📍 Harwich &amp; Dovercourt (Primary)</span>
              <span className="block">📍 Colchester &amp; Manningtree</span>
              <span className="block">📍 Clacton-on-Sea &amp; Walton</span>
              <span className="block">📍 Tendring Peninsula District</span>
              <span className="block">📍 Ipswich &amp; South Suffolk Borders</span>
            </div>
          </div>

          {/* Column 4: Contact Shortcut */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-[#FACC15] uppercase tracking-widest">
              Pricing Options
            </h4>
            <div className="space-y-3">
              <p className="text-xs text-gray-400 leading-normal font-light">
                Ready for advice and concrete pricing spec? Wayne can visit your home this evening.
              </p>
              <button
                id="footer-quote-btn"
                onClick={onOpenQuote}
                className="w-full rounded-xl bg-[#FACC15] hover:bg-yellow-400 text-black py-2.5 text-xs font-bold shadow-md transition-colors"
              >
                Estimate Site Scope
              </button>
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-gray-500 font-light">
          <div>
            <span>© {currentYear} Dig It Up Groundworks. All rights reserved.</span>
            <span className="mx-2">|</span>
            <span>Owner: Wayne Chambers</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Built for Wayne Chambers in</span>
            <span className="text-[#FACC15] font-semibold">Harwich, Essex</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
