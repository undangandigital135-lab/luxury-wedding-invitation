interface SectionGlowProps {
  className?: string;
  color?: string;
  size?: string;
}

export default function SectionGlow({
  className = "",
  color = "rgba(212,175,55,0.06)",
  size = "w-[600px] h-[600px]",
}: SectionGlowProps) {
  return (
    <div
      className={`absolute rounded-full pointer-events-none ${size} ${className}`}
      style={{
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      }}
      aria-hidden="true"
    />
  );
}
