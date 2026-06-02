import Image from "next/image";

export default function DesktopOutro() {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-[#e1edff] px-[100px] py-[120px]" data-node-id="5844:6460">
      <Image src="/assets/d-outro-bg.jpg" alt="" fill aria-hidden className="z-0 object-cover" />
      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] items-center gap-5">
        <div className="flex min-w-0 flex-1 flex-col items-start gap-5 text-black">
          <h2 className="w-[548px] text-[48px] font-normal leading-normal">
            Secure by Nature. Seamless by Design.
          </h2>
          <p className="w-[780px] text-[24px] font-normal leading-normal">
            OneGold offers a secure and modern approach to owning precious
            metals. Use the mobile app to access powerful tools like AutoInvest
            and limit orders, all while your holdings remain insured, audited,
            and stored in Swiss vaults. Get started in minutes.
          </p>
        </div>
        <Image
          src="/assets/d-outro-phone.png"
          alt="OneGold app product detail screen"
          width={359}
          height={460}
          className="h-[460px] w-[359px] shrink-0 object-contain"
        />
      </div>
    </section>
  );
}
