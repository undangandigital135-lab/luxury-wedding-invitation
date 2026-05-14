"use client";

import { motion } from "framer-motion";
import { dividerVariants } from "@/lib/animations";

interface IslamicDividerProps {
  className?: string;
  variant?: "gold" | "dim" | "faint";
  width?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
}

const widthMap = {
  sm: "w-12",
  md: "w-16",
  lg: "w-24",
  xl: "w-32",
};

const colorMap = {
  gold: "bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent",
  dim: "bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent",
  faint: "bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent",
};

export default function IslamicDivider({
  className = "",
  variant = "gold",
  width = "lg",
  animated = true,
}: IslamicDividerProps) {
  if (!animated) {
    return (
      <div
        className={`h-[1px] ${colorMap[variant]} ${widthMap[width]} ${className}`}
      />
    );
  }

  return (
    <motion.div
      variants={dividerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`h-[1px] ${colorMap[variant]} ${widthMap[width]} ${className}`}
    />
  );
}
