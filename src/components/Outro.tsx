import Image from "next/image";

export default function Outro() {
  return (
    <section
      className="relative flex w-full flex-col items-center gap-10 overflow-hidden bg-[#e1edff] px-[15px] pb-[30px] pt-[75px]"
      data-node-id="5844:6949"
    >
      <Image
        src="/assets/outro-bg.jpg"
        alt=""
        fill
        aria-hidden
        className="z-0 object-cover"
      />

      <Image
        src="/assets/outro-phone.png"
        alt="OneGold app product detail screen"
        width={312}
        height={400}
        className="relative z-10 h-[400px] w-[312px] object-contain"
      />

      <h2 className="relative z-10 w-full text-center text-[36px] font-normal leading-normal text-black">
        Secure by Nature. Seamless by Design.
      </h2>
      <p className="relative z-10 w-full text-center text-[20px] leading-normal text-black">
        OneGold offers a secure and modern approach to owning precious metals.
        Use the mobile app to access powerful tools like AutoInvest and limit
        orders, all while your holdings remain insured, audited, and stored in
        Swiss vaults. Get started in minutes.
      </p>
    </section>
  );
}
