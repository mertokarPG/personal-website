import type { EnDict } from "@/lib/dict/en";

const CPU = [12, 38, 7, 64, 23];

export function NowTable({ dict }: { dict: EnDict }) {
  const items = dict.now.items;
  return (
    <div className="border border-rule bg-bg2 font-mono text-[13px]">
      <div className="grid grid-cols-[60px_180px_1fr_80px] border-b border-rule bg-bg px-5 py-[10px] text-[10px] tracking-[2px] text-muted">
        <div>{dict.now.pidHead}</div>
        <div>{dict.now.nameHead}</div>
        <div>{dict.now.descHead}</div>
        <div className="text-right">{dict.now.cpuHead}</div>
      </div>
      {items.map((n, i) => (
        <div
          key={n.label}
          className={`grid grid-cols-[60px_180px_1fr_80px] items-center px-5 py-3 text-[13px] ${
            i === items.length - 1 ? "" : "border-b border-rule"
          }`}
        >
          <div className="text-muted">{1000 + i * 3}</div>
          <div
            className="text-amber lowercase"
            style={{ letterSpacing: "0.5px" }}
          >
            {n.label.toLowerCase().replace(/\s+/g, "_")}.proc
          </div>
          <div>{n.value}</div>
          <div className="text-right text-green">{CPU[i] ?? 9}%</div>
        </div>
      ))}
    </div>
  );
}
