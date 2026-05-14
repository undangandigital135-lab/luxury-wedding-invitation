"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import LuxuryPattern from "@/components/ui/LuxuryPattern";
import SectionGlow from "@/components/ui/SectionGlow";
import { subtitleVariants, titleVariants } from "@/lib/animations";
import { sectionPadding } from "@/lib/spacing";

interface RSVPProps {
  title: string;
  subtitle: string;
  intro: string;
  deadline: string;
  deadlinelabel: string;
  waNumber: string;
  waMessage: string;
  nameLabel: string;
  namePlaceholder: string;
  guestsLabel: string;
  attendanceLabel: string;
  attendanceOptions: string[];
  submitText: string;
  successMessage: string;
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[#D4AF37]/60 text-[10px] tracking-[0.25em] uppercase mb-3 font-cinzel drop-shadow-sm">{label}</label>
      {children}
    </div>
  );
}

export default function RSVP({
  title, subtitle, intro, deadline, deadlinelabel, waNumber, waMessage,
  nameLabel, namePlaceholder, guestsLabel, attendanceLabel, attendanceOptions,
  submitText, successMessage,
}: RSVPProps) {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("1");
  const [attendance, setAttendance] = useState(attendanceOptions[0]);
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    const msg = waMessage.replace("%NAME%", encodeURIComponent(name)).replace("%GUESTS%", encodeURIComponent(guests));
    window.open(`https://wa.me/${waNumber}?text=${msg}`, "_blank");
    setStatus("sent");
  };

  return (
    <SectionWrapper id="rsvp" className={`relative overflow-hidden ${sectionPadding.py}`}
      style={{ background: "linear-gradient(to bottom, #2B124C, #1c0b33)" }}
    >
      <SectionGlow color="rgba(212,175,55,0.06)" size="w-[800px] h-[800px]" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <LuxuryPattern variant="islamic" opacity="opacity-[0.03]" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-10 lg:px-16 pt-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.p variants={subtitleVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-[#D4AF37]/60 text-xs md:text-sm tracking-[0.5em] uppercase mb-6 font-cinzel drop-shadow-sm">
            {subtitle}
          </motion.p>
          <motion.h2 variants={titleVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-cinzel text-[#D4AF37] tracking-[0.02em] mb-6 gold-glow pb-2">
            {title}
          </motion.h2>
          
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 }} className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mx-auto mt-8 mb-8" />
          
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.8 }}
            className="text-[#F5E6CA]/60 text-base md:text-xl leading-[1.8] font-cormorant italic drop-shadow-md">
            {intro}
          </motion.p>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 1 }}
            className="text-[#D4AF37]/60 text-[10px] md:text-xs mt-8 tracking-[0.3em] font-cinzel uppercase">
            {deadlinelabel} <span className="text-[#D4AF37]">{deadline}</span>
          </motion.p>
        </div>

        <div className="relative rounded-[30px] p-8 md:p-14 bg-gradient-to-b from-white/[0.03] to-transparent border border-[#D4AF37]/20 shadow-[0_20px_50px_rgba(28,11,51,0.5)] backdrop-blur-md">
          {/* Inner Ornate Borders */}
          <div className="absolute inset-2 border border-[#D4AF37]/10 rounded-[22px] pointer-events-none" />
          <div className="absolute inset-0 rounded-[30px] bg-gradient-to-b from-[#D4AF37]/5 to-transparent pointer-events-none" />

          {status === "sent" ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center py-10 relative z-10">
              <div className="w-20 h-20 rounded-full border border-[#D4AF37]/30 bg-gradient-to-br from-[#D4AF37]/10 to-transparent flex items-center justify-center mx-auto mb-8 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <p className="text-[#F5E6CA]/90 text-lg md:text-xl leading-relaxed font-cormorant italic drop-shadow-md">{successMessage}</p>
              <button onClick={() => { setName(""); setGuests("1"); setAttendance(attendanceOptions[0]); setStatus("idle"); }}
                className="mt-10 text-[#D4AF37]/50 text-[10px] tracking-[0.3em] uppercase hover:text-[#D4AF37] transition-colors font-cinzel border-b border-[#D4AF37]/20 hover:border-[#D4AF37] pb-1">
                Send Another Response
              </button>
            </motion.div>
          ) : (
            <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              onSubmit={handleSubmit} className="space-y-8 relative z-10" noValidate>
              
              <FormField label={nameLabel}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={namePlaceholder} required aria-required="true"
                  className="w-full px-6 py-4 bg-[#1c0b33]/50 border border-[#D4AF37]/20 rounded-xl text-[#F5E6CA] text-base placeholder:text-[#F5E6CA]/20 focus:outline-none focus:border-[#D4AF37]/60 focus:bg-[#1c0b33]/80 transition-all duration-500 font-cormorant shadow-[0_5px_15px_rgba(0,0,0,0.2)_inset]" />
              </FormField>

              <FormField label={guestsLabel}>
                <select value={guests} onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-6 py-4 bg-[#1c0b33]/50 border border-[#D4AF37]/20 rounded-xl text-[#F5E6CA] text-base focus:outline-none focus:border-[#D4AF37]/60 focus:bg-[#1c0b33]/80 transition-all duration-500 appearance-none font-cormorant shadow-[0_5px_15px_rgba(0,0,0,0.2)_inset]">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n} className="bg-[#2B124C]">{n} {n > 1 ? "Guests" : "Guest"}</option>
                  ))}
                </select>
              </FormField>

              <FormField label={attendanceLabel}>
                <div className="flex gap-4">
                  {attendanceOptions.map((opt) => (
                    <button key={opt} type="button" onClick={() => setAttendance(opt)}
                      className={`flex-1 py-4 rounded-xl text-[10px] md:text-xs tracking-[0.2em] uppercase transition-all duration-500 font-cinzel ${
                        attendance === opt
                          ? "bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/10 border border-[#D4AF37]/50 text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.1)]"
                          : "bg-[#1c0b33]/50 border border-[#D4AF37]/10 text-[#F5E6CA]/40 hover:border-[#D4AF37]/30 hover:text-[#D4AF37]/60"
                      }`}>
                      {opt}
                    </button>
                  ))}
                </div>
              </FormField>

              <div className="pt-6">
                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="w-full py-5 rounded-xl bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/10 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] md:text-xs tracking-[0.3em] uppercase hover:from-[#D4AF37]/30 hover:to-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-500 font-cinzel shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                  {submitText}
                </motion.button>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
