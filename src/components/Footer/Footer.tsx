import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import LearnMoreFooterLink from "./LearnMoreFooterLinks";
import CommunityFooterLink from "./CommunityFooterLink";

type footerSocialObj = {
  id: number;
  icon: JSX.Element;
  to: string;
};

const footerSocial: footerSocialObj[] = [
  {
    id: 1,
    icon: (
      <FaLinkedinIn
        size={24}
        className="text-[#f9f7f6] hover:text-red-700 hover:scale-110 transition duration-200"
      />
    ),
    to: "https://www.linkedin.com/",
  },
  {
    id: 2,
    icon: (
      <FaTwitter
        size={24}
        className="text-[#f9f7f6] hover:text-red-700 hover:scale-110 transition duration-200"
      />
    ),
    to: "https://www.x.com/",
  },
  {
    id: 3,
    icon: (
      <FaFacebook
        size={24}
        className="text-[#f9f7f6] hover:text-red-700 hover:scale-110 transition duration-200"
      />
    ),
    to: "https://www.facebook.com/",
  },
  {
    id: 4,
    icon: (
      <FaInstagram
        size={24}
        className="text-[#f9f7f6] hover:text-red-700 hover:scale-110 transition duration-200"
      />
    ),
    to: "https://www.instagram.com/",
  },
  {
    id: 5,
    icon: (
      <FaDiscord
        size={28}
        className="text-[#f9f7f6] hover:text-red-700 hover:scale-110 transition duration-200"
      />
    ),
    to: "https://www.discord.com/",
  },
  {
    id: 6,
    icon: (
      <FaYoutube
        size={28}
        className="text-[#CD201F] hover:text-[#f9f7f6] hover:scale-110 transition duratio-200"
      />
    ),
    to: "https://www.youtube.com/",
  },
];

const Footer = () => {
  return (
    <section>
      <div className="bg-gray-800 text-gray-400 flex sm:flex-row flex-col sm:justify-around sm:flex-wrap gap-8 2xl:px-52 lg:py-24 xl:px-24 lg:px-16 py-16 px-8">
        <div>
          <a href="/">
            <img src={logoImg} alt="website-logo" className="size-16" />
          </a>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-5">Learn More</h3>
          <ul className="text-sm flex flex-col gap-3">
            <LearnMoreFooterLink />
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-5">
            Our Community
          </h3>
          <ul className="text-sm flex flex-col gap-3">
            <CommunityFooterLink />
            <li className="hover:text-gray-100 transition">
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-5">Contact Us</h3>
          <div className="text-sm flex flex-col gap-3">
            <p className="font-semibold">
              Wagun Ponthai, Bordumsa <br />
              Dist:Changlang, Arunachal Pradesh <br />
              792056
            </p>

            <p>
              <span className="font-bold">Admin Ph.: </span>
              <span>+19 55555 66666</span>
            </p>
            <p>
              <span className="font-bold">Email ID: </span>
              <span>literaryclubofjongchum983@gmail.com</span>
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-5">Social</h3>
          <div className="flex sm:justify-center items-center gap-5">
            {footerSocial.map((social) => (
              <Link
                key={social.id}
                to={social.to}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.to && social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-5">
        <p className="text-sm text-gray-800 text-center">
          &copy; 2024 by Literary Club of Jongchum{" "}
          <span className="text-gray-400">|</span> All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
