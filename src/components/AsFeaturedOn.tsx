import Image from "next/image";

export default function AsFeaturedOn() {
  return (
    <section
      className="flex w-full flex-col items-center justify-center gap-[10px] bg-navy px-[10px] py-5"
      data-node-id="5844:6917"
    >
      <p className="text-[16px] font-semibold uppercase leading-normal text-white">
        As featured on
      </p>
      <div className="flex w-full items-center justify-center gap-5">
        <Image
          src="/assets/feat-investing.png"
          alt="Investing.com"
          width={100}
          height={20}
          className="h-[20px] w-[100px] object-contain"
        />
        <Image
          src="/assets/feat-ibt.svg"
          alt="International Business Times"
          width={100}
          height={21}
          className="h-[21px] w-[100px] object-contain"
        />
        <Image
          src="/assets/feat-nasdaq.png"
          alt="Nasdaq"
          width={100}
          height={28}
          className="h-[28px] w-[100px] object-contain"
        />
      </div>
    </section>
  );
}
