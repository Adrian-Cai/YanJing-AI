"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type IconName =
  | "arrowRight"
  | "briefcase"
  | "chart"
  | "check"
  | "file"
  | "home"
  | "lock"
  | "message"
  | "microphone"
  | "play"
  | "shield"
  | "sparkle"
  | "star"
  | "target"
  | "user"
  | "users";

type Tone = "amber" | "blue" | "emerald" | "orange" | "purple";

const navItems = [
  { label: "首页", href: "/" },
  { label: "核心功能", href: "#features" },
  { label: "产品优势", href: "#advantages" },
  { label: "使用场景", href: "#scenarios" },
  { label: "定价", href: "#pricing" },
  { label: "关于我们", href: "#about" },
];

const stats = [
  { icon: "users", value: "10,000+", label: "用户信任使用", tone: "blue" },
  { icon: "star", value: "50,000+", label: "面试练习完成", tone: "amber" },
  { icon: "check", value: "95%+", label: "用户好评率", tone: "blue" },
  { icon: "lock", value: "数据安全", label: "多重隐私保护", tone: "blue" },
] satisfies Array<{
  icon: IconName;
  value: string;
  label: string;
  tone: Tone;
}>;

const stackCards = [
  {
    icon: "message",
    title: "模拟面试",
    text: "真实场景多轮问答",
    meta: "12 题待练",
    tone: "blue",
    className: "left-[46px] top-[212px] z-30 h-[134px] w-[310px] -rotate-[5deg]",
  },
  {
    icon: "file",
    title: "简历解析",
    text: "AI 分析简历匹配度",
    meta: "86% 匹配",
    tone: "purple",
    className: "right-[70px] top-[224px] z-20 h-[132px] w-[306px] rotate-[3deg]",
  },
  {
    icon: "shield",
    title: "能力评估",
    text: "表达、逻辑、应变拆解",
    meta: "5 维雷达",
    tone: "emerald",
    className: "left-[124px] top-[340px] z-40 h-[138px] w-[314px] rotate-[2deg]",
  },
  {
    icon: "briefcase",
    title: "报告生成",
    text: "个性化改进建议",
    meta: "复盘已生成",
    tone: "orange",
    className: "right-[28px] top-[346px] z-10 h-[136px] w-[316px] -rotate-[3deg]",
  },
] satisfies Array<{
  icon: IconName;
  title: string;
  text: string;
  meta: string;
  tone: Tone;
  className: string;
}>;

const features = [
  {
    icon: "message",
    title: "真实场景模拟",
    description: "覆盖多行业高频面试问题，高度还原真实面试体验",
    tone: "blue",
  },
  {
    icon: "microphone",
    title: "语音识别与分析",
    description: "精准识别你的回答，分析语速、停顿、用词等表现",
    tone: "emerald",
  },
  {
    icon: "target",
    title: "AI 智能评分",
    description: "从多个维度全面评分，指出优势与待改进点",
    tone: "purple",
  },
  {
    icon: "file",
    title: "个性化改进建议",
    description: "生成专属提升方案，帮你有针对性地提高",
    tone: "amber",
  },
  {
    icon: "shield",
    title: "隐私安全保障",
    description: "数据加密存储，保护你的个人信息与练习内容",
    tone: "blue",
  },
] satisfies Array<{
  icon: IconName;
  title: string;
  description: string;
  tone: Tone;
}>;

const toneClasses = {
  amber: "bg-amber-100 text-amber-500",
  blue: "bg-blue-100 text-blue-600",
  emerald: "bg-emerald-100 text-emerald-500",
  orange: "bg-orange-100 text-orange-500",
  purple: "bg-violet-100 text-violet-500",
} satisfies Record<Tone, string>;

const toneBarClasses = {
  amber: "bg-amber-400",
  blue: "bg-blue-500",
  emerald: "bg-emerald-400",
  orange: "bg-orange-400",
  purple: "bg-violet-400",
} satisfies Record<Tone, string>;

const robotImageSrc = "/images/大屏未来机器人.png";

const voiceBars = [
  16, 22, 14, 24, 18, 30, 26, 38, 44, 31, 24, 36, 28, 20, 26, 17, 31, 22, 14,
  20, 16, 13,
];

export function HomeLanding() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#101b3c]">
      <section className="relative overflow-hidden bg-[linear-gradient(115deg,#ffffff_0%,#f9fbff_36%,#edf4ff_67%,#dfeaff_100%)]">
        <HeroBackground />
        <Header />

        <div className="relative z-10 mx-auto max-w-[1536px] px-6 pb-3 sm:px-10 xl:px-10">
          <div className="grid min-h-[520px] items-start gap-5 xl:grid-cols-[48%_52%]">
            <HeroCopy />
            <HeroMockup />
          </div>

          <StatsStrip />
        </div>
      </section>

      <FeatureSection />
    </main>
  );
}

function Header() {
  return (
    <header className="relative z-20 mx-auto flex h-[88px] max-w-[1536px] items-center justify-between px-6 sm:px-10 xl:px-10">
      <Link href="/" aria-label="言镜首页" className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[linear-gradient(135deg,#65d7ff_0%,#2f65ff_45%,#825cff_100%)] text-white shadow-[0_14px_30px_rgba(37,99,235,0.28)]">
          <Icon name="message" className="h-6 w-6" />
        </span>
        <span className="leading-none">
          <span className="block text-[24px] font-black tracking-[0] text-[#101010]">
            言镜
          </span>
          <span className="mt-1 block text-[12px] font-semibold text-[#101010]">
            YanJing
          </span>
        </span>
      </Link>

      <nav aria-label="主导航" className="hidden items-center gap-16 xl:flex">
        {navItems.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={index === 0 ? "page" : undefined}
            className={`relative px-1 py-4 text-[16px] font-bold transition focus:outline-none focus:ring-4 focus:ring-blue-100 ${
              index === 0 ? "text-[#105dff]" : "text-[#10142a] hover:text-[#105dff]"
            }`}
          >
            {item.label}
            {index === 0 ? (
              <span
                aria-hidden="true"
                className="absolute inset-x-1 -bottom-[7px] h-[3px] rounded-full bg-[#1f67ff]"
              />
            ) : null}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-5">
        <Link
          href="/login"
          className="hidden h-12 w-24 items-center justify-center rounded-[12px] border border-[#dfe8f8] bg-white/85 text-[16px] font-bold text-[#111827] shadow-[0_10px_24px_rgba(31,41,55,0.08)] transition hover:border-blue-200 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100 sm:inline-flex"
        >
          登录
        </Link>
        <Link
          href="/resume"
          className="inline-flex h-12 w-32 items-center justify-center rounded-[12px] bg-[linear-gradient(135deg,#176bff_0%,#254df4_54%,#3b32e7_100%)] text-[16px] font-bold text-white shadow-[0_12px_26px_rgba(37,99,235,0.35)] transition hover:brightness-105 focus:outline-none focus:ring-4 focus:ring-blue-200"
        >
          立即体验
        </Link>
      </div>
    </header>
  );
}

function HeroCopy() {
  return (
    <div className="relative z-20 pt-[42px]">
      <div className="inline-flex h-9 items-center gap-2 rounded-full bg-[#eef3ff] px-4 text-[16px] font-bold text-[#18213d] shadow-[0_8px_20px_rgba(96,142,220,0.12)]">
        <Icon name="sparkle" className="h-4 w-4 text-amber-400" />
        <span className="bg-[linear-gradient(90deg,#2563eb,#5a54f5)] bg-clip-text text-transparent">
          AI 面试陪练
        </span>
        <span className="hidden sm:inline">· 让每一次表达都更有底气</span>
      </div>

      <h1 className="mt-7 text-[42px] font-extrabold leading-[1.12] tracking-[0] text-[#111b3b] sm:text-[58px] xl:text-[72px]">
        <span className="block">
          言镜 · 你的{" "}
          <span className="bg-[linear-gradient(110deg,#265cf0_0%,#2a7cff_43%,#7b52f4_100%)] bg-clip-text text-transparent">
            AI
          </span>
        </span>
        <span className="relative inline-block">
          面试陪练教练
          <span
            aria-hidden="true"
            className="absolute -bottom-[0.2em] right-0 h-[0.08em] w-[2.15em] rounded-full bg-[linear-gradient(90deg,#9a6bff_0%,#64b5ff_100%)]"
          />
        </span>
      </h1>

      <p className="mt-9 max-w-[590px] text-[18px] font-medium leading-[1.8] text-[#34405f]">
        模拟真实面试场景，AI 实时提问与反馈，帮你发现问题、提升表达、
        增强自信，走向理想 Offer。
      </p>

      <div className="mt-8 flex flex-col gap-5 sm:flex-row">
        <Link
          href="/interview"
          className="inline-flex h-14 w-[228px] items-center justify-center gap-3 rounded-[12px] bg-[linear-gradient(135deg,#337bff_0%,#512ff0_100%)] text-[17px] font-bold text-white shadow-[0_16px_30px_rgba(37,99,235,0.28)] transition hover:brightness-105 focus:outline-none focus:ring-4 focus:ring-blue-200"
        >
          立即体验面试陪练
          <Icon name="arrowRight" className="h-5 w-5" />
        </Link>
        <Link
          href="#features"
          className="inline-flex h-14 w-[194px] items-center justify-center gap-3 rounded-[12px] border border-[#e3eaf7] bg-white/80 text-[17px] font-bold text-[#1a2340] shadow-[0_12px_26px_rgba(41,63,100,0.08)] transition hover:border-blue-200 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-[6px] border-2 border-blue-600 text-blue-600">
            <Icon name="play" className="h-3 w-3" />
          </span>
          观看产品演示
        </Link>
      </div>
    </div>
  );
}

function HeroMockup() {
  return (
    <MotionConfig reducedMotion="user">
      <div
        role="img"
        aria-label="言镜 AI 面试卡片堆叠预览，包含练习入口、功能模块、语音识别、实时评分和能力雷达"
        className="relative z-10 ml-auto hidden h-[520px] w-[790px] max-w-full xl:block xl:-translate-x-4 2xl:translate-x-2"
      >
        <HeroMockupBackground />
        <div
          aria-hidden="true"
          className="absolute bottom-[-10px] left-[112px] z-0 h-[34px] w-[570px] rounded-full bg-[#7aa2ff]/28 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="absolute left-[58px] top-[56px] z-10 h-[410px] w-[652px] rounded-[34px] border border-white/45 bg-[#aabfff]/22 shadow-[0_34px_72px_rgba(70,105,205,0.22)] backdrop-blur-xl"
          style={{
            transform:
              "perspective(1100px) rotateY(-8deg) rotateX(4deg) rotateZ(1.5deg)",
            transformOrigin: "center center",
          }}
        />

        <motion.div
          className="absolute left-[38px] top-[18px] z-20 h-[488px] w-[704px]"
          style={{
            transform:
              "perspective(1100px) rotateY(-8deg) rotateX(4deg) rotateZ(1.4deg)",
            transformOrigin: "center center",
          }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-[46px] top-[36px] h-[420px] rounded-[34px] border border-white/65 bg-white/34 shadow-[0_34px_80px_rgba(75,111,210,0.22)] backdrop-blur-2xl"
          />
          <PracticeHeroCard />
          {stackCards.map((card) => (
            <StackFeatureCard key={card.title} card={card} />
          ))}
        </motion.div>

        <VoiceFloatingCard />
        <ScoreFloatingCard />
        <RadarFloatingCard />
      </div>
    </MotionConfig>
  );
}

function HeroMockupBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
      <div className="absolute right-[-36px] top-[12px] h-[470px] w-[560px] rounded-full bg-sky-200/45 blur-3xl" />
      <div className="absolute right-[84px] top-[72px] h-[340px] w-[440px] rounded-full bg-white/55 blur-2xl" />
      <svg
        className="absolute -right-16 top-0 h-[560px] w-[830px] opacity-75"
        viewBox="0 0 770 520"
      >
        <path
          d="M52 318C159 177 292 99 451 83c100-10 186 7 258 50"
          fill="none"
          stroke="rgba(59,130,246,0.16)"
          strokeWidth="1.4"
        />
        <path
          d="M4 402C126 241 291 147 499 118c101-14 185-6 252 25"
          fill="none"
          stroke="rgba(37,99,235,0.12)"
          strokeWidth="1.2"
        />
        <path
          d="M164 58c93 21 165 75 217 162 48 80 122 132 222 157"
          fill="none"
          stroke="rgba(14,165,233,0.12)"
          strokeDasharray="9 14"
          strokeLinecap="round"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

function PracticeHeroCard() {
  return (
    <motion.div
      className="absolute left-[122px] top-[34px] z-50 h-[190px] w-[492px] overflow-hidden rounded-[26px] border border-white/75 bg-[linear-gradient(120deg,#ffffff_0%,#eef5ff_56%,#d9e8ff_100%)] p-7 shadow-[0_24px_52px_rgba(67,101,190,0.22)] backdrop-blur-2xl"
      whileHover={{
        y: -6,
        rotate: -0.8,
        boxShadow: "0 30px 64px rgba(59, 92, 170, 0.25)",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <div
        aria-hidden="true"
        className="absolute right-[-72px] top-[-96px] h-[280px] w-[330px] rounded-full bg-blue-200/55 blur-3xl"
      />
      <div className="relative z-10 max-w-[270px]">
        <span className="inline-flex h-7 items-center rounded-full bg-[#e8f0ff] px-3 text-[11px] font-black text-[#2864f0]">
          AI Interview
        </span>
        <p className="mt-4 text-[25px] font-black leading-[1.15] text-[#111b3b]">
          今日练习
        </p>
        <p className="mt-2 max-w-[230px] text-[13px] font-semibold leading-[1.55] text-[#52617f]">
          选择岗位，开始一轮模拟问答。
        </p>
        <span className="mt-5 inline-flex h-10 items-center justify-center rounded-[10px] bg-[#176bff] px-6 text-[14px] font-bold text-white shadow-[0_12px_22px_rgba(37,99,235,0.28)]">
          开始
        </span>
      </div>
      <RobotImage
        className="absolute -right-[2px] -top-[24px] z-20 h-[220px] w-[202px]"
        sizes="202px"
      />
    </motion.div>
  );
}

function StackFeatureCard({ card }: { card: (typeof stackCards)[number] }) {
  return (
    <motion.article
      className={`absolute rounded-[22px] border border-white/70 bg-white/72 p-5 shadow-[0_22px_46px_rgba(72,106,180,0.17)] backdrop-blur-xl ${card.className}`}
      whileHover={{
        y: -8,
        rotate: 0,
        scale: 1.018,
        boxShadow: "0 28px 58px rgba(59, 92, 170, 0.24)",
      }}
      transition={{ type: "spring", stiffness: 270, damping: 21 }}
    >
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <span
            className={`flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[14px] ${toneClasses[card.tone]}`}
          >
            <Icon name={card.icon} className="h-[22px] w-[22px]" />
          </span>
          <span className="rounded-full bg-slate-100/80 px-3 py-1 text-[11px] font-black text-[#506080]">
            {card.meta}
          </span>
        </div>
        <div className="min-w-0">
          <h3 className="text-[17px] font-black leading-tight text-[#111b3b]">
            {card.title}
          </h3>
          <p className="mt-1 text-[12px] font-semibold leading-[1.45] text-[#67748f]">
            {card.text}
          </p>
          <span className="mt-4 block h-[5px] w-[104px] overflow-hidden rounded-full bg-slate-200/65">
            <span
              className={`block h-full w-3/4 rounded-full ${toneBarClasses[card.tone]}`}
            />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function RobotImage({
  className,
  sizes,
}: {
  className: string;
  sizes: string;
}) {
  return (
    <div className={`pointer-events-none select-none drop-shadow-[0_22px_28px_rgba(42,88,190,0.22)] ${className}`}>
      <Image
        src={robotImageSrc}
        alt="言镜 AI 面试机器人"
        fill
        priority
        sizes={sizes}
        className="object-contain"
        draggable={false}
      />
    </div>
  );
}

function ScoreFloatingCard() {
  return (
    <FloatingCard
      ariaLabel="AI 实时反馈卡片"
      className="right-[6px] top-[54px] z-[60] h-[108px] w-[136px] p-[15px]"
    >
      <p className="text-[12px] font-black text-[#101b3c]">AI 实时反馈</p>
      <p className="mt-[10px] text-[26px] font-black leading-none text-[#55c4ae]">
        97<span className="ml-1 text-[14px]">分</span>
      </p>
      <p className="mt-2 text-[10px] font-semibold text-[#4a5874]">
        综合表现：优秀
      </p>
    </FloatingCard>
  );
}

function VoiceFloatingCard() {
  return (
    <FloatingCard
      ariaLabel="语音识别中卡片"
      className="bottom-[54px] left-[4px] z-[60] h-[84px] w-[174px] p-[14px]"
    >
      <p className="text-[12px] font-black text-[#101b3c]">语音识别中...</p>
      <div className="mt-[12px] flex h-[28px] items-center gap-[2px]">
        {voiceBars.map((height, index) => (
          <motion.span
            key={`${height}-${index}`}
            className="w-[2px] rounded-full bg-[linear-gradient(180deg,#8db6ff,#2667ff)]"
            animate={{ scaleY: [0.62, 1.18, 0.78] }}
            transition={{
              delay: index * 0.035,
              duration: 0.78,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            style={{
              height: height * 0.75,
              opacity: 0.32 + (index % 5) * 0.12,
              transformOrigin: "center",
            }}
          />
        ))}
      </div>
    </FloatingCard>
  );
}

function RadarFloatingCard() {
  return (
    <FloatingCard
      ariaLabel="能力维度分析卡片"
      className="bottom-[10px] right-[18px] z-[60] h-[150px] w-[164px] p-[13px]"
    >
      <p className="text-[12px] font-black text-[#101b3c]">能力维度分析</p>
      <RadarChart />
    </FloatingCard>
  );
}

function FloatingCard({
  ariaLabel,
  children,
  className,
}: {
  ariaLabel: string;
  children: ReactNode;
  className: string;
}) {
  return (
    <motion.div
      aria-label={ariaLabel}
      className={`absolute rounded-[18px] border border-white/70 bg-white/78 shadow-[0_18px_36px_rgba(76,111,190,0.17)] backdrop-blur-xl ${className}`}
      whileHover={{
        y: -5,
        scale: 1.025,
        boxShadow: "0 24px 48px rgba(59, 92, 170, 0.22)",
      }}
      transition={{ type: "spring", stiffness: 270, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

function StatsStrip() {
  return (
    <div className="relative z-20 mx-auto mt-[14px] min-h-[72px] w-full max-w-[1180px] rounded-[18px] border border-white/80 bg-white/80 px-4 py-3 shadow-[0_18px_40px_rgba(72,106,180,0.14)] backdrop-blur-xl md:h-[72px] md:px-5 md:py-0">
      <dl className="grid h-full grid-cols-2 gap-y-3 md:grid-cols-4 md:gap-y-0 md:divide-x md:divide-[#e8edf7]">
        {stats.map((item) => (
          <div
            key={item.label}
            className="flex min-w-0 items-center justify-center gap-3 px-2 md:gap-[18px] md:px-3"
          >
            <dt className="sr-only">{item.label}</dt>
            <span
              className={`flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full ${toneClasses[item.tone]}`}
            >
              <Icon name={item.icon} className="h-[25px] w-[25px]" />
            </span>
            <dd className="min-w-0">
              <div className="whitespace-nowrap text-[22px] font-black leading-none text-[#101b3c]">
                {item.value}
              </div>
              <div className="mt-2 whitespace-nowrap text-[14px] font-semibold text-[#52617f]">
                {item.label}
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function FeatureSection() {
  return (
    <section id="features" className="relative bg-white px-6 pb-[52px] pt-[44px] sm:px-10 xl:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="text-center">
          <h2 className="text-[34px] font-extrabold leading-tight tracking-[0] text-[#101b3c]">
            为什么选择<span className="text-[#176bff]">言镜</span>？
          </h2>
          <p className="mt-3 text-[17px] font-medium text-[#53617e]">
            用 AI 技术，让面试准备更高效、更有针对性
          </p>
        </div>

        <div id="advantages" className="mt-[28px] grid gap-4 lg:grid-cols-5">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="flex h-[96px] min-w-0 items-center gap-4 rounded-[14px] border border-[#e7edf8] bg-white p-[18px] shadow-[0_12px_28px_rgba(41,63,100,0.08)]"
            >
              <span
                className={`flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[10px] ${toneClasses[feature.tone]}`}
              >
                <Icon name={feature.icon} className="h-[23px] w-[23px]" />
              </span>
              <span className="min-w-0">
                <h3 className="text-[16px] font-black leading-[1.2] text-[#101b3c]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[13px] font-medium leading-[1.55] text-[#53617e]">
                  {feature.description}
                </p>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="absolute right-[-170px] top-[-30px] h-[650px] w-[980px] rounded-bl-[180px] bg-[radial-gradient(circle_at_55%_42%,rgba(93,124,255,0.38)_0%,rgba(119,162,255,0.2)_36%,rgba(219,231,255,0.64)_66%,rgba(255,255,255,0)_84%)]" />
      <div className="absolute right-[-58px] top-[36px] h-[560px] w-[840px] -rotate-[17deg] rounded-[50%] border border-white/75" />
      <div className="absolute right-[-210px] top-[62px] h-[610px] w-[1080px] -rotate-[18deg] rounded-[50%] border border-white/55" />
      <div className="absolute right-[38px] top-[0px] h-[650px] w-[720px] rotate-[24deg] bg-[repeating-linear-gradient(90deg,rgba(73,119,255,0.18)_0px,rgba(73,119,255,0.18)_1px,transparent_1px,transparent_22px)] opacity-35" />
      <div className="absolute left-[45%] top-[260px] h-[150px] w-[92px] -rotate-[35deg] rounded-[30px] bg-white/28 blur-[2px]" />
      <div className="absolute bottom-[34px] right-[290px] h-[42px] w-[42px] rounded-full bg-white/55 shadow-[0_0_34px_rgba(255,255,255,0.85)]" />
    </div>
  );
}

function RadarChart() {
  return (
    <svg className="mt-[6px] h-[96px] w-full" viewBox="0 0 190 140" aria-hidden="true">
      <g fill="none" stroke="#dbeafe" strokeWidth="1">
        <polygon points="95,11 158,48 135,119 55,119 32,48" />
        <polygon points="95,32 136,56 121,101 69,101 54,56" />
        <polygon points="95,53 114,64 107,84 83,84 76,64" />
        <line x1="95" y1="11" x2="95" y2="119" />
        <line x1="158" y1="48" x2="55" y2="119" />
        <line x1="135" y1="119" x2="32" y2="48" />
        <line x1="55" y1="119" x2="158" y2="48" />
        <line x1="32" y1="48" x2="135" y2="119" />
      </g>
      <polygon
        points="95,28 135,57 116,99 68,103 55,63"
        fill="#3b82f6"
        fillOpacity="0.22"
        stroke="#2563eb"
        strokeWidth="2"
      />
      <g fill="#2563eb">
        <circle cx="95" cy="28" r="3" />
        <circle cx="135" cy="57" r="3" />
        <circle cx="116" cy="99" r="3" />
        <circle cx="68" cy="103" r="3" />
        <circle cx="55" cy="63" r="3" />
      </g>
      <text x="95" y="9" textAnchor="middle" className="fill-[#53617e] text-[9px] font-semibold">
        表达能力
      </text>
      <text x="164" y="50" className="fill-[#53617e] text-[9px] font-semibold">
        逻辑思维
      </text>
      <text x="123" y="134" className="fill-[#53617e] text-[9px] font-semibold">
        专业知识
      </text>
      <text x="29" y="134" className="fill-[#53617e] text-[9px] font-semibold">
        应变能力
      </text>
      <text x="0" y="50" className="fill-[#53617e] text-[9px] font-semibold">
        应变能力
      </text>
    </svg>
  );
}

function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const commonProps = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  switch (name) {
    case "arrowRight":
      return (
        <svg {...commonProps}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...commonProps}>
          <path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1" />
          <rect x="4" y="6" width="16" height="14" rx="2" />
          <path d="M4 12h16" />
          <path d="M10 12v2h4v-2" />
        </svg>
      );
    case "chart":
      return (
        <svg {...commonProps}>
          <path d="M4 19V5" />
          <path d="M4 19h16" />
          <path d="M8 16v-5" />
          <path d="M12 16V8" />
          <path d="M16 16v-7" />
        </svg>
      );
    case "check":
      return (
        <svg {...commonProps}>
          <path d="M20 7 10 17l-5-5" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
    case "file":
      return (
        <svg {...commonProps}>
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
          <path d="M14 3v5h5" />
          <path d="M9 13h6" />
          <path d="M9 17h6" />
        </svg>
      );
    case "home":
      return (
        <svg {...commonProps}>
          <path d="m3 11 9-8 9 8" />
          <path d="M5 10v10h14V10" />
          <path d="M10 20v-6h4v6" />
        </svg>
      );
    case "lock":
      return (
        <svg {...commonProps}>
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </svg>
      );
    case "message":
      return (
        <svg {...commonProps}>
          <path d="M21 12a8 8 0 0 1-8 8H7l-4 3 1.4-5A8 8 0 1 1 21 12Z" />
          <path d="M8 12h.01" />
          <path d="M12 12h.01" />
          <path d="M16 12h.01" />
        </svg>
      );
    case "microphone":
      return (
        <svg {...commonProps}>
          <rect x="9" y="3" width="6" height="11" rx="3" />
          <path d="M5 11a7 7 0 0 0 14 0" />
          <path d="M12 18v3" />
          <path d="M8 21h8" />
        </svg>
      );
    case "play":
      return (
        <svg {...commonProps} fill="currentColor" stroke="none">
          <path d="M8 5v14l11-7z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...commonProps}>
          <path d="M12 3 20 6v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6z" />
          <path d="m9 12 2 2 4-5" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...commonProps}>
          <path d="M12 3 14 9l6 2-6 2-2 6-2-6-6-2 6-2z" />
          <path d="M19 3v4" />
          <path d="M21 5h-4" />
          <path d="M5 17v3" />
          <path d="M6.5 18.5h-3" />
        </svg>
      );
    case "star":
      return (
        <svg {...commonProps} fill="currentColor" stroke="none">
          <path d="m12 2.5 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9z" />
        </svg>
      );
    case "target":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case "user":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21a8 8 0 0 1 16 0" />
        </svg>
      );
    case "users":
      return (
        <svg {...commonProps}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
          <circle cx="9.5" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
          <path d="M16 3.1a4 4 0 0 1 0 7.8" />
        </svg>
      );
  }
}
