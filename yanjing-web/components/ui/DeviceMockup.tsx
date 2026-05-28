/**
 * 设备展示组件
 * 模拟应用界面的3D展示效果
 * 包含：侧边栏、欢迎面板、功能卡片、浮动卡片
 */

import { MiniIcon, IconPath } from "./Icons";
import { VoiceBars } from "./VoiceBars";
import { RobotAsset } from "./Robot";
import { RadarChart } from "./RadarChart";
import { mockMenus, mockFeatures } from "@/data";

export function DeviceMockup() {
  return (
    <div className="relative h-[470px] w-[780px] xl:h-[500px] xl:w-[840px]" data-testid="device-mockup">
      {/* 背景装饰圆形 */}
      <div className="absolute -right-28 -top-24 h-[580px] w-[800px] rounded-[50%] border border-white/60 opacity-70" />
      <div className="absolute right-4 top-8 h-[460px] w-[720px] rounded-[50%] border border-white/45 opacity-60" />
      <div className="absolute bottom-4 right-20 h-24 w-[560px] rounded-full bg-blue-500/20 blur-3xl" />

      {/* 主设备外壳 - 带3D透视效果 */}
      <div className="device-shell absolute left-[18px] top-[38px] h-[390px] w-[710px] xl:h-[420px] xl:w-[760px]">
        <div className="absolute inset-0 overflow-hidden rounded-[34px] border border-white/75 bg-white/45 shadow-[0_36px_100px_rgba(75,102,210,0.22)] backdrop-blur-2xl">
          {/* 设备内部渐变背景 */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-blue-50/25 to-blue-200/25" />
          <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-blue-300/35 blur-3xl" />

          {/* 主内容区域 - 侧边栏 + 主面板 */}
          <div className="relative grid h-full grid-cols-[150px_1fr] gap-5 p-6">
            {/* 侧边栏 */}
            <aside className="relative z-10 rounded-[26px] bg-white/28 p-4" data-testid="mock-sidebar">
              {/* 侧边栏Logo */}
              <div className="mb-7 flex items-center gap-3">
                <img src="/YanJing-ico.ico" alt="言镜图标" className="h-9 w-9 rounded-xl object-contain" />
                <div>
                  <p className="text-sm font-bold leading-none text-slate-900">言镜</p>
                  <p className="mt-1 text-[10px] font-semibold text-slate-500">YanJing</p>
                </div>
              </div>

              {/* 侧边栏菜单 */}
              <div className="space-y-2">
                {mockMenus.map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-semibold transition ${item.active ? "bg-white text-blue-600 shadow-sm" : "text-slate-500"}`}
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <IconPath type={item.icon} />
                    </svg>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </aside>

            {/* 主面板区域 */}
            <div className="relative z-10 flex flex-col gap-4 overflow-hidden rounded-[26px]">
              {/* 欢迎面板 */}
              <div className="relative h-[152px] overflow-hidden rounded-[24px] border border-white/75 bg-white/55 p-6 shadow-[0_18px_45px_rgba(91,116,203,0.12)]" data-testid="welcome-panel">
                <div className="relative z-10 max-w-[360px]">
                  <h3 className="text-xl font-bold tracking-tight text-slate-900">你好，今天准备练习什么呢？</h3>
                  <p className="mt-3 text-sm font-medium text-slate-500">选择岗位，开始新的面试练习吧</p>
                  <button className="mt-5 rounded-lg bg-blue-600 px-7 py-2.5 text-sm font-bold text-white shadow-[0_12px_24px_rgba(37,99,235,0.25)] transition hover:-translate-y-0.5 hover:bg-blue-700">
                    开始练习
                  </button>
                </div>
                <RobotAsset />
              </div>

              {/* 功能卡片网格 */}
              <div className="grid flex-1 grid-cols-2 gap-4" data-testid="feature-grid">
                {mockFeatures.map((item) => (
                  <div key={item.title} className="flex items-center gap-4 rounded-[20px] border border-white/70 bg-white/58 p-5 shadow-[0_16px_36px_rgba(91,116,203,0.10)] backdrop-blur-xl">
                    <MiniIcon type={item.icon} color={item.color} />
                    <div>
                      <p className="text-base font-bold text-slate-900">{item.title}</p>
                      <p className="mt-1 text-xs font-medium text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 浮动卡片 - 语音识别状态 */}
      <div className="floating-card floating-device-card voice-floating-card absolute left-[26px] bottom-[40px] z-30 h-[72px] w-[164px] rotate-[-20deg] rounded-[16px] border border-white/75 bg-white/78 px-3 py-2.5 shadow-[0_18px_46px_rgba(68,93,175,0.16)] backdrop-blur-2xl" data-testid="voice-floating-card">
        <div className="pointer-events-none absolute inset-[1px] rounded-[15px] bg-gradient-to-br from-white/52 via-white/12 to-blue-100/18" />
        <div className="relative z-10 flex h-full flex-col">
          <p className="shrink-0 text-[11px] font-bold leading-none text-slate-800">语音识别中...</p>
          <div className="mt-1.5 min-h-0 flex-1 px-0.5">
            <VoiceBars fill />
          </div>
        </div>
      </div>

      {/* 浮动卡片 - AI评分 */}
      <div className="floating-card floating-device-card absolute right-[-8px] top-[44px] z-30 w-[124px] rotate-[-20deg] rounded-[18px] border border-white/75 bg-white/78 p-3 shadow-[0_20px_56px_rgba(68,93,175,0.15)] backdrop-blur-2xl" data-testid="score-floating-card">
        <div className="pointer-events-none absolute inset-[1px] rounded-[17px] bg-gradient-to-br from-white/50 via-white/12 to-blue-100/20" />
        <div className="relative z-10">
          <p className="text-[11px] font-bold text-slate-800">AI 实时反馈</p>
          <p className="mt-2 text-[28px] font-black leading-none text-emerald-500">97<span className="ml-1 text-[11px] font-bold">分</span></p>
          <p className="mt-1.5 text-[10px] font-semibold text-slate-500">综合表现：<span className="text-slate-900">优秀</span></p>
        </div>
      </div>

      {/* 浮动卡片 - 能力雷达图 */}
      <div className="floating-card floating-device-card absolute right-[-18px] bottom-[18px] z-30 w-[164px] rotate-[-20deg] rounded-[18px] border border-white/75 bg-white/78 p-3 shadow-[0_20px_58px_rgba(68,93,175,0.16)] backdrop-blur-2xl" data-testid="radar-floating-card">
        <div className="pointer-events-none absolute inset-[1px] rounded-[17px] bg-gradient-to-br from-white/50 via-white/12 to-blue-100/20" />
        <div className="relative z-10">
          <p className="text-[12px] font-bold text-slate-900">能力维度分析</p>
          <RadarChart />
        </div>
      </div>
    </div>
  );
}
