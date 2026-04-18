import { WorkRow } from "./work-row";
import type { Work } from "@/lib/work";
import type { Locale } from "@/lib/i18n";
import type { EnDict } from "@/lib/dict/en";

export function TableHead({ dict }: { dict: EnDict }) {
  return (
    <div className="grid grid-cols-[40px_1fr_24px] gap-3 border-b border-rule bg-bg px-4 py-[10px] text-[10px] uppercase tracking-[2px] text-muted md:grid-cols-[60px_120px_1fr_180px_60px] md:gap-4 md:px-5">
      <div>{dict.work.tableHead.no}</div>
      <div className="hidden md:block">{dict.work.tableHead.when}</div>
      <div>{dict.work.tableHead.entry}</div>
      <div className="hidden md:block">{dict.work.tableHead.result}</div>
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
