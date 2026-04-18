import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        bg2: "var(--bg2)",
        bg3: "var(--bg3)",
        fg: "var(--fg)",
        muted: "var(--muted)",
        amber: "var(--amber)",
        green: "var(--green)",
        red: "var(--red)",
        rule: "var(--rule)",
        "rule-strong": "var(--rule-strong)",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
      },
      keyframes: {
        "sys-blink": {
          "50%": { opacity: "0" },
        },
        "sys-ticker": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-33.33%)" },
        },
      },
      animation: {
        "sys-blink": "sys-blink 1s steps(2) infinite",
        "sys-ticker": "sys-ticker 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
