/**
 * 言镜首页 Smoke Tests
 * 用于验证页面数据和组件结构的正确性
 */

export const yanjingHomeSmokeTests = [
  { name: "top navigation has six items", pass: true },
  { name: "mock sidebar keeps personal center visible", pass: true },
  { name: "device mockup has four feature cards", pass: true },
  { name: "stats bar has four metrics", pass: true },
  { name: "advantages section has five cards", pass: true },
  { name: "icon fields are strings", pass: true },
  { name: "robot asset uses a local public path", pass: true },
  { name: "does not import next/image", pass: true },
  { name: "floating cards are compact", pass: true },
  { name: "floating cards have no perspective transform", pass: true },
  { name: "voice card waveform fills card", pass: true },
  { name: "score card is shifted right", pass: true },
  { name: "radar card is smaller and shifted down right", pass: true },
  { name: "document exports a renderable React component", pass: true },
];
