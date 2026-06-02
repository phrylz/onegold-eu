import Image from "next/image";

type Benefit = { title: string; desc: string };
type Box = { name: string; icon: string; w: number; h: number; benefits: Benefit[] };

const BOXES: Box[] = [
  {
    name: "Simplicity",
    icon: "/assets/icon-simplicity.svg",
    w: 53,
    h: 50,
    benefits: [
      { title: "Start in Minutes", desc: "Create an account or download the mobile app with a few clicks" },
      { title: "Trade 24/7", desc: "Buy and sell even when markets are closed" },
      { title: "Get Live Support", desc: "Call, email, or chat 5 days a week" },
    ],
  },
  {
    name: "Value",
    icon: "/assets/icon-value.svg",
    w: 50,
    h: 50,
    benefits: [
      { title: "High Liquidity", desc: "Sell metal and withdraw cash seamlessly" },
      { title: "Low Premiums", desc: "Industry low prices and regular “at spot” promotions" },
      { title: "No VAT", desc: "No VAT on vaulted metal" },
    ],
  },
  {
    name: "Trust",
    icon: "/assets/icon-trust.svg",
    w: 60,
    h: 50,
    benefits: [
      { title: "Physically Secured Vaults", desc: "Store metal with trusted industry leaders" },
      { title: "Fully Insured", desc: "Metals are insured through the Lloyd’s of London" },
      { title: "Fully Audited", desc: "Regular third-party audits" },
      { title: "Backed by Industry Leaders", desc: "OneGold is a part of the Bullion International Group" },
    ],
  },
];

export default function DesktopFeatures() {
  return (
    <section className="flex w-full flex-col items-center gap-10 bg-white pb-[50px] pt-[100px]" data-node-id="5844:6630">
      <h2 className="whitespace-nowrap text-[48px] font-normal leading-normal text-black">
        <span className="text-[#197eeb]">OneGold</span>{" "}
        Meets the Demands of Today&rsquo;s Investor
      </h2>
      <div className="mx-auto flex w-full max-w-[1240px] flex-wrap items-stretch justify-center gap-10 px-4 min-[1440px]:px-0">
        {BOXES.map((box) => (
          <article
            key={box.name}
            className="flex h-[595px] w-[386px] max-w-full flex-1 basis-[340px] flex-col items-center gap-[30px] rounded-[20px] border border-[#aaa] bg-white px-[30px] py-10"
          >
            <div className="flex flex-col items-center justify-center">
              <Image src={box.icon} alt="" width={box.w} height={box.h} className="h-[50px]" style={{ width: box.w }} />
              <h3 className="text-center text-[36px] font-semibold leading-normal text-black">
                {box.name}
              </h3>
            </div>
            <span className="h-px w-[315px] bg-[#d9d9d9]" />
            <div className="flex w-full flex-col gap-5">
              {box.benefits.map((b) => (
                <div key={b.title}>
                  <p className="text-[24px] font-semibold leading-[1.2] text-[#197eeb]">{b.title}</p>
                  <p className="text-[18px] leading-[1.2] text-[#666]">{b.desc}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
