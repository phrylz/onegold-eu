import Image from "next/image";

export default function DesktopCta() {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-[#e1edff] py-10" data-node-id="5844:6768">
      <Image src="/assets/d-cta-bg.jpg" alt="" fill aria-hidden className="z-0 object-cover" />
      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] items-center justify-end gap-10 px-4 min-[1440px]:px-0">
        <h2 className="text-right text-[48px] leading-[1.1] text-white">
          Get Started with the <span className="font-bold">OneGold</span> App
        </h2>
        <a href="https://onegold.smart.link/pd8n6enxs" className="shrink-0 rounded-[20px] border-[1.5px] border-[#fbcc73]">
          <Image
            src="/assets/d-cta-qr.png"
            alt="Scan to download the OneGold app"
            width={135}
            height={135}
            className="size-[135px] rounded-[20px] object-cover"
          />
        </a>
      </div>
    </section>
  );
}
