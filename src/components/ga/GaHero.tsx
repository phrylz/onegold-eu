import Image from "next/image";

export default function GaHero() {
  return (
    <section className="flex w-full flex-col items-center gap-[60px] px-[100px] py-[60px]">
      {/* Headline: "Redeem at [GA logo]" */}
      <div className="flex flex-wrap items-center justify-center gap-[20px]">
        <h1 className="text-[48px] font-normal leading-normal text-black whitespace-nowrap">
          Redeem at
        </h1>
        <div className="relative h-[65px] w-[373px] shrink-0">
          <Image
            src="/assets/ga-logo.svg"
            alt="Gold Avenue"
            width={373}
            height={65}
            className="h-[65px] w-[373px] object-contain"
            priority
          />
        </div>
      </div>

      {/* Body text */}
      <p className="max-w-[800px] text-center text-[24px] font-normal leading-normal text-black">
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
