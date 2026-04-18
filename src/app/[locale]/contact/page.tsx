import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/section-head";
import { ContactYaml } from "@/components/contact-yaml";
import { MERT } from "@/lib/mert";
import { getDict, isLocale, localePath, type Locale } from "@/lib/i18n";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  if (!isLocale(params.locale)) return {};
  return { title: getDict(params.locale).meta.contactTitle };
}

const DOT_COLORS = ["text-green", "text-amber", "text-fg", "text-muted"];

export default function ContactPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDict(locale);
  const c = dict.contact;

  return (
    <div className="relative z-[2] px-4 pb-20 pt-8 md:px-6 md:pt-12">
      <Breadcrumb
        trail={[
          ["~", localePath(locale, "/")],
          [dict.crumbs.contact, null],
        ]}
      />

      <h1
        className="my-5 mb-8 font-black uppercase tracking-[-2px] md:mb-10 md:tracking-[-6px]"
        style={{
          fontSize: "clamp(42px, 13vw, 160px)",
          lineHeight: 0.9,
        }}
      >
        {c.heading}
        <span className="text-amber animate-sys-blink">_</span>
      </h1>

      <div className="grid grid-cols-1 gap-6 border border-rule bg-bg2 p-5 md:grid-cols-2 md:p-6">
        <div className="min-w-0">
          <div className="mb-3 text-[11px] tracking-[2px] text-muted">
            {c.yamlTitle}
          </div>
          <ContactYaml dict={dict} />
        </div>
        <div className="border-t border-rule pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
          <div className="mb-3 text-[11px] tracking-[2px] text-muted">
            {c.reasonsTitle}
          </div>
          <ul className="m-0 list-none p-0 text-[13px] leading-[1.9] md:text-[14px]">
            {c.reasons.map((r, i) => (
              <li key={i} className="relative mb-1 pl-[18px]">
                <span
                  className={`absolute left-0 ${
                    DOT_COLORS[i % DOT_COLORS.length]
                  }`}
                >
                  ▸
                </span>
                {r}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <a
              href={`mailto:${MERT.email}?subject=${encodeURIComponent(
                c.mailSubject
              )}`}
            >
              <button className="border border-amber bg-amber px-5 py-3 font-mono text-[13px] tracking-[0.5px] text-bg transition-all duration-150">
                {c.sendMail}
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-between gap-2 text-[9px] tracking-[2px] text-muted md:text-[10px]">
        <span>{c.footer.eot}</span>
        <span>
          BUILD {new Date().getFullYear()}.042 · {c.footer.build}
        </span>
        <span>{c.footer.eof}</span>
      </div>
    </div>
  );
}
