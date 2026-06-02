import Image from "next/image";
import DesktopPriceBar from "@/components/desktop/DesktopPriceBar";
import CountrySelector from "@/components/CountrySelector";

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
          <CountrySelector tone="dark" />

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
