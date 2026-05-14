"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

function CornerFlower({ position, delay = 0 }: { position: "bl" | "br" | "tl" | "tr"; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const isLeft = position === "bl" || position === "tl";
  const isTop = position === "tl" || position === "tr";
  const rotate = position === "tl" ? 180 : position === "tr" ? 270 : position === "br" ? 0 : 90;

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current,
        { scale: 0, rotate, opacity: 0 },
        { scale: 1, rotate, opacity: 1, duration: 1.2, delay, ease: "back.out(1.7)" }
      );
    });
    return () => ctx.revert();
  }, [delay, rotate]);

  const posClass = `${isTop ? "top-0" : "bottom-0"} ${isLeft ? "left-0" : "right-0"}`;

  return (
    <div ref={ref} className={`absolute ${posClass} w-28 h-28 md:w-36 md:h-36 pointer-events-none`} style={{ scale: 0, rotate: `${rotate}deg` }} aria-hidden="true">
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full text-[#D4AF37]">
        {/* Main stem */}
        <path d="M60 120 L60 70" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        {/* Left leaf */}
        <path d="M60 85 C45 75 35 80 35 85 C35 90 45 88 60 85Z" fill="currentColor" fillOpacity="0.15" />
        {/* Right leaf */}
        <path d="M60 75 C75 65 85 70 85 75 C85 80 75 78 60 75Z" fill="currentColor" fillOpacity="0.15" />
        {/* Main flower - center */}
        <circle cx="60" cy="55" r="6" fill="currentColor" fillOpacity="0.3" />
        {/* Petals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <ellipse
            key={i}
            cx={60 + 8 * Math.cos((angle * Math.PI) / 180)}
            cy={55 + 8 * Math.sin((angle * Math.PI) / 180)}
            rx="5"
            ry="3"
            fill="currentColor"
            fillOpacity={0.12 + i * 0.02}
            transform={`rotate(${angle}, ${60 + 8 * Math.cos((angle * Math.PI) / 180)}, ${55 + 8 * Math.sin((angle * Math.PI) / 180)})`}
          />
        ))}
        {/* Small buds */}
        <circle cx="45" cy="65" r="3" fill="currentColor" fillOpacity="0.2" />
        <circle cx="75" cy="63" r="2.5" fill="currentColor" fillOpacity="0.2" />
        {/* Decorative dots */}
        <circle cx="50" cy="72" r="1.5" fill="currentColor" fillOpacity="0.15" />
        <circle cx="70" cy="70" r="1.5" fill="currentColor" fillOpacity="0.15" />
      </svg>
    </div>
  );
}

function BottomGarland() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current,
        { scaleY: 0, opacity: 0, transformOrigin: "bottom center" },
        { scaleY: 1, opacity: 1, duration: 1.5, delay: 0.6, ease: "power3.out" }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="absolute bottom-0 left-0 right-0 h-16 md:h-20 pointer-events-none overflow-hidden" style={{ transform: "scaleY(0)" }} aria-hidden="true">
      <svg viewBox="0 0 400 80" preserveAspectRatio="none" className="w-full h-full text-[#D4AF37]">
        {/* Vine garland */}
        <path d="M0 80 Q50 50 100 60 Q150 70 200 55 Q250 40 300 60 Q350 80 400 65 L400 80Z" fill="currentColor" fillOpacity="0.06" />
        <path d="M0 80 Q50 60 100 65 Q150 75 200 62 Q250 48 300 65 Q350 80 400 70 L400 80Z" fill="currentColor" fillOpacity="0.04" />
        {/* Small flowers along garland */}
        <circle cx="80" cy="62" r="3" fill="currentColor" fillOpacity="0.15" />
        <circle cx="160" cy="68" r="2.5" fill="currentColor" fillOpacity="0.15" />
        <circle cx="240" cy="55" r="3" fill="currentColor" fillOpacity="0.15" />
        <circle cx="320" cy="68" r="2.5" fill="currentColor" fillOpacity="0.15" />
      </svg>
    </div>
  );
}

interface FlowerCornerProps {
  showGarland?: boolean;
}

export default function FlowerCorner({ showGarland = true }: FlowerCornerProps) {
  return (
    <>
      <CornerFlower position="bl" delay={0.8} />
      <CornerFlower position="br" delay={1} />
      {showGarland && <BottomGarland />}
    </>
  );
}
