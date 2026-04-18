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
      className="sticky top-0 z-30 flex justify-between border-b border-rule bg-bg2 px-6 py-2 text-[11px] text-muted"
      style={{ letterSpacing: "0.5px" }}
    >
      <div className="flex gap-5">
        <span>
          <span className="text-green">●</span> {dict.status.linkOk}
        </span>
        <span>OKAR.MERT</span>
        <span className="text-amber">~{route}</span>
      </div>
      <div className="flex gap-5">
        <span>
          {dict.status.up} {hh}:{mm}:{ss}
        </span>
        <span className="text-amber">UTC {clock}</span>
        <LocaleSwitcher locale={locale} dict={dict} />
      </div>
    </div>
  );
}
