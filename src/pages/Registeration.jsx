import React from "react";

const RegisterationPage = () => {
  return (
    <div className="min-h-screen">
      <section
        id="home"
        className="relative bg-cover bg-center"
        style={{
          height: "60vh",
          backgroundImage: `url('5.jpg')`,
        }}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-70"
          style={{ zIndex: 1 }}
        ></div>

        <div className="flex items-center h-full">
          <div className="z-40 mx-4 mt-10 sm:mx-8 lg:ml-20 lg:mt-32 w-full px-4">
            <h3 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-semibold text-white">
              <span className="font-semibold text-[#4ECB38]">Registration</span>
            </h3>
          </div>
        </div>
      </section>
      <section className="z-40 font-body w-full px-16 flex flex-col sm:mt-16 lg:flex-row items-center justify-center lg:items-center sm:px-4 lg:px-24">
        <div className="w-full max-w-4xl bg-white rounded-lg p-4">
          <h4 className="font-heading text-2xl py-6 sm:text-3xl lg:text-4xl text-center font-semibold">
            Early Registration:{" "}
            <span className="text-[#4ECB38]">Until 08/05/2025</span>
          </h4>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-400 text-left">
              <thead>
                <tr className=" text-gray-900">
                  <th
                    className="border border-gray-400 px-4 py-2 text-center"
                    colSpan="2"
                  >
                    Indian Participants
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 px-4 py-3 font-medium">
                    Regular Registration
                  </td>
                  <td className="border border-gray-400 px-4 py-3">
                    INR 15,000/- + GST <br />
                    (= INR 17,700)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-3 font-medium">
                    Discounted Registration for Indian Faculty/Student
                  </td>
                  <td className="border border-gray-400 px-4 py-3">
                    INR 8,000/- + GST <br />
                    (= INR 9,440)
                  </td>
                </tr>
              </tbody>

              <thead>
                <tr className=" text-gray-900">
                  <th
                    className="border border-gray-400 px-4 py-2 text-center"
                    colSpan="2"
                  >
                    International Participants
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 px-4 py-3 font-medium">
                    Regular Registration
                  </td>
                  <td className="border border-gray-400 px-4 py-3">
                    USD 200 + GST <br />
                    (= USD 236)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-600 text-sm mt-4">
            <strong>Note:</strong> For each accepted paper/poster/demo,
            registration in one of the above categories (as per eligibility) is
            compulsory. However, one registration can support up to two
            papers/posters/demos.
          </p>
        </div>
      </section>
      <section className="z-40 font-body w-full px-16 flex flex-col sm:mt-16 lg:flex-row items-center justify-center lg:items-center sm:px-4 lg:px-24">
        <div className="w-full max-w-4xl bg-white rounded-lg p-4">
          <h4 className="font-heading text-2xl py-6 sm:text-3xl lg:text-4xl text-center font-semibold">
            Additional <span className="text-[#4ECB38]">Pages</span>
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-400 text-left">
              <tbody>
                <tr>
                  <td className="border border-gray-400 px-4 py-3 font-medium">
                    Max 4 extra pages
                  </td>
                  <td className="border border-gray-400 px-4 py-3">
                    INR 5,000 per page
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterationPage;
