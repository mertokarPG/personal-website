import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllWork } from "@/lib/work";
import { Breadcrumb } from "@/components/section-head";
import { WorkFilter } from "@/components/work-filter";
import { getDict, isLocale, localePath, type Locale } from "@/lib/i18n";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  if (!isLocale(params.locale)) return {};
  return { title: getDict(params.locale).meta.workTitle };
}

export default function WorkPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDict(locale);
  const work = getAllWork(locale);

  return (
    <div className="relative z-[2] px-4 pb-20 pt-8 md:px-6 md:pt-12">
      <Breadcrumb
        trail={[
          ["~", localePath(locale, "/")],
          [dict.crumbs.work, null],
        ]}
      />
      <h1
        className="m-0 mt-4 font-black uppercase tracking-[-1.5px] md:tracking-[-3px]"
        style={{
          fontSize: "clamp(36px, 9vw, 96px)",
          lineHeight: 0.95,
        }}
      >
        {dict.work.title}
        <span className="text-amber">.</span>
      </h1>
      <p className="my-3 mb-7 max-w-[640px] text-[14px] leading-[1.6] text-fg md:text-[15px]">
        {dict.work.intro}
      </p>

      <WorkFilter items={work} locale={locale} dict={dict} />
    </div>
  );
}
