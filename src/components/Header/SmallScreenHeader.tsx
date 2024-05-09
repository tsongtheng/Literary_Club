import { NavLink } from "react-router-dom";
import { useState } from "react";

type navItemsObj = {
  id: number;
  link: string;
  to: string;
};

type navItemProps = {
  navItems: navItemsObj[];
};

const SmallScreenHeader: React.FC<navItemProps> = ({ navItems }) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

  const toggleDrawer = () => {
    const state = !isOpenDrawer;
    setIsOpenDrawer(state);

    if (state) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  };

  return (
    <>
      <div className="flex items-center sm:gap-20 gap-10 lg:hidden text-sm">
        <NavLink
          to="/donate"
          //   onClick={handleOpenModal}
        >
          <button className="px-4 sm:py-3 py-2  rounded-3xl text-white bg-red-800">
            Donate Us
          </button>
        </NavLink>

        <div
          onClick={toggleDrawer}
          className="px-3 py-5 rounded flex justify-center bg-gray-800 items-center cursor-pointer"
        >
          <div className="relative sm:w-6 w-5">
            <span
              className={`h-0.5 w-full absolute bg-gray-200 ${
                isOpenDrawer
                  ? "top-0 rotate-45 active_nav__toggle--line"
                  : "-top-1 nav_toggle--line"
              }`}
            ></span>
            <span
              className={`h-0.5 w-full absolute bg-gray-200 ${
                isOpenDrawer
                  ? "top-0 -rotate-45 active_nav__toggle--line"
                  : "top-1 nav_toggle--line"
              }`}
            ></span>
          </div>
        </div>
      </div>

      {/******************** DRAWER ***************/}
      <div
        className={`fixed lg:hidden flex justify-end sm:mt-[88px] mt-[72px] z-[40] w-full sm:min-h-[calc(100vh-88px)] min-h-[calc(100vh-72px)] transition duration-500 sm:text-base text-sm ${
          isOpenDrawer
            ? "translate-x-0 bg-gray-900 backdrop-blur-sm bg-opacity-75"
            : "translate-x-full"
        } inset-0`}
        onClick={toggleDrawer}
      >
        <div
          className="w-full sm:w-1/2 bg-gray-100 p-10"
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="border-b-[1px] border-gray-300 pb-8">
            <ul className="flex flex-col xl:gap-12 sm:gap-8 gap-6 font-semibold">
              {navItems.map((nav: navItemsObj) => (
                <li key={nav.id}>
                  <NavLink
                    to={nav.to}
                    onClick={toggleDrawer}
                    className="text-lg text-gray-800 hover:text-red-700"
                  >
                    {nav.link}
                  </NavLink>
                </li>
              ))}

              <li>
                <NavLink
                  to="/documents"
                  onClick={toggleDrawer}
                  className="text-lg text-gray-800 hover:text-red-700"
                >
                  Docs
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col gap-6 text-gray-800 pt-8">
            {/* <NavLink to="/login" onClick={handleOpenModal}> */}
            <NavLink to="/login">
              <button className="w-full rounded-3xl xl:px-6 px-4 py-3 bg-gray-800 text-gray-100">
                Log In
              </button>
            </NavLink>
            {/* <NavLink to="/signup" onClick={handleOpenModal}> */}
            <NavLink to="/signup">
              <button className="w-full rounded-3xl xl:px-6 px-4 py-3 bg-red-800 text-gray-100">
                Sign Up
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      {/******************** DRAWER ***************/}
    </>
  );
};

export default SmallScreenHeader;
