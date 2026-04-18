import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb, Head } from "@/components/section-head";
import { NowTable } from "@/components/now-table";
import { MERT } from "@/lib/mert";
import { getDict, isLocale, localePath, type Locale } from "@/lib/i18n";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  if (!isLocale(params.locale)) return {};
  return { title: getDict(params.locale).meta.nowTitle };
}

export default function NowPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDict(locale);
  const today = new Date().toLocaleDateString(dict.now.dateLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="relative z-[2] px-6 pb-20 pt-12">
      <Breadcrumb
        trail={[
          ["~", localePath(locale, "/")],
          [dict.crumbs.now, null],
        ]}
      />
      <h1
        className="m-0 mt-4 font-black uppercase"
        style={{
          fontSize: "clamp(48px, 8vw, 96px)",
          letterSpacing: "-3px",
          lineHeight: 0.95,
        }}
      >
        {dict.now.title}
        <span className="text-green">{dict.now.suffix}</span>
      </h1>
      <p className="my-3 mb-7 max-w-[640px] text-[15px] leading-[1.6] text-fg">
        {dict.now.intro}{" "}
        <code className="text-amber">{dict.now.introCode}</code>.
      </p>

      <NowTable dict={dict} />

      <div className="mt-12 grid grid-cols-2 gap-6">
        <div className="border border-rule bg-bg2 p-6">
          <Head small>§ {dict.now.thinkingTitle}</Head>
          <ul className="m-0 list-none p-0 text-[14px] leading-[1.9]">
            {dict.now.thinking.map((t, i) => (
              <li key={i} className="relative mb-1 pl-[18px]">
                <span className="absolute left-0 text-amber">▸</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-rule bg-bg2 p-6">
          <Head small>§ {dict.now.stackTitle}</Head>
          <div className="flex flex-wrap gap-2">
            {MERT.stack.map((s) => (
              <span
                key={s}
                className="border border-rule px-3 py-1.5 text-[11px] tracking-[1px] text-fg"
              >
                {s}
              </span>
            ))}
          </div>

          <Head small className="mt-6">
            § {dict.now.lastUpdated}
          </Head>
          <div className="text-[13px] text-muted">
            {today} {dict.now.updatedSuffix}
          </div>
        </div>
      </div>
    </div>
  );
}
