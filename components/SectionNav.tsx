"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "bride-groom", label: "Couple" },
  { id: "countdown", label: "Countdown" },
  { id: "love-story", label: "Story" },
  { id: "event-details", label: "Event" },
  { id: "gallery", label: "Gallery" },
  { id: "rsvp", label: "RSVP" },
  { id: "gift", label: "Gift" },
  { id: "closing", label: "Closing" },
];

export default function SectionNav() {
  const [active, setActive] = useState("hero");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;
      let current = "hero";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= scrollY) current = s.id;
      }
      setActive(current);
      setVisible(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <nav
      className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3"
      aria-label="Section navigation"
    >
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => scrollTo(s.id)}
          className="group relative flex items-center justify-center"
          aria-label={`Go to ${s.label}`}
          title={s.label}
        >
          <span
            className={`block rounded-full transition-all duration-500 ${
              active === s.id
                ? "w-2.5 h-2.5 bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.5)]"
                : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
            }`}
          />
          <span className="absolute right-full mr-3 px-2 py-0.5 rounded bg-[#2B124C]/90 backdrop-blur-sm border border-[#D4AF37]/10 text-[#F5E6CA]/60 text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none font-cinzel tracking-wider">
            {s.label}
          </span>
        </button>
      ))}
    </nav>
  );
}
