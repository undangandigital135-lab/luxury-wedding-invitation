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
  metadataBase: new URL("https://hasan-rugayyah.com"),
  title: "Sayyid Hasan & Syarifah Rugayyah | Undangan Pernikahan",
  description:
    "Undangan pernikahan Syarifah Rugayyah binti Almarhum Al Habib Hasan Bin Ja'far Assegaf & Sayyid Hasan bin Alwi Ba'aly. Minggu, 21 Juni 2026. Bertempat di Masjid Nurul Musthofa Center, Cilodong, Depok.",
  openGraph: {
    title: "Sayyid Hasan & Syarifah Rugayyah | Undangan Pernikahan",
    description:
      "Undangan pernikahan Syarifah Rugayyah & Sayyid Hasan. Minggu, 21 Juni 2026. Bertempat di Masjid Nurul Musthofa Center, Cilodong, Depok.",
    type: "website",
    locale: "id_ID",
    siteName: "Hasan & Rugayyah Wedding",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sayyid Hasan & Syarifah Rugayyah Wedding Invitation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayyid Hasan & Syarifah Rugayyah | Undangan Pernikahan",
    description:
      "Undangan pernikahan Syarifah Rugayyah & Sayyid Hasan. Minggu, 21 Juni 2026.",
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
