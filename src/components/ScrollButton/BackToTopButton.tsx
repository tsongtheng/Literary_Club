import { useEffect, useState } from "react";

import { FaArrowUpLong } from "react-icons/fa6";

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp: React.MouseEventHandler<HTMLButtonElement> = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <button
        onClick={scrollUp}
        className={`fixed shadow-lg z-10 lg:bottom-12 md:bottom-12 bottom-12 lg:right-12 md:right-12 right-6 w-12 h-12 bg-red-700 rounded-full flex items-center justify-center transition delay-75 ease-in-out ${
          !backToTopButton && "hidden"
        }`}
      >
        <FaArrowUpLong className="text-white" size={24} />
      </button>
    </>
  );
};

export default BackToTopButton;
