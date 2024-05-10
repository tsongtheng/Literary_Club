import { Link } from "react-router-dom";
import Facebook from "../../components/SvgIcons/Facebook";
import Linkedin from "../../components/SvgIcons/Linkedin";
import Twitter from "../../components/SvgIcons/Twitter";
import Instagram from "../../components/SvgIcons/Instagram";
import Email from "../../components/SvgIcons/Email";
import { teamCardProps } from "./../../types/types";

const TeamCard = (props: teamCardProps) => {
  return (
    <div
      key={props.id}
      className="w-80 p-3 rounded-lg flex flex-col justify-between items-center gap-4 bg-gray-200 border-2 border-gray-200 xl:transition ease-in-out overflow-hidden group"
    >
      <figure className="w-full h-52 rounded-md border-gray-200 overflow-hidden">
        <img
          src={props.img}
          alt="Card Image"
          className="object-cover w-full h-full rounded-md group-hover:scale-125 transition duration-300 ease-in-out"
        />
      </figure>

      <h3 className="text-lg font-semibold text-gray-700">{props.name}</h3>

      <p className="text-base font-semibold text-justify text-gray-500">
        {props.title}
      </p>

      <div className="p-5 flex justify-center items-center gap-5">
        {props.facebook && (
          <Link to={props.facebook} target="_blank" rel="noopener noreferrer">
            <Facebook fill="#4A5568" />
          </Link>
        )}

        {props.linkedin && (
          <Link to={props.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin fill="#4A5568" />
          </Link>
        )}

        {props.twitter && (
          <Link to={props.twitter} target="_blank" rel="noopener noreferrer">
            <Twitter fill="#4A5568" />
          </Link>
        )}

        {props.instagram && (
          <Link to={props.instagram} target="_blank" rel="noopener noreferrer">
            <Instagram fill="#4A5568" />
          </Link>
        )}
        {/* EMAIL ID COMPULSORY */}
        <Link to={`mailto:${props.email}`}>
          <Email fill="#4A5568" />
        </Link>
      </div>
    </div>
  );
};

export default TeamCard;
