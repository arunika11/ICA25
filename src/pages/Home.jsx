import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import Speakers from "../components/Speakers";

const Home = () => {
  return (
    <div>
      <div className="min-h-screen font-sans overflow-hidden">
        <section
          id="home"
          className="relative bg-cover bg-center min-h-screen"
          style={{
            backgroundImage: `url('agriculture-bg.jpg')`,
          }}
        >
          <div className="min-h-screen flex items-center">
            <div className="mx-4 mt-28 sm:mx-8 lg:ml-20 lg:mt-44 w-full">
              <h2 className="font-heading text-xl sm:text-3xl font-semibold text-white">
                3rd International Conference on
              </h2>
              <h3 className="font-heading text-4xl sm:text-6xl font-semibold text-[#4ECB38]">
                Agriculture-Centric{" "}
                <span className="font-semibold text-white">Computation</span>
              </h3>
              <div
                class="mx-auto
            w-full md:w-10/12 lg:w-8/12
            px-6 mt-5 sm:mr-8 lg:mr-10
            text-end text-white
            text-base md:text-xl lg:text-3xl"
              >
                Jointly Organized by IIT Guwahati, NIT Arunachal and AWaDH, IIT Ropar
              </div>

              <div className="flex flex-col lg:flex-row mt-8 sm:mt-16 w-full justify-between items-start lg:items-center px-4 lg:px-10">
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

                <div className="flex flex-col space-y-8">
                  <div className="flex mx-auto space-x-4 mt-6 lg:mt-0 mr-10">
                    <a href="https://cmt3.research.microsoft.com/ICA2025">
                      <button className="font-body px-6 sm:px-8 py-2 bg-[#4ECB38] text-black font-medium hover:bg-green-600 transition">
                        Submission Link
                      </button>
                    </a>
                    <a href="/ica25/registeration">
                      <button className="font-body px-6 sm:px-8 py-2 border border-[#fff] text-white font-medium hover:bg-[#4ECB38] hover:text-black transition">
                        Register
                      </button>
                    </a>
                  </div>
                  <div
                    class="flex bg-red-600 
            p-1 font-heading 
            mt-6 lg:mt-0 
            mr-0 md:mr-5 lg:mr-10"
                  >
                    <h1
                      class="text-white mx-auto font-medium 
             text-base md:text-xl lg:text-2xl"
                    >
                      Result Announcement: 30th April, 2025
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
       
      <div className="flex flex-col lg:flex-row items-center mt-28 lg:items-start justify-between p-6 lg:p-16 min-h-[90vh]">
        <div className="lg:w-1/2 space-y-6 mx-auto">
          <h2 className="font-heading text-5xl font-semibold">
            About the <span className="text-[#4ECB38]">Event</span>
          </h2>
          <p className=" font-body text-lg leading-relaxed text-gray-700">
            We are thrilled to announce the third edition of the International
            Conference on Agriculture-Centric Computation (ICA 2025), to be held
            at IIT Guwahati. Building on the success of the previous editions at
            IIT Ropar (2023,<a className="text-blue-600 font-medium" href="https://link.springer.com/book/10.1007/978-3-031-43605-5"> Proceeding link </a>) and IIIT Delhi (2024,
           <a  className="text-blue-600 font-medium" href="https://link.springer.com/book/9783031744396"> Proceeding link</a>), this conference provides a vibrant platform for
            researchers at the intersection of agriculture and computing to
            share groundbreaking innovations. We welcome original contributions
            in areas such as IoT, Precision Agriculture, Crop Yield Prediction,
            Remote Sensing, Agricultural Datasets, and AI/ML applications in
            agriculture. Accepted papers will be published in the Springer CCIS
            book series, ensuring global reach and impact. Join us at ICA 2025
            as we continue fostering cutting-edge discussions and advancing the
            field of agriculture-centric computation.
          </p>
        </div>

        <div className="lg:w-1/2 mt-6 lg:mt-0 lg:pl-10">
          <img
            src="5.jpg"
            alt="Event Location"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
      <Speakers/>
      <div className="bg-[#333333] text-white p-8 lg:p-16 min-h-[60vh]">
        <h2 className="font-heading text-5xl font-semibold ">
          Conference <span className="text-[#4ECB38]">Themes</span>
        </h2>

        <div className="flex flex-wrap justify-between mt-16">
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <h3 className="text-xl font-semibold">AI/ML for Agriculture</h3>
            <p className="font-body text-lg leading-relaxed text-gray-300 mt-2">
              Explore how AI and ML are transforming agriculture by enabling
              smarter crop predictions, pest control, and optimized resource
              use, driving sustainable farming practices.
            </p>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <h3 className="text-xl font-semibold">Remote Sensing</h3>
            <p className=" font-body text-lg leading-relaxed text-gray-300 mt-2">
              Discover the power of remote sensing in agriculture, leveraging
              satellite imagery, drones, and sensors to monitor crops, assess
              soil health, and manage resources efficiently.
            </p>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <h3 className="text-xl font-semibold">Precision Agriculture</h3>
            <p className=" font-body text-lg leading-relaxed text-gray-300 mt-2">
              Delve into precision agriculture technologies like GPS, IoT, and
              robotics, offering data-driven solutions for efficient farming,
              higher yields, and reduced environmental impact.
            </p>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <h3 className=" font-body text-xl font-semibold">IOT</h3>
            <p className="text-lg leading-relaxed text-gray-300 mt-2">
              Uncover how IoT is revolutionizing agriculture with smart devices
              and sensors, enabling real-time monitoring, automated systems, and
              intelligent farm management.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[60vh] bg-white flex flex-col justify-center p-8 lg:p-16">
        <h2 className="font-heading text-3xl md:text-5xl font-semibold">
          Our <span className="text-[#4ECB38]">Sponsors</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-8 w-full">
          <div className="flex justify-center items-center">
            <img
              src="satgov.png" 
              alt="Ministry of Science and Technology"
              className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 object-contain"
            />
          </div>

          <div className="flex justify-center items-center">
            <img
              src="adrio.png" 
              alt="Adroitec"
              className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 object-contain"
            />
          </div>

          <div className="flex justify-center items-center">
            <img
              src="syngenta.png" 
              alt="Syngenta Group"
              className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
            />
          </div>

          <div className="flex justify-center items-center">
            <img
              src="iiitdd.png" 
              alt="IIIT Delhi"
              className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 object-contain"
            />
          </div>

          <div className="flex justify-center items-center">
            <img
              src="anw.png" 
              alt="Agriculture and Water Technology"
              className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 object-contain"
            />
          </div>
        </div>
        <div className="flex justify-center mt-8 w-full">
          <div className="flex justify-center items-center">
            <img
              src="sart.jpg" 
              alt="SART IITG"
              className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 object-contain"
            />
          </div>
        </div>
      </div>
      <div className="min-h-[60vh] bg-white flex flex-col justify-center p-8 lg:p-16">
        <h2 className="font-heading text-3xl md:text-5xl font-semibold">
          Academic <span className="text-[#4ECB38]">Partners</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 w-full">
          <div className="flex justify-center items-center">
            <img
              src="a1.png" 
              alt="IITG"
              className="w-24 h-24 sm:w-36 sm:h-36 lg:w-44 lg:h-44 object-contain"
            />
          </div>

          <div className="flex justify-center items-center">
            <img
              src="a2.png" 
              alt="NITM"
              className="w-24 h-24 m:w-36 sm:h-36 lg:w-44 lg:h-44 object-contain"
            />
          </div>

          <div className="flex justify-center items-center">
            <img
              src="a3.png"
              alt="NITA"
              className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
            />
          </div>

          <div className="flex justify-center items-center">
            <img
              src="anw.png"
              alt="Agriculture and Water Technology"
              className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 object-contain"
            />
          </div>
        </div>
        <div className="flex justify-center mt-8 w-full">
          <div className="flex justify-center items-center">
            <img
              src="iitrpr.png" 
              alt="IIT ROPAR"
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
