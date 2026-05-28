import './globals.css';

export const metadata = {
  title: 'YanJing AI',
  description: 'AI 面试模拟器基础框架'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
