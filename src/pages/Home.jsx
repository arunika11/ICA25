
import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";


const Home = () => {

 
  return (
    <div>
      <div className="min-h-screen font-sans overflow-hidden">

        {/* Hero Section */}
        <section
          id="home"
          className="relative bg-cover bg-center min-h-screen"
          style={{
            backgroundImage: `url('/agriculture-bg.jpg')`,
          }}
        >
          <div className="min-h-screen flex items-center">
            {/* Content */}
            <div className="mx-4 mt-28 sm:mx-8 lg:ml-20 lg:mt-44 w-full">
              <h2 className="font-heading text-xl sm:text-3xl font-semibold text-white">
                3rd International Conference on
              </h2>
              <h3 className="font-heading text-4xl sm:text-6xl font-semibold text-[#4ECB38]">
                Agriculture-Centric{" "}
                <span className="font-semibold text-white">Computation</span>
              </h3>
              <div className="flex flex-col lg:flex-row mt-8 sm:mt-16 w-full justify-between items-start lg:items-center px-4 lg:px-10">
                {/* Date and Location */}
                <div className="font-body space-y-4 lg:-ml-10 md:-ml-7 sm:-ml-6">
                  <div className="flex items-center text-sm sm:text-lg text-white">
                    <FaCalendarAlt className="mr-2 sm:mr-3 text-[#4ECB38]" />
                    <p className="text-2xl">13th to 16th May, 2025</p>
                  </div>
                  <div className="flex items-center text-sm sm:text-lg text-white">
                    <FaMapMarkerAlt className="mr-2 sm:mr-3 text-[#4ECB38]" />
                    <p className="font-body text-2xl">
                      Indian Institute of Technology, Guwahati
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex space-x-4 mt-6 lg:mt-0 mr-10">
                  <button className="font-body px-6 sm:px-8 py-2 bg-[#4ECB38] text-black font-medium hover:bg-green-600 transition">
                    Register
                  </button>
                  <button className="font-body px-6 sm:px-8 py-2 border border-[#fff] text-white font-medium hover:bg-[#4ECB38] hover:text-black transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="flex flex-col lg:flex-row items-center mt-28 lg:items-start justify-between p-6 lg:p-16 min-h-[90vh]">
        {/* Left Text Section */}
        <div className="lg:w-1/2 space-y-6 mx-auto">
          <h2 className="font-heading text-5xl font-semibold">
            About the <span className="text-[#4ECB38]">Event</span>
          </h2>
          <p className=" font-body text-lg leading-relaxed text-gray-700">
            We are excited to announce the third edition of the International
            Conference on Agriculture-Centric Computation (ICA 2025), to be held
            at IIT Guwahati. This conference offers a dynamic platform for
            researchers working at the intersection of agriculture and computing
            to present their latest innovations. Accepted papers will be
            published in the Springer CCIS book series, ensuring broad
            visibility. We invite original research in areas such as IoT,
            Precision Agriculture, Crop Yield Prediction, Remote Sensing,
            Agricultural Datasets, and AI/ML in Agriculture.
          </p>
          <p className="font-body text-lg leading-relaxed text-gray-700">
            Following the success of previous editions, including the inaugural
            event at IIT Ropar in 2023, ICA 2025 continues to foster
            cutting-edge discussions. Proceedings from earlier editions are
            available on Springer CCIS.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2 mt-6 lg:mt-0 lg:pl-10">
          <img
            src="5.jpg"
            alt="Event Location"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="bg-[#333333] text-white p-8 lg:p-16 min-h-[60vh]">
        <h2 className="font-heading text-5xl font-semibold ">
          Conference <span className="text-[#4ECB38]">Themes</span>
        </h2>

        {/* Themes Container */}
        <div className="flex flex-wrap justify-between mt-16">
          {/* Theme 1 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <h3 className="text-xl font-semibold">AI/ML for Agriculture</h3>
            <p className="font-body text-lg leading-relaxed text-gray-300 mt-2">
              We are excited to announce the third edition of the International
              Conference on Agriculture-Centric Computation (ICA 2025), to be
              held at IIT Guwahati.
            </p>
          </div>

          {/* Theme 2 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <h3 className="text-xl font-semibold">Remote Sensing</h3>
            <p className=" font-body text-lg leading-relaxed text-gray-300 mt-2">
              We are excited to announce the third edition of the International
              Conference on Agriculture-Centric Computation (ICA 2025), to be
              held at IIT Guwahati.
            </p>
          </div>

          {/* Theme 3 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <h3 className="text-xl font-semibold">Precision Agriculture</h3>
            <p className=" font-body text-lg leading-relaxed text-gray-300 mt-2">
              We are excited to announce the third edition of the International
              Conference on Agriculture-Centric Computation (ICA 2025), to be
              held at IIT Guwahati.
            </p>
          </div>

          {/* Theme 4 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <h3 className=" font-body text-xl font-semibold">IOT</h3>
            <p className="text-lg leading-relaxed text-gray-300 mt-2">
              We are excited to announce the third edition of the International
              Conference on Agriculture-Centric Computation (ICA 2025), to be
              held at IIT Guwahati.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[60vh] bg-white flex flex-col justify-center p-8 lg:p-16">
        {/* Section Title */}
        <h2 className="font-heading text-3xl md:text-5xl font-semibold">
          Our <span className="text-[#4ECB38]">Sponsors</span>
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-8 w-full">
          {/* Sponsor 1 */}
          <div className="flex justify-center items-center">
            <img
              src="satgov.png" /* Replace with your actual image path */
              alt="Ministry of Science and Technology"
              className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 object-contain"
            />
          </div>

          {/* Sponsor 2 */}
          <div className="flex justify-center items-center">
            <img
              src="adrio.png" /* Replace with your actual image path */
              alt="Adroitec"
              className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 object-contain"
            />
          </div>

          {/* Sponsor 3 */}
          <div className="flex justify-center items-center">
            <img
              src="syngenta.png" /* Replace with your actual image path */
              alt="Syngenta Group"
              className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
            />
          </div>

          {/* Sponsor 4 */}
          <div className="flex justify-center items-center">
            <img
              src="iiitd.png" /* Replace with your actual image path */
              alt="IIIT Delhi"
              className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 object-contain"
            />
          </div>

          {/* Sponsor 5 */}
          <div className="flex justify-center items-center">
            <img
              src="anw.png" /* Replace with your actual image path */
              alt="Agriculture and Water Technology"
              className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 object-contain"
            />
          </div>
        </div>
      </div>
      <div className="min-h-[60vh] bg-white flex flex-col justify-center p-8 lg:p-16">
        {/* Section Title */}
        <h2 className="font-heading text-3xl md:text-5xl font-semibold">
          Academic <span className="text-[#4ECB38]">Partners</span>
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 w-full">
          {/* Sponsor 1 */}
          <div className="flex justify-center items-center">
            <img
              src="a1.png" /* Replace with your actual image path */
              alt="Ministry of Science and Technology"
              className="w-24 h-24 sm:w-36 sm:h-36 lg:w-44 lg:h-44 object-contain"
            />
          </div>

          {/* Sponsor 2 */}
          <div className="flex justify-center items-center">
            <img
              src="a2.png" /* Replace with your actual image path */
              alt="Adroitec"
              className="w-24 h-24 m:w-36 sm:h-36 lg:w-44 lg:h-44 object-contain"
            />
          </div>

          {/* Sponsor 3 */}
          <div className="flex justify-center items-center">
            <img
              src="a3.png" /* Replace with your actual image path */
              alt="Syngenta Group"
              className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
            />
          </div>

          {/* Sponsor 5 */}
          <div className="flex justify-center items-center">
            <img
              src="anw.png" /* Replace with your actual image path */
              alt="Agriculture and Water Technology"
              className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 object-contain"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
