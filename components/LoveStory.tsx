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

interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface LoveStoryProps {
  title: string;
  subtitle: string;
  intro: string;
  milestones: Milestone[];
}

function TimelineDot() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute w-8 h-8 rounded-full bg-[#D4AF37]/10 animate-pulse" />
      <div className="absolute w-4 h-4 rounded-full bg-[#D4AF37]/30" />
      <div className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.8)]" />
    </div>
  );
}

function MilestoneCard({ milestone, index, isLeft }: { milestone: Milestone; index: number; isLeft: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(el, { opacity: 0, x: isLeft ? -50 : 50, filter: "blur(5px)" }, { opacity: 1, x: 0, filter: "blur(0px)", duration: 1.5, delay: index * 0.2, ease: "power4.out", scrollTrigger: { trigger: el, start: "top 80%", toggleActions: "play none none reverse" } });
    });
    return () => ctx.revert();
  }, [isLeft, index]);

  return (
    <div ref={ref} className="opacity-0">
      <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
        {isLeft ? (
          <>
            <div className="text-right hidden md:flex flex-col items-end">
              <span className="text-[#D4AF37]/10 font-cinzel text-[100px] font-light leading-none select-none drop-shadow-md tracking-widest">{milestone.year}</span>
              <div className="w-1/2 h-[1px] bg-gradient-to-l from-[#D4AF37]/30 to-transparent mt-2" />
            </div>
            <div className="relative group">
              <div className="absolute -left-[33px] top-4 hidden md:flex"><TimelineDot /></div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/[0.03] shadow-[0_0_30px_rgba(0,0,0,0.2)] backdrop-blur-sm group-hover:border-[#D4AF37]/20 transition-all duration-700">
                <h3 className="text-2xl md:text-3xl font-cinzel text-[#D4AF37] mb-4 tracking-[0.1em] gold-glow">{milestone.title}</h3>
                <p className="text-[#F5E6CA]/70 text-sm md:text-base leading-[1.8] font-cormorant">{milestone.description}</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="relative md:text-right group">
              <div className="absolute -right-[33px] top-4 hidden md:flex"><TimelineDot /></div>
              <div className="p-8 rounded-2xl bg-gradient-to-bl from-white/[0.02] to-transparent border border-white/[0.03] shadow-[0_0_30px_rgba(0,0,0,0.2)] backdrop-blur-sm group-hover:border-[#D4AF37]/20 transition-all duration-700 md:ml-auto">
                <h3 className="text-2xl md:text-3xl font-cinzel text-[#D4AF37] mb-4 tracking-[0.1em] gold-glow">{milestone.title}</h3>
                <p className="text-[#F5E6CA]/70 text-sm md:text-base leading-[1.8] font-cormorant">{milestone.description}</p>
              </div>
            </div>
            <div className="text-left hidden md:flex flex-col items-start">
              <span className="text-[#D4AF37]/10 font-cinzel text-[100px] font-light leading-none select-none drop-shadow-md tracking-widest">{milestone.year}</span>
              <div className="w-1/2 h-[1px] bg-gradient-to-r from-[#D4AF37]/30 to-transparent mt-2" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function MobileMilestone({ milestone, index }: { milestone: Milestone; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(el, { opacity: 0, x: 30, filter: "blur(5px)" }, { opacity: 1, x: 0, filter: "blur(0px)", duration: 1.2, delay: index * 0.15, ease: "power4.out", scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" } });
    });
    return () => ctx.revert();
  }, [index]);

  return (
    <div ref={ref} className="opacity-0">
      <div className="flex items-center gap-4 mb-6">
        <TimelineDot />
        <span className="text-[#D4AF37]/40 font-cinzel text-xl tracking-widest">{milestone.year}</span>
        <div className="flex-grow h-[1px] bg-gradient-to-r from-[#D4AF37]/20 to-transparent" />
      </div>
      <div className="ml-8 pl-6 border-l border-[#D4AF37]/20 pb-8 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1px] before:bg-gradient-to-b before:from-[#D4AF37]/50 before:to-transparent">
        <h3 className="text-2xl font-cinzel text-[#D4AF37] mb-3 tracking-[0.05em]">{milestone.title}</h3>
        <p className="text-[#F5E6CA]/70 text-base leading-[1.8] font-cormorant">{milestone.description}</p>
      </div>
    </div>
  );
}

export default function LoveStory({ title, subtitle, intro, milestones }: LoveStoryProps) {
  return (
    <SectionWrapper id="love-story" className={`relative overflow-hidden ${sectionPadding.py}`}
      style={{ background: "linear-gradient(to bottom, #2B124C, #1c0b33)" }}
    >
      <SectionGlow color="rgba(212,175,55,0.06)" size="w-[800px] h-[800px]" className="top-1/4 left-0" />
      <SectionGlow color="rgba(133,79,108,0.08)" size="w-[600px] h-[600px]" className="bottom-1/3 right-0" />
      <LuxuryPattern variant="islamic" opacity="opacity-[0.03]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pt-10">
        <div className="text-center mb-32 md:mb-48">
          <motion.p variants={subtitleVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-[#D4AF37]/60 text-xs tracking-[0.5em] uppercase mb-6 font-cinzel drop-shadow-sm">
            {subtitle}
          </motion.p>
          <motion.h2 variants={titleVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-cinzel text-[#D4AF37] tracking-[0.02em] gold-glow pb-2">
            {title}
          </motion.h2>
          
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 }} className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mx-auto mt-10 mb-8" />

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.8 }}
            className="text-[#F5E6CA]/60 text-base md:text-xl mt-6 max-w-2xl mx-auto font-cormorant leading-[1.8] italic drop-shadow-md">
            {intro}
          </motion.p>
        </div>

        <div className="relative hidden md:block mt-20">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#D4AF37]/5 via-[#D4AF37]/20 to-[#D4AF37]/5 -translate-x-1/2 shadow-[0_0_15px_rgba(212,175,55,0.1)]" />
          <div className="space-y-40">
            {milestones.map((m, i) => (
              <MilestoneCard key={m.year} milestone={m} index={i} isLeft={i % 2 === 0} />
            ))}
          </div>
        </div>

        <div className="md:hidden mt-20">
          {milestones.map((m, i) => (
            <MobileMilestone key={m.year} milestone={m} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
