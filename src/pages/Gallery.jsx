import React from "react";

const Gallery = () => {
  const images = [
    "231.jpg",
    "232.jpg",
    "233.jpg",
    "234.jpg",
    "235.jpg",
    "236.JPG",
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
    "288.jpg",
  ];

  const images3 = [
    "301-min.jpg",
    "302-min.jpg",
    "303-min.jpg",
    "354-min.jpg",
    "304-min.jpg",
    "305-min.jpg",
    "320-min.png",
    "366.jpg",
    "306-min.jpg",
    "361-min.png",
    "362-min.png",
    "307-min.jpg",
    "359-min.jpg",
    "360-min.jpg",
    "308-min.jpg",
    "309-min.jpg",
    "310-min.jpg",
    "311-min.jpg",
    "312-min.jpg",
    "313-min.jpg",
    "314-min.jpg",
    "315-min.jpg",
    "316-min.jpg",
    "3255-min.jpg",
    "317-min.jpg",
    "318-min.jpg",
    "319-min.jpg",

    "321-min.png",
    "322-min.jpg",
    "323-min.jpg",
    "324-min.jpg",
    "325-min.jpg",
    "326-min.jpg",
    "327-min.jpg",
    "328-min.jpg",
    "329-min.jpg",
    "330-min.jpg",
    "331-min.jpg",
    "332-min.jpg",
    "333-min.jpg",
    "334-min.jpg",
    "335-min.jpg",
    "336-min.jpg",
    "363-min.jpg",
    "364-min.jpg",
    "365-min.jpg",
    "337-min.jpg",
    "338-min.jpg",
    "339-min.jpg",
    "340-min.jpg",
    "341-min.jpg",
    "342-min.jpg",
    "343-min.jpg",
    "344-min.jpg",
    "345-min.jpg",
    "346-min.jpg",
    "347-min.jpg",
    "348-min.jpg",
    "349-min.jpg",
    "350-min.jpg",
    "351-min.jpg",
    "352-min.jpg",
    "353-min.jpg",

    "355-min.jpg",
    "356-min.jpg",
    "357-min.jpg",
    "358-min.jpg",
    "359-min.jpg",
    "360-min.jpg",
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
              alt={`${image == "360-min.jpg" ? "avinash gupta": Image }  ${index + 1}`}
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
      <h3 className="font-heading text-3xl sm:text-4xl text-center lg:text-5xl font-semibold text-black m-24">
        ICA <span className="font-semibold text-[#4ECB38]">2025</span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 p-4">
        {images3.map((image, index) => (
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
