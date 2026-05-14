"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const positions = [
  { x: 5, y: 15, scale: 1.5 }, { x: 85, y: 10, scale: 2 }, { x: 10, y: 75, scale: 1.2 },
  { x: 80, y: 85, scale: 1.8 }, { x: 50, y: 8, scale: 2.5 }, { x: 50, y: 90, scale: 1.6 },
  { x: 20, y: 40, scale: 1.1 }, { x: 80, y: 50, scale: 1.4 }
];

// Complex 8-point Islamic star SVG
function PremiumOrnament({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">
      <path d="M50 5 L58 35 L88 28 L68 50 L88 72 L58 65 L50 95 L42 65 L12 72 L32 50 L12 28 L42 35 Z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.05" className="text-[#D4AF37]/30"/>
      <path d="M50 15 L55 40 L80 35 L62 50 L80 65 L55 60 L50 85 L45 60 L20 65 L38 50 L20 35 L45 40 Z" stroke="currentColor" strokeWidth="0.5" className="text-[#D4AF37]/50"/>
      <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="1" fill="transparent" className="text-[#D4AF37]/40"/>
      <circle cx="50" cy="50" r="3" fill="currentColor" className="text-[#D4AF37]/60"/>
    </svg>
  );
}

export default function IslamicOrnaments() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      refs.current.forEach((el, i) => {
        if (!el) return;
        gsap.to(el, { 
          y: -25 - (i * 4), 
          x: -15 + (i * 5), 
          rotation: 45 + (i * 15), 
          opacity: 0.4, 
          duration: 12 + i * 1.5, 
          repeat: -1, 
          yoyo: true, 
          ease: "sine.inOut", 
          delay: i * 0.5 
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {positions.map((pos, i) => (
        <div 
          key={i} 
          ref={(el) => { refs.current[i] = el; }} 
          className="absolute" 
          style={{ left: `${pos.x}%`, top: `${pos.y}%`, opacity: 0 }}
        >
          <PremiumOrnament size={30 * pos.scale} />
        </div>
      ))}
    </div>
  );
}
