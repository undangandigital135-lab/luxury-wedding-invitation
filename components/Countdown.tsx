"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import CountdownTimer from "@/components/ui/CountdownTimer";
import LuxuryPattern from "@/components/ui/LuxuryPattern";
import SectionGlow from "@/components/ui/SectionGlow";
import { subtitleVariants, titleVariants } from "@/lib/animations";
import { sectionPadding } from "@/lib/spacing";

interface CountdownProps {
  title: string;
  subtitle: string;
  labels: { days: string; hours: string; minutes: string; seconds: string };
  message: string;
  weddingDateISO: string;
}

const WEDDING_TITLE = "Pernikahan Sayyid Hasan & Syarifah Rugayyah";
const WEDDING_LOCATION = "Masjid Nurul Musthofa Center, Cilodong, Depok, Jawa Barat";
const WEDDING_DESCRIPTION = "Akad Nikah Sayyid Hasan & Syarifah Rugayyah";

function AddToCalendarButton() {
  const startDate = "20260621T090000";
  const endDate = "20260621T110000";

  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(WEDDING_TITLE)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(WEDDING_DESCRIPTION)}&location=${encodeURIComponent(WEDDING_LOCATION)}`;

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    `DTSTART:${startDate}`,
    `DTEND:${endDate}`,
    `SUMMARY:${WEDDING_TITLE}`,
    `DESCRIPTION:${WEDDING_DESCRIPTION}`,
    `LOCATION:${WEDDING_LOCATION}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\n");

  const handleApple = () => {
    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "wedding-hasan-rugayyah.ics";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleOutlook = () => {
    const url = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(WEDDING_TITLE)}&body=${encodeURIComponent(WEDDING_DESCRIPTION)}&location=${encodeURIComponent(WEDDING_LOCATION)}&startdt=2026-06-21T09:00:00&enddt=2026-06-21T11:00:00`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
      <a
        href={googleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D4AF37]/25 text-[#D4AF37] text-[10px] md:text-xs tracking-[0.2em] uppercase hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/50 transition-all duration-300 font-cinzel bg-white/[0.02]"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
        Google
      </a>
      <button
        onClick={handleApple}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D4AF37]/25 text-[#D4AF37] text-[10px] md:text-xs tracking-[0.2em] uppercase hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/50 transition-all duration-300 font-cinzel bg-white/[0.02] cursor-pointer"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
        Apple
      </button>
      <button
        onClick={handleOutlook}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D4AF37]/25 text-[#D4AF37] text-[10px] md:text-xs tracking-[0.2em] uppercase hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/50 transition-all duration-300 font-cinzel bg-white/[0.02] cursor-pointer"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
        Outlook
      </button>
    </div>
  );
}

export default function Countdown({ title, subtitle, labels, message, weddingDateISO }: CountdownProps) {
  return (
    <SectionWrapper id="countdown" className={`relative overflow-hidden ${sectionPadding.py}`}
      style={{ background: "linear-gradient(to bottom, #1c0b33, #2B124C)" }}
    >
      <SectionGlow color="rgba(212,175,55,0.06)" size="w-[600px] h-[600px]" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <LuxuryPattern variant="islamic" opacity="opacity-[0.03]" />

      <div className="absolute inset-x-4 md:inset-x-12 top-12 bottom-12 border border-[#D4AF37]/10 rounded-t-[40vw] md:rounded-t-full pointer-events-none z-0" />
      <div className="absolute inset-x-8 md:inset-x-20 top-20 bottom-20 border border-[#D4AF37]/5 rounded-t-[40vw] md:rounded-t-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 lg:px-16 text-center pt-10">
        <motion.p variants={subtitleVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-[#D4AF37]/60 text-xs md:text-sm tracking-[0.5em] uppercase mb-4 font-cinzel">
          {subtitle}
        </motion.p>

        <motion.h2 variants={titleVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-cinzel text-[#D4AF37] tracking-[0.02em] mb-16 gold-glow">
          {title}
        </motion.h2>

        <div className="relative inline-block">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(212,175,55,0.1)_0%,transparent_60%)] blur-[20px] -z-10" />
          <CountdownTimer weddingDateISO={weddingDateISO} labels={labels} />
        </div>

        <AddToCalendarButton />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className="text-[#F5E6CA]/60 text-base md:text-xl mt-20 font-cormorant italic max-w-2xl mx-auto leading-[1.8]"
        >
          {message}
        </motion.p>
      </div>
    </SectionWrapper>
  );
}