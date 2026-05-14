// ─── LUXURY PURPLE THEME TOKENS ────────────────────────

export const colors = {
  deep: "#2B124C",
  royal: "#522B5B",
  mauve: "#854F6C",
  gold: "#D4AF37",
  cream: "#F5E6CA",
} as const;

export const goldGradient = "bg-gradient-to-r from-[#D4AF37] via-[#F5E6CA] to-[#D4AF37]";
export const goldGradientDim = "bg-gradient-to-r from-[#D4AF37]/40 via-[#F5E6CA]/30 to-[#D4AF37]/40";
export const goldGradientFaint = "bg-gradient-to-r from-[#D4AF37]/15 via-[#F5E6CA]/10 to-[#D4AF37]/15";

export const bgGradient = {
  primary: "bg-gradient-to-b from-[#2B124C] to-[#1A0A30]",
  secondary: "bg-gradient-to-b from-[#2B124C] via-[#522B5B]/30 to-[#2B124C]",
  section: "bg-gradient-to-b from-[#2B124C] via-[#1A0A30] to-[#2B124C]",
  hero: "bg-gradient-to-b from-[#2B124C] via-[#3D1A5A] to-[#2B124C]",
} as const;

export const glassmorphism =
  "bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.3)]";
export const glassmorphismGold =
  "bg-white/[0.03] backdrop-blur-xl border border-[#D4AF37]/10 shadow-[0_8px_32px_rgba(212,175,55,0.08)]";

export const glowEffect = {
  gold: "shadow-[0_0_40px_rgba(212,175,55,0.15),0_0_80px_rgba(212,175,55,0.05)]",
  purple: "shadow-[0_0_40px_rgba(43,18,76,0.3),0_0_80px_rgba(82,43,91,0.1)]",
  text: "text-shadow: 0 0 40px rgba(212,175,55,0.3)",
} as const;

export const fontFamily = {
  display: "font-serif",
  heading: "font-serif",
  body: "font-sans",
  arabic: "font-arabic",
} as const;
