"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LuxuryPattern from "@/components/ui/LuxuryPattern";
import { easeOutExpo } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  greeting: string;
  guestTitle: string;
  guestName: string;
  title: string;
  subtitle: string;
  verse: string;
  verseReference: string;
  scrollHint: string;
}

// Deterministic floating particles for immersive cinematic hero
const heroParticles = Array.from({ length: 15 }, (_, i) => ({
  key: i,
  left: `${(i * 23 + 7) % 100}%`,
  top: `${(i * 29 + 3) % 100}%`,
  size: 1.5 + (i % 2) * 0.8,
  duration: 10 + (i % 4),
  delay: (i * 0.4) % 5,
}));

function HeroParticlesGold() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
      {heroParticles.map((p) => (
        <motion.div
          key={p.key}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: "radial-gradient(circle, rgba(212,175,55,0.6) 0%, rgba(212,175,55,0.15) 50%, transparent 80%)",
            boxShadow: `0 0 ${p.size * 2}px rgba(212,175,55,0.3)`,
          }}
          animate={{ y: [-20, 20, -20], opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function ArabesqueGate() {
  return (
    <div className="absolute inset-0 pointer-events-none flex justify-center items-end overflow-hidden z-0" aria-hidden="true">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: easeOutExpo }}
        className="relative w-[92vw] md:w-full max-w-5xl h-[92vh] border-x border-t border-[#D4AF37]/25 rounded-t-[50vw] md:rounded-t-full"
      >
        <div className="absolute inset-3 border-x border-t border-[#D4AF37]/15 rounded-t-[50vw] md:rounded-t-full" />
        <div className="absolute inset-8 border-x border-t border-[#D4AF37]/8 rounded-t-[50vw] md:rounded-t-full" />
        
        {/* Gate glowing corona */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] md:w-[400px] h-[200px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)] blur-xl" />

        {/* Top Arch Ornament */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-[#D4AF37]/30">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0 L65 35 L100 50 L65 65 L50 100 L35 65 L0 50 L35 35 Z" fill="currentColor" opacity="0.3"/>
            <path d="M50 15 L60 40 L85 50 L60 60 L50 85 L40 60 L15 50 L40 40 Z" fill="currentColor" opacity="0.6"/>
            <circle cx="50" cy="50" r="10" fill="currentColor"/>
          </svg>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero({ greeting, guestTitle, guestName, title, subtitle, verse, verseReference, scrollHint }: HeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.to(contentRef.current, { 
          opacity: 0.3, 
          ease: "none", 
          scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom 40%", scrub: 1 } 
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#2B124C]">
      {/* Deep Background Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c0b33] via-[#2B124C] to-[#1c0b33]" />

      {/* Static Lighting */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(82,43,91,0.25)_0%,rgba(43,18,76,0)_70%)] blur-[50px]" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_60%)] blur-[40px]" />
        <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-[radial-gradient(circle,rgba(133,79,108,0.12)_0%,transparent_60%)] blur-[40px]" />
      </div>

      <LuxuryPattern variant="islamic" opacity="opacity-[0.03]" />
      <HeroParticlesGold />
      <ArabesqueGate />

      {/* Vignette Shadow for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(28,11,51,0.7)_100%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1c0b33] via-transparent to-transparent opacity-80 pointer-events-none z-0" />

      {/* Cinematic Content */}
      <motion.div 
        ref={contentRef}
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl w-full pt-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: easeOutExpo }}
          className="text-[#D4AF37]/50 text-xs md:text-sm tracking-[0.5em] uppercase mb-12 font-cinzel"
        >
          {greeting}
        </motion.p>

        {guestName && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: easeOutExpo }}
            className="mb-16 backdrop-blur-sm bg-[#522B5B]/10 px-8 py-5 rounded-2xl border border-[#D4AF37]/10"
          >
            <p className="text-[#F5E6CA]/40 text-xs tracking-[0.45em] uppercase mb-3 font-cinzel">{guestTitle}</p>
            <h2 className="text-[#F5E6CA] text-2xl md:text-3xl font-light font-cormorant italic">{guestName}</h2>
          </motion.div>
        )}

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.7, ease: easeOutExpo }}
          className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-10"
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8, ease: easeOutExpo }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-cinzel text-[#D4AF37] tracking-[0.04em] leading-[1.1] gold-glow pb-2"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.1, ease: easeOutExpo }}
          className="mt-6 text-[#F5E6CA]/60 text-base md:text-xl font-cormorant tracking-[0.5em] uppercase italic"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.3, ease: easeOutExpo }}
          className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mt-14 mb-10"
        />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5, ease: easeOutExpo }}
          className="max-w-2xl relative"
        >
          <span className="absolute -top-8 -left-6 text-6xl text-[#D4AF37]/10 font-serif leading-none">&quot;</span>
          <p className="text-[#F5E6CA]/70 text-sm md:text-lg leading-loose font-cormorant italic px-4">&ldquo;{verse}&rdquo;</p>
          <span className="absolute -bottom-10 -right-6 text-6xl text-[#D4AF37]/10 font-serif leading-none">&quot;</span>
          <p className="text-[#D4AF37]/50 text-[10px] md:text-xs mt-6 tracking-[0.3em] font-cinzel">{verseReference}</p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute -bottom-12 md:-bottom-24 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="flex flex-col items-center gap-3">
            <span className="text-[#F5E6CA]/30 text-[10px] tracking-[0.4em] uppercase font-cinzel">{scrollHint}</span>
            <div className="w-[1px] h-10 bg-gradient-to-b from-[#D4AF37]/30 via-[#D4AF37]/10 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
