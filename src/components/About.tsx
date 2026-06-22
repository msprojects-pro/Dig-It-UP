import { Shield, Sparkles, Building, PhoneCall, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import siteClearanceImg from "../assets/images/site_clearance_1782161164635.jpg";

interface AboutProps {
  onOpenQuote: () => void;
}

export default function About({ onOpenQuote }: AboutProps) {
  return (
    <section id="about" className="relative py-20 bg-[#0f1524] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 border-t-2 border-l-2 border-[#FACC15]/20 rounded-tl-3xl pointer-events-none" />
            
            <div className="relative overflow-hidden rounded-2xl border border-gray-800 shadow-2xl bg-gray-900 group">
              <img
                src={siteClearanceImg}
                alt="Wayne Chambers Groundworks Crew clearing site"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              
              {/* Overlapping Badge */}
              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-gray-805 bg-gray-950/90 p-4 backdrop-blur-sm">
                <p className="text-xs font-bold text-[#FACC15] uppercase tracking-wider">Wayne Chambers</p>
                <p className="text-xs text-gray-400">Founder &amp; Lead Operator</p>
                <div className="h-px bg-gray-800 my-2" />
                <p className="text-xs text-gray-300 italic">"Over 27 years taking pride in laying solid foundations for Essex homes."</p>
              </div>
            </div>

            {/* Float Badge */}
            <div className="absolute -bottom-6 -right-6 hidden sm:flex flex-col items-center justify-center h-28 w-28 rounded-2xl bg-[#FACC15] text-black shadow-xl z-10 p-2 text-center select-none">
              <span className="font-display font-black text-3xl leading-none">27+</span>
              <span className="text-[10px] font-bold uppercase tracking-wider mt-1 block">Years of Experience</span>
            </div>
          </div>

          {/* Text/Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#FACC15] block mb-1">
                Laying Solid Foundations
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                About Wayne Chambers
              </h2>
            </div>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base font-light leading-relaxed">
              <p>
                Hi, I'm Wayne from <strong className="text-white font-medium">Dig It Up Groundworks</strong>. I have been in the construction industry for over 27 years, worked for many well-known heavy construction companies around Essex, and have built up an extensive, hands-on catalog of experience in all aspects of groundworks.
              </p>
              <p>
                From residential foundation installations to complex drainage systems, driveways, and site clearances, I bring the precision, modern machinery, and deep safety knowledge required to successfully deliver projects on budget.
              </p>
              <p>
                Based in <strong className="text-white font-medium">Harwich, Essex</strong>, we take immense pride in supporting local homeowners, developers, and commercial contractors. We treat every yard, driveway, or commercial site as if it were our own. No shortcuts, just high-quality, fully guaranteed groundworks that stand the test of time.
              </p>
            </div>

            {/* Checkpoints Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-500/10 text-[#FACC15] mt-0.5">
                  <Shield className="h-3 w-3" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Fully Certified Operations</h4>
                  <p className="text-xs text-gray-400 mt-0.5">CSCS approved, fully compliant with modern building standards.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-500/10 text-[#FACC15] mt-0.5">
                  <Building className="h-3 w-3" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Residential &amp; Commercial</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Equipped to handle projects of every scale with ease.</p>
                </div>
              </div>
            </div>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-850">
              <button
                id="about-quote-btn"
                onClick={onOpenQuote}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FACC15] to-amber-500 px-6 py-3.5 text-sm font-bold text-black shadow-lg hover:brightness-110 active:scale-98 transition-all"
              >
                <span>Hire Wayne for Your Project</span>
                <ChevronRight className="h-4 w-4" />
              </button>

              <a
                id="about-phone-btn"
                href="tel:+447787300827"
                className="flex items-center justify-center gap-2 rounded-xl bg-gray-900 border border-gray-800 px-6 py-3.5 text-sm font-bold text-gray-300 hover:text-white hover:border-gray-700 transition-all"
              >
                <PhoneCall className="h-4 w-4 text-[#FACC15]" />
                <span>Call +44 7787 300827</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
