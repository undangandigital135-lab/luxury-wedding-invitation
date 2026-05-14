interface LuxuryPatternProps {
  className?: string;
  variant?: "islamic" | "dots" | "stars";
  opacity?: string;
}

export default function LuxuryPattern({
  className = "",
  variant = "islamic",
  opacity = "opacity-[0.04]",
}: LuxuryPatternProps) {
  const patterns = {
    islamic: (
      <pattern id="lux-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
        <path d="M60 5L112 60 60 115 8 60z" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
        <path d="M60 25L90 60 60 95 30 60z" fill="none" stroke="#D4AF37" strokeWidth="0.3" />
        <circle cx="60" cy="60" r="15" fill="none" stroke="#D4AF37" strokeWidth="0.2" />
      </pattern>
    ),
    dots: (
      <pattern id="lux-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
        <circle cx="30" cy="30" r="2" fill="#D4AF37" />
        <circle cx="0" cy="0" r="1" fill="#D4AF37" fillOpacity="0.5" />
        <circle cx="60" cy="60" r="1" fill="#D4AF37" fillOpacity="0.5" />
      </pattern>
    ),
    stars: (
      <pattern id="lux-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <polygon points="50,5 61,38 95,38 68,57 79,90 50,72 21,90 32,57 5,38 39,38" fill="none" stroke="#D4AF37" strokeWidth="0.3" />
        <circle cx="50" cy="50" r="3" fill="#D4AF37" fillOpacity="0.3" />
      </pattern>
    ),
  };

  return (
    <div className={`absolute inset-0 pointer-events-none ${opacity} ${className}`} aria-hidden="true">
      <svg className="w-full h-full">
        <defs>{patterns[variant]}</defs>
        <rect width="100%" height="100%" fill="url(#lux-pattern)" />
      </svg>
    </div>
  );
}
