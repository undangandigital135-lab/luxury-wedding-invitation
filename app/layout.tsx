import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${cormorant.variable} ${jakarta.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
