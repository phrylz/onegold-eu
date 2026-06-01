import Image from "next/image";

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

function Divider() {
  return (
    <div className="hidden w-px self-stretch bg-[#d1d5db] min-[1024px]:block" />
  );
}

function ContactCard({ region }: { region: ContactRegion }) {
  return (
    <div className="flex w-full flex-col items-center gap-[20px] p-[20px] min-[1024px]:w-[350px]">
      {/* Flag + Region name */}
      <div className="flex flex-col items-center gap-[10px]">
        <Image
          src={region.flag}
          alt={region.flagAlt}
          width={100}
          height={60}
          className="h-[65px] w-[100px] object-contain"
        />
        <p className="w-[224px] text-center text-[20px] leading-normal text-black">
          {region.region}
        </p>
      </div>

      {/* Contact details */}
      <div className="flex flex-col items-center gap-[10px] text-center">
        <a
          href={`mailto:${region.email}`}
          className="text-[20px] leading-normal text-[#197eeb] hover:underline whitespace-nowrap"
        >
          {region.email}
        </a>
        <div className="flex flex-col items-center">
          <a
            href={`tel:${region.phone.replace(/\s/g, "")}`}
            className="text-[20px] leading-normal text-[#197eeb] hover:underline whitespace-nowrap"
          >
            {region.phone}
          </a>
          <p className="text-[18px] leading-[1.1] tracking-[0.18px] text-black">
            {region.hours}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SupportContacts() {
  return (
    <section className="w-full bg-gradient-to-b from-[#e1edff] to-white">
      {/* Desktop: horizontal with dividers; Mobile: stacked */}
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center py-[40px] min-[1024px]:flex-row min-[1024px]:items-stretch min-[1024px]:justify-center min-[1024px]:px-[100px]">
        <ContactCard region={REGIONS[0]} />
        <Divider />
        <ContactCard region={REGIONS[1]} />
        <Divider />
        <ContactCard region={REGIONS[2]} />
      </div>
    </section>
  );
}
