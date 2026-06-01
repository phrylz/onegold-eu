import Image from "next/image";

export default function DesktopAbout() {
  return (
    <section className="flex w-full flex-col items-start justify-center gap-10 bg-gradient-to-b from-[#0060d4] to-[#197eeb] px-[100px] py-20" data-node-id="5844:6772">
      <div className="flex w-full items-center justify-between">
        <h2 className="whitespace-nowrap text-[48px] font-normal leading-normal text-white">
          About OneGold
        </h2>
        <div className="flex items-center gap-[10px]">
          <Image src="/assets/goldbar-icon.svg" alt="" width={25} height={40} className="h-[40px] w-[25px]" />
          <p className="whitespace-nowrap text-[20px] leading-normal text-white">
            A Bullion International Group Company
          </p>
        </div>
      </div>
      <p className="w-full text-[18px] leading-normal text-white">
        OneGold is part of the Bullion International Group, a global leader in
        precious metals owned by Switzerland&rsquo;s MKS PAMP. The Group brings
        together industry-leading brands, advanced technology, and decades of
        expertise. As the parent company of APMEX, OneGold, MTB, and Gold
        Avenue, Bullion International Group provides the strength and heritage of
        Swiss excellence&mdash;reinforcing OneGold&rsquo;s commitment to secure,
        transparent, and innovative metals ownership.
      </p>
    </section>
  );
}
