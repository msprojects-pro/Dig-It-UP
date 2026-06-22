import { Phone, ArrowRight, ShieldCheck, Clock, Award, Hammer } from "lucide-react";
import { motion } from "motion/react";
import heroImg from "../assets/images/hero_excavator_dusk_1782161103545.jpg";

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  const scrollToSection = (id: string) => {
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Dig It Up Groundworks Crane and Excavator working at dusk"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center opacity-45 scale-105"
        />
        {/* Sleek Gradient Overlays for High-Contrast Premium Dark Feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/70 to-[#0b0f19]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19] via-[#0b0f19]/40 to-transparent" />
      </div>

      {/* Decorative Construction Pattern Accent lines */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-[repeating-linear-gradient(45deg,#FACC15,#FACC15_20px,transparent_20px,transparent_40px)] opacity-20 z-10" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-6">
            
            {/* badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 border border-[#FACC15]/30 text-xs font-bold uppercase tracking-wider text-[#FACC15]"
            >
              <Award className="h-4 w-4" />
              <span>Harwich & Essex Groundworks Specialist</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none"
            >
              Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACC15] to-amber-400">Excavation</span> <br />
              &amp; Groundwork Services
            </motion.h1>

            {/* Paragraph Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed font-light"
            >
              Need experienced groundworks in Essex? Wayne Chambers offers over <strong>27 years of industry experience</strong> delivering high-quality foundations, reliable drainage systems, and premium driveways.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                id="hero-request-quote-btn"
                onClick={onOpenQuote}
                className="group flex items-center justify-center gap-2 rounded-xl bg-[#FACC15] hover:bg-yellow-400 text-black font-extrabold px-8 py-4 text-base shadow-xl shadow-yellow-500/10 hover:shadow-yellow-500/25 active:scale-98 transition-all cursor-pointer"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                id="hero-whatsapp-btn"
                href="https://wa.me/447787300827?text=Hi Wayne, I am looking for a groundworks quote for my project. Please let me know when you are free to discuss!"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl border border-gray-800 bg-gray-950/80 hover:bg-gray-900 px-8 py-4 text-base font-bold text-white hover:border-[#FACC15] transition-all"
              >
                <span className="flex h-3 w-3 rounded-full bg-[#25D366] animate-pulse" />
                <span>Call Wayne / WhatsApp</span>
              </a>
            </motion.div>

            {/* Trust Badges Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-gray-900"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-900 border border-gray-800 text-[#FACC15]">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-white">27+ Years Experience</span>
                  <span className="block text-xs text-gray-400">All aspects of groundworks</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-900 border border-gray-800 text-[#FACC15]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-white">Fully Registered &amp; Insured</span>
                  <span className="block text-xs text-gray-400">Worry-free premium service</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-900 border border-gray-800 text-[#FACC15]">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-white">Always On-Call</span>
                  <span className="block text-xs text-gray-400">Essex &amp; Suffolk coverage</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Floater / Secondary Construction Graphic / Mini Badge */}
          <div className="hidden lg:col-span-4 lg:flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-2xl border border-gray-850 bg-gradient-to-b from-[#111827]/75 to-[#0b0f19]/90 p-6 md:p-8 backdrop-blur-md max-w-sm"
            >
              <div className="absolute top-0 right-0 h-16 w-16 overflow-hidden">
                <div className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs">
                  ●
                </div>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-600/10 border border-amber-500/20 text-[#FACC15] mb-5">
                <Hammer className="h-6 w-6" />
              </div>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest block mb-1">
                EXCEPTIONAL QUALITY
              </span>
              <h3 className="font-display text-xl font-bold text-white">
                No Job Too Big or Small
              </h3>
              <p className="text-sm text-gray-300 mt-2 font-light">
                From simple home patios &amp; modern drainage repairs to heavy earthworks for commercial extensions, Wayne is your local expert.
              </p>
              <button
                id="hero-read-more-btn"
                onClick={() => scrollToSection("about")}
                className="mt-6 flex items-center gap-2 text-xs font-bold text-[#FACC15] hover:text-white transition-colors"
                aria-label="Read more about Wayne Chambers"
              >
                <span>Read Wayne's Story</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
