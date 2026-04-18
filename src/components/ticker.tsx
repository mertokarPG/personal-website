import { MERT } from "@/lib/mert";

export function Ticker() {
  const items = [...MERT.stack, ...MERT.stack, ...MERT.stack];
  return (
    <div className="relative z-[2] overflow-hidden border-y border-rule bg-bg py-3">
      <div className="flex gap-10 whitespace-nowrap font-mono text-[12px] text-muted animate-sys-ticker">
        {items.map((s, i) => (
          <span
            key={i}
            className={`tracking-[2px] ${
              i % 3 === 1 ? "text-amber" : "text-fg"
            }`}
          >
            ◆ {s.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
}
