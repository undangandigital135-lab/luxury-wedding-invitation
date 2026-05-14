"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import LuxuryPattern from "@/components/ui/LuxuryPattern";
import SectionGlow from "@/components/ui/SectionGlow";
import { subtitleVariants, titleVariants } from "@/lib/animations";
import { sectionPadding } from "@/lib/spacing";

interface PersonData {
  name: string;
  fullName: string;
  description: string;
  qualities: string[];
  parents: string;
  order: string;
}

interface BrideGroomProps {
  sectionTitle: string;
  sectionSubtitle: string;
  bride: PersonData;
  groom: PersonData;
  dividerText: string;
}

function QualityBadge({ text }: { text: string }) {
  return (
    <span className="inline-block px-4 py-1.5 text-[10px] tracking-[0.25em] uppercase border border-[#D4AF37]/20 rounded-full text-[#D4AF37]/80 font-cinzel bg-gradient-to-r from-[#D4AF37]/5 to-transparent">
      {text}
    </span>
  );
}

function PersonCard({ person, side }: { person: PersonData; side: "left" | "right" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: side === "left" ? 0 : 0.15, ease: [0.33, 1, 0.68, 1] }}
      className={`flex ${side === "left" ? "md:text-right md:items-end" : "md:text-left md:items-start"} flex-col items-center md:items-stretch text-center relative gpu`}
    >
      <div className={`relative w-40 h-40 md:w-56 md:h-56 mb-6 md:mb-8 ${side === "left" ? "md:ml-auto" : "md:mr-auto"}`}>
        <div className="absolute inset-0 rounded-full border-[2px] border-[#D4AF37]/15" />
        <div className="absolute inset-[6px] rounded-full border-[1px] border-[#D4AF37]/10" />
        <div className="absolute inset-[12px] rounded-full bg-gradient-to-br from-[#2B124C] via-[#3D1A5A] to-[#1c0b33] flex items-center justify-center">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[#D4AF37]/30">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      </div>

      <h3 className="text-2xl md:text-4xl font-cinzel text-[#D4AF37] tracking-[0.08em] gold-glow mb-1">{person.name}</h3>
      <p className="text-[#F5E6CA]/70 text-xs md:text-sm tracking-[0.15em] font-cormorant italic mb-4">{person.fullName}</p>

      <div className={`w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mb-4 ${side === "left" ? "md:ml-auto" : "md:mr-auto"}`} />

      <p className="text-[#D4AF37]/50 text-[9px] md:text-xs tracking-[0.25em] uppercase mb-1 font-cinzel">{person.parents}</p>
      <p className="text-[#F5E6CA]/40 text-xs md:text-sm tracking-[0.05em] mb-5 font-cormorant italic">{person.order}</p>

      <p className="text-[#F5E6CA]/60 text-sm md:text-base leading-[1.7] max-w-xs mb-5 font-cormorant">{person.description}</p>

      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
        {person.qualities.map((q) => (
          <QualityBadge key={q} text={q} />
        ))}
      </div>
    </motion.div>
  );
}

export default function BrideGroom({ sectionTitle, sectionSubtitle, bride, groom, dividerText }: BrideGroomProps) {
  return (
    <SectionWrapper id="bride-groom" className={`relative overflow-hidden ${sectionPadding.py}`}
      style={{ background: "linear-gradient(to bottom, #1c0b33, #2B124C)" }}
    >
      <LuxuryPattern variant="islamic" opacity="opacity-[0.02]" />
      <SectionGlow color="rgba(212,175,55,0.06)" size="w-[800px] h-[800px]" className="top-1/4 left-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pt-20">
        <div className="text-center mb-24 md:mb-32">
          <motion.p variants={subtitleVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-[#D4AF37]/60 text-xs md:text-sm tracking-[0.5em] uppercase mb-4 font-cinzel gpu">
            {sectionSubtitle}
          </motion.p>
          <motion.h2 variants={titleVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-cinzel text-[#D4AF37] tracking-[0.02em] gold-glow gpu">
            {sectionTitle}
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }} className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mx-auto mt-8 gpu" />
        </div>

        {/* Mobile: stacked, Desktop: side-by-side */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-center gap-10 md:gap-16 lg:gap-24">
          <PersonCard person={bride} side="left" />

          {/* Divine connector */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex md:flex-col items-center justify-center text-[#D4AF37]/20 shrink-0 py-2 md:py-0"
          >
            <div className="hidden md:block w-[1px] h-24 bg-gradient-to-b from-transparent via-[#D4AF37]/25 to-transparent" />
            <svg width="36" height="36" viewBox="0 0 100 100" fill="none" className="mx-4 md:my-4">
              <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" fill="currentColor" opacity="0.3"/>
              <path d="M50 20 L55 45 L80 50 L55 55 L50 80 L45 55 L20 50 L45 45 Z" fill="currentColor" opacity="0.5"/>
            </svg>
            <div className="hidden md:block w-[1px] h-24 bg-gradient-to-b from-transparent via-[#D4AF37]/25 to-transparent" />
          </motion.div>

          <PersonCard person={groom} side="right" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
          className="text-center mt-24 md:mt-32 max-w-2xl mx-auto gpu"
        >
          <span className="absolute -top-8 -left-2 text-4xl text-[#D4AF37]/10 font-serif leading-none">&quot;</span>
          <p className="text-[#F5E6CA]/60 text-base md:text-lg italic leading-[1.8] font-cormorant px-6">
            &ldquo;{dividerText}&rdquo;
          </p>
          <span className="absolute -bottom-8 -right-2 text-4xl text-[#D4AF37]/10 font-serif leading-none">&quot;</span>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}