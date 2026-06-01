import Image from "next/image";

export default function About() {
  return (
    <section
      className="flex w-full flex-col items-start justify-center gap-10 bg-[#f2f4f8] px-[15px] py-10"
      data-node-id="5844:7258"
    >
      <div className="flex w-full flex-col items-center gap-[10px]">
        <h2 className="w-full text-center text-[36px] font-normal leading-normal text-black">
          About <span className="text-[#197eeb]">OneGold</span>
        </h2>
        <div className="flex items-center gap-[10px]">
          <Image
            src="/assets/goldbar-icon.svg"
            alt=""
            width={14}
            height={22}
            className="h-[22px] w-[14px]"
          />
          <p className="whitespace-nowrap text-[16px] leading-normal text-black">
            A Bullion International Group Company
          </p>
        </div>
      </div>
      <div className="w-full text-center text-[16px] leading-normal text-black">
        <p className="mb-5">
          OneGold was launched by trusted industry leaders from APMEX and Sprott
          with the goal of providing more cost-effective, intuitive, and secure
          means of investing in precious metals.
        </p>
        <p>
          When compared to Goldmoney and other vaulted gold providers, OneGold
          offers an easier, more modern user interface, lower storage fees, and
          an array of features that are not available anywhere else.
        </p>
      </div>
    </section>
  );
}
