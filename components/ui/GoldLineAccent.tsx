"use client";

import { motion } from "framer-motion";
import { dividerVariants } from "@/lib/animations";

interface GoldLineAccentProps {
  className?: string;
  width?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
}

const wMap = { sm: "w-12", md: "w-16", lg: "w-24", xl: "w-32" };

export default function GoldLineAccent({
  className = "",
  width = "lg",
  animated = true,
}: GoldLineAccentProps) {
  const cls = `h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent ${wMap[width]} ${className}`;

  if (!animated) return <div className={cls} />;

  return (
    <motion.div
      variants={dividerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cls}
    />
  );
}
