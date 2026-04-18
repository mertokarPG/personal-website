import { en } from "./dict/en";
import { tr } from "./dict/tr";

export const LOCALES = ["en", "tr"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(x: string): x is Locale {
  return (LOCALES as readonly string[]).includes(x);
}

const DICTS = { en, tr } as const;
export type Dictionary = (typeof DICTS)[Locale];

export function getDict(locale: Locale): Dictionary {
  return DICTS[locale];
}

export function localePath(locale: Locale, path: string): string {
  if (path === "/" || path === "") return `/${locale}`;
  return `/${locale}${path.startsWith("/") ? path : "/" + path}`;
}
