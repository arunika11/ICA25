import React from 'react';

const ProfileCard = ({ name, title, image, scholarUrl, linkedUrl }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-[1.02] w-full max-w-md">
      {/* Image container with responsive aspect ratio */}
      <div className="aspect-[3/3] w-full">
        <img 
          src={image || "/api/placeholder/400/300"} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Text Overlay with responsive padding and font sizes */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t flex justify-between from-black/80 to-transparent p-3 sm:p-4 md:p-5">
        <div className="flex-1 pr-4">
          <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold truncate">{name}</h3>
          <p className="text-gray-200 text-xs sm:text-sm md:text-base line-clamp-2">{title}</p>
        </div>
        
        {/* Responsive buttons container */}
        <div className="flex space-x-2 sm:space-x-3 items-start">
          {/* Arrow Icon Button */}
          <a 
            href={linkedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/button"
          >
            <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 flex items-center justify-center border border-white rounded 
                          transition-all duration-300 hover:bg-[#4ECB38] hover:border-[#4ECB38]
                          active:scale-95">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.6568 1.34315C13.6568 0.790867 13.2091 0.343152 12.6568 0.343152L3.65685 0.343152C3.10456 0.343152 2.65685 0.790867 2.65685 1.34315C2.65685 1.89544 3.10456 2.34315 3.65685 2.34315L11.6568 2.34315L11.6568 10.3432C11.6568 10.8954 12.1046 11.3432 12.6568 11.3432C13.2091 11.3432 13.6568 10.8954 13.6568 10.3432L13.6568 1.34315ZM2.05025 13.364L13.364 2.05026L11.9497 0.636045L0.636033 11.9498L2.05025 13.364Z"
                  fill="white"
                  className="transition-transform duration-300 group-hover/button:scale-110"
                />
              </svg>
            </div>
          </a>

          {/* Hat Icon Button */}
          <a 
            href={scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/button"
          >
            <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 flex items-center justify-center border border-white rounded 
                          transition-all duration-300 hover:bg-[#4ECB38] hover:border-[#4ECB38]
                          active:scale-95">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
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
                  className="transition-transform duration-300 group-hover/button:scale-110"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

// Container component with centered grid
const WorkshopChairGrid = ({ chairs }) => {
  // Calculate grid classes based on number of items
  const getGridClasses = (itemCount) => {
    if (itemCount === 1) {
      return 'grid justify-items-center';
    }
    if (itemCount === 2) {
      return 'grid sm:grid-cols-2 justify-items-center gap-6';
    }
    return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6';
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`${getGridClasses(chairs.length)} max-w-screen-xl mx-auto p-8`}>
        {chairs.length === 2 && <div className="hidden sm:block col-span-2 lg:col-span-3 lg:col-start-2 max-w-md"></div>}
        {chairs.map((chair, index) => (
          <ProfileCard
            key={index}
            name={chair.name}
            title={chair.title}
            image={chair.image}
            scholarUrl={chair.scholarUrl}
            linkedUrl={chair.linkedUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkshopChairGrid;