"use client";

import { useState } from "react";
import classNames from "classnames";
import { ChevronDown } from "lucide-react";
import data from "@/_data/general-data.json";

const { healthBenefits } = data.homePage;

interface AccordionItem {
  title: string;
  paragraphs: string[];
}

interface AccordionProps {
  items?: AccordionItem[];
}

const Accordion = ({ items = healthBenefits }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-b border-white/50">
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full py-5 gap-10 tablet:hover:cursor-pointer tablet:hover:scale-[101.5%] tablet:hover:opacity-90 delay-75 ease-in-out duration-300"
            >
              <p className="text-subheading text-white text-left">
                {item.title}
              </p>
              <span
                className={classNames(
                  "transition-transform duration-300 shrink-0",
                  { "scale-y-[-1]": isOpen },
                )}
              >
                <ChevronDown color="#ffffff" size={20} />
              </span>
            </button>
            <div
              className={classNames(
                "grid transition-[grid-template-rows] duration-300",
                { "grid-rows-[1fr] pb-5": isOpen, "grid-rows-[0fr]": !isOpen },
              )}
            >
              <div className="overflow-hidden flex flex-col gap-5">
                {item.paragraphs.map((para, i) => {
                  const isBold = /^\*(.+)\*$/.test(para);
                  const isList = /^\^(.+)\^$/.test(para);
                  const text = para
                    .replace(/^\*(.+)\*$/, "$1")
                    .replace(/^\^(.+)\^$/, "$1");
                  return (
                    <p
                      key={i}
                      className={classNames("text-white", {
                        "font-bold": isBold,
                        "before:content-['•'] -mt-4 before:mr-2 pl-4": isList,
                      })}
                    >
                      {text}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
