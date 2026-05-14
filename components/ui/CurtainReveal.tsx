"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CurtainReveal() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });
      tl.to(leftRef.current, { x: "-100%", duration: 1.2, ease: "power2.inOut" }, 0);
      tl.to(rightRef.current, { x: "100%", duration: 1.2, ease: "power2.inOut" }, 0);
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Left curtain */}
      <div
        ref={leftRef}
        className="absolute top-0 left-0 w-1/2 h-full"
        style={{ zIndex: 101 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#2B124C] via-[#3D1A5A] to-[#522B5B]" />
        {/* Fold shadows */}
        <div className="absolute inset-0" style={{
          background: `repeating-linear-gradient(
            90deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0) 8px,
            rgba(0,0,0,0.1) 16px, rgba(0,0,0,0) 24px,
            rgba(0,0,0,0.08) 32px, rgba(0,0,0,0) 40px
          )`
        }} />
        {/* Gold trim */}
        <div className="absolute right-0 top-0 w-[3px] h-full bg-gradient-to-b from-[#D4AF37]/60 via-[#D4AF37]/30 to-[#D4AF37]/60" />
        {/* Top drape */}
        <div className="absolute -top-4 left-0 w-full h-16 bg-gradient-to-b from-[#2B124C] via-[#3D1A5A] to-transparent"
          style={{ clipPath: "ellipse(70% 100% at 50% 0%)" }}
        />
      </div>

      {/* Right curtain */}
      <div
        ref={rightRef}
        className="absolute top-0 right-0 w-1/2 h-full"
        style={{ zIndex: 101 }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-[#2B124C] via-[#3D1A5A] to-[#522B5B]" />
        <div className="absolute inset-0" style={{
          background: `repeating-linear-gradient(
            270deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0) 8px,
            rgba(0,0,0,0.1) 16px, rgba(0,0,0,0) 24px,
            rgba(0,0,0,0.08) 32px, rgba(0,0,0,0) 40px
          )`
        }} />
        <div className="absolute left-0 top-0 w-[3px] h-full bg-gradient-to-b from-[#D4AF37]/60 via-[#D4AF37]/30 to-[#D4AF37]/60" />
        <div className="absolute -top-4 right-0 w-full h-16 bg-gradient-to-b from-[#2B124C] via-[#3D1A5A] to-transparent"
          style={{ clipPath: "ellipse(70% 100% at 50% 0%)" }}
        />
      </div>
    </>
  );
}
