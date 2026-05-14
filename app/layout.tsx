import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  weight: ["400", "600"],
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "600"],
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  weight: ["400", "600"],
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aisy-yusuf.com"),
  title: "Aisha & Yusuf | Royal Wedding Invitation",
  description:
    "Undangan pernikahan Aisha Rahmah Putri & Yusuf Al-Hakim. Sabtu, 18 Juli 2026. Bertempat di Masjid Agung Al-Mukarram, Bandung.",
  openGraph: {
    title: "Aisha & Yusuf | Royal Wedding Invitation",
    description:
      "Undangan pernikahan Aisha Rahmah Putri & Yusuf Al-Hakim. Sabtu, 18 Juli 2026.",
    type: "website",
    locale: "id_ID",
    siteName: "Aisha & Yusuf Royal Wedding",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aisha & Yusuf Royal Wedding Invitation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aisha & Yusuf | Royal Wedding Invitation",
    description:
      "Undangan pernikahan Aisha Rahmah Putri & Yusuf Al-Hakim. Sabtu, 18 Juli 2026.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${cinzel.variable} ${cormorant.variable} ${jakarta.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
