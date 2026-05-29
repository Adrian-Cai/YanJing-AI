"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";

export default function VerticalScanCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border border-[#e6ecff] bg-white/58 shadow-[0_18px_50px_rgba(59,130,246,0.06)] backdrop-blur-xl ${className}`}
    >
      <div className="relative z-10">{children}</div>

      <motion.div
        animate={
          reduceMotion
            ? { y: 0, opacity: 0.18 }
            : {
                y: ["-18%", "108%"],
                opacity: [0, 0.18, 0.22, 0.18, 0],
              }
        }
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 0.8,
        }}
        className="pointer-events-none absolute left-0 right-0 top-0 z-0 h-24 bg-gradient-to-b from-transparent via-[#dbeafe]/40 to-transparent"
      />

      <motion.div
        animate={
          reduceMotion
            ? { top: "0%" }
            : { top: ["0%", "100%"] }
        }
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 0.8,
        }}
        className="pointer-events-none absolute left-0 right-0 z-20 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#6d5df7]/55 to-transparent shadow-[0_0_12px_rgba(109,93,247,0.32)]"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#eef4ff]/55 to-transparent" />
    </div>
  );
}
