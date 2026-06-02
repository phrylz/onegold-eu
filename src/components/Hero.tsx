import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative flex w-full flex-col items-center justify-center gap-10 overflow-hidden bg-navy px-[15px] py-[50px]"
      data-node-id="5844:6849"
    >
      {/* Background texture over navy base */}
      <Image
        src="/assets/hero-bg.png"
        alt=""
        fill
        priority
        aria-hidden
        className="z-0 object-cover"
      />

      {/* Hero content */}
      <div className="relative z-10 flex w-full flex-col items-center gap-[25px]">
        <h1 className="w-full text-center text-[36px] font-normal leading-normal text-white">
          Gold and Silver Simplified
        </h1>

        <div className="w-full text-center text-[20px] leading-normal">
          <p className="text-cyan">Buy Switzerland Gold at Spot</p>
          <p className="text-cyan">
            with the Promo Code <span className="font-bold">GOLD20</span>
          </p>
          <p className="mt-5 text-white">
            OneGold offers direct ownership of gold, silver, and platinum stored
            in secure Swiss vaults. Backed by 70+ years of industry expertise,
            our trusted team delivers a best-in-class experience through a
            modern, easy-to-use mobile app.
          </p>
        </div>
      </div>

      {/* App phone mockup */}
      <Image
        src="/assets/hero-phone.png"
        alt="OneGold mobile app showing a precious metals portfolio"
        width={312}
        height={400}
        priority
        className="relative z-10 h-[400px] w-[312px] object-contain"
      />

      {/* Endorsers */}
      <div className="relative z-10 flex w-full items-center justify-center gap-[14px]">
        <Image
          src="/assets/bullion-logo.png"
          alt="Bullion International Group"
          width={112}
          height={40}
          className="h-[40px] w-auto"
        />
        <span aria-hidden className="h-[52px] w-px bg-white/30" />
        <Image
          src="/assets/endorse-right.svg"
          alt="Gold Avenue · APMEX"
          width={82}
          height={31}
          className="h-[31px] w-auto"
        />
      </div>
    </section>
  );
}
