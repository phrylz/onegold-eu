"use client";

import Image from "next/image";
import { useState } from "react";

const PRODUCTS = [
  {
    src: "/assets/ga-product-1.png",
    alt: "5 gram Gold Bar - PAMP Lady Fortuna Veriscan® (In Assay)",
    name: "5 gram Gold Bar - PAMP Lady Fortuna Veriscan® (In Assay)",
  },
  {
    src: "/assets/ga-product-2.png",
    alt: "5 gram Gold Bar - PAMP Lady Fortuna Veriscan® (In Assay)",
    name: "5 gram Gold Bar - PAMP Lady Fortuna Veriscan® (In Assay)",
  },
  {
    src: "/assets/ga-product-3.png",
    alt: "Swiss Gold 20 Francs Helvetia Coin AU (Random Year)",
    name: "Swiss Gold 20 Francs Helvetia Coin AU (Random Year)",
  },
  {
    src: "/assets/ga-product-4.png",
    alt: "France Gold 20 Francs French Rooster Coin (1899-1914) AU",
    name: "France Gold 20 Francs French Rooster Coin (1899-1914) AU",
  },
  {
    src: "/assets/ga-product-5.png",
    alt: "South African 1 oz Gold Krugerrand Coin BU (Random Year)",
    name: "South African 1 oz Gold Krugerrand Coin BU (Random Year)",
  },
];

function ChevronLeft() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
      <path
        d="M25 30L15 20L25 10"
        stroke="#102c4a"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
      <path
        d="M15 10L25 20L15 30"
        stroke="#102c4a"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Desktop: shows 5 cards; Mobile: shows 1 card at a time with prev/next */
export default function GaProducts() {
  const [mobileIndex, setMobileIndex] = useState(0);

  const prevMobile = () =>
    setMobileIndex((i) => (i - 1 + PRODUCTS.length) % PRODUCTS.length);
  const nextMobile = () =>
    setMobileIndex((i) => (i + 1) % PRODUCTS.length);

  return (
    <section className="flex w-full flex-col items-center gap-[40px] px-[100px] py-[60px] max-[1023px]:px-4">
      <h2 className="text-[36px] font-normal leading-normal text-black text-center">
        Popular Products Available for Redemption
      </h2>

      {/* Desktop product grid — 5 cards with arrow chevrons */}
      <div className="hidden min-[1024px]:flex items-center justify-center gap-0 w-full max-w-[1240px]">
        {/* Left chevron (decorative, no slider on desktop) */}
        <button
          className="shrink-0 flex items-center justify-center w-[40px] h-[40px] text-[#102c4a] opacity-40 cursor-default"
          aria-hidden
          tabIndex={-1}
        >
          <ChevronLeft />
        </button>

        <div className="flex gap-[20px] items-stretch justify-center flex-1 overflow-hidden">
          {PRODUCTS.map((product, i) => (
            <div
              key={i}
              className="bg-white border border-[#c9c9c8] rounded-[20px] flex flex-col items-center gap-[20px] pt-[45px] pb-[40px] px-[20px] w-[210px] shrink-0 h-[350px]"
            >
              <div className="relative w-[125px] h-[125px] shrink-0">
                <Image
                  src={product.src}
                  alt={product.alt}
                  width={125}
                  height={125}
                  className="object-contain w-full h-full"
                />
              </div>
              <p className="text-[18px] font-normal leading-[28px] text-black text-center w-full">
                {product.name}
              </p>
            </div>
          ))}
        </div>

        {/* Right chevron */}
        <button
          className="shrink-0 flex items-center justify-center w-[40px] h-[40px] text-[#102c4a] opacity-40 cursor-default"
          aria-hidden
          tabIndex={-1}
        >
          <ChevronRight />
        </button>
      </div>

      {/* Mobile slider — 1 card at a time */}
      <div className="flex min-[1024px]:hidden items-center gap-[16px] w-full justify-center">
        <button
          onClick={prevMobile}
          className="shrink-0 flex items-center justify-center w-[40px] h-[40px]"
          aria-label="Previous product"
        >
          <ChevronLeft />
        </button>

        <div className="bg-white border border-[#c9c9c8] rounded-[20px] flex flex-col items-center gap-[20px] pt-[45px] pb-[40px] px-[20px] w-[210px] shrink-0 h-[350px]">
          <div className="relative w-[125px] h-[125px] shrink-0">
            <Image
              src={PRODUCTS[mobileIndex].src}
              alt={PRODUCTS[mobileIndex].alt}
              width={125}
              height={125}
              className="object-contain w-full h-full"
            />
          </div>
          <p className="text-[18px] font-normal leading-[28px] text-black text-center w-full">
            {PRODUCTS[mobileIndex].name}
          </p>
        </div>

        <button
          onClick={nextMobile}
          className="shrink-0 flex items-center justify-center w-[40px] h-[40px]"
          aria-label="Next product"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Mobile dots */}
      <div className="flex min-[1024px]:hidden gap-[6px] items-center justify-center">
        {PRODUCTS.map((_, i) => (
          <button
            key={i}
            onClick={() => setMobileIndex(i)}
            className={`w-[8px] h-[8px] rounded-full transition-colors ${
              i === mobileIndex ? "bg-[#102c4a]" : "bg-[#c9c9c8]"
            }`}
            aria-label={`Go to product ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
