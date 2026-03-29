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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "CherCode Tools",
              url: "https://tools.chercode.com",
              description: "รวมเครื่องมือฟรีสำหรับ Web Developer ไทย",
              publisher: {
                "@type": "Organization",
                name: "CherCode",
                url: "https://chercode.com",
                logo: "https://chercode.com/android-chrome-512x512.png",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebApplication",
                  name: "คำนวณราคาทำเว็บไซต์",
                  url: "https://tools.chercode.com/pricing",
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Web Browser",
                  offers: { "@type": "Offer", price: "0", priceCurrency: "THB" },
                  author: { "@type": "Organization", name: "CherCode", url: "https://chercode.com" },
                },
                {
                  "@type": "WebApplication",
                  name: "Color Palette Generator",
                  url: "https://tools.chercode.com/colors",
                  applicationCategory: "DesignApplication",
                  operatingSystem: "Web Browser",
                  offers: { "@type": "Offer", price: "0", priceCurrency: "THB" },
                  author: { "@type": "Organization", name: "CherCode", url: "https://chercode.com" },
                },
                {
                  "@type": "WebApplication",
                  name: "Thai Font Preview",
                  url: "https://tools.chercode.com/fonts",
                  applicationCategory: "DesignApplication",
                  operatingSystem: "Web Browser",
                  offers: { "@type": "Offer", price: "0", priceCurrency: "THB" },
                  author: { "@type": "Organization", name: "CherCode", url: "https://chercode.com" },
                },
              ],
            }),
          }}
        />
        <Navbar />
        {children}
        <footer className="border-t border-dark-border py-12 px-6">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-xl border border-cyan/20 bg-cyan/5 p-6 mb-8 text-center">
              <p className="text-white font-semibold mb-2">ต้องการให้มืออาชีพทำเว็บไซต์ให้?</p>
              <p className="text-gray-400 text-sm mb-4">ปรึกษาฟรี ไม่มีค่าใช้จ่าย ตอบกลับใน 2 ชม.</p>
              <a href="https://chercode.com/contact" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2.5 bg-cyan text-dark font-semibold rounded-lg hover:bg-cyan-dim transition-colors">
                ปรึกษาฟรี →
              </a>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 text-sm mb-8">
              <div>
                <p className="font-semibold text-white mb-2">บริการ</p>
                <ul className="space-y-1 text-gray-400">
                  <li><a href="https://chercode.com/website" className="hover:text-white">รับทำเว็บไซต์</a></li>
                  <li><a href="https://chercode.com/ai/chatbot" className="hover:text-white">AI Chatbot</a></li>
                  <li><a href="https://chercode.com/automation/n8n" className="hover:text-white">n8n Automation</a></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">บทความแนะนำ</p>
                <ul className="space-y-1 text-gray-400">
                  <li><a href="https://chercode.com/blog/website-pricing-guide-2026" className="hover:text-white">ราคาทำเว็บ 2026</a></li>
                  <li><a href="https://chercode.com/blog/free-thai-fonts-2026" className="hover:text-white">25 ฟอนต์ไทยฟรี</a></li>
                  <li><a href="https://chercode.com/blog/web-color-palette-2026" className="hover:text-white">20 Color Palette</a></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">เครื่องมืออื่น</p>
                <ul className="space-y-1 text-gray-400">
                  <li><a href="/pricing" className="hover:text-white">คำนวณราคาเว็บ</a></li>
                  <li><a href="/colors" className="hover:text-white">Color Palette</a></li>
                  <li><a href="/fonts" className="hover:text-white">ลองฟอนต์ไทย</a></li>
                </ul>
              </div>
            </div>
            <p className="text-center text-xs text-gray-500">
              สร้างโดย <a href="https://chercode.com" className="text-cyan hover:underline">CherCode</a> — <a href="https://chercode.com/website" className="hover:text-gray-400">รับทำเว็บไซต์</a> AI และ Automation สำหรับธุรกิจไทย
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
