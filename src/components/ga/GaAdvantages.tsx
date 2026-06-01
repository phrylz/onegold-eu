import Image from "next/image";

const GA_URL = "https://www.goldavenue.com/";

interface AdvantageProps {
  iconSrc: string;
  iconAlt: string;
  iconWidth: number;
  iconHeight: number;
  title: string;
  description: string;
}

function Advantage({ iconSrc, iconAlt, iconWidth, iconHeight, title, description }: AdvantageProps) {
  return (
    <div className="flex items-center gap-[20px] h-[200px] p-[40px] rounded-[10px] w-full min-[1024px]:w-[600px] shrink-0">
      <div className="flex items-center justify-center shrink-0" style={{ width: iconWidth + 10, height: 60 }}>
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={iconWidth}
          height={iconHeight}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col gap-[10px] flex-1">
        <h3 className="text-[24px] font-semibold leading-[1.1] tracking-[0.24px] text-black">
          {title}
        </h3>
        <p className="text-[18px] font-normal leading-normal text-black">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function GaAdvantages() {
  return (
    <section className="flex w-full flex-col items-center gap-[40px] bg-gradient-to-b from-white to-[#f2f4f8] px-[100px] py-[60px] max-[1023px]:px-4">
      <h2 className="text-[36px] font-normal leading-normal text-black text-center">
        The Advantages of Redeeming at GOLD AVENUE
      </h2>

      <div className="flex flex-wrap items-start justify-center gap-[40px] w-full max-w-[1240px]">
        <Advantage
          iconSrc="/assets/ga-icon-retailer.svg"
          iconAlt="Trusted European Retailer"
          iconWidth={67}
          iconHeight={53}
          title="Trusted European Retailer"
          description="GOLD AVENUE is the official online retailer in Europe of MKS PAMP GROUP, the worldwide leader in the precious metal industry."
        />

        <Advantage
          iconSrc="/assets/ga-icon-products.svg"
          iconAlt="1000s of Products"
          iconWidth={50}
          iconHeight={60}
          title="1000's of Products to Choose from"
          description="GOLD AVENUE has a wide selection of Gold, Silver, Platinum, and Palladium products for redemption."
        />

        <Advantage
          iconSrc="/assets/ga-icon-storage-vault.svg"
          iconAlt="Free Secure Storage"
          iconWidth={67}
          iconHeight={40}
          title="Free Secure Storage"
          description="Choose insured storage when you check out and your products are directly stored in GOLD AVENUE's Swiss vaults."
        />

        <Advantage
          iconSrc="/assets/ga-icon-commission.svg"
          iconAlt="0% Commission on Resale"
          iconWidth={50}
          iconHeight={50}
          title="0% Commission on Resale"
          description="Resell your stored products in one-click. GOLD AVENUE buys them back instantly, at SPOT price, and with 0% commission."
        />
      </div>

      {/* CTA row */}
      <div className="flex flex-wrap items-center justify-center gap-[20px] w-full">
        <p className="text-[24px] font-semibold text-black text-center whitespace-nowrap">
          Ready to redeem at GOLD AVENUE?
        </p>
        <a
          href={GA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0d2f57] text-white text-[18px] font-bold leading-[1.4] tracking-[0.18px] px-[24px] py-[12px] rounded-[8px] whitespace-nowrap hover:opacity-90 transition-opacity"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          Contact Gold Avenue
        </a>
      </div>
    </section>
  );
}
