/**
 * 雷达图组件
 * 用于展示用户能力维度分析
 * 包含：表达能力、逻辑思维、专业知识、应变能力、抗压能力
 */

export function RadarChart() {
  const points = [
    [102, 38],
    [136, 60],
    [126, 100],
    [76, 104],
    [64, 62],
  ];

  return (
    <svg viewBox="0 0 200 128" className="mt-1 h-[82px] w-full" role="img" aria-label="能力维度雷达图" data-testid="radar-chart">
      <title>能力维度雷达图：表达能力、逻辑思维、专业知识、应变能力、抗压能力</title>
      <polygon points="102,16 156,48 137,112 68,112 48,48" fill="none" stroke="#D9E2F7" strokeWidth="1" />
      <polygon points="102,38 134,57 122,94 84,94 72,57" fill="none" stroke="#D9E2F7" strokeWidth="1" />
      <polygon points="102,60 115,69 110,82 95,82 90,69" fill="none" stroke="#D9E2F7" strokeWidth="1" />
      <polygon points="102,38 136,60 126,100 76,104 64,62" fill="rgba(37,99,235,0.20)" stroke="#3569F4" strokeWidth="2.2" />
      {points.map(([x, y], index) => (
        <circle key={`${x}-${y}-${index}`} cx={x} cy={y} r="2.6" fill="#3569F4" />
      ))}
      <text x="102" y="10" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#64748B">表达能力</text>
      <text x="162" y="52" fontSize="11" fontWeight="bold" fill="#64748B">逻辑思维</text>
      <text x="124" y="126" fontSize="11" fontWeight="bold" fill="#64748B">专业知识</text>
      <text x="46" y="126" fontSize="11" fontWeight="bold" fill="#64748B">应变能力</text>
      <text x="8" y="52" fontSize="11" fontWeight="bold" fill="#64748B">抗压能力</text>
    </svg>
  );
}
