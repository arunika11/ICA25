import React from "react";

const Gallery = () => {
  const images = [
    "231.jpg",
    "232.jpg",
    "233.jpg",
    "234.jpg",
    "235.jpg",
    "236.jpg",
    "237.jpg",
    "238.jpg",
  ];
  const images2 = [
    "241.jpg",
    "242.jpg",
    "243.jpg",
    "244.jpg",
    "245.jpg",
    "246.jpg",
    "247.jpg",
    "248.jpg",
    "249.jpg",
    "250.jpg",
    "251.jpg",
    "252.jpg",
    "253.jpg",
    "254.jpg",
    "255.jpg",
    "256.jpg",
    "257.jpg",
    "258.jpg",
    "259.jpg",
    "260.jpg",
    "261.jpg",
    "262.jpg",
    "263.jpg",
    "264.jpg",
    "265.jpg",
    "266.jpg",
    "267.jpg",
    "268.jpg",
    "269.jpg",
    "270.jpg",
    "271.jpg",
    "272.jpg",
    "273.jpg",
    "274.jpg",
    "275.jpg",
    "276.jpg",
    "277.jpg",
    "278.jpg",
    "279.jpg",
    "280.jpg",
    "281.jpg",
    "282.jpg",
    "283.jpg",
    "284.jpg",
    "285.jpg",
    "286.jpg",
    "287.jpg",
    "288.jpg"
];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-cover bg-center"
        style={{
          height: "60vh", // Background height
          backgroundImage: `url('calls.png')`,
        }}
      >
        <div className="flex items-center h-full">
          <div className="mx-4 mt-10 sm:mx-8 lg:ml-20 lg:mt-32 w-full px-4 sm:px-6">
            <h3 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-semibold text-white">
              <span className="font-semibold text-[#4ECB38]">Gallery</span>
            </h3>
          </div>
        </div>
      </section>
      <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-center font-semibold text-black m-24">
        ICA <span className="font-semibold text-[#4ECB38]">2023</span>
      </h3>
      {/* Gallery Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-[500px] h-[300px] object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
      <h3 className="font-heading text-3xl sm:text-4xl text-center lg:text-5xl font-semibold text-black m-24">
        ICA <span className="font-semibold text-[#4ECB38]">2024</span>
      </h3>
      {/* Gallery Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 p-4">
        {images2.map((image, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-[500px] h-[300px] object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
