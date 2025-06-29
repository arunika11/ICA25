import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const VenueCard = ({ hidden, text, heading, imgurl }) => {
  if (heading !== "Conference Venue") {
    hidden = true;
  }
  let accomo = null;
  if (heading === "Accomodation") {
    accomo = true;
  }
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center mt-20 lg:items-start justify-between p-6 lg:p-16 min-h-[70vh]">
        <div className="lg:w-1/2 space-y-6 mx-auto">
          <h2 className="font-heading text-5xl font-semibold">{heading}</h2>
          {!hidden ? (
            <div className="flex items-center text-sm sm:text-lg text-black">
              <FaMapMarkerAlt className="mr-2 sm:mr-3 text-[#4ECB38]" />
              <p className="font-body text-2xl">
                Indian Institute of Technology, Guwahati
              </p>
            </div>
          ) : (
            <></>
          )}
          {accomo ? (
            <div className="font-body px-4 sm:px-8 md:px-16 lg:px-20 py-8 bg-white">
              <p className="text-lg sm:text-xl font-body text-gray-700 leading-relaxed mb-4">
                For accommodation during your visit to IIT Guwahati, you have
                several options:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li className="text-lg">
                  Student hostel accommodation (on campus, basic facility, twin
                  sharing rooms) - Approx Rs 500 per day.
                </li>
                <li className="text-lg">
                  IIT Guwahati Guesthouse (on campus, decent facility, twin
                  sharing rooms) - Approx Rs 1200 per day.
                </li>
                <li className="text-lg">
                  Hotels in Guwahati city - Approx Rs 1500 - Rs 2000 per day
                  (self-booking required).
                </li>
              </ul>
              <p className="text-lg sm:text-xl font-body text-gray-700 leading-relaxed mt-4">
                If you wish to avail hostel or guesthouse facilities, please
                fill out the relevant form.
              </p>
              <button
                style={{ height: "40px" }}
                className="border-gray-500 border-2 flex items-center gap-x-4 font-body px-6 sm:px-8 py-2 mt-10 text-black font-medium hover:bg-gray-300 transition"
              >
                Guesthouse Form
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 3.5H20.5M20.5 3.5V9M20.5 3.5L12.5 11.5"
                    stroke="#333333"
                    stroke-width="1.3"
                  />
                  <path
                    d="M11.5 5.5H7.5C6.39543 5.5 5.5 6.39543 5.5 7.5V16.5C5.5 17.6046 6.39543 18.5 7.5 18.5H16.5C17.6046 18.5 18.5 17.6046 18.5 16.5V12.5"
                    stroke="#333333"
                    stroke-width="1.3"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <p className=" font-body text-lg leading-relaxed text-gray-700">
              {text}
            </p>
          )}
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2 mt-6 lg:mt-0 lg:pl-10">
          <img
            src={imgurl}
            alt="Event Location"
            className="w-full h-[60vh] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default VenueCard;
