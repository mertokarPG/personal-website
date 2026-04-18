"use client";

import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

const BASE =
  "inline-block border font-mono text-[12px] px-[14px] py-2 tracking-[0.5px] transition-all duration-150 bg-transparent text-fg border-rule hover:bg-amber hover:text-bg hover:border-amber";

export const CmdButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }
>(function CmdButton({ className = "", children, ...rest }, ref) {
  return (
    <button ref={ref} className={`${BASE} ${className}`} {...rest}>
      {children}
    </button>
  );
});

export function CmdLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`${BASE} ${className}`}>
      {children}
    </Link>
  );
}

export function OpenPaletteButton({ children }: { children: ReactNode }) {
  return (
    <button
      className={`${BASE} text-muted`}
      onClick={() => {
        document.dispatchEvent(new CustomEvent("sys-open-palette"));
      }}
    >
      {children}
    </button>
  );
}
