"use client";

import { useState } from "react";
import { MERT } from "@/lib/mert";
import type { EnDict } from "@/lib/dict/en";

export function ContactYaml({ dict }: { dict: EnDict }) {
  const [copied, setCopied] = useState(false);
  const y = dict.contact.yaml;

  const copy = () => {
    navigator.clipboard.writeText(MERT.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <pre className="m-0 whitespace-pre-wrap break-words font-mono text-[12px] leading-[1.8] text-fg md:text-[13px]">
      <span className="text-amber">{y.email}</span>:    {"  "}
      <button
        onClick={copy}
        className="cursor-pointer border-none bg-transparent p-0 text-green underline"
        style={{ font: "inherit" }}
      >
        {MERT.email}
        {copied ? ` ${y.copied}` : ""}
      </button>
      {"\n"}
      <span className="text-amber">{y.linkedin}</span>:{" "}
      <a
        href={MERT.linkedinUrl}
        target="_blank"
        rel="noreferrer"
        className="text-green underline"
      >
        /in/mert-okar-995049115
      </a>
      {"\n"}
      <span className="text-amber">{y.location}</span>: {y.locationValue}
      {"\n"}
      <span className="text-amber">{y.openTo}</span>:  {y.openToValue}
      {"\n"}
      <span className="text-amber">{y.response}</span>: {y.responseValue}
      {"\n"}
      <span className="text-amber">{y.languages}</span>: {y.languagesValue}
      {"\n"}
      <span className="text-amber">{y.pgp}</span>:      {y.pgpValue}
    </pre>
  );
}
