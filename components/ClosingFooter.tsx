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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(82,43,91,0.35)_0%,rgba(43,18,76,0)_70%)] blur-[50px] z-0 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.1)_0%,transparent_60%)] blur-[40px] z-0 pointer-events-none" />

      <LuxuryPattern variant="islamic" opacity="opacity-[0.04]" />

      {/* Cinematic Final Arabesque Gate */}
      <div className="absolute inset-4 md:inset-8 border-x border-b border-[#D4AF37]/30 rounded-b-[50vw] md:rounded-b-full shadow-[0_0_120px_rgba(212,175,55,0.08)_inset] pointer-events-none z-0">
        <div className="absolute inset-3 border-x border-b border-[#D4AF37]/20 rounded-b-[50vw] md:rounded-b-full" />
        <div className="absolute inset-8 border-x border-b border-[#D4AF37]/10 rounded-b-[50vw] md:rounded-b-full" />
        
        {/* Bottom Arch Ornament */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-24 h-24 text-[#D4AF37]/40 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] rotate-180">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0 L65 35 L100 50 L65 65 L50 100 L35 65 L0 50 L35 35 Z" fill="currentColor" opacity="0.3"/>
            <path d="M50 15 L60 40 L85 50 L60 60 L50 85 L40 60 L15 50 L40 40 Z" fill="currentColor" opacity="0.6"/>
            <circle cx="50" cy="50" r="10" fill="currentColor"/>
          </svg>
        </div>
      </div>

      <div ref={contentRef} className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl w-full pt-10">
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent mb-16" />

        <p className="text-3xl md:text-5xl text-[#D4AF37]/60 leading-[2] mb-8 font-arabic drop-shadow-md">{arabicPrayer}</p>
        <p className="text-[#F5E6CA]/60 text-base md:text-xl italic mb-20 max-w-xl leading-loose font-cormorant">&ldquo;{prayerTranslation}&rdquo;</p>

        <p className="text-[#D4AF37]/50 text-xs md:text-sm tracking-[0.5em] uppercase mb-8 font-cinzel">Jazakumullahu Khairan</p>
        <p className="text-[#F5E6CA]/80 text-base md:text-lg leading-relaxed font-cormorant drop-shadow-sm">{closing}</p>

        <div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent my-20" />

        <p className="text-[#D4AF37] text-4xl md:text-6xl lg:text-7xl font-cinzel tracking-[0.05em] gold-glow pb-2">{coupleNames}</p>
        <p className="text-[#F5E6CA]/30 text-[10px] tracking-[0.4em] uppercase mt-16 font-cinzel border-t border-[#D4AF37]/10 pt-6 px-12">{credit}</p>
      </div>
    </section>
  );
}
