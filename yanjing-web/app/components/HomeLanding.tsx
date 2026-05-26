import Link from "next/link";

type IconName =
  | "arrowRight"
  | "briefcase"
  | "chart"
  | "check"
  | "file"
  | "lock"
  | "message"
  | "microphone"
  | "play"
  | "shield"
  | "sparkle"
  | "star"
  | "target"
  | "users";

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
  tone: "amber" | "blue";
}>;

const previewCards = [
  { icon: "message", title: "模拟面试", text: "真实场景多轮问答", tone: "blue" },
  { icon: "file", title: "简历解析", text: "AI 分析简历匹配度", tone: "purple" },
  { icon: "shield", title: "能力评估", text: "多维度智能评分", tone: "mint" },
  { icon: "briefcase", title: "报告生成", text: "个性化改进建议", tone: "orange" },
] satisfies Array<{
  icon: IconName;
  title: string;
  text: string;
  tone: IconTone;
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
    tone: "mint",
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
  tone: IconTone;
}>;

const sideItems = ["首页", "面试练习", "简历解析", "能力报告", "我的记录", "个人中心"];

const iconToneClasses = {
  amber: "bg-amber-100 text-amber-500",
  blue: "bg-blue-100 text-blue-600",
  mint: "bg-emerald-100 text-emerald-500",
  orange: "bg-orange-100 text-orange-500",
  purple: "bg-violet-100 text-violet-500",
};

type IconTone = keyof typeof iconToneClasses;

export function HomeLanding() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fbff] text-slate-950">
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[720px] bg-[linear-gradient(115deg,#ffffff_0%,#f7fbff_36%,#edf4ff_68%,#dfeaff_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute right-[-12%] top-6 h-[560px] w-[58%] rounded-l-[120px] border border-white/70 bg-blue-100/30"
        />
        <div
          aria-hidden="true"
          className="absolute right-[-10%] top-24 h-[420px] w-[52%] rotate-[-18deg] rounded-[50%] border border-white/80"
        />

        <Header />

        <section className="relative mx-auto max-w-[1500px] px-5 pb-7 pt-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-9 lg:min-h-[540px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:gap-12">
            <div className="max-w-[620px]">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm shadow-blue-100/70 ring-1 ring-blue-100 sm:text-sm">
                <Icon name="sparkle" className="h-4 w-4 text-amber-400" />
                <span>AI 面试陪练</span>
                <span className="hidden sm:inline">· 让每一次表达都更有底气</span>
              </div>

              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] text-[#0b1736] sm:text-6xl lg:mt-7 lg:text-6xl xl:text-7xl">
                <span className="block">
                  言镜 · 你的{" "}
                  <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                    AI
                  </span>
                </span>
                <span className="block">
                  面试陪练
                  <span className="relative inline-block">
                    教练
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-[0.14em] left-1/2 h-[0.1em] w-[1.92em] -translate-x-1/2 rounded-full bg-[linear-gradient(90deg,#9b6cff,#63b3ff)]"
                    />
                  </span>
                </span>
              </h1>

              <p className="mt-7 max-w-[560px] text-base leading-7 text-slate-700 sm:text-lg sm:leading-8 lg:mt-9">
                模拟真实面试场景，AI 实时提问与反馈，帮你发现问题、提升表达、增强自信，走向理想 Offer。
              </p>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row lg:mt-9">
                <Link
                  href="/interview"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-blue-600 px-8 text-base font-semibold text-white shadow-xl shadow-blue-500/25 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
                >
                  立即体验面试陪练
                  <Icon name="arrowRight" className="h-5 w-5" />
                </Link>
                <Link
                  href="#features"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/85 px-8 text-base font-semibold text-slate-900 shadow-lg shadow-slate-200/60 transition hover:border-blue-200 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-blue-600 text-blue-600">
                    <Icon name="play" className="h-3 w-3" />
                  </span>
                  观看产品演示
                </Link>
              </div>
            </div>

            <ProductMockup />
          </div>

          <StatsStrip />
        </section>
      </div>

      <FeatureSection />
    </main>
  );
}

function Header() {
  return (
    <header className="relative z-20 mx-auto flex h-24 max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12">
      <Link href="/" aria-label="言镜首页" className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#3f82ff_0%,#7b6cff_58%,#7ee2ff_100%)] text-white shadow-lg shadow-blue-300/40">
          <Icon name="message" className="h-6 w-6" />
        </span>
        <span className="leading-none">
          <span className="block text-2xl font-black text-slate-950">言镜</span>
          <span className="mt-1 block text-xs font-semibold text-slate-800">YanJing</span>
        </span>
      </Link>

      <nav aria-label="主导航" className="hidden items-center gap-10 xl:flex">
        {navItems.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={index === 0 ? "page" : undefined}
            className="relative px-1 py-3 text-base font-semibold text-slate-950 transition hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100"
          >
            {item.label}
            {index === 0 ? (
              <span
                aria-hidden="true"
                className="absolute inset-x-1 -bottom-1 h-1 rounded-full bg-blue-600"
              />
            ) : null}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <Link
          href="/login"
          className="hidden min-h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/75 px-8 text-base font-semibold text-slate-950 shadow-md shadow-slate-200/60 transition hover:border-blue-200 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100 sm:inline-flex"
        >
          登录
        </Link>
        <Link
          href="/resume"
          className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-blue-600 px-6 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 sm:px-8"
        >
          立即体验
        </Link>
      </div>
    </header>
  );
}

function StatsStrip() {
  return (
    <div className="relative z-10 mx-auto mt-7 w-full max-w-[1180px] rounded-[1.5rem] border border-white/80 bg-white/85 px-3 py-2.5 shadow-xl shadow-blue-100/70 backdrop-blur sm:px-4">
      <dl className="grid grid-cols-2 gap-y-2 md:grid-cols-4 md:gap-y-0 md:divide-x md:divide-slate-100">
        {stats.map((item) => (
          <div
            key={item.label}
            className="flex min-w-0 items-center gap-3 px-2 py-2 sm:px-4 md:justify-center lg:px-6"
          >
            <dt className="sr-only">{item.label}</dt>
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full sm:h-11 sm:w-11 ${iconToneClasses[item.tone]}`}
            >
              <Icon name={item.icon} className="h-5 w-5" />
            </span>
            <dd className="min-w-0">
              <div className="whitespace-nowrap text-xl font-black leading-tight text-slate-950 lg:text-2xl">
                {item.value}
              </div>
              <div className="mt-0.5 whitespace-nowrap text-xs font-medium text-slate-600 sm:text-sm">
                {item.label}
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function ProductMockup() {
  return (
    <div
      role="img"
      aria-label="言镜产品界面预览：模拟面试、简历解析、能力评估和报告生成"
      className="relative mx-auto hidden h-[500px] w-full max-w-[720px] lg:block"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-[4%] bottom-[5%] top-[11%] rounded-[2rem] border border-white/80 bg-blue-100/40 shadow-2xl shadow-blue-300/40 backdrop-blur"
      />
      <div
        aria-hidden="true"
        className="absolute left-[12%] top-[10%] h-[70%] w-[75%] -rotate-2 rounded-[2rem] border border-white/80 bg-white/55 p-4 shadow-2xl shadow-blue-300/30 backdrop-blur-xl sm:p-5"
      >
        <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-[28%_1fr]">
          <aside className="hidden min-w-0 rounded-3xl bg-white/35 p-3 sm:block">
            <div className="mb-6 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#3f82ff,#7b6cff)] text-white">
                <Icon name="message" className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-sm font-black text-slate-900">言镜</span>
                <span className="text-[10px] font-semibold text-slate-500">YanJing</span>
              </span>
            </div>
            <div className="space-y-2">
              {sideItems.map((item, index) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold ${
                    index === 0 ? "bg-white text-blue-600 shadow-sm" : "text-slate-500"
                  }`}
                >
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-lg ${
                      index === 0 ? "bg-blue-600 text-white" : "bg-slate-200/70 text-slate-400"
                    }`}
                  >
                    <Icon name={index === 2 ? "file" : index === 3 ? "chart" : "message"} className="h-3 w-3" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </aside>

          <div className="min-w-0 space-y-4">
            <div className="relative min-h-[138px] overflow-hidden rounded-3xl bg-[linear-gradient(115deg,#ffffff_0%,#eef5ff_58%,#d9e8ff_100%)] p-5 shadow-lg shadow-blue-100/70">
              <div className="relative z-10 max-w-[58%]">
                <p className="text-lg font-black text-slate-950">你好，今天准备练习什么呢？</p>
                <p className="mt-3 text-sm font-medium text-slate-600">选择岗位或开始新的面试练习吧</p>
                <span className="mt-4 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-400/30">
                  开始练习
                </span>
              </div>
              <Robot />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {previewCards.map((card) => (
                <div key={card.title} className="rounded-2xl bg-white/72 p-4 shadow-md shadow-blue-100/60">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl ${iconToneClasses[card.tone]}`}
                    >
                      <Icon name={card.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-black text-slate-950">{card.title}</div>
                      <div className="mt-1 text-xs font-medium text-slate-500">{card.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-[1%] top-[8%] w-40 rounded-3xl border border-white/90 bg-white/92 p-5 shadow-xl shadow-blue-200/60 backdrop-blur sm:right-[2%] sm:w-44">
        <p className="text-xs font-black text-slate-900">AI 实时反馈</p>
        <p className="mt-5 text-4xl font-black leading-none text-emerald-500">97分</p>
        <p className="mt-3 text-xs font-semibold text-slate-600">综合表现：优秀</p>
      </div>

      <div className="absolute bottom-[4%] right-[1%] hidden w-52 rounded-3xl border border-white/90 bg-white/92 p-5 shadow-xl shadow-blue-200/60 backdrop-blur sm:block">
        <p className="text-sm font-black text-slate-900">能力维度分析</p>
        <RadarChart />
      </div>

      <div className="absolute bottom-[8%] left-[2%] hidden w-52 rounded-3xl border border-white/90 bg-white/92 p-5 shadow-xl shadow-blue-200/60 backdrop-blur sm:block">
        <p className="text-sm font-black text-slate-900">语音识别中...</p>
        <div className="mt-4 flex h-10 items-center gap-1">
          {Array.from({ length: 22 }).map((_, index) => (
            <span
              key={index}
              className="w-1 rounded-full bg-blue-500"
              style={{ height: `${12 + ((index * 7) % 28)}px`, opacity: 0.25 + ((index % 5) * 0.15) }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Robot() {
  return (
    <div className="absolute bottom-0 right-2 h-36 w-36 sm:right-8 sm:h-40 sm:w-40">
      <div className="absolute left-1/2 top-0 h-16 w-24 -translate-x-1/2 rounded-[2rem] border border-blue-100 bg-slate-900 shadow-lg shadow-blue-200/80">
        <span className="absolute left-6 top-6 h-3 w-3 rounded-full bg-sky-400 shadow-[28px_0_0_#38bdf8]" />
        <span className="absolute bottom-4 left-1/2 h-1.5 w-8 -translate-x-1/2 rounded-full bg-blue-500" />
      </div>
      <div className="absolute left-[22px] top-8 h-10 w-5 rounded-full bg-blue-500" />
      <div className="absolute right-[22px] top-8 h-10 w-5 rounded-full bg-blue-500" />
      <div className="absolute bottom-0 left-1/2 h-28 w-28 -translate-x-1/2 rounded-t-[3rem] border border-blue-100 bg-white shadow-lg shadow-blue-200/60">
        <span className="absolute left-1/2 top-6 h-5 w-5 -translate-x-1/2 rounded-full bg-sky-400" />
        <span className="absolute bottom-5 left-1/2 h-10 w-16 -translate-x-1/2 rounded-full bg-blue-100" />
      </div>
      <div className="absolute bottom-9 left-0 h-9 w-9 rounded-full border border-blue-100 bg-white" />
      <div className="absolute bottom-9 right-0 h-9 w-9 rounded-full border border-blue-100 bg-white" />
    </div>
  );
}

function RadarChart() {
  return (
    <svg className="mt-3 h-36 w-full" viewBox="0 0 180 128" aria-hidden="true">
      <g fill="none" stroke="#dbeafe" strokeWidth="1">
        <polygon points="90,8 151,43 133,110 47,110 29,43" />
        <polygon points="90,28 132,52 120,96 60,96 48,52" />
        <polygon points="90,48 112,61 106,82 74,82 68,61" />
        <line x1="90" y1="8" x2="90" y2="110" />
        <line x1="151" y1="43" x2="47" y2="110" />
        <line x1="133" y1="110" x2="29" y2="43" />
        <line x1="47" y1="110" x2="151" y2="43" />
        <line x1="29" y1="43" x2="133" y2="110" />
      </g>
      <polygon points="90,26 131,52 112,91 64,95 52,58" fill="#3b82f6" fillOpacity="0.22" stroke="#2563eb" strokeWidth="2" />
      <circle cx="90" cy="26" r="3" fill="#2563eb" />
      <circle cx="131" cy="52" r="3" fill="#2563eb" />
      <circle cx="112" cy="91" r="3" fill="#2563eb" />
      <circle cx="64" cy="95" r="3" fill="#2563eb" />
      <circle cx="52" cy="58" r="3" fill="#2563eb" />
      <text x="90" y="7" textAnchor="middle" className="fill-slate-500 text-[9px] font-semibold">
        表达能力
      </text>
      <text x="157" y="44" className="fill-slate-500 text-[9px] font-semibold">
        逻辑思维
      </text>
      <text x="118" y="123" className="fill-slate-500 text-[9px] font-semibold">
        专业知识
      </text>
      <text x="18" y="123" className="fill-slate-500 text-[9px] font-semibold">
        应变能力
      </text>
      <text x="0" y="44" className="fill-slate-500 text-[9px] font-semibold">
        应变能力
      </text>
    </svg>
  );
}

function FeatureSection() {
  return (
    <section id="features" className="relative px-5 pb-14 pt-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1380px]">
        <div className="text-center">
          <h2 className="text-4xl font-black text-[#0b1736]">
            为什么选择<span className="text-blue-600">言镜</span>？
          </h2>
          <p className="mt-4 text-lg font-medium text-slate-600">用 AI 技术，让面试准备更高效、更有针对性</p>
        </div>

        <div id="advantages" className="mt-7 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3 lg:gap-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="flex min-w-0 items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-md shadow-slate-200/50 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-100/70"
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${iconToneClasses[feature.tone]}`}
              >
                <Icon name={feature.icon} className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-black leading-6 text-slate-950">{feature.title}</h3>
                <p className="mt-1.5 text-sm leading-5 text-slate-600">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
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
