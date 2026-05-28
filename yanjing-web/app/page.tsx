'use client';

/**
 * 言镜首页
 * 组合所有页面区块组件
 */

import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AdvantagesSection } from "@/components/sections/AdvantagesSection";
import { Footer } from "@/components/layout/Footer";

export default function YanJingHomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />
      <HeroSection />
      <AdvantagesSection />
      <Footer />
    </main>
  );
}
