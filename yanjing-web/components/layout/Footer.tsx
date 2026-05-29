/**
 * 页面底部组件
 * 包含：品牌信息、链接导航、版权信息
 */

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-[1280px] px-10 py-12 xl:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* 品牌信息 */}
          <div className="flex items-center gap-3">
            <img src="/YanJing-ico.ico" alt="言镜图标" className="h-9 w-9 rounded-xl object-contain" />
            <span className="font-bold text-slate-900">言镜 YanJing</span>
          </div>
          
          {/* 链接导航 */}
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-700 transition-colors">隐私政策</a>
            <a href="#" className="hover:text-slate-700 transition-colors">服务条款</a>
            <a href="#" className="hover:text-slate-700 transition-colors">联系我们</a>
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
