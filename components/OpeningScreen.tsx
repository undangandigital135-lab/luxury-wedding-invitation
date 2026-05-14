"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import LuxuryPattern from "@/components/ui/LuxuryPattern";
import CurtainReveal from "@/components/ui/CurtainReveal";
import FlowerCorner from "@/components/ui/FlowerCorner";
import CoupleIllustration from "@/components/ui/CoupleIllustration";
import { easeOutExpo } from "@/lib/animations";

interface OpeningScreenProps {
  onOpen: () => void;
  arabic: string;
  translation: string;
  instruction: string;
  guestName?: string;
  guestTitle?: string;
}

function LoadingBar() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current, { scaleX: 0 }, { scaleX: 1, duration: 2.5, ease: "power2.inOut", transformOrigin: "left center" });
  }, []);
  return (
    <div className="w-48 h-[1px] bg-white/[0.06] overflow-hidden rounded-full">
      <div ref={ref} className="w-full h-full bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37] to-[#D4AF37]/20 origin-left" style={{ transform: "scaleX(0)" }} />
    </div>
  );
}

export default function OpeningScreen({ onOpen, arabic, translation, instruction, guestName, guestTitle }: OpeningScreenProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const arabicRef = useRef<HTMLHeadingElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setIsReady(true), 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!isReady || !arabicRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(arabicRef.current, { opacity: 0, y: 40, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 2, ease: "power3.out" });
    });
    return () => ctx.revert();
  }, [isReady]);

  useEffect(() => {
    if (!glowRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(glowRef.current, { scale: 1.1, opacity: 0.6, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
    });
    return () => ctx.revert();
  }, []);

  const handleOpen = () => {
    setIsClosing(true);
    setTimeout(onOpen, 1800);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.08 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1c0b33]"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c0b33] via-[#2B124C] to-[#1c0b33]" />

        {/* Ambient glows */}
        <div ref={glowRef} className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full" style={{ background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, rgba(82,43,91,0.06) 40%, transparent 70%)" }} />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(82,43,91,0.08) 0%, transparent 70%)" }} />

        <LuxuryPattern variant="islamic" opacity="opacity-[0.03]" />

        {/* Curtain reveal — covers content then slides open */}
        <CurtainReveal />

        {/* Frame */}
        <div className="absolute inset-0 pointer-events-none z-10" aria-hidden="true">
          <svg className="absolute top-6 left-6 w-16 h-16 text-[#D4AF37]/12" viewBox="0 0 64 64" fill="none">
            <path d="M2 2h22v3H5v19H2V2z" fill="currentColor" />
            <path d="M62 2H40v3h19v19h3V2z" fill="currentColor" />
            <path d="M32 6l7 14-7 7-7-14 7-7z" fill="currentColor" fillOpacity="0.3" />
          </svg>
          <svg className="absolute bottom-6 right-6 w-16 h-16 text-[#D4AF37]/12 rotate-180" viewBox="0 0 64 64" fill="none">
            <path d="M2 2h22v3H5v19H2V2z" fill="currentColor" />
            <path d="M62 2H40v3h19v19h3V2z" fill="currentColor" />
            <path d="M32 6l7 14-7 7-7-14 7-7z" fill="currentColor" fillOpacity="0.3" />
          </svg>
          <div className="absolute inset-5 border border-[#D4AF37]/8 rounded-3xl" />
          <div className="absolute inset-7 border border-[#D4AF37]/4 rounded-2xl" />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isClosing ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-20 flex flex-col items-center text-center px-6"
        >
          {/* Top gold line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 1.8, ease: [0.19, 1, 0.22, 1] }}
            className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-14"
          />

          {/* Arabic Bismillah */}
          <h1 ref={arabicRef} className="text-4xl md:text-6xl lg:text-7xl text-[#D4AF37] leading-relaxed tracking-wider opacity-0 font-arabic gold-glow">
            {arabic}
          </h1>

          {/* Translation */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isReady ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 1 }}
            className="mt-8 text-sm md:text-base text-[#F5E6CA]/55 font-light tracking-wider max-w-md font-cormorant"
          >
            {translation}
          </motion.p>

          {/* Guest name */}
          {guestName && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isReady ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.3, duration: 1 }}
              className="mt-10"
            >
              <p className="text-[#D4AF37]/30 text-xs tracking-[0.4em] uppercase mb-2 font-cinzel">
                {guestTitle || "Untuk"}
              </p>
              <p className="text-[#F5E6CA]/70 text-2xl md:text-3xl font-cormorant tracking-wide">
                {guestName}
              </p>
            </motion.div>
          )}

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isReady ? { scaleX: 1 } : {}}
            transition={{ delay: 1.6, duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
            className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent my-14"
          />

          {/* Couple illustration */}
          <CoupleIllustration delay={1.8} />

          {/* Loading bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isReady ? { opacity: 1 } : {}}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="mt-10 mb-14"
          >
            <LoadingBar />
          </motion.div>

          {/* Open button */}
          <motion.button
            initial={{ opacity: 0, y: 25 }}
            animate={isReady ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2.7, duration: 1, ease: easeOutExpo }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpen}
            className="group relative px-16 py-4.5 overflow-hidden rounded-full border border-[#D4AF37]/20 bg-white/[0.03] backdrop-blur-sm hover:bg-[#D4AF37]/8 transition-all duration-700 shadow-[0_0_20px_rgba(212,175,55,0.05)]"
          >
            <span className="relative z-10 text-[#F5E6CA]/60 text-sm tracking-[0.3em] uppercase group-hover:text-[#F5E6CA]/90 transition-colors duration-500 font-cinzel">
              {instruction}
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/8 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "400%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
            />
          </motion.button>
        </motion.div>

        {/* Corner flowers */}
        <FlowerCorner showGarland />
      </motion.div>
    </AnimatePresence>
  );
}
