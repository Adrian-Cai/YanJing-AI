export default function MarketingFooter() {
  return (
    <footer className="relative z-10 border-t border-slate-200/70 bg-white/45 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-5">
          <div className="h-1 w-9 rounded-full bg-[#3157e7]" />
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#3157e7]">
            YAN JING LOGO SYSTEM
          </p>
          <div className="space-y-1.5">
            <p className="text-[15px] font-medium text-slate-500">言镜 YanJing</p>
            <p className="text-[15px] text-slate-400">AI 面试表达力训练平台</p>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-slate-200/60 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-500">
            &copy; 2026 言镜 YanJing. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-slate-500">
            <a href="#" className="transition hover:text-[#3157e7]">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-[#3157e7]">
              Terms of Service
            </a>
            <a href="#" className="transition hover:text-[#3157e7]">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
