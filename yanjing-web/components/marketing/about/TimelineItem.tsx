export function TimelineItem({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative grid gap-8 pb-24 md:grid-cols-[86px_1fr]">
      <div className="relative z-10 flex md:justify-center">
        <div className="grid h-16 w-16 place-items-center rounded-full border border-[#d7e3ff] bg-white/80 text-xl font-semibold text-[#3157e7] shadow-card backdrop-blur">
          {index}
        </div>
      </div>

      <div className="pt-3">
        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">{title}</h3>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}
