import React from 'react';

const ProfileCard = ({ name, title, image, scholarUrl, linkedUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-[1.02] w-full max-w-sm">
      <div className="aspect-w-4 aspect-h-3">
        <img
          src={image || "/api/placeholder/400/300"}
          alt={name}
          className="w-full h-full object-cover"
          style={{ height: '400px' }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{title}</p>
        <div className="mt-4 flex justify-end space-x-2">
          <a
            href={linkedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#4ECB38] transition-colors duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m-6 6h6m-3-3v6"
              ></path>
            </svg>
          </a>
          <a
            href={scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#4ECB38] transition-colors duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l-9 5m18-5l-9 5m0 0l-9-4m9 4l9-4"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const WorkshopChairGrid = ({ chairs }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-wrap justify-center gap-6">
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