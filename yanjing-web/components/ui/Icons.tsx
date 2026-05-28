/**
 * 图标组件库
 * 包含应用Logo、Mini图标、SVG路径图标
 */

import type { IconColor, IconPathProps, MiniIconProps, AppIconProps } from "@/types";

/**
 * 应用Logo图标
 * 显示言镜品牌Logo，用于导航栏和侧边栏
 */
export function AppIcon({ className = "" }: AppIconProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl bg-gradient-to-br from-sky-300 to-blue-600 shadow-[0_10px_28px_rgba(37,99,235,0.22)] ${className}`}
      data-testid="app-logo"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none">
        <path
          d="M7.5 16.5h6.2c3.2 0 5.3-2 5.3-5s-2.1-5-5.3-5H10c-3.1 0-5 1.9-5 4.8v6.1c0 .7.8 1.1 1.4.7l1.1-1.6Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 11.5h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/**
 * SVG图标路径映射
 * 根据类型返回对应的SVG path元素
 */
export function IconPath({ type }: IconPathProps) {
  switch (type) {
    case "home":
      return <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-9.5Z" />;
    case "file":
    case "doc":
      return <path d="M7 3h7l4 4v14H7V3Zm7 0v5h5M10 13h5m-5 4h5" />;
    case "chart":
      return <path d="M5 19V9m7 10V5m7 14v-7" />;
    case "record":
      return <path d="M6 6h12v12H6V6Zm3 3h6m-6 4h5" />;
    case "user":
      return <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0" />;
    case "shield":
      return <path d="M12 22s7-3 7-10V6l-7-3-7 3v6c0 7 7 10 7 10Z" />;
    case "briefcase":
      return <path d="M9 7V5h6v2m-10 3h14v9H5v-9Zm0 0V7h14v3" />;
    case "users":
      return <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m7-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />;
    case "star":
      return <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16.9 6.6 19.8l1-6.1-4.4-4.3 6.1-.9L12 3Z" />;
    case "check":
      return <path d="M21 12a9 9 0 1 1-9-9 9 9 0 0 1 9 9Zm-13-1 3 3 5-6" />;
    case "lock":
      return <path d="M7 11V8a5 5 0 0 1 10 0v3m-11 0h12v10H6V11Z" />;
    case "mic":
      return <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Zm7-3a7 7 0 0 1-14 0m7 7v4" />;
    case "target":
      return <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-4a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />;
    case "note":
      return <path d="M7 3h10v18H7V3Zm3 5h4m-4 4h4m-4 4h3" />;
    case "chat":
    case "message":
    default:
      return <path d="M5 6h14v10H9l-4 4V6Z" />;
  }
}

/**
 * 带颜色背景的迷你图标
 * 用于功能卡片、统计数据等场景
 */
export function MiniIcon({ type, color = "blue", className = "" }: MiniIconProps) {
  const colorMap: Record<IconColor, string> = {
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-violet-100 text-violet-600",
    green: "bg-emerald-100 text-emerald-600",
    orange: "bg-orange-100 text-orange-600",
    yellow: "bg-amber-100 text-amber-500",
  };

  return (
    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${colorMap[color]} ${className}`}>
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <IconPath type={type} />
      </svg>
    </div>
  );
}
