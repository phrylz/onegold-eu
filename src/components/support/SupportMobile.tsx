import Image from "next/image";
import Footer from "@/components/Footer";
import CountrySelector from "@/components/CountrySelector";

type ContactRegion = {
  flag: string;
  flagAlt: string;
  region: string;
  email: string;
  phone: string;
  hours: string;
};

const REGIONS: ContactRegion[] = [
  {
    flag: "/assets/support-flag-us.svg",
    flagAlt: "US flag",
    region: "US & Worldwide",
    email: "support@onegold.com",
    phone: "+1 800 492 9144",
    hours: "8AM - 5PM CST",
  },
  {
    flag: "/assets/support-flag-de.svg",
    flagAlt: "German flag",
    region: "DE",
    email: "kundenservice@onegold.de",
    phone: "+49 800 0007934",
    hours: "09:00 – 17:30 Uhr (MEZ/MESZ)",
  },
  {
    flag: "/assets/support-flag-uk.svg",
    flagAlt: "UK flag",
    region: "UK",
    email: "support@onegold.uk",
    phone: "+44 22 518 4050",
    hours: "08:00 - 17:00",
  },
];

function MobileContactCard({ region }: { region: ContactRegion }) {
  return (
    <div className="flex flex-col items-center gap-4 border-b border-[#e5e7eb] px-6 py-8 last:border-b-0">
      <Image
        src={region.flag}
        alt={region.flagAlt}
        width={80}
        height={50}
        className="h-[50px] w-[80px] object-contain"
      />
      <p className="text-center text-[20px] leading-normal font-semibold text-black">
        {region.region}
      </p>
      <div className="flex flex-col items-center gap-2 text-center">
        <a
          href={`mailto:${region.email}`}
          className="text-[16px] leading-normal text-[#197eeb] hover:underline"
        >
          {region.email}
        </a>
        <a
          href={`tel:${region.phone.replace(/\s/g, "")}`}
          className="text-[18px] font-semibold leading-normal text-[#197eeb] hover:underline"
        >
          {region.phone}
        </a>
        <p className="text-[14px] leading-normal text-[#6b7785]">{region.hours}</p>
      </div>
    </div>
  );
}

export default function SupportMobile() {
  return (
    <div className="mx-auto flex w-full max-w-[480px] flex-col overflow-hidden bg-white">
      {/* Mobile header */}
      <header className="flex h-[60px] w-full items-center justify-between bg-white px-4 shadow-sm">
        <Image
          src="/assets/onegold-logo-blue.png"
          alt="OneGold"
          width={120}
          height={26}
          className="h-[26px] w-auto"
        />
        <div className="flex items-center gap-3">
          <CountrySelector tone="dark" />
          <button
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center"
          >
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden>
              <rect width="22" height="2" rx="1" fill="#197eeb"/>
              <rect y="7" width="22" height="2" rx="1" fill="#197eeb"/>
              <rect y="14" width="22" height="2" rx="1" fill="#197eeb"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Introduction */}
      <div className="flex flex-col items-center gap-4 bg-gradient-to-b from-[#e1edff] to-white px-6 py-10 text-center">
        <h1 className="text-[28px] font-normal leading-tight text-black">
          OneGold Customer Support
        </h1>
        <p className="text-[16px] leading-normal text-black">
          Contact us by phone or email for questions about your account, an order, or using our app.
        </p>
      </div>

      {/* Contact cards */}
      <div className="flex flex-col divide-y divide-[#e5e7eb] bg-white">
        {REGIONS.map((r) => (
          <MobileContactCard key={r.region} region={r} />
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
