"use client";

import { motion, useReducedMotion } from "motion/react";

export default function ProgressArrow({ delay = 0 }: { delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-3 hidden h-8 w-16 items-center md:flex">
      {/* 静态底线 */}
      <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-[#dbe5ff]" />

      {/* 渐进流动线 */}
      <motion.div
        aria-hidden
        animate={
          reduceMotion
            ? { x: 0, opacity: 0.5 }
            : {
                x: ["-40%", "80%"],
                opacity: [0, 1, 1, 0],
              }
        }
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 3.2,
          delay,
        }}
        className="absolute top-1/2 h-px w-10 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#4f63f7] to-[#8b5cf6] shadow-[0_0_10px_rgba(99,102,241,0.28)]"
      />

      {/* 箭头尖 */}
      <motion.span
        aria-hidden
        animate={
          reduceMotion
            ? { opacity: 0.55 }
            : {
                opacity: [0.25, 1, 0.25],
                x: [0, 2, 0],
              }
        }
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 3.2,
          delay,
        }}
        className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-r border-t border-[#7c83ff]"
      />
    </div>
  );
}
