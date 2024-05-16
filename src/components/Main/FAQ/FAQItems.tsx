import React, { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";

interface FAQItemsObj {
  id: number;
  question: string;
  answer: string;
}

interface FAQProps {
  faqData: FAQItemsObj[];
}

const FAQItems: React.FC<FAQProps> = ({ faqData }) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleActiveId = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };
  return (
    <>
      {faqData.map((faq) => (
        <div
          key={faq.id}
          className="w-full border-[1px] rounded-xl p-5 border-gray-300 hover:border-gray-500 cursor-pointer"
          onClick={() => toggleActiveId(faq.id)}
        >
          <div className="flex gap-3 justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-700">
              {faq.question}
            </h3>

            <div>
              <IoIosArrowDown
                className={`text-gray-700 ${
                  activeId === faq.id ? "rotate-180" : ""
                }`}
                size={26}
              />
            </div>
          </div>
          {activeId === faq.id && (
            <p className="text-justify text-gray-500 pt-5">{faq.answer}</p>
          )}
        </div>
      ))}
    </>
  );
};

export default FAQItems;
