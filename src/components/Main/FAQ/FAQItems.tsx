import React, { useState } from "react";

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
            <svg
              className={`w-4 h-4 text-gray-700 dark:text-gray-700 ${
                activeId === faq.id ? "rotate-180" : ""
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 8"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
              />
            </svg>
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
