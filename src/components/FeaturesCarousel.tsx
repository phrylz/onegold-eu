"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Benefit = { title: string; desc: string };
type Card = { name: string; image: string; benefits: Benefit[] };

const CARDS: Card[] = [
  {
    name: "Simplicity",
    image: "/assets/feat-card-1.jpg",
    benefits: [
      { title: "Start in Minutes", desc: "Create an account or download the mobile app with a few clicks" },
      { title: "Trade 24/7", desc: "Buy and sell even when markets are closed" },
      { title: "Get Live Support", desc: "Call, email, or chat 5 days a week" },
    ],
  },
  {
    name: "Value",
    image: "/assets/feat-card-2.jpg",
    benefits: [
      { title: "High Liquidity", desc: "Sell metal and withdraw cash seamlessly" },
      { title: "Low Premiums", desc: "Industry low prices and regular “at spot” promotions" },
      { title: "No VAT", desc: "No VAT on vaulted metal" },
    ],
  },
  {
    name: "Trust",
    image: "/assets/feat-card-3.jpg",
    benefits: [
      { title: "Physically Secured Vaults", desc: "Store metal with trusted industry leaders" },
      { title: "Fully Insured", desc: "Metals are insured through the Lloyd’s of London" },
      { title: "Fully Audited", desc: "Regular third-party audits" },
      { title: "Backed by Industry Leaders", desc: "OneGold is a part of the Bullion International Group" },
    ],
  },
];

export default function FeaturesCarousel() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / (345 + 34));
    setActive(Math.max(0, Math.min(CARDS.length - 1, idx)));
  };

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * (345 + 34), behavior: "smooth" });
  };

  return (
    <section
      className="flex w-full flex-col items-center gap-5 bg-white px-[15px] py-[50px]"
      data-node-id="5844:7122"
    >
      <h2 className="w-[320px] text-center text-[36px] font-normal leading-normal text-black">
        <span className="text-[#197eeb]">OneGold</span>{" "}
        Meets the Demands of Today&rsquo;s Investor
      </h2>

      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex w-full snap-x snap-mandatory gap-[34px] overflow-x-auto px-[22px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {CARDS.map((card) => (
          <article
            key={card.name}
            className="flex h-[630px] w-[345px] shrink-0 snap-center flex-col overflow-hidden rounded-[20px] border border-[#aaa] bg-white pb-5"
          >
            <div className="relative h-[200px] w-[345px] shrink-0 bg-navy">
              <Image
                src={card.image}
                alt=""
                fill
                className="object-cover"
                sizes="345px"
              />
            </div>
            <div className="flex flex-col gap-[15px] px-[30px] pt-5">
              <h3 className="text-[36px] font-semibold leading-normal text-[#197eeb]">
                {card.name}
              </h3>
              <span className="h-px w-full bg-[#d9d9d9]" />
              {card.benefits.map((b) => (
                <div key={b.title}>
                  <p className="text-[18px] font-semibold leading-[1.2] text-[#197eeb]">
                    {b.title}
                  </p>
                  <p className="text-[16px] leading-[1.2] text-[#666]">{b.desc}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Dots */}
      <div className="flex items-center gap-[10px]">
        {CARDS.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`size-[10px] rounded-full transition-colors ${
              active === i ? "bg-[#4d4d4d]" : "bg-[#d9d9d9]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
