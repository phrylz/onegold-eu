import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import FaqAccordion from "./FaqAccordion";
import { FAQ_ITEMS } from "./faqData";

// ─── Support region (mobile stacked) ─────────────────────────────────────────

interface SupportRegionMobileProps {
  flagSlot: React.ReactNode;
  regionLabel: string;
  email: string;
  emailHref: string;
  phone: string;
  hours: string;
}

function SupportRegionMobile({
  flagSlot,
  regionLabel,
  email,
  emailHref,
  phone,
  hours,
}: SupportRegionMobileProps) {
  return (
    <div className="flex flex-col items-center gap-[14px] py-[20px] w-full">
      <div className="relative h-[70px] w-[70px] overflow-hidden rounded-full">
        {flagSlot}
      </div>
      <p className="text-center text-[18px] leading-normal text-black">
        {regionLabel}
      </p>
      <div className="flex flex-col items-center gap-[6px] text-center">
        <a
          href={emailHref}
          className="text-[16px] leading-normal text-[#197eeb] hover:underline"
        >
          {email}
        </a>
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="text-[16px] leading-normal text-[#197eeb] hover:underline"
        >
          {phone}
        </a>
        <p className="text-[14px] leading-[1.2] tracking-[0.14px] text-black">
          {hours}
        </p>
      </div>
    </div>
  );
}

function FlagUS() {
  return <Image src="/assets/support-flag-us.svg" alt="US flag" fill aria-hidden className="object-cover" />;
}

function FlagDE() {
  return <Image src="/assets/support-flag-de.svg" alt="German flag" fill aria-hidden className="object-cover" />;
}

function FlagUK() {
  return <Image src="/assets/support-flag-uk.svg" alt="UK flag" fill aria-hidden className="object-cover" />;
}

function FaqMobileOfferBand() {
  return (
    <section className="flex w-full flex-col items-center bg-gradient-to-b from-[#e1edff] to-white px-[20px]">
      <SupportRegionMobile
        flagSlot={<FlagUS />}
        regionLabel="US &amp; Worldwide"
        email="support@onegold.com"
        emailHref="mailto:support@onegold.com"
        phone="+1 800 492 9144"
        hours="8AM - 5PM CST"
      />
      <div className="w-full h-px bg-[#d9d9d9]" />
      <SupportRegionMobile
        flagSlot={<FlagDE />}
        regionLabel="DE"
        email="kundenservice@onegold.de"
        emailHref="mailto:kundenservice@onegold.de"
        phone="+49 800 0007934"
        hours="09:00 – 17:30 Uhr (MEZ/MESZ)"
      />
      <div className="w-full h-px bg-[#d9d9d9]" />
      <SupportRegionMobile
        flagSlot={<FlagUK />}
        regionLabel="UK"
        email="support@onegold.uk"
        emailHref="mailto:support@onegold.uk"
        phone="+44 22 518 4050"
        hours="08:00 - 17:00"
      />
    </section>
  );
}

// ─── FAQ accordion section ───────────────────────────────────────────────────

function FaqMobileIntroduction() {
  return (
    <section className="flex w-full flex-col gap-[20px] items-center px-[20px] pb-[50px] pt-[30px]">
      <h1 className="w-full text-center text-[32px] font-normal leading-normal text-black">
        OneGold FAQ
      </h1>
      <FaqAccordion items={FAQ_ITEMS} defaultOpen={0} className="w-full" />
    </section>
  );
}

// ─── Stats section ───────────────────────────────────────────────────────────

function FaqMobileNumbers() {
  return (
    <section className="flex w-full flex-col gap-[30px] items-center bg-gradient-to-b from-[#f2f4f8] to-white px-[20px] py-[50px]">
      <h2 className="w-full text-center text-[32px] font-normal leading-normal text-black">
        OneGold by the Numbers
      </h2>
      <div className="grid w-full grid-cols-2 gap-[30px]">
        <div className="flex flex-col gap-[12px] items-center justify-center">
          <Image
            src="/assets/faq-ounces-icon.svg"
            alt=""
            width={55}
            height={32}
            aria-hidden
            className="h-[32px] w-[55px]"
          />
          <div className="text-center">
            <p className="text-[20px] font-semibold leading-normal text-black">
              4M+ Ounces
            </p>
            <p className="text-[14px] font-normal leading-normal text-black">
              Under Management
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[12px] items-center justify-center">
          <Image
            src="/assets/faq-transactions-icon.svg"
            alt=""
            width={34}
            height={32}
            aria-hidden
            className="h-[32px] w-[34px]"
          />
          <div className="text-center">
            <p className="text-[20px] font-semibold leading-normal text-black">
              $1.5B+
            </p>
            <p className="text-[14px] font-normal leading-normal text-black">
              In Transactions
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[12px] items-center justify-center">
          <Image
            src="/assets/faq-bbb-logo.svg"
            alt="BBB Accredited Business"
            width={80}
            height={28}
            className="h-[28px] w-[80px]"
          />
          <div className="text-center">
            <p className="text-[20px] font-semibold leading-normal text-black">
              A+
            </p>
            <p className="text-[14px] font-normal leading-normal text-black">
              BBB Rating
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[12px] items-center justify-center">
          <Image
            src="/assets/faq-shopper-approved.jpg"
            alt="Shopper Approved"
            width={90}
            height={32}
            className="h-[32px] w-[90px] object-contain"
          />
          <div className="text-center">
            <p className="text-[20px] font-semibold leading-normal text-black">
              10K 5 Star
            </p>
            <p className="text-[14px] font-normal leading-normal text-black">
              Reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Bullion section ─────────────────────────────────────────────────────────

function FaqMobileBullion() {
  return (
    <section className="flex w-full flex-col items-center px-[20px] py-[50px] bg-white gap-[24px]">
      <Image
        src="/assets/bullion-logo.png"
        alt="Bullion International Group"
        width={175}
        height={62}
        className="h-[62px] w-[175px] object-contain"
      />

      <p className="text-center text-[16px] font-normal leading-normal text-black">
        Bullion International Group is a global leader in precious metals,
        bringing together industry-leading brands, advanced technology, and
        decades of expertise. As the parent company of APMEX, OneGold, MTB,
        GOLD AVENUE, and more, we provide integrated solutions across minting,
        vaulting, wholesale, gold backed fintech and retail markets. We empower
        investors, collectors, and institutions worldwide by focusing on
        innovation and accessibility.
      </p>

      <a
        href="https://www.bullioninternationalgroup.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-[8px] text-[16px] font-semibold leading-[1.25] text-[#d0a04f] hover:underline"
      >
        <span>Learn More</span>
        <Image
          src="/assets/faq-arrow-right-gold.svg"
          alt=""
          aria-hidden
          width={14}
          height={14}
          className="h-[14px] w-[14px]"
        />
      </a>
    </section>
  );
}

// ─── Footer bar ──────────────────────────────────────────────────────────────

function FaqMobileFooterBar() {
  return (
    <div className="flex w-full flex-col gap-[6px] bg-black px-[20px] py-[16px]">
      <div className="flex items-center gap-[8px]">
        <Image
          src="/assets/faq-goldbar-icon.svg"
          alt=""
          aria-hidden
          width={14}
          height={22}
          className="h-[22px] w-[14px] shrink-0"
        />
        <p className="text-[14px] leading-normal text-white">
          A Bullion International Group Company
        </p>
      </div>
      <p className="text-[14px] leading-normal text-white">
        © 2025 OneGold
      </p>
    </div>
  );
}

// ─── Mobile composition ──────────────────────────────────────────────────────

export default function FaqMobile() {
  return (
    <div className="mx-auto flex w-full max-w-[480px] flex-col overflow-hidden bg-white">
      <SiteHeader />
      <FaqMobileOfferBand />
      <FaqMobileIntroduction />
      <FaqMobileNumbers />
      <FaqMobileBullion />
      <FaqMobileFooterBar />
    </div>
  );
}
