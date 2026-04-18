"use client";

import { useEffect, useRef, useState } from "react";
import type { EnDict } from "@/lib/dict/en";

export function EasterEgg({ dict }: { dict: EnDict }) {
  const [open, setOpen] = useState(false);
  const buf = useRef("");
  const pattern = dict.egg.trigger;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.length !== 1) return;
      buf.current = (buf.current + e.key.toLowerCase()).slice(-pattern.length);
      if (buf.current === pattern) setOpen(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pattern]);

  if (!open) return null;

  return (
    <div
      onClick={() => setOpen(false)}
      className="fixed inset-0 z-[250] flex items-center justify-center bg-[rgba(13,13,12,0.96)] text-fg"
    >
      <div className="max-w-[520px] border border-amber p-8 text-center">
        <div className="mb-4 text-[11px] tracking-[2px] text-amber">
          {dict.egg.border}
        </div>
        <div className="mb-4 text-[22px] leading-[1.5]">
          {dict.egg.line1} <span className="text-amber">{pattern}</span>.
          <br />
          {dict.egg.line2}
        </div>
        <div className="text-[13px] text-muted">{dict.egg.footer}</div>
      </div>
    </div>
  );
}
