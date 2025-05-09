import React from "react";

const ProgramPage = () => {
  const keynoteSpeakers = [
    {
      name: "Prof. Danilo Demarchi",
      title: "Politecnico di Torino, Italy",
      profileUrl: "https://www.polito.it/en/staff?p=danilo.demarchi",
      image: "danileo.jpg",
    },
    {
      name: "Prof. Tomas Norton",
      title: "KU Leuven, Belgium",
      profileUrl: "https://www.kuleuven.be/wieiswie/en/person/00108068",
      image: "toms.jpg",
    },
    {
      name: "Prof. Dhananjay Singh",
      title: "Penn State University, USA",
      profileUrl: "https://ist.psu.edu/directory/dvs6298",
      image: "dhanan.png",
    },
  ];

  const scheduleData = [
    {
      day: "DAY 0",
      date: "13th May 2025, Tuesday",
      sessions: [
        { time: "14:30 – 15:15", session: "Inauguration" },
        {
          time: "15:15 – 16:00",
          session: "Workshop",
          speaker: "Prof. Kavya Dashora, IIT Delhi",
        },
        { time: "16:00 – 16:30", session: "Tea Break" },
        {
          time: "16:30 – 17:30",
          session: "Workshop",
          speaker: "Prof. Dipankar Mandal, IIT Guwahati",
        },
        { time: "19:30 onward", session: "Dinner" },
      ],
    },
    {
      day: "DAY 1 - MORNING",
      date: "14th May 2025, Wednesday",
      sessions: [
        {
          time: "09:00 – 09:45",
          session: "Keynote 1",
          speaker: "Prof. Tomas Norton, KU Leuven, Belgium",
        },
        {
          time: "09:45 – 10:30",
          session: "Keynote 2",
          speaker: "Prof. Danilo Demarchi, Politecnico di Torino, Italy",
        },
        { time: "10:30 – 11:00", session: "Tea Break" },
        {
          time: "11:00 – 12:30",
          session: "Paper Presentations - Session 1",
          papers: [
            {
              id: "27",
              title:
                "Rice Crop Disease Detection using Hybrid DenseNet with Swin Transformer",
            },
            {
              id: "74",
              title:
                "Enhancing Agricultural Intelligence: A Comparison of AI Models for Plant Disease Categorisation and Crop Yield Prediction",
            },
            {
              id: "31",
              title:
                "Early Disease Detection in Pearl Millet Using YOLO v11 Model for Improved Agricultural Monitoring",
            },
            {
              id: "64",
              title:
                "SIPSNET: Advancing Saffron Impurity Prediction with Majority Voting Technique",
            },
            {
              id: "23",
              title:
                "AgriFed: A Federated Learning Approach for Scalable and Secure Crop Disease Detection",
            },
            {
              id: "52",
              title:
                "Optimal Hyperspectral Band selection using Amended Lyrebird Optimization Algorithm",
            },
          ],
        },
        { time: "12:30 – 14:00", session: "Lunch Break" },
      ],
    },
    {
      day: "DAY 1 - AFTERNOON",
      date: "14th May 2025, Wednesday",
      sessions: [
        {
          time: "14:00 – 14:30",
          session: "Invited Talk 1",
          speaker: "Prof. Kavya Dashora, IIT Delhi",
        },
        {
          time: "14:30 – 16:00",
          session: "Paper Presentations - Session 2",
          papers: [
            {
              id: "57",
              title:
                "Optimally Designed High-Efficiency Drone-Based Spray System for Precision Nutrient Delivery in Agricultural Farms",
            },
            {
              id: "112",
              title:
                "Energy Consumption Analysis for a Robotic Arm in Vertical Farming Process: An Experimental Validation",
            },
            {
              id: "103",
              title:
                "Swarm Robotics for Agricultural Drones: A Transformative Approach to Smart Farming",
            },
            {
              id: "60",
              title:
                "A Model Based Comparative Study for Conventional and Drone Based Farming: Case Studies from India",
            },
            {
              id: "58",
              title:
                "Assessing applicability and adoption of agriculture-centric computation technologies in Punjab: A multi-district farmer survey",
            },
            {
              id: "69",
              title:
                "Drone RCS Statistical Behaviour and its Implications for Agriculture Drones Air Traffic Management",
            },
          ],
        },
        { time: "16:00 – 16:30", session: "Tea Break" },
      ],
    },
    {
      day: "DAY 1 - EVENING",
      date: "14th May 2025, Wednesday",
      sessions: [
        {
          time: "16:30 – 17:00",
          session: "Invited Talk 2",
          speaker: "Bala Natarajan (Online) , Kansas State University, Manhattan	",
        },
        {
          time: "17:00 – 18:00",
          session: "Panel Discussion",
          speaker:
            "From Lab to Land: Translating Agri-Tech Innovations into Scalable Solutions, by Prof. Pukhan (Moderator), Dr. Sukhen Chandra Das, Dr. Wangfyak Wasgsu, Dr. Pandav Kharel, and Prof. David Lal",
        },
        { time: "19:30 onward", session: "Dinner" },
      ],
    },
    {
      day: "DAY 2 - MORNING",
      date: "15th May 2025, Thursday",
      sessions: [
        {
          time: "09:00 – 09:45",
          session: "Keynote 3",
          speaker: "Prof. Dhananjay Singh , Penn State University, USA",
        },
        {
          time: "09:45 – 10:30",
          session: "COMPAG Workshop",
          speaker: "Prof. Tomas Norton, KU Leuven, Belgium  and S. Sree Ranjani,  Elsevier",
        },
        { time: "10:30 – 11:00", session: "Tea Break" },
        {
          time: "11:00 – 12:30",
          session: "Paper Presentations - Session 3",
          papers: [
            {
              id: "6",
              title:
                "Assessing Multi-Mode Temporal PolSAR Data for Crop Classification using Deep Learning",
            },
            {
              id: "63",
              title:
                "Optimized Conv-LSTM Model for Early Prediction of Crop Yield from Satellite Imagery",
            },
            {
              id: "72",
              title:
                "LEADS (Leaf Anomaly Detection System): A Real-Time Edge Computing Solution",
            },
            {
              id: "93",
              title:
                "Multimodal Fusion for Cow Behavior Prediction in Smart Dairy Farms",
            },
            {
              id: "77",
              title:
                "Deep Learning-Based Framework for Automatic Plant Phenotyping from UAV Imagery",
            },
            {
              id: "70",
              title:
                "Enhancing Large Language Model Performance for Agricultural Question Answering Systems",
            },
          ],
        },
        { time: "12:30 – 14:00", session: "Lunch Break" },
      ],
    },
    {
      day: "DAY 2 - AFTERNOON",
      date: "15th May 2025, Thursday",
      sessions: [
        {
          time: "14:00 – 14:30",
          session: "Invited Talk 3",
          speaker:
            "Ajay Dashora, IIT Guwahati",
        },
        {
          time: "14:30 – 16:00",
          session: "Paper Presentations - Session 4",
          papers: [
            {
              id: "98",
              title:
                "Real-Time DEM-Based Terrain and Step Farming Suitability Analysis",
            },
            {
              id: "104",
              title:
                "Sodium Ion Detection using Polymer-Based Sensor for Soil Quality Assessment",
            },
            {
              id: "79",
              title:
                "Residual Biomass Utilization: IoT-Enabled Smart Monitoring System",
            },
            {
              id: "35",
              title:
                "Remote Sensing and Environmental parameter analysis for Crop Stress Detection",
            },
            {
              id: "59",
              title:
                "AgriRover: A GPS-Guided Smart Rover for Soil Sampling and Analysis",
            },
            {
              id: "83",
              title:
                "NIR spectroscopy based non-invasive assessment of fruit ripeness",
            },
          ],
        },
        { time: "16:00 – 16:30", session: "Tea Break" },
        
      ],
    },
    {
      day: "DAY 2 - EVENING",
      date: "15th May 2025, Thursday",
      sessions: [
        {
          time: "16:30 – 17:45",
          session: "Paper Presentations - Session 5",
          papers: [
            {
              id: "56",
              title:
                "Real-Time Plant Disease Detection and Prevention using Edge AI",
            },
            {
              id: "71",
              title:
                "A Detailed Perspective on Vertical Farming: Technologies and Challenges",
            },
            {
              id: "88",
              title:
                "An IoT Smart Irrigation System with Predictive Analytics for Water Conservation",
            },
            {
              id: "75",
              title:
                "Integration of Mechanical Systems and IoT for Automated Greenhouse Management",
            },
          ],
        },
        { time: "19:30 onward", session: "Dinner" },
      ]
    },
    {
      day: "DAY 3",
      date: "16th May 2025, Friday",
      sessions: [
        {
          time: "09:30 – 10:00",
          session: "Invited Talk 4",
          speaker:
            "Sudip Mitra, IIT Guwahati",
        },
        { time: "10:00 – 10:30", session: "Tea Break" },
        {
          time: "10:30 – 11:15",
          session: "Paper Presentations - Session 6",
          papers: [
            {
              id: "3",
              title:
                "AgriMetSupport: An Interoperable Cyber-Physical System for Enhanced Agrometeorological Data Management",
            },
            {
              id: "87",
              title:
                "Comparative Analysis of DSSAT and APSIM Crop  Models for Wheat Yield Prediction in Chhattisgarh State of India",
            },
            {
              id: "90",
              title:
                "Quantum Reinforcement Learning Framework for Agricultural Seed Treatment Optimization and Yield Prediction",
            },
          ],
        },
        { time: "11:15 – 14:00", session: "Closing Ceremony & Lunch" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white mt-16">
      {/* Keynote Speakers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div className="w-1/2 h-1 bg-green-100 rounded-full"></div>
          </div>
          <div className="relative">
            <h2 className="font-heading text-6xl text-black font-semibold ">
              Keynote <span className="text-[#4ECB38]">Speakers</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Distinguished experts sharing groundbreaking insights and innovative perspectives
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {keynoteSpeakers.map((speaker, index) => (
            <div key={index} className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative h-72 px-16 py-8 overflow-hidden">
                <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20" />
                <div className="absolute top-4 right-4 bg-[#4ECB38] text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                  Keynote Speaker
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">{speaker.name}</h3>
                <p className="text-gray-600 mt-1">{speaker.title}</p>
                <div className="mt-6">
                  <a href={speaker.profileUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#4ECB38] hover:bg-[#3EAE28] transition-colors duration-300 group">
                    View Profile
                    <svg className="ml-2 -mr-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#4ECB38] rounded-xl transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-green-50 px-8 py-4 rounded-full">
            <span className="text-[#4ECB38] font-medium">
              More speakers to be announced soon...
            </span>
          </div>
        </div>
      </section>

      {/* Program Schedule */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-12">
          <h2 className="font-heading text-5xl text-black font-semibold">
            Program <span className="text-[#4ECB38]">Schedule</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Details of Keynote Speakers and Invited Talks will be updated soon along with venue.
          </p>
        </div>

        <div className="space-y-12">
          {scheduleData.map((dayData, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-[#4ECB38] px-6 py-4">
                <h3 className="text-2xl font-bold text-white">{dayData.day}</h3>
                <p className="text-white/90">{dayData.date}</p>
              </div>
              <div className="divide-y divide-gray-100">
                {dayData.sessions.map((session, idx) => (
                  <div key={idx} className="p-6 hover:bg-gray-50 transition-colors duration-150">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="w-full md:w-1/5">
                        <span className="font-semibold text-gray-800 bg-green-50 px-3 py-1 rounded-md">
                          {session.time}
                        </span>
                      </div>
                      <div className="w-full md:w-4/5">
                        <h4 className="text-lg font-medium text-gray-900">
                          {session.session}
                          {session.speaker && (
                            <span className="text-gray-600 ml-2">- {session.speaker}</span>
                          )}
                        </h4>
                        {session.papers && (
                          <div className="mt-3 space-y-3">
                            {session.papers.map((paper, paperIdx) => (
                              <div key={paperIdx} className="pl-4 border-l-2 border-[#4ECB38]">
                                <p className="text-sm text-gray-500">
                                  Paper ID: <span className="font-medium">{paper.id}</span>
                                </p>
                                <p className="text-gray-800">{paper.title}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProgramPage;