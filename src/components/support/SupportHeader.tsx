import Image from "next/image";
import DesktopPriceBar from "@/components/desktop/DesktopPriceBar";

const NAV_ITEMS = [
  { label: "How It Works", active: false },
  { label: "Products", active: false },
  { label: "Services", active: false },
  { label: "Resources", active: true },
  { label: "About Us", active: false },
];

function ArrowRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden className="shrink-0">
      <path d="M2 6h8M6 2l4 4-4 4" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function SupportHeader() {
  return (
    <div className="sticky top-0 z-[5] flex w-full flex-col">
      {/* Price bar */}
      <DesktopPriceBar />

      {/* Main header */}
      <div className="flex h-[80px] w-full items-center justify-between bg-white px-[40px] py-[10px]">
        {/* Left: logo + nav */}
        <div className="flex items-center gap-[40px]">
          <div className="relative h-[26px] w-[129px]">
            <Image
              src="/assets/onegold-logo-blue.png"
              alt="OneGold"
              width={129}
              height={26}
              className="h-[26px] w-[129px] object-contain"
            />
          </div>

          <nav className="flex items-center gap-[30px]">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className={`flex items-center justify-center py-[10px] ${
                  item.active ? "border-b border-[#197eeb]" : ""
                }`}
              >
                <span className="text-[16px] leading-normal text-black whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </nav>

          {/* Credit Card nav item */}
          <div className="flex items-center gap-[5px] py-[10px]">
            <svg width="13" height="20" viewBox="0 0 13 20" fill="none" aria-hidden>
              <rect x="0.5" y="0.5" width="12" height="19" rx="1.5" stroke="#8d724e"/>
              <rect x="2" y="7" width="9" height="1.5" fill="#8d724e"/>
              <rect x="2" y="10" width="5" height="1.5" fill="#8d724e"/>
            </svg>
            <span className="text-[16px] leading-normal text-[#8d724e] whitespace-nowrap">
              Credit Card
            </span>
          </div>
        </div>

        {/* Right: locale + auth buttons */}
        <div className="flex items-center gap-[20px]">
          {/* Locale */}
          <div className="flex items-center gap-[10px]">
            <div className="flex items-center gap-[2px]">
              {/* UK flag icon */}
              <svg width="13" height="13" viewBox="0 0 60 30" aria-hidden>
                <clipPath id="hdr-uk"><rect width="60" height="30"/></clipPath>
                <rect width="60" height="30" fill="#012169"/>
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="white" strokeWidth="6" clipPath="url(#hdr-uk)"/>
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath="url(#hdr-uk)"/>
                <rect x="24" y="0" width="12" height="30" fill="white"/>
                <rect x="0" y="9" width="60" height="12" fill="white"/>
                <rect x="26" y="0" width="8" height="30" fill="#C8102E"/>
                <rect x="0" y="11" width="60" height="8" fill="#C8102E"/>
              </svg>
              <span className="text-[16px] leading-normal text-[#666]">EN</span>
              <svg width="9" height="6" viewBox="0 0 9 6" fill="none" aria-hidden>
                <path d="M1 1l3.5 4L8 1" stroke="#666" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex items-center gap-[2px]">
              <span className="text-[16px] leading-normal text-[#666]">USD</span>
              <svg width="9" height="6" viewBox="0 0 9 6" fill="none" aria-hidden>
                <path d="M1 1l3.5 4L8 1" stroke="#666" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* Login */}
          <button className="flex items-center justify-center rounded-[20px] border border-[#197eeb] px-[20px] py-[10px]">
            <span className="text-[16px] font-semibold leading-normal text-[#197eeb]">Login</span>
          </button>

          {/* Sign Up */}
          <button className="flex items-center justify-center rounded-[20px] border border-[#197eeb] bg-[#197eeb] px-[20px] py-[10px]">
            <span className="text-[16px] font-semibold leading-normal text-white">Sign Up</span>
          </button>
        </div>
      </div>

      {/* Promo bar */}
      <div className="flex w-full items-center justify-center bg-[#ebf0fe] px-[100px] py-[10px]">
        <div className="flex items-center gap-[5px]">
          {/* Switzerland flag icon */}
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
            <rect width="20" height="20" rx="10" fill="#FF0000"/>
            <rect x="8.5" y="4" width="3" height="12" fill="white"/>
            <rect x="4" y="8.5" width="12" height="3" fill="white"/>
          </svg>
          <span className="text-[16px] font-semibold leading-normal text-black whitespace-nowrap">
            Premium Discounts! Buy Switzerland Gold at Only 0.30% Over Spot.
          </span>
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}
