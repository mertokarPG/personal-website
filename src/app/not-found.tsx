import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative z-[2] px-6 py-12 font-mono text-fg">
      <h1
        className="m-0 font-black uppercase"
        style={{
          fontSize: "clamp(48px, 8vw, 96px)",
          letterSpacing: "-3px",
          lineHeight: 0.95,
        }}
      >
        404
      </h1>
      <p className="mt-4">
        <Link href="/" className="text-amber">
          ← home
        </Link>
      </p>
    </div>
  );
}
