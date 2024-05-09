import { Link } from "react-router-dom";

import aboutUsImg from "../../../assets/images/about.jpg";
import LearnMoreButton from "../../Buttons/LearnMoreButton";

const About = () => {
  return (
    <section className="w-full bg-gray-200 leading-relaxed flex lg:flex-row flex-col">
      <div className="lg:w-[60%] w-auto flex flex-col justify-center 2xl:px-52 lg:py-24 xl:px-24 lg:px-16 py-16 px-8">
        <h2 className="lg:text-4xl text-3xl font-bold mb-12 text-gray-700">
          About Us
        </h2>
        <p className="lg:text-left text-justify mb-4 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis
          mauris ac tellus pharetra suscipit sit amet sagittis libero. Etiam
          quis commodo elit. Nunc eu enim placerat, auctor est a, sagittis
          massa. Sed posuere nulla urna, non luctus ante condimentum ut.
        </p>
        <Link to="/about">
          <LearnMoreButton />
        </Link>
      </div>
      <div className="flex-1">
        <img
          src={aboutUsImg}
          alt="about-us-image"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

export default About;
