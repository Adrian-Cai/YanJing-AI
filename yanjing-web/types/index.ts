/**
 * 言镜项目类型定义
 * 定义前端所有 TypeScript 类型
 */

/** 图标颜色类型 */
export type IconColor = "blue" | "purple" | "green" | "orange" | "yellow";

/** 导航菜单项 */
export type MenuItem = {
  label: string;
  active?: boolean;
  icon: string;
};

/** 功能特性项 */
export type FeatureItem = {
  title: string;
  desc: string;
  color: IconColor;
  icon: string;
};

/** 统计数据项 */
export type StatItem = {
  value: string;
  label: string;
  icon: string;
};

/** 图标组件 Props */
export type IconPathProps = {
  type: string;
};

/** Mini 图标组件 Props */
export type MiniIconProps = {
  type: string;
  color?: IconColor;
  className?: string;
};

/** 语音条组件 Props */
export type VoiceBarsProps = {
  compact?: boolean;
  fill?: boolean;
};

/** 应用图标组件 Props */
export type AppIconProps = {
  className?: string;
};
