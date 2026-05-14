"use client";

import { motion } from "framer-motion";

interface FloatingParticlesProps {
  count?: number;
  className?: string;
}

const particles = Array.from({ length: 30 }, (_, i) => ({
  key: i,
  left: `${(i * 13 + 7) % 100}%`,
  top: `${(i * 19 + 11) % 100}%`,
  size: 1 + ((i * 2) % 3),
  duration: 4 + ((i * 3) % 5),
  delay: (i * 0.12) % 4,
}));

export default function FloatingParticles({ className = "" }: FloatingParticlesProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.key}
          className="absolute rounded-full"
          style={{
            left: p.left, top: p.top, width: p.size, height: p.size,
            background: "radial-gradient(circle, rgba(212,175,55,0.5) 0%, transparent 70%)",
            boxShadow: "0 0 4px rgba(212,175,55,0.2)",
          }}
          animate={{ y: [-15, 15, -15], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
