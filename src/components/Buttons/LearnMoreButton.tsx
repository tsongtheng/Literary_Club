const LearnMoreButton = () => {
  return (
    <button className="flex justify-center items-center text-red-800 hover:text-red-700 hover:underline group">
      Read More
      <svg
        className="xl:size-7 md:size-6 sm:size-5 size-3"
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 64 64"
        viewBox="0 0 64 64"
        id="arrow"
      >
        <path
          className="fill-red-800 group-hover:fill-red-700"
          fill="none"
          d="m-210.9-289-2-2 11.8-11.7-11.8-11.7 2-2 13.8 13.7-13.8 13.7"
          transform="translate(237 335)"
        ></path>
      </svg>
    </button>
  );
};

export default LearnMoreButton;
