import Image from "next/image";

export default function DesktopAsFeatured() {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-[#071f39] py-[25px]" data-node-id="5844:6428">
      <div className="flex w-[960px] items-center justify-center gap-[60px]">
        <p className="text-[16px] font-semibold uppercase leading-normal text-white whitespace-nowrap">
          As featured on
        </p>
        <Image src="/assets/feat-investing.png" alt="Investing.com" width={118} height={24} className="h-[24px] w-[118px] object-contain" />
        <Image src="/assets/feat-ibt.svg" alt="International Business Times" width={113} height={24} className="h-[24px] w-[113px] object-contain" />
        <Image src="/assets/feat-nasdaq.png" alt="Nasdaq" width={84} height={24} className="h-[24px] w-[84px] object-contain" />
      </div>
    </section>
  );
}
