"use client";

import { useState } from "react";

interface SocialShareProps {
  url?: string;
  title?: string;
}

export default function SocialShare({ url, title = "Aisha & Yusuf Wedding" }: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const href = url || (typeof window !== "undefined" ? window.location.href : "");

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* */ }
  };

  const shareWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(`${title}\n${href}`)}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-2">
      <button
        onClick={shareWhatsApp}
        className="w-10 h-10 rounded-full bg-white/[0.03] backdrop-blur-xl border border-[#D4AF37]/10 flex items-center justify-center hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/25 transition-all duration-300 group"
        aria-label="Share via WhatsApp"
        title="Share via WhatsApp"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" className="group-hover:scale-110 transition-transform">
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
        </svg>
      </button>
      <button
        onClick={copyLink}
        className="w-10 h-10 rounded-full bg-white/[0.03] backdrop-blur-xl border border-[#D4AF37]/10 flex items-center justify-center hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/25 transition-all duration-300 group"
        aria-label={copied ? "Copied" : "Copy link"}
        title={copied ? "Copied!" : "Copy link"}
      >
        {copied ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" className="group-hover:scale-110 transition-transform">
            <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
          </svg>
        )}
      </button>
    </div>
  );
}
