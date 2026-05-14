interface OrnamentFrameProps {
  className?: string;
}

export default function OrnamentFrame({ className = "" }: OrnamentFrameProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden="true">
      <svg
        className="absolute top-6 left-6 w-14 h-14 text-[#D4AF37]/15"
        viewBox="0 0 56 56"
        fill="none"
      >
        <path d="M2 2h20v3H5v17H2V2z" fill="currentColor" />
        <path d="M54 2H34v3h17v17h3V2z" fill="currentColor" />
        <path d="M28 6l5 11-5 5-5-11 5-5z" fill="currentColor" fillOpacity="0.25" />
      </svg>
      <svg
        className="absolute bottom-6 right-6 w-14 h-14 text-[#D4AF37]/15 rotate-180"
        viewBox="0 0 56 56"
        fill="none"
      >
        <path d="M2 2h20v3H5v17H2V2z" fill="currentColor" />
        <path d="M54 2H34v3h17v17h3V2z" fill="currentColor" />
        <path d="M28 6l5 11-5 5-5-11 5-5z" fill="currentColor" fillOpacity="0.25" />
      </svg>
      <div className="absolute inset-5 border border-[#D4AF37]/8 rounded-3xl" />
      <div className="absolute inset-7 border border-[#D4AF37]/4 rounded-2xl" />
    </div>
  );
}
