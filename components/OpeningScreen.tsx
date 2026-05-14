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
    gsap.fromTo(ref.current, { scaleX: 0 }, { scaleX: 1, duration: 2, ease: "power2.inOut", transformOrigin: "left center" });
  }, []);
  return (
    <div className="w-40 h-[1px] bg-white/[0.06] overflow-hidden rounded-full">
      <div ref={ref} className="w-full h-full bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37] to-[#D4AF37]/20 origin-left" style={{ transform: "scaleX(0)" }} />
    </div>
  );
}

export default function OpeningScreen({ onOpen, arabic, translation, instruction, guestName, guestTitle }: OpeningScreenProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const arabicRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setIsReady(true), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!isReady || !arabicRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(arabicRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" });
    });
    return () => ctx.revert();
  }, [isReady]);

  const handleOpen = () => {
    setIsClosing(true);
    setTimeout(onOpen, 1500);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1c0b33]"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c0b33] via-[#2B124C] to-[#1c0b33]" />

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,rgba(82,43,91,0.03)_40%,transparent_70%)]" />

        <LuxuryPattern variant="islamic" opacity="opacity-[0.03]" />

        <CurtainReveal />

        <div className="absolute inset-0 pointer-events-none z-10" aria-hidden="true">
          <div className="absolute inset-6 border border-[#D4AF37]/8 rounded-3xl" />
          <div className="absolute inset-8 border border-[#D4AF37]/4 rounded-2xl" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isClosing ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-20 flex flex-col items-center text-center px-6"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            className="w-28 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-10"
          />

          <h1 ref={arabicRef} className="text-3xl md:text-5xl lg:text-6xl text-[#D4AF37] leading-relaxed tracking-wider opacity-0 font-arabic gold-glow">
            {arabic}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isReady ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-6 text-sm md:text-base text-[#F5E6CA]/55 font-light tracking-wider max-w-md font-cormorant"
          >
            {translation}
          </motion.p>

          {guestName && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isReady ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-8"
            >
              <p className="text-[#D4AF37]/30 text-xs tracking-[0.4em] uppercase mb-1 font-cinzel">
                {guestTitle || "Untuk"}
              </p>
              <p className="text-[#F5E6CA]/70 text-xl md:text-2xl font-cormorant tracking-wide">
                {guestName}
              </p>
            </motion.div>
          )}

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isReady ? { scaleX: 1 } : {}}
            transition={{ delay: 1.2, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent my-10"
          />

          <CoupleIllustration delay={1.4} />

          <motion.div
            initial={{ opacity: 0 }}
            animate={isReady ? { opacity: 1 } : {}}
            transition={{ delay: 1.6, duration: 0.5 }}
            className="mt-8 mb-10"
          >
            <LoadingBar />
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={isReady ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2, duration: 0.8, ease: easeOutExpo }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleOpen}
            className="group relative px-12 py-3.5 overflow-hidden rounded-full border border-[#D4AF37]/20 bg-white/[0.03] hover:bg-[#D4AF37]/8 transition-all duration-400"
          >
            <span className="relative z-10 text-[#F5E6CA]/60 text-sm tracking-[0.3em] uppercase group-hover:text-[#F5E6CA]/90 transition-colors duration-400 font-cinzel">
              {instruction}
            </span>
          </motion.button>
        </motion.div>

        <FlowerCorner showGarland />
      </motion.div>
    </AnimatePresence>
  );
}