import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import FaqAccordion from "./FaqAccordion";
import { FAQ_ITEMS } from "./faqData";

// ─── Support offer band ──────────────────────────────────────────────────────

interface SupportRegionProps {
  flagSlot: React.ReactNode;
  regionLabel: string;
  email: string;
  emailHref: string;
  phone: string;
  hours: string;
}

function SupportRegion({
  flagSlot,
  regionLabel,
  email,
  emailHref,
  phone,
  hours,
}: SupportRegionProps) {
  return (
    <div className="flex flex-col items-center gap-[20px] p-[20px] w-[350px]">
      <div className="flex flex-col items-center gap-[10px]">
        <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full">
          {flagSlot}
        </div>
        <p className="text-center text-[20px] leading-normal text-black">
          {regionLabel}
        </p>
      </div>
      <div className="flex flex-col items-center gap-[10px] text-center w-full">
        <a
          href={emailHref}
          className="text-[20px] leading-normal text-[#197eeb] hover:underline"
        >
          {email}
        </a>
        <div className="flex flex-col items-center w-full">
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="text-[20px] leading-normal text-[#197eeb] hover:underline"
          >
            {phone}
          </a>
          <p className="text-[18px] leading-[1.1] tracking-[0.18px] text-black">
            {hours}
          </p>
        </div>
      </div>
    </div>
  );
}

function FlagUS() {
  return (
    <div className="relative size-full overflow-hidden">
      <Image src="/assets/faq-flag-us-bg.svg" alt="" fill aria-hidden className="object-cover" />
      <Image src="/assets/faq-flag-us-stripes.svg" alt="" fill aria-hidden className="object-cover" />
      <Image src="/assets/faq-flag-us-stars.svg" alt="" fill aria-hidden className="object-cover" />
    </div>
  );
}

function FlagDE() {
  return (
    <div className="relative size-full overflow-hidden">
      <Image src="/assets/faq-flag-de-black.svg" alt="" fill aria-hidden className="object-cover" />
      <Image src="/assets/faq-flag-de-red.svg" alt="" fill aria-hidden className="object-cover" />
      <Image src="/assets/faq-flag-de-gold.svg" alt="" fill aria-hidden className="object-cover" />
    </div>
  );
}

function FlagUK() {
  return (
    <div className="relative size-full overflow-hidden">
      <Image src="/assets/faq-flag-uk-1.svg" alt="" fill aria-hidden className="object-cover" />
      <Image src="/assets/faq-flag-uk-2.svg" alt="" fill aria-hidden className="object-cover" />
      <Image src="/assets/faq-flag-uk-3.svg" alt="" fill aria-hidden className="object-cover" />
    </div>
  );
}

function FaqOfferBand() {
  return (
    <section className="flex w-full items-start justify-center gap-[40px] bg-gradient-to-b from-[#e1edff] to-white px-[100px] py-[40px]">
      <SupportRegion
        flagSlot={<FlagUS />}
        regionLabel="US &amp; Worldwide"
        email="support@onegold.com"
        emailHref="mailto:support@onegold.com"
        phone="+1 800 492 9144"
        hours="8AM - 5PM CST"
      />

      {/* Vertical divider */}
      <div className="self-stretch w-px bg-[#d9d9d9] my-[40px]" />

      <SupportRegion
        flagSlot={<FlagDE />}
        regionLabel="DE"
        email="kundenservice@onegold.de"
        emailHref="mailto:kundenservice@onegold.de"
        phone="+49 800 0007934"
        hours="09:00 – 17:30 Uhr (MEZ/MESZ)"
      />

      {/* Vertical divider */}
      <div className="self-stretch w-px bg-[#d9d9d9] my-[40px]" />

      <SupportRegion
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

function FaqIntroduction() {
  return (
    <section className="mx-auto flex w-full max-w-[800px] flex-col gap-[20px] items-center pb-[80px] pt-[40px]">
      <h1 className="w-full text-center text-[48px] font-normal leading-normal text-black">
        OneGold FAQ
      </h1>
      <FaqAccordion items={FAQ_ITEMS} defaultOpen={0} className="w-full" />
    </section>
  );
}

// ─── Stats / Numbers section ─────────────────────────────────────────────────

function FaqNumbers() {
  return (
    <section className="flex w-full flex-col gap-[40px] items-start bg-gradient-to-b from-[#f2f4f8] to-white px-[100px] py-[80px]">
      <h2 className="w-full text-center text-[48px] font-normal leading-normal text-black">
        OneGold by the Numbers
      </h2>
      <div className="mx-auto flex w-full max-w-[1240px] gap-[20px] items-start">
        {/* Ounces */}
        <div className="flex flex-1 flex-col gap-[20px] items-center justify-center px-[20px]">
          <Image
            src="/assets/faq-ounces-icon.svg"
            alt=""
            width={69}
            height={40}
            aria-hidden
            className="h-[40px] w-[69px]"
          />
          <div className="text-center">
            <p className="text-[24px] font-semibold leading-normal text-black">
              4M+ Ounces
            </p>
            <p className="text-[18px] font-normal leading-normal text-black">
              Under Management
            </p>
          </div>
        </div>

        {/* Transactions */}
        <div className="flex flex-1 flex-col gap-[20px] items-center justify-center px-[20px]">
          <Image
            src="/assets/faq-transactions-icon.svg"
            alt=""
            width={43}
            height={40}
            aria-hidden
            className="h-[40px] w-[43px]"
          />
          <div className="text-center">
            <p className="text-[24px] font-semibold leading-normal text-black">
              $1.5B+
            </p>
            <p className="text-[18px] font-normal leading-normal text-black">
              In Transactions
            </p>
          </div>
        </div>

        {/* BBB */}
        <div className="flex flex-1 flex-col gap-[20px] items-center justify-center px-[20px]">
          <Image
            src="/assets/faq-bbb-logo.svg"
            alt="BBB Accredited Business"
            width={106}
            height={37}
            className="h-[37px] w-[106px]"
          />
          <div className="text-center">
            <p className="text-[24px] font-semibold leading-normal text-black">
              A+
            </p>
            <p className="text-[18px] font-normal leading-normal text-black">
              BBB Rating
            </p>
          </div>
        </div>

        {/* Shopper Approved */}
        <div className="flex flex-1 flex-col gap-[20px] items-center justify-center px-[20px]">
          <Image
            src="/assets/faq-shopper-approved.jpg"
            alt="Shopper Approved"
            width={112}
            height={40}
            className="h-[40px] w-[112px] object-contain"
          />
          <div className="text-center">
            <p className="text-[24px] font-semibold leading-normal text-black">
              10K 5 Star
            </p>
            <p className="text-[18px] font-normal leading-normal text-black">
              Reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Bullion International Group section ────────────────────────────────────

function FaqBullion() {
  return (
    <section className="flex w-full flex-col items-center px-[100px] py-[80px] bg-white">
      <div className="flex flex-col gap-[30px] items-center max-w-[800px] w-full">
        {/* BIG logo – composed from two overlapping SVG layers */}
        <div className="relative h-[78px] w-[220px]">
          {/* Gold/orange arrow shape (top, offset right) */}
          <Image
            src="/assets/faq-big-logo-top.svg"
            alt=""
            aria-hidden
            fill
            className="object-contain"
          />
          {/* Silver/grey shape (left) */}
          <Image
            src="/assets/faq-big-logo-left.svg"
            alt=""
            aria-hidden
            width={45}
            height={72}
            className="absolute left-0 top-[1px] h-[72px] w-[45px] object-contain"
          />
        </div>

        <p className="text-center text-[18px] font-normal leading-normal text-black">
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
          className="flex items-center gap-[10px] text-[18px] font-semibold leading-[1.25] text-[#d0a04f] hover:underline"
        >
          <span>Learn More</span>
          <Image
            src="/assets/faq-arrow-right-gold.svg"
            alt=""
            aria-hidden
            width={16}
            height={16}
            className="h-[15.5px] w-[16px]"
          />
        </a>
      </div>
    </section>
  );
}

// ─── Footer bar ──────────────────────────────────────────────────────────────

function FaqFooterBar() {
  return (
    <div className="w-full bg-black">
      <div className="mx-auto flex h-[50px] w-full max-w-[1240px] items-center gap-[10px] px-4 min-[1440px]:px-0">
        <Image
          src="/assets/faq-goldbar-icon.svg"
          alt=""
          aria-hidden
          width={14}
          height={22}
          className="h-[22px] w-[14px] shrink-0"
        />
        <p className="whitespace-nowrap text-[16px] leading-normal text-white">
          A Bullion International Group Company
        </p>
        <p className="flex-1 text-right text-[16px] leading-normal text-white">
          © 2025 OneGold
        </p>
      </div>
    </div>
  );
}

// ─── Desktop composition ─────────────────────────────────────────────────────

export default function FaqDesktop() {
  return (
    <div className="flex w-full flex-col overflow-hidden bg-white">
      <SiteHeader />
      <FaqOfferBand />
      <FaqIntroduction />
      <FaqNumbers />
      <FaqBullion />
      <FaqFooterBar />
    </div>
  );
}
