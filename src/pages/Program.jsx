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
          session: "Paper Presentations - Session 1, Chair - Dr. Swati Shukla, VIT-AP University and Dr. Anamika Yadav, IIT Guwahati, Theme - Crop Protection and Monitoring",
          papers: [
            {
              id: "27",
              title:
                "Rice Crop Disease Detection using Hybrid DenseNet with Swin Transformer, Author: Snehal Veer (APCOER)",
            },
            {
              id: "74",
              title:
                "Enhancing Agricultural Intelligence: A Comparison of AI Models for Plant Disease Categorisation and Crop Yield Prediction, Authors: Jaspreet Kaur (Chandigarh university), Navjot Kaur (Punjabi University)",
            },
            {
              id: "31",
              title:
                "Early Disease Detection in Pearl Millet Using YOLO v11 Model for Improved Agricultural Monitoring, Authors: Aravinth J (Amrita School of Engineering), Chalmers  J (	Amrita School of Engineering), Harish Kumar  S R (Amrita School of Engineering), Senthil Kumar  T (	Amrita School of Engineering), Johnson  I (	Amrita School of Engineering)",
            },
            {
              id: "64",
              title:
                "SIPSNET: Advancing Saffron Impurity Prediction with Majority Voting Technique, Authors: Suhail manzoor (Central University of Jammu)",
            },
            {
              id: "23",
              title:
                "AgriFed: A Federated Learning Approach for Scalable and Secure Crop Disease Detection, Authors: HEMANT PANCHARIYA (DELHI TECHNOLOGICAL UNIVERSITY), NIYATI NARWAL (DELHI TECHNOLOGICAL UNIVERSITY), FARHAT QADRI (Indian Institute of Technology, Madras ), REJOY CHAKRABORTY (Indian Institute of Technology, Ropar, Punjab), PUNEET GOYAL (Indian Institute of Technology, Ropar, Punjab)",
            },
            {
              id: "52",
              title:
                "Optimal Hyperspectral Band selection using Amended Lyrebird Optimization Algorithm, Authors: Aravinth J (Amrita School of Engineering), Elza  George (	Amrita School of Engineering),  Sathishkumar  Samiappan (The University of Tennessee)",
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
          session: "Paper Presentations - Session 2, Chair - Prof. Ram Prakash Sharma, NIT Arunachal, Theme - Remote-Sensing in Agriculture",
          papers: [
            {
              id: "57",
              title:
                "Optimally Designed High-Efficiency Drone-Based Spray System for Precision Nutrient Delivery in Agricultural Farms, Authors: Sudhakar Kanaujia (Indian Institute of Technology Guwahati), Vaishali  Gangwar (Assistant Professor Department of Crop Physiology  College of Agriculture  Banda University of Agriculture and Technology,Banda), Ajay Dashora (Associated Faculty, Centre for Drone Technology Assistant Professor, Dept of Civil Engg, IIT Guwahati), Pradip Kumar Das (Head - Centre for Drone Technology, Professor, Computer Science & Engineering, IIT Guwahati)",
            },
            {
              id: "112",
              title:
                "Energy Consumption Analysis for a Robotic Arm in Vertical Farming Process: An Experimental Validation, Author: Priyanka Verma (IIT Ropar)",
            },
            {
              id: "103",
              title:
                "Swarm Robotics for Agricultural Drones: A Transformative Approach to Smart Farming, Authors: Devakumar T (National Engineering College,Kovilpatti), Arunsamuel T.S (National Engineering college), Seshora Besima A (National Engineering College,Kovilpatti), Sharon Geege A (National Engineering College)",
            },
            {
              id: "60",
              title:
                "A Model Based Comparative Study for Conventional and Drone Based Farming: Case Studies from India, Authors: Kondaka Shiva Sankar (INDIAN INSTITUTE OF TECHNOLOGY GUWAHATI), Ajay Dashora (INDIAN INSTITUTE OF TECHNOLOGY GUWAHATI), Pradip Kumar Das (INDIAN INSTITUTE OF TECHNOLOGY GUWAHATI)",
            },
            {
              id: "58",
              title:
                "Assessing applicability and adoption of agriculture-centric computation technologies in Punjab: A multi-district farmer survey, Authors: Samiksha Gupta (Plaksha University, Mohali, Punjab ), Navjot Kaur (Plaksha University, Mohali, Punjab)",
            },
            {
              id: "69",
              title:
                "Drone RCS Statistical Behaviour and its Implications for Agriculture Drones Air Traffic Management, Authors: Jan Pidanic (University of Pardubice), Pavel Sedivy (University of Pardubice), Gaurav Trivedi (Indian Institute of Technology Guwahati), Stephen Paine (University of Cape Town)",
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
            "From Lab to Land: Translating Agri-Tech Innovations into Scalable Solutions, by Prof. Pukhan (Moderator), Dr. Sukhen Chandra Das, Dr. Wangfyak Wasgsu, Dr. Panday, and Prof. David Lai",
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
          session: "Paper Presentations - Session 3, Chair - Dr. David Tlaisun Thawmthanga D.Litt, Central Agricultural University Imphal and College of Veterinary Science & Animal Husbandry , Selesih, Aizawal, Theme - Multimodal Deep Learning in Agriculture",
          papers: [
            {
              id: "6",
              title:
                "Assessing Multi-Mode Temporal PolSAR Data for Winter Wheat and Barley Discrimination Using Convolutional Neural Networks, Authors: Debanjan Chowdhury (Amity University Haryana), Sagar Kumar (Indian Institute of Technology Guwahati), Swarnendu Sekhar Ghosh (Indian Institute of Technology Bombay), Dipankar Mandal (Indian Institute of Technology Guwahati)",
            },
            {
              id: "63",
              title:
                "Optimized Conv-LSTM Model for Analyzing Negative Affective State Vocalization in Dairy Cattle for an Edge Device, Author: Hitesh Ramrakhiyani (Indian Institute of Technology Guwahati)",
            },
            {
              id: "72",
              title:
                "LeADS (Leaf Anomaly Detection System):Deep Learning Pipeline for Leaf Stress, Disease & Severity Estimation, Authors: Mayur Das (Indian Institute of Technology Ropar), Neeraj Goel (Indian Institute of Technology Ropar), Mukesh Saini (Indian Institute of Technology Ropar)",
            },
            {
              id: "93",
              title:
                "Multimodal Fusion for Cow Behavior Prediction, Authors: Ajeet Kumar (IIT ROPAR), Abhinav Upadhyay (IIT ROPAR), Varun Kukreti (IIT ROPAR), Vajja Yashaswini (IIT ROPAR), Shreya Bansal (IIT Ropar), Neeraj Goel (IIT ROPAR), Mukesh Saini (IIT ROPAR)",
            },
            {
              id: "77",
              title:
                "Deep Learning-Based Framework for Early Detection and Classification of Mango Crop Diseases, Authors: B Bhargavi (VIT-AP University), Sumesh Eratt Parameswaran (VIT-AP University)",
            },
            {
              id: "70",
              title:
                "Enhancing Large Language Model Performance for Agricultural Domain Translation via Specialized Dictionaries and Embeddings, Authors: Ms. Shyama Wilson (Uva Wellassa University), Athula Ginige (Western Sydney Univeristy), Krishan Warnakulasuriya (Deakin University), Dilum Wijesundara (University of Ruhuna)",
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
          session: "Paper Presentations - Session 4, Chair - Dr. Simrandeep singh, Postdoc, IIT Ropar, Theme - GIS and Multispectral Applications in Agriculture",
          papers: [
            {
              id: "98",
              title:
                "Real-Time DEM-Based Terrain and Step Farming Suitability Analysis via Geospatial Processing in VR, Authors: Rahul Rai (IIT Ropar), Reshu Bansal (IIT Mandi ), Shashi Shekhar Jha (IIT Ropar), Kohei Yoshida (Edify Co. Ltd. Japan), Kota Sudo (Edify Co. Ltd. Japan)",
            },
            {
              id: "104",
              title:
                "Sodium Ion Detection using Polymer-Based Sensor for Monitoring Soil Health in Agriculture, Authors: Devakumar T (National Engineering College,Kovilpatti), Arunsamuel T.S (National Engineering college), Seshora Besima A (National Engineering College,Kovilpatti), Sharon Geege A (National Engineering College)",
            },
            {
              id: "79",
              title:
                "Residual Biomass Utilization: A Review on Newly Emerging Technique for Mitigating Climate Change, Authors: Revathi Nagaraju Gundluri (Indian Institute of technology Guwahati), Rakesh Mishra (University of New Brunswick), Gaetan  Pelletier (National Hardwoods Research Institute ), Ajay Dashora (Indian Institute of technology Guwahati), Yun Zhang (University of New Brunswick)",
            },
            {
              id: "35",
              title:
                "Remote Sensing and Environmental parameter analysis of Rajpura, Punjab using GIS for Precision farming applications, Authors: Manvinder Sharma (Chitkara University, Rajpura), Rajneesh Talwar (Chitkara University Punjab), Satyajit Anand (Chitkara University Punjab), Harjinder Singh (Punjabi University, Patiala), Tejpal Sharma (Chitkara University, Punjab)",
            },
            {
              id: "59",
              title:
                "AgriRover: A GPS-Guided Smart Rover for Environmental Monitoring, Authors: Aditya Sahu (Koneru Lakshmaiah Education Foundation), P Haarika (Koneru Lakshmaiah Education Foundation), N Prabakaran (Koneru Lakshmaiah Education Foundation)",
            },
            {
              id: "83",
              title:
                "NIR spectroscopy based non-invasive assessment of tea quality, Authors: Onkar Sarma (Indian Institute of Technology, Delhi), Kavya Dashora (Indian Institute of Technology, Delhi)",
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
          session: "Paper Presentations - Session 5, Chair - Dr. Srinivas Naidu, Gitam University, Theme - IoT Application in Agriculture",
          papers: [
            {
              id: "56",
              title:
                "Real-Time Plant Disease Detection and Prevention  Using AI and IoT in Smart Agriculture, Author: Abhinav Garlapati (VRSEC)",
            },
            {
              id: "71",
              title:
                "A Detailed Perspective on Vertical Farming – An Innovative Agricultural Trend with AI/ML and Smart Robotics, Authors: Jyoti Kulhari (Indian Institute of Technology Guwahati), Ajay Dashora (Indian Institute of Technology Guwahati), Sparsh Johari (	Indian Institute of Technology Guwahati)",
            },
            {
              id: "88",
              title:
                "An IoT Smart Irrigation System using Raspberry Pi and ThingSpeak: Design, Implementation, and Validation, Author: Rajkumar Bhandari (Visva Bharati )",
            },
            {
              id: "75",
              title:
                "Integration of Mechanical Systems and IoT for Smart and Climate-Resilient Irrigation in Agriculture, Author: Hitendra Kumar Maharana (Synergy Institute of Technology, Bhubaneswar), Mahesh Vasantrao Kulkarni (Dr. Vishwanath Karad MIT World Peace University), Ramesh Nayak (Synergy Institute of Technology), Manmatha K. Roul (GITA Autonomous College, Bhubaneswar, Odisha), Saroj Kumar Sarangi  (National Institute of Technology, Jamshedpur), Suryavanshi Bhagyeshkumar Vijaybhai (Birla Vishwakarma Mahavidhyalya (BVM) Engineering College, Anand, Gujarat)",
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
          session: "Paper Presentations - Session 6, Chair - Dr. Andrew Roobert, IIT Guwahati, Theme - Advanced AI for Agriculture",
          papers: [
            {
              id: "3",
              title:
                "AgriMetSupport: An Interoperable Cyber-Physical System for Enhanced Agrometeorological Data Management, Author: Akhil Madhamshetty (University of North Carolina at Charlotte)",
            },
            {
              id: "87",
              title:
                "Comparative Analysis of DSSAT and APSIM Crop  Models for Wheat Yield Prediction in Chhattisgarh State of India, Authors: Shashi Bhushan Kumar (indian institute of technology kharagpur), Suyog  Balasaheb Khose (indian institute of technology kharagpur), Rajul  Upadhyay (Indian institute of technology kharagpur), Ashok Mishra (Indian institute of technology kharagpur)",
            },
            {
              id: "90",
              title:
                "Quantum Reinforcement Learning Framework for Agricultural Seed Treatment Optimization and Yield Prediction, Authors: Tamilarasi K (VIT Chennai), Isshaan Singh (VIT Chennai), Divyansh  Chawla (VIT Chennai), Raghav Jain (VIT Chennai)",
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
           All Events to be Held at the Conference Center, IIT Guwahati
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