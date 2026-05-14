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

const heroParticles = Array.from({ length: 12 }, (_, i) => ({
  key: i,
  left: `${(i * 28 + 7) % 100}%`,
  top: `${(i * 33 + 3) % 100}%`,
  size: 1.5 + (i % 2) * 0.8,
  duration: 12 + (i % 3),
  delay: (i * 0.5) % 5,
}));

function HeroParticlesGold() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
      {heroParticles.map((p) => (
        <motion.div
          key={p.key}
          className="absolute rounded-full"
          style={{
            left: p.left, top: p.top, width: p.size, height: p.size,
            background: "radial-gradient(circle, rgba(212,175,55,0.5) 0%, rgba(212,175,55,0.1) 50%, transparent 80%)",
          }}
          animate={{ y: [-15, 15, -15], opacity: [0.1, 0.4, 0.1] }}
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
        transition={{ duration: 1.5, ease: easeOutExpo }}
        className="relative w-[90vw] md:w-full max-w-5xl h-[90vh] border-x border-t border-[#D4AF37]/20 rounded-t-[50vw] md:rounded-t-full"
      >
        <div className="absolute inset-3 border-x border-t border-[#D4AF37]/12 rounded-t-[50vw] md:rounded-t-full" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] md:w-[350px] h-[150px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] blur-lg" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-[#D4AF37]/25">
          <svg viewBox="0 0 100 100" fill="none">
            <path d="M50 0 L65 35 L100 50 L65 65 L50 100 L35 65 L0 50 L35 35 Z" fill="currentColor" opacity="0.3"/>
            <path d="M50 15 L60 40 L85 50 L60 60 L50 85 L40 60 L15 50 L40 40 Z" fill="currentColor" opacity="0.5"/>
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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#2B124C]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c0b33] via-[#2B124C] to-[#1c0b33]" />

      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] md:w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(82,43,91,0.2)_0%,rgba(43,18,76,0)_70%)] blur-[40px]" />
        <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_60%)] blur-[30px]" />
      </div>

      <LuxuryPattern variant="islamic" opacity="opacity-[0.03]" />
      <HeroParticlesGold />
      <ArabesqueGate />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(28,11,51,0.6)_100%)] pointer-events-none z-0" />

      <motion.div
        ref={contentRef}
        style={{ y }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl w-full pt-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeOutExpo }}
          className="text-[#D4AF37]/50 text-sm md:text-base tracking-[0.5em] uppercase mb-10 font-cinzel"
        >
          {greeting}
        </motion.p>

        {guestName && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: easeOutExpo }}
            className="mb-12 bg-[#522B5B]/10 px-8 py-4 rounded-2xl border border-[#D4AF37]/10"
          >
            <p className="text-[#F5E6CA]/40 text-xs tracking-[0.45em] uppercase mb-2 font-cinzel">{guestTitle}</p>
            <h2 className="text-[#F5E6CA] text-xl md:text-2xl font-light font-cormorant italic">{guestName}</h2>
          </motion.div>
        )}

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: easeOutExpo }}
          className="w-28 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-8"
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: easeOutExpo }}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] font-cinzel text-[#D4AF37] tracking-[0.04em] leading-[1.1] gold-glow pb-2"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: easeOutExpo }}
          className="mt-6 text-[#F5E6CA]/60 text-base md:text-lg font-cormorant tracking-[0.5em] uppercase italic"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.1, ease: easeOutExpo }}
          className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mt-12 mb-8"
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease: easeOutExpo }}
          className="max-w-2xl relative"
        >
          <span className="absolute -top-6 -left-4 text-5xl text-[#D4AF37]/10 font-serif leading-none">&quot;</span>
          <p className="text-[#F5E6CA]/70 text-sm md:text-lg leading-relaxed font-cormorant italic px-4">&ldquo;{verse}&rdquo;</p>
          <span className="absolute -bottom-8 -right-4 text-5xl text-[#D4AF37]/10 font-serif leading-none">&quot;</span>
          <p className="text-[#D4AF37]/50 text-xs md:text-sm mt-4 tracking-[0.3em] font-cinzel">{verseReference}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute -bottom-12 md:-bottom-20 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="flex flex-col items-center gap-2">
            <span className="text-[#F5E6CA]/30 text-[10px] tracking-[0.4em] uppercase font-cinzel">{scrollHint}</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-[#D4AF37]/30 via-[#D4AF37]/10 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}