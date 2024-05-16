import { IoIosArrowForward } from "react-icons/io";

const LearnMoreButton = () => {
  return (
    <button className="flex justify-center items-center text-red-800 hover:text-red-700 hover:underline group">
      Read More
      <IoIosArrowForward className="fill-red-800 group-hover:fill-red-700" />
    </button>
  );
};

export default LearnMoreButton;
