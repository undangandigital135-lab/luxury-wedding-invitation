"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import LuxuryPattern from "@/components/ui/LuxuryPattern";
import SectionGlow from "@/components/ui/SectionGlow";
import { subtitleVariants, titleVariants, cardVariants } from "@/lib/animations";
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

function QualityBadge({ text, index }: { text: string; index: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.8 + index * 0.15, ease: [0.33, 1, 0.68, 1] }}
      className="inline-block px-5 py-2 text-[10px] tracking-[0.25em] uppercase border border-[#D4AF37]/20 rounded-full text-[#D4AF37]/80 font-cinzel bg-gradient-to-r from-[#D4AF37]/5 to-transparent shadow-[0_0_10px_rgba(212,175,55,0.05)]"
    >
      {text}
    </motion.span>
  );
}

function PersonCard({ person, index }: { person: PersonData; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col items-center text-center relative p-8 md:p-12 rounded-[40px] bg-white/[0.01] border border-white/[0.03] shadow-[0_0_30px_rgba(43,18,76,0.4)]"
    >
      {/* Decorative inner border */}
      <div className="absolute inset-4 rounded-[28px] border border-[#D4AF37]/10 pointer-events-none" />

      <div className="relative w-56 h-56 md:w-72 md:h-72 mb-12 group">
        {/* Cinematic glow ring */}
        <div className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.1)_0%,transparent_70%)] opacity-40 group-hover:opacity-80 blur-xl transition-all duration-500" />
        
        {/* Layered borders */}
        <div className="absolute inset-0 rounded-full border-[2px] border-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 transition-colors duration-500" />
        <div className="absolute inset-[8px] rounded-full border-[1px] border-[#D4AF37]/15" />
        
        {/* Avatar background */}
        <div className="absolute inset-[16px] rounded-full bg-gradient-to-br from-[#2B124C] via-[#3D1A5A] to-[#1c0b33] flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.08)] group-hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] transition-all duration-500">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[#D4AF37]/30 drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      </div>

      <h3 className="text-4xl md:text-5xl font-cinzel text-[#D4AF37] tracking-[0.08em] gold-glow mb-2">{person.name}</h3>
      <p className="text-[#F5E6CA]/70 text-sm md:text-lg tracking-[0.2em] font-cormorant italic drop-shadow-md">{person.fullName}</p>

      <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent my-8" />

      <p className="text-[#D4AF37]/60 text-[10px] md:text-xs tracking-[0.3em] uppercase mb-2 font-cinzel">{person.parents}</p>
      <p className="text-[#F5E6CA]/40 text-xs md:text-sm tracking-[0.1em] mb-10 font-cormorant italic">{person.order}</p>

      <p className="text-[#F5E6CA]/60 text-sm md:text-base leading-[2] max-w-sm mb-10 font-cormorant">{person.description}</p>

      <div className="flex flex-wrap justify-center gap-3">
        {person.qualities.map((q, i) => (
          <QualityBadge key={q} text={q} index={i} />
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
      
      {/* Cinematic Lighting */}
      <SectionGlow color="rgba(212,175,55,0.06)" size="w-[800px] h-[800px]" className="top-1/4 left-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 lg:px-16 pt-20">
        <div className="text-center mb-32 md:mb-48">
          <motion.p variants={subtitleVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-[#D4AF37]/60 text-xs md:text-sm tracking-[0.5em] uppercase mb-6 font-cinzel drop-shadow-sm">
            {sectionSubtitle}
          </motion.p>
          <motion.h2 variants={titleVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-cinzel text-[#D4AF37] tracking-[0.02em] gold-glow pb-2">
            {sectionTitle}
          </motion.h2>
          
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 }} className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mx-auto mt-12" />
        </div>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-8 items-center">
          <PersonCard person={bride} index={0} />
          
          {/* Middle decorative connector for desktop */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.8 }}
            className="hidden lg:flex flex-col items-center justify-center text-[#D4AF37]/20"
          >
            <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent" />
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" className="my-6">
              <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" fill="currentColor" opacity="0.3"/>
              <path d="M50 20 L55 45 L80 50 L55 55 L50 80 L45 55 L20 50 L45 45 Z" fill="currentColor" opacity="0.6"/>
            </svg>
            <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent" />
          </motion.div>

          {/* Mobile connector */}
          <div className="lg:hidden flex justify-center py-4 text-[#D4AF37]/20">
             <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
              <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" fill="currentColor" opacity="0.3"/>
            </svg>
          </div>

          <PersonCard person={groom} index={1} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="text-center mt-32 md:mt-48 relative max-w-2xl mx-auto"
        >
          <span className="absolute -top-10 -left-4 text-5xl text-[#D4AF37]/10 font-serif leading-none">&quot;</span>
          <p className="text-[#F5E6CA]/60 text-lg md:text-xl italic leading-[2] font-cormorant drop-shadow-lg px-8">
            &ldquo;{dividerText}&rdquo;
          </p>
          <span className="absolute -bottom-10 -right-4 text-5xl text-[#D4AF37]/10 font-serif leading-none">&quot;</span>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
