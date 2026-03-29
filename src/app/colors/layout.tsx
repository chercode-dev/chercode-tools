import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Color Palette สำหรับเว็บไซต์ไทย 2026 — ฟรี",
  description: "รวม 20 ชุดสีสำหรับเว็บไซต์แบ่งตามอุตสาหกรรม Corporate คลินิก ร้านอาหาร Tech Luxury พร้อม HEX code คลิก copy ใช้ได้ทันที",
  openGraph: {
    title: "Color Palette สำหรับเว็บไซต์ไทย 2026 | CherCode Tools",
    description: "20 ชุดสี 5 หมวดอุตสาหกรรม คลิก copy HEX ได้ทันที",
    url: "https://tools.chercode.com/colors",
  },
  alternates: { canonical: "https://tools.chercode.com/colors" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
