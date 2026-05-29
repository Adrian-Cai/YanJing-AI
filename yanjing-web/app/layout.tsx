import './globals.css';

export const metadata = {
  title: '言镜 YanJing - AI 面试陪练教练',
  description: '模拟真实面试场景，AI 实时提问与反馈，帮你发现问题、提升表达、增强自信，走向理想 Offer',
  icons: {
    icon: '/YanJing-ico.ico',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
