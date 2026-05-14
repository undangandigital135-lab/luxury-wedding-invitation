"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import LuxuryPattern from "@/components/ui/LuxuryPattern";
import SectionGlow from "@/components/ui/SectionGlow";
import { subtitleVariants, titleVariants } from "@/lib/animations";
import { sectionPadding } from "@/lib/spacing";

interface DigitalGiftProps {
  title: string;
  subtitle: string;
  intro: string;
  message: string;
  bankName: string;
  accountNumber: string;
  accountName: string;
  copyButton: string;
  copiedText: string;
}

export default function DigitalGift({ title, subtitle, intro, message, bankName, accountNumber, accountName, copyButton, copiedText }: DigitalGiftProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(accountNumber); setCopied(true); setTimeout(() => setCopied(false), 2500); } catch { /* */ }
  };

  return (
    <SectionWrapper id="gift" className={`relative overflow-hidden ${sectionPadding.py}`}
      style={{ background: "linear-gradient(to bottom, #1c0b33, #2B124C)" }}
    >
      <SectionGlow color="rgba(212,175,55,0.08)" size="w-[800px] h-[800px]" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <SectionGlow color="rgba(82,43,91,0.06)" size="w-[600px] h-[600px]" className="bottom-0 right-0" />
      <LuxuryPattern variant="islamic" opacity="opacity-[0.03]" />

      <div className="relative z-10 max-w-lg mx-auto px-6 md:px-8 pt-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.p variants={subtitleVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-[#D4AF37]/60 text-xs md:text-sm tracking-[0.5em] uppercase mb-6 font-cinzel drop-shadow-sm">
            {subtitle}
          </motion.p>
          <motion.h2 variants={titleVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-5xl md:text-6xl font-cinzel text-[#D4AF37] tracking-[0.02em] mb-6 gold-glow pb-2">
            {title}
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 }} className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mx-auto mt-8 mb-8" />
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.8 }}
            className="text-[#F5E6CA]/60 text-base md:text-xl leading-[1.8] font-cormorant italic drop-shadow-md">
            {intro}
          </motion.p>
        </div>

        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 1 }}
          className="text-[#F5E6CA]/70 text-sm md:text-base text-center mb-12 leading-relaxed font-cormorant italic">
          {message}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
          className="group relative p-8 md:p-12 lg:p-14 rounded-[30px] border border-[#D4AF37]/20 bg-gradient-to-b from-[#D4AF37]/[0.03] to-transparent backdrop-blur-md hover:border-[#D4AF37]/40 transition-all duration-700 shadow-[0_20px_50px_rgba(28,11,51,0.5)]">
          
          <div className="absolute inset-2 border border-[#D4AF37]/10 rounded-[22px] pointer-events-none group-hover:border-[#D4AF37]/20 transition-colors duration-700" />
          
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-transparent border border-[#D4AF37]/30 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-shadow duration-700">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5">
                <rect x="2" y="8" width="20" height="14" rx="2" /><path d="M12 2L2 8h20L12 2z" /><line x1="12" y1="12" x2="12" y2="16" /><line x1="8" y1="12" x2="8" y2="16" /><line x1="16" y1="12" x2="16" y2="16" />
              </svg>
            </div>
          </div>
          
          <p className="text-[#F5E6CA]/60 text-sm md:text-base text-center mb-2 tracking-[0.2em] font-cinzel uppercase">{bankName}</p>
          <p className="text-[#D4AF37] text-center text-2xl md:text-3xl tracking-[0.1em] mb-2 font-cinzel drop-shadow-md">{accountNumber}</p>
          <p className="text-[#F5E6CA]/50 text-xs md:text-sm text-center mb-10 font-cormorant italic tracking-wide">a.n. {accountName}</p>
          
          <button onClick={handleCopy}
            className="w-full py-4 rounded-xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/10 to-transparent text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase hover:bg-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-500 font-cinzel shadow-[0_0_15px_rgba(212,175,55,0.05)]"
            aria-label={copied ? copiedText : copyButton}>
            {copied ? (
              <span className="text-[#F5E6CA] flex items-center justify-center gap-3 drop-shadow-md">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                {copiedText}
              </span>
            ) : copyButton}
          </button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
