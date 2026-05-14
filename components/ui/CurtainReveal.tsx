"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

function Panel({ side, index, className, style }: { side: "left" | "right"; index: number; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        width: "0%",
        opacity: 0,
        duration: 2.5,
        delay: 0.4 + (2 - index) * 0.2,
        ease: "power4.inOut",
        transformOrigin: "left center",
      });
    });
    return () => ctx.revert();
  }, [index]);

  const isLeft = side === "left";
  const gradient = isLeft
    ? index === 0
      ? "linear-gradient(135deg, #2B124C 0%, #3D1A5A 40%, #522B5B 100%)"
      : index === 1
        ? "linear-gradient(135deg, #2B124C 0%, #452060 40%, #5A2E6A 100%)"
        : "linear-gradient(135deg, #2B124C 0%, #3D1A5A 40%, #63387A 100%)"
    : index === 0
      ? "linear-gradient(225deg, #2B124C 0%, #3D1A5A 40%, #522B5B 100%)"
      : index === 1
        ? "linear-gradient(225deg, #2B124C 0%, #452060 40%, #5A2E6A 100%)"
        : "linear-gradient(225deg, #2B124C 0%, #3D1A5A 40%, #63387A 100%)";

  const foldDir = isLeft ? 90 : 270;
  const showTrim = index === 2;
  const trimSide = isLeft ? "right" : "left";
  const shadow = isLeft ? (index < 2 ? "2px 0 8px rgba(0,0,0,0.3)" : "none") : (index < 2 ? "-2px 0 8px rgba(0,0,0,0.3)" : "none");

  return (
    <div className={className} style={style}>
      <div
        ref={ref}
        className="absolute inset-0"
        style={{ background: gradient, boxShadow: shadow }}
      >
        <div className="absolute inset-0 opacity-30" style={{
          background: `repeating-linear-gradient(${foldDir}deg, rgba(0,0,0,0.2) 0px, transparent 6px, rgba(0,0,0,0.12) 12px, transparent 18px)`
        }} />
        {showTrim && (
          <div className={`absolute ${trimSide}-0 top-0 w-[2px] h-full bg-gradient-to-b from-[#D4AF37]/60 via-[#D4AF37]/30 to-[#D4AF37]/60`} />
        )}
        <div className="absolute -top-3 left-0 w-full h-12 bg-gradient-to-b from-[#2B124C] via-[#3D1A5A] to-transparent opacity-80"
          style={{ clipPath: "ellipse(65% 100% at 50% 0%)" }}
        />
      </div>
    </div>
  );
}

export default function CurtainReveal() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ perspective: "1200px", zIndex: 101 }}>
      {[0, 1, 2].map((i) => (
        <Panel
          key={`left-${i}`}
          side="left"
          index={i}
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: "33.33%", left: `${i * 33.33}%` }}
        />
      ))}
      {[0, 1, 2].map((i) => (
        <Panel
          key={`right-${i}`}
          side="right"
          index={i}
          className="absolute top-0 right-0 h-full overflow-hidden"
          style={{ width: "33.33%", right: `${(2 - i) * 33.33}%` }}
        />
      ))}
    </div>
  );
}