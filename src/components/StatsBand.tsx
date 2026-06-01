const arial = { fontFamily: "Arial, Helvetica, sans-serif" } as const;

function Star() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="#197eeb" aria-hidden>
      <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.9l-5.8 3.05 1.1-6.45-4.7-4.6 6.5-.95L12 2.5z" />
    </svg>
  );
}

function Stat({ children, label }: { children: React.ReactNode; label: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-[10px]">
      <div className="text-[36px] font-bold leading-[47px] text-white whitespace-nowrap" style={arial}>
        {children}
      </div>
      <div className="w-[150px] text-center text-[16px] leading-[20px] text-[#c4c4c4]" style={arial}>
        {label}
      </div>
    </div>
  );
}

export default function StatsBand() {
  return (
    <section
      className="flex w-full flex-wrap items-start justify-center gap-x-5 gap-y-[30px] bg-[#1f3854] px-[14px] py-10"
      data-node-id="5850:7538"
    >
      <Stat label={<><span className="text-[14px]">In </span>Transactions</>}>
        $1.5B<span className="text-[#197eeb]">+</span>
      </Stat>
      <Stat label="Ounces Under Management">
        4M<span className="text-[#197eeb]">+</span>
      </Stat>
      <Stat label="App Downloads">
        500k<span className="text-[#197eeb]">+</span>
      </Stat>
      <Stat label="Review Score">
        <span className="flex w-[120px] items-center justify-center gap-[5px]">
          <span>
            4.8<span className="text-[20px]">/5</span>
          </span>
          <Star />
        </span>
      </Stat>
    </section>
  );
}
