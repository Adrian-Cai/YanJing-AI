/**
 * 言镜项目 Mock 数据
 * 包含页面展示所需的静态数据
 */

import type { MenuItem, FeatureItem, StatItem } from "@/types";

/** 机器人资源图片路径 */
export const ROBOT_ASSET_SRC = "/robot.png";

/** 导航栏菜单项 */
export const navItems = ["首页", "核心功能", "产品优势", "使用场景", "定价", "关于我们"];

/** 侧边栏菜单数据 */
export const mockMenus: MenuItem[] = [
  { label: "首页", active: true, icon: "home" },
  { label: "面试练习", icon: "chat" },
  { label: "简历解析", icon: "file" },
  { label: "能力报告", icon: "chart" },
  { label: "我的记录", icon: "record" },
  { label: "个人中心", icon: "user" },
];

/** 核心功能展示数据 */
export const mockFeatures: FeatureItem[] = [
  { title: "模拟面试", desc: "真实场景多轮问答", color: "blue", icon: "message" },
  { title: "简历解析", desc: "AI 分析履历匹配度", color: "purple", icon: "doc" },
  { title: "能力评估", desc: "多维度智能评分", color: "green", icon: "chart" },
  { title: "报告生成", desc: "个性化改进建议", color: "orange", icon: "note" },
];

/** 统计数据 */
export const stats: StatItem[] = [
  { value: "10,000+", label: "用户信任使用", icon: "users" },
  { value: "50,000+", label: "面试练习完成", icon: "star" },
  { value: "95%+", label: "用户好评率", icon: "check" },
  { value: "数据安全", label: "多重隐私保护", icon: "lock" },
];

/** 产品优势数据 */
export const advantages: FeatureItem[] = [
  { title: "真实场景模拟", desc: "覆盖行业高频面试问题，高度还原真实面试体验", color: "blue", icon: "message" },
  { title: "语音识别与分析", desc: "精准识别回答内容，分析语速、停顿、用词等表现", color: "green", icon: "mic" },
  { title: "AI 智能评分", desc: "从多个维度全面评分，指出优势与待改进点", color: "purple", icon: "target" },
  { title: "个性化改进建议", desc: "生成专属提升方案，帮你有针对性地提高", color: "orange", icon: "note" },
  { title: "隐私安全保障", desc: "数据加密存储，保护个人信息与练习内容", color: "blue", icon: "shield" },
];
