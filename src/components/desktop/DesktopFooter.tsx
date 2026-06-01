import Image from "next/image";

const NAV = [
  { label: "Contact Us", href: "/support" },
  { label: "FAQ", href: "/faq" },
  { label: "Redeem with Gold Avenue", href: "/gold-avenue" },
];

export default function DesktopFooter() {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-10 bg-[#f2f4f8] px-[100px] pt-[100px]" data-node-id="5844:6781">
      {/* Top row */}
      <div className="flex w-full items-center justify-between">
        <Image src="/assets/onegold-logo-blue.png" alt="OneGold" width={163} height={35} className="h-[35px] w-[163px]" />
        <div className="flex w-[705px] items-center justify-end gap-[70px]">
          <div className="flex h-[60px] items-center gap-[25px]">
            <Image src="/assets/digicert.png" alt="DigiCert Secured" width={112} height={47} className="h-[47px] w-[112px] object-contain" />
            <Image src="/assets/bbb-seal.png" alt="BBB Accredited Business — Rating A+" width={69} height={45} className="h-[45px] w-[69px] object-contain" />
          </div>
          <a href="https://onegold.smart.link/pd8n6enxs" className="h-[50px]">
            <Image src="/assets/app-badges.png" alt="Download on the App Store · Get it on Google Play" width={357} height={50} className="h-[50px] w-[357px]" />
          </a>
        </div>
      </div>

      {/* Nav */}
      <nav className="w-full">
        <div className="w-[197px] text-[16px] leading-normal text-[#52668e]">
          {NAV.map((item) => (
            <a key={item.label} href={item.href} className="block hover:underline">
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Bottom black bar — full bleed */}
      <div className="-mx-[100px] flex h-[50px] w-[calc(100%+200px)] items-center gap-[10px] bg-black px-[100px]">
        <Image src="/assets/goldbar-icon.svg" alt="" width={14} height={22} className="h-[22px] w-[14px]" />
        <p className="whitespace-nowrap text-[16px] leading-normal text-white">
          A Bullion International Group Company
        </p>
        <p className="flex-1 text-right text-[16px] leading-normal text-white">
          © 2025 OneGold
        </p>
      </div>
    </footer>
  );
}
