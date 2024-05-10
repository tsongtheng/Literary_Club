import { Link } from "react-router-dom";

import EventsItem from "./EventsItems";
import ViewAllButton from "../../Buttons/ViewAllButton";

const eventsData = [
  {
    id: 1,
    date: "Mon, Feb 04",
    eventName: "Writing Workshops",
    dateTime: "Feb, 2024, 10:00 AM - 3:00 PM",
    location: "Wagun Ponthai, Community Hall",
    details:
      "Fusce feugiat nunc vel purus auctor, eget tincidunt risus pulvinar. Vivamus at suscipit tortor, a sagittis quam. Morbi nec gravida augue, sed egestas lorem. Ut eget quam id arcu bibendum rhoncus non a libero.",
  },
  {
    id: 2,
    date: "Sun, May 20",
    eventName: "Book Discussions",
    dateTime: "May 20, 2024, 1:00 PM - 5:00 PM",
    location: "Google Meet",
    details:
      "Fusce feugiat nunc vel purus auctor, eget tincidunt risus pulvinar. Vivamus at suscipit tortor, a sagittis quam. Morbi nec gravida augue, sed egestas lorem. Ut eget quam id arcu bibendum rhoncus non a libero.Fusce feugiat nunc vel purus auctor, eget tincidunt risus pulvinar.",
  },
  {
    id: 3,
    date: "Wed, Aug 20",
    eventName: "Poetry Slams",
    dateTime: "Aug 20, 2024, 11:00 AM - 5:00 PM",
    location: "Government Secondary School, Wagun Ponthai",
    details:
      "Fusce feugiat nunc vel purus auctor, eget tincidunt risus pulvinar. Vivamus at suscipit tortor, a sagittis quam. Morbi nec gravida augue, sed egestas lorem. Ut eget quam id arcu bibendum rhoncus non a libero.",
  },
];

const Events: React.FC = () => {
  return (
    <section className="w-full 2xl:px-52 lg:py-32 py-16 px-8 flex flex-col items-center gap-12 bg-gray-200">
      <h2 className="lg:text-4xl text-3xl text-center font-bold lg:mb-6 mb-0 text-gray-700">
        Upcoming Events
      </h2>
      <div className="xl:w-4/6 lg:w-3/4 md:w-5/6 sm:w-11/12 w-full flex flex-col">
        <EventsItem eventsData={eventsData} />
      </div>
      <Link to="/events">
        <ViewAllButton>See All Events</ViewAllButton>
      </Link>
    </section>
  );
};

export default Events;
