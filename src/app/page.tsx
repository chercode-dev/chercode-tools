import Link from "next/link";

const tools = [
  {
    name: "คำนวณราคาทำเว็บไซต์",
    description: "ตอบคำถาม 5 ข้อ แล้วรู้ราคาทำเว็บโดยประมาณ พร้อมแนะนำแพ็กเกจที่เหมาะ",
    href: "/pricing",
    icon: "💰",
    tag: "ยอดนิยม",
  },
  {
    name: "Color Palette สำหรับเว็บไซต์",
    description: "สร้างชุดสีสำหรับเว็บไซต์ เลือกตามอุตสาหกรรม พร้อม copy HEX/Tailwind code",
    href: "/colors",
    icon: "🎨",
  },
  {
    name: "ลองฟอนต์ไทย",
    description: "Preview ฟอนต์ภาษาไทย 25+ ตัวบนเว็บจริง เปรียบเทียบ heading + body พร้อม copy code",
    href: "/fonts",
    icon: "🔤",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="text-center mb-16">
        <span className="text-sm font-medium text-cyan tracking-wider uppercase">Free Tools</span>
        <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white leading-tight">
          เครื่องมือฟรีสำหรับทำเว็บไซต์
        </h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          รวมเครื่องมือที่ช่วยให้การทำเว็บไซต์ง่ายขึ้น ใช้ได้ฟรี ไม่ต้องสมัคร
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group relative block p-6 rounded-xl border border-dark-border bg-dark-card hover:border-cyan/40 transition-all duration-300"
          >
            {tool.tag && (
              <span className="absolute -top-2.5 right-4 text-xs font-medium bg-cyan text-dark px-2.5 py-0.5 rounded-full">
                {tool.tag}
              </span>
            )}
            <div className="text-3xl mb-4">{tool.icon}</div>
            <h2 className="text-lg font-semibold text-white group-hover:text-cyan transition-colors">
              {tool.name}
            </h2>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed">
              {tool.description}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-500 text-sm">
          สร้างโดย <a href="https://chercode.com" className="text-cyan hover:underline">CherCode</a> —{" "}
          <a href="https://chercode.com/website" className="text-gray-400 hover:text-white">รับทำเว็บไซต์</a> ·{" "}
          <a href="https://chercode.com/ai/chatbot" className="text-gray-400 hover:text-white">AI Chatbot</a> ·{" "}
          <a href="https://chercode.com/automation/n8n" className="text-gray-400 hover:text-white">Automation</a>
        </p>
      </div>
    </main>
  );
}
