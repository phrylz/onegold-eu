import Image from "next/image";

const BIG_URL = "https://www.bullioninternationalgroup.com/";

export default function GaBullion() {
  return (
    <section className="flex w-full flex-col items-center gap-0">
      {/* Main content area */}
      <div className="flex w-full flex-col items-center px-[100px] pt-[40px] pb-[100px] gap-[10px] max-[1023px]:px-4 max-[1023px]:pb-[60px]">
        {/* BIG Logo: stacked B + text */}
        <div className="relative flex items-end justify-center h-[74px] w-[210px] mb-[10px]">
          {/* "B" mark */}
          <div className="absolute left-0 bottom-0 h-[69px] w-[43px]">
            <Image
              src="/assets/ga-big-logo-b.svg"
              alt=""
              width={43}
              height={69}
              className="h-full w-full object-contain"
            />
          </div>
          {/* "Bullion International Group" text */}
          <div className="absolute left-[60px] top-0 h-[74px] w-[150px]">
            <Image
              src="/assets/ga-big-logo-text.svg"
              alt="Bullion International Group"
              width={150}
              height={74}
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Body text */}
        <p className="max-w-[800px] text-center text-[18px] font-normal leading-normal text-black">
          Bullion International Group is a global leader in precious metals,
          bringing together industry-leading brands, advanced technology, and
          decades of expertise. As the parent company of APMEX, OneGold, MTB,
          GOLD AVENUE, and more, we provide integrated solutions across minting,
          vaulting, wholesale, gold backed fintech and retail markets. We empower
          investors, collectors, and institutions worldwide by focusing on
          innovation and accessibility.
        </p>

        {/* Learn More link */}
        <a
          href={BIG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-[10px] text-[18px] font-semibold leading-[1.25] text-[#0d2f57] hover:underline mt-[10px]"
        >
          <span>Learn More</span>
          <Image
            src="/assets/ga-arrow-right.svg"
            alt=""
            width={16}
            height={16}
            className="w-[16px] h-[16px] object-contain"
            aria-hidden
          />
        </a>
      </div>

      {/* Black footer bar — full bleed, content locked to container */}
      <div className="w-full bg-black">
        <div className="mx-auto flex h-[50px] w-full max-w-[1240px] items-center gap-[10px] px-4 min-[1440px]:px-0">
          <Image
            src="/assets/goldbar-icon.svg"
            alt=""
            width={14}
            height={22}
            className="h-[22px] w-[14px] shrink-0"
            aria-hidden
          />
          <p className="whitespace-nowrap text-[16px] font-normal leading-normal text-white">
            A Bullion International Group Company
          </p>
          <p className="flex-1 text-right text-[16px] font-normal leading-normal text-white">
            © 2025 OneGold
          </p>
        </div>
      </div>
    </section>
  );
}
