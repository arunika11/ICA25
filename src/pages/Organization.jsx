import React from "react";

import WorkshopChairGrid from "../components/Example";
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
  const AdvisoryData = [
    {
      name: "David Choi",
      title: "Soongshil University",
      image: "choi.jpg",
      scholarUrl:
        "https://scholar.google.com/citations?user=-io3HPEAAAAJ&hl=en",
      linkedUrl:
        "https://www.linkedin.com/in/bong-jun-david-choi-419b91a/?trk=public_post_main-feed-card_reshare-text&originalSubdomain=kr",
    },
    {
      name: "Abdulmotaleb El Saddik",
      title: "University of Ottawa, Canada",
      image: "saddik.jpeg",
      scholarUrl: "https://scholar.google.ca/citations?user=VcOjgngAAAAJ&hl=en",
      linkedUrl:
        "https://www.linkedin.com/in/abdulmotaleb-el-saddik-1a58a79/?originalSubdomain=ca",
    },
    {
      name: "Bakul rao",
      title: "IIT Bombay",
      image: "bakul.jpg",
      scholarUrl:
        "https://scholar.google.com/citations?user=pmY5FWYAAAAJ&hl=en",
      linkedUrl: "https://www.linkedin.com/in/bakulrao/?originalSubdomain=in",
    },
  ];
  const AdvisoryData2 = [
    {
      name: "Mohammad Eid",
      title: "New York University Abu Dhabi, UAE",
      image: "eid.jpeg",
      scholarUrl:
        "https://scholar.google.com/citations?user=mCLMv-IAAAAJ&hl=en",
      linkedUrl:
        "https://www.linkedin.com/in/mohamad-eid-47b67247/?originalSubdomain=ca",
    },
    {
      name: "Dr. Ekta Kapoor",
      title: "Sc- ‘F’/Head, FFT Division, DST, Govenment of India",
      image: "ekta.jpeg",
      scholarUrl:
        "https://www.linkedin.com/in/ekta-kapoor-605bb02b/?originalSubdomain=in",
      linkedUrl: "https://dst.gov.in/aboutusadministrativesetup/dr-ekta-kapoor",
    },
    {
      name: "Dr. Pao Ann Hsiunh",
      title: "National Chung Cheng University",
      image: "ann.jpeg",
      scholarUrl:
        "https://scholar.google.com/citations?user=cJwCu0IAAAAJ&hl=en",
      linkedUrl: "https://www.linkedin.com/in/pao-ann-hsiung-a3a3797/",
    },
  ];
  // const TechnicalChair = [
  //   {
  //     name: "Hanumant Singh Shekhawat",
  //     title: "IIT Guwahati",
  //     image: "hanumant.jpg",
  //     scholarUrl:
  //       "https://scholar.google.com/citations?hl=en&user=L7yWFlkAAAAJ",
  //     linkedUrl: "https://www.linkedin.com/in/hanumant-singh-shekhawat/", // Replace with actual image path
  //   },
  //   {
  //     name: "Dr. Aryabratta Sahu",
  //     title: "IIT Guwahati",
  //     image: "aryabartta.jpeg",
  //     scholarUrl:
  //       "https://scholar.google.co.in/citations?user=apzckLUAAAAJ&hl=en",
  //     linkedUrl: "https://www.linkedin.com/in/aryabartta-sahu-624563b/", // Replace with actual image path
  //   },
  //   {
  //     name: "Dr. Ajay Dashora",
  //     title: "IIT Guwahati",
  //     image: "ajay.png",
  //     scholarUrl:
  //       "https://scholar.google.co.in/citations?user=toDRhMoAAAAJ&hl=en",
  //     linkedUrl: "https://www.linkedin.com/in/dr-ajay-dashora-b439955/", // Duplicate example
  //   },
  // ];
  const GeneralChair = [
    {
      name: "Sanginario Alessandro",
      title: "Researcher, eLiONS Laboratory",
      image: "sanginario.png",
      scholarUrl: "https://scholar.google.it/citations?user=CvLFHbIAAAAJ&hl=en",
      linkedUrl:
        "https://www.linkedin.com/in/alessandro-sanginario-422103109/?originalSubdomain=it", // Replace with actual image path
    },
    {
      name: "Gaurav Trivedi",
      title: "IIT Guwahati",
      image: "gaurav.jpg",
      scholarUrl:
        "https://scholar.google.co.in/citations?user=FYI_9IwAAAAJ&hl=en",
      linkedUrl:
        "https://www.linkedin.com/in/gaurav-trivedi-3b7a393/?originalSubdomain=in", // Replace with actual image path
    },
  ];
  const TechnicalProgramChair1 = [
    {
      name: "Mukesh Kumar Saini",
      title: "IIT Ropar",
      image: "mukesh.jpg",
      scholarUrl: "https://scholar.google.ca/citations?user=XpWL11EAAAAJ&hl=en",
      linkedUrl:
        "https://www.linkedin.com/in/mukesh-saini-052a1644/?originalSubdomain=in", // Replace with actual image path
    },
    {
      name: "Hanumant Singh Shekhawat",
      title: "IIT Guwahati",
      image: "hanumant.jpg",
      scholarUrl:
        "https://scholar.google.com/citations?hl=en&user=L7yWFlkAAAAJ",
      linkedUrl: "https://www.linkedin.com/in/hanumant-singh-shekhawat/", // Replace with actual image path
    },
  ];
  const TechnicalProgramChair2 = [
    {
      name: "Dr. Ajay Dashora",
      title: "IIT Guwahati",
      image: "ajay.png",
      scholarUrl:
        "https://scholar.google.co.in/citations?user=toDRhMoAAAAJ&hl=en",
      linkedUrl: "https://www.linkedin.com/in/dr-ajay-dashora-b439955/", // Duplicate example
    },
    {
      name: "Dr. Aryabratta Sahu",
      title: "IIT Guwahati",
      image: "aryabartta.jpeg",
      scholarUrl:
        "https://scholar.google.co.in/citations?user=apzckLUAAAAJ&hl=en",
      linkedUrl: "https://www.linkedin.com/in/aryabartta-sahu-624563b/", // Replace with actual image path
    },
    {
      name: "Neeraj Goel",
      title: "IIT Ropar",
      image: "neeraj.jpg",
      scholarUrl:
        "https://scholar.google.co.in/citations?user=hq7DCH8AAAAJ&hl=en",
      linkedUrl: "https://www.linkedin.com/in/neerajgoel/?originalSubdomain=in", // Duplicate example
    },
  ];

  const Sponsorship = [
    {
      name: "Jai Narayan Tripathi",
      title: "Assistant Professor, IIT Jodhpur",
      image: "jnt.jpg",
      scholarUrl:
        "https://scholar.google.com/citations?user=MOW-HycAAAAJ&hl=en",
      linkedUrl:
        "https://www.linkedin.com/in/jai-narayan-tripathi-b189a88/?originalSubdomain=in", // Duplicate example
    },
    {
      name: "Suman Kumar",
      title: " IIT Ropar",
      image: "smn.jpg",
      scholarUrl:
        " https://scholar.google.com/citations?user=zUAA1f9ajZ4C&hl=en",
      linkedUrl:
        "https://www.linkedin.com/in/suman-kumar-764667150/?originalSubdomain=in", // Duplicate example
    },
  ];
  const PublicityChair = [
    {
      name: "Simrandeep Singh",
      title: "IIT Ropar",
      image: "simrandeep.jpg",
      scholarUrl:
        "https://scholar.google.co.in/citations?user=qgOroUEAAAAJ&hl=en",
      linkedUrl:
        "https://www.linkedin.com/in/dr-simrandeep-singh-08b0b06a/?originalSubdomain=in", // Duplicate example
    },
    {
      name: "Monisa Qadiri",
      title: "Faculty Member, IUST, Jammu and Kashmir",
      image: "monisa.jpeg",
      scholarUrl:
        "https://scholar.google.co.in/citations?user=334T1x0AAAAJ&hl=en",
      linkedUrl:
        "https://www.linkedin.com/in/monisa-qadiri/?originalSubdomain=in", // Duplicate example
    },
  ];

  const LocalArrangementChair = [
    {
      name: "A.Andrew Roobert",
      title: "Postdoctoral Fellow, IIT Guwahati",
      image: "robert.jpg",
      scholarUrl:
        "https://scholar.google.co.in/citations?user=YC1w13cAAAAJ&hl=en",
      linkedUrl: "https://www.linkedin.com/in/andrewroobert/", // Duplicate example
    },
    {
      name: "Deepa Borah",
      title: "Project Associate, IIT Guwahati",
      image: "deepa.jpg",
      scholarUrl: "https://scholar.google.co.in/",
      linkedUrl: "https://www.linkedin.com/in/", // Replace with actual image path
    },
  ];
  const WorkShopChair = [
    {
      name: "Dr. Ajay Dashora",
      title: "IIT Guwahati",
      image: "ajay.png",
      scholarUrl:
        "https://scholar.google.co.in/citations?user=toDRhMoAAAAJ&hl=en",
      linkedUrl: "https://www.linkedin.com/in/dr-ajay-dashora-b439955/", // Duplicate example
    },
    {
      name: "Anamika Yadav",
      title: "Principal Project Associate, IIT Guwahati",
      image: "anamika.jpg",
      scholarUrl: "https://scholar.google.co.in/",
      linkedUrl: "https://www.linkedin.com/in/", // Replace with actual image path
    },
  ];
  const Registration = [
    {
      name: "Kalyan TV",
      title: "IIT Ropar",
      image: "kalyan.jpg",
      scholarUrl:
        "https://scholar.google.co.in/citations?user=EGcu2wsAAAAJ&hl=enn",
      linkedUrl:
        "https://www.linkedin.com/in/venkata-kalyan-t-29ab28a0/?originalSubdomain=in",
    },
    {
      name: "Yamuna Prasad",
      title: "IIT Jammu",
      image: "yam.jpg",
      scholarUrl:
        "https://scholar.google.co.in/citations?user=k0I5a_YAAAAJ&hl=hi",
      linkedUrl:
        "https://www.linkedin.com/in/yamuna-prasad-7a3a501a5/?originalSubdomain=in",
    },
  ];
  const DemoChair = [
    {
      name: "Puneet Goyal",
      title: "IIT Ropar",
      image: "puneet.jpeg",
      scholarUrl:
        "https://scholar.google.co.in/citations?user=VkREzegAAAAJ&hl=en",
      linkedUrl:
        "https://www.linkedin.com/in/drpuneetgoyal/?originalSubdomain=in",
    },
    {
      name: "Indu Lathwal",
      title: "National Dairy Research Institute, Karnal",
      image: "indu.jpeg",
      scholarUrl: "https://scholar.google.co.in/",
      linkedUrl:
        "https://www.linkedin.com/in/indu-lathwal-706416106/?originalSubdomain=in",
    },
    {
      name: "Tao Zhuo",
      title: "Northwest A&F University",
      image: "tao.jpeg",
      scholarUrl:
        "https://scholar.google.com/citations?user=q8Mfr6AAAAAJ&hl=en",
      linkedUrl: "https://www.linkedin.com/ ",
    },
  ];
  const Tutorial = [
    {
      name: "Shashank Tamaskar",
      title: "Plaksha University, Chandigarh",
      image: "shash.png",
      scholarUrl:
        "https://scholar.google.co.in/citations?user=xLyCBFwAAAAJ&hl=en",
      linkedUrl:
        "https://www.linkedin.com/in/shashank-tamaskar-67a2b919/?originalSubdomain=in",
    },
    {
      name: "Kavya Dasora",
      title: "IIT Delhi",
      image: "kavya.jpeg",
      scholarUrl: "https://kavyadashora.in/",
      linkedUrl:
        "https://www.linkedin.com/in/kavya-dashora-2a719448/?originalSubdomain=in",
    },
  ];
  const AwardChairs = [
    {
      name: "Anterpreet Bedi",
      title: "Thapar University Patiala",
      image: "anter.jpeg",
      scholarUrl:
        "https://scholar.google.co.in/citations?user=InU2XMsAAAAJ&hl=en",
      linkedUrl:
        "https://www.linkedin.com/in/anterpreet-kaur-bedi-526b1651/?originalSubdomain=in",
    },
    {
      name: "Pratibha Kumari",
      title: "University of Regensburg, Germany",
      image: "pratibha.png",
      scholarUrl:
        "https://scholar.google.com/citations?user=gm0ORicAAAAJ&hl=en",
      linkedUrl:
        "https://www.linkedin.com/in/pratibha-kumari-06a866b1/?originalSubdomain=de",
    },
    {
      name: "Priyankar Chaudhary",
      title: " Hochschule Aalen, Germany",
      image: "priyank.jpeg",
      scholarUrl:
        "https://scholar.google.com/citations?user=BT98TvIAAAAJ&hl=en",
      linkedUrl:
        "https://www.linkedin.com/in/prichoudhary/?originalSubdomain=in",
    },
  ];
  const Innovation = [
    {
      name: "Mukesh Kastav",
      title: "IIT Ropar",
      image: "radhika.jpg",
      scholarUrl:
        "https://scholar.google.com/",
      linkedUrl:"https://www.linkedin.com/in/radhika-trikha-671359102/?originalSubdomain=in",
    },
    {
      name: "Mukesh Kumar",
      title: "IIT Ropar",
      image: "mukess.jpeg",
      scholarUrl:
        "https://scholar.google.co.in/citations?user=cue0EzIAAAAJ&hl=en",
      linkedUrl:"https://www.linkedin.com/in/mukesh-kumar-19a5bb9/?originalSubdomain=in",
    }
  ]
  const Agriculture = [
    {
      name:"Rakesh Sharda",
      title:"Punjab Agriculture University, Ludhiana",
      image:"rakesh.jpeg",
      scholarUrl:"https://scholar.google.co.in/citations?user=2IUAWNsAAAAJ&hl=en",
      linkedUrl:"https://www.linkedin.com/in/rakesh-sharda-swe-028b089b/?originalSubdomain=in"
    },
    {
      name:"Rohitash",
      title:"SKUAST, Sri Nagar, India",
      image:"rohit.jpeg",
      scholarUrl:"https://scholar.google.co.in/ ",
      linkedUrl:"https://www.linkedin.com/in/rohitashw-kumar-15968756/?originalSubdomain=in"
    }
  ]
  return (
    <div>
      <section
        id="home"
        className="relative bg-cover bg-center"
        style={{
          height: "70vh", // Set the height to 70vh
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
                    The conference is organized by the Indian Institute of
                    Technology Guwahati, India and Indian Institute of
                    Technology Ropar, India. The conference is technically
                    co-sponsored by IEEE RAS and IEEE RAS-SIGHT. The conference
                    is also supported by the IEEE RAS Technical Committee on
                    Agricultural Robotics and Automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="  px-4 pt-8 sm:px-6">
        {" "}
        <h2 className=" my-auto text-3xl ml-8 sm:ml-16 sm:text-4xl md:text-5xl font-heading font-semibold   text-black">
          <span className="text-[#4ECB38]">Patrons</span>
        </h2>
      </div>
      <WorkshopChairGrid chairs={patrons} />
      <div className="  px-4 pt-8 sm:px-6">
        {" "}
        <h2 className=" my-auto text-3xl ml-8 sm:ml-16 sm:text-4xl md:text-5xl font-heading font-semibold   text-black">
          <span className="text-[#4ECB38]">General Chairs</span>
        </h2>
      </div>
      <WorkshopChairGrid chairs={GeneralChair} />
      <div className="  px-4 pt-8 sm:px-6">
        {" "}
        <h2 className=" my-auto text-3xl ml-8 sm:ml-16 sm:text-4xl md:text-5xl font-heading font-semibold   text-black">
          <span className="text-[#4ECB38]">Technical Program Chairs</span>
        </h2>
      </div>
      <WorkshopChairGrid chairs={TechnicalProgramChair1} />
      <WorkshopChairGrid chairs={TechnicalProgramChair2} />
      <div className="  px-4 pt-8 sm:px-6">
        {" "}
        <h2 className=" my-auto text-3xl ml-8 sm:ml-16 sm:text-4xl md:text-5xl font-heading font-semibold   text-black">
          <span className="text-[#4ECB38]">Advisory Board</span>
        </h2>
      </div>
      <WorkshopChairGrid chairs={AdvisoryData} />
      <WorkshopChairGrid chairs={AdvisoryData2} />
      <div className="  px-4 pt-8 sm:px-6">
        {" "}
        <h2 className=" my-auto text-3xl ml-8 sm:ml-16 sm:text-4xl md:text-5xl font-heading font-semibold   text-black">
          <span className="text-[#4ECB38]">Local Arrangement Chairs</span>
        </h2>
      </div>
      <WorkshopChairGrid chairs={LocalArrangementChair} />
      <div className="  px-4 pt-8 sm:px-6">
        {" "}
        <h2 className=" my-auto text-3xl ml-8 sm:ml-16 sm:text-4xl md:text-5xl font-heading font-semibold   text-black">
          <span className="text-[#4ECB38]">Publicity Chairs</span>
        </h2>
      </div>
      <WorkshopChairGrid chairs={PublicityChair} />
      <div className="  px-4 pt-8 sm:px-6">
        {" "}
        <h2 className=" my-auto text-3xl ml-8 sm:ml-16 sm:text-4xl md:text-5xl font-heading font-semibold   text-black">
          <span className="text-[#4ECB38]">Registration Chairs</span>
        </h2>
      </div>
      <WorkshopChairGrid chairs={Registration} />
      <div className="  px-4 pt-8 sm:px-6">
        {" "}
        <h2 className=" my-auto text-3xl ml-8 sm:ml-16 sm:text-4xl md:text-5xl font-heading font-semibold   text-black">
          <span className="text-[#4ECB38]">Demo Chairs</span>
        </h2>
      </div>
      <WorkshopChairGrid chairs={DemoChair} />
      <div className="  px-4 pt-8 sm:px-6">
        {" "}
        <h2 className=" my-auto text-3xl ml-8 sm:ml-16 sm:text-4xl md:text-5xl font-heading font-semibold   text-black">
          <span className="text-[#4ECB38]">Tutorial Chairs</span>
        </h2>
      </div>
      <WorkshopChairGrid chairs={Tutorial} />
      <div className="  px-4 pt-8 sm:px-6">
        {" "}
        <h2 className=" my-auto text-3xl ml-8 sm:ml-16 sm:text-4xl md:text-5xl font-heading font-semibold   text-black">
          <span className="text-[#4ECB38]">Award Chairs</span>
        </h2>
      </div>
      <WorkshopChairGrid chairs={AwardChairs} />
      <div className="  px-4 pt-8 sm:px-6">
        {" "}
        <h2 className=" my-auto text-3xl ml-8 sm:ml-16 sm:text-4xl md:text-5xl font-heading font-semibold   text-black">
          <span className="text-[#4ECB38]">Workshop Chairs</span>
        </h2>
      </div>
      <WorkshopChairGrid chairs={WorkShopChair} />
      <div className="  px-4 pt-8 sm:px-6">
        {" "}
        <h2 className=" my-auto text-3xl ml-8 sm:ml-16 sm:text-4xl md:text-5xl font-heading font-semibold   text-black">
          <span className="text-[#4ECB38]">
            Sponsorship & Industry Engagement Chairs
          </span>
        </h2>
      </div>
      <WorkshopChairGrid chairs={Sponsorship} />
      <div className="  px-4 pt-8 sm:px-6">
        {" "}
        <h2 className=" my-auto text-3xl ml-8 sm:ml-16 sm:text-4xl md:text-5xl font-heading font-semibold   text-black">
          <span className="text-[#4ECB38]">
          Innovation Chairs
          </span>
        </h2>
      </div>
      <WorkshopChairGrid chairs={Innovation} />
      <div className="  px-4 pt-8 sm:px-6">
        {" "}
        <h2 className=" my-auto text-3xl ml-8 sm:ml-16 sm:text-4xl md:text-5xl font-heading font-semibold   text-black">
          <span className="text-[#4ECB38]">Agriculture/Farmer connect</span>
        </h2>
      </div>
      <WorkshopChairGrid chairs={Agriculture} />
       
    </div>
  );
};

export default Organization;
