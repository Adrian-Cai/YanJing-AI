'use client';

/**
 * 机器人资产组件
 * 显示机器人图片
 */

import { ROBOT_ASSET_SRC } from "@/data";

export function RobotAsset() {
  return (
    <div className="absolute right-[16px] top-[-22px] h-[192px] w-[252px]" data-testid="robot-asset">
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
