"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localePath, type Locale } from "@/lib/i18n";
import type { EnDict } from "@/lib/dict/en";

export function NavBar({ locale, dict }: { locale: Locale; dict: EnDict }) {
  const pathname = usePathname() ?? `/${locale}`;
  const base = `/${locale}`;

  const items: [string, string][] = [
    ["/", dict.nav.home],
    ["/work", dict.nav.work],
    ["/now", dict.nav.now],
    ["/contact", dict.nav.contact],
  ];

  return (
    <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-rule bg-bg px-4 pb-3 pt-4 md:flex-nowrap md:px-6 md:pb-[18px] md:pt-5">
      <Link
        href={base}
        className="text-sm font-bold tracking-[1px] text-fg no-underline md:text-base"
      >
        M.<span className="text-amber">O</span>_
        <span className="opacity-50">system</span>
      </Link>
      <div className="flex gap-1">
        {items.map(([p, label]) => {
          const full = localePath(locale, p);
          const active =
            p === "/"
              ? pathname === base
              : pathname === full || pathname.startsWith(full + "/");
          return (
            <Link
              key={p}
              href={full}
              className={`border px-2 py-1 text-[10px] uppercase tracking-[1px] transition-all duration-150 md:px-3 md:py-1.5 md:text-[12px] ${
                active
                  ? "border-amber bg-amber text-bg"
                  : "border-rule bg-transparent text-fg"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
