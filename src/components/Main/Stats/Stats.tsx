import memberImg from "../../../assets/icons/member.svg";
import eventsImg from "../../../assets/icons/events.svg";
import blogsImg from "../../../assets/icons/blogs.svg";
import donationImg from "../../../assets/icons/donation.svg";
import StatsItems from "./StatsItems";

type statsDataObj = {
  id: number;
  icon: string;
  statNumber: string;
  description: string;
};

const statsData: statsDataObj[] = [
  {
    id: 1,
    icon: memberImg,
    statNumber: `${100}+`,
    description: "Total Members",
  },
  {
    id: 2,
    icon: eventsImg,
    statNumber: `${10}+`,
    description: "Events Conducted",
  },
  {
    id: 3,
    icon: blogsImg,
    statNumber: `${20}+`,
    description: "Blogs Published",
  },
  {
    id: 4,
    icon: donationImg,
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
