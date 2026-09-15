import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RAK Consultancy | Trusted Gulf Work Visa & Recruitment Agency (12+ Years)",
  description: "Ethical Gulf recruitment and legal work visa guidance for Saudi Arabia, UAE, Qatar and Oman. 12+ years, 15,000+ placements and verified employer partners.",
  keywords: ["Gulf work visa", "Saudi Arabia work visa", "UAE work visa", "Qatar work visa", "Gulf recruitment agency", "overseas jobs", "legal recruitment consultancy"],
  openGraph: {
    title: "RAK Consultancy | Build your Gulf career with confidence",
    description: "Trusted Gulf recruitment for ambitious professionals, skilled trades and frontline teams.",
    type: "website",
    locale: "en_IN",
    siteName: "RAK Consultancy",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><LanguageProvider><Navbar /><main className="flex-1">{children}</main><Footer /></LanguageProvider></body>
    </html>
  );
}
