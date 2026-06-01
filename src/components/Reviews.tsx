"use client";

import Image from "next/image";

type Review = { name: string; quote: string };

const REVIEWS: Review[] = [
  { name: "Mary K.", quote: "Seamless transaction. Thanks!" },
  { name: "Phil M.", quote: "Easiest, most secure way to buy Gold, thanks, ONEGold!" },
  { name: "John N.", quote: "Very easy to do business." },
  {
    name: "Martin K.",
    quote: "Easy to manage and, I like the opportunity to able to buy at spot prices.",
  },
];

const arial = { fontFamily: "Arial, Helvetica, sans-serif" } as const;

export default function Reviews() {
  return (
    <section
      className="flex w-full flex-col items-center gap-5 bg-gradient-to-b from-white to-[#f2f4f8] to-50% px-[15px] py-[50px]"
      data-node-id="5844:6962"
    >
      <h2 className="w-full text-center text-[36px] font-normal leading-normal text-black">
        <span className="text-[#197eeb]">OneGold</span> is Loved by Investors
        Like You
      </h2>

      <div className="flex w-full snap-x snap-mandatory gap-[17px] overflow-x-auto px-[10px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {REVIEWS.map((r) => (
          <article
            key={r.name}
            className="flex h-[300px] w-[275px] shrink-0 snap-center flex-col items-center rounded-[20px] bg-white px-[25px] pb-[37px] pt-[45px] shadow-[0_4px_24px_rgba(16,44,74,0.06)]"
          >
            <Image
              src="/assets/review-stars.svg"
              alt="5 out of 5 stars"
              width={149}
              height={27}
              className="h-[27px] w-[149px]"
            />
            <p
              className="pt-[18px] text-[22.6px] font-bold leading-[27px] text-[#1a1a1a]"
              style={arial}
            >
              {r.name}
            </p>
            <p
              className="pt-[27px] text-center text-[18px] leading-[24.87px] text-[#1a1a1a]"
              style={arial}
            >
              {r.quote}
            </p>
          </article>
        ))}
      </div>

      <div className="h-[56px] w-[166px] overflow-hidden rounded-[4px]">
        <Image
          src="/assets/sa-seal.gif"
          alt="9584 Reviews — Shopper Approved"
          width={166}
          height={56}
          unoptimized
          className="h-[56px] w-[166px] object-cover"
        />
      </div>
    </section>
  );
}
