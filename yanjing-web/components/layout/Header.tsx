/**
 * 页面头部导航组件
 * 包含：Logo、主导航菜单、登录/体验按钮
 */

import { AppIcon } from "@/components/ui/Icons";
import { navItems } from "@/data";

export function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-40" data-testid="site-header">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-10 xl:px-12">
        {/* Logo区域 */}
        <div className="flex items-center gap-3">
          <AppIcon className="h-11 w-11" />
          <div>
            <p className="text-2xl font-black leading-none tracking-tight text-slate-950">言镜</p>
            <p className="mt-1 text-xs font-bold text-slate-700">YanJing</p>
          </div>
        </div>

        {/* 主导航菜单 - 桌面端显示 */}
        <nav className="hidden items-center gap-14 text-base font-bold text-slate-900 lg:flex" aria-label="主导航">
          {navItems.map((item, index) => (
            <a
              key={item}
              href="#"
              className={`relative py-7 ${index === 0 ? "text-blue-600" : "hover:text-blue-600"}`}
            >
              {item}
              {/* 当前激活项下划线指示器 */}
              {index === 0 && <span className="absolute bottom-2 left-1/2 h-1 w-9 -translate-x-1/2 rounded-full bg-blue-600" />}
            </a>
          ))}
        </nav>

        {/* 操作按钮区域 */}
        <div className="flex items-center gap-5">
          <button className="hidden rounded-xl border border-slate-200 bg-white px-8 py-3 text-base font-bold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:block">
            登录
          </button>
          <button className="rounded-xl bg-blue-600 px-9 py-3 text-base font-bold text-white shadow-[0_14px_28px_rgba(37,99,235,0.28)] transition hover:-translate-y-0.5 hover:bg-blue-700">
            立即体验
          </button>
        </div>
      </div>
    </header>
  );
}
