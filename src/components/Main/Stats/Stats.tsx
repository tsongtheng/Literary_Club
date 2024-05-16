import { RiTeamFill } from "react-icons/ri";
import { MdEventAvailable } from "react-icons/md";
import { FaBlogger } from "react-icons/fa";
import { BiSolidDonateHeart } from "react-icons/bi";
import StatsItems from "./StatsItems";

type statsDataObj = {
  id: number;
  icon: JSX.Element;
  statNumber: string;
  description: string;
};

const statsData: statsDataObj[] = [
  {
    id: 1,
    icon: <RiTeamFill fill="#9b2c2c" size={40} />,
    statNumber: `${100}+`,
    description: "Total Members",
  },
  {
    id: 2,
    icon: <MdEventAvailable fill="#9b2c2c" size={40} />,
    statNumber: `${10}+`,
    description: "Events Conducted",
  },
  {
    id: 3,
    icon: <FaBlogger fill="#9b2c2c" size={40} />,
    statNumber: `${20}+`,
    description: "Blogs Published",
  },
  {
    id: 4,
    icon: <BiSolidDonateHeart fill="#9b2c2c" size={40} />,
    statNumber: `${50}+`,
    description: "Total Donation",
  },
];

const Stats = () => {
  return (
    <>
      <section className="lg:px-44 px-10 lg:py-40 py-20 flex justify-evenly items-center gap-20 flex-wrap">
        {statsData.map((data) => (
          <div
            className="w-52 flex flex-col justify-center gap-4 border rounded-lg hover:border-gray-500 p-4"
            key={data.id}
          >
            <StatsItems
              icon={data.icon}
              statNumber={data.statNumber}
              description={data.description}
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default Stats;
