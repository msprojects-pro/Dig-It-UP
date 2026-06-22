import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Check, Sparkles, Navigation } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Free Site Estimation",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      console.log("=== DIG IT UP GROUNDWORKS: CONTACT INQUIRY RECEIVED ===");
      console.log("Contact form details submitted:", formData);
      console.log("Location marker assumed: Harwich, Essex");
      console.log("==================================================");
    }, 1100);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "Free Site Estimation",
      message: "",
    });
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="relative py-20 bg-[#0f1524]">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FACC15]">
            Get In Touch Today
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-1 tracking-tight">
            Contact Wayne Chambers
          </h2>
          <div className="h-1 w-20 bg-[#FACC15] mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Info & Map Placeholder */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6 space-y-5 text-left backdrop-blur-sm">
              <h3 className="font-display text-base font-bold text-white uppercase tracking-wider border-b border-gray-800 pb-3">
                Business Credentials
              </h3>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  id="contact-phone-link"
                  href="tel:+447787300827"
                  className="flex items-start gap-4 group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-900 border border-gray-800 text-[#FACC15] group-hover:bg-[#FACC15] group-hover:text-black transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Phone / WhatsApp</span>
                    <span className="block text-sm font-bold text-white group-hover:text-[#FACC15] transition-colors mt-0.5">
                      +44 7787 300827
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  id="contact-email-link"
                  href="mailto:hello@digitupgroundworks.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-900 border border-gray-800 text-[#FACC15] group-hover:bg-[#FACC15] group-hover:text-black transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Address</span>
                    <span className="block text-sm font-bold text-white group-hover:text-[#FACC15] transition-colors mt-0.5">
                      hello@digitupgroundworks.com
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-900 border border-gray-800 text-[#FACC15]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Service Hub</span>
                    <span className="block text-sm font-bold text-white mt-0.5">
                      Harwich, Essex, CO12
                    </span>
                    <span className="block text-xs text-indigo-300 font-light mt-0.5">Covering Colchester, Clacton, Tendring &amp; Suffolk Borders</span>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-900 border border-gray-800 text-[#FACC15]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Working Hours</span>
                    <span className="block text-sm font-bold text-white mt-0.5">
                      Always Open
                    </span>
                    <span className="block text-xs text-emerald-400 font-light mt-0.5">Available for emergencies 24/7</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Custom Styled Map Placeholder (High-Contrast Contractor Aesthetics) */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-[#0b0f19] h-60 w-full flex flex-col justify-between p-4 group">
              {/* Fake stylized grid background representing road network */}
              <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400 via-transparent to-transparent bg-[size:16px_16px]" style={{ backgroundImage: "radial-gradient(circle, #FACC15 1px, transparent 1px)" }} />
              
              {/* Styled Mock Landmass SVGs or outlines */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 80 Q 50 120 120 60 T 250 140 T 380 90" stroke="#FACC15" strokeWidth="4" strokeDasharray="5" />
                  <circle cx="120" cy="60" r="40" stroke="#FACC15" strokeWidth="1" />
                  <circle cx="250" cy="140" r="30" stroke="#FACC15" strokeWidth="1" />
                </svg>
              </div>

              {/* Pin Accent */}
              <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="relative">
                  <span className="absolute inset-x-0 bottom-0 h-4 w-4 bg-yellow-500/40 rounded-full animate-ping mx-auto" />
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#FACC15] text-black border-2 border-black font-extrabold shadow-lg">
                    🚧
                  </div>
                </div>
                <div className="mt-2.5 rounded-lg border border-[#FACC15]/40 bg-black/90 px-2.5 py-1 backdrop-blur-md shadow-xl text-[10px] font-bold text-[#FACC15] uppercase tracking-wider">
                  Harwich, Essex (CO12)
                </div>
              </div>

              {/* Label Info bar */}
              <div className="relative z-10 flex w-full items-center justify-between rounded-xl bg-gray-950/90 border border-gray-800 p-3 mt-auto backdrop-blur-xs">
                <div className="text-left">
                  <span className="block text-[9px] font-bold text-gray-500 uppercase tracking-widest leading-none">Map View</span>
                  <span className="block text-[11px] font-bold text-white mt-1 leading-none">Harwich &amp; Coastal Groundworks Hub</span>
                </div>
                <a
                  id="contact-map-directions"
                  href="https://maps.google.com/?q=Harwich,Essex"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 rounded-lg bg-gray-900 border border-gray-800 px-3 py-1.5 text-[10px] font-bold text-gray-300 hover:text-[#FACC15] hover:border-yellow-500/30 transition-all uppercase tracking-wider"
                >
                  <Navigation className="h-3 w-3 text-[#FACC15]" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

          </div>

          {/* Column 2: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-gray-800 bg-gray-900/20 p-6 md:p-8 text-left backdrop-blur-sm">
              
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">
                      Discuss Your Project Spec
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      Wayne monitors layout specs and addresses emails daily. Fill out the contact parameters below.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="contact-name-input"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-gray-800 bg-gray-950 px-4 py-2.5 text-xs text-white placeholder-gray-500 outline-none focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone-input"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +44 7787 300827"
                        className="w-full rounded-xl border border-gray-800 bg-gray-950 px-4 py-2.5 text-xs text-white placeholder-gray-500 outline-none focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="contact-email-input"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. hello@example.com"
                      className="w-full rounded-xl border border-gray-800 bg-gray-950 px-4 py-2.5 text-xs text-white placeholder-gray-500 outline-none focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                      Subject
                    </label>
                    <select
                      id="contact-subject-select"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-xl border border-gray-800 bg-gray-950 px-4 py-2.5 text-xs text-white outline-none focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] transition-all"
                    >
                      <option value="Free Site Estimation">Free Site Estimation</option>
                      <option value="General Machinery Inquiry">General Machinery Inquiry</option>
                      <option value="Sub-contracting Tender">Sub-contracting Tender</option>
                      <option value="Feedback / Question">Feedback / Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                      Project Schedule Details (Area size, Soil quality, Access limits) *
                    </label>
                    <textarea
                      id="contact-message-textarea"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly cover what you wish to excavate, lay down, pave or secure..."
                      className="w-full rounded-xl border border-gray-800 bg-gray-950 px-4 py-2.5 text-xs text-white placeholder-gray-500 outline-none focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FACC15] to-amber-500 px-6 py-3.5 text-xs font-bold text-black shadow-lg hover:brightness-110 active:scale-98 transition-all disabled:opacity-75 disabled:pointer-events-none"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
                          Sending Message Securely...
                        </>
                      ) : (
                        <>
                          <Send className="h-3.5 w-3.5" />
                          Send Message to Wayne
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Check className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">Inquiry Forwarded Successfully</h3>
                    <p className="text-xs text-gray-400 max-w-sm mx-auto mt-2">
                      Hi {formData.name}, Wayne Chambers has received your email message. We will look over the <strong className="text-white">{formData.subject}</strong> specifications and get in touch shortly.
                    </p>
                  </div>

                  <div className="flex justify-center pt-2">
                    <button
                      id="contact-reset-btn"
                      onClick={resetForm}
                      className="rounded-xl border border-gray-800 hover:border-gray-700 bg-gray-900 px-5 py-2.5 text-xs font-bold text-gray-400 hover:text-white transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
