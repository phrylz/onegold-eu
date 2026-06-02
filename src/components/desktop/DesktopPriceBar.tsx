type Row = {
  metal: string;
  price: string;
  dir: "up" | "down";
  change: string;
  pct: string;
};

const ROWS: Row[] = [
  { metal: "Gold", price: "$2647.40", dir: "up", change: "$22.60", pct: "0.84%" },
  { metal: "Silver", price: "$31.55", dir: "down", change: "($0.11)", pct: "-0.34%" },
  { metal: "Platinum", price: "$957.60", dir: "up", change: "$7.70", pct: "0.81%" },
];

function Arrow({ dir }: { dir: "up" | "down" }) {
  const color = dir === "up" ? "#27d659" : "#ff3c00";
  return (
    <svg width="12" height="6" viewBox="0 0 12 6" aria-hidden className="shrink-0">
      <path
        d={dir === "up" ? "M6 0l6 6H0z" : "M6 6L0 0h12z"}
        fill={color}
      />
    </svg>
  );
}

import CountrySelector from "@/components/CountrySelector";

export default function DesktopPriceBar({
  localeSelector = false,
}: {
  /** Show the country/currency selector at the right (used on the landing). */
  localeSelector?: boolean;
}) {
  return (
    <div className="relative z-30 flex w-full items-center justify-center gap-10 bg-[#1a3d62] px-[100px] py-[10px]" data-node-id="5844:6347">
      {ROWS.map((r) => {
        const color = r.dir === "up" ? "text-[#27d659]" : "text-[#ff3c00]";
        return (
          <div key={r.metal} className="flex items-center gap-[10px] text-[16px] leading-none whitespace-nowrap">
            <span className="text-white">{r.metal}</span>
            <span className="text-white">{r.price}</span>
            <Arrow dir={r.dir} />
            <span className={color}>{r.change}</span>
            <span className={color}>{r.pct}</span>
          </div>
        );
      })}
      {localeSelector && (
        <div className="absolute right-[20px] top-1/2 -translate-y-1/2">
          <CountrySelector tone="light" />
        </div>
      )}
    </div>
  );
}
