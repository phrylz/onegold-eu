"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Country = {
  code: string;
  name: string;
  currency: string;
  href: string;
  Flag: () => React.ReactElement;
};

/* ---- Compact inline flags (20x14, rounded via container) ---- */
function FlagUS() {
  return (
    <svg viewBox="0 0 20 14" width="20" height="14" aria-hidden>
      <rect width="20" height="14" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((y) => (
        <rect key={y} y={y} width="20" height="1" fill="#b22234" />
      ))}
      <rect width="9" height="8" fill="#3c3b6e" />
    </svg>
  );
}
function FlagUK() {
  return (
    <svg viewBox="0 0 60 30" width="20" height="14" aria-hidden>
      <clipPath id="cs-uk"><rect width="60" height="30" /></clipPath>
      <g clipPath="url(#cs-uk)">
        <rect width="60" height="30" fill="#012169" />
        <path d="M0,0 60,30 M60,0 0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 60,30 M60,0 0,30" stroke="#C8102E" strokeWidth="4" />
        <rect x="25" width="10" height="30" fill="#fff" />
        <rect y="10" width="60" height="10" fill="#fff" />
        <rect x="27" width="6" height="30" fill="#C8102E" />
        <rect y="12" width="60" height="6" fill="#C8102E" />
      </g>
    </svg>
  );
}
function FlagDE() {
  return (
    <svg viewBox="0 0 20 14" width="20" height="14" aria-hidden>
      <rect width="20" height="14" fill="#000" />
      <rect y="4.67" width="20" height="4.67" fill="#DD0000" />
      <rect y="9.33" width="20" height="4.67" fill="#FFCE00" />
    </svg>
  );
}
function FlagIT() {
  return (
    <svg viewBox="0 0 20 14" width="20" height="14" aria-hidden>
      <rect width="20" height="14" fill="#fff" />
      <rect width="6.67" height="14" fill="#008C45" />
      <rect x="13.33" width="6.67" height="14" fill="#CD212A" />
    </svg>
  );
}
function FlagFR() {
  return (
    <svg viewBox="0 0 20 14" width="20" height="14" aria-hidden>
      <rect width="20" height="14" fill="#fff" />
      <rect width="6.67" height="14" fill="#002395" />
      <rect x="13.33" width="6.67" height="14" fill="#ED2939" />
    </svg>
  );
}

const COUNTRIES: Country[] = [
  { code: "US", name: "United States", currency: "$ USD", href: "/", Flag: FlagUS },
  { code: "UK", name: "United Kingdom", currency: "£ GBP", href: "/en-gb", Flag: FlagUK },
  { code: "DE", name: "Deutschland", currency: "€ EUR", href: "/de", Flag: FlagDE },
  { code: "IT", name: "Italia", currency: "€ EUR", href: "/it", Flag: FlagIT },
  { code: "FR", name: "France", currency: "€ EUR", href: "/fr", Flag: FlagFR },
];

function activeFromPath(pathname: string): Country {
  // Longest-prefix match; default to US ("/").
  const match = COUNTRIES.filter((c) => c.href !== "/").find(
    (c) => pathname === c.href || pathname.startsWith(c.href + "/"),
  );
  return match ?? COUNTRIES[0];
}

export default function CountrySelector({
  tone = "dark",
  className = "",
}: {
  /** "light" = white text on dark backgrounds; "dark" = grey text on white. */
  tone?: "light" | "dark";
  className?: string;
}) {
  const pathname = usePathname() || "/";
  const active = activeFromPath(pathname);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const triggerText = tone === "light" ? "text-white" : "text-[#666]";
  const triggerStroke = tone === "light" ? "#ffffff" : "#666666";

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Country and currency: ${active.name}`}
        className={`flex items-center gap-[6px] ${triggerText}`}
      >
        <span className="inline-flex overflow-hidden rounded-[2px] leading-[0] ring-1 ring-black/10">
          <active.Flag />
        </span>
        <span className="text-[16px] leading-normal">{active.code}</span>
        <svg
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          aria-hidden
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M1 1l3.5 4L8 1" stroke={triggerStroke} strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 z-50 mt-2 w-[244px] overflow-hidden rounded-[10px] border border-black/10 bg-white py-2 shadow-[0_12px_32px_rgba(16,44,74,0.18)]"
        >
          {COUNTRIES.map((c) => {
            const isActive = c.code === active.code;
            return (
              <Link
                key={c.code}
                href={c.href}
                role="menuitem"
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-[10px] hover:bg-[#f4f7fb] ${
                  isActive ? "bg-[#f0f5ff]" : ""
                }`}
              >
                <span className="inline-flex overflow-hidden rounded-[2px] leading-[0] ring-1 ring-black/10">
                  <c.Flag />
                </span>
                <span
                  className={`text-[15px] leading-normal text-[#1a1a1a] ${
                    isActive ? "font-semibold" : ""
                  }`}
                >
                  {c.name}
                </span>
                <span className="ml-auto text-[14px] leading-normal text-[#8a94a6]">
                  {c.currency}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
