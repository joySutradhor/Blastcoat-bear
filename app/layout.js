import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.blastcoat.co.uk/"),

  title: {
    default: "Blastcoat | Shot Blasting & Powder Coating Services UK",
    template: "%s | Blastcoat",
  },

  description:
    "Professional shot blasting, powder coating, and mobile blasting services in the UK. Industrial and commercial surface preparation with guaranteed quality results.",

  keywords: [
    "shot blasting UK",
    "powder coating services",
    "mobile shot blasting",
    "industrial blasting",
    "surface preparation UK",
  ],

  authors: [{ name: "Blastcoat" }],
  creator: "Blastcoat",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Blastcoat | Professional Blasting & Coating Services",
    description:
      "Reliable shot blasting and powder coating specialists serving commercial and industrial clients across the UK.",
    url: "https://www.blastcoat.co.uk/",
    siteName: "Blastcoat",
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Blastcoat | Shot Blasting & Powder Coating UK",
    description:
      "Expert surface preparation and coating services with proven industrial results.",
  },

  
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
