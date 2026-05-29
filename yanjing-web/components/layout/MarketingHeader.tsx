"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "首页", href: "/" },
  { label: "核心功能", href: "/#features" },
  { label: "产品优势", href: "/#advantages" },
  { label: "使用场景", href: "/#scenarios" },
  { label: "定价", href: "/pricing" },
  { label: "关于我们", href: "/about" },
];

export default function MarketingHeader() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <img src="/YanJing-ico.ico" alt="言镜图标" className="h-11 w-11 rounded-2xl object-contain" />
          <div>
            <p className="text-2xl font-black leading-none tracking-tight text-slate-950">言镜</p>
            <p className="mt-1 text-xs font-bold text-slate-700">YanJing</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-9 text-sm text-slate-600 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={[
                "relative transition hover:text-[#3157e7]",
                isActive(item.href)
                  ? "font-medium text-[#3157e7] after:absolute after:-bottom-5 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-gradient-to-r after:from-[#3157e7] after:to-[#7a4df4]"
                  : "",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm text-slate-600 transition hover:text-[#3157e7]"
          >
            登录
          </Link>

          <Link
            href="/interview/upload"
            className="rounded-full bg-gradient-to-r from-[#3157e7] to-[#7a4df4] px-5 py-2.5 text-sm font-medium text-white shadow-[0_12px_28px_rgba(79,70,229,0.22)] transition hover:-translate-y-0.5"
          >
            立即体验
          </Link>
        </div>
      </div>
    </header>
  );
}
