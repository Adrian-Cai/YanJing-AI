export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen bg-slate-50">
      {/* DashboardSidebar - 待实现 */}
      <section className="flex min-w-0 flex-1 flex-col">
        {/* DashboardHeader - 待实现 */}
        {children}
      </section>
    </main>
  );
}
