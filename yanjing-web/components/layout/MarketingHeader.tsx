"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/YanJing-ico.ico" alt="言镜图标" width={44} height={44} className="rounded-2xl object-contain" />
          <div>
            <p className="text-2xl font-black leading-none tracking-tight text-slate-950">言镜</p>
            <p className="mt-1 text-xs font-bold text-slate-700">YanJing</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 text-sm text-slate-600 lg:flex" aria-label="主导航">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={[
                "relative transition hover:text-accent",
                isActive(item.href)
                  ? "font-medium text-accent after:absolute after:-bottom-5 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-accent"
                  : "",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/login"
            className="text-sm text-slate-600 transition hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            登录
          </Link>

          <Link
            href="/interview/upload"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-glow transition hover:-translate-y-0.5 hover:shadow-elevated focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            立即体验
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-button text-slate-600 transition hover:bg-slate-100 lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "关闭菜单" : "打开菜单"}
        >
          {mobileOpen ? (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-slate-200/70 bg-white/95 backdrop-blur-xl lg:hidden"
          aria-label="移动端导航"
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={[
                  "rounded-button px-4 py-3 text-sm font-medium transition hover:bg-slate-50",
                  isActive(item.href) ? "text-accent bg-accent/5" : "text-slate-600",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-slate-200/70 pt-4">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="rounded-button px-4 py-3 text-center text-sm font-medium text-slate-600 transition hover:bg-slate-50"
              >
                登录
              </Link>
              <Link
                href="/interview/upload"
                onClick={() => setMobileOpen(false)}
                className="rounded-full bg-accent px-5 py-3 text-center text-sm font-medium text-white shadow-glow transition hover:shadow-elevated"
              >
                立即体验
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
