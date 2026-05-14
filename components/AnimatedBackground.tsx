"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedBackground() {
  const g1 = useRef<HTMLDivElement>(null);
  const g2 = useRef<HTMLDivElement>(null);
  const g3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      [
        { ref: g1, x: 60, y: -50, scale: 1.1, dur: 30, del: 0 },
        { ref: g2, x: -50, y: 60, scale: 1.15, dur: 35, del: 6 },
        { ref: g3, x: 40, y: 50, scale: 1.08, dur: 28, del: 3 },
      ].forEach(({ ref, x, y, scale, dur, del }) => {
        if (ref.current) gsap.to(ref.current, { x, y, scale, opacity: 0.4, duration: dur, repeat: -1, yoyo: true, ease: "sine.inOut", delay: del });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#1c0b33]" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(43,18,76,0.7)_0%,rgba(28,11,51,1)_100%)]" />

      <div ref={g1} className="absolute top-0 -left-1/4 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(82,43,91,0.12)_0%,transparent_60%)] blur-[40px]" />
      <div ref={g2} className="absolute bottom-0 -right-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(133,79,108,0.1)_0%,transparent_60%)] blur-[50px]" />
      <div ref={g3} className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] blur-[40px]" />
    </div>
  );
}
