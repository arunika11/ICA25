import React from "react";
import Patrons from "../components/Patrons";
const Organization = () => {
  const patrons = [
    {
      name: "Prof Devendra Jalihal",
      title: "Director, IITG",
      image: "iitgdirect.jpeg",
      scholarUrl:
        "https://scholar.google.com/citations?user=Bp9EBlMAAAAJ&hl=en",
      linkedUrl:
        "https://www.linkedin.com/in/devendra-jalihal-012202a7/?originalSubdomain=in",
    },
    {
      name: "Prof Rajeev Ahuja",
      title: "Director, IITRopar",
      image: "iitrprdirect.jpg", // Duplicate example
      scholarUrl:
        "https://scholar.google.com/citations?user=OqyvV_oAAAAJ&hl=en",
      linkedUrl: "https://www.linkedin.com/in/prof-rajeev-ahuja-6436b3335/",
    },
  ];
  const TechnicalChair = [
    {
      name: "Hanumant Singh Shekhawat",
      title: "IIT Guwahati",
      image: "hanumant.jpg",
      scholarUrl:"https://scholar.google.com/citations?hl=en&user=L7yWFlkAAAAJ",
            linkedUrl:"https://www.linkedin.com/in/hanumant-singh-shekhawat/" // Replace with actual image path
    },
    {
        name: "Dr. Aryabratta Sahu",
        title: "IIT Guwahati",
        image: "aryabartta.jpeg",
        scholarUrl:"https://scholar.google.co.in/citations?user=apzckLUAAAAJ&hl=en",
            linkedUrl:"https://www.linkedin.com/in/aryabartta-sahu-624563b/" // Replace with actual image path
      },
  ];
  const Tech = [
    {
        name: "Dr. Ajay Dashora",
        title: "IIT Guwahati",
        image: "ajay.png",
        scholarUrl:"https://scholar.google.co.in/citations?user=toDRhMoAAAAJ&hl=en",
              linkedUrl:"https://www.linkedin.com/in/dr-ajay-dashora-b439955/" // Duplicate example
      },
  ]
  return (
    <div>
      <section
        id="home"
        className="relative bg-cover bg-center"
        style={{
          height: "80vh", // Set the height to 70vh
          backgroundImage: `url('organizationbg.png')`,
        }}
      >
        <div
          className="flex items-center h-full" // Use h-full to occupy 100% of the section's height
        >
          {/* Content */}
          <div className="mx-4 mt-10 sm:mx-8 lg:ml-20 lg:mt-32 w-full">
            <h3 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-semibold text-white">
              Our
              <span className="font-semibold text-[#4ECB38] ">
                {" "}
                Organization
              </span>
            </h3>
            <div className="flex flex-col lg:flex-row mt-8 sm:mt-16 w-full justify-between items-start lg:items-center px-4 lg:px-10">
              {/* Description */}
              <div className="font-body space-y-4 lg:-ml-10 md:-ml-7 sm:-ml-6">
                <div className="flex items-center text-sm sm:text-base lg:text-lg text-white">
                  <p className="text-sm sm:text-lg md:text-xl w-full lg:w-2/4">
                    We are the organizers of the International Conference on
                    Agriculture-Centric Computation (ICA), dedicated to
                    advancing agriculture through computational innovations. Our
                    mission is to connect researchers, industry experts, and
                    policymakers to address agricultural challenges with
                    cutting-edge technology. By fostering collaboration and
                    promoting sustainability, we aim to drive meaningful
                    advancements in agriculture for a better future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Patrons patrons={patrons} Heading="Patrons" />
      <Patrons patrons={TechnicalChair} Heading="General Chairs" />
      <Patrons patrons={Tech} Heading="" />
    </div>
  );
};

export default Organization;