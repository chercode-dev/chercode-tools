"use client";

import { useState } from "react";

const fonts = [
  { name: "Noto Sans Thai", family: "'Noto Sans Thai', sans-serif", gf: "Noto+Sans+Thai", style: "Neutral มาตรฐาน", best: "Body text ทุกประเภท" },
  { name: "IBM Plex Sans Thai", family: "'IBM Plex Sans Thai', sans-serif", gf: "IBM+Plex+Sans+Thai", style: "Professional", best: "Corporate, Fintech" },
  { name: "Sarabun", family: "'Sarabun', sans-serif", gf: "Sarabun", style: "อ่านง่าย", best: "ราชการ, Document" },
  { name: "Prompt", family: "'Prompt', sans-serif", gf: "Prompt", style: "ทันสมัย", best: "Startup, App" },
  { name: "Kanit", family: "'Kanit', sans-serif", gf: "Kanit", style: "หนา โดดเด่น", best: "Heading, Banner" },
  { name: "Mitr", family: "'Mitr', sans-serif", gf: "Mitr", style: "มน Friendly", best: "เด็ก, ครอบครัว" },
  { name: "Pridi", family: "'Pridi', serif", gf: "Pridi", style: "Serif ไทย", best: "Luxury, Legal" },
  { name: "Chakra Petch", family: "'Chakra Petch', sans-serif", gf: "Chakra+Petch", style: "Techno", best: "Auto, Sport, Gaming" },
  { name: "Bai Jamjuree", family: "'Bai Jamjuree', sans-serif", gf: "Bai+Jamjuree", style: "Geometric", best: "Tech, Modern" },
  { name: "K2D", family: "'K2D', sans-serif", gf: "K2D", style: "Futuristic", best: "Gaming, Sci-fi" },
  { name: "Kodchasan", family: "'Kodchasan', sans-serif", gf: "Kodchasan", style: "Rounded Modern", best: "App, UI" },
  { name: "Itim", family: "'Itim', cursive", gf: "Itim", style: "Handwritten", best: "Casual, Kids" },
  { name: "Chonburi", family: "'Chonburi', serif", gf: "Chonburi", style: "Bold Display", best: "Poster, Banner" },
  { name: "Thasadith", family: "'Thasadith', sans-serif", gf: "Thasadith", style: "Thin Elegant", best: "Fashion, Beauty" },
  { name: "Athiti", family: "'Athiti', sans-serif", gf: "Athiti", style: "Neutral", best: "News, Content" },
  { name: "Mali", family: "'Mali', cursive", gf: "Mali", style: "Handwriting", best: "Blog, Personal" },
  { name: "Charm", family: "'Charm', cursive", gf: "Charm", style: "Elegant Casual", best: "Lifestyle" },
  { name: "Srisakdi", family: "'Srisakdi', serif", gf: "Srisakdi", style: "Calligraphic", best: "Traditional, อาหาร" },
];

const defaultText = "สวัสดีครับ CherCode รับทำเว็บไซต์ AI และ Automation";
const defaultHeading = "เว็บไซต์ที่ขับเคลื่อนธุรกิจ";

export default function FontsPage() {
  const [previewText, setPreviewText] = useState(defaultText);
  const [headingText, setHeadingText] = useState(defaultHeading);
  const [fontSize, setFontSize] = useState(18);
  const [selectedFont, setSelectedFont] = useState<string | null>(null);

  const fontsQuery = fonts.map((f) => `family=${f.gf}:wght@300;400;500;600;700`).join("&");

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Load all Google Fonts */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="stylesheet" href={`https://fonts.googleapis.com/css2?${fontsQuery}&display=swap`} />

      <div className="text-center mb-10">
        <span className="text-sm font-medium text-cyan tracking-wider uppercase">Thai Font Preview</span>
        <h1 className="mt-3 text-4xl font-bold text-white">ลองฟอนต์ไทย 18 ตัว</h1>
        <p className="mt-3 text-gray-400">เปรียบเทียบฟอนต์ภาษาไทยจาก Google Fonts พร้อม copy code</p>
      </div>

      {/* Controls */}
      <div className="mb-8 rounded-xl border border-dark-border bg-dark-card p-4 space-y-3">
        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-gray-500 block mb-1">Heading Preview</label>
            <input
              value={headingText}
              onChange={(e) => setHeadingText(e.target.value)}
              className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white text-sm focus:border-cyan focus:outline-none"
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">Body Preview</label>
            <input
              value={previewText}
              onChange={(e) => setPreviewText(e.target.value)}
              className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white text-sm focus:border-cyan focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label className="text-xs text-gray-500 block mb-1">ขนาดตัวอักษร: {fontSize}px</label>
          <input
            type="range"
            min={12}
            max={32}
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="w-full accent-cyan"
          />
        </div>
      </div>

      {/* Font Grid */}
      <div className="space-y-4">
        {fonts.map((font) => (
          <div
            key={font.name}
            onClick={() => setSelectedFont(selectedFont === font.name ? null : font.name)}
            className={`rounded-xl border p-5 cursor-pointer transition-all duration-200 ${
              selectedFont === font.name ? "border-cyan bg-cyan/5" : "border-dark-border bg-dark-card hover:border-gray-600"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="font-semibold text-white text-sm">{font.name}</span>
                <span className="text-xs text-gray-500 ml-2">{font.style} · {font.best}</span>
              </div>
              <a
                href={`https://fonts.google.com/specimen/${font.gf.replace(/\+/g, "+")}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs text-cyan hover:underline"
              >
                Google Fonts →
              </a>
            </div>

            {/* Heading preview */}
            <p className="text-2xl text-white mb-2" style={{ fontFamily: font.family }}>
              {headingText}
            </p>

            {/* Body preview */}
            <p className="text-gray-300 leading-relaxed" style={{ fontFamily: font.family, fontSize }}>
              {previewText}
            </p>

            {/* Weight samples */}
            <div className="mt-3 flex gap-4 text-sm">
              {[300, 400, 600, 700].map((w) => (
                <span key={w} className="text-gray-400" style={{ fontFamily: font.family, fontWeight: w }}>
                  {w} นน.
                </span>
              ))}
            </div>

            {/* Copy code */}
            {selectedFont === font.name && (
              <div className="mt-4 pt-4 border-t border-dark-border space-y-2">
                <p className="text-xs text-gray-500">Next.js (next/font):</p>
                <code className="block bg-dark rounded-lg px-3 py-2 text-xs text-cyan overflow-x-auto">
                  {`import { ${font.name.replace(/\s/g, "_")} } from "next/font/google";\nconst font = ${font.name.replace(/\s/g, "_")}({ subsets: ["thai"], display: "swap" });`}
                </code>
                <p className="text-xs text-gray-500 mt-2">CSS:</p>
                <code className="block bg-dark rounded-lg px-3 py-2 text-xs text-cyan overflow-x-auto">
                  {`font-family: ${font.family};`}
                </code>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-sm text-gray-500">
          อ่านเพิ่ม: <a href="https://chercode.com/blog/free-thai-fonts-2026" className="text-cyan hover:underline">25 ฟอนต์ไทยฟรี 2026</a> ·{" "}
          <a href="https://chercode.com/blog/thai-web-font-guide" className="text-cyan hover:underline">เลือกฟอนต์เว็บไซต์ไทย</a> ·{" "}
          <a href="https://chercode.com/website" className="text-gray-400 hover:text-white">รับทำเว็บไซต์</a>
        </p>
      </div>
    </main>
  );
}
