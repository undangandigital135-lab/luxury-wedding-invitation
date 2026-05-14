"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function ProgressBar() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-[#D4AF37] via-[#F5E6CA] to-[#D4AF37] transition-transform duration-150 ease-out origin-left"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
