import { useEffect, useState } from "react";

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          id="arrow"
          viewBox="0 0 30 30"
          fill="#fff"
        >
          <path d="M21.25 12.5c-0.375 0 -0.625 -0.125 -0.875 -0.375l-6.25 -6.25c-0.5 -0.5 -0.5 -1.25 0 -1.75s1.25 -0.5 1.75 0l6.25 6.25c0.5 0.5 0.5 1.25 0 1.75 -0.25 0.25 -0.5 0.375 -0.875 0.375" />
          <path d="M8.75 12.5c-0.375 0 -0.625 -0.125 -0.875 -0.375 -0.5 -0.5 -0.5 -1.25 0 -1.75l6.25 -6.25c0.5 -0.5 1.25 -0.5 1.75 0s0.5 1.25 0 1.75l-6.25 6.25c-0.25 0.25 -0.5 0.375 -0.875 0.375" />
          <path d="M15 26.25c-0.75 0 -1.25 -0.5 -1.25 -1.25V5c0 -0.75 0.5 -1.25 1.25 -1.25s1.25 0.5 1.25 1.25v20c0 0.75 -0.5 1.25 -1.25 1.25" />
        </svg>
      </button>
    </>
  );
};

export default BackToTopButton;
