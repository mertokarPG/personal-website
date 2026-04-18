import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { StatusBar } from "@/components/status-bar";
import { NavBar } from "@/components/nav-bar";
import { Crosshair } from "@/components/crosshair";
import { CommandPalette } from "@/components/command-palette";
import { EasterEgg } from "@/components/easter-egg";
import { getAllWork } from "@/lib/work";
import { MERT } from "@/lib/mert";
import { LOCALES, getDict, isLocale, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  if (!isLocale(params.locale)) return {};
  const dict = getDict(params.locale);
  return {
    title: dict.meta.siteTitle,
    description: dict.meta.siteDescription,
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDict(locale);

  const work = getAllWork(locale).map((w) => ({
    slug: w.slug,
    title: w.title,
  }));

  return (
    <div id="sys-scroll" className="relative min-h-screen" lang={locale}>
      <div
        aria-hidden
        className="fixed inset-0 z-40 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0) 0 2px, rgba(0,0,0,0.12) 2px 3px)",
        }}
      />
      <Crosshair />
      <StatusBar locale={locale} dict={dict} />
      <NavBar locale={locale} dict={dict} />
      {children}
      <CommandPalette
        locale={locale}
        dict={dict}
        work={work}
        email={MERT.email}
      />
      <EasterEgg dict={dict} />
    </div>
  );
}
