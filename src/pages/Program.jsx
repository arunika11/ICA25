import React from "react";

const ProgramPage = () => {
  const keynoteSpeakers = [
    {
      name: "Danilo Demarchi",
      profileUrl: "https://www.polito.it/en/staff?p=danilo.demarchi",
      image: "danileo.jpg",
    },
    {
      name: "Tomas Norton",
      profileUrl: "https://www.kuleuven.be/wieiswie/en/person/00108068",
      image: "toms.jpg",
    },
    {
      name: "Dhananjay Singh",
      profileUrl: "https://ist.psu.edu/directory/dvs6298",
      image: "dhanan.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section>
        <div className="flex items-center h-full p-4">
          <div className="mx-4 mt-10 sm:mx-8 lg:ml-20 lg:mt-32 w-full px-4 sm:px-6">
            {/* Single centered heading for all keynote speakers */}
            <h3 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-semibold text-white text-center">
              <span className="font-semibold text-[#4ECB38]">Keynote Speakers</span>
            </h3>
            {/* Keynote Speakers Cards */}
            <div className="mt-20 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center">
              {keynoteSpeakers.map((speaker, index) => (
                <div
                  key={index}
                  className="border-2 border-[#4ECB38] p-6 flex flex-col items-center bg-white shadow-lg rounded-lg max-w-sm w-full mx-auto"
                >
                  {/* Speaker photo with fixed dimensions */}
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-64 h-64 object-cover rounded-lg mb-4"
                  />
                  {/* Speaker name */}
                  <h3 className="text-lg font-bold text-[#4ECB38]">
                    {speaker.name}
                  </h3>
                  <hr className="my-2 w-full border-gray-300" />
                  {/* View Profile link */}
                  <div className="mt-4">
                    <a
                      href={speaker.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4ECB38] hover:underline"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramPage;
