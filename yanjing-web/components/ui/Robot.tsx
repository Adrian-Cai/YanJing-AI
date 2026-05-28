'use client';

/**
 * 机器人组件
 * 包含机器人回退图形和机器人图片资产
 * 当图片加载失败时显示CSS绘制的回退图形
 */

import { VoiceBars } from "./VoiceBars";
import { ROBOT_ASSET_SRC } from "@/data";

/**
 * 机器人回退图形
 * 当主图片加载失败时，使用纯CSS绘制的机器人图形
 */
function RobotFallback() {
  return (
    <div className="absolute inset-0 flex items-end justify-center" aria-hidden="true">
      <div className="relative mb-0 h-[176px] w-[214px]">
        {/* 语音识别面板 */}
        <div className="absolute left-[45px] top-[52px] z-20 h-[50px] w-[72px] -rotate-6 rounded-2xl border border-blue-200/80 bg-white/90 p-2 shadow-[0_10px_24px_rgba(80,120,220,0.18)]">
          <VoiceBars compact />
        </div>
        {/* 头部主体 */}
        <div className="absolute left-1/2 top-1 h-[90px] w-[152px] -translate-x-1/2 rounded-[44px] bg-gradient-to-br from-white to-blue-100 shadow-[inset_0_4px_10px_rgba(255,255,255,0.9),0_18px_40px_rgba(59,91,219,0.18)]" />
        {/* 面板区域 */}
        <div className="absolute left-1/2 top-7 h-[50px] w-[106px] -translate-x-1/2 rounded-[24px] bg-slate-900 shadow-inner">
          <span className="absolute left-7 top-4 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />
          <span className="absolute right-7 top-4 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />
          <span className="absolute left-1/2 top-8 h-2 w-8 -translate-x-1/2 rounded-b-full border-b-4 border-cyan-300" />
        </div>
        {/* 左臂 */}
        <div className="absolute left-[20px] top-[42px] h-12 w-6 rounded-l-full bg-blue-500" />
        {/* 右臂 */}
        <div className="absolute right-[20px] top-[42px] h-12 w-6 rounded-r-full bg-blue-500" />
        {/* 身体主体 */}
        <div className="absolute bottom-0 left-1/2 h-[86px] w-[128px] -translate-x-1/2 rounded-t-[44px] bg-gradient-to-br from-white to-blue-100 shadow-[0_18px_35px_rgba(59,91,219,0.16)]">
          <span className="absolute left-1/2 top-6 h-5 w-5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.7)]" />
        </div>
      </div>
    </div>
  );
}

/**
 * 机器人资产组件
 * 显示机器人图片，加载失败时自动切换到回退图形
 */
export function RobotAsset() {
  return (
    <div className="absolute right-[16px] top-[-22px] h-[192px] w-[252px]" data-testid="robot-asset">
      <RobotFallback />
      <img
        src={ROBOT_ASSET_SRC}
        alt="AI 面试陪练机器人"
        className="relative z-10 h-full w-full object-contain object-bottom drop-shadow-[0_18px_28px_rgba(59,91,219,0.18)]"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}
