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
    <div className="relative z-10 flex items-center justify-between border-b border-rule bg-bg px-6 pb-[18px] pt-5">
      <Link
        href={base}
        className="text-base font-bold tracking-[1px] text-fg no-underline"
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
              className={`px-3 py-1.5 text-[12px] uppercase tracking-[1px] transition-all duration-150 border ${
                active
                  ? "bg-amber text-bg border-amber"
                  : "bg-transparent text-fg border-rule"
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
