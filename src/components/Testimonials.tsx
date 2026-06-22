import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  projectType: "Domestic Extension" | "Home Driveway" | "Drainage Repair" | "Commercial Site Prep";
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Mark Reynolds",
    location: "Dovercourt, Harwich",
    rating: 5,
    text: "Wayne cleared our backyard and dug foundations for our double extension. Outstanding accuracy with the excavator, did not hit any buried utility lines. Extremely knowledgeable and a pleasure to have on site. Building control passed everything on first inspection!",
    service: "Foundations & Footings",
    projectType: "Domestic Extension",
  },
  {
    id: "t-2",
    name: "Sarah Jenkins",
    location: "Manningtree, Essex",
    rating: 5,
    text: "Dig It Up Groundworks replaced our sunken, waterlogged driveway with permeable block paving and a brand new central channel drainage system. The workmanship is second to none. Wayne is professional, hard-working, and completed the job in 4 days.",
    service: "Driveways & Patios",
    projectType: "Home Driveway",
  },
  {
    id: "t-3",
    name: "T&amp;K Developments",
    location: "Colchester, Essex",
    rating: 5,
    text: "We hire Dig It Up Groundworks for all our initial site clearances, footing excavation, and utilities trenching around Essex. Wayne's 27+ years expertise shows in his machine handling and tight schedule compliance. Unreservedly recommended for any housing project.",
    service: "Excavation & site clearance",
    projectType: "Commercial Site Prep",
  },
  {
    id: "t-4",
    name: "David Croft",
    location: "Clacton-on-Sea, Essex",
    rating: 5,
    text: "After severe heavy rain, our garden drainage was completely waterlogged. Wayne came out quickly, diagnosed the clay soil block, and installed a French drain linked to a brand new soakaway chamber. Garden is finally completely dry. Top-tier service!",
    service: "Drainage Systems",
    projectType: "Drainage Repair",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="relative py-20 bg-[#0b0f19] overflow-hidden">
      {/* Decorative lines / yellow accent dots */}
      <div className="absolute top-1/4 left-1/4 -translate-y-12 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FACC15]">
            100% Customer Satisfaction
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
            Loved By Essex Locals
          </h2>
          <div className="h-1 w-16 bg-[#FACC15] mx-auto mt-3 rounded-full" />
          <p className="text-sm text-gray-400 mt-3 font-light">
            Read stories of how Wayne has transformed garden drainage, prepared pristine home foundations, and paved modern driveways.
          </p>
        </div>

        {/* Carousel Layout For High Impact */}
        <div className="max-w-4xl mx-auto relative px-4 md:px-12">
          
          <div className="relative overflow-hidden rounded-3xl border border-gray-800 bg-gray-900/40 p-6 md:p-10 backdrop-blur-sm">
            
            {/* Quote Icon Background */}
            <div className="absolute top-6 right-6 text-yellow-500/5 pointer-events-none">
              <Quote className="h-28 w-28 -rotate-12" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.35 }}
                className="text-left space-y-6"
              >
                {/* Stars Indicator */}
                <div className="flex gap-1">
                  {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#FACC15] text-[#FACC15]" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-base sm:text-lg md:text-xl text-gray-100 font-light italic leading-relaxed">
                  "{TESTIMONIALS[activeIndex].text}"
                </blockquote>

                {/* Author Credentials */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-gray-850">
                  <div>
                    <span className="font-display text-base font-bold text-white block">
                      {TESTIMONIALS[activeIndex].name}
                    </span>
                    <span className="text-xs text-gray-400 mt-0.5 block font-light">
                      {TESTIMONIALS[activeIndex].location}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-gray-900 border border-gray-800 px-3 py-1 text-[11px] font-bold text-gray-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FACC15]" />
                      Specialism: {TESTIMONIALS[activeIndex].service}
                    </span>
                    <span className="inline-flex items-center gap-1.2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 text-[11px] font-bold text-emerald-400">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>{TESTIMONIALS[activeIndex].projectType}</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              id="testimonial-prev-btn"
              onClick={prevTestimonial}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-[#FACC15] active:scale-95 transition-all"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Step Indicators */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  id={`testimonial-dot-${idx}`}
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    activeIndex === idx ? "w-6 bg-[#FACC15]" : "w-2.5 bg-gray-800 hover:bg-gray-700"
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              id="testimonial-next-btn"
              onClick={nextTestimonial}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-[#FACC15] active:scale-95 transition-all"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </div>

        {/* Call to action card under reviews */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-yellow-500 to-amber-500 p-8 text-black max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-left space-y-2">
            <h3 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight">
              Ready to start your excavating or paving work?
            </h3>
            <p className="text-xs sm:text-sm font-medium opacity-90 max-w-xl">
              Get Wayne on site this week for a completely free consultation and detailed measure up anywhere in Essex or Suffolk border.
            </p>
          </div>
          <a
            id="testimonial-quote-link"
            href="https://wa.me/447787300827?text=Hi Wayne, I saw your testimonial projects. I have a groundworks request. Let me know when you are free."
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-black hover:bg-gray-900 text-white font-extrabold px-6 py-3.5 text-xs uppercase tracking-wider shadow-lg transition-transform active:scale-98 shrink-0 text-center"
          >
            Connect on WhatsApp &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
