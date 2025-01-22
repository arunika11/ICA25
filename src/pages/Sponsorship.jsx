import React from "react";

const SponsorShipPage = () => {
  const contacts = [
    {
      name: "Dr. Mukesh Saini",
      role: "Program Co-Chair",
      email: "mukesh@iitrpr.ac.in",
    },
    {
      name: "Dr. Suman Kumar",
      role: "Sponsorship Co-Chair",
      email: "suman@iitrpr.ac.in",
    },
  ];
  return (
    <div className="min-h-screen ">
      <section
        id="home"
        className="relative bg-cover bg-center"
        style={{
          height: "60vh", // Background height
          backgroundImage: `url('calls.png')`,
        }}
      >
        <div className="flex items-center h-full">
          {/* Content */}
          <div className="mx-4 mt-10 sm:mx-8 lg:ml-20 lg:mt-32 w-full px-4 sm:px-6">
            {/* Heading */}
            <h3 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-semibold text-white">
              <span className="font-semibold text-[#4ECB38]">Sponsors</span>
            </h3>
          </div>
        </div>
      </section>
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-8 bg-white text-gray-800">
        <section className="mb-12">
          <h2 className="font-heading text-3xl sm:text-3xl lg:text-5xl font-semibold mb-8">
            Call for Sponsors
          </h2>
          <p className="font-body text-base sm:text-lg leading-relaxed mb-4">
            We invite your organisation to be part of the International
            Conference on Agriculture 2025 (ICA 25) being hosted in IIT
            Guwahati, India from 13 May – 16 May 2025.
          </p>
          <p className="font-body text-base sm:text-lg leading-relaxed mb-4">
            ICA24 is the premier international conference in the area of
            agriculture and attracts hundreds of abstract submissions and
            interest from those throughout the agriculture field around the
            world.
          </p>
          <p className="font-body text-base sm:text-lg leading-relaxed mb-4">
            The 2024 conference is anticipated to attract over 300 attendees
            from around the globe and we have a wide array of partnership
            opportunities available to suit your budget and ensure your brand
            has significant options for exposure throughout the event.
          </p>
          <p className="font-body text-base sm:text-lg leading-relaxed mb-4">
            As a sponsor you’ll have access to a captive audience of
            professionals from across the multiple industries, providing you
            with a unique opportunity to showcase your products and services.
          </p>
          <p className="font-body text-base sm:text-lg leading-relaxed mb-4">
            To ensure that you secure the highest levels of exposure, we
            encourage you to confirm your sponsorship as early as possible.
            Don’t wait any longer, join us at ICA24 in marvellous Delhi and take
            your organisation to the next level!
          </p>
          <p className="font-body text-base sm:text-lg leading-relaxed mb-4">
            As a sponsor you will ge a mention on the website, publicity emails,
            and posters etc. Please see below the last year's event coverage by
            various news papers.
            <br />
            The benefits of sponsorship are the following:
          </p>
          <ul className="font-body list-disc pl-6 space-y-2">
            <li>
              Maximum visibility during the pre-conference announcements and the
              conference.
            </li>
            <li>
              Development of familiarity with the innovation leaders of the
              agriculture automation field.
            </li>
            <li>
              One to one engagement opportunity with the Agriculture experts
              nationally and internationally.
            </li>
            <li>
              Early and in-depth exposure to ideas that will shape the future of
              agriculture-centric computation.
            </li>
            <li>
              Product and service demonstrations by a short oral conference talk
              and booth.
            </li>
            <li>
              Appreciation of attending soon-to-graduate students of the
              sponsor’s profile and opportunities for informal contacts during
              the conference.
            </li>
            <li>
              An opportunity to collaborate with researchers attending from both
              academia and industry.
            </li>
            <li>
              Permanent presence on the ICA 2025 website and social media posts.
            </li>
          </ul>
          <p className="font-body text-base sm:text-lg leading-relaxed my-8">
            <div class="w-[737px]">
              <span class="text-[#323232] text-2xl font-bold font-['Work Sans'] leading-snug">
                Sponsorship Tiers
              </span>
            </div>
          </p>
          <ul className="text-[#323232] text-lg font-normal font-['Work Sans'] leading-snug list-disc pl-6 space-y-2">
            <li>Diamond Sponsorship - INR 2,00,000</li>
            <li>Provision of a dedicated exhibition stall.</li>
            <li>
              Inclusion of industry-specific infographics in the registration
              kit.
            </li>
            <li>
              Participation of an industry representative in a panel discussion.
            </li>
            <li>
              An opportunity for an Industrial Talk by the representative
              (duration: 15 minutes).
            </li>
            <li>Three complimentary event registrations.</li>
            <li>Gold Sponsorship - INR 1,00,000</li>
            <li>Provision of a dedicated exhibition stall.</li>
            <li>
              An opportunity for an Industrial Talk by the representative
              (duration: 10 minutes).
            </li>
            <li>Two complimentary event registrations.</li>
            <li>Silver Sponsorship - INR 50,000</li>
            <li>Provision of a dedicated exhibition stall.</li>
            <li>One complimentary event registration.</li>
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="font-heading text-3xl sm:text-3xl lg:text-5xl font-semibold mb-8">
            Contacts
          </h2>
          <p className="font-body text-base sm:text-lg leading-relaxed mb-4">
            For questions regarding the sponsorship you can email the Program
            chair or Sponsorship Chairs via:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full font-body">
  {contacts.map((contact, index) => (
    <div
      key={index}
      className="border-2 border-black p-4 flex flex-col items-start"
    >
      <div className="flex justify-between w-full">
        <h3 className="text-lg font-bold text-[#4ECB38]">{contact.name}</h3>
        <p className="text-sm text-gray-600">{contact.role}</p>
      </div>
      <hr className="my-2 w-full border-gray-300" />
      <div className="flex items-center">
        <svg
          width="32"
          height="18"
          viewBox="0 0 32 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Message_light">
            <rect
              id="Rectangle 1"
              x="5.33301"
              y="1"
              width="21.3333"
              height="16"
              rx="2.66667"
              stroke="#333333"
              strokeWidth="1.33333"
            />
            <path
              id="Vector 3"
              d="M5.33301 5L14.8071 9.73705C15.5578 10.1124 16.4415 10.1124 17.1922 9.73705L26.6663 5"
              stroke="#333333"
              strokeWidth="1.33333"
            />
          </g>
        </svg>
        <p className="text-sm text-gray-800 ml-2">{contact.email}</p>
      </div>
    </div>
  ))}
</div>

        </section>
        <section>
        <div className="min-h-[60vh] bg-white flex flex-col justify-center py-8 lg:py-16">
        {/* Section Title */}
        <h2 className="font-heading text-3xl md:text-5xl font-semibold">
          Previous <span className="text-[#4ECB38]">Sponsors</span>
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-8 w-full">
          {/* Sponsor 1 */}
          <div className="flex justify-center items-center">
            <img
              src="satgov.png" /* Replace with your actual image path */
              alt="Ministry of Science and Technology"
              className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 object-contain"
            />
          </div>

          {/* Sponsor 2 */}
          <div className="flex justify-center items-center">
            <img
              src="adrio.png" /* Replace with your actual image path */
              alt="Adroitec"
              className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 object-contain"
            />
          </div>

          {/* Sponsor 3 */}
          <div className="flex justify-center items-center">
            <img
              src="syngenta.png" /* Replace with your actual image path */
              alt="Syngenta Group"
              className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
            />
          </div>

          {/* Sponsor 4 */}
          <div className="flex justify-center items-center">
            <img
              src="iiitd.png" /* Replace with your actual image path */
              alt="IIIT Delhi"
              className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 object-contain"
            />
          </div>

          {/* Sponsor 5 */}
          <div className="flex justify-center items-center">
            <img
              src="anw.png" /* Replace with your actual image path */
              alt="Agriculture and Water Technology"
              className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 object-contain"
            />
          </div>
        </div>
      </div>
        </section>
      </div>
    </div>
  );
};

export default SponsorShipPage;
