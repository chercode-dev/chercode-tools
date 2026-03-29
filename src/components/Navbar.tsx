import Link from "next/link";

const tools = [
  { name: "คำนวณราคาเว็บ", href: "/pricing" },
  { name: "Color Palette", href: "/colors" },
  { name: "ลองฟอนต์ไทย", href: "/fonts" },
];

export default function Navbar() {
  return (
    <nav className="border-b border-dark-border bg-dark/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-white font-semibold">
          <span className="text-cyan">⚡</span> CherCode Tools
        </Link>
        <div className="flex gap-4 text-sm">
          {tools.map((t) => (
            <Link key={t.href} href={t.href} className="text-gray-400 hover:text-white transition-colors">
              {t.name}
            </Link>
          ))}
          <a href="https://chercode.com" target="_blank" rel="noopener noreferrer" className="text-cyan hover:text-cyan-dim transition-colors">
            chercode.com →
          </a>
        </div>
      </div>
    </nav>
  );
}
