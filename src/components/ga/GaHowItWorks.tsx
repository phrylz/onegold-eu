import Image from "next/image";

const GA_URL = "https://www.goldavenue.com/";

interface StepProps {
  iconSrc: string;
  iconAlt: string;
  iconWidth: number;
  iconHeight: number;
  children: React.ReactNode;
}

function Step({ iconSrc, iconAlt, iconWidth, iconHeight, children }: StepProps) {
  return (
    <div className="flex flex-1 flex-col items-center gap-[20px] p-[20px] min-w-[200px]">
      <div className="flex items-center justify-center h-[55px]">
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={iconWidth}
          height={iconHeight}
          className="object-contain"
        />
      </div>
      <div className="text-[24px] font-semibold text-black text-center leading-[1.1] tracking-[0.24px]">
        {children}
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="hidden min-[1024px]:block self-stretch w-px bg-[#c9c9c8] shrink-0 mx-[10px]" />
  );
}

export default function GaHowItWorks() {
  return (
    <section className="flex w-full flex-col items-center gap-[40px] bg-[#ebf7ff] px-[100px] py-[60px] max-[1023px]:px-4">
      <h2 className="text-[36px] font-normal leading-normal text-black text-center">
        Here&rsquo;s How It Works
      </h2>

      <div className="flex flex-col min-[1024px]:flex-row items-stretch justify-center w-full max-w-[1240px] gap-[20px] min-[1024px]:gap-0">
        <Step
          iconSrc="/assets/ga-icon-sell.svg"
          iconAlt="Sell"
          iconWidth={76}
          iconHeight={55}
        >
          <span className="font-bold text-[#0d2f57]">Sell your vaulted gold</span>
          {" "}on OneGold. Your money automatically goes to your cash balance.
        </Step>

        <Divider />

        <Step
          iconSrc="/assets/ga-icon-account.svg"
          iconAlt="Account"
          iconWidth={51}
          iconHeight={55}
        >
          If you don&rsquo;t have one,{" "}
          <span className="font-bold text-[#0d2f57]">create a free account</span>
          {" "}on{" "}
          <span className="font-semibold">GOLD AVENUE</span>
          {" "}and browse their product selection.
        </Step>

        <Divider />

        <Step
          iconSrc="/assets/ga-icon-contact.svg"
          iconAlt="Contact"
          iconWidth={49}
          iconHeight={55}
        >
          <span className="font-bold text-[#0d2f57]">Contact GOLD AVENUE{" "}</span>
          <span className="font-semibold text-[#0d2f57]">directly</span>
          {" "}to place your redemption order.
        </Step>
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
