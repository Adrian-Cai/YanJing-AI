"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  FileText,
  ScanLine,
  MessageCircleQuestion,
  BarChart3,
  Sparkles,
} from "lucide-react";

const flowItems = [
  {
    label: "PDF 上传",
    icon: FileText,
  },
  {
    label: "智能识别",
    icon: ScanLine,
  },
  {
    label: "问题生成",
    icon: MessageCircleQuestion,
  },
  {
    label: "面试分析",
    icon: BarChart3,
  },
  {
    label: "表达优化",
    icon: Sparkles,
    active: true,
  },
];

export default function InterviewFlowStrip() {
  return (
    <div className="mt-10 overflow-hidden rounded-[28px] border border-[#e1e9ff] bg-white/58 px-8 py-7 shadow-[0_18px_50px_rgba(59,130,246,0.08)] backdrop-blur-xl">
      <div className="flex items-center justify-between">
        {flowItems.map((item, index) => {
          const Icon = item.icon;
          const isLast = index === flowItems.length - 1;

          return (
            <div key={item.label} className="flex flex-1 items-center">
              <div className="flex min-w-[92px] flex-col items-center justify-center gap-3 text-center">
                <Icon
                  className={[
                    "h-6 w-6",
                    item.active ? "text-[#4f46e5]" : "text-slate-500",
                  ].join(" ")}
                  strokeWidth={1.7}
                />

                <span
                  className={[
                    "text-sm",
                    item.active
                      ? "font-medium text-[#4f46e5]"
                      : "text-slate-600",
                  ].join(" ")}
                >
                  {item.label}
                </span>
              </div>

              {!isLast && <ProgressArrow delay={index * 0.35} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ProgressArrow({ delay = 0 }: { delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-4 hidden h-8 flex-1 items-center md:flex">
      {/* 底层淡线 */}
      <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-[#dbe5ff]" />

      {/* 流动光线 */}
      <motion.div
        animate={
          reduceMotion
            ? { x: 0, opacity: 0.6 }
            : {
                x: ["-30%", "85%"],
                opacity: [0, 1, 1, 0],
              }
        }
        transition={{
          duration: 1.6,
          repeat: Infinity,
          repeatDelay: 3,
          delay,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 h-px w-12 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#4f63f7] to-[#8b5cf6] shadow-[0_0_10px_rgba(99,102,241,0.28)]"
      />

      {/* 箭头尖 */}
      <motion.span
        animate={
          reduceMotion
            ? { opacity: 0.6 }
            : {
                opacity: [0.35, 1, 0.35],
                x: [0, 2, 0],
              }
        }
        transition={{
          duration: 1.6,
          repeat: Infinity,
          repeatDelay: 3,
          delay,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-r border-t border-[#7c83ff]"
      />
    </div>
  );
}
