"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedBackground() {
  const g1 = useRef<HTMLDivElement>(null);
  const g2 = useRef<HTMLDivElement>(null);
  const g3 = useRef<HTMLDivElement>(null);
  const g4 = useRef<HTMLDivElement>(null);
  const g5 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      [
        { ref: g1, x: 120, y: -100, scale: 1.3, dur: 22, del: 0 },
        { ref: g2, x: -100, y: 150, scale: 1.4, dur: 28, del: 5 },
        { ref: g3, x: 80, y: 120, scale: 1.2, dur: 25, del: 2 },
        { ref: g4, x: -120, y: -80, scale: 1.5, dur: 32, del: 8 },
        { ref: g5, x: 0, y: -150, scale: 1.1, dur: 20, del: 4 },
      ].forEach(({ ref, x, y, scale, dur, del }) => {
        if (ref.current) gsap.to(ref.current, { x, y, scale, opacity: 0.6, duration: dur, repeat: -1, yoyo: true, ease: "sine.inOut", delay: del });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen bg-[#1c0b33]" aria-hidden="true">
      {/* Base deep background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(43,18,76,0.8)_0%,rgba(28,11,51,1)_100%)]" />

      {/* Cinematic Glowing Orbs */}
      <div ref={g1} className="absolute top-0 -left-1/4 w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle,rgba(82,43,91,0.15)_0%,transparent_60%)] blur-[80px]" />
      <div ref={g2} className="absolute bottom-0 -right-1/4 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(133,79,108,0.12)_0%,transparent_60%)] blur-[100px]" />
      <div ref={g3} className="absolute top-1/2 right-1/4 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_70%)] blur-[120px]" />
      <div ref={g4} className="absolute top-1/4 right-0 w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(circle,rgba(43,18,76,0.4)_0%,transparent_70%)] blur-[150px]" />
      <div ref={g5} className="absolute bottom-1/4 left-1/3 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.04)_0%,transparent_60%)] blur-[90px]" />
      
      {/* Luxury Grain Overlay for texture depth */}
      <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }} />
    </div>
  );
}
