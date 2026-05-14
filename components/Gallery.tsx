"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import GalleryLightbox from "@/components/ui/GalleryLightbox";
import LuxuryPattern from "@/components/ui/LuxuryPattern";
import SectionGlow from "@/components/ui/SectionGlow";
import { subtitleVariants, titleVariants } from "@/lib/animations";
import { sectionPadding } from "@/lib/spacing";
import type { GalleryImage } from "@/data/wedding";

interface GalleryProps {
  title: string;
  subtitle: string;
  images: GalleryImage[];
}

function GalleryImageCard({ image, index, onClick }: { image: GalleryImage; index: number; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      onClick={onClick}
      className="group relative aspect-[4/5] rounded-t-[50px] rounded-b-xl overflow-hidden cursor-pointer border-x border-t border-[#D4AF37]/20 hover:border-[#D4AF37]/40 shadow-[0_10px_20px_rgba(28,11,51,0.4)] transition-all duration-300 bg-[#1c0b33]"
      role="button" tabIndex={0} aria-label={`View ${image.alt}`}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick(); }}
    >
      <div className="absolute inset-1 rounded-t-[48px] rounded-b-lg border border-[#D4AF37]/10 group-hover:border-[#D4AF37]/20 transition-colors duration-300 z-10 pointer-events-none" />
      
      {/* Image Placeholder */}
      <div className="w-full h-full bg-gradient-to-b from-white/[0.03] to-white/[0.01] flex items-center justify-center relative z-0">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#D4AF37]/20">
          <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
        </svg>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#1c0b33] via-[#1c0b33]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-10" />
      
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-5 group-hover:translate-y-0 transition-transform duration-300 z-20 text-center">
        {image.caption && <p className="text-[#F5E6CA] text-sm md:text-base font-cormorant italic drop-shadow-md">{image.caption}</p>}
        <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto mt-3 mb-2" />
        <p className="text-[#D4AF37]/60 text-[10px] tracking-[0.3em] font-cinzel">{String(index + 1).padStart(2, "0")}</p>
      </div>
    </motion.div>
  );
}

export default function Gallery({ title, subtitle, images }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => setLightboxIndex((p) => (p !== null ? (p - 1 + images.length) % images.length : null)), [images.length]);
  const handleNext = useCallback(() => setLightboxIndex((p) => (p !== null ? (p + 1) % images.length : null)), [images.length]);

  return (
    <SectionWrapper id="gallery" className={`relative overflow-hidden ${sectionPadding.py}`}
      style={{ background: "linear-gradient(to bottom, #1c0b33, #2B124C)" }}
    >
      {/* Cinematic Lighting */}
      <SectionGlow color="rgba(212,175,55,0.04)" size="w-[600px] h-[600px]" className="top-1/4 left-1/2 -translate-x-1/2" />
      <LuxuryPattern variant="islamic" opacity="opacity-[0.03]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 lg:px-16 pt-10">
        <div className="text-center mb-24 md:mb-32 lg:mb-40">
          <motion.p variants={subtitleVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-[#D4AF37]/60 text-xs md:text-sm tracking-[0.5em] uppercase mb-6 font-cinzel drop-shadow-sm">
            {subtitle}
          </motion.p>
          <motion.h2 variants={titleVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-cinzel text-[#D4AF37] tracking-[0.02em] gold-glow pb-2">
            {title}
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 }} className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mx-auto mt-10" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {images.map((image, i) => (
            <GalleryImageCard key={image.id} image={image} index={i} onClick={() => setLightboxIndex(i)} />
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox images={images} currentIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} onPrev={handlePrev} onNext={handleNext} />
      )}
    </SectionWrapper>
  );
}
