import React from "react";

const Patrons = ({ patrons , Heading }) => {
  console.log(patrons);
  return (
    <section className="ml-4  py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl ml-16 sm:text-4xl md:text-5xl font-heading font-semibold mb-6 sm:mb-10 text-black">
          <span className="text-[#4ECB38]">{Heading}</span>
        </h2>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${Math.min(
            patrons.length,
            4
          )} lg:grid-cols-${Math.min(patrons.length, 4)} gap-8`}
        >
          {patrons.map((patron, index) => (
            <div
              key={index}
              className="relative group overflow-hidden w-full sm:w-3/4 md:w-full lg:w-3/4 mx-auto shadow-lg "
            >
              {/* Patron Image */}
              <img
                src={patron.image}
                alt={patron.name}
                className="w-full h-64 sm:h-72 lg:h-80 object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-lg sm:text-xl font-semibold font-heading">
                  {patron.name}
                </p>
                <p className="text-xs sm:text-sm font-body">{patron.title}</p>
              </div>

              {/* Icons */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                {/* Arrow Icon */}<a href={patron.linkedUrl}>
                <div className="w-20 sm:w-28 h-8 sm:h-11 flex items-center justify-center border border-white rounded transition-colors duration-300 hover:bg-[#4ECB38]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.6568 1.34315C13.6568 0.790867 13.2091 0.343152 12.6568 0.343152L3.65685 0.343152C3.10456 0.343152 2.65685 0.790867 2.65685 1.34315C2.65685 1.89544 3.10456 2.34315 3.65685 2.34315L11.6568 2.34315L11.6568 10.3432C11.6568 10.8954 12.1046 11.3432 12.6568 11.3432C13.2091 11.3432 13.6568 10.8954 13.6568 10.3432L13.6568 1.34315ZM2.05025 13.364L13.364 2.05026L11.9497 0.636045L0.636033 11.9498L2.05025 13.364Z"
                      fill="white"
                      className=""
                    />
                  </svg>
                  
                </div>
                </a>
                {/* Hat Icon */}
                <a href={patron.scholarUrl}>
                <div className="w-20 sm:w-28 h-8 sm:h-11  hover:bg-[#4ECB38] flex items-center justify-center border border-white rounded transition-colors duration-300">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.22251 9.81L4.21501 13.3275C4.21501 14.28 4.95001 15.3 5.85001 15.6L8.24251 16.395C8.65501 16.53 9.33751 16.53 9.75751 16.395L12.15 15.6C13.05 15.3 13.785 14.28 13.785 13.3275V9.8475M16.05 11.25V6.75M7.53751 1.8975L3.02251 4.845C1.57501 5.79 1.57501 7.905 3.02251 8.85L7.53751 11.7975C8.34751 12.33 9.68251 12.33 10.4925 11.7975L14.985 8.85C16.425 7.905 16.425 5.7975 14.985 4.8525L10.4925 1.905C9.68251 1.365 8.34751 1.365 7.53751 1.8975Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className=""
                    />
                  </svg>
                </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Patrons;