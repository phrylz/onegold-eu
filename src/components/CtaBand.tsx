const APP_LINK = "https://onegold.smart.link/pd8n6enxs";

export default function CtaBand() {
  return (
    <section
      className="flex w-full flex-col items-center justify-center gap-5 bg-[#e1edff] px-[15px] py-[30px]"
      data-node-id="7099:28589"
    >
      <h2 className="w-full text-center text-[30px] font-normal leading-normal text-black">
        Get Started with the OneGold App
      </h2>
      <a
        href={APP_LINK}
        className="flex w-[160px] flex-col items-center rounded-[20px] border border-[#197eeb] bg-[#0060d4] py-[10px] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#0a6fe6]"
      >
        <span className="flex w-full items-center justify-center gap-2">
          <span className="text-center text-[18px] text-white">Get the App</span>
          <svg
            width="11"
            height="18"
            viewBox="0 0 11 18"
            fill="none"
            aria-hidden
            className="shrink-0"
          >
            <path
              d="M1.5 1.5L9 9l-7.5 7.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </a>
    </section>
  );
}
