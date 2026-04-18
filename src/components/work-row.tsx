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
        <div className="grid grid-cols-[40px_1fr_24px] items-center gap-3 px-4 py-4 font-mono md:grid-cols-[60px_120px_1fr_180px_60px] md:gap-4 md:px-5 md:py-[18px]">
          <div className="text-sm font-bold text-amber md:text-base">
            [{w.no}]
          </div>
          <div className="hidden text-[11px] tracking-[1px] text-muted md:block">
            {w.year}
          </div>
          <div className="min-w-0">
            <div
              className={`break-words text-[15px] font-bold uppercase leading-tight transition-colors duration-150 md:text-[20px] ${
                hover ? "text-amber" : "text-fg"
              }`}
              style={{ letterSpacing: "-0.5px" }}
            >
              {w.title}
            </div>
            <div className="mt-1 text-[11px] leading-snug text-muted md:text-[12px]">
              &gt; {w.kicker}
            </div>
            <div className="mt-1.5 flex flex-wrap items-center gap-x-2 text-[10px] tracking-[1px] text-muted md:hidden">
              <span>{w.year}</span>
              <span className="opacity-40">·</span>
              <span className="text-green">{w.result}</span>
            </div>
          </div>
          <div className="hidden text-[13px] text-green md:block">
            {w.result}
          </div>
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
