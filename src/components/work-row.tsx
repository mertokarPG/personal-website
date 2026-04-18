"use client";

import Link from "next/link";
import { useState } from "react";
import { localePath, type Locale } from "@/lib/i18n";

export type WorkRowProps = {
  locale: Locale;
  slug: string;
  no: string;
  year: string;
  title: string;
  kicker: string;
  result: string;
};

export function WorkRow(w: WorkRowProps) {
  const [hover, setHover] = useState(false);
  return (
    <Link href={localePath(w.locale, `/work/${w.slug}`)} className="block">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="cursor-pointer border-b border-rule transition-colors duration-150"
        style={{
          background: hover ? "rgba(245,165,36,0.06)" : "transparent",
        }}
      >
        <div className="grid grid-cols-[60px_120px_1fr_180px_60px] items-center gap-4 px-5 py-[18px] font-mono">
          <div className="text-base font-bold text-amber">[{w.no}]</div>
          <div className="text-[11px] tracking-[1px] text-muted">{w.year}</div>
          <div>
            <div
              className={`text-[20px] font-bold uppercase transition-colors duration-150 ${
                hover ? "text-amber" : "text-fg"
              }`}
              style={{ letterSpacing: "-0.5px" }}
            >
              {w.title}
            </div>
            <div className="mt-1 text-[12px] text-muted">&gt; {w.kicker}</div>
          </div>
          <div className="text-[13px] text-green">{w.result}</div>
          <div
            className="text-right text-amber transition-transform duration-150"
            style={{
              transform: hover ? "translateX(6px)" : "translateX(0)",
            }}
          >
            →
          </div>
        </div>
      </div>
    </Link>
  );
}
