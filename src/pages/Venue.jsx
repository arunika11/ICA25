import React from "react";
import VenueCard from "../components/VenueCard";

const VenuePage = () => {
  const text = [
    {
      title:
        "Indian Institute of Technology Guwahati (IIT Guwahati), established in 1994, is a leading institute in India known for its excellence in education and research. Located in North Guwahati, the campus offers a serene environment by the Brahmaputra River, surrounded by lush hills. Guwahati, the gateway to Northeast India, boasts rich cultural heritage with landmarks like Kamakhya Temple and Umananda Island. The campus is 22 km from Lokpriya Gopinath Bordoloi International Airport. IIT Guwahati provides an inspiring setting for academic growth, complemented by the vibrant cultural experiences of the region.",
      heading: "Conference Venue",
      imgurl: "iitg3.jpg",
    },
    {
      title:
        "IIT Guwahati is about 22 km from Lokpriya Gopinath Bordoloi International Airport, reachable by taxi or Uber in around 45 minutes. For budget-friendly options, you can take an airport shuttle or local bus, with buses heading toward North Guwahati, where the institute is located. If arriving by train, Guwahati Railway Station is 20 km away. From there, taxis or Uber are available to reach the campus. Train reservations can be made on the IRCTC website. For those driving, the institute is accessible via the National Highway. The drive offers scenic views of the Brahmaputra River and lush hills surrounding the area. Transportation to IIT Guwahati is well-connected and convenient.",
      heading: "Transportation",
      imgurl: "airport.jpg",
    },
    {
      title:
        "Guwahati, the gateway to Northeast India, is known for its rich cultural heritage and breathtaking natural beauty. Visitors can explore iconic landmarks such as the Kamakhya Temple, one of the most revered shrines in India, Umananda Island, located in the middle of the Brahmaputra River, and the Assam State Museum, which showcases the region's history, art, and archaeology. The city also offers a culinary delight in traditional Assamese cuisine, featuring dishes like fish tenga and pitha. Local crafts, including silk weaving from Sualkuchi and pottery, highlight Assam’s artisanal heritage. Guwahati’s vibrant festivals, especially Bihu, mark the cultural spirit of the region with lively music, dance, and celebrations.",
      heading: "Accomodation",
      imgurl: "kamakhya.jpg",
    },
    {
      title:
        "Guwahati, the gateway to Northeast India, is known for its rich cultural heritage and breathtaking natural beauty. Visitors can explore iconic landmarks such as the Kamakhya Temple, one of the most revered shrines in India, Umananda Island, located in the middle of the Brahmaputra River, and the Assam State Museum, which showcases the region's history, art, and archaeology. The city also offers a culinary delight in traditional Assamese cuisine, featuring dishes like fish tenga and pitha. Local crafts, including silk weaving from Sualkuchi and pottery, highlight Assam’s artisanal heritage. Guwahati’s vibrant festivals, especially Bihu, mark the cultural spirit of the region with lively music, dance, and celebrations.",
      heading: "Tourism",
      imgurl: "tourism.jpg",
    },
  ];

  return (
    <div>
      <section
        id="home"
        className="relative bg-cover bg-center"
        style={{
          height: "90vh",
          backgroundImage: `url('5.jpg')`,
        }}
      >
        {/* Black Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-70"
          style={{ zIndex: 1 }}
        ></div>

        {/* Flex Content */}
        <div className="flex items-center h-full">
          <div className="z-40 mx-4 mt-10 sm:mx-8 lg:ml-20 lg:mt-40 w-full px-4">
            <h3 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-semibold text-white">
              <span className="font-semibold text-[#4ECB38]"> Venue</span>
            </h3>

            {/* Content Section */}
            <div className="flex flex-col mt-8 sm:mt-16 lg:flex-row w-full justify-between items-start lg:items-center px-2 sm:px-4 lg:px-10">
              <div className="font-body space-y-4">
                <div className="flex items-center text-sm sm:text-base lg:text-lg text-white">
                  <p className="text-sm sm:text-lg md:text-xl w-full lg:w-2/4">
                    The International Conference on Agriculture-Centric
                    Computation (ICA) will be held at IIT Guwahati, one of
                    India’s leading institutes known for its excellence in
                    research and innovation. Located along the scenic
                    Brahmaputra River, the IIT Guwahati campus offers a serene
                    and inspiring environment. As the gateway to Northeast
                    India, Guwahati is a vibrant city known for its rich
                    culture, natural beauty, and warm hospitality, making it the
                    perfect setting for collaboration and knowledge sharing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Cards */}
      <div className="flex flex-col space-y-6 mt-8 px-4 lg:px-10">
        {text.map((item, index) => (
          <VenueCard
            key={index}
            heading={item.heading}
            text={item.title}
            imgurl={item.imgurl}
          />
        ))}
      </div>
    </div>
  );
};

export default VenuePage;
