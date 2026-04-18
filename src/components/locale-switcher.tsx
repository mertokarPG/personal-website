"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES, type Locale } from "@/lib/i18n";
import type { EnDict } from "@/lib/dict/en";

export function LocaleSwitcher({
  locale,
  dict,
}: {
  locale: Locale;
  dict: EnDict;
}) {
  const pathname = usePathname() ?? `/${locale}`;
  const rest = pathname.replace(/^\/(en|tr)/, "") || "";

  return (
    <span
      aria-label={dict.localeSwitcher.aria}
      className="flex items-center gap-1"
    >
      {LOCALES.map((l, i) => {
        const active = l === locale;
        const label = dict.localeSwitcher[l];
        const href = `/${l}${rest}`;
        return (
          <span key={l} className="flex items-center gap-1">
            {i > 0 && <span className="text-muted/60">|</span>}
            {active ? (
              <span
                className="text-amber tracking-[1px]"
                aria-current="true"
              >
                {label}
              </span>
            ) : (
              <Link
                href={href}
                className="text-muted hover:text-fg tracking-[1px] transition-colors"
                prefetch={false}
              >
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </span>
  );
}
