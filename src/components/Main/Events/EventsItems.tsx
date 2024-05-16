import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import { IoIosArrowDown } from "react-icons/io";
import LearnMoreButton from "../../Buttons/LearnMoreButton";
import ComingSoonModal from "../../PopupModal/ComingSoonModal";

interface eventsItem {
  id: number;
  date: string;
  eventName: string;
  dateTime: string;
  location: string;
  details: string;
}

interface eventsProps {
  eventsData: eventsItem[];
}

const EventsItems: React.FC<eventsProps> = ({ eventsData }) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleActiveId = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  /*************POPUP MODAL******************/
  const dialog = useRef<HTMLDialogElement>(null);

  const handleOpenModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (dialog.current) {
      dialog.current.showModal();
      document.body.style.overflowY = "hidden";
    }
  };
  /*************POPUP MODAL******************/

  return (
    <>
      <ComingSoonModal ref={dialog} />
      {eventsData.map((event) => (
        <div
          key={event.id}
          className="w-full border-b-[1px] py-14 border-gray-400 hover:border-red-700 cursor-pointer"
        >
          <div className="flex justify-between items-center gap-4">
            <div
              className="capitalize"
              onClick={() => toggleActiveId(event.id)}
            >
              <h3 className="font-bold text-gray-700">{event.date}</h3>
              <div className="flex gap-2 items-center text-gray-700">
                <p className="text-lg">{event.eventName}</p>
                <div>
                  <IoIosArrowDown
                    className={`text-gray-600 ${
                      activeId === event.id ? "rotate-180" : ""
                    }`}
                    size={26}
                  />
                </div>
              </div>
            </div>
            <Link to="#" onClick={handleOpenModal}>
              <button className="text-white px-6 py-2 bg-red-800 xl:hover:bg-red-700 ">
                Register
              </button>
            </Link>
          </div>
          {activeId === event.id && (
            <div className="text-justify pt-5">
              <p className="text-gray-700 capitalize">{event.dateTime}</p>
              <p className="mb-4 text-gray-700 capitalize">{event.location}</p>
              <p className="text-gray-500 font-light">{event.details}</p>

              <Link to="#" onClick={handleOpenModal}>
                <LearnMoreButton />
              </Link>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default EventsItems;
