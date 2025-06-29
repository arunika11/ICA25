import React from "react";
const CallsPage = () => {
  const deadlines = [
    {
      title: "Paper Submission Deadline",
      date: "7th April 2025",
    },
    {
      title: "Acceptance Notification",
      date: "30th Apr 2025",
    },
    {
      title: "Camera Ready Submission",
      date: "1st May 2025",
    },
  ];

  return (
    <div>
      <section
        id="home"
        className="relative bg-cover bg-center"
        style={{
          height: "60vh",
          backgroundImage: `url('calls.png')`,
        }}
      >
        <div className="flex items-center h-full">
          <div className="mx-4 mt-10 sm:mx-8 lg:ml-20 lg:mt-32 w-full px-4 sm:px-6">
            <h3 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-semibold text-white">
              <span className="font-semibold text-[#4ECB38]"> Calls</span>
            </h3>

            <div className="flex flex-col lg:flex-row mt-4 sm:mt-6 lg:mt-8 w-full justify-between items-start lg:items-center">

              <div className="flex items-center justify-start lg:justify-end mt-6 lg:mt-0 w-full lg:w-4/4">
               <a href="https://cmt3.research.microsoft.com/ICA2025"> <button
                  style={{ height: "40px" }}
                  className="flex items-center gap-x-4 font-body px-6 sm:px-8 py-2 bg-[#4ECB38] text-black font-medium hover:bg-green-600 transition-all duration-300"
                >
                  Submissions
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.1421 1.42891C16.1421 0.876625 15.6944 0.42891 15.1421 0.42891L6.14214 0.42891C5.58985 0.42891 5.14214 0.876625 5.14214 1.42891C5.14214 1.98119 5.58985 2.42891 6.14214 2.42891H14.1421V10.4289C14.1421 10.9812 14.5899 11.4289 15.1421 11.4289C15.6944 11.4289 16.1421 10.9812 16.1421 10.4289L16.1421 1.42891ZM1.70711 16.2782L15.8492 2.13602L14.435 0.721803L0.292893 14.8639L1.70711 16.2782Z"
                      fill="#333333"
                    />
                  </svg>
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 py-8 md:py-16 lg:px-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-40 w-5/6">
          {deadlines.map((item, index) => (
            <div key={index} className="flex flex-col items-start text-left">
              <div className="bg-gray-800 p-3 rounded-sm flex items-center justify-center  ">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.9998 18V25.5C29.9998 28.3284 29.9998 29.7426 29.1211 30.6213C28.2424 31.5 26.8282 31.5 23.9998 31.5H9.74976C7.67869 31.5 5.99976 29.8211 5.99976 27.75V27.75C5.99976 25.6789 7.67869 24 9.74976 24H23.9998C26.8282 24 28.2424 24 29.1211 23.1213C29.9998 22.2426 29.9998 20.8284 29.9998 18V10.5C29.9998 7.67157 29.9998 6.25736 29.1211 5.37868C28.2424 4.5 26.8282 4.5 23.9998 4.5H11.9998C9.17133 4.5 7.75712 4.5 6.87844 5.37868C5.99976 6.25736 5.99976 7.67157 5.99976 10.5V27.75"
                    stroke="white"
                    stroke-width="1.5"
                  />
                  <path
                    d="M13.5 14.9998L15.4393 16.9392C16.0251 17.5249 16.9749 17.5249 17.5607 16.9392L22.5 11.9998"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>

              <div className="w-full border-t border-gray-300 mb-4"></div>

              <h3 className="text-lg font-semibold text-[#4ECB38] mb-2">
                {item.title}
              </h3>
              <p className="text-sm font-bold text-gray-900">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-8 bg-white text-gray-800">
        <section className="mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
            Regular Papers
          </h2>
          <p className="font-body text-base sm:text-lg leading-relaxed mb-4">
            We invite authors to submit their original research work on
            agriculture-centric computation. The topics of the conference
            include, but are not limited to:
          </p>
          <ul className="font-body list-disc pl-6 space-y-2">
            <li>IoT Technologies for Agriculture automation</li>
            <li>Deep learning methods for agriculture data analysis</li>
            <li>Cloud/edge computing for agriculture</li>
            <li>
              Analysis and applications of drone/satellite/smartphone-captured
              plant and landscape images
            </li>
            <li>Applications in precision agriculture</li>
            <li>Agriculture and water-related datasets</li>
            <li>
              Embedded systems, sensors and automation for agriculture systems
            </li>
            <li>Machine learning, Data analysis for livestock management</li>
            <li>Robotics in agriculture</li>
            <li>Agriculture surveillance and plant phenotyping</li>
            <li>
              Applications of hyper-spectral and multispectral imaging in
              agriculture
            </li>
            <li>
            Remote sensing application in agriculture
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
            Workshops/Tutorials/Demos
          </h2>
          <p className="font-body text-base sm:text-lg leading-relaxed mb-4">
            Proposals for tutorials/workshops/demos are being invited on the
            relevant themes. Tutorials and workshops can be half-day in length.
            The proposal should be submitted as an extended abstract (Max up to
            1000 words). The submission should include the following:
          </p>
          <ul className="font-body list-disc pl-6 space-y-2 mb-4">
            <li>A thematic synopsis of the content to be covered.</li>
            <li>A description of the proposer.</li>
            <li>Their pertinent credentials.</li>
          </ul>
          <p className="font-body text-base sm:text-lg leading-relaxed">
            The deadline is the same as the paper submission deadline. We will
            add the submission instructions for Workshops/Tutorials/Demos soon.
            You may get in contact with the corresponding chairs for further
            information.
          </p>
        </section>
        <section>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 mt-11 font-heading">
            Author Instructions
          </h2>
          <p className="font-body text-base sm:text-lg leading-relaxed mb-4">
            Full research papers should be between 10 to 12 pages, while short
            papers should be between 6 to 8 pages, in Springer LNCS format. For
            LaTeX and Word templates and furhter formatting information, please
            visit the following link on Springer website:
          </p>
          <a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"><button
            style={{ height: "50px" }}
            className="border-gray-500 border-2 flex items-center gap-x-4 font-body px-6 sm:px-8 py-2 mt-10 text-black font-medium hover:bg-gray-300 transition"
          >
            Click Here
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 3.5H20.5M20.5 3.5V9M20.5 3.5L12.5 11.5"
                stroke="#333333"
                stroke-width="1.3"
              />
              <path
                d="M11.5 5.5H7.5C6.39543 5.5 5.5 6.39543 5.5 7.5V16.5C5.5 17.6046 6.39543 18.5 7.5 18.5H16.5C17.6046 18.5 18.5 17.6046 18.5 16.5V12.5"
                stroke="#333333"
                stroke-width="1.3"
                stroke-linecap="round"
              />
            </svg>
          </button></a>
        </section>
        <section className="mb-24 ">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 mt-11 font-heading">
            Submissions
          </h2>
          <p className="font-body text-base sm:text-lg leading-relaxed mb-4">
            We are using Microsoft CMT for paper submission. Please use the
            following link for submission:
          </p>
          <a href="https://cmt3.research.microsoft.com/ICA2025"><button
            style={{ height: "50px" }}
            className="flex items-center gap-x-4 font-body px-6 sm:px-8 py-2 bg-[#4ECB38] text-black font-medium hover:bg-green-600 transition-all duration-300"
          >
            Submissions
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 3.5H20.5M20.5 3.5V9M20.5 3.5L12.5 11.5"
                stroke="#333333"
                stroke-width="1.3"
              />
              <path
                d="M11.5 5.5H7.5C6.39543 5.5 5.5 6.39543 5.5 7.5V16.5C5.5 17.6046 6.39543 18.5 7.5 18.5H16.5C17.6046 18.5 18.5 17.6046 18.5 16.5V12.5"
                stroke="#333333"
                stroke-width="1.3"
                stroke-linecap="round"
              />
            </svg>
          </button>
          </a>
        </section>
      </div>
    </div>
  );
};

export default CallsPage;
