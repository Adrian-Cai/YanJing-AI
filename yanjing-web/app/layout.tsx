import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "言镜 AI 面试官",
  description: "上传简历，模拟真实面试官追问",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
