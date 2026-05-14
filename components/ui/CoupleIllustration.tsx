"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CoupleIllustration({ delay = 1.2 }: { delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current,
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, delay, ease: "power3.out" }
      );
    });
    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} className="relative w-32 h-20 md:w-40 md:h-24 opacity-0 pointer-events-none" aria-hidden="true">
      <svg viewBox="0 0 160 96" fill="none" className="w-full h-full">
        {/* Bride (left) */}
        <g className="text-[#D4AF37]">
          {/* Body - dress */}
          <path d="M30 50 L25 90 L50 90 L45 50Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3" />
          {/* Hijab */}
          <path d="M28 42 Q30 25 37 25 Q44 25 46 42 Q40 45 37 46 Q34 45 28 42Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.3" />
          {/* Face */}
          <ellipse cx="37" cy="34" rx="4" ry="5" fill="currentColor" fillOpacity="0.08" />
          {/* Hijab drape */}
          <path d="M28 42 Q25 50 27 55" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" fill="none" />
          {/* Decorative dots on dress */}
          <circle cx="34" cy="65" r="1" fill="currentColor" fillOpacity="0.2" />
          <circle cx="41" cy="60" r="1" fill="currentColor" fillOpacity="0.2" />
          <circle cx="37" cy="72" r="1" fill="currentColor" fillOpacity="0.2" />
        </g>

        {/* Groom (right) */}
        <g className="text-[#D4AF37]">
          {/* Body - robe */}
          <path d="M110 50 L105 90 L135 90 L130 50Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3" />
          {/* Head / Kopiah */}
          <circle cx="120" cy="34" r="7" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.3" />
          <path d="M113 32 Q120 27 127 32" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" />
          {/* Face */}
          <ellipse cx="120" cy="37" rx="4" ry="4.5" fill="currentColor" fillOpacity="0.06" />
          {/* Decorative dots on robe */}
          <circle cx="116" cy="65" r="1" fill="currentColor" fillOpacity="0.2" />
          <circle cx="124" cy="60" r="1" fill="currentColor" fillOpacity="0.2" />
          <circle cx="120" cy="72" r="1" fill="currentColor" fillOpacity="0.2" />
        </g>

        {/* Heart symbol between them */}
        <g className="text-[#D4AF37]" opacity="0.25">
          <path d="M76 50 Q76 44 80 44 Q84 44 84 50 Q84 56 80 60 Q76 56 76 50Z" fill="currentColor" />
        </g>

        {/* Connecting line beneath */}
        <line x1="37" y1="88" x2="120" y2="88" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="2 3" />

        {/* Small star/ornament above */}
        <text x="78" y="28" textAnchor="middle" fill="currentColor" fillOpacity="0.15" fontSize="14" fontFamily="serif">✦</text>
      </svg>
    </div>
  );
}
