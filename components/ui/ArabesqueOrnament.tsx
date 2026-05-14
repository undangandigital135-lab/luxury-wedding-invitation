interface ArabesqueOrnamentProps {
  className?: string;
  variant?: "corner" | "divider" | "frame";
}

export default function ArabesqueOrnament({
  className = "",
  variant = "corner",
}: ArabesqueOrnamentProps) {
  if (variant === "divider") {
    return (
      <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent max-w-[80px]" />
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#D4AF37]/30">
          <path d="M12 2L15 9H22L16 14L19 21L12 17L5 21L8 14L2 9H9L12 2Z" fill="currentColor" />
        </svg>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent max-w-[80px]" />
      </div>
    );
  }

  if (variant === "frame") {
    return (
      <div className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden="true">
        <svg className="absolute top-5 left-5 w-12 h-12 text-[#D4AF37]/15" viewBox="0 0 48 48" fill="none">
          <path d="M2 2h18v3H5v15H2V2z" fill="currentColor" />
          <path d="M46 2H28v3h15v15h3V2z" fill="currentColor" />
          <path d="M24 4l4 9-4 4-4-9 4-4z" fill="currentColor" fillOpacity="0.3" />
        </svg>
        <svg className="absolute bottom-5 right-5 w-12 h-12 text-[#D4AF37]/15 rotate-180" viewBox="0 0 48 48" fill="none">
          <path d="M2 2h18v3H5v15H2V2z" fill="currentColor" />
          <path d="M46 2H28v3h15v15h3V2z" fill="currentColor" />
          <path d="M24 4l4 9-4 4-4-9 4-4z" fill="currentColor" fillOpacity="0.3" />
        </svg>
        <div className="absolute inset-4 border border-[#D4AF37]/8 rounded-2xl" />
        <div className="absolute inset-6 border border-[#D4AF37]/4 rounded-xl" />
      </div>
    );
  }

  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <path d="M2 2h20v3H5v17H2V2z" fill="currentColor" />
      <path d="M78 2H58v3h17v17h3V2z" fill="currentColor" />
      <path d="M40 4l7 14-7 7-7-14 7-7z" fill="currentColor" fillOpacity="0.3" />
      <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
    </svg>
  );
}
