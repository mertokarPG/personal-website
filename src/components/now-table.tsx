import type { EnDict } from "@/lib/dict/en";

const CPU = [12, 38, 7, 64, 23];

export function NowTable({ dict }: { dict: EnDict }) {
  const items = dict.now.items;
  return (
    <div className="border border-rule bg-bg2 font-mono text-[13px]">
      <div className="grid grid-cols-[1fr_56px] gap-3 border-b border-rule bg-bg px-4 py-[10px] text-[10px] tracking-[2px] text-muted md:grid-cols-[60px_180px_1fr_80px] md:gap-4 md:px-5">
        <div className="hidden md:block">{dict.now.pidHead}</div>
        <div className="hidden md:block">{dict.now.nameHead}</div>
        <div className="md:hidden">{dict.now.nameHead}</div>
        <div className="hidden md:block">{dict.now.descHead}</div>
        <div className="text-right">{dict.now.cpuHead}</div>
      </div>
      {items.map((n, i) => (
        <div
          key={n.label}
          className={`grid grid-cols-[1fr_56px] items-start gap-3 px-4 py-3 text-[12px] md:grid-cols-[60px_180px_1fr_80px] md:items-center md:gap-4 md:px-5 md:text-[13px] ${
            i === items.length - 1 ? "" : "border-b border-rule"
          }`}
        >
          <div className="hidden text-muted md:block">{1000 + i * 3}</div>
          <div className="min-w-0">
            <div
              className="truncate lowercase text-amber md:overflow-visible md:whitespace-normal"
              style={{ letterSpacing: "0.5px" }}
            >
              {n.label.toLowerCase().replace(/\s+/g, "_")}.proc
            </div>
            <div className="mt-1 text-[12px] leading-snug text-fg md:hidden">
              {n.value}
            </div>
          </div>
          <div className="hidden md:block">{n.value}</div>
          <div className="text-right text-green">{CPU[i] ?? 9}%</div>
        </div>
      ))}
    </div>
  );
}
