import Link from "next/link";

export function SectionHead({
  num,
  title,
  right,
  rightTo,
}: {
  num: string;
  title: string;
  right: string;
  rightTo?: string;
}) {
  return (
    <div className="mb-5 grid grid-cols-[auto_1fr_auto] items-center gap-4">
      <div className="font-mono text-[11px] tracking-[2px] text-amber">
        § {num} — {title.toUpperCase()}
      </div>
      <div className="h-px bg-rule" />
      {rightTo ? (
        <Link
          href={rightTo}
          className="font-mono text-[11px] tracking-[1px] text-muted"
        >
          {right}
        </Link>
      ) : (
        <div className="font-mono text-[11px] tracking-[1px] text-muted">
          {right}
        </div>
      )}
    </div>
  );
}

export function Breadcrumb({
  trail,
}: {
  trail: [string, string | null][];
}) {
  return (
    <div className="mb-2 font-mono text-[11px] tracking-[1px] text-muted">
      {trail.map(([label, to], i) => (
        <span key={i}>
          {i > 0 && <span> / </span>}
          {to ? (
            <Link href={to} className="text-amber">
              {label}
            </Link>
          ) : (
            <span className="text-fg">{label}</span>
          )}
        </span>
      ))}
    </div>
  );
}

export function Head({
  children,
  small,
  className = "",
}: {
  children: React.ReactNode;
  small?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`mb-[14px] font-mono tracking-[2px] text-amber ${
        small ? "text-[11px]" : "text-[13px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function AsciiDivider() {
  return (
    <div className="overflow-hidden whitespace-nowrap px-6 font-mono text-[11px] tracking-[2px] text-muted">
      ═══════════════════════════════════════════════════════════════════════════════════════════════════
    </div>
  );
}
