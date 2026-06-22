import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import QuoteModal from "./components/QuoteModal";
import { Phone, MessageSquare, Award, Clock } from "lucide-react";

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenQuote = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div className="relative min-h-screen Selection:bg-[#FACC15] selection:text-black scroll-smooth">
      
      {/* Sticky Premium Top Nav */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Single-Page Sections */}
      <main>
        {/* Hero Banner Section */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* About Wayne Chambers Section */}
        <About onOpenQuote={() => handleOpenQuote()} />

        {/* Dynamic Services Grid Section */}
        <Services onOpenQuoteWithService={(srv) => handleOpenQuote(srv)} />

        {/* Completed Work Masonry Gallery Section */}
        <Gallery />

        {/* Testimonials Review Carousel Section */}
        <Testimonials />

        {/* Informative, Interactive Contact Form & Map Section */}
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

      {/* Global Interactive Quote Estimator Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        preselectedService={selectedService}
      />

      {/* Responsive Floating Emergency & Contact Drawer (Mobile Devices Only) */}
      <div
        id="mobile-action-dock"
        className="fixed bottom-4 left-4 right-4 z-40 flex sm:hidden items-center justify-between gap-3 rounded-2xl border border-gray-800 bg-[#0f1524]/90 p-3 shadow-2xl backdrop-blur-md animate-fade-in"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10 text-[#FACC15]">
            <Clock className="h-4.5 w-4.5 animate-pulse" />
          </div>
          <div className="text-left">
            <span className="block text-[8px] font-bold text-gray-400 uppercase tracking-widest leading-none">Status</span>
            <span className="block text-[11px] font-bold text-emerald-400 mt-1 leading-none">Always On-Call</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            id="floating-call-btn"
            href="tel:+447787300827"
            aria-label="Call Wayne Chambers"
            className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#FACC15] hover:bg-yellow-400 px-4 text-xs font-black text-black transition-all shadow-md active:scale-95"
          >
            <Phone className="h-4.5 w-4.5" />
            <span>Call Wayne</span>
          </a>

          <a
            id="floating-whatsapp-btn"
            href="https://wa.me/447787300827?text=Hi Wayne, I need a groundworks quote. Please reply when you are free!"
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with Wayne Chambers on WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366] hover:bg-[#21ba54] text-white transition-all shadow-md active:scale-95"
          >
            <MessageSquare className="h-4.5 w-4.5" />
          </a>
        </div>
      </div>

    </div>
  );
}
