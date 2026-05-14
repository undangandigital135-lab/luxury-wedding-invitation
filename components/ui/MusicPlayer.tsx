"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

interface MusicPlayerProps {
  src: string;
  title?: string;
  artist?: string;
}

function MusicBars({ isPlaying }: { isPlaying: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const bars = ref.current.children;
    const ctx = gsap.context(() => {
      Array.from(bars).forEach((bar, i) => {
        if (isPlaying) {
          gsap.to(bar, { scaleY: 1, duration: 0.4 + Math.random() * 0.3, repeat: -1, yoyo: true, ease: "sine.inOut", delay: i * 0.08 });
        } else {
          gsap.to(bar, { scaleY: 0.3, duration: 0.3 });
        }
      });
    });
    return () => ctx.revert();
  }, [isPlaying]);
  return (
    <div ref={ref} className="flex items-end gap-[2px] h-3" aria-hidden="true">
      {Array.from({ length: 4 }, (_, i) => (
        <div key={i} className="w-[2px] bg-[#D4AF37]/60 rounded-full origin-bottom" style={{ height: `${6 + i * 3}px`, transform: "scaleY(0.3)" }} />
      ))}
    </div>
  );
}

export default function MusicPlayer({ src, title = "Background Music", artist }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const toggle = useCallback(() => {
    if (!audioRef.current) return;
    if (isPlaying) { audioRef.current.pause(); } else { audioRef.current.play().catch(() => {}); }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.25;
    }

    const attemptPlay = () => {
      if (!audioRef.current) return;
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch(() => {
          // If play fails (e.g. still blocked), we'll rely on the event listeners
        });
    };

    // Try playing immediately on mount
    attemptPlay();

    const handleInteraction = () => {
      if (hasInteracted) return;
      attemptPlay();
    };

    window.addEventListener("click", handleInteraction, { once: true });
    window.addEventListener("touchstart", handleInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, [src, hasInteracted]);

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.5, delay: 3 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <AnimatePresence>
          {showTooltip && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }}
              className="bg-white/[0.05] backdrop-blur-xl border border-[#D4AF37]/10 rounded-xl px-4 py-2 text-right">
              <p className="text-[#F5E6CA]/60 text-xs whitespace-nowrap font-cormorant">{title}</p>
              {artist && <p className="text-[#F5E6CA]/40 text-xs font-cormorant">{artist}</p>}
            </motion.div>
          )}
        </AnimatePresence>
        <button onClick={toggle} onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}
          className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-white/[0.03] backdrop-blur-xl border border-[#D4AF37]/10 hover:bg-white/[0.06] hover:border-[#D4AF37]/25 transition-all duration-500 shadow-xl"
          aria-label={isPlaying ? "Pause music" : "Play music"}>
          <div className="relative w-5 h-5 flex items-center justify-center">
            {isPlaying ? <MusicBars isPlaying={isPlaying} /> : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#D4AF37]/50">
                <path d="M11 5L6 9H2v6h4l5 4V5z" /><path d="M19.07 4.93a10 10 0 010 14.14" /><path d="M15.54 8.46a5 5 0 010 7.07" />
              </svg>
            )}
          </div>
          <span className="text-[#D4AF37]/40 text-[10px] tracking-wider uppercase font-cinzel">
            {isPlaying ? "Now Playing" : "Play"}
          </span>
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
