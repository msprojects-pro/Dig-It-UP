import { useState } from "react";
import { Eye, MapPin, Maximize2, Tag, Calendar, Check, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Image imports
import heroExcavator from "../assets/images/hero_excavator_dusk_1782161103545.jpg";
import foundationWork from "../assets/images/foundation_work_1782161125426.jpg";
import drivewayPaving from "../assets/images/driveway_paving_1782161145597.jpg";
import siteClearance from "../assets/images/site_clearance_1782161164635.jpg";

interface GalleryItem {
  id: string;
  category: "excavation" | "foundations" | "driveways";
  title: string;
  location: string;
  imgUrl: string;
  description: string;
  date: string;
  spec: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    category: "excavation",
    title: "Commercial Site Clearance",
    location: "Harwich, Essex",
    imgUrl: siteClearance,
    description: "Full site stripping and muck excavation. Over 400 tons of structural clay cleared to make way for a heavy-handling storage unit.",
    date: "May 2026",
    spec: "3.5T Excavator + 6T Yellow Swivel Dump Truck",
  },
  {
    id: "gal-2",
    category: "foundations",
    title: "Structural Foundation Pour",
    location: "Colchester, Essex",
    imgUrl: foundationWork,
    description: "Deep strip foundations with heavy reinforcement rebar arrays. Meticulously inspected and approved by building control body.",
    date: "March 2026",
    spec: "Grade C35 reinforced concrete, 1.2m trench depth",
  },
  {
    id: "gal-3",
    category: "driveways",
    title: "Charcoal Block Paving & Drainage",
    location: "Manningtree, Essex",
    imgUrl: drivewayPaving,
    description: "High-contrast finished block-paved driveway with robust sand-bedding, slot channel drainage linked straight to main soakaway.",
    date: "April 2026",
    spec: "Permeable charcoal block pavers, Aco slot drains",
  },
  {
    id: "gal-4",
    category: "excavation",
    title: "Precision Utility Excavation",
    location: "Clacton-on-Sea, Essex",
    imgUrl: heroExcavator,
    description: "Tight-access dusk works for high-voltage commercial cable ducting and main drainage linkup. Safe sub-surface scanning performed prior.",
    date: "June 2026",
    spec: "Cat scanner scanning, 8T Excavations",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<"all" | "excavation" | "foundations" | "driveways">("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  const categories = [
    { id: "all", label: "All Works" },
    { id: "excavation", label: "Excavation" },
    { id: "foundations", label: "Foundations & Footings" },
    { id: "driveways", label: "Driveways & Patios" },
  ];

  return (
    <section id="gallery" className="relative py-20 bg-[#0f1524]">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,21,36,1)_0%,rgba(11,15,25,1)_100%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 text-left">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FACC15]">
              Real Contractor Photos
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-1 tracking-tight">
              Our Completed Projects
            </h2>
            <div className="h-1 w-20 bg-[#FACC15] mt-3 rounded-full" />
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                id={`filter-btn-${cat.id}`}
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#FACC15] text-black shadow-lg shadow-yellow-500/10"
                    : "bg-gray-900 text-gray-400 hover:text-white border border-gray-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid Code */}
        <motion.div
          id="gallery-items-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                id={`gallery-item-${item.id}`}
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl border border-gray-800 bg-gray-900/40 p-4 hover:border-yellow-500/20 transition-all overflow-hidden"
              >
                <div className="relative overflow-hidden rounded-xl h-64 sm:h-80 w-full mb-4">
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  />
                  
                  {/* Hover visual details */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button
                      id={`zoom-btn-${item.id}`}
                      onClick={() => setSelectedItem(item)}
                      className="p-3 bg-[#FACC15] rounded-xl text-black hover:scale-110 active:scale-95 transition-all shadow-lg"
                      aria-label={`View details of ${item.title}`}
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Category badging */}
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-lg bg-black/80 border border-gray-800 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#FACC15] backdrop-blur-sm">
                    <Tag className="h-3 w-3" />
                    {item.category}
                  </span>
                </div>

                {/* Card summary */}
                <div className="text-left px-1">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                    <MapPin className="h-3.5 w-3.5 text-[#FACC15]" />
                    <span>{item.location}</span>
                    <span className="text-gray-600">•</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-[#FACC15] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2 line-clamp-2 font-light">
                    {item.description}
                  </p>
                  
                  <div className="mt-4 pt-3 border-t border-gray-850 flex items-center justify-between">
                    <span className="text-[10px] text-gray-500 font-mono">SPEC: {item.spec}</span>
                    <button
                      id={`spec-btn-${item.id}`}
                      onClick={() => setSelectedItem(item)}
                      className="text-xs font-bold text-gray-400 hover:text-white transition-colors"
                    >
                      Project Details &rarr;
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Viewing Window */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 overflow-y-auto flex items-start sm:items-center justify-center p-3 sm:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedItem(null)}
                className="fixed inset-0 bg-black/90 backdrop-blur-sm"
              />

              <motion.div
                id="gallery-detail-modal"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-3xl my-auto rounded-2xl border border-gray-800 bg-[#0f1524] shadow-2xl z-10 overflow-hidden"
              >
                {/* Header Yellow Accent line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FACC15] rounded-t-2xl z-20" />

                <button
                  id="close-gallery-modal"
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 rounded-full sm:rounded-lg p-2 bg-black/60 sm:bg-transparent text-white sm:text-gray-400 hover:bg-gray-850 sm:hover:bg-gray-800 hover:text-white transition-colors z-30 backdrop-blur-sm sm:backdrop-blur-none"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="h-64 md:h-full relative">
                    <img
                      src={selectedItem.imgUrl}
                      alt={selectedItem.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="p-6 md:p-8 text-left space-y-4 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-1.5 rounded-lg bg-yellow-500/10 border border-[#FACC15]/20 px-2.5 py-1 text-[10px] font-bold text-[#FACC15] uppercase tracking-wider mb-2">
                        {selectedItem.category}
                      </div>
                      <h3 className="font-display text-2xl font-bold text-white">
                        {selectedItem.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
                        <MapPin className="h-4 w-4 text-[#FACC15]" />
                        <span>{selectedItem.location}</span>
                        <span className="text-gray-600">•</span>
                        <Calendar className="h-4 w-4 text-[#FACC15]" />
                        <span>{selectedItem.date}</span>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-800">
                        <p className="text-sm text-gray-300 font-light leading-relaxed">
                          {selectedItem.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-xl bg-gray-900 border border-gray-800/80 p-3.5 space-y-1">
                        <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">Machinery &amp; Tech Specs</span>
                        <span className="block text-xs text-[#FACC15] font-mono leading-tight">{selectedItem.spec}</span>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold bg-emerald-500/10 rounded-lg px-2.5 py-1">
                          <Check className="h-3.5 w-3.5" />
                          <span>100% Passed Inspector check</span>
                        </div>
                        <button
                          id="btn-close-gallery-modal"
                          onClick={() => setSelectedItem(null)}
                          className="text-xs font-bold uppercase text-gray-400 hover:text-white transition-colors tracking-widest"
                        >
                          Close Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
