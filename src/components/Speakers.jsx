import React from "react";

const ProgramPage = () => {
  const keynoteSpeakers = [
    {
      name: "Prof. Danilo Demarchi",
      title: "Politecnico di Torino, Italy",
      profileUrl: "https://www.polito.it/en/staff?p=danilo.demarchi",
      image: "danileo.jpg",
    },
    {
      name: "Prof. Tomas Norton",
      title: "KU Leuven, Belgium",
      profileUrl: "https://www.kuleuven.be/wieiswie/en/person/00108068",
      image: "toms.jpg",
    },
    {
      name: "Prof. Dhananjay Singh",
      title: "Penn State University, USA",
      profileUrl: "https://ist.psu.edu/directory/dvs6298",
      image: "dhanan.png",
    },
  ];

  return (
    <div className="bg-[#fff] p-8 lg:p-16 min-h-[60vh]">
          <div className="text-left relative">
          {/* <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div className="w-1/2 h-1 bg-green-100 rounded-full"></div>
          </div> */}
          <div className="relative">
          <h2 className="font-heading text-5xl text-black font-semibold ">
          Keynote <span className="text-[#4ECB38]">Speakers</span>
        </h2>
            {/* <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Distinguished experts sharing groundbreaking insights and innovative perspectives
            </p> */}
          </div>
        </div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
      

        {/* Speakers Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {keynoteSpeakers.map((speaker, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Speaker Image */}
              <div className="relative h-72 px-16 py-8 overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20" />
                <div className="absolute top-4 right-4 bg-[#4ECB38] text-white px-3 py-1 rounded-full text- font-medium shadow-sm">
                  Keynote Speaker
                </div>
              </div>

              {/* Speaker Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">{speaker.name}</h3>
                <p className="text-gray-600 mt-1">{speaker.title}</p>
                <div className="mt-6">
                  <a
                    href={speaker.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#4ECB38] hover:bg-[#3EAE28] transition-colors duration-300 group"
                  >
                    View Profile
                    <svg
                      className="ml-2 -mr-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#4ECB38] rounded-xl transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Decorative Footer
        <div className="mt-16 text-center">
          <div className="inline-block bg-green-50 px-8 py-4 rounded-full">
            <span className="text-[#4ECB38] font-medium">
              More speakers to be announced soon...
            </span>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default ProgramPage;