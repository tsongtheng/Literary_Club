import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import logoImg from "../../assets/images/logo.png";
import SmallScreenHeader from "./SmallScreenHeader";

type navItemsObj = {
  id: number;
  link: string;
  to: string;
};

const navItem: navItemsObj[] = [
  { id: 1, link: "About", to: "/about" },
  { id: 2, link: "Team", to: "/team" },
  { id: 3, link: "Events", to: "/events" },
  { id: 4, link: "Blogs", to: "/blogs" },
  { id: 5, link: "Gallery", to: "/gallery" },
  { id: 6, link: "Docs", to: "/documents" },
];
const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full flex justify-between items-center gap-8 sm:py-4 2xl:px-52 xl:px-24 sm:px-8 px-4 py-2 fixed top-0 left-0 z-20  ${
        isScrolled
          ? "bg-gray-900 lg:backdrop-blur-md backdrop-blur-none lg:bg-opacity-40 opacity-100 lg:text-white text-gray-300"
          : "bg-gray-900 text-gray-300"
      }`}
    >
      <NavLink to="/">
        <img src={logoImg} alt="website-logo" className="lg:size-16 size-14" />
      </NavLink>
      <nav className="lg:block hidden">
        <ul className="flex xl:gap-12 gap-8 text-base font-semibold">
          {navItem.map((nav) => (
            <li key={nav.id}>
              <NavLink
                to={nav.to}
                className={({ isActive }) =>
                  isActive ? "text-red-700" : "hover:text-red-700"
                }
              >
                {nav.link}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="lg:flex items-center gap-3 hidden">
        <NavLink to="/login">
          <button className="rounded-3xl xl:px-6 px-4 py-3 hover:bg-gray-800">
            Log In
          </button>
        </NavLink>
        <NavLink to="/signup">
          <button className="rounded-3xl xl:px-6 px-4 py-3 bg-gray-300 hover:bg-gray-200 text-gray-800">
            Sign Up
          </button>
        </NavLink>
        <NavLink to="/donate">
          <button className="lg:ml-3 rounded-3xl xl:px-6 px-4 py-3 text-white  bg-red-800 hover:bg-red-700 transition tracking-wider">
            Donate Us
          </button>
        </NavLink>
      </div>
      {/****************** SMALL SCREEN *****************/}
      <SmallScreenHeader navItems={navItem} />
    </header>
  );
};

export default Header;
