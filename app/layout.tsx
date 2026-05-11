import type { Metadata } from "next";
import { Fraunces, Geist, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DemoBanner from "@/components/DemoBanner";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digital Concepts Factory — Grip op groei begint met digitale innovatie",
  description:
    "Digital Concepts Factory ontwikkelt digitale innovaties voor HR, Inkoop en Marketing. Sneller talent vinden, langer behouden, ziekteverzuim verlagen, inkoop slimmer organiseren.",
  metadataBase: new URL("https://dcf-demo.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="nl"
      className={`${fraunces.variable} ${geist.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen flex flex-col grain">
        <DemoBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
