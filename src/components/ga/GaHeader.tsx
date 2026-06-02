import Image from "next/image";
import CountrySelector from "@/components/CountrySelector";

export default function GaHeader() {
  return (
    <header className="relative flex w-full items-center justify-center py-[40px]">
      {/* Dark navy background with texture */}
      <div className="absolute inset-0 bg-[#102c4a] overflow-hidden">
        <Image
          src="/assets/ga-header-bg.jpg"
          alt=""
          fill
          aria-hidden
          className="object-cover object-center opacity-40"
          priority
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
