"use client";

import { useEffect, useRef, useState } from "react";

export function UptimeInline() {
  const [uptime, setUptime] = useState(0);
  const startRef = useRef<number>(Date.now());
  useEffect(() => {
    const i = setInterval(() => {
      setUptime(Math.floor((Date.now() - startRef.current) / 1000));
    }, 1000);
    return () => clearInterval(i);
  }, []);
  return <>{uptime}s (this session)</>;
}
