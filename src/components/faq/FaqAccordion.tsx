"use client";

import { useState } from "react";
import Image from "next/image";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  /** Index of item open by default. Pass -1 for all closed. */
  defaultOpen?: number;
  /** Additional className on the container */
  className?: string;
}

export default function FaqAccordion({
  items,
  defaultOpen = 0,
  className = "",
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpen);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? -1 : i));
  }

  return (
    <div className={`flex flex-col gap-[20px] w-full ${className}`}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="flex flex-col w-full">
            {/* Question row */}
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="text-[18px] font-bold leading-normal text-black">
                {item.question}
              </span>
              {/* Chevron icon – rotates 180° when open */}
              <span
                className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
              >
                <Image
                  src="/assets/faq-chevron.svg"
                  alt=""
                  width={27}
                  height={24}
                  aria-hidden
                  className="h-[24px] w-[27px]"
                />
              </span>
            </button>

            {/* Answer – split on double newlines to render paragraphs */}
            {isOpen && (
              <div className="pt-[10px] pb-[20px] text-[18px] leading-normal text-black flex flex-col gap-[10px]">
                {item.answer.split("\n\n").map((para, pi) => (
                  <p key={pi}>{para}</p>
                ))}
              </div>
            )}

            {/* Divider below every row */}
            <div className="h-px w-full bg-[#d9d9d9]" />
          </div>
        );
      })}
    </div>
  );
}
