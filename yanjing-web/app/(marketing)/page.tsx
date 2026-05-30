'use client';

/**
 * 言镜首页
 * 组合所有页面区块组件
 */

import dynamic from 'next/dynamic';
import { HeroSection } from "@/components/sections/HeroSection";

const AdvantagesSection = dynamic(
  () => import("@/components/sections/AdvantagesSection").then(mod => ({ default: mod.AdvantagesSection })),
  { ssr: false }
);

export default function YanJingHomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <HeroSection />
      <section id="advantages">
        <AdvantagesSection />
      </section>
      <section id="scenarios">{/* 使用场景区块 - 待实现 */}</section>
      <section id="pricing">{/* 定价区块 - 待实现 */}</section>
    </main>
  );
}
