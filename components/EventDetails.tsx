"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "@/components/SectionWrapper";
import LuxuryPattern from "@/components/ui/LuxuryPattern";
import SectionGlow from "@/components/ui/SectionGlow";
import { subtitleVariants, titleVariants } from "@/lib/animations";
import { sectionPadding } from "@/lib/spacing";

gsap.registerPlugin(ScrollTrigger);

interface Event {
  title: string;
  date: string;
  time: string;
  timeEnd: string;
  location: string;
  address: string;
  mapUrl: string;
  dressCode: string;
  notes?: string;
}

interface EventDetailsProps {
  title: string;
  subtitle: string;
  intro: string;
  events: Event[];
}

function DetailRow({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#D4AF37]/20 flex items-center justify-center bg-gradient-to-br from-[#D4AF37]/10 to-transparent text-[#D4AF37]/70 shadow-[0_0_10px_rgba(212,175,55,0.05)]">
        {icon}
      </div>
      <div className="pt-1">
        <p className="text-[#F5E6CA]/40 text-[10px] tracking-[0.25em] uppercase mb-1 font-cinzel">{label}</p>
        <p className="text-[#F5E6CA] text-sm md:text-base font-cormorant leading-relaxed drop-shadow-sm">{value}</p>
      </div>
    </div>
  );
}

function EventCard({ event, index }: { event: Event; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(el, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.2, delay: index * 0.2, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } });
    });
    return () => ctx.revert();
  }, [index]);

  return (
    <div ref={ref} className="group relative p-8 md:p-12 lg:p-14 rounded-t-[40px] rounded-b-[10px] border-x border-t border-[#D4AF37]/20 bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-md opacity-0 hover:border-[#D4AF37]/40 transition-all duration-500 shadow-[0_20px_50px_rgba(28,11,51,0.5)] mt-10">
      {/* Decorative Ornaments */}
      <svg className="absolute top-4 left-4 w-12 h-12 text-[#D4AF37]/30 transition-colors duration-500 group-hover:text-[#D4AF37]/60" viewBox="0 0 80 80" fill="none">
        <path d="M4 4h24v3H7v21H4V4z" fill="currentColor" />
        <path d="M40 8l8 16-8 8-8-16 8-8z" fill="currentColor" fillOpacity="0.3" />
      </svg>
      <svg className="absolute top-4 right-4 w-12 h-12 text-[#D4AF37]/30 transition-colors duration-500 group-hover:text-[#D4AF37]/60 rotate-90" viewBox="0 0 80 80" fill="none">
        <path d="M4 4h24v3H7v21H4V4z" fill="currentColor" />
        <path d="M40 8l8 16-8 8-8-16 8-8z" fill="currentColor" fillOpacity="0.3" />
      </svg>

      <div className="absolute top-0 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -inset-[1px] rounded-t-[40px] rounded-b-[10px] bg-gradient-to-b from-[#D4AF37]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

      <div className="relative z-10 pt-4">
        <div className="flex flex-col items-center gap-4 mb-12 text-center">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
          <h3 className="text-3xl md:text-4xl font-cinzel text-[#D4AF37] tracking-[0.1em] gold-glow">{event.title}</h3>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
        </div>

        <div className="space-y-6">
          <DetailRow label="Date" value={event.date}
            icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>}
          />
          <DetailRow label="Time" value={`${event.time} - ${event.timeEnd} WIB`}
            icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>}
          />
          <DetailRow label="Location" value={event.location}
            icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>}
          />
          <DetailRow label="Address" value={event.address}
            icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /></svg>}
          />
          <DetailRow label="Dress" value={event.dressCode}
            icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" /></svg>}
          />
        </div>

        {event.notes && (
          <div className="mt-10 pt-6 border-t border-[#D4AF37]/10 text-center">
            <p className="text-[#F5E6CA]/50 text-sm italic font-cormorant">{event.notes}</p>
          </div>
        )}

        <div className="mt-10 flex justify-center">
          <a href={event.mapUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-xs tracking-[0.25em] uppercase hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/50 transition-all duration-500 group/link font-cinzel shadow-[0_0_15px_rgba(212,175,55,0.05)]">
            <span>Open Maps</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"><path d="M5 19L19 5" /><path d="M9 5h10v10" /></svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function EventDetails({ title, subtitle, intro, events }: EventDetailsProps) {
  return (
    <SectionWrapper id="event-details" className={`relative overflow-hidden ${sectionPadding.py}`}
      style={{ background: "linear-gradient(to bottom, #1A0A30, #1c0b33)" }}
    >
      <SectionGlow color="rgba(212,175,55,0.04)" size="w-[600px] h-[600px]" className="bottom-1/4 right-0" />
      <LuxuryPattern variant="islamic" opacity="opacity-[0.03]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-10 lg:px-16 pt-16">
        <div className="text-center mb-20 md:mb-28">
          <motion.p variants={subtitleVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-[#D4AF37]/60 text-xs md:text-sm tracking-[0.4em] uppercase mb-4 font-cinzel">
            {subtitle}
          </motion.p>
          <motion.h2 variants={titleVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-cinzel text-[#D4AF37] tracking-[0.02em] gold-glow">
            {title}
          </motion.h2>
          
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.3 }} className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mx-auto mt-8 mb-6" />
          
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }}
            className="text-[#F5E6CA]/60 text-base md:text-lg max-w-2xl mx-auto font-cormorant leading-[1.8] italic">
            {intro}
          </motion.p>
        </div>

        <div className="flex justify-center">
          {events.map((event, i) => (
            <EventCard key={event.title} event={event} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
