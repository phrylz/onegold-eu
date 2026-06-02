import Image from "next/image";

const arial = { fontFamily: "Arial, Helvetica, sans-serif" } as const;

function Star({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#197eeb" aria-hidden>
      <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.9l-5.8 3.05 1.1-6.45-4.7-4.6 6.5-.95L12 2.5z" />
    </svg>
  );
}

function Stat({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div className="flex h-[100px] flex-col items-center justify-center">
      <div className="text-[45.2px] font-bold leading-[54px] text-white" style={arial}>
        {value}
      </div>
      <div className="max-w-[160px] text-center text-[20px] leading-[1.2] text-[#c4c4c4]" style={arial}>
        {label}
      </div>
    </div>
  );
}

export default function DesktopHero() {
  return (
    <section
      className="relative h-[750px] w-full overflow-hidden bg-navy"
      data-node-id="5844:6348"
    >
      <Image src="/assets/d-hero-bg.jpg" alt="" fill aria-hidden className="z-0 object-cover" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-col gap-[30px] px-4 pt-20 min-[1440px]:px-0">
        <div className="flex w-full items-center gap-5">
          <Image
            src="/assets/d-hero-phone.png"
            alt="OneGold mobile app"
            width={390}
            height={500}
            priority
            className="h-[500px] w-[390px] shrink-0 object-contain"
          />

          <div className="flex min-w-0 flex-1 flex-col items-start gap-5">
            <Image
              src="/assets/onegold-logo.png"
              alt="OneGold"
              width={175}
              height={38}
              priority
              className="h-[38px] w-[175px]"
            />
            <h1 className="whitespace-nowrap text-[48px] font-normal leading-normal text-white">
              Gold and Silver Simplified
            </h1>
            <p className="w-full text-[24px] font-normal leading-normal text-white">
              OneGold offers direct ownership of gold, silver, and platinum
              stored in secure Swiss vaults. Backed by 70+ years of industry
              expertise, our trusted team delivers a best-in-class experience
              through a modern, easy-to-use mobile app.
            </p>
            <div className="flex w-full items-center justify-end gap-[14px]">
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
          </div>
        </div>

        <div className="flex items-center justify-center gap-[74px]">
          <Stat value={<>€1.5B<span className="text-[#197eeb]">+</span></>} label="In Transactions" />
          <Stat value={<>4M<span className="text-[#197eeb]">+</span></>} label="Ounces Under Management" />
          <Stat value={<>500k<span className="text-[#197eeb]">+</span></>} label="App Downloads" />
          <Stat
            value={
              <span className="flex items-center gap-[5px]">
                <span>4.8<span className="text-[24px]">/5</span></span>
                <Star />
              </span>
            }
            label="Review Score"
          />
        </div>
      </div>

      {/* QR "Get the App" pinned top-right */}
      <a
        href="https://onegold.smart.link/pd8n6enxs"
        className="absolute right-[max(16px,calc((100%-1240px)/2))] top-0 z-20 flex w-[160px] flex-col items-center gap-[15px] rounded-b-[20px] border border-[#197eeb] bg-[#0060d4] py-[10px] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)]"
      >
        <span className="text-center text-[20px] text-white">Get the App</span>
        <Image
          src="/assets/d-hero-qr.png"
          alt="Scan to download the OneGold app"
          width={120}
          height={120}
          className="size-[120px] rounded-[15px]"
        />
      </a>
    </section>
  );
}
