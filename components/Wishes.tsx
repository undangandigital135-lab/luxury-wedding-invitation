"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import LuxuryPattern from "@/components/ui/LuxuryPattern";
import SectionGlow from "@/components/ui/SectionGlow";
import { subtitleVariants, titleVariants } from "@/lib/animations";
import { sectionPadding } from "@/lib/spacing";

interface Wish {
  id: string;
  name: string;
  message: string;
  date: string;
}

const STORAGE_KEY = "wedding-wishes";

function loadWishes(): Wish[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveWishes(wishes: Wish[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(wishes));
  } catch {
    /* storage full */
  }
}

interface WishesProps {
  title: string;
  subtitle: string;
  intro: string;
}

export default function Wishes({ title, subtitle, intro }: WishesProps) {
  const [wishes, setWishes] = useState<Wish[]>(() => loadWishes());
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    const wish: Wish = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      date: new Date().toLocaleDateString("id-ID"),
    };
    const updated = [wish, ...wishes];
    setWishes(updated);
    saveWishes(updated);
    setName("");
    setMessage("");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <SectionWrapper id="wishes" className={`relative overflow-hidden ${sectionPadding.py}`}
      style={{ background: "linear-gradient(to bottom, #1c0b33, #2B124C)" }}
    >
      <SectionGlow color="rgba(212,175,55,0.06)" size="w-[800px] h-[800px]" className="top-1/4 right-0" />
      <SectionGlow color="rgba(82,43,91,0.08)" size="w-[600px] h-[600px]" className="bottom-1/3 left-0" />
      <LuxuryPattern variant="islamic" opacity="opacity-[0.03]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 pt-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.p variants={subtitleVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-[#D4AF37]/60 text-xs md:text-sm tracking-[0.5em] uppercase mb-6 font-cinzel drop-shadow-sm">
            {subtitle}
          </motion.p>
          <motion.h2 variants={titleVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-cinzel text-[#D4AF37] tracking-[0.02em] gold-glow pb-2">
            {title}
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 }} className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mx-auto mt-8 mb-8" />
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.8 }}
            className="text-[#F5E6CA]/60 text-base md:text-xl leading-[1.8] font-cormorant italic drop-shadow-md max-w-xl mx-auto">
            {intro}
          </motion.p>
        </div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="relative p-6 md:p-10 rounded-3xl bg-gradient-to-b from-[#D4AF37]/[0.02] to-transparent border border-[#D4AF37]/10 backdrop-blur-sm shadow-[0_20px_50px_rgba(28,11,51,0.5)] mb-20"
        >
          <div className="absolute inset-2 border border-[#D4AF37]/5 rounded-[20px] pointer-events-none" />
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label className="block text-[#D4AF37]/60 text-[10px] tracking-[0.25em] uppercase mb-3 font-cinzel drop-shadow-sm">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
                className="w-full px-6 py-4 bg-[#1c0b33]/50 border border-[#D4AF37]/20 rounded-xl text-[#F5E6CA] text-base placeholder:text-[#F5E6CA]/20 focus:outline-none focus:border-[#D4AF37]/60 focus:bg-[#1c0b33]/80 transition-all duration-500 font-cormorant shadow-[0_5px_15px_rgba(0,0,0,0.2)_inset]"
              />
            </div>
            <div>
              <label className="block text-[#D4AF37]/60 text-[10px] tracking-[0.25em] uppercase mb-3 font-cinzel drop-shadow-sm">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your wishes for the couple..."
                required
                rows={4}
                className="w-full px-6 py-4 bg-[#1c0b33]/50 border border-[#D4AF37]/20 rounded-xl text-[#F5E6CA] text-base placeholder:text-[#F5E6CA]/20 focus:outline-none focus:border-[#D4AF37]/60 focus:bg-[#1c0b33]/80 transition-all duration-500 font-cormorant resize-none shadow-[0_5px_15px_rgba(0,0,0,0.2)_inset]"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 rounded-xl bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/10 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] md:text-xs tracking-[0.3em] uppercase hover:from-[#D4AF37]/30 hover:to-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-500 font-cinzel shadow-[0_0_20px_rgba(212,175,55,0.1)] mt-2"
            >
              {sent ? "Sent!" : "Send Wishes"}
            </motion.button>
          </form>
        </motion.div>

        {/* Wishes list */}
        <div className="space-y-6 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#D4AF37]/20 via-[#D4AF37]/5 to-transparent -translate-x-1/2 -z-10" />
          {wishes.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-[#F5E6CA]/40 text-base md:text-lg font-cormorant italic"
            >
              Be the first to send wishes...
            </motion.p>
          ) : (
            wishes.slice(0, 20).map((w, i) => (
              <motion.div
                key={w.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                className="p-6 md:p-8 rounded-2xl border border-[#D4AF37]/10 bg-white/[0.02] backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:border-[#D4AF37]/20 transition-colors duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-cinzel text-xs">
                      {w.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-[#D4AF37] text-lg font-cinzel tracking-wider drop-shadow-sm">{w.name}</span>
                  </div>
                  <span className="text-[#F5E6CA]/40 text-xs font-cormorant italic md:text-right">{w.date}</span>
                </div>
                <p className="text-[#F5E6CA]/80 text-base md:text-lg font-cormorant leading-relaxed italic border-l-2 border-[#D4AF37]/20 pl-4 py-1 ml-4 mt-2">&ldquo;{w.message}&rdquo;</p>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
