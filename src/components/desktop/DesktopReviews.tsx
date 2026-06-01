import Image from "next/image";

const arial = { fontFamily: "Arial, Helvetica, sans-serif" } as const;

type Review = { name: string; location: string; quote: string; date: string };

const REVIEWS: Review[] = [
  { name: "Carlos P.", location: "CA, united states", quote: "Easy to buy and sell!", date: "Apr 05, 2024" },
  {
    name: "Richard A.",
    location: "Fl, united states",
    quote:
      "Great so far. I like how they give all the details on buying bulk online - what you are buying, how you are buying (credit ca ...",
    date: "Mar 29, 2024",
  },
  { name: "Guillermo C.", location: "Maryland , united states", quote: "Super easy to use and invest.", date: "Mar 10, 2024" },
  { name: "Gregory H.", location: "Washington , united states", quote: "Easy and safe", date: "Mar 05, 2024" },
];

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
      <path
        d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        stroke="#197eeb"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function DesktopReviews() {
  return (
    <section className="flex w-full flex-col items-center gap-10 bg-gradient-to-b from-white to-[#f2f4f8] px-[100px] py-[60px]" data-node-id="5844:6463">
      <h2 className="text-center text-[48px] font-normal leading-normal text-black">
        <span className="text-[#197eeb]">OneGold</span> is Loved by Investors Like You
      </h2>

      <div className="relative flex w-full flex-wrap items-center justify-center gap-[17px]">
        <span className="absolute left-0 top-1/2 hidden -translate-y-1/2 min-[1440px]:block">
          <Chevron dir="left" />
        </span>
        {REVIEWS.map((r) => (
          <article
            key={r.name}
            className="relative flex h-[350px] w-[275px] shrink-0 flex-col items-center rounded-[20px] bg-white px-[25px] pb-[37px] pt-[45px] shadow-[0_4px_24px_rgba(16,44,74,0.06)]"
          >
            <Image src="/assets/review-stars.svg" alt="5 out of 5 stars" width={149} height={27} className="h-[27px] w-[149px]" />
            <p className="pt-[18px] text-[22.6px] font-bold leading-[27px] text-[#1a1a1a]" style={arial}>
              {r.name}
            </p>
            <p className="pt-[9px] text-[15.8px] leading-[22.6px] text-[#aaa]" style={arial}>
              {r.location}
            </p>
            <p className="px-[21px] pt-[27px] text-center text-[18px] leading-[24.87px] text-[#1a1a1a]" style={arial}>
              {r.quote}
            </p>
            <p className="absolute bottom-[37px] text-[18.1px] leading-[24.87px] text-[#197eeb]" style={arial}>
              {r.date}
            </p>
          </article>
        ))}
        <span className="absolute right-0 top-1/2 hidden -translate-y-1/2 min-[1440px]:block">
          <Chevron dir="right" />
        </span>
      </div>

      <div className="h-[56px] w-[166px] overflow-hidden rounded-[4px]">
        <Image src="/assets/sa-seal.gif" alt="9584 Reviews — Shopper Approved" width={166} height={56} unoptimized className="h-[56px] w-[166px] object-cover" />
      </div>
    </section>
  );
}
