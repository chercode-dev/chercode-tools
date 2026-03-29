"use client";

import { useState } from "react";

const palettes = [
  {
    category: "Corporate / บริษัท",
    items: [
      { name: "Navy Gold", colors: ["#1e3a5f", "#2c5282", "#d4a843", "#f5f5f5", "#ffffff"], mood: "น่าเชื่อถือ มืออาชีพ" },
      { name: "Slate Teal", colors: ["#1e293b", "#334155", "#0d9488", "#f1f5f9", "#ffffff"], mood: "สะอาด ทันสมัย" },
      { name: "Charcoal Blue", colors: ["#111827", "#1f2937", "#3b82f6", "#e5e7eb", "#ffffff"], mood: "เทคโนโลยี มั่นคง" },
      { name: "Warm Professional", colors: ["#292524", "#44403c", "#b45309", "#fef3c7", "#ffffff"], mood: "อบอุ่น น่าไว้ใจ" },
    ],
  },
  {
    category: "คลินิก / สุขภาพ",
    items: [
      { name: "Mint Clean", colors: ["#064e3b", "#0d9488", "#5eead4", "#f0fdfa", "#ffffff"], mood: "สะอาด ปลอดภัย" },
      { name: "Medical Blue", colors: ["#1e3a5f", "#0284c7", "#7dd3fc", "#f0f9ff", "#ffffff"], mood: "มืออาชีพ ไว้ใจ" },
      { name: "Lavender Care", colors: ["#4c1d95", "#7c3aed", "#c4b5fd", "#f5f3ff", "#ffffff"], mood: "อ่อนโยน ดูแล" },
      { name: "Warm Health", colors: ["#065f46", "#059669", "#a7f3d0", "#fef3c7", "#ffffff"], mood: "ธรรมชาติ สุขภาพ" },
    ],
  },
  {
    category: "ร้านอาหาร / คาเฟ่",
    items: [
      { name: "Red Cream", colors: ["#1c1917", "#dc2626", "#f87171", "#fef3c7", "#ffffff"], mood: "เจริญอาหาร อบอุ่น" },
      { name: "Earth Tone", colors: ["#292524", "#78350f", "#d97706", "#fef3c7", "#fffbeb"], mood: "ธรรมชาติ Organic" },
      { name: "Green Fresh", colors: ["#14532d", "#16a34a", "#86efac", "#f0fdf4", "#ffffff"], mood: "สด สุขภาพ" },
      { name: "Dark Elegant", colors: ["#0a0a0a", "#171717", "#d4a843", "#f5f5f5", "#ffffff"], mood: "หรูหรา Fine Dining" },
    ],
  },
  {
    category: "Tech / Startup",
    items: [
      { name: "Cyan Dark", colors: ["#0a0a0a", "#171717", "#06b6d4", "#a5f3fc", "#ffffff"], mood: "เทค ทันสมัย (CherCode!)" },
      { name: "Purple Night", colors: ["#0f0520", "#1e1b4b", "#8b5cf6", "#c4b5fd", "#ffffff"], mood: "สร้างสรรค์ AI" },
      { name: "Electric Blue", colors: ["#020617", "#0f172a", "#2563eb", "#93c5fd", "#ffffff"], mood: "เชื่อมั่น มั่นคง" },
      { name: "Neon Green", colors: ["#0a0a0a", "#171717", "#22c55e", "#86efac", "#ffffff"], mood: "เร็ว เติบโต" },
    ],
  },
  {
    category: "Luxury / แฟชั่น",
    items: [
      { name: "Black Gold", colors: ["#000000", "#171717", "#c8a960", "#f5f0e1", "#ffffff"], mood: "หรูหรา พรีเมียม" },
      { name: "Burgundy Cream", colors: ["#1a0000", "#7f1d1d", "#dc2626", "#fef2f2", "#fffbeb"], mood: "คลาสสิก สง่า" },
      { name: "Navy Rose", colors: ["#0f172a", "#1e3a5f", "#e11d48", "#fce7f3", "#ffffff"], mood: "ทันสมัย มีระดับ" },
      { name: "Silver Minimal", colors: ["#18181b", "#27272a", "#a1a1aa", "#f4f4f5", "#ffffff"], mood: "เรียบง่าย โมเดิร์น" },
    ],
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
      className="text-xs text-gray-500 hover:text-cyan transition-colors"
    >
      {copied ? "✓ copied" : text}
    </button>
  );
}

export default function ColorsPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="text-center mb-12">
        <span className="text-sm font-medium text-cyan tracking-wider uppercase">Color Palette</span>
        <h1 className="mt-3 text-4xl font-bold text-white">Color Palette สำหรับเว็บไซต์ไทย</h1>
        <p className="mt-3 text-gray-400">เลือกชุดสีตามอุตสาหกรรม คลิก HEX เพื่อ copy</p>
      </div>

      {palettes.map((cat) => (
        <div key={cat.category} className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">{cat.category}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {cat.items.map((p) => (
              <div
                key={p.name}
                onClick={() => setSelected(selected === p.name ? null : p.name)}
                className={`rounded-xl border p-4 cursor-pointer transition-all duration-200 ${
                  selected === p.name ? "border-cyan bg-cyan/5" : "border-dark-border bg-dark-card hover:border-gray-600"
                }`}
              >
                <div className="flex gap-1 mb-3 h-12 rounded-lg overflow-hidden">
                  {p.colors.map((c, i) => (
                    <div key={i} className="flex-1" style={{ backgroundColor: c }} />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white text-sm">{p.name}</p>
                    <p className="text-xs text-gray-500">{p.mood}</p>
                  </div>
                </div>
                {selected === p.name && (
                  <div className="mt-3 pt-3 border-t border-dark-border flex flex-wrap gap-3">
                    {p.colors.map((c, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded border border-dark-border" style={{ backgroundColor: c }} />
                        <CopyButton text={c} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="text-center mt-8">
        <p className="text-sm text-gray-500">
          อ่านเพิ่ม: <a href="https://chercode.com/blog/web-color-palette-2026" className="text-cyan hover:underline">20 Color Palette สวยๆ 2026</a> ·{" "}
          <a href="https://chercode.com/website" className="text-gray-400 hover:text-white">รับทำเว็บไซต์</a>
        </p>
      </div>
    </main>
  );
}
