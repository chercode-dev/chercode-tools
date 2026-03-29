import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ลองฟอนต์ไทย 18 ตัว — Preview ฟรี",
  description: "เปรียบเทียบฟอนต์ภาษาไทยจาก Google Fonts 18 ตัว ลองพิมพ์ข้อความ ปรับขนาด ดู heading + body พร้อม copy code Next.js และ CSS ใช้ได้ทันที",
  openGraph: {
    title: "ลองฟอนต์ไทย 18 ตัว — Preview ฟรี | CherCode Tools",
    description: "Preview ฟอนต์ไทย Google Fonts ลองพิมพ์ ปรับขนาด copy code",
    url: "https://tools.chercode.com/fonts",
  },
  alternates: { canonical: "https://tools.chercode.com/fonts" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
