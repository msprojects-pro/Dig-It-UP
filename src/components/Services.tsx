import {
  HardHat,
  SquareDot,
  Droplets,
  Grid,
  Trees,
  Compass,
  Fence,
  Zap,
  Bomb,
  Cuboid,
  Hammer,
  ArrowUpRight
} from "lucide-react";
import { motion } from "motion/react";

interface ServicesProps {
  onOpenQuoteWithService: (serviceName: string) => void;
}

const SERVICES_DATA = [
  {
    id: "excavation",
    title: "Excavation & Earthworks",
    description: "Bulk soil removal, cut & fill grading, custom level creation, and heavy excavation utilizing state-of-the-art yellow micro and midi diggers.",
    icon: HardHat,
  },
  {
    id: "foundations",
    title: "Foundations & Footings",
    description: "Deep strip foundations, raft foundations, and trench footings for extensions, new builds, and commercial steel works to exact building inspector standards.",
    icon: Cuboid,
  },
  {
    id: "drainage",
    title: "Drainage Systems",
    description: "New soakaways, septic tanks, foul water sewer systems, land drains, channel drainage, and immediate surface water flooding mitigation.",
    icon: Droplets,
  },
  {
    id: "driveways",
    title: "Driveways & Patios",
    description: "Premium block paving, porous tarmac, Indian sandstone Patios, drop curbs, and porcelain paving with high-quality sub-bases to prevent sinking.",
    icon: Grid,
  },
  {
    id: "site-clearance",
    title: "Site Clearance",
    description: "Complete vegetation stripping, tree root removal, muck-away services, and hauling of builder wreckage to leave the site pristine and ready.",
    icon: Trees,
  },
  {
    id: "ground-prep",
    title: "Ground Preparation",
    description: "Precise levelling, heavy compaction, sub-base preparation, sand blinding, and weed-membrane installations for strong construction readiness.",
    icon: Compass,
  },
  {
    id: "retaining-walls",
    title: "Retaining Walls",
    description: "Load-bearing retaining timber sleeper walls, concrete block walls, and gabion baskets to secure tier gradients and elevate garden levels.",
    icon: Fence,
  },
  {
    id: "demolition",
    title: "Demolition",
    description: "Safe, fully controlled teardowns of outbuildings, old concrete slabs, structures, garages, and chimneys with complete legal waste sorting.",
    icon: Bomb,
  },
  {
    id: "utilities",
    title: "Utilities Installation",
    description: "Strategic conduit trenching for electric car chargers, water mains, armored cables, telecom lines, and outdoor electrical setups.",
    icon: Zap,
  },
  {
    id: "concrete",
    title: "Concrete Works",
    description: "Laying high-strength internal warehouse floors, screeding, installing reinforced concrete pads, machinery bases, and smooth finish slabs.",
    icon: Hammer,
  },
];

export default function Services({ onOpenQuoteWithService }: ServicesProps) {
  return (
    <section id="services" className="relative py-20 bg-[#0b0f19] overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FACC15]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FACC15] px-3 py-1 rounded-full bg-yellow-500/10 border border-[#FACC15]/20">
            Professional &amp; Fully Insured Contractor
          </span>
          <h2 className="font-display text-4xl font-extrabold text-white mt-4 tracking-tight sm:text-5xl">
            What Groundworks We Do
          </h2>
          <div className="h-1.5 w-24 bg-[#FACC15] mx-auto mt-4 rounded-full" />
          <p className="text-base text-gray-400 mt-4 font-light">
            With 27+ years expertise, we own and operate standard and tight-access machinery to execute comprehensive commercial and domestic ground improvements anywhere in Essex.
          </p>
        </div>

        {/* Services Grid Code */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                id={`service-card-${service.id}`}
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-gray-800 bg-gray-900/50 p-6 md:p-8 hover:bg-[#0f1524] hover:border-yellow-500/30 transition-all shadow-xl hover:shadow-2xl hover:shadow-yellow-500/5"
              >
                {/* Yellow Stripe Hover Indicator */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-[#FACC15] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Icon Box */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-950/80 border border-gray-850 text-[#FACC15] group-hover:bg-[#FACC15] group-hover:text-black transition-colors mb-6 shadow-md">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-[#FACC15] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-400 mt-3 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                {/* Bottom CTA Inside Card */}
                <div className="pt-6 mt-6 border-t border-gray-850 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider group-hover:text-gray-400 transition-colors">
                    Guaranteed Work
                  </span>
                  <button
                    id={`btn-inquire-${service.id}`}
                    onClick={() => onOpenQuoteWithService(service.title)}
                    className="flex items-center gap-1 text-xs font-bold text-[#FACC15] hover:text-white transition-colors uppercase tracking-widest cursor-pointer"
                  >
                    <span>Quote Spec</span>
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Info callout baner */}
        <div className="mt-12 rounded-2xl border border-dashed border-gray-800 bg-gray-950/60 p-6 text-center max-w-4xl mx-auto">
          <p className="text-sm text-gray-300">
            👋 <strong>Not sure which service fits your project?</strong> Call Wayne on <a href="tel:+447787300827" className="text-[#FACC15] hover:underline font-bold">+44 7787 300827</a> for friendly, free onsite advice. We are available to assess access constraints, soil structures, and municipal regulations free of charge.
          </p>
        </div>

      </div>
    </section>
  );
}
