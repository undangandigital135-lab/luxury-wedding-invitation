"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import CountdownTimer from "@/components/ui/CountdownTimer";
import LuxuryPattern from "@/components/ui/LuxuryPattern";
import SectionGlow from "@/components/ui/SectionGlow";
import { subtitleVariants, titleVariants } from "@/lib/animations";
import { sectionPadding } from "@/lib/spacing";

interface CountdownProps {
  title: string;
  subtitle: string;
  labels: { days: string; hours: string; minutes: string; seconds: string };
  message: string;
  weddingDateISO: string;
}

export default function Countdown({ title, subtitle, labels, message, weddingDateISO }: CountdownProps) {
  return (
    <SectionWrapper id="countdown" className={`relative overflow-hidden ${sectionPadding.py}`}
      style={{ background: "linear-gradient(to bottom, #1c0b33, #2B124C)" }}
    >
      <SectionGlow color="rgba(212,175,55,0.06)" size="w-[600px] h-[600px]" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <LuxuryPattern variant="islamic" opacity="opacity-[0.03]" />

      {/* Ornate Background Frame */}
      <div className="absolute inset-x-4 md:inset-x-12 top-12 bottom-12 border border-[#D4AF37]/10 rounded-t-[40vw] md:rounded-t-full pointer-events-none z-0 shadow-[0_0_80px_rgba(212,175,55,0.03)_inset]" />
      <div className="absolute inset-x-8 md:inset-x-20 top-20 bottom-20 border border-[#D4AF37]/5 rounded-t-[40vw] md:rounded-t-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 lg:px-16 text-center pt-10">
        <motion.p variants={subtitleVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-[#D4AF37]/60 text-xs md:text-sm tracking-[0.5em] uppercase mb-6 font-cinzel drop-shadow-md">
          {subtitle}
        </motion.p>

        <motion.h2 variants={titleVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-cinzel text-[#D4AF37] tracking-[0.02em] mb-24 gold-glow">
          {title}
        </motion.h2>

        <div className="relative inline-block">
          {/* Subtle glow behind timer */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(212,175,55,0.1)_0%,transparent_60%)] blur-[20px] -z-10" />
          <CountdownTimer weddingDateISO={weddingDateISO} labels={labels} />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1, ease: [0.33, 1, 0.68, 1] }}
          className="text-[#F5E6CA]/60 text-base md:text-xl mt-32 font-cormorant italic max-w-2xl mx-auto leading-[1.8] drop-shadow-lg"
        >
          {message}
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
