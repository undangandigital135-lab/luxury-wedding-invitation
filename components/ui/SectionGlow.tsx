"use client";

import { motion } from "framer-motion";

interface SectionGlowProps {
  className?: string;
  color?: string;
  size?: string;
}

export default function SectionGlow({
  className = "",
  color = "rgba(212,175,55,0.06)",
  size = "w-[600px] h-[600px]",
}: SectionGlowProps) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${size} ${className}`}
      style={{
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      }}
      animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.08, 1] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    />
  );
}
