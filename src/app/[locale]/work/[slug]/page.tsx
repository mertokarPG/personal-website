import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllWork, getWork } from "@/lib/work";
import { Breadcrumb, Head } from "@/components/section-head";
import {
  LOCALES,
  getDict,
  isLocale,
  localePath,
  type Locale,
} from "@/lib/i18n";

export function generateStaticParams() {
  const params: { locale: Locale; slug: string }[] = [];
  for (const locale of LOCALES) {
    for (const w of getAllWork(locale)) {
      params.push({ locale, slug: w.slug });
    }
  }
  return params;
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Metadata {
  if (!isLocale(params.locale)) return { title: "Not found" };
  const w = getWork(params.locale, params.slug);
  if (!w) return { title: "Not found" };
  return {
    title: `${w.title} — Mert Okar`,
    description: w.kicker,
  };
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <div className="mb-[14px] font-mono text-[11px] tracking-[2px] text-amber">
      § {props.children}
    </div>
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-5 text-[15px] leading-[1.65] text-fg">{props.children}</p>
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="m-0 list-decimal pl-5">{props.children}</ol>
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="mb-3 pl-2 text-[15px] leading-[1.65] text-fg">
      {props.children}
    </li>
  ),
};

export default function WorkDetailPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDict(locale);

  const w = getWork(locale, params.slug);
  if (!w) notFound();

  const all = getAllWork(locale);
  const idx = all.findIndex((x) => x.slug === w.slug);
  const prev = all[idx - 1];
  const next = all[idx + 1];
  const d = dict.detail;

  return (
    <div className="relative z-[2] px-6 pb-20 pt-12">
      <Breadcrumb
        trail={[
          ["~", localePath(locale, "/")],
          [dict.crumbs.work, localePath(locale, "/work")],
          [w.slug, null],
        ]}
      />

      <div className="mb-5 grid grid-cols-[120px_1fr_200px] items-baseline gap-7">
        <div
          className="text-[60px] font-bold text-amber"
          style={{ letterSpacing: "-2px" }}
        >
          [{w.no}]
        </div>
        <h1
          className="m-0 font-bold uppercase"
          style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            lineHeight: 1,
            letterSpacing: "-2px",
          }}
        >
          {w.title}
        </h1>
        <div className="text-right text-[12px] tracking-[1px] text-muted">
          {w.year}
        </div>
      </div>

      <div className="mb-8 max-w-[760px] text-[20px] leading-[1.5] text-fg">
        <span className="text-green">&gt;</span> {w.kicker}.
      </div>

      {/* Meta strip */}
      <div className="mb-10 grid grid-cols-4 border border-rule bg-bg2">
        {(
          [
            [d.role, w.role],
            [d.team, w.team],
            [d.stack, w.stack.join(" · ")],
            [d.outcome, w.result],
          ] as const
        ).map(([k, v], i) => (
          <div
            key={k}
            className={`p-5 ${i < 3 ? "border-r border-rule" : ""}`}
          >
            <div className="mb-1.5 text-[10px] tracking-[2px] text-amber">
              {k}
            </div>
            <div className="text-[13px] leading-[1.5] text-fg">{v}</div>
          </div>
        ))}
      </div>

      {/* Placeholder image well */}
      <div
        className="relative mb-12 flex items-center justify-center border border-dashed border-rule text-[12px] tracking-[2px] text-muted"
        style={{
          aspectRatio: "21 / 9",
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--bg2) 0 18px, var(--bg3) 18px 19px)",
        }}
      >
        <div className="text-center">
          {d.imgPlaceholderPrefix}
          {w.title.toUpperCase()}
          {d.imgPlaceholderSuffix}
          <br />
          <span className="text-[10px] opacity-70">{d.imgHint}</span>
        </div>
      </div>

      <div className="mb-12 grid grid-cols-[1fr_320px] gap-14">
        <div>
          <MDXRemote source={w.body} components={mdxComponents} />

          <Head small>§ {d.learned}</Head>
          <blockquote className="m-0 border-l-[3px] border-amber bg-bg2 px-5 py-4 text-[18px] italic leading-[1.5] text-fg">
            &ldquo;{w.learned}&rdquo;
          </blockquote>
        </div>
        <aside>
          <Head small>§ {d.impact}</Head>
          <div className="border border-rule bg-bg2">
            {w.impact.map(([k, v], i) => (
              <div
                key={k}
                className={`px-4 py-[14px] ${
                  i === w.impact.length - 1 ? "" : "border-b border-rule"
                }`}
              >
                <div className="mb-1 text-[10px] tracking-[2px] text-muted">
                  {k}
                </div>
                <div className="text-[18px] font-bold text-green">{v}</div>
              </div>
            ))}
          </div>

          <Head small className="mt-7">
            § {d.tags}
          </Head>
          <div className="flex flex-wrap gap-1.5">
            {w.tags.map((t) => (
              <span
                key={t}
                className="border border-rule px-2.5 py-1 text-[10px] tracking-[1px] text-amber"
              >
                #{t.toLowerCase().replace(/\s+/g, "_")}
              </span>
            ))}
          </div>
        </aside>
      </div>

      {/* prev / next */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        {prev ? (
          <Link
            href={localePath(locale, `/work/${prev.slug}`)}
            className="block border border-rule bg-bg2 px-[22px] py-[18px] transition-all duration-150"
          >
            <div className="mb-1.5 text-[10px] tracking-[2px] text-muted">
              ← {d.prev} [{prev.no}]
            </div>
            <div className="text-[18px] font-bold uppercase">{prev.title}</div>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={localePath(locale, `/work/${next.slug}`)}
            className="block border border-rule bg-bg2 px-[22px] py-[18px] text-right transition-all duration-150"
          >
            <div className="mb-1.5 text-[10px] tracking-[2px] text-muted">
              {d.next} [{next.no}] →
            </div>
            <div className="text-[18px] font-bold uppercase">{next.title}</div>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
