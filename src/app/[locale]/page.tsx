import { notFound } from "next/navigation";
import { getAllWork } from "@/lib/work";
import { MERT } from "@/lib/mert";
import { Ticker } from "@/components/ticker";
import { SectionHead, AsciiDivider } from "@/components/section-head";
import { WorkTable } from "@/components/work-table";
import { NowTable } from "@/components/now-table";
import { CmdLink, OpenPaletteButton } from "@/components/cmd-button";
import { UptimeInline } from "@/components/uptime-inline";
import { getDict, isLocale, localePath, type Locale } from "@/lib/i18n";

export default function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDict(locale);
  const h = dict.home;
  const work = getAllWork(locale);

  return (
    <>
      {/* HERO */}
      <div className="relative z-[2] px-6 pb-6 pt-12">
        <div className="relative border border-rule bg-bg2 px-9 py-8">
          <div className="absolute inset-x-0 top-0 flex h-7 items-center justify-between border-b border-rule bg-bg px-3 text-[10px] tracking-[1px] text-muted">
            <span>{h.windowTitle}</span>
            <span>{h.readonly}</span>
          </div>
          <div className="pt-[30px]">
            <div className="mb-[14px] text-[11px] tracking-[2px] text-amber">
              {h.bootLine}
            </div>
            <h1
              className="m-0 font-mono font-bold"
              style={{
                fontSize: "clamp(44px, 8vw, 88px)",
                lineHeight: 0.95,
                letterSpacing: "-3px",
              }}
            >
              MERT_OKAR
              <span className="text-amber animate-sys-blink">_</span>
            </h1>
            <div className="mt-7 grid grid-cols-[2fr_1fr] gap-10">
              <div className="text-[15px] leading-[1.65]">
                <div className="mb-2 text-[11px] text-green">
                  {h.bioComment}
                </div>
                {h.bio}
                <br />
                <br />
                <span className="text-[13px] text-muted">{h.bioFooter}</span>
              </div>
              <div className="border border-dashed border-rule bg-bg p-4 text-[11px] leading-[1.9]">
                <div className="mb-2 text-amber">{h.metricsTitle}</div>
                {h.metrics.map(([k, v]) => (
                  <div key={k} className="flex justify-between">
                    <span className="text-muted">{k}</span>
                    <span className="text-green">{v}</span>
                  </div>
                ))}
                <div className="mt-1.5 text-amber">{h.metricsFooter}</div>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap gap-2.5">
              <CmdLink href={localePath(locale, "/work")}>
                {h.buttons.seeWork}
              </CmdLink>
              <CmdLink href={localePath(locale, "/now")}>
                {h.buttons.now}
              </CmdLink>
              <CmdLink href={localePath(locale, "/contact")}>
                {h.buttons.contact}
              </CmdLink>
              <OpenPaletteButton>{h.buttons.palette}</OpenPaletteButton>
            </div>
          </div>
        </div>
      </div>

      <Ticker />

      {/* work preview */}
      <div className="relative z-[2] px-6 pb-6 pt-10">
        <SectionHead
          num="02"
          title={h.sections.work}
          right={`${work.length} ${h.sections.workRight}`}
          rightTo={localePath(locale, "/work")}
        />
        <WorkTable items={work} locale={locale} dict={dict} />
      </div>

      {/* now preview */}
      <div className="relative z-[2] px-6 pb-6 pt-10">
        <SectionHead
          num="03"
          title={h.sections.now}
          right={h.sections.nowRight}
          rightTo={localePath(locale, "/now")}
        />
        <NowTable dict={dict} />
      </div>

      <AsciiDivider />

      {/* contact preview */}
      <div className="relative z-[2] px-6 pb-20 pt-10">
        <SectionHead
          num="04"
          title={h.sections.contact}
          right={h.sections.contactRight}
          rightTo={localePath(locale, "/contact")}
        />
        <div className="grid grid-cols-2 gap-6 border border-rule bg-bg2 p-6">
          <div>
            <div className="mb-3 text-[11px] tracking-[2px] text-muted">
              {h.contactPreview.whoami}
            </div>
            <pre className="m-0 whitespace-pre-wrap font-mono text-[13px] leading-[1.8] text-fg">
              <span className="text-amber">email</span>:    {"  "}
              <a href={`mailto:${MERT.email}`} className="text-green">
                {MERT.email}
              </a>
              {"\n"}
              <span className="text-amber">linkedin</span>:{" "}
              <span className="text-green">/in/mert-okar-995049115</span>
              {"\n"}
              <span className="text-amber">location</span>:{" "}
              {h.contactPreview.locationLine}
              {"\n"}
              <span className="text-amber">
                {h.contactPreview.uptimeLabel}
              </span>
              :   <UptimeInline />
            </pre>
          </div>
          <div className="border-l border-rule pl-6">
            <div className="mb-3 text-[11px] tracking-[2px] text-muted">
              {h.contactPreview.reasonsTitle}
            </div>
            <ul className="m-0 list-none p-0 text-[14px] leading-[1.9]">
              {h.contactPreview.reasons.map((r, i) => (
                <li key={i} className="relative pl-[18px]">
                  <span className="absolute left-0 text-amber">▸</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
