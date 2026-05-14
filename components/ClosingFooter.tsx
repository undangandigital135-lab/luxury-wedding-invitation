"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LuxuryPattern from "@/components/ui/LuxuryPattern";

gsap.registerPlugin(ScrollTrigger);

interface ClosingFooterProps {
  arabicPrayer: string;
  prayerTranslation: string;
  closing: string;
  credit: string;
  coupleNames: string;
}

export default function ClosingFooter({ arabicPrayer, prayerTranslation, closing, credit, coupleNames }: ClosingFooterProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(el.children, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true } });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1c0b33]">
      {/* Background Cinematic Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] md:w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(82,43,91,0.25)_0%,rgba(43,18,76,0)_70%)] blur-[40px] z-0 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_60%)] blur-[30px] z-0 pointer-events-none" />

      <LuxuryPattern variant="islamic" opacity="opacity-[0.04]" />

      {/* Cinematic Final Arabesque Gate */}
      <div className="absolute inset-4 md:inset-8 border-x border-b border-[#D4AF37]/25 rounded-b-[50vw] md:rounded-b-full pointer-events-none z-0">
        <div className="absolute inset-3 border-x border-b border-[#D4AF37]/15 rounded-b-[50vw] md:rounded-b-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-20 h-20 text-[#D4AF37]/30 rotate-180">
          <svg viewBox="0 0 100 100" fill="none">
            <path d="M50 0 L65 35 L100 50 L65 65 L50 100 L35 65 L0 50 L35 35 Z" fill="currentColor" opacity="0.3"/>
            <path d="M50 15 L60 40 L85 50 L60 60 L50 85 L40 60 L15 50 L40 40 Z" fill="currentColor" opacity="0.5"/>
          </svg>
        </div>
      </div>

      <div ref={contentRef} className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl w-full pt-10">
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent mb-12" />

        <p className="text-2xl md:text-4xl text-[#D4AF37]/60 leading-[2] mb-6 font-arabic">{arabicPrayer}</p>
        <p className="text-[#F5E6CA]/60 text-base md:text-lg italic mb-16 max-w-xl leading-relaxed font-cormorant">&ldquo;{prayerTranslation}&rdquo;</p>

        <p className="text-[#D4AF37]/50 text-xs md:text-sm tracking-[0.5em] uppercase mb-6 font-cinzel">Jazakumullahu Khairan</p>
        <p className="text-[#F5E6CA]/80 text-base md:text-lg leading-relaxed font-cormorant">{closing}</p>

        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent my-16" />

        <p className="text-[#D4AF37] text-3xl md:text-5xl lg:text-6xl font-cinzel tracking-[0.05em] gold-glow">{coupleNames}</p>
        <p className="text-[#F5E6CA]/30 text-xs tracking-[0.4em] uppercase mt-12 font-cinzel border-t border-[#D4AF37]/10 pt-5 px-8">{credit}</p>
      </div>
    </section>
  );
}
