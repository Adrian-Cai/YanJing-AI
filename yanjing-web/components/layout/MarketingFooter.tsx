import Link from "next/link";
import Image from "next/image";

/**
 * 页面底部组件
 * 包含：品牌信息、链接导航、版权信息
 */

export default function MarketingFooter() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-[1280px] px-10 py-12 xl:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* 品牌信息 */}
          <div className="flex items-center gap-3">
            <Image src="/YanJing-ico.ico" alt="言镜图标" width={36} height={36} className="rounded-xl object-contain" />
            <span className="font-bold text-slate-900">言镜 YanJing</span>
          </div>

          {/* 链接导航 */}
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="/about" className="hover:text-slate-700 transition-colors">关于我们</Link>
            <Link href="#" className="hover:text-slate-700 transition-colors">隐私政策</Link>
            <Link href="#" className="hover:text-slate-700 transition-colors">服务条款</Link>
            <Link href="#" className="hover:text-slate-700 transition-colors">联系我们</Link>
          </div>

          {/* 版权信息 */}
          <div className="text-sm text-slate-400">
            © 2026 言镜 YanJing. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
