"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import ResumeScanVisual from "@/components/marketing/ResumeScanVisual";
import { BackgroundAtmosphere } from "@/components/marketing/about/BackgroundAtmosphere";
import { TimelineItem } from "@/components/marketing/about/TimelineItem";
import { SearchTinyIcon, ArrowRightIcon, SparkTinyIcon, LightbulbIcon, AnalyticsIcon, PsychologyIcon } from "@/components/marketing/about/icons";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7faff] text-slate-950">
      <BackgroundAtmosphere />

      <section className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 pb-24 pt-24 lg:grid-cols-[1fr_520px] lg:px-8 lg:pb-28 lg:pt-28">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-white/70 px-5 py-2 text-base font-bold text-slate-900 shadow-sm backdrop-blur-xl">
            <SearchTinyIcon />
            关于言镜
          </div>

          <h1 className="max-w-3xl text-[64px] font-black leading-[1.05] tracking-[-0.055em] text-slate-950 xl:text-[72px]">
            很多求职者并不
            <br />
            是没有能力，
            <br />
            而是在面试中{" "}
            <span className="bg-gradient-to-r from-[#255ff0] via-[#4f63f7] to-[#7a45f0] bg-clip-text text-transparent">
              讲不清楚
              <br />
              自己的能力
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-xl font-medium leading-9 text-slate-600">
            简历写满了经历与成果，面试却冷场，回答笼统
            <br />
            让优秀常常被忽略，让真实价值没有被看见
          </p>
        </div>

        <ResumeScanVisual />
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-28 lg:px-8">
        <div className="relative">
          <div className="absolute left-[34px] top-2 hidden h-[calc(100%-120px)] w-px bg-gradient-to-b from-[#cddcff] via-[#dbe7ff] to-transparent md:block" />

          <TimelineItem index="01" title="我们看到的痛点">
            <p className="max-w-2xl text-lg font-medium leading-9 text-slate-600">
              优秀简历无法自动转化为有效表达，真实经历常常被讲得零散、含糊，
              需求与个人经历之间出现深度错位
            </p>
          </TimelineItem>

          <TimelineItem index="02" title="言镜：为解决此而生">
            <p className="max-w-2xl text-lg font-medium leading-9 text-slate-600">
              通过结构化 PDF 解析，言镜还原真实面试场景，智能生成个性化追问，
              分析表达漏洞，助你优化表达呈现
            </p>

            <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:gap-12">
              {/* Left: Resume Demo with Scanning */}
              <div className="flex-1">
                <ResumeDemoCard />
              </div>

              {/* Right: Analysis Cards */}
              <div className="flex flex-1 flex-col gap-4">
                <AnalysisInsightCard
                  icon={<LightbulbIcon />}
                  title="关键词优化"
                  desc="识别到项目描述中缺乏核心技术关键字，建议增加相关协议与架构词汇以通过初筛。"
                />
                <AnalysisInsightCard
                  icon={<AnalyticsIcon />}
                  title="量化成果数据"
                  desc="成果描述过于模糊。建议使用 STAR 法则，补充具体提升的百分比或减少的响应时间。"
                />
                <AnalysisInsightCard
                  icon={<PsychologyIcon />}
                  title="自我评价增强"
                  desc="AI 建议根据目标岗位突出高并发场景下处理经验，优化面试回答的可信度与条理性。"
                />
              </div>
            </div>
          </TimelineItem>

          <TimelineItem index="03" title="从背诵到表达训练">
            <p className="max-w-2xl text-lg font-medium leading-9 text-slate-600">
              我们不提供标准答案，只帮你完成从「被问」到「说清楚」的跨越
            </p>

            <div className="mt-16 flex flex-col items-center gap-7 text-center">
              <p className="text-4xl font-black tracking-[-0.04em] text-slate-300">我做过</p>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-[#c7d7ff] to-transparent" />
              <p className="text-4xl font-black tracking-[-0.04em] text-[#344766]">我能讲清楚</p>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-[#c7d7ff] to-transparent" />
              <p className="bg-gradient-to-r from-[#225eed] to-[#8052f4] bg-clip-text text-5xl font-black tracking-[-0.05em] text-transparent">
                面试官愿意相信
              </p>
            </div>
          </TimelineItem>

          <TimelineItem index="04" title="让每一次准备都回归真实">
            <div className="mt-5 border-l-2 border-[#3d63f2] pl-7">
              <p className="max-w-xl text-2xl font-black italic leading-snug tracking-[-0.03em] text-[#334155]">
                让每一次表达都有反馈，让面试准备真正接近实战场景
              </p>
            </div>
          </TimelineItem>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-28 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white/72 px-8 py-14 text-center shadow-[0_28px_80px_rgba(99,102,241,0.13)] backdrop-blur-2xl md:px-16">
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#e9efff]/80 to-transparent" />
          <div className="absolute -left-16 -top-20 h-48 w-48 rounded-full bg-[#dbeafe]/60 blur-3xl" />
          <div className="absolute -right-16 -bottom-24 h-56 w-56 rounded-full bg-[#ebe0ff]/70 blur-3xl" />

          <div className="relative">
            <div className="mb-8 flex items-center justify-start gap-2 text-base font-bold text-slate-500">
              <SparkTinyIcon />
              言镜 YANJING
            </div>

            <h2 className="text-4xl font-black tracking-[-0.055em] text-slate-950 md:text-5xl">
              开始一次
              <span className="bg-gradient-to-r from-[#245eef] to-[#7c4df4] bg-clip-text text-transparent">
                更真实
              </span>
              的面试表达训练
            </h2>

            <p className="mt-5 text-lg font-medium text-slate-500">
              真实模拟 · 深度分析 · 精准提问 · 更接近理想 Offer
            </p>

            <Link
              href="/interview/upload"
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full border border-[#dbe6ff] bg-white/90 px-8 py-3 text-sm font-medium text-[#3459e6] shadow-[0_14px_34px_rgba(59,130,246,0.14)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(59,130,246,0.2)]"
            >
              立即体验言镜
              <ArrowRightIcon />
            </Link>

            <div className="mt-7 flex items-center justify-end gap-2 text-xs text-slate-400">
              <div className="relative h-3.5 w-3.5">
                <span className="status-dot-ring absolute inset-0 rounded-full bg-emerald-400" />
                <span className="status-dot-bounce absolute inset-[3px] rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(52,211,153,0.12)]" />
              </div>
              持续优化中
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ResumeDemoCard() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#e1e9ff] bg-white/60 p-6 shadow-[0_20px_40px_-10px_rgba(99,102,241,0.05)] backdrop-blur-xl">
      {/* Horizontal Scanning Beam */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] z-10 bg-gradient-to-r from-transparent via-[#4f46e5]/50 to-transparent shadow-[0_0_15px_rgba(79,70,229,0.4)]"
        animate={reduceMotion ? { x: 0 } : { x: ["-100%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Magnifying Glass */}
      <motion.div
        className="pointer-events-none absolute left-0 top-0 z-20 h-24 w-24"
        animate={
          reduceMotion
            ? { x: 0, y: 0 }
            : { x: ["0%", "70%"], y: ["0%", "35%"] }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative h-full w-full">
          <div className="absolute inset-0 rounded-full border-4 border-[#4f46e5] bg-white/10 shadow-[0_0_30px_rgba(79,70,229,0.3)] backdrop-blur-[3px]">
            <div className="absolute inset-0 rounded-full bg-[#4f46e5]/5" />
          </div>
          <SearchLgIcon className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-[#4f46e5]" />
          <div className="absolute left-[72px] top-[72px] h-2.5 w-10 origin-left rotate-45 rounded-full bg-[#4f46e5]" />
        </div>
      </motion.div>

      {/* Resume Content */}
      <header className="mb-4">
        <h3 className="text-lg font-black text-[#4f46e5]">清衡</h3>
        <div className="mt-1 flex gap-4 text-sm text-slate-500">
          <span>qingheng@email.com</span>
          <span>138-0000-0000</span>
        </div>
        <p className="mt-1 text-sm font-semibold text-[#4f46e5]/80">高级产品经理</p>
      </header>

      <section className="mb-4">
        <h4 className="text-sm font-black uppercase tracking-wide text-[#4f46e5]">工作经历</h4>
        <ul className="mt-2 list-disc pl-4 text-sm leading-6 text-slate-600">
          <li>2023.01 – 2024.03 某科技公司 – 产品经理</li>
          <li>负责数据分析与问答优化</li>
          <li>优化内部流程，提高面试成功率</li>
        </ul>
      </section>

      <section>
        <h4 className="text-sm font-black uppercase tracking-wide text-[#4f46e5]">项目经历</h4>
        <ul className="mt-2 list-disc pl-4 text-sm leading-6 text-slate-600">
          <li>面试智能分析系统 – 数据可视化模块</li>
          <li>PDF 解析与问题生成工具开发</li>
        </ul>
      </section>

      <div className="mt-6 h-1 rounded-full bg-gradient-to-r from-[#93c5fd] via-[#818cf8] to-[#a78bfa]" />
    </div>
  );
}

function AnalysisInsightCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-blue-100 bg-white/72 p-5 shadow-[0_4px_12px_rgba(99,102,241,0.06)] backdrop-blur-xl transition-transform duration-300 hover:scale-[1.02]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ede9fe]">
        {icon}
      </div>
      <div>
        <h4 className="font-black text-slate-900">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-slate-500">{desc}</p>
      </div>
    </div>
  );
}

function SearchLgIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M16 16l4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
