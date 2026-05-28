/**
 * 产品优势展示组件
 * 展示言镜的核心竞争优势
 */

import { MiniIcon } from "@/components/ui/Icons";
import { advantages } from "@/data";

export function AdvantagesSection() {
  return (
    <section className="bg-white px-10 py-14 xl:px-12" data-testid="advantages-section">
      <div className="mx-auto max-w-[1280px]">
        {/* 区域标题 */}
        <div className="text-center">
          <h2 className="text-4xl font-black tracking-tight text-slate-950">
            为什么选择<span className="bg-gradient-to-r from-blue-600 to-violet-500 bg-clip-text text-transparent">言镜?</span>
          </h2>
          <p className="mt-4 text-lg font-medium text-slate-500">用 AI 技术，让面试准备更高效、更有针对性</p>
        </div>

        {/* 优势卡片网格 */}
        <div className="mt-10 grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 xl:grid-cols-5">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="group flex h-auto w-full min-w-0 items-start gap-4 rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_14px_36px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_56px_rgba(37,99,235,0.14)]"
            >
              <MiniIcon type={item.icon} color={item.color} />
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-black leading-6 text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm font-medium leading-6 text-slate-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
