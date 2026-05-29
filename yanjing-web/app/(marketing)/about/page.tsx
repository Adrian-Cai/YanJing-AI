import type { Metadata } from "next";
import ResumeScanVisual from "@/components/marketing/ResumeScanVisual";
import ProgressArrow from "@/components/marketing/ProgressArrow";

export const metadata: Metadata = {
  title: "关于我们 - 言镜 YanJing",
  description: "言镜 YanJing 是一个温和、可信、专业的 AI 面试陪练产品",
};

const flowItems = [
  { label: "PDF 上传", icon: DocumentIcon },
  { label: "智能识别", icon: ScanIcon },
  { label: "问题生成", icon: ChatIcon },
  { label: "面试分析", icon: ChartIcon },
  { label: "表达优化", icon: SparkIcon },
];

const insightCards = [
  {
    title: "结果颗粒化",
    desc: "针对面试官关注的专业点与业务点拆解，准确定位高价值表达与待优化表达点",
    icon: PinIcon,
  },
  {
    title: "表达深度聚焦",
    desc: "基于回答可考察度，建议每项不超过 2 组，作为高频被追问的表达优化参考",
    icon: MessageIcon,
  },
  {
    title: "自我评价增强",
    desc: "阶段性评估与反馈，帮助你回顾亮点，进化表达思路与被看见的底层能力",
    icon: ShieldIcon,
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7faff] text-slate-950">
      <BackgroundAtmosphere />

      <section className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 pb-24 pt-24 lg:grid-cols-[1fr_520px] lg:px-8 lg:pb-28 lg:pt-28">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#dce7ff] bg-white/70 px-3.5 py-1.5 text-xs font-medium text-[#3b63e6] shadow-sm backdrop-blur">
            <SearchTinyIcon />
            关于言镜
          </div>

          <h1 className="max-w-3xl text-[48px] font-semibold leading-[1.08] tracking-[-0.05em] text-[#0f172a] md:text-[64px]">
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

          <p className="mt-8 max-w-xl text-[15px] leading-8 text-slate-600">
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
            <p className="max-w-2xl text-[15px] leading-8 text-slate-600">
              优秀简历无法自动转化为有效表达，真实经历常常被讲得零散、含糊，
              需求与个人经历之间出现深度错位
            </p>
          </TimelineItem>

          <TimelineItem index="02" title="言镜：为解决此而生">
            <p className="max-w-2xl text-[15px] leading-8 text-slate-600">
              通过结构化 PDF 解析，言镜还原真实面试场景，智能生成个性化追问，
              分析表达漏洞，助你优化表达呈现
            </p>

            <FlowStrip />

            <div className="mt-12 grid gap-7 lg:grid-cols-[1fr_1fr]">
              <AnalysisCard />
              <div className="space-y-5">
                {insightCards.map((card) => (
                  <MiniInsightCard key={card.title} {...card} />
                ))}
              </div>
            </div>
          </TimelineItem>

          <TimelineItem index="03" title="从背诵到表达训练">
            <p className="max-w-2xl text-[15px] leading-8 text-slate-600">
              我们不提供标准答案，只帮你完成从「被问」到「说清楚」的跨越
            </p>

            <div className="mt-16 flex flex-col items-center gap-7 text-center">
              <p className="text-4xl font-semibold tracking-[-0.04em] text-slate-300">我做过</p>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-[#c7d7ff] to-transparent" />
              <p className="text-4xl font-semibold tracking-[-0.04em] text-[#344766]">我能讲清楚</p>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-[#c7d7ff] to-transparent" />
              <p className="bg-gradient-to-r from-[#225eed] to-[#8052f4] bg-clip-text text-5xl font-semibold tracking-[-0.05em] text-transparent">
                面试官愿意相信
              </p>
            </div>
          </TimelineItem>

          <TimelineItem index="04" title="让每一次准备都回归真实">
            <div className="mt-5 border-l-2 border-[#3d63f2] pl-7">
              <p className="max-w-xl text-2xl font-medium italic leading-snug tracking-[-0.03em] text-[#334155]">
                让每一次表达都有反馈，让
                <br />
                面试准备真正接近实战场景
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
            <div className="mb-8 flex items-center justify-start gap-2 text-xs font-medium text-slate-400">
              <SparkTinyIcon />
              言镜 YANJING
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.05em] text-[#0f172a] md:text-5xl">
              开始一次
              <span className="bg-gradient-to-r from-[#245eef] to-[#7c4df4] bg-clip-text text-transparent">
                更真实
              </span>
              的面试表达训练
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              真实模拟 · 深度分析 · 精准提问 · 更接近理想 Offer
            </p>

            <a
              href="/interview/upload"
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full border border-[#dbe6ff] bg-white/90 px-8 py-3 text-sm font-medium text-[#3459e6] shadow-[0_14px_34px_rgba(59,130,246,0.14)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(59,130,246,0.2)]"
            >
              立即体验言镜
              <ArrowRightIcon />
            </a>

            <div className="mt-7 flex items-center justify-end gap-2 text-xs text-slate-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.12)]" />
              持续优化中
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function BackgroundAtmosphere() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_8%,rgba(219,234,254,0.85),transparent_28%),radial-gradient(circle_at_76%_12%,rgba(237,233,254,0.72),transparent_30%),linear-gradient(180deg,#f8fbff_0%,#f4f8ff_42%,#eef5ff_100%)]" />
      <div className="absolute left-[-12%] top-[28%] h-[540px] w-[680px] rounded-full bg-[#e8f0ff]/50 blur-3xl" />
      <div className="absolute right-[-18%] top-[55%] h-[640px] w-[760px] rounded-full bg-[#efe9ff]/50 blur-3xl" />
      <div className="absolute bottom-[10%] left-[10%] h-[420px] w-[680px] rounded-full bg-[#e5f5ff]/60 blur-3xl" />
      <div className="absolute left-0 top-[34%] h-[420px] w-full opacity-[0.26] [background:repeating-radial-gradient(ellipse_at_left,rgba(79,70,229,0.16)_0px,rgba(79,70,229,0.16)_1px,transparent_2px,transparent_12px)]" />
      <div className="absolute bottom-[11%] right-[-10%] h-[520px] w-[1050px] rotate-[-9deg] opacity-[0.32] [background:repeating-radial-gradient(ellipse_at_center,rgba(59,130,246,0.18)_0px,rgba(59,130,246,0.18)_1px,transparent_2px,transparent_13px)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.75)_0%,transparent_18%,transparent_82%,rgba(255,255,255,0.8)_100%)]" />
    </div>
  );
}

function TimelineItem({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative grid gap-8 pb-24 md:grid-cols-[86px_1fr]">
      <div className="relative z-10 flex md:justify-center">
        <div className="grid h-16 w-16 place-items-center rounded-full border border-[#d7e3ff] bg-white/80 text-xl font-semibold text-[#3157e7] shadow-[0_14px_36px_rgba(59,130,246,0.14)] backdrop-blur">
          {index}
        </div>
      </div>

      <div className="pt-3">
        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">{title}</h3>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}

function FlowStrip() {
  return (
    <div className="mt-9 rounded-[28px] border border-[#e1e9ff] bg-white/58 px-8 py-7 shadow-[0_18px_50px_rgba(59,130,246,0.08)] backdrop-blur-xl">
      <div className="flex items-center justify-between">
        {flowItems.map((item, index) => {
          const Icon = item.icon;
          const isLast = index === flowItems.length - 1;

          return (
            <div key={item.label} className="flex items-center">
              <div className="flex min-w-[96px] flex-col items-center justify-center gap-3 text-center">
                <Icon
                  className={
                    isLast
                      ? "h-5 w-5 text-[#4f46e5]"
                      : "h-5 w-5 text-slate-500"
                  }
                />
                <span
                  className={
                    isLast
                      ? "text-sm font-medium text-[#4f46e5]"
                      : "text-sm text-slate-600"
                  }
                >
                  {item.label}
                </span>
              </div>

              {!isLast && <ProgressArrow delay={index * 0.45} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AnalysisCard() {
  return (
    <div className="rounded-2xl border border-[#e1e9ff] bg-white/58 p-7 shadow-[0_18px_50px_rgba(59,130,246,0.08)] backdrop-blur-xl">
      <div className="mb-5 flex items-center gap-2 text-sm font-medium text-slate-500">
        <DocumentSmallIcon />
        示例_简历.pdf
      </div>
      <h4 className="mb-4 text-sm font-semibold text-[#4f46e5]">言镜解析后，您将获得</h4>
      <ul className="space-y-3 text-sm leading-6 text-slate-500">
        <li>结构化的面试问题清单，更贴近岗位场景与核心胜任力维度。</li>
        <li>深度追问 List，帮助呈现你经验中的关键信息。</li>
        <li>场景化 STAR 模板和表达建议，减少回答失焦。</li>
        <li>兼容 JD/CV 双输入，覆盖项目经历与技术栈解析。</li>
      </ul>
      <div className="mt-6 h-1 rounded-full bg-gradient-to-r from-[#93c5fd] via-[#818cf8] to-[#a78bfa]" />
    </div>
  );
}

function MiniInsightCard({
  title,
  desc,
  icon: Icon,
}: {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="rounded-2xl border border-[#e5ebff] bg-white/72 p-6 shadow-[0_16px_44px_rgba(99,102,241,0.08)] backdrop-blur-xl">
      <div className="flex gap-4">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#ede9fe] text-[#6d4df2]">
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">{title}</h4>
          <p className="mt-2 text-sm leading-6 text-slate-500">{desc}</p>
        </div>
      </div>
    </div>
  );
}


/* Icons */

function DocumentIcon({ className = "" }) {
  return <svg className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none"><path d="M7 3h7l4 4v14H7V3Z" stroke="currentColor" strokeWidth="1.6"/><path d="M14 3v5h5M9 13h6M9 17h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>;
}
function ScanIcon({ className = "" }) {
  return <svg className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none"><path d="M5 8V5h3M16 5h3v3M19 16v3h-3M8 19H5v-3M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>;
}
function ChatIcon({ className = "" }) {
  return <svg className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none"><path d="M6 17.5 4 21v-4.5A7.5 7.5 0 1 1 6 17.5Z" stroke="currentColor" strokeWidth="1.6"/><path d="M9 11h.01M12 11h.01M15 11h.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/></svg>;
}
function ChartIcon({ className = "" }) {
  return <svg className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none"><path d="M5 19V5h14v14H5Z" stroke="currentColor" strokeWidth="1.6"/><path d="M9 16v-4M12 16V8M15 16v-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>;
}
function SparkIcon({ className = "" }) {
  return <svg className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none"><path d="M12 3v5M12 16v5M3 12h5M16 12h5M7.8 7.8l2.4 2.4M13.8 13.8l2.4 2.4M16.2 7.8l-2.4 2.4M10.2 13.8l-2.4 2.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>;
}
function SearchTinyIcon() {
  return <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none"><path d="m15.5 15.5 4 4M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>;
}
function ArrowRightIcon() {
  return <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function DocumentSmallIcon() {
  return <svg className="h-4 w-4 text-rose-400" viewBox="0 0 24 24" fill="none"><path d="M7 3h7l4 4v14H7V3Z" stroke="currentColor" strokeWidth="1.6"/><path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.6"/></svg>;
}
function SparkTinyIcon() {
  return <svg className="h-3.5 w-3.5 text-[#615cf6]" viewBox="0 0 24 24" fill="none"><path d="M12 3v5M12 16v5M3 12h5M16 12h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>;
}
function PinIcon({ className = "" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none"><path d="M12 21s7-5.2 7-11A7 7 0 0 0 5 10c0 5.8 7 11 7 11Z" stroke="currentColor" strokeWidth="1.8"/><path d="M12 12.5A2.5 2.5 0 1 0 12 7.5a2.5 2.5 0 0 0 0 5Z" stroke="currentColor" strokeWidth="1.8"/></svg>;
}
function MessageIcon({ className = "" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none"><path d="M5 18V6h14v10H8l-3 2Z" stroke="currentColor" strokeWidth="1.8"/><path d="M8 10h8M8 13h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
}
function ShieldIcon({ className = "" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none"><path d="M12 3 19 6v5c0 5-3.2 8.2-7 10-3.8-1.8-7-5-7-10V6l7-3Z" stroke="currentColor" strokeWidth="1.8"/><path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
