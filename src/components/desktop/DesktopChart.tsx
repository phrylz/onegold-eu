import Image from "next/image";

function CheckCircle() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9.2" stroke="white" strokeWidth="1.6" />
      <path d="M8 12.2l2.7 2.7L16 9.4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" stroke="#879AB7" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12.5l4.5 4.5L19 7" stroke="#879AB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type Cell = React.ReactNode;
const ROWS: { title: string; og: Cell; eft: Cell; phys: Cell }[] = [
  { title: "Direct Ownership", og: <CheckCircle />, eft: <CloseIcon />, phys: <CheckIcon /> },
  { title: "24/7 Trading", og: <CheckCircle />, eft: <CloseIcon />, phys: <CloseIcon /> },
  { title: "Ease of Use", og: "Immediate Funding", eft: "Pre-fund and wait", phys: "Search, Purchase, Wait for Delivery" },
  { title: "Fees", og: "Only 0.12% - 0.30% Storage", eft: "0.40%", phys: "Shipping Costs" },
  { title: "Insurance & 3rd Party Audits", og: <CheckCircle />, eft: <CloseIcon />, phys: <CloseIcon /> },
];

function OgCell({ children, rounded }: { children: Cell; rounded?: "top" | "bottom" }) {
  return (
    <div
      className={`flex h-[80px] flex-1 items-center justify-center border-x-2 border-[#82beff] bg-[#197eeb] ${
        rounded === "top" ? "rounded-t-[20px] border-t-2" : ""
      } ${rounded === "bottom" ? "rounded-b-[20px] border-b-2" : ""}`}
    >
      {typeof children === "string" ? (
        <p className="text-center text-[18px] font-bold leading-normal text-white">{children}</p>
      ) : (
        children
      )}
    </div>
  );
}
function PhysCell({ children, topBorder }: { children: Cell; topBorder?: boolean }) {
  return (
    <div className={`flex h-[80px] flex-1 items-center justify-center ${topBorder ? "border-t border-[#dbe5f1]" : ""}`}>
      {typeof children === "string" ? (
        <p className="w-[150px] text-center text-[18px] leading-normal text-[#666]">{children}</p>
      ) : (
        children
      )}
    </div>
  );
}

export default function DesktopChart() {
  return (
    <section className="flex w-full flex-col items-center gap-10 bg-white px-[100px] pb-[100px] pt-[50px]" data-node-id="5844:6690">
      <h2 className="w-full text-center text-[48px] font-normal leading-normal text-black">
        The Advantages Owning <span className="text-[#197eeb]">OneGold</span> Vaulted Metals
      </h2>
      <p className="w-[900px] text-center text-[24px] leading-normal text-[#666]">
        OneGold has lower costs, more convenience and better security than
        traditional EFT&rsquo;s or physical metal delivery. See for yourself.
      </p>

      <div className="flex w-full max-w-[1240px] flex-col rounded-[20px] border border-[#e1edff] bg-[#e1edff]/40 p-5">
        {/* Header row */}
        <div className="flex w-full items-center">
          <div className="h-[80px] flex-1" />
          <OgCell rounded="top">
            <Image src="/assets/onegold-logo.png" alt="OneGold" width={107} height={23} className="h-[23px] w-[107px]" />
          </OgCell>
          <div className="flex h-[80px] flex-1 items-center justify-center">
            <p className="w-[150px] text-center text-[20px] leading-normal text-[#666]">EFTs</p>
          </div>
          <div className="flex h-[80px] flex-1 items-center justify-center">
            <p className="w-[150px] text-center font-hanken text-[20px] leading-normal text-[#666]">
              Physical Gold
            </p>
          </div>
        </div>
        {ROWS.map((row, i) => {
          const last = i === ROWS.length - 1;
          return (
            <div key={i} className="flex w-full items-center">
              <div className="flex h-[80px] flex-1 items-center border-t border-[#dbe5f1]">
                <p className="text-[20px] leading-normal text-black">{row.title}</p>
              </div>
              <OgCell rounded={last ? "bottom" : undefined}>{row.og}</OgCell>
              <PhysCell topBorder>{row.eft}</PhysCell>
              <PhysCell topBorder>{row.phys}</PhysCell>
            </div>
          );
        })}
      </div>
    </section>
  );
}
