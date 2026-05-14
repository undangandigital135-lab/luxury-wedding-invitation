"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

interface GlowOrbProps {
  className?: string;
  size?: string;
  color?: string;
  delay?: number;
  speed?: number;
  amplitude?: number;
}

export default function GlowOrb({
  className = "",
  size = "w-[600px] h-[600px]",
  color = "rgba(212,175,55,0.06)",
  delay = 0,
  speed = 14,
  amplitude = 80,
}: GlowOrbProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.to(el, { x: amplitude, y: -amplitude * 0.75, scale: 1.15, opacity: 0.5, duration: speed, repeat: -1, yoyo: true, ease: "sine.inOut", delay });
    });
    return () => ctx.revert();
  }, [delay, speed, amplitude]);

  return (
    <div ref={ref} className={`absolute rounded-full pointer-events-none ${size} ${className}`}
      style={{ background: `radial-gradient(circle, ${color} 0%, transparent 70%)` }}
      aria-hidden="true"
    />
  );
}
