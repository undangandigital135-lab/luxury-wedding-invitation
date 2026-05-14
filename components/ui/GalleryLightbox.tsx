"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { GalleryImage } from "@/data/wedding";

interface GalleryLightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function GalleryLightbox({ images, currentIndex, onClose, onPrev, onNext }: GalleryLightboxProps) {
  const current = images[currentIndex];
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft") onPrev();
    if (e.key === "ArrowRight") onNext();
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", handleKey); document.body.style.overflow = ""; };
  }, [handleKey]);

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[200] flex items-center justify-center bg-[#2B124C]/95 backdrop-blur-2xl"
        onClick={onClose} role="dialog" aria-label="Image lightbox" aria-modal="true">
        <button onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute top-6 right-6 z-10 text-[#D4AF37]/40 hover:text-[#D4AF37] transition-colors" aria-label="Close lightbox">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>
        <button onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 md:left-8 z-10 text-[#D4AF37]/30 hover:text-[#D4AF37] transition-colors" aria-label="Previous image">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <motion.div key={currentIndex} initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
          className="w-[85vw] max-w-[500px] aspect-[4/5] rounded-2xl overflow-hidden bg-white/[0.02] border border-[#D4AF37]/10"
          onClick={(e) => e.stopPropagation()}>
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="flex-1 flex items-center justify-center w-full">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white/10">
                <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            {current.caption && (
              <div className="w-full p-5 border-t border-[#D4AF37]/10">
                <p className="text-[#F5E6CA]/50 text-sm text-center font-cormorant">{current.caption}</p>
              </div>
            )}
          </div>
        </motion.div>
        <button onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 md:right-8 z-10 text-[#D4AF37]/30 hover:text-[#D4AF37] transition-colors" aria-label="Next image">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#D4AF37]/30 text-xs tracking-widest font-cinzel">
          {String(currentIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
