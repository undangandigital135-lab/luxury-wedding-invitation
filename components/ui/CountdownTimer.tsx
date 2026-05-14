"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { getTimeRemaining } from "@/lib/utils";

interface CountdownTimerProps {
  weddingDateISO: string;
  labels: { days: string; hours: string; minutes: string; seconds: string };
  className?: string;
}

function CountUnit({ value, label, index }: { value: number; label: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15 + index * 0.08, ease: [0.33, 1, 0.68, 1] }}
      className="flex flex-col items-center gpu"
    >
      <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#D4AF37]/5 to-white/[0.01] border border-[#D4AF37]/15" />
        <div className="absolute inset-2 rounded-xl bg-gradient-to-b from-[#D4AF37]/10 to-transparent opacity-50" />
        <div className="relative z-10 flex items-center justify-center">
          <span className="text-3xl md:text-5xl font-cinzel text-[#D4AF37] tabular-nums tracking-tight gold-glow">
            {String(value).padStart(2, "0")}
          </span>
        </div>
      </div>
      <span className="text-[#F5E6CA]/35 text-xs md:text-sm tracking-[0.35em] uppercase mt-3 font-cinzel">{label}</span>
    </motion.div>
  );
}

export default function CountdownTimer({ weddingDateISO, labels, className = "" }: CountdownTimerProps) {
  const targetDate = useMemo(() => new Date(weddingDateISO), [weddingDateISO]);
  const [time, setTime] = useState(getTimeRemaining(targetDate));
  useEffect(() => {
    const t = setInterval(() => setTime(getTimeRemaining(targetDate)), 1000);
    return () => clearInterval(t);
  }, [targetDate]);

  const units = [
    { value: time.days, label: labels.days },
    { value: time.hours, label: labels.hours },
    { value: time.minutes, label: labels.minutes },
    { value: time.seconds, label: labels.seconds },
  ];

  return (
    <div className={`flex items-center justify-center gap-4 md:gap-8 lg:gap-12 ${className}`}>
      {units.map((unit, i) => (
        <CountUnit key={unit.label} value={unit.value} label={unit.label} index={i} />
      ))}
    </div>
  );
}
