import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-noto", display: "swap" });
const notoSansThai = Noto_Sans_Thai({ subsets: ["thai"], variable: "--font-noto-thai", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://tools.chercode.com"),
  title: { default: "CherCode Tools — เครื่องมือฟรีสำหรับทำเว็บไซต์", template: "%s | CherCode Tools" },
  description: "รวมเครื่องมือฟรีสำหรับ Web Developer ไทย — คำนวณราคาเว็บ, Color Palette, Thai Font Preview",
  openGraph: {
    siteName: "CherCode Tools",
    locale: "th_TH",
    type: "website",
    images: [{ url: "https://chercode.com/og-image.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={`${notoSans.variable} ${notoSansThai.variable} dark`}>
      <body className="bg-dark text-gray-100 font-sans antialiased min-h-screen">
        <Navbar />
        {children}
        <footer className="border-t border-dark-border py-8 text-center text-sm text-gray-500">
          <p>สร้างโดย <a href="https://chercode.com" className="text-cyan hover:underline">CherCode</a> — รับทำเว็บไซต์ AI และ Automation สำหรับธุรกิจไทย</p>
        </footer>
      </body>
    </html>
  );
}
