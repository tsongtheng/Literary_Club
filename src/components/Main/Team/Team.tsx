import { Link } from "react-router-dom";

import cardImg from "../../../assets/images/team-card-image.jpg";
import TeamCard from "../../Cards/TeamCard";
import ViewAllButton from "../../Buttons/ViewAllButton";

const cardsData = [
  {
    id: 1,
    img: cardImg,
    name: "Khojon Keno Longkho",
    title: "President/ Founder ",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://www.x.com/",
    email: "dummyemail9876@gmail.com", //Email Id is compulsory, it should come from person account when signing up
  },
  {
    id: 2,
    img: cardImg,
    name: "Khojon Keno Longkho",
    title: "Co-founder / Professor",
    facebook: "https://www.facebook.com/",
    instagram: "",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://www.x.com/",
    email: "dummyemail9876@gmail.com",
  },
  {
    id: 3,
    img: cardImg,
    name: "Khojon Keno Longkho",
    title: "Doctor",
    facebook: "",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    twitter: "",
    email: "dummyemail9876@gmail.com",
  },
];

const Team = () => {
  const teamCardHome = cardsData.slice(0, 3);

  return (
    <section className="w-full 2xl:px-52 lg:py-24 xl:px-24 lg:px-16 py-16 px-8 flex flex-col gap-16">
      <h2 className="lg:text-4xl text-3xl font-bold lg:mb-6 mb-0 text-gray-700">
        Meet Our Team
      </h2>
      <div className="w-full flex justify-around items-center gap-8 flex-wrap">
        {teamCardHome.map((data) => (
          <TeamCard key={data.id} {...data} />
        ))}
      </div>

      <div className="flex justify-center">
        <Link to="/team">
          <ViewAllButton>
            View All
            <svg
              className="size-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              id="arrow"
            >
              <path
                className="transition fill-red-800 group-hover:fill-white"
                fill="none"
                d="M1 26h43.586l-6.293 6.293 1.414 1.414L48.414 25l-8.707-8.707-1.414 1.414L44.586 24H1z"
              />
            </svg>
          </ViewAllButton>
        </Link>
      </div>
    </section>
  );
};

export default Team;
