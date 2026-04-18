import { WorkRow } from "./work-row";
import type { Work } from "@/lib/work";
import type { Locale } from "@/lib/i18n";
import type { EnDict } from "@/lib/dict/en";

export function TableHead({ dict }: { dict: EnDict }) {
  return (
    <div className="grid grid-cols-[60px_120px_1fr_180px_60px] gap-4 border-b border-rule bg-bg px-5 py-[10px] text-[10px] uppercase tracking-[2px] text-muted">
      <div>{dict.work.tableHead.no}</div>
      <div>{dict.work.tableHead.when}</div>
      <div>{dict.work.tableHead.entry}</div>
      <div>{dict.work.tableHead.result}</div>
      <div className="text-right">→</div>
    </div>
  );
}

export function WorkTable({
  items,
  locale,
  dict,
}: {
  items: Work[];
  locale: Locale;
  dict: EnDict;
}) {
  return (
    <div className="border border-rule bg-bg2">
      <TableHead dict={dict} />
      {items.map((w) => (
        <WorkRow
          key={w.slug}
          locale={locale}
          slug={w.slug}
          no={w.no}
          year={w.year}
          title={w.title}
          kicker={w.kicker}
          result={w.result}
        />
      ))}
    </div>
  );
}
