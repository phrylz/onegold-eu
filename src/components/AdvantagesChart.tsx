import Image from "next/image";

const BLUE = "#197eeb";

function CheckCircle() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9.2" stroke="white" strokeWidth="1.6" />
      <path
        d="M8 12.2l2.7 2.7L16 9.4"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="#879AB7"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12.5l4.5 4.5L19 7"
        stroke="#879AB7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Cell = React.ReactNode;

const ROWS: { title: Cell; og: Cell; eft: Cell; phys: Cell }[] = [
  {
    title: "Direct Ownership",
    og: <CheckCircle />,
    eft: <CloseIcon />,
    phys: <CheckIcon />,
  },
  {
    title: "24/7 Trading",
    og: <CheckCircle />,
    eft: <CloseIcon />,
    phys: <CloseIcon />,
  },
  {
    title: (
      <>
        Ease <br />
        of Use
      </>
    ),
    og: "Immediate Funding",
    eft: "Pre-fund and wait",
    phys: "Search, Purchase, Wait for Delivery",
  },
  {
    title: "Fees",
    og: "Only 0.12% - 0.30% Storage",
    eft: "0.40%",
    phys: "Shipping Costs",
  },
  {
    title: (
      <>
        Insurance <br />& 3rd Party Audits
      </>
    ),
    og: <CheckCircle />,
    eft: <CloseIcon />,
    phys: <CloseIcon />,
  },
];

/** Center cell for the EFT / Physical columns: icon or grey text. */
function PhysCell({ children }: { children: Cell }) {
  return (
    <div className="flex h-[80px] w-[90px] items-center justify-center">
      {typeof children === "string" ? (
        <p className="px-1 text-center text-[12px] leading-normal text-[#666]">
          {children}
        </p>
      ) : (
        children
      )}
    </div>
  );
}

/** OneGold (blue) column cell. */
function OgCell({
  children,
  rounded,
}: {
  children: Cell;
  rounded?: "top" | "bottom";
}) {
  return (
    <div
      className={`flex h-[80px] w-[90px] items-center justify-center border border-[#82beff] bg-[#197eeb] ${
        rounded === "top" ? "rounded-t-[15px]" : ""
      } ${rounded === "bottom" ? "rounded-b-[15px]" : ""}`}
    >
      {typeof children === "string" ? (
        <p className="px-1 text-center text-[11px] font-bold leading-normal text-white">
          {children}
        </p>
      ) : (
        children
      )}
    </div>
  );
}

export default function AdvantagesChart() {
  return (
    <section
      className="flex w-full flex-col items-center justify-center gap-10 px-[15px] py-[60px]"
      data-node-id="5844:7186"
    >
      <h2 className="w-full text-center text-[36px] font-normal leading-normal text-black">
        The Advantages Owning <span style={{ color: BLUE }}>OneGold</span> Vaulted
        Metals
      </h2>
      <p className="w-full text-center text-[20px] leading-normal text-[#666]">
        OneGold has lower costs, more convenience and better security than
        traditional EFT&rsquo;s or physical metal delivery. See for yourself.
      </p>

      <div className="overflow-hidden rounded-[20px] bg-[#f3f8ff] py-[10px]">
        {/* Header row */}
        <div className="flex items-center">
          <div className="h-[80px] w-[90px]" />
          <OgCell rounded="top">
            <Image
              src="/assets/onegold-logo.png"
              alt="OneGold"
              width={69}
              height={15}
              className="h-[15px] w-[69px]"
            />
          </OgCell>
          <div className="flex h-[80px] w-[90px] items-center justify-center">
            <p className="text-center font-hanken text-[16px] text-[#666]">EFTs</p>
          </div>
          <div className="flex h-[80px] w-[90px] items-center justify-center">
            <p className="text-center font-hanken text-[16px] leading-normal text-[#666]">
              Physical Gold
            </p>
          </div>
        </div>

        {/* Data rows */}
        {ROWS.map((row, i) => {
          const last = i === ROWS.length - 1;
          return (
            <div key={i} className="flex items-center">
              <div className="flex h-[80px] w-[90px] items-center border-t border-[#dbe5f1] px-[10px]">
                <p className="text-[13px] leading-normal text-[#666]">
                  {row.title}
                </p>
              </div>
              <OgCell rounded={last ? "bottom" : undefined}>{row.og}</OgCell>
              <div className="border-t border-[#dbe5f1]">
                <PhysCell>{row.eft}</PhysCell>
              </div>
              <div className="border-t border-[#dbe5f1]">
                <PhysCell>{row.phys}</PhysCell>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
