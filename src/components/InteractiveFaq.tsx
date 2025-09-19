"use client";

import { useState } from "react";
import {
  storyblokEditable,
  renderRichText,
  SbBlokData,
} from "@storyblok/react";

export interface FaqItemBlok extends SbBlokData {
  _uid: string;
  _editable?: string;
  question: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  answer: any;
  component: "faq";
}

export const InteractiveFaq = ({ items }: { items: FaqItemBlok[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((faqItem, index) => {
        const isActive = activeIndex === index;
        const renderedAnswer = renderRichText(faqItem.answer) as string;

        return (
          <div
            key={faqItem._uid}
            {...storyblokEditable(faqItem)}
            className="mb-4 border-b border-border"
          >
            <header
              className="flex justify-between items-center cursor-pointer gap-4 mb-4"
              onClick={() => toggleFaq(index)}
            >
              <h3 className="sm:text-[19px] font-semibold text-black flex justify-between items-center text-base">
                {faqItem.question}
              </h3>
              <span className="text-2xl font-normal text-black ">
                {isActive ? "-" : "+"}
              </span>
            </header>

            {isActive && (
              <div
                className="prose prose-sm max-w-none mt-3 text-black mb-4 text-base font-medium"
                dangerouslySetInnerHTML={{ __html: renderedAnswer }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
