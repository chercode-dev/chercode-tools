"use client";

import { useState } from "react";
import type { Metadata } from "next";

const questions = [
  {
    id: "type",
    question: "ต้องการเว็บไซต์ประเภทไหน?",
    options: [
      { label: "Landing Page / เว็บหน้าเดียว", value: "landing", base: 3900 },
      { label: "เว็บไซต์บริษัท / Corporate", value: "corporate", base: 5000 },
      { label: "เว็บไซต์คลินิก / สุขภาพ", value: "clinic", base: 5000 },
      { label: "เว็บไซต์ร้านอาหาร / คาเฟ่", value: "restaurant", base: 3900 },
      { label: "เว็บไซต์โรงแรม / รีสอร์ท", value: "hotel", base: 3900 },
      { label: "E-commerce / ร้านค้าออนไลน์", value: "ecommerce", base: 6500 },
      { label: "Web Application", value: "webapp", base: 29500 },
    ],
  },
  {
    id: "pages",
    question: "ต้องการกี่หน้า?",
    options: [
      { label: "1-3 หน้า", value: "small", multiplier: 1 },
      { label: "4-8 หน้า", value: "medium", multiplier: 1.5 },
      { label: "9-15 หน้า", value: "large", multiplier: 2 },
      { label: "15+ หน้า", value: "xlarge", multiplier: 2.8 },
    ],
  },
  {
    id: "features",
    question: "ต้องการฟีเจอร์พิเศษอะไรบ้าง? (เลือกได้หลายข้อ)",
    multi: true,
    options: [
      { label: "ระบบนัดหมาย / จองออนไลน์", value: "booking", add: 3000 },
      { label: "ระบบสมาชิก / Login", value: "auth", add: 4000 },
      { label: "Blog / CMS แก้เนื้อหาเอง", value: "cms", add: 2000 },
      { label: "หลายภาษา (ไทย/อังกฤษ)", value: "i18n", add: 3000 },
      { label: "ชำระเงินออนไลน์ (PromptPay/บัตร)", value: "payment", add: 5000 },
      { label: "เชื่อมต่อ LINE OA", value: "line", add: 2000 },
      { label: "AI Chatbot", value: "chatbot", add: 15000 },
      { label: "ไม่มีฟีเจอร์พิเศษ", value: "none", add: 0 },
    ],
  },
  {
    id: "design",
    question: "ต้องการออกแบบระดับไหน?",
    options: [
      { label: "พื้นฐาน — ใช้ Template ปรับแต่ง", value: "basic", multiplier: 1 },
      { label: "มาตรฐาน — ออกแบบ UX/UI ใหม่", value: "standard", multiplier: 1.3 },
      { label: "พรีเมียม — Figma Prototype + Animation", value: "premium", multiplier: 1.8 },
    ],
  },
  {
    id: "timeline",
    question: "ต้องการเสร็จภายในเมื่อไหร่?",
    options: [
      { label: "ไม่เร่ง (4-8 สัปดาห์)", value: "normal", multiplier: 1 },
      { label: "ค่อนข้างเร่ง (2-4 สัปดาห์)", value: "rush", multiplier: 1.2 },
      { label: "เร่งมาก (1-2 สัปดาห์)", value: "urgent", multiplier: 1.5 },
    ],
  },
];

function calculatePrice(answers: Record<string, string | string[]>) {
  const typeQ = questions[0].options.find((o) => o.value === answers.type);
  const base = typeQ ? (typeQ as { base: number }).base : 5000;

  const pagesQ = questions[1].options.find((o) => o.value === answers.pages);
  const pagesMul = pagesQ ? (pagesQ as { multiplier: number }).multiplier : 1;

  const features = (answers.features as string[]) || [];
  const featuresAdd = features.reduce((sum, f) => {
    const opt = questions[2].options.find((o) => o.value === f);
    return sum + (opt ? (opt as { add: number }).add : 0);
  }, 0);

  const designQ = questions[3].options.find((o) => o.value === answers.design);
  const designMul = designQ ? (designQ as { multiplier: number }).multiplier : 1;

  const timeQ = questions[4].options.find((o) => o.value === answers.timeline);
  const timeMul = timeQ ? (timeQ as { multiplier: number }).multiplier : 1;

  const total = Math.round((base * pagesMul + featuresAdd) * designMul * timeMul);
  const min = Math.round(total * 0.8);
  const max = Math.round(total * 1.2);

  return { min, max, total };
}

function getRecommendation(total: number) {
  if (total <= 5000) return { tier: "Lite", color: "text-gray-300", desc: "Landing Page / เว็บพื้นฐาน" };
  if (total <= 15000) return { tier: "Starter", color: "text-blue-400", desc: "เว็บไซต์ธุรกิจมาตรฐาน" };
  if (total <= 35000) return { tier: "Business", color: "text-cyan", desc: "เว็บไซต์ครบวงจร + ฟีเจอร์พิเศษ" };
  return { tier: "Enterprise", color: "text-purple-400", desc: "Web App / ระบบซับซ้อน" };
}

export default function PricingCalculator() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({ features: [] });
  const [showResult, setShowResult] = useState(false);

  const currentQ = questions[step];

  const handleSelect = (value: string) => {
    if (currentQ.multi) {
      const current = (answers.features as string[]) || [];
      if (value === "none") {
        setAnswers({ ...answers, features: [] });
      } else {
        const updated = current.includes(value) ? current.filter((v) => v !== value) : [...current.filter((v) => v !== "none"), value];
        setAnswers({ ...answers, features: updated });
      }
    } else {
      setAnswers({ ...answers, [currentQ.id]: value });
      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        setShowResult(true);
      }
    }
  };

  const handleNext = () => {
    if (step < questions.length - 1) setStep(step + 1);
    else setShowResult(true);
  };

  if (showResult) {
    const { min, max, total } = calculatePrice(answers);
    const rec = getRecommendation(total);
    return (
      <main className="mx-auto max-w-2xl px-6 py-16">
        <div className="text-center mb-10">
          <span className="text-sm font-medium text-cyan tracking-wider uppercase">ผลลัพธ์</span>
          <h1 className="mt-3 text-3xl font-bold text-white">ราคาทำเว็บไซต์โดยประมาณ</h1>
        </div>

        <div className="rounded-xl border border-dark-border bg-dark-card p-8 text-center mb-8">
          <p className="text-gray-400 text-sm mb-2">ราคาประมาณ</p>
          <p className="text-5xl font-bold text-white">
            ฿{min.toLocaleString()} — {max.toLocaleString()}
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dark-border">
            <span className={`font-semibold ${rec.color}`}>{rec.tier}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-400 text-sm">{rec.desc}</span>
          </div>
        </div>

        <div className="rounded-xl border border-dark-border bg-dark-card p-6 mb-8">
          <h3 className="font-semibold text-white mb-4">สรุปความต้องการของคุณ</h3>
          <div className="space-y-2 text-sm text-gray-400">
            <p>ประเภท: <span className="text-white">{questions[0].options.find((o) => o.value === answers.type)?.label}</span></p>
            <p>จำนวนหน้า: <span className="text-white">{questions[1].options.find((o) => o.value === answers.pages)?.label}</span></p>
            <p>ฟีเจอร์: <span className="text-white">{(answers.features as string[]).length === 0 ? "ไม่มี" : (answers.features as string[]).map((f) => questions[2].options.find((o) => o.value === f)?.label).join(", ")}</span></p>
            <p>ระดับดีไซน์: <span className="text-white">{questions[3].options.find((o) => o.value === answers.design)?.label}</span></p>
            <p>Timeline: <span className="text-white">{questions[4].options.find((o) => o.value === answers.timeline)?.label}</span></p>
          </div>
        </div>

        <div className="flex gap-4">
          <button onClick={() => { setStep(0); setAnswers({ features: [] }); setShowResult(false); }} className="flex-1 py-3 rounded-lg border border-dark-border text-gray-400 hover:text-white hover:border-gray-500 transition-colors">
            เริ่มใหม่
          </button>
          <a href="https://chercode.com/contact" target="_blank" rel="noopener noreferrer" className="flex-1 py-3 rounded-lg bg-cyan text-dark font-semibold text-center hover:bg-cyan-dim transition-colors">
            ปรึกษาฟรี →
          </a>
        </div>

        <p className="mt-6 text-xs text-gray-500 text-center">
          * ราคาเป็นการประมาณเบื้องต้น ราคาจริงขึ้นอยู่กับรายละเอียดของโปรเจกต์ <a href="https://chercode.com/blog/website-pricing-guide-2026" className="text-cyan hover:underline">อ่านคู่มือราคาทำเว็บไซต์ฉบับเต็ม</a>
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <div className="text-center mb-10">
        <span className="text-sm font-medium text-cyan tracking-wider uppercase">คำถาม {step + 1}/{questions.length}</span>
        <h1 className="mt-3 text-3xl font-bold text-white">คำนวณราคาทำเว็บไซต์</h1>
      </div>

      <div className="mb-6">
        <div className="h-1 bg-dark-border rounded-full overflow-hidden">
          <div className="h-full bg-cyan rounded-full transition-all duration-500" style={{ width: `${((step + 1) / questions.length) * 100}%` }} />
        </div>
      </div>

      <h2 className="text-xl font-semibold text-white mb-6">{currentQ.question}</h2>

      <div className="space-y-3">
        {currentQ.options.map((opt) => {
          const isSelected = currentQ.multi
            ? ((answers.features as string[]) || []).includes(opt.value)
            : answers[currentQ.id] === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
              className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 ${
                isSelected ? "border-cyan bg-cyan/10 text-white" : "border-dark-border bg-dark-card text-gray-300 hover:border-gray-600"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      {currentQ.multi && (
        <button onClick={handleNext} className="mt-6 w-full py-3 rounded-lg bg-cyan text-dark font-semibold hover:bg-cyan-dim transition-colors">
          ถัดไป →
        </button>
      )}

      {step > 0 && (
        <button onClick={() => setStep(step - 1)} className="mt-3 w-full py-3 rounded-lg border border-dark-border text-gray-400 hover:text-white transition-colors">
          ← ย้อนกลับ
        </button>
      )}
    </main>
  );
}
