import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { teamCardProps } from "./../../types/types";

const TeamCard = (props: teamCardProps) => {
  return (
    <div
      key={props.id}
      className="w-80 p-3 rounded-lg flex flex-col justify-between items-center gap-4 bg-gradient-to-r from-red-200 to-gray-300 drop-shadow-lg xl:transition ease-in-out overflow-hidden group"
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
            <FaFacebook
              fill="#4A5568"
              size={24}
              className="hover:scale-110 transition"
            />
          </Link>
        )}

        {props.linkedin && (
          <Link to={props.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn
              fill="#4A5568"
              size={26}
              className="hover:scale-110 transition"
            />
          </Link>
        )}

        {props.twitter && (
          <Link to={props.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter
              fill="#4A5568"
              size={26}
              className="hover:scale-110 transition"
            />
          </Link>
        )}

        {props.instagram && (
          <Link to={props.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram
              fill="#4A5568"
              size={26}
              className="hover:scale-110 transition"
            />
          </Link>
        )}
        {/* EMAIL ID COMPULSORY */}
        <Link to={`mailto:${props.email}`}>
          <MdMail
            fill="#4A5568"
            size={30}
            className="hover:scale-110 transition"
          />
        </Link>
      </div>
    </div>
  );
};

export default TeamCard;
