import { ImageResponse } from "next/og";
import { LOCALES, getDict, isLocale, type Locale } from "@/lib/i18n";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateImageMetadata({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) return [];
  return [
    {
      id: params.locale,
      alt: getDict(params.locale).meta.siteTitle,
      size,
      contentType,
    },
  ];
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function OgImage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDict(locale);
  const bootLine = dict.home.bootLine;

  const subtitle =
    locale === "tr"
      ? "Dijital Fabrika / IT-OT · P&G'de dokuz yıldır sahayı operatörlerin gerçekten açtığı yazılımlara bağlıyorum."
      : "Digital Factory / IT-OT · Nine years at P&G wiring shopfloor signals into software operators actually open.";

  const routeLabel = locale === "tr" ? "~/ana" : "~/home";
  const link = locale === "tr" ? "BAĞLANTI OK" : "LINK OK";
  const palette = locale === "tr" ? "⌘K · komut" : "⌘K · palette";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0d0d0c",
          color: "#e8e4d7",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
          backgroundImage:
            "linear-gradient(rgba(232,228,215,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(232,228,215,0.05) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            color: "#6e6a5c",
            letterSpacing: 2,
          }}
        >
          <span>
            <span style={{ color: "#8fb339" }}>●</span> {link} · OKAR.MERT
          </span>
          <span style={{ color: "#f5a524" }}>{routeLabel}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 22,
              color: "#f5a524",
              letterSpacing: 4,
              marginBottom: 24,
            }}
          >
            {bootLine}
          </div>
          <div
            style={{
              fontSize: 160,
              fontWeight: 700,
              letterSpacing: -8,
              lineHeight: 0.95,
              display: "flex",
            }}
          >
            MERT_OKAR
            <span style={{ color: "#f5a524" }}>_</span>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              color: "#e8e4d7",
              maxWidth: 1000,
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            color: "#6e6a5c",
            letterSpacing: 2,
          }}
        >
          <span>{"// SYSTEM/LOG"}</span>
          <span style={{ color: "#f5a524" }}>{palette}</span>
        </div>
      </div>
    ),
    size
  );
}
