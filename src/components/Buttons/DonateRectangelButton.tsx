import { Link } from "react-router-dom";

const DonateRectangelButton = () => {
  return (
    <Link to="/donate">
      <button className="text-white text-md px-9 py-3 bg-gray-900 xl:hover:bg-gray-800 ">
        Donate Now
      </button>
    </Link>
  );
};

export default DonateRectangelButton;
