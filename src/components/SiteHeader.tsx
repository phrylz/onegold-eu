import Image from "next/image";
import CountrySelector from "@/components/CountrySelector";

/**
 * Shared navy header banner used across the site (landing + sub-pages):
 * centered white OneGold logo, with the country selector pinned to the
 * right edge of the locked content container.
 */
export default function SiteHeader() {
  return (
    <header className="relative flex w-full items-center justify-center py-[40px]">
      {/* Dark navy background with texture */}
      <div className="absolute inset-0 overflow-hidden bg-[#102c4a]">
        <Image
          src="/assets/ga-header-bg.jpg"
          alt=""
          fill
          aria-hidden
          priority
          className="object-cover object-center opacity-40"
        />
      </div>

      {/* OneGold logo */}
      <div className="relative z-10 h-[50px] w-[233px]">
        <Image
          src="/assets/onegold-logo.png"
          alt="OneGold"
          width={233}
          height={50}
          priority
          className="h-[50px] w-[233px] object-contain"
        />
      </div>

      {/* Country selector */}
      <div className="absolute right-[max(16px,calc((100%-1240px)/2))] top-1/2 z-20 -translate-y-1/2">
        <CountrySelector tone="light" />
      </div>
    </header>
  );
}
