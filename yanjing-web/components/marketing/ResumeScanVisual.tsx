"use client";

import { motion, useReducedMotion } from "motion/react";
import { FileText, Search, Sparkles } from "lucide-react";

const scanTransition = {
  duration: 8,
  repeat: Infinity,
  ease: [0.45, 0.05, 0.55, 0.95],
} as const;

export default function ResumeScanVisual() {
  const reduceMotion = useReducedMotion();

  const magnifierAnimate = reduceMotion
    ? { x: 30, y: 36 }
    : {
        x: [30, 200, 200, 30, 30, 200, 30],
        y: [36, 36, 96, 96, 156, 156, 36],
      };

  const beamAnimate = reduceMotion
    ? { top: "18%" }
    : {
        top: ["18%", "18%", "32%", "32%", "46%", "46%", "18%"],
      };

  const tagAnimate = reduceMotion
    ? { opacity: 1, y: 0 }
    : {
        opacity: [0, 0, 1, 1, 0, 0],
        y: [8, 8, 0, 0, -4, -4],
      };

  return (
    <div className="relative flex h-[520px] w-full items-center justify-center" aria-hidden="true">
      {/* 背景氛围 */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.10),transparent_62%)] blur-3xl" />
      <div className="absolute right-8 top-12 h-64 w-64 rounded-full bg-[#eef2ff]/70 blur-3xl" />

      {/* 左上小标签 */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="absolute left-8 top-10 hidden items-center gap-2 rounded-full border border-[#dfe7ff] bg-white/70 px-4 py-2 text-xs font-medium text-[#5b5ce2] shadow-sm backdrop-blur md:flex"
      >
        <Sparkles className="h-3.5 w-3.5" />
        简历要点识别
      </motion.div>

      {/* 简历卡片 */}
      <motion.div
        initial={{ opacity: 0, y: 24, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        whileHover={{ rotate: 0, y: -4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative h-[380px] w-[320px] overflow-hidden rounded-2xl border border-white/80 bg-white/74 p-7 shadow-[0_28px_70px_rgba(30,64,175,0.14)] backdrop-blur-xl"
      >
        {/* 柔光 */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#e0e7ff]/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-[#dbeafe]/70 blur-3xl" />

        {/* 头部 */}
        <div className="relative border-b border-slate-200/70 pb-5">
          <div className="mb-4 flex items-center gap-2 text-xs font-medium text-slate-400">
            <FileText className="h-4 w-4 text-[#6366f1]" />
            Resume Preview
          </div>

          <h3 className="text-2xl font-semibold tracking-tight text-[#4f46e5]">
            清衡
          </h3>

          <div className="mt-2 flex gap-3 text-xs text-slate-400">
            <span>qingheng@email.com</span>
            <span>138-0000-0000</span>
          </div>

          <p className="mt-2 text-xs font-semibold text-[#635bff]">
            高级产品经理
          </p>
        </div>

        {/* 内容 */}
        <div className="relative mt-7 space-y-7">
          <ResumeLines title="WORK EXPERIENCE" lines={[100, 86, 68]} />

          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-wide text-[#5b5ce2]">
              PROJECT HIGHLIGHTS
            </h4>

            <div className="space-y-4">
              <BulletLines widthA="100%" widthB="86%" />
              <BulletLines widthA="92%" widthB="72%" />
              <BulletLines widthA="82%" widthB="64%" />
            </div>
          </div>
        </div>

        {/* 扫描线：只保留一条 */}
        <motion.div
          animate={beamAnimate}
          transition={scanTransition}
          className="absolute left-0 right-0 z-10 h-[2px] bg-gradient-to-r from-transparent via-[#4f46e5]/45 to-transparent"
        />

        {/* 放大镜 */}
        <motion.div
          animate={magnifierAnimate}
          transition={scanTransition}
          className="absolute left-0 top-0 z-20 h-20 w-20 pointer-events-none"
        >
          <div className="relative h-full w-full">
            {/* 镜片 */}
            <div className="absolute inset-0 flex items-center justify-center rounded-full border-[4px] border-[#4f46e5] bg-white/35 shadow-[0_0_18px_rgba(79,70,229,0.22)] backdrop-blur-[2px]">
              {/* 只保留搜索 icon，不再放乱线 */}
              <Search className="h-7 w-7 text-[#4f46e5]" />
            </div>

            {/* 手柄 */}
            <div className="absolute left-[62px] top-[62px] h-2.5 w-10 origin-left rotate-45 rounded-full bg-[#4f46e5]" />

            {/* 只保留一个识别标签 */}
            <motion.div
              animate={tagAnimate}
              transition={{
                duration: 10,
                repeat: Infinity,
                times: [0, 0.12, 0.2, 0.48, 0.56, 1],
              }}
              className="absolute left-1/2 top-[-40px] -translate-x-1/2 whitespace-nowrap rounded-full bg-[#4f46e5] px-3 py-1.5 text-[10px] font-semibold text-white shadow-[0_8px_20px_rgba(79,70,229,0.22)]"
            >
              识别到项目经历
            </motion.div>
          </div>
        </motion.div>

        {/* 外圈高光 */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/80" />
      </motion.div>

      {/* 右下状态标签 */}
      <motion.div
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.45, duration: 0.5 }}
        className="absolute bottom-16 right-6 hidden items-center gap-2 rounded-full border border-emerald-100 bg-white/78 px-4 py-2 text-xs text-slate-500 shadow-sm backdrop-blur md:flex"
      >
        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.14)]" />
        持续识别中
      </motion.div>
    </div>
  );
}

function ResumeLines({
  title,
  lines,
}: {
  title: string;
  lines: number[];
}) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-semibold tracking-wide text-[#5b5ce2]">
        {title}
      </h4>

      <div className="space-y-2">
        {lines.map((width, index) => (
          <div
            key={index}
            className="h-2.5 rounded-full bg-slate-200/70"
            style={{ width: `${width}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function BulletLines({
  widthA,
  widthB,
}: {
  widthA: string;
  widthB: string;
}) {
  return (
    <div className="flex gap-3">
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6d5df7]" />

      <div className="w-full space-y-2">
        <div
          className="h-2.5 rounded-full bg-slate-200/70"
          style={{ width: widthA }}
        />
        <div
          className="h-2.5 rounded-full bg-slate-200/60"
          style={{ width: widthB }}
        />
      </div>
    </div>
  );
}
