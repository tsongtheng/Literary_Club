import FAQItems from "./FAQItems";

type faqDataObj = {
  id: number;
  question: string;
  answer: string;
};

const faqData: faqDataObj[] = [
  {
    id: 1,
    question: "What is Tailwind CSS?",
    answer:
      "Tailwind CSS is a utility-first CSS framework for creating custom designs without having to leave your HTML.",
  },
  {
    id: 2,
    question: "What is Next.js?",
    answer:
      "Next.js is a React framework that enables functionality such as server-side rendering, static site generation, and more.",
  },
  {
    id: 3,
    question: "Lorem ipsum dolor sit amet?",
    answer:
      "Fusce feugiat nunc vel purus auctor, eget tincidunt risus pulvinar. Vivamus at suscipit tortor, a sagittis quam. Morbi nec gravida augue, sed egestas lorem. Ut eget quam id arcu bibendum rhoncus non a libero.",
  },
  {
    id: 4,
    question: "Nunc laoreet faucibus ligula?",
    answer:
      "Next.js is a React framework that enables functionality such as server-side rendering, static site generation, and more.",
  },
  {
    id: 5,
    question: "Etiam turpis tellus, ullamcorper a pretium?",
    answer:
      " Etiam turpis tellus, ullamcorper a pretium a, imperdiet in arcu. Donec sodales enim vel ligula pellentesque molestie. Quisque euismod condimentum auctor. Morbi arcu enim. Donec sodales enim vel",
  },
];

const FAQComponent = () => {
  return (
    <section
      className="w-full 2xl:px-52 lg:py-32 py-16 px-8 flex flex-col items-center gap-20"
      id="faq"
    >
      <h2 className="lg:text-4xl text-3xl text-center font-bold lg:mb-6 mb-0 text-gray-700">
        Frequently asked questions{" "}
      </h2>
      <div className="xl:w-4/6 lg:w-3/4 md:w-5/6 sm:w-11/12 w-full flex flex-col gap-4">
        <FAQItems faqData={faqData} />
      </div>
    </section>
  );
};

export default FAQComponent;
