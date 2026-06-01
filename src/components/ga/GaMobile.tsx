import GaHeader from "@/components/ga/GaHeader";
import GaProducts from "@/components/ga/GaProducts";
import GaHowItWorks from "@/components/ga/GaHowItWorks";
import GaAdvantages from "@/components/ga/GaAdvantages";
import GaBullion from "@/components/ga/GaBullion";

export default function GaMobile() {
  return (
    <div className="mx-auto flex w-full max-w-[480px] flex-col overflow-hidden bg-white">
      <GaHeader />
      <GaMobileHero />
      <GaProducts />
      <GaHowItWorks />
      <GaAdvantages />
      <GaBullion />
    </div>
  );
}

// Mobile-specific hero: stacked, reduced padding, smaller text
function GaMobileHero() {
  return (
    <section className="flex w-full flex-col items-center gap-[32px] px-4 py-[40px]">
      {/* "Redeem at" headline */}
      <div className="flex flex-col items-center gap-[12px] w-full">
        <h1 className="text-[36px] font-normal leading-normal text-black text-center">
          Redeem at
        </h1>
        {/* Gold Avenue logo — scaled for mobile */}
        <div className="relative h-[45px] w-full max-w-[280px]">
          <img
            src="/assets/ga-logo.svg"
            alt="Gold Avenue"
            className="h-[45px] w-full object-contain"
          />
        </div>
      </div>

      {/* Body text */}
      <p className="text-center text-[16px] font-normal leading-[1.6] text-black">
        GOLD AVENUE and OneGold are{" "}
        <strong className="font-semibold">Bullion International Group</strong>{" "}
        companies and this relationship allows OneGold members in Europe to
        redeem their vaulted metal through GOLD AVENUE. This means you can now{" "}
        <strong className="font-semibold">
          redeem for physical products sold and shipped in Europe
        </strong>
        .
      </p>
    </section>
  );
}
