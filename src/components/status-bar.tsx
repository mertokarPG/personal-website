"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LocaleSwitcher } from "./locale-switcher";
import type { Locale } from "@/lib/i18n";
import type { EnDict } from "@/lib/dict/en";

export function StatusBar({
  locale,
  dict,
}: {
  locale: Locale;
  dict: EnDict;
}) {
  const pathname = usePathname() ?? `/${locale}`;
  const [clock, setClock] = useState("00:00:00");
  const [uptime, setUptime] = useState(0);
  const startRef = useRef<number>(Date.now());

  useEffect(() => {
    const tick = () => {
      setClock(new Date().toISOString().slice(11, 19));
      setUptime(Math.floor((Date.now() - startRef.current) / 1000));
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  const hh = String(Math.floor(uptime / 3600)).padStart(2, "0");
  const mm = String(Math.floor(uptime / 60) % 60).padStart(2, "0");
  const ss = String(uptime % 60).padStart(2, "0");

  const rest = pathname.replace(/^\/(en|tr)/, "");
  const route = rest === "" ? "/home" : rest;

  return (
    <div
      className="sticky top-0 z-30 flex justify-between gap-3 border-b border-rule bg-bg2 px-4 py-2 text-[10px] text-muted md:px-6 md:text-[11px]"
      style={{ letterSpacing: "0.5px" }}
    >
      <div className="flex min-w-0 items-center gap-3 md:gap-5">
        <span className="whitespace-nowrap">
          <span className="text-green">●</span> {dict.status.linkOk}
        </span>
        <span className="hidden md:inline">OKAR.MERT</span>
        <span className="truncate text-amber">~{route}</span>
      </div>
      <div className="flex shrink-0 items-center gap-3 md:gap-5">
        <span className="whitespace-nowrap">
          {dict.status.up} {hh}:{mm}:{ss}
        </span>
        <span className="hidden text-amber md:inline">UTC {clock}</span>
        <LocaleSwitcher locale={locale} dict={dict} />
      </div>
    </div>
  );
}
