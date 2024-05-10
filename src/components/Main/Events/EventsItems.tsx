"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import LearnMoreButton from "../../Buttons/LearnMoreButton";

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

  return (
    <>
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
                <svg
                  className={`w-4 h-4 text-gray-700 dark:text-gray-700 ${
                    activeId === event.id ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 8"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                  />
                </svg>
              </div>
            </div>
            <Link to="/events">
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

              <Link to="/events">
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
