"use client";

import { useEffect, useState } from "react";

export function Crosshair() {
  const [c, setC] = useState({ x: 0, y: 0, visible: false });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setC({ x: e.clientX, y: e.clientY, visible: true });
    };
    const onLeave = () => setC((p) => ({ ...p, visible: false }));
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  if (!c.visible) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed left-0 right-0 z-50 h-px bg-amber opacity-[0.22]"
        style={{ top: c.y }}
      />
      <div
        className="pointer-events-none fixed bottom-0 top-0 z-50 w-px bg-amber opacity-[0.22]"
        style={{ left: c.x }}
      />
      <div
        className="pointer-events-none fixed z-[51] h-4 w-4 border border-amber"
        style={{ left: c.x, top: c.y, transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}
