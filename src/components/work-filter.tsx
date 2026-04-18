"use client";

import { useState } from "react";
import { WorkTable } from "./work-table";
import type { Work } from "@/lib/work";
import type { Locale } from "@/lib/i18n";
import type { EnDict } from "@/lib/dict/en";

export function WorkFilter({
  items,
  locale,
  dict,
}: {
  items: Work[];
  locale: Locale;
  dict: EnDict;
}) {
  const [filter, setFilter] = useState("ALL");
  const allTags = Array.from(new Set(items.flatMap((w) => w.tags)));
  const filtered =
    filter === "ALL" ? items : items.filter((w) => w.tags.includes(filter));

  const options = [dict.work.all, ...allTags];

  return (
    <>
      <div className="mb-5 flex flex-wrap gap-2">
        {options.map((t, i) => {
          const key = i === 0 ? "ALL" : t;
          const active = filter === key;
          return (
            <button
              key={t}
              onClick={() => setFilter(key)}
              className={`border px-[14px] py-2 font-mono text-[12px] tracking-[0.5px] transition-all duration-150 ${
                active
                  ? "border-amber bg-amber text-bg"
                  : "border-rule bg-transparent text-fg hover:bg-amber hover:text-bg hover:border-amber"
              }`}
            >
              #{t.toLowerCase().replace(/\s+/g, "_")}
            </button>
          );
        })}
      </div>
      <WorkTable items={filtered} locale={locale} dict={dict} />
    </>
  );
}
