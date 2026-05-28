/**
 * 语音波形条组件
 * 用于展示语音识别状态的动画效果
 */

import type { VoiceBarsProps } from "@/types";

/**
 * 语音波形条
 * 支持紧凑模式、标准模式和填充模式
 * @param compact - 是否使用紧凑模式
 * @param fill - 是否使用填充模式（填满父容器高度）
 */
export function VoiceBars({ compact = false, fill = false }: VoiceBarsProps) {
  const bars = fill
    ? [18, 26, 34, 42, 30, 48, 58, 44, 64, 72, 54, 42, 50, 36, 46, 32, 40, 28, 34, 24, 30, 20]
    : compact
      ? [12, 18, 24, 16, 30, 26, 20, 15]
      : [16, 24, 34, 26, 42, 50, 36, 44, 38, 28, 34, 24];

  return (
    <div
      className={`${fill ? "h-full w-full justify-between gap-[3px]" : compact ? "h-8 gap-[4px]" : "h-10 gap-[5px]"} flex items-center`}
      data-testid="voice-bars"
    >
      {bars.map((height, index) => (
        <span
          key={`${height}-${index}`}
          className={`${fill ? "w-[3px] flex-1 max-w-[4px]" : compact ? "w-[3px]" : "w-[4px]"} block rounded-full bg-blue-400/75 animate-voice-bar`}
          style={{ height: fill ? `${height}%` : height, animationDelay: `${index * 55}ms` }}
        />
      ))}
    </div>
  );
}
