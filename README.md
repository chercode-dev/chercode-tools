# CherCode Tools ⚡

> เครื่องมือฟรีสำหรับทำเว็บไซต์ — คำนวณราคา, Color Palette, ลองฟอนต์ไทย

[![Live](https://img.shields.io/badge/Live-tools.chercode.com-06b6d4)](https://tools.chercode.com)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**Live:** [tools.chercode.com](https://tools.chercode.com)

---

## 🛠️ Tools

### 1. คำนวณราคาทำเว็บไซต์ (`/pricing`)

ตอบ 5 คำถาม → รู้ราคาทำเว็บโดยประมาณทันที พร้อมแนะนำแพ็กเกจที่เหมาะ

- ประเภทเว็บ: Landing Page, บริษัท, คลินิก, ร้านอาหาร, โรงแรม, E-commerce, Web App
- ฟีเจอร์พิเศษ: ระบบจอง, Login, CMS, หลายภาษา, Payment, LINE OA, AI Chatbot
- ระดับดีไซน์: พื้นฐาน / มาตรฐาน / พรีเมียม
- Timeline: ปกติ / เร่ง / เร่งมาก
- ผลลัพธ์: ราคาประมาณ + แนะนำ tier (Lite/Starter/Business/Enterprise)

**[ลองเลย →](https://tools.chercode.com/pricing)**

### 2. Color Palette สำหรับเว็บไซต์ (`/colors`)

20 ชุดสีสำหรับเว็บไซต์ แบ่งตาม 5 อุตสาหกรรม คลิก copy HEX code ได้ทันที

- Corporate / บริษัท (4 palettes)
- คลินิก / สุขภาพ (4 palettes)
- ร้านอาหาร / คาเฟ่ (4 palettes)
- Tech / Startup (4 palettes)
- Luxury / แฟชั่น (4 palettes)

**[ลองเลย →](https://tools.chercode.com/colors)**

### 3. ลองฟอนต์ไทย (`/fonts`)

Preview ฟอนต์ภาษาไทยจาก Google Fonts 18 ตัว — พิมพ์ข้อความเอง ปรับขนาด เปรียบเทียบ heading + body พร้อม copy code

- 18 ฟอนต์: Noto Sans Thai, IBM Plex Sans Thai, Sarabun, Prompt, Kanit, Mitr, Pridi, Chakra Petch, และอื่นๆ
- ปรับ heading text + body text + font size ได้
- ดู weight ทั้ง 300, 400, 600, 700
- Copy code: Next.js (`next/font`) และ CSS (`font-family`)

**[ลองเลย →](https://tools.chercode.com/fonts)**

---

## Tech Stack

| เทคโนโลยี | เวอร์ชัน | ทำไมเลือก |
|-----------|---------|----------|
| [Next.js](https://nextjs.org/) | 16 | App Router + Turbopack, SSG |
| [React](https://react.dev/) | 19 | Server Components + Client interactivity |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Utility-first, dark theme |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type safety |
| [Bun](https://bun.sh/) | 1.3+ | Fast package manager |
| [Vercel](https://vercel.com/) | - | Deploy + CDN + SSL |

## Design

- **Dark theme** — `gray-950` background matching [chercode.com](https://chercode.com)
- **Cyan accent** — `#06b6d4` brand color
- **Noto Sans Thai** — auto-optimized via `next/font`
- **Responsive** — mobile-first, ใช้ได้ทุกอุปกรณ์

## SEO

- Per-page metadata (title, description, Open Graph, canonical)
- `WebSite` + `WebApplication` JSON-LD schema markup
- Auto-generated `sitemap.xml` + `robots.txt`
- AI crawler friendly (GPTBot, ClaudeBot allowed)

## Development

```bash
# Clone
git clone https://github.com/chercode-dev/chercode-tools.git
cd chercode-tools

# Install
bun install

# Dev
bun dev          # http://localhost:3000

# Build
bun run build    # Production build

# Deploy
vercel --prod    # Deploy to Vercel
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + schema + footer
│   ├── page.tsx            # Homepage — tool cards
│   ├── sitemap.ts          # Auto sitemap
│   ├── robots.ts           # robots.txt
│   ├── globals.css         # Tailwind + brand tokens
│   ├── pricing/
│   │   ├── layout.tsx      # SEO metadata
│   │   └── page.tsx        # Price calculator (5-step quiz)
│   ├── colors/
│   │   ├── layout.tsx      # SEO metadata
│   │   └── page.tsx        # Color palette generator
│   └── fonts/
│       ├── layout.tsx      # SEO metadata
│       └── page.tsx        # Thai font preview
└── components/
    └── Navbar.tsx           # Navigation bar
```

## Related Projects

| Repo | คำอธิบาย |
|------|---------|
| [thai-seo-checklist](https://github.com/chercode-dev/thai-seo-checklist) | SEO Checklist สำหรับเว็บไซต์ไทย |
| [thai-nextjs-starter](https://github.com/chercode-dev/thai-nextjs-starter) | Next.js starter template เว็บไทย |
| [n8n-thai-templates](https://github.com/chercode-dev/n8n-thai-templates) | n8n workflow templates ธุรกิจไทย |
| [web-dev-resources-th](https://github.com/chercode-dev/web-dev-resources-th) | รวม resources สำหรับ developer ไทย |

## Related Articles

- [ทำเว็บไซต์ราคาเท่าไหร่ 2026](https://chercode.com/blog/website-pricing-guide-2026)
- [20 Color Palette สวยๆ](https://chercode.com/blog/web-color-palette-2026)
- [25 ฟอนต์ไทยฟรี 2026](https://chercode.com/blog/free-thai-fonts-2026)
- [เลือกฟอนต์สำหรับเว็บไซต์ไทย](https://chercode.com/blog/thai-web-font-guide)
- [30 เครื่องมือฟรีสำหรับทำเว็บ](https://chercode.com/blog/free-web-tools-2026)
- [เทรนด์เว็บดีไซน์ 2026](https://chercode.com/blog/web-design-trends-2026)

## Author

**Cher** — Full-Stack Developer & Founder of [CherCode](https://chercode.com)

[รับทำเว็บไซต์](https://chercode.com/website) AI และ Automation สำหรับธุรกิจไทย

- [chercode.com](https://chercode.com) — บริการเว็บไซต์ AI Automation
- [เว็บไซต์คลินิก](https://chercode.com/website/clinic) — ระบบนัดหมาย PDPA-ready
- [เว็บไซต์ร้านอาหาร](https://chercode.com/website/restaurant) — เมนูออนไลน์ จองโต๊ะ
- [AI Chatbot](https://chercode.com/ai/chatbot) — ตอบลูกค้า 24 ชม.
- [n8n Automation](https://chercode.com/automation/n8n) — ลดงานซ้ำ 60-80%

## License

MIT License — ใช้ได้ฟรีทั้งส่วนตัวและเชิงพาณิชย์

---

*สร้างด้วย ⚡ โดย [CherCode](https://chercode.com) — รับทำเว็บไซต์สำหรับธุรกิจไทย*
