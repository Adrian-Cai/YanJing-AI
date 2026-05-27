import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "言镜 | AI 面试陪练教练",
  description: "模拟真实面试场景，获得 AI 实时提问、评分反馈与个性化改进建议。",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className="bg-[#f8fbff] text-slate-950">{children}</body>
    </html>
  );
}
