/**
 * 首页Hero区域组件
 * 包含：主标题、副标题、操作按钮、设备展示、统计数据
 */

import { MiniIcon } from "@/components/ui/Icons";
import { DeviceMockup } from "@/components/ui/DeviceMockup";
import { stats } from "@/data";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_82%_18%,#dce8ff_0%,#eef5ff_28%,#ffffff_58%)] pt-24" data-testid="hero-section">
      {/* 背景装饰元素 */}
      <div className="absolute right-[-180px] top-[-140px] h-[740px] w-[940px] rounded-[50%] border border-blue-100/80" />
      <div className="absolute right-[-120px] top-[80px] h-[520px] w-[900px] rounded-[50%] border border-white/70" />
      <div className="absolute right-[120px] top-[120px] h-5 w-5 rounded-full bg-white/80 shadow-[0_0_50px_rgba(59,130,246,0.45)]" />

      {/* 主内容区域 - 左文字 + 右设备展示 */}
      <div className="mx-auto grid min-h-[680px] max-w-[1440px] grid-cols-1 items-center gap-8 px-10 pb-10 pt-8 lg:grid-cols-[0.95fr_1.25fr] xl:px-12">
        {/* 左侧文字内容 */}
        <div className="relative z-10 max-w-[640px]">
          {/* 标签 */}
          <div className="mb-9 inline-flex items-center gap-2.5 rounded-full bg-white/70 px-5 py-2 text-base font-bold text-slate-900 shadow-sm backdrop-blur-xl">
            <span className="relative inline-flex h-4 w-4 items-center justify-center" aria-hidden="true">
              <svg viewBox="0 0 20 20" className="h-4 w-4">
                <path
                  d="M10 1.8c.5 2.3 1.2 4 2.3 5.1 1.1 1.1 2.8 1.8 5.1 2.3-2.3.5-4 1.2-5.1 2.3-1.1 1.1-1.8 2.8-2.3 5.1-.5-2.3-1.2-4-2.3-5.1-1.1-1.1-2.8-1.8-5.1-2.3 2.3-.5 4-1.2 5.1-2.3 1.1-1.1 1.8-2.8 2.3-5.1Z"
                  fill="#D8A394"
                />
                <circle cx="15.7" cy="4.3" r="2.1" fill="#4F7BFF" />
                <circle cx="14.7" cy="14.9" r="1.7" fill="#F5C35C" />
              </svg>
            </span>
            <span className="text-blue-600">AI 面试陪练</span>
            <span>· 让每一次表达都更有底气</span>
          </div>

          {/* 主标题 */}
          <h1 className="text-[64px] font-black leading-[1.05] tracking-[-0.055em] text-slate-950 xl:text-[72px]">
            言镜 · 你的 <span className="bg-gradient-to-r from-blue-600 to-violet-500 bg-clip-text text-transparent">AI</span>
            <br />
            面试陪练教练
          </h1>
          <svg
            className="ml-[275px] mt-2 h-5 w-44"
            viewBox="0 0 180 28"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="heroArcGradient" x1="8" y1="14" x2="172" y2="14" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A855F7" />
                <stop offset="1" stopColor="#60A5FA" />
              </linearGradient>
            </defs>
            <path
              d="M8 20 Q90 4 172 20"
              stroke="url(#heroArcGradient)"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          {/* 副标题描述 */}
          <p className="mt-8 max-w-[600px] text-xl font-medium leading-9 text-slate-600">
            模拟真实面试场景，AI 实时提问与反馈，帮你发现问题、提升表达、增强自信，走向理想 Offer
          </p>

          {/* 操作按钮组 */}
          <div className="mt-10 flex flex-nowrap items-center gap-5">
            <button className="group shrink-0 whitespace-nowrap rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-10 py-4 text-lg font-bold text-white shadow-[0_18px_40px_rgba(37,99,235,0.32)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(37,99,235,0.38)]">
              立即体验面试陪练
              <span className="ml-3 inline-block transition group-hover:translate-x-1">→</span>
            </button>
            <button className="shrink-0 whitespace-nowrap rounded-xl border border-slate-200 bg-white/80 px-9 py-4 text-lg font-bold text-slate-900 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-md">
              <span className="mr-3 inline-flex h-5 w-5 items-center justify-center rounded-md border-2 border-blue-600 text-xs text-blue-600">▶</span>
              观看产品演示
            </button>
          </div>
        </div>

        {/* 右侧设备展示 - 桌面端显示 */}
        <div className="relative z-10 hidden justify-end lg:flex">
          <DeviceMockup />
        </div>
      </div>

      {/* 底部统计数据栏 */}
      <div className="relative z-20 mx-auto -mt-6 max-w-[1080px] px-10 pb-12 xl:px-12">
        <div className="grid overflow-hidden rounded-[24px] border border-white/80 bg-white/86 shadow-[0_22px_60px_rgba(15,23,42,0.10)] backdrop-blur-2xl sm:grid-cols-2 lg:grid-cols-4" data-testid="stats-bar">
          {stats.map((item, index) => (
            <div key={item.label} className={`flex items-center justify-center gap-5 px-8 py-6 ${index !== 0 ? "lg:border-l lg:border-slate-200" : ""}`}>
              <MiniIcon type={item.icon} color={index === 1 ? "yellow" : "blue"} />
              <div>
                <p className="text-2xl font-black leading-none text-slate-950">{item.value}</p>
                <p className="mt-2 text-sm font-semibold text-slate-500">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
