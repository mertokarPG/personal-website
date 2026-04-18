"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { localePath, type Locale } from "@/lib/i18n";
import type { EnDict } from "@/lib/dict/en";

type WorkItem = { slug: string; title: string };

type Command = {
  id: string;
  label: string;
  hint: string;
  run: () => void;
};

export function CommandPalette({
  locale,
  dict,
  work,
  email,
}: {
  locale: Locale;
  dict: EnDict;
  work: WorkItem[];
  email: string;
}) {
  const router = useRouter();
  const pathname = usePathname() ?? `/${locale}`;
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = useMemo<Command[]>(() => {
    const rest = pathname.replace(/^\/(en|tr)/, "") || "";
    const switchHint = (l: "en" | "tr") => `~/${l}${rest}`;
    const base: Command[] = [
      {
        id: "home",
        label: dict.palette.commands.home,
        hint: `~${localePath(locale, "/")}`,
        run: () => router.push(localePath(locale, "/")),
      },
      {
        id: "work",
        label: dict.palette.commands.work,
        hint: `~${localePath(locale, "/work")}`,
        run: () => router.push(localePath(locale, "/work")),
      },
      {
        id: "now",
        label: dict.palette.commands.now,
        hint: `~${localePath(locale, "/now")}`,
        run: () => router.push(localePath(locale, "/now")),
      },
      {
        id: "contact",
        label: dict.palette.commands.contact,
        hint: `~${localePath(locale, "/contact")}`,
        run: () => router.push(localePath(locale, "/contact")),
      },
      ...work.map((w) => ({
        id: `w-${w.slug}`,
        label: `${dict.palette.commands.caseForPrefix}${w.title}`,
        hint: `~${localePath(locale, `/work/${w.slug}`)}`,
        run: () => router.push(localePath(locale, `/work/${w.slug}`)),
      })),
      {
        id: "mail",
        label: dict.palette.commands.mail,
        hint: email,
        run: () => {
          window.location.href = `mailto:${email}`;
        },
      },
      {
        id: "cv",
        label: dict.palette.commands.cv,
        hint: "cv.pdf",
        run: () => alert(dict.palette.commands.cvAlert),
      },
    ];

    if (locale === "en") {
      base.push({
        id: "switch-tr",
        label: dict.palette.commands.switchTr,
        hint: switchHint("tr"),
        run: () => router.push(`/tr${rest}`),
      });
    } else {
      base.push({
        id: "switch-en",
        label: dict.palette.commands.switchEn,
        hint: switchHint("en"),
        run: () => router.push(`/en${rest}`),
      });
    }

    return base;
  }, [router, locale, pathname, work, email, dict]);

  const filtered = commands.filter(
    (c) =>
      !query.trim() ||
      c.label.toLowerCase().includes(query.toLowerCase()) ||
      c.hint.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const active = document.activeElement;
      const tag = active?.tagName;
      if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA") {
        e.preventDefault();
        setOpen(true);
      } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    const onOpenEvent = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    document.addEventListener("sys-open-palette", onOpenEvent);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("sys-open-palette", onOpenEvent);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 10);
      setQuery("");
      setSel(0);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center bg-black/60 pt-[120px]"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[560px] max-w-[90vw] border border-amber bg-bg2 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
      >
        <div className="flex justify-between border-b border-rule px-[14px] py-[10px] text-[10px] tracking-[2px] text-muted">
          <span>{dict.palette.heading}</span>
          <span>{dict.palette.esc}</span>
        </div>
        <div className="flex items-center border-b border-rule px-[14px]">
          <span className="mr-2 text-amber">$</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSel(0);
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setSel((s) => Math.min(filtered.length - 1, s + 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setSel((s) => Math.max(0, s - 1));
              } else if (e.key === "Enter") {
                e.preventDefault();
                if (filtered[sel]) {
                  filtered[sel].run();
                  setOpen(false);
                }
              }
            }}
            placeholder={dict.palette.placeholder}
            className="flex-1 border-none bg-transparent py-3 text-[14px] text-fg outline-none"
          />
        </div>
        <div className="max-h-[320px] overflow-y-auto">
          {filtered.map((c, i) => (
            <div
              key={c.id}
              onMouseEnter={() => setSel(i)}
              onClick={() => {
                c.run();
                setOpen(false);
              }}
              className={`flex cursor-pointer justify-between px-[14px] py-[10px] text-[13px] border-l-2 ${
                i === sel
                  ? "bg-[rgba(245,165,36,0.14)] border-amber"
                  : "border-transparent"
              }`}
            >
              <span className="text-fg">
                <span className="mr-2 text-amber">→</span>
                {c.label}
              </span>
              <span className="text-[11px] text-muted">{c.hint}</span>
            </div>
          ))}
          {!filtered.length && (
            <div className="p-[14px] text-[12px] text-muted">
              {dict.palette.noMatch}{" "}
              <span className="text-amber">{dict.nav.work}</span>,{" "}
              <span className="text-amber">{dict.nav.now}</span>,{" "}
              <span className="text-amber">{dict.nav.contact}</span>.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
