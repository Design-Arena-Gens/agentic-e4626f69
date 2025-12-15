import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Nur Al-Quran Academy | Online Quran Tutoring",
  description:
    "Certified Quran tutors offering personalized tajwīd, recitation, and memorization programs for learners of every level.",
  metadataBase: new URL("https://agentic-e4626f69.vercel.app"),
  openGraph: {
    title: "Nur Al-Quran Academy",
    description:
      "Book a free trial with ijazah-certified Quran tutors. Flexible online lessons for kids and adults worldwide.",
    url: "https://agentic-e4626f69.vercel.app",
    siteName: "Nur Al-Quran Academy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nur Al-Quran Academy",
    description:
      "Learn the Quran online with compassionate, certified tutors. Tajwīd, memorization, and ijazah preparation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
