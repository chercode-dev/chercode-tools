import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "คำนวณราคาทำเว็บไซต์ 2026 — ฟรี",
  description: "คำนวณราคาทำเว็บไซต์ออนไลน์ฟรี ตอบ 5 คำถาม รู้ราคาประมาณทันที พร้อมแนะนำแพ็กเกจที่เหมาะกับธุรกิจ ไม่ต้องสมัคร ไม่ต้องให้ข้อมูลส่วนตัว",
  openGraph: {
    title: "คำนวณราคาทำเว็บไซต์ 2026 — ฟรี | CherCode Tools",
    description: "ตอบ 5 คำถาม รู้ราคาทำเว็บโดยประมาณทันที",
    url: "https://tools.chercode.com/pricing",
  },
  alternates: { canonical: "https://tools.chercode.com/pricing" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
