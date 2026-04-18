import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Locale } from "./i18n";

export type Work = {
  slug: string;
  no: string;
  year: string;
  title: string;
  kicker: string;
  desc: string;
  tags: string[];
  result: string;
  role: string;
  team: string;
  stack: string[];
  impact: [string, string][];
  learned: string;
  body: string;
};

const CONTENT_ROOT = path.join(process.cwd(), "content", "work");

const cache = new Map<Locale, Work[]>();

function readLocale(locale: Locale): Work[] {
  const cached = cache.get(locale);
  if (cached) return cached;

  const dir = path.join(CONTENT_ROOT, locale);
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .sort();

  const entries = files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data, content } = matter(raw);
    const slug = (data.slug as string) ?? file.replace(/\.mdx$/, "");
    return {
      slug,
      no: String(data.no ?? ""),
      year: String(data.year ?? ""),
      title: String(data.title ?? ""),
      kicker: String(data.kicker ?? ""),
      desc: String(data.desc ?? ""),
      tags: (data.tags as string[]) ?? [],
      result: String(data.result ?? ""),
      role: String(data.role ?? ""),
      team: String(data.team ?? ""),
      stack: (data.stack as string[]) ?? [],
      impact: (data.impact as [string, string][]) ?? [],
      learned: String(data.learned ?? ""),
      body: content,
    } satisfies Work;
  });

  entries.sort((a, b) => a.no.localeCompare(b.no));
  cache.set(locale, entries);
  return entries;
}

export function getAllWork(locale: Locale): Work[] {
  return readLocale(locale);
}

export function getWork(locale: Locale, slug: string): Work | undefined {
  return readLocale(locale).find((w) => w.slug === slug);
}
