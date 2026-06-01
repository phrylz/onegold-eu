import Image from "next/image";

const NAV = [
  { label: "Contact Us", href: "/support" },
  { label: "FAQ", href: "/faq" },
  { label: "Redeem with Gold Avenue", href: "/gold-avenue" },
];
const LEGAL = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "User Agreement", href: "/legal" },
  { label: "Impressum", href: "#" },
];

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-10 bg-[#f2f4f8] px-[15px] pt-10" data-node-id="5844:7267">
      <div className="flex w-full flex-col items-center gap-5">
        <Image
          src="/assets/onegold-logo-blue.png"
          alt="OneGold"
          width={163}
          height={35}
          className="h-[35px] w-[163px]"
        />

        <nav className="w-[197px] text-center text-[16px] leading-normal text-[#52668e]">
          {NAV.map((item) => (
            <a key={item.label} href={item.href} className="block hover:underline">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex w-full flex-col items-center gap-5">
          {/* App store badges (single composite export from Figma) */}
          <a href="https://onegold.smart.link/pd8n6enxs" className="w-full">
            <Image
              src="/assets/app-badges.png"
              alt="Download on the App Store · Get it on Google Play"
              width={360}
              height={50}
              className="h-[50px] w-full"
            />
          </a>

          {/* Trust seals */}
          <div className="flex h-[60px] items-center gap-[25px]">
            <Image
              src="/assets/digicert.png"
              alt="DigiCert Secured"
              width={112}
              height={47}
              className="h-[47px] w-[112px] object-contain"
            />
            <Image
              src="/assets/bbb-seal.png"
              alt="BBB Accredited Business — Rating A+"
              width={69}
              height={45}
              className="h-[45px] w-[69px] object-contain"
            />
          </div>
        </div>

        <div className="flex w-full items-start justify-end gap-5 text-[16px] leading-normal text-[#52668e]">
          {LEGAL.map((item) => (
            <a key={item.label} href={item.href} className="whitespace-nowrap hover:underline">
              {item.label}
            </a>
          ))}
        </div>

        <p className="w-[360px] text-[11px] leading-normal text-[#52668e]">
          <span className="font-bold">Discount code terms and conditions:</span>
          <br />
          Gold at spot price with code GOLD20. Offer valid on Swiss Gold only.
          Limited to one purchase per customer and for a maximum discount value
          of 10,000 USD/GBP/EUR inclusive. Enter code GOLD20 at checkout.
        </p>
      </div>

      {/* Bottom black bar — full bleed */}
      <div className="-mx-[15px] flex h-[86px] w-[390px] flex-col justify-center gap-[10px] bg-black pl-[30px]">
        <div className="flex items-center gap-[10px]">
          <Image
            src="/assets/goldbar-icon.svg"
            alt=""
            width={14}
            height={22}
            className="h-[22px] w-[14px]"
          />
          <p className="whitespace-nowrap text-[16px] leading-normal text-white">
            A Bullion International Group Company
          </p>
        </div>
        <p className="text-[16px] leading-normal text-white">© 2025 OneGold</p>
      </div>
    </footer>
  );
}
