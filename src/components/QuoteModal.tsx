import React, { useState } from "react";
import { X, Send, CheckCircle2, ChevronRight, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

const SERVICES_LIST = [
  "Excavation & Earthworks",
  "Foundations & Footings",
  "Drainage Systems",
  "Driveways & Patios",
  "Site Clearance",
  "Ground Preparation",
  "Retaining Walls",
  "Demolition",
  "Utilities Installation",
  "Concrete Works",
];

export default function QuoteModal({ isOpen, onClose, preselectedService }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "Harwich",
    service: preselectedService || "Excavation & Earthworks",
    details: "",
    timeframe: "Flexible",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [refId, setRefId] = useState("");

  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate database write & API delay
    setTimeout(() => {
      const generatedId = "DIG-" + Math.floor(100000 + Math.random() * 900000);
      setRefId(generatedId);
      setIsSubmitting(false);
      setIsSuccess(true);
      console.log("=== DIG IT UP GROUNDWORKS: QUOTE REQUEST SUBMITTED ===");
      console.log("Reference ID:", generatedId);
      console.log("Quote Data:", formData);
      console.log("==========================================");
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      location: "Harwich",
      service: "Excavation & Earthworks",
      details: "",
      timeframe: "Flexible",
    });
    setIsSuccess(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-start sm:items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            id="quote-modal-container"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-xl my-auto rounded-2xl border border-gray-800 bg-[#0f1524] p-5 shadow-2xl md:p-8 z-10"
          >
            {/* Header Yellow Stripe */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FACC15] via-amber-500 to-[#FACC15] rounded-t-2xl" />

            {/* Close Button */}
            <button
              id="close-modal-btn"
              onClick={onClose}
              className="absolute top-4 right-4 rounded-lg p-2 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors z-20"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div className="text-left">
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#FACC15]">
                    Fast No-Obligation Estimating
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white mt-1">
                    Request a Free Quote
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                    Fill in the details below and Wayne will get back to you with advice & pricing.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                      Your Name *
                    </label>
                    <input
                      id="quote-name-input"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Smith"
                      className="w-full rounded-xl border border-gray-800 bg-gray-900 px-3 py-2 text-xs sm:text-sm text-white placeholder-gray-500 outline-none focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="quote-phone-input"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +44 7700 900077"
                      className="w-full rounded-xl border border-gray-805 bg-gray-900 px-3 py-2 text-xs sm:text-sm text-white placeholder-gray-500 outline-none focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                      Email Address
                    </label>
                    <input
                      id="quote-email-input"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full rounded-xl border border-gray-800 bg-gray-900 px-3 py-2 text-xs sm:text-sm text-white placeholder-gray-500 outline-none focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                      Job Location in Essex
                    </label>
                    <input
                      id="quote-location-input"
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Harwich, Colchester"
                      className="w-full rounded-xl border border-gray-800 bg-gray-900 px-3 py-2 text-xs sm:text-sm text-white placeholder-gray-500 outline-none focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                      Groundworks Service
                    </label>
                    <select
                      id="quote-service-select"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-xl border border-gray-800 bg-gray-900 px-3 py-2 text-xs sm:text-sm text-white outline-none focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] transition-all"
                    >
                      {SERVICES_LIST.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                      Project Timeframe
                    </label>
                    <select
                      id="quote-timeframe-select"
                      value={formData.timeframe}
                      onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                      className="w-full rounded-xl border border-gray-800 bg-gray-900 px-3 py-2 text-xs sm:text-sm text-white outline-none focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] transition-all"
                    >
                      <option value="Urgent (Next 2 weeks)">Urgent (Next 2 weeks)</option>
                      <option value="1-2 Months">1-2 Months</option>
                      <option value="Flexible">Flexible / Planning stage</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                    How can we help? (Job specs, size, access limits)
                  </label>
                  <textarea
                    id="quote-details-textarea"
                    rows={2}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Provide details like: Driveway is approx 50m², looking for permeable block paving..."
                    className="w-full rounded-xl border border-gray-800 bg-gray-900 px-3 py-2 text-xs sm:text-sm text-white placeholder-gray-500 outline-none focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] transition-all resize-none"
                  />
                </div>

                <div className="pt-1">
                  <button
                    id="quote-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FACC15] to-amber-500 px-4 py-3 text-xs sm:text-sm font-bold text-black shadow-lg hover:brightness-110 active:scale-98 transition-all disabled:opacity-75 disabled:pointer-events-none"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
                        Calculating Estimate Details...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Get Your Free Project Estimate
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-8 text-center"
              >
                <div className="relative mb-4">
                  <div className="absolute inset-0 animate-ping rounded-full bg-[#FACC15]/20" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-white">
                  Estimate Request Received!
                </h3>
                <p className="text-gray-400 text-sm max-w-sm mt-2">
                  Hi {formData.name}, Wayne has received your groundwork request and will analyze the details for <strong className="text-white">{formData.service}</strong>.
                </p>

                <div className="my-6 rounded-xl border border-gray-800 bg-gray-900/50 p-4 w-full">
                  <div className="flex justify-between items-center text-xs border-b border-gray-800 pb-2.5 mb-2.5">
                    <span className="text-gray-500 uppercase tracking-wider font-semibold">Reference ID</span>
                    <span className="font-mono font-bold text-[#FACC15]">{refId}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs border-b border-gray-800 pb-2.5 mb-2.5">
                    <span className="text-gray-500 uppercase tracking-wider font-semibold">Service</span>
                    <span className="font-medium text-white">{formData.service}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500 uppercase tracking-wider font-semibold">Estimated Contact</span>
                    <span className="font-medium text-emerald-400">Under 12 Hours</span>
                  </div>
                </div>

                <div className="flex flex-col w-full gap-3 sm:flex-row">
                  <button
                    id="quote-success-close-btn"
                    type="button"
                    onClick={() => {
                      onClose();
                      setTimeout(resetForm, 300);
                    }}
                    className="flex-1 rounded-xl border border-gray-800 bg-gray-900 py-3 text-sm font-semibold text-gray-300 hover:text-white hover:bg-gray-800 transition-all"
                  >
                    Close Window
                  </button>
                  <a
                    id="quote-whatsapp-link"
                    href={`https://wa.me/447787300827?text=Hi Wayne, I just submitted an estimate request (Ref: ${refId}) on your website for ${formData.service}. Let me know when you are free to chat!`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba56] text-white py-3 text-sm font-bold transition-all"
                  >
                    <PhoneCall className="h-4 w-4" />
                    Fast-Track on WhatsApp
                  </a>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
